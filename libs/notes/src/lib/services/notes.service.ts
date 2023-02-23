import { Inject, Injectable } from "@angular/core";
import { IDatastoreService } from "@d-workspace/interfaces";
import { BehaviorSubject, combineLatest, filter, map } from "rxjs";
import { v4 as uuidV4 } from 'uuid';

export interface NoteInterface {
  _id: string;
  title: string;
  content: string;
  createdIsoDateTime: string;
  lastModifiedIsoDateTime?: string;
  keywords?: string[];
}

const ROOT_DB_COLLECTION = 'd-notes';

@Injectable()
export class NotesService {
  private readonly _queryFilterBy$: BehaviorSubject<string | null> = new BehaviorSubject(null as any);
  private readonly _items$: BehaviorSubject<NoteInterface[]> = new BehaviorSubject(
    null as any
  );
  public readonly items$ = combineLatest([
    this._items$.asObservable().pipe(filter(Boolean)),
    this._queryFilterBy$.asObservable(),
  ]).pipe(
    map(([items, queryFilter]) =>
      items?.filter((item) =>
        queryFilter
          ? item.title?.toLowerCase().includes(queryFilter.toLowerCase())
          : true
      )
    )
  );
  public readonly allMedia$ = this._items$.asObservable();

  constructor(
    @Inject('APP_DATASTORE_SERVICE') private readonly _datastoreService: IDatastoreService,
    @Inject('APP_ENCRYPTION_SERVICE') private readonly _encryptionService: {
      encryptFile: (
        file: File | Blob,
        accessControlConditions: any[],
        chain?: string
      ) => Promise<{
        encryptedFile: Blob;
        encryptedSymmetricKey: string;
      }>;
      decryptFile: (
        encryptedFile: Blob,
        encryptedSymmetricKey: string,
        accessControlConditions: any[],
        chain?: string
      ) => Promise<{ decryptedFile: File | Blob }>;
    },
  ) {}

  async getNotes() {
    const { notes = [] } = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, // collection
      ['notes'], // key
      { notes: [] } // default value to save if not exist (optional)
    );
    console.log('[INFO] notes: ', notes);
    this._items$.next(notes);
  }

  async createNote(title: string, content: string) {
    // run upload task
    const isoDateTime = new Date().toISOString();
    const note: NoteInterface = {
      content,
      title,
      _id: uuidV4(),
      createdIsoDateTime: isoDateTime,
      lastModifiedIsoDateTime: isoDateTime,
    };
    const notes = [...this._items$.value];
    notes.push(note);
    // update object data to database
    await this._datastoreService.saveData(
      { notes },
      ROOT_DB_COLLECTION,
      ['notes']
    );
    // update state
    this._items$.next(notes);
  }

  async delete(id: string) {
    const notes = [...this._items$.value];
    const index = notes.findIndex((item) => item._id === id);
    // remove note from list
    notes.splice(index, 1);
    // update object data to database
    await this._datastoreService.saveData(
      { notes }, 
      ROOT_DB_COLLECTION,
      ['notes']
    );
    // update state
    this._items$.next(notes);
  }

  async update(id: string, data: Partial<NoteInterface>) {
    const notes = [...this._items$.value];
    const index = notes.findIndex((item) => item._id === id);
    if (index === -1) {
      throw new Error('Note not found');
    }
    // update note
    notes[index] = {
      ...notes[index],
      ...data,
      _id: id,
      lastModifiedIsoDateTime: new Date().toISOString(),
    };
    // update object data to database
    await this._datastoreService.saveData(
      { notes },
      ROOT_DB_COLLECTION,
      ['notes']
    );
    // update state
    this._items$.next(notes);    
  }

  search(name: string | null) {
    this._queryFilterBy$.next(name);
  }
}