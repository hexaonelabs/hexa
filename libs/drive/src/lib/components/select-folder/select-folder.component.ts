import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, map } from 'rxjs';
import { MediafileInterface } from '../../interfaces/mediafile.interface';

@Component({
  selector: 'hexa-select-folder',
  templateUrl: './select-folder.component.html',
  styleUrls: ['./select-folder.component.scss'],
})
export class SelectFolderComponent {
  @Input() readonly folders!: MediafileInterface[];
  public selelected: MediafileInterface | undefined;
  public readonly queryItem$ = new BehaviorSubject({
    _id: 'root',
    parent: undefined,
  } as any);
  public readonly lookUp$ = this.queryItem$.pipe(
    map((query) => {
      const result = this.folders?.filter(
        (folder) => folder.parent === query._id
      );
      console.log(this.folders, result, query);
      return result;
    })
  );

  constructor(public readonly modalCtrl: ModalController) {}

  public async navBack() {
    const folder = this.folders.find(
      (f) => f._id === this.queryItem$.value.parent
    );
    if (folder) {
      this.queryItem$.next(folder);
    } else {
      this.queryItem$.next({ _id: 'root', parent: undefined } as any);
    }
  }
}
