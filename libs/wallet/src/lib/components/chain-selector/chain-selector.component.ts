import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Component({
  standalone: true,
  selector: "hexa-chain-selector",
  templateUrl: "./chain-selector.component.html",
  styleUrls: ["./chain-selector.component.scss"],
  imports: [CommonModule, IonicModule],
})
export class ChainSelectorComponent {
  @Input() public chains!:  {
    id: number;
    name: string;
    logo?: string | undefined;
  }[];
  @Input() public readonly showTestnet!: boolean;
  @Output() public readonly actionsEvent: EventEmitter<{
    type: string;
    payload: any;
  }> = new EventEmitter();

  constructor(
    public readonly modalCtrl: ModalController,
  ) {}

  async actions(type: string, payload?: any) {
    console.log(type, payload);
    const modal = await this.modalCtrl.getTop();
    switch (true) {
      case type === 'selectChain': 
        if (modal) await modal.dismiss({chain: payload})
        break;
      case type === 'toggleTestnet':
        if (modal) await modal.dismiss({showTestnet: payload})
        break;
    }
    this.actionsEvent.emit({ type, payload });
  }
}