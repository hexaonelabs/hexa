import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { NoteInterface } from "../../services/notes.service";

@Component({
  selector: "hexa-note-modal",
  templateUrl: "./note-modal.component.html",
  styleUrls: ["./note-modal.component.scss"]
})
export class NoteModalComponent {
  // input data that will patch the form on changes
  private _item?: NoteInterface; // private property _item

  // use getter setter to define the property
  get item(): NoteInterface|undefined { 
    return this._item;
  }
  
  @Input()
  set item(val: any) {
    console.log('previous item = ', this._item);
    console.log('currently selected item=', val);
    this._item = val;
    this.form.patchValue(val);
    // patch keywords
    if (!val?.keywords) {
      return;
    }
    const keywords = this.form.get('keywords') as FormArray;
    keywords.clear();
    val.keywords.forEach((keyword: string) => {
      keywords.push(new FormControl(keyword));
    });
  }
  
  public form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    createdIsoDateTime: new FormControl(new Date().toISOString()),
    lastModifiedIsoDateTime: new FormControl(),
    keywords: new FormArray([] as any),
  });

  constructor(
    public readonly modalCtrl: ModalController,
  ) { }

  async addKeyword(value: any) {
    const keywords = this.form.get('keywords') as FormArray;
    keywords.push(new FormControl(value));
  }

  async removeKeyword(index: number) {
    const keywords = this.form.get('keywords') as FormArray;
    keywords.removeAt(index);
  }


}