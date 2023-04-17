import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { MediafileInterface } from '../../interfaces/mediafile.interface';
import { FilesOptionsListComponent } from '../files-options-list/files-options-list.component';
import { ItemPreviewComponent } from '../item-preview/item-preview.component';

const MAX_ITEMS_TO_DISPLAY = 25;
@Component({
  selector: 'hexa-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent implements OnChanges {
  @Input() public account!: string | null;
  @Input() public items!: MediafileInterface[] | null;
  public readonly maxItemToDisplay$ = new BehaviorSubject(MAX_ITEMS_TO_DISPLAY);
  @Output() public readonly actionsEvent: EventEmitter<{
    type: string;
    payload: any;
  }> = new EventEmitter();

  constructor(
    private readonly _popCtrl: PopoverController,
    private readonly _modalCtrl: ModalController
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // reset max item to display when items change
    if (
      changes['items'] &&
      changes['items'].currentValue &&
      this.maxItemToDisplay$.value !== MAX_ITEMS_TO_DISPLAY
    ) {
      this.maxItemToDisplay$.next(MAX_ITEMS_TO_DISPLAY);
    }
  }

  async actions(type: string, payload?: any) {
    switch (true) {
      case type === 'openOptions': {
        const { event = undefined, item = undefined } = payload;
        if (!event || !item) {
          throw new Error('openOptions(): payload is invalid');
        }
        await this._openOptions(event, item);
        break;
      }
      case type === 'displayMoreItem': {
        const totalItem = this.items?.length || 0;
        const max = this.maxItemToDisplay$.value;
        const t = setTimeout(async () => {
          payload.target.complete();
          this.maxItemToDisplay$.next(this.maxItemToDisplay$.value + 10);
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (max >= totalItem) {
            payload.target.disabled = true;
          }
          clearTimeout(t);
        }, 500);
        break;
      }
      case type === 'preview': {
        this._preview(payload.item);
        break;
      }
    }
    this.actionsEvent.emit({ type, payload });
  }

  trackByFn(index: number) {
    return index;
  }

  private async _preview(item: MediafileInterface) {
    const account = this.account;
    const ionModal = await this._modalCtrl.create({
      component: ItemPreviewComponent,
      componentProps: {
        item,
        account,
      },
      cssClass: 'ion-modal-preview-file',
    });
    await ionModal.present();
    const { data, role = 'cancel' } = await ionModal.onDidDismiss();
    this.actions(role, { item: data });
  }

  private async _openOptions($event: MouseEvent, item: MediafileInterface) {
    const ionPopover = await this._popCtrl.create({
      component: FilesOptionsListComponent,
      componentProps: { isFolder: item.isFolder },
      event: $event,
      translucent: true,
      mode: 'md',
    });
    await ionPopover.present();
    // handle close event
    const { data: type, role } = await ionPopover.onDidDismiss();
    if (role === 'close') {
      return;
    }
    await this.actions(type, { item, $event });
  }
}
