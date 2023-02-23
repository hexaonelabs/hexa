import { Component, Inject } from "@angular/core";
import { ILoadingService } from "@d-workspace/interfaces";
import { ModalController } from "@ionic/angular";
import { NoteModalComponent } from "../../components/note-modal/note-modal.component";
import { NoteInterface, NotesService } from "../../services/notes.service";

@Component({
  selector: "d-workspace-notes-page",
  templateUrl: "./notes-page.component.html",
  styleUrls: ["./notes-page.component.scss"]
})
export class NotesPageComponent {

  public readonly items$ = this._notesService.items$;

  constructor(
    private readonly _notesService: NotesService,
    private readonly _modalCtrl: ModalController,
    @Inject('APP_LOADER_SERVICE') private readonly _loaderService: ILoadingService,
  ) {}

  async ionViewDidEnter() {
    this._loaderService.setStatus(true);
    await this._notesService.getNotes();
    this._loaderService.setStatus(false);
  }

  async actions(type: string, payload?: any) {
    switch (type) {
      case 'add': {
        const { data, role } = await this._promptNewNote();
        if (role !== 'save' || (!data?.title || !data?.content)) {
          return;
        }
        this._loaderService.setStatus(true);
        await this._notesService.createNote(
          data.title,
          data.content,
        );
        this._loaderService.setStatus(false);
        break;
      }
      case 'edit': {
        const { data, role } = await this._promptNewNote(payload);
        console.log('data', data, payload);
        if (role !== 'save' || (!data?.title || !data?.content)) {
          return;
        }
        this._loaderService.setStatus(true);
        await this._notesService.update(payload._id, data);
        this._loaderService.setStatus(false);
        break;
      }
      case 'delete':
        await this._notesService.delete(payload?._id);
        break;
      case 'search': {
        const {
          detail: { value = null },
        } = payload;
        this._notesService.search(value);
        break;
      }
    }
  }

  private async _promptNewNote(note?: NoteInterface) {
    const modal = await this._modalCtrl.create({
      component: NoteModalComponent,
      componentProps: {
        item: note,
      }
    });
    await modal.present();
    const { data, role } = await modal.onDidDismiss();
    return { data, role };

  }
}