import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "hexa-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"],
})
export class BreadcrumbsComponent {
  @Input() public header!: HeaderComponent;
  @Input() public breadcrumbs!: { name: string; _id: string; }[] | null;
  @Input() public isSearching = false;
  @Output() public readonly actions: EventEmitter<{
    type: string;
    payload: any;
  }> = new EventEmitter();
}
