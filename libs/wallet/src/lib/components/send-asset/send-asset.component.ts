import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TokenInterface } from "@hexa/interfaces";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "hexa-send-asset-form",
  templateUrl: "./send-asset.component.html",
  styleUrls: ["./send-asset.component.scss"],
})
export class SendAssetComponent {
  
  @Input() public asset!: TokenInterface;
  @Output() public readonly events: EventEmitter<{
    type: string;
    payload: any;
  }> = new EventEmitter();

  form = new FormGroup({
    to: new FormControl("", [Validators.required]),
    amount: new FormControl("", [Validators.required]),
  });

  constructor(
    public readonly _modalCtrl: ModalController
  ) {}

  async send() {
    if (this.form.invalid) return;
    // check if is a modal or a component
    const modal = await this._modalCtrl.getTop();
    if (modal) await modal.dismiss(this.form.value, 'send');
    else this.events.emit({ type: 'send', payload: this.form.value });
  }
}