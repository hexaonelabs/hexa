import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TokenInterface } from '@hexa/interfaces';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const MAX_ITEMS_TO_DISPLAY = 25;

@Component({
  selector: 'hexa-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent implements OnChanges {
  @Input() public items!: TokenInterface[] | null;
  public readonly maxItemToDisplay$ = new BehaviorSubject(MAX_ITEMS_TO_DISPLAY);
  @Output() public readonly actionsEvent: EventEmitter<{
    type: string;
    payload: any;
  }> = new EventEmitter();

  constructor(
    private readonly _popCtrl: PopoverController,
    private readonly _modalCtrl: ModalController,
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
      case type === 'openExternalLink': {
        const popover = await this._popCtrl.getTop();
        if (popover) await popover.dismiss();
        const {item = undefined} = payload;
        if (!item||!item.address) return;
        window.open(`https://etherscan.io/token/${item.address}`, '_blank');
        break;
      }
      default: {
        this.actionsEvent.emit({ type, payload });
      }
    }
  }

  trackByFn(index: number) {
    return index;
  }

}
