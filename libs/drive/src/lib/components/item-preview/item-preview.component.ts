import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MediafileInterface } from '../../interfaces/mediafile.interface';

@Component({
  selector: 'd-workspace-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  @Input() item!: MediafileInterface;
  @Input() account!: string;

  constructor(
    public readonly modalCtrl: ModalController
  ) {}
}
