import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'd-workspace-dropable',
  templateUrl: './dropable.component.html',
  styleUrls: ['./dropable.component.scss'],
})
export class DropableComponent {
  @Output() actions: EventEmitter<{
    type: string;
    payload?: any;
  }> = new EventEmitter();
}
