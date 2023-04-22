"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[304],{

/***/ 80304:
/*!*********************************!*\
  !*** ./libs/drive/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriveModule": () => (/* reexport safe */ _lib_drive_module__WEBPACK_IMPORTED_MODULE_0__.DriveModule),
/* harmony export */   "driveRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.driveRoutes)
/* harmony export */ });
/* harmony import */ var _lib_drive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/drive.module */ 61990);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 58722);



/***/ }),

/***/ 42335:
/*!****************************************************************************!*\
  !*** ./libs/drive/src/lib/components/breadcrumbs/breadcrumbs.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 23205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





function BreadcrumbsComponent_ng_container_0_ion_col_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 7);
  }
}
function BreadcrumbsComponent_ng_container_0_ion_col_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 7);
  }
}
const _c0 = function () {
  return {
    display: "flex"
  };
};
function BreadcrumbsComponent_ng_container_0_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbsComponent_ng_container_0_ion_col_1_Template_ion_col_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const b_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.actions.emit({
        type: "navTo",
        payload: {
          item: b_r5
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbsComponent_ng_container_0_ion_col_1_ion_icon_4_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BreadcrumbsComponent_ng_container_0_ion_col_1_ion_icon_5_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const isLast_r7 = ctx.last;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r5.name === "root" ? "My Drive" : b_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isSearching === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isLast_r7);
  }
}
function BreadcrumbsComponent_ng_container_0_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 8)(1, "ion-label")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "search results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function BreadcrumbsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_container_0_ion_col_1_Template, 6, 5, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbsComponent_ng_container_0_ion_col_2_Template, 4, 2, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSearching === true);
  }
}
function BreadcrumbsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 9)(1, "ion-label")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
class BreadcrumbsComponent {
  constructor() {
    this.isSearching = false;
    this.actions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
  return new (t || BreadcrumbsComponent)();
};
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BreadcrumbsComponent,
  selectors: [["hexa-breadcrumbs"]],
  inputs: {
    header: "header",
    breadcrumbs: "breadcrumbs",
    isSearching: "isSearching"
  },
  outputs: {
    actions: "actions"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["defaultBreadcrumb", ""], ["size", "auto", "class", "ion-align-items-center", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["size", "auto", "class", "ion-align-items-center", 3, "ngStyle", 4, "ngIf"], ["size", "auto", 1, "ion-align-items-center", 3, "ngStyle", "click"], [1, "clickable"], ["slot", "end", "name", "chevron-forward-outline", "class", "ion-padding-start", 4, "ngIf"], ["slot", "end", "name", "chevron-forward-outline", 1, "ion-padding-start"], ["size", "auto", 1, "ion-align-items-center", 3, "ngStyle"], ["size", "auto", 3, "ngStyle"]],
  template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbsComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.breadcrumbs)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center !important;\n  font-size: 1.2rem;\n}\n[_nghost-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9kcml2ZS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQUk7RUFDRSxlQUFBO0FDRU4iLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHNwYW4ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbjpob3N0IGlvbi1sYWJlbCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9kcml2ZS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQUk7RUFDRSxlQUFBO0FDRU47QURDQSxvaENBQW9oQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgc3BhbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuOmhvc3QgaW9uLWxhYmVsIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 84772:
/*!**********************************************************************!*\
  !*** ./libs/drive/src/lib/components/dropable/dropable.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropableComponent": () => (/* binding */ DropableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _directives_dropable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/dropable.directive */ 8726);




class DropableComponent {
  constructor() {
    this.actions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
}
DropableComponent.ɵfac = function DropableComponent_Factory(t) {
  return new (t || DropableComponent)();
};
DropableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DropableComponent,
  selectors: [["hexa-dropable"]],
  outputs: {
    actions: "actions"
  },
  decls: 6,
  vars: 0,
  consts: [["hexaDropable", "", 1, "droppable-container", "ion-align-items-center", "ion-padding", 3, "click", "fileDropped"], ["src", "./assets/drive/images/upload-file.svg"], ["color", "primary"]],
  template: function DropableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropableComponent_Template_ion_row_click_0_listener() {
        return ctx.actions.emit({
          type: "addFile"
        });
      })("fileDropped", function DropableComponent_Template_ion_row_fileDropped_0_listener($event) {
        return ctx.actions.emit({
          type: "onFileChange",
          payload: $event
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 2)(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Click or Drop Files Here to Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _directives_dropable_directive__WEBPACK_IMPORTED_MODULE_0__.DropableDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%] {\n  margin: 1.618rem;\n  min-height: 200px;\n  border: dashed 3.14px var(--ion-border-color);\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.125s ease-in-out;\n  border-radius: 24px;\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-medium-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.fileover[_ngcontent-%COMP%] {\n  background-color: rgba(var(--ion-color-medium-rgb), 0.15);\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.fileover[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.fileover[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.filedrop[_ngcontent-%COMP%] {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.filedrop[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col.filedrop[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  margin-top: 6.18rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1rem;\n  transition: all 0.125s ease-in-out;\n}\n[_nghost-%COMP%]   ion-row.droppable-container[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 auto 6.18rem;\n  display: block;\n  font-size: 1.618rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3BhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9kcml2ZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGFibGUvZHJvcGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESU07RUFDRSx3REFBQTtBQ0ZSO0FESU07RUFDRSx5REFBQTtBQ0ZSO0FESVE7RUFDRSxZQUFBO0FDRlY7QURJUTtFQUNFLHFCQUFBO0FDRlY7QURLTTtFQUNFLHlEQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7QUNIVjtBREtRO0VBQ0UscUJBQUE7QUNIVjtBRE9NO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDTFI7QURPTTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTFIiLCJmaWxlIjoiZHJvcGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciB7XG5cbiAgICA+IGlvbi1jb2wge1xuICAgICAgbWFyZ2luOiAxLjYxOHJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgYm9yZGVyOiBkYXNoZWQgMy4xNHB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTI1cyBlYXNlLWluLW91dDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4xKTtcbiAgICAgIH1cbiAgICAgICYuZmlsZW92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4xNSk7XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5maWxlZHJvcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcblxuICAgICAgICAqIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2LjE4cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDYuMThyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEuNjE4cmVtO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sIHtcbiAgbWFyZ2luOiAxLjYxOHJlbTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogZGFzaGVkIDMuMTRweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjEyNXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMSk7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sLmZpbGVvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbC5maWxlb3ZlciAqIHtcbiAgb3BhY2l0eTogMC41O1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbC5maWxlb3ZlciBpb24taW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbC5maWxlZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wuZmlsZWRyb3AgKiB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wuZmlsZWRyb3AgaW9uLWltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wgaW9uLWltZyB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDYuMThyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjEyNXMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sIHNwYW4ge1xuICBtYXJnaW46IDAgYXV0byA2LjE4cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjYxOHJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3BhYmxlL2Ryb3BhYmxlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9kcml2ZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGFibGUvZHJvcGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESU07RUFDRSx3REFBQTtBQ0ZSO0FESU07RUFDRSx5REFBQTtBQ0ZSO0FESVE7RUFDRSxZQUFBO0FDRlY7QURJUTtFQUNFLHFCQUFBO0FDRlY7QURLTTtFQUNFLHlEQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7QUNIVjtBREtRO0VBQ0UscUJBQUE7QUNIVjtBRE9NO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDTFI7QURPTTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTFI7QURDQSx3cklBQXdySSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyIHtcblxuICAgID4gaW9uLWNvbCB7XG4gICAgICBtYXJnaW46IDEuNjE4cmVtO1xuICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICBib3JkZXI6IGRhc2hlZCAzLjE0cHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjEpO1xuICAgICAgfVxuICAgICAgJi5maWxlb3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjE1KTtcblxuICAgICAgICAqIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmZpbGVkcm9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xuXG4gICAgICAgICoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgfVxuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDYuMThyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEyNXMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNi4xOHJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42MThyZW07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wge1xuICBtYXJnaW46IDEuNjE4cmVtO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiBkYXNoZWQgMy4xNHB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTI1cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4xKTtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wuZmlsZW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4xNSk7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sLmZpbGVvdmVyICoge1xuICBvcGFjaXR5OiAwLjU7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sLmZpbGVvdmVyIGlvbi1pbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG46aG9zdCBpb24tcm93LmRyb3BwYWJsZS1jb250YWluZXIgPiBpb24tY29sLmZpbGVkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbC5maWxlZHJvcCAqIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbC5maWxlZHJvcCBpb24taW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuOmhvc3QgaW9uLXJvdy5kcm9wcGFibGUtY29udGFpbmVyID4gaW9uLWNvbCBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogNi4xOHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTI1cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IGlvbi1yb3cuZHJvcHBhYmxlLWNvbnRhaW5lciA+IGlvbi1jb2wgc3BhbiB7XG4gIG1hcmdpbjogMCBhdXRvIDYuMThyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuNjE4cmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 51999:
/*!******************************************************************************************!*\
  !*** ./libs/drive/src/lib/components/files-options-list/files-options-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesOptionsListComponent": () => (/* binding */ FilesOptionsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



class FilesOptionsListComponent {
  constructor(popCtrl) {
    this.popCtrl = popCtrl;
  }
}
FilesOptionsListComponent.ɵfac = function FilesOptionsListComponent_Factory(t) {
  return new (t || FilesOptionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.PopoverController));
};
FilesOptionsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FilesOptionsListComponent,
  selectors: [["hexa-files-options-list"]],
  inputs: {
    isFolder: "isFolder"
  },
  decls: 39,
  vars: 5,
  consts: [["mode", "ios", "lines", "none", 1, "ion-no-padding"], [1, "ion-margin-bottom"], [3, "hidden", "click"], ["size", "small", "name", "folder-open-outline", "slot", "start"], ["size", "small", "name", "eye-outline", "slot", "start"], ["size", "small", "name", "download-outline", "slot", "start"], [3, "click"], ["size", "small", "name", "pencil-outline", "slot", "start"], ["size", "small", "name", "arrow-redo-outline", "slot", "start"], ["size", "small", "name", "share-social-outline", "slot", "start"], ["lines", "none", 3, "click"], ["size", "small", "name", "trash-outline", "slot", "start"]],
  template: function FilesOptionsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0)(1, "ion-list-header", 1)(2, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_4_listener() {
        return ctx.popCtrl.dismiss("navTo");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label")(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Open ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_9_listener() {
        return ctx.popCtrl.dismiss("preview");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label")(12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_14_listener() {
        return ctx.popCtrl.dismiss("download");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label")(17, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Download ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_19_listener() {
        return ctx.popCtrl.dismiss("rename");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-label")(22, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Rename ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_24_listener() {
        return ctx.popCtrl.dismiss("move");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-label")(27, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Move to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_29_listener() {
        return ctx.popCtrl.dismiss("share");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label")(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Share ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesOptionsListComponent_Template_ion_item_click_34_listener() {
        return ctx.popCtrl.dismiss("delete");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-label")(37, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Delete ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isFolder ? "Folder" : "File", " options");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isFolder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isFolder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isFolder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isFolder);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonListHeader],
  styles: ["[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]:hover {\n  --background: rgba(var(--ion-color-primary-rgb), 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLW9wdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbGVzLW9wdGlvbnMtbGlzdC9maWxlcy1vcHRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0FDREo7QURHSTtFQUNFLHNEQUFBO0FDRE4iLCJmaWxlIjoiZmlsZXMtb3B0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA1KTtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCBpb24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IGlvbi1pdGVtOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbGVzLW9wdGlvbnMtbGlzdC9maWxlcy1vcHRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9maWxlcy1vcHRpb25zLWxpc3QvZmlsZXMtb3B0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZUFBQTtBQ0RKO0FER0k7RUFDRSxzREFBQTtBQ0ROO0FEQ0EsbzFCQUFvMUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IGlvbi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgaW9uLWl0ZW06aG92ZXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23205:
/*!******************************************************************!*\
  !*** ./libs/drive/src/lib/components/header/header.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


const _c0 = [[["", "slot", "start"]], [["", "slot", "end"]]];
const _c1 = ["[slot=start]", "[slot=end]"];
class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["hexa-header"]],
  ngContentSelectors: _c1,
  decls: 11,
  vars: 0,
  consts: [[1, "ion-no-padding", "ion-padding-horizontal"], [1, "ion-no-padding", "ion-align-items-center"], ["size", "auto"], [1, "ion-text-end", "ion-hide-md-down"], [2, "width", "82px"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDRSxnQkFBQTtBQ0pOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWdyaWQge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCBpb24tdG9vbGJhciBpb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UsZ0JBQUE7QUNKTjtBRENBLGdxQkFBZ3FCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tdG9vbGJhciB7XG4gICAgLy8gLS1vcGFjaXR5OiAxIWltcG9ydGFudDtcbiAgICAvLyAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cbiAgICBpb24tZ3JpZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufSIsIjpob3N0IGlvbi10b29sYmFyIGlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 25389:
/*!******************************************************************************!*\
  !*** ./libs/drive/src/lib/components/item-preview/item-preview.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPreviewComponent": () => (/* binding */ ItemPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe.pipe */ 86181);
/* harmony import */ var _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/bytes-to-size.pipe */ 6344);
/* harmony import */ var _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/is-shared.pipe */ 23457);
/* harmony import */ var _pipes_preview_file_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/preview-file.pipe */ 48226);








function ItemPreviewComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 22)(2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const url_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + url_r11 + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 3, url_r11, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ItemPreviewComponent_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
  }
}
function ItemPreviewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemPreviewComponent_div_7_ng_container_1_Template, 4, 6, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "previewFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ItemPreviewComponent_div_7_ng_template_4_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r0.item)))("ngIfElse", _r9);
  }
}
function ItemPreviewComponent_div_8_audio_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "audio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safe");
  }
  if (rf & 2) {
    const url_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, url_r15, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ItemPreviewComponent_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
  }
}
function ItemPreviewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemPreviewComponent_div_8_audio_1_Template, 2, 4, "audio", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "previewFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ItemPreviewComponent_div_8_ng_template_4_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r1.item)))("ngIfElse", _r13);
  }
}
function ItemPreviewComponent_div_9_video_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "video", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safe");
  }
  if (rf & 2) {
    const url_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, url_r19, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ItemPreviewComponent_div_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
  }
}
function ItemPreviewComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemPreviewComponent_div_9_video_1_Template, 2, 4, "video", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "previewFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ItemPreviewComponent_div_9_ng_template_4_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r2.item)))("ngIfElse", _r17);
  }
}
function ItemPreviewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ItemPreviewComponent_ion_chip_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "wallet address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ItemPreviewComponent_ion_chip_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "posess NFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ItemPreviewComponent_ion_chip_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ItemPreviewComponent_ion_chip_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " shared ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ItemPreviewComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
  }
}
ItemPreviewComponent.ɵfac = function ItemPreviewComponent_Factory(t) {
  return new (t || ItemPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController));
};
ItemPreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ItemPreviewComponent,
  selectors: [["hexa-item-preview"]],
  inputs: {
    item: "item",
    account: "account"
  },
  decls: 72,
  vars: 26,
  consts: [[1, "ion-no-padding", 3, "fullscreen"], ["fill", "none", 1, "close-btn", 3, "click"], ["icon-only", "", "name", "close"], [1, "ion-no-padding"], [1, "ion-align-items-center", "ion-no-padding"], ["size", "12", "size-md", "7", 1, "ion-text-center", "preview", "ion-no-padding"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["size", "12", "size-md", "5"], ["lines", "none", 1, "ion-padding"], [1, "ion-text-wrap"], ["color", "dark"], [1, "ion-no-margin", "ion-text-wrap"], [1, "ion-text-wrap", "withChip"], [1, "ion-margin-bottom"], ["color", "primary", 4, "ngIf"], [1, "ion-margin-top", "ion-padding"], ["fill", "solid", 3, "click"], ["fill", "outline", 3, "click"], [4, "ngIf", "ngIfElse"], ["skeletImg", ""], [1, "bg-image"], ["alt", "image preview", 3, "src"], ["controls", "", "autoplay", "", 3, "src", 4, "ngIf", "ngIfElse"], ["skeletAudio", ""], ["controls", "", "autoplay", "", 3, "src"], ["alt", "default preview", "src", "./assets/drive/images/my-doc.svg", 1, "default"], ["color", "primary"], ["size", "small", "name", "lock-closed"], ["name", "lock-closed"], ["size", "small", "name", "lock-open"], ["size", "small", "name", "share-social-outline"]],
  template: function ItemPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemPreviewComponent_Template_ion_button_click_1_listener() {
        return ctx.modalCtrl.dismiss(null, "cancel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-grid", 3)(4, "ion-row", 4)(5, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ItemPreviewComponent_div_7_Template, 6, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ItemPreviewComponent_div_8_Template, 6, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ItemPreviewComponent_div_9_Template, 6, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ItemPreviewComponent_div_10_Template, 2, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 9)(12, "ion-list", 10)(13, "ion-item")(14, "ion-label", 11)(15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-text", 12)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-item")(21, "ion-label")(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-text", 12)(25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-item")(28, "ion-label")(29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-text", 12)(32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "bytesToSize");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-item")(36, "ion-label")(37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "IPFS CID");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-text", 12)(40, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-item")(43, "ion-label", 14)(44, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Encryption");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ItemPreviewComponent_ion_chip_46_Template, 4, 0, "ion-chip", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ItemPreviewComponent_ion_chip_47_Template, 4, 0, "ion-chip", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, ItemPreviewComponent_ion_chip_48_Template, 4, 0, "ion-chip", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, ItemPreviewComponent_ion_chip_49_Template, 4, 0, "ion-chip", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "isShared");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-item")(52, "ion-label")(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Create date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "ion-text", 12)(56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ion-item")(60, "ion-label")(61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Last modified date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-text", 12)(64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](66, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 17)(68, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemPreviewComponent_Template_ion_button_click_68_listener() {
        return ctx.modalCtrl.dismiss(ctx.item, "download");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Download");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemPreviewComponent_Template_ion_button_click_70_listener() {
        return ctx.modalCtrl.dismiss(ctx.item, "share");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.item == null ? null : ctx.item.type == null ? null : ctx.item.type.startsWith("image"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.item == null ? null : ctx.item.type == null ? null : ctx.item.type.startsWith("audio"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.item == null ? null : ctx.item.type == null ? null : ctx.item.type.startsWith("video"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.item.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.item.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 15, ctx.item.size));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.cid, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.accessControlConditions == null ? null : ctx.item.accessControlConditions[0] == null ? null : ctx.item.accessControlConditions[0].method) === "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.accessControlConditions == null ? null : ctx.item.accessControlConditions[1] == null ? null : ctx.item.accessControlConditions[1].method) === "balanceOf");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((ctx.item == null ? null : ctx.item.accessControlConditions == null ? null : ctx.item.accessControlConditions.length) || 0) <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.isFolder !== true && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](50, 17, ctx.item.accessControlConditions, ctx.account));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](58, 20, ctx.item.createdIsoDateTime, "YYYY/MM/dd HH:mm"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](66, 23, ctx.item.lastModifiedIsoDateTime, "YYYY/MM/dd HH:mm"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe, _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_1__.BytesToSizePipe, _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_2__.IsSharePipe, _pipes_preview_file_pipe__WEBPACK_IMPORTED_MODULE_3__.PreviewFilePipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-container-background)!important;\n}\n[_nghost-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  height: 5rem;\n  width: 5rem;\n}\n[_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 1rem;\n  z-index: 1;\n}\n[_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   ion-row[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-col[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-col.preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: stretch;\n  align-content: center;\n  background: var(--ion-background-color);\n}\n[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   .withChip[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]:first-of-type {\n  margin-left: -10px;\n}\n[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n[_nghost-%COMP%]   .bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  background-repeat: none;\n  background-size: 300%;\n  z-index: -1;\n  filter: blur(80px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW0tcHJldmlldy9pdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSx1REFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNISjtBRE1FO0VBSUUsV0FBQTtBQ1BKO0FEU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNQSjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQ1JKO0FEVUk7RUFDRSx5Q0FBQTtBQ1JOO0FEWUk7RUFDRSxrQkFBQTtBQ1ZOO0FEY007RUFDRSxlQUFBO0FDWlI7QURpQkU7RUFDRSxxQkFBQTtBQ2ZKO0FEa0JFO0VBQ0UsaUJBQUE7QUNoQko7QURtQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ2pCSiIsImZpbGUiOiJpdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRhaW5lci1iYWNrZ3JvdW5kKSFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tc3Bpbm5lciB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGlvbi1ncmlkIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24tcm93LCBpb24tY29sLCBpb24tbGlzdCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgaW9uLWNvbC5wcmV2aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgbWFyZ2luIG9mIHRoZSBmaXJzdCBjaGlsZCBgY2hpcGAgZWxlbWVudCBpbnNpZGUgYC53aXRoQ2hpcGBcbiAgICAud2l0aENoaXAgaW9uLWNoaXA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGlvbi10ZXh0IHAge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIC5iZy1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoODBweCk7XG4gICAgZmlsdGVyOiBibHVyKDgwcHgpO1xuICB9XG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb250YWluZXItYmFja2dyb3VuZCkhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXNwaW5uZXIge1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiA1cmVtO1xufVxuOmhvc3QgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAxcmVtO1xuICB6LWluZGV4OiAxO1xufVxuOmhvc3QgaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGlvbi1yb3csIDpob3N0IGlvbi1jb2wsIDpob3N0IGlvbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbC5wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCBpb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuOmhvc3QgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbjpob3N0IGlvbi1saXN0IC53aXRoQ2hpcCBpb24tY2hpcDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuOmhvc3QgaW9uLWxpc3QgaW9uLWxhYmVsIGlvbi10ZXh0IHAge1xuICBmb250LXNpemU6IDFyZW07XG59XG46aG9zdCBpb24tY2hpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cbjpob3N0IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgLmJnLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XG4gIHotaW5kZXg6IC0xO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig4MHB4KTtcbiAgZmlsdGVyOiBibHVyKDgwcHgpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW0tcHJldmlldy9pdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsdURBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSEo7QURNRTtFQUlFLFdBQUE7QUNQSjtBRFNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDUEo7QURTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7QUNSSjtBRFVJO0VBQ0UseUNBQUE7QUNSTjtBRFlJO0VBQ0Usa0JBQUE7QUNWTjtBRGNNO0VBQ0UsZUFBQTtBQ1pSO0FEaUJFO0VBQ0UscUJBQUE7QUNmSjtBRGtCRTtFQUNFLGlCQUFBO0FDaEJKO0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUNqQko7QURBQSw0N0pBQTQ3SiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29udGFpbmVyLWJhY2tncm91bmQpIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1zcGlubmVyIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgaW9uLWdyaWQge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlvbi1yb3csIGlvbi1jb2wsIGlvbi1saXN0IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBpb24tY29sLnByZXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBtYXJnaW4gb2YgdGhlIGZpcnN0IGNoaWxkIGBjaGlwYCBlbGVtZW50IGluc2lkZSBgLndpdGhDaGlwYFxuICAgIC53aXRoQ2hpcCBpb24tY2hpcDpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgaW9uLXRleHQgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgLmJnLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4MHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoODBweCk7XG4gIH1cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRhaW5lci1iYWNrZ3JvdW5kKSFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24tc3Bpbm5lciB7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDVyZW07XG59XG46aG9zdCAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDFyZW07XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCBpb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLXJvdywgOmhvc3QgaW9uLWNvbCwgOmhvc3QgaW9uLWxpc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCBpb24tY29sLnByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG46aG9zdCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuOmhvc3QgaW9uLWxpc3QgLndpdGhDaGlwIGlvbi1jaGlwOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG46aG9zdCBpb24tbGlzdCBpb24tbGFiZWwgaW9uLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbjpob3N0IGlvbi1jaGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuOmhvc3QgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG46aG9zdCAuYmctaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcbiAgei1pbmRleDogLTE7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDgwcHgpO1xuICBmaWx0ZXI6IGJsdXIoODBweCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 92197:
/*!************************************************************************************!*\
  !*** ./libs/drive/src/lib/components/items-container/items-container.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsContainerComponent": () => (/* binding */ ItemsContainerComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _files_options_list_files_options_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files-options-list/files-options-list.component */ 51999);
/* harmony import */ var _item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-preview/item-preview.component */ 25389);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/bytes-to-size.pipe */ 6344);
/* harmony import */ var _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/is-shared.pipe */ 23457);











function ItemsContainerComponent_ion_row_1_ion_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ion_chip_7_Template_ion_chip_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.actions("share", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " shared ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ItemsContainerComponent_ion_row_1_ion_chip_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ion_chip_9_Template_ion_chip_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.actions("lockFile", item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ItemsContainerComponent_ion_row_1_ion_text_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "bytesToSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r1.size), " ");
  }
}
const _c0 = function () {
  return {
    display: "flex"
  };
};
const _c1 = function () {
  return [];
};
function ItemsContainerComponent_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_Template_ion_row_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](item_r1.isFolder ? ctx_r12.actions("navTo", {
        item: item_r1
      }) : ctx_r12.actions("preview", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 5)(4, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ItemsContainerComponent_ion_row_1_ion_chip_7_Template, 4, 0, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "isShared");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ItemsContainerComponent_ion_row_1_ion_chip_9_Template, 4, 0, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ItemsContainerComponent_ion_row_1_ion_text_11_Template, 3, 3, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-fab-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_Template_ion_fab_button_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.actions("openOptions", {
        event: $event,
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", item_r1.isFolder !== true ? "document-outline" : "folder-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.isFolder !== true && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 8, item_r1.accessControlConditions, ctx_r0.account));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((item_r1 == null ? null : item_r1.accessControlConditions) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1)).length <= 0 && item_r1.isFolder !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.isFolder !== true);
  }
}
const MAX_ITEMS_TO_DISPLAY = 25;
class ItemsContainerComponent {
  constructor(_popCtrl, _modalCtrl) {
    this._popCtrl = _popCtrl;
    this._modalCtrl = _modalCtrl;
    this.maxItemToDisplay$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(MAX_ITEMS_TO_DISPLAY);
    this.actionsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnChanges(changes) {
    // reset max item to display when items change
    if (changes['items'] && changes['items'].currentValue && this.maxItemToDisplay$.value !== MAX_ITEMS_TO_DISPLAY) {
      this.maxItemToDisplay$.next(MAX_ITEMS_TO_DISPLAY);
    }
  }
  actions(type, payload) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (true) {
        case type === 'openOptions':
          {
            const {
              event = undefined,
              item = undefined
            } = payload;
            if (!event || !item) {
              throw new Error('openOptions(): payload is invalid');
            }
            yield _this._openOptions(event, item);
            break;
          }
        case type === 'displayMoreItem':
          {
            const totalItem = _this.items?.length || 0;
            const max = _this.maxItemToDisplay$.value;
            const t = setTimeout( /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              payload.target.complete();
              _this.maxItemToDisplay$.next(_this.maxItemToDisplay$.value + 10);
              // App logic to determine if all data is loaded
              // and disable the infinite scroll
              if (max >= totalItem) {
                payload.target.disabled = true;
              }
              clearTimeout(t);
            }), 500);
            break;
          }
        case type === 'preview':
          {
            _this._preview(payload.item);
            break;
          }
      }
      _this.actionsEvent.emit({
        type,
        payload
      });
    })();
  }
  trackByFn(index) {
    return index;
  }
  _preview(item) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const account = _this2.account;
      const ionModal = yield _this2._modalCtrl.create({
        component: _item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_2__.ItemPreviewComponent,
        componentProps: {
          item,
          account
        },
        cssClass: 'ion-modal-preview-file'
      });
      yield ionModal.present();
      const {
        data,
        role = 'cancel'
      } = yield ionModal.onDidDismiss();
      _this2.actions(role, {
        item: data
      });
    })();
  }
  _openOptions($event, item) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionPopover = yield _this3._popCtrl.create({
        component: _files_options_list_files_options_list_component__WEBPACK_IMPORTED_MODULE_1__.FilesOptionsListComponent,
        componentProps: {
          isFolder: item.isFolder
        },
        event: $event,
        translucent: true,
        mode: 'md'
      });
      yield ionPopover.present();
      // handle close event
      const {
        data: type,
        role
      } = yield ionPopover.onDidDismiss();
      if (role === 'close') {
        return;
      }
      yield _this3.actions(type, {
        item,
        $event
      });
    })();
  }
}
ItemsContainerComponent.ɵfac = function ItemsContainerComponent_Factory(t) {
  return new (t || ItemsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController));
};
ItemsContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ItemsContainerComponent,
  selectors: [["hexa-items-container"]],
  inputs: {
    account: "account",
    items: "items"
  },
  outputs: {
    actionsEvent: "actionsEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 7,
  consts: [[1, "ion-no-padding"], ["class", "item ion-align-items-center ion-padding-start", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "item", "ion-align-items-center", "ion-padding-start", 3, "click"], ["size", "auto", 1, "ion-align-items-center", "pointer", 3, "ngStyle"], ["size", "large", 3, "name"], ["size", "auto", 1, "ion-align-items-center", "ion-text-wrap", "pointer", 3, "ngStyle"], [1, "ion-padding-start"], ["size", "auto", 1, "ion-hide-md-down"], ["color", "primary", "size", "small", "class", "ion-margin-start", 3, "click", 4, "ngIf"], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end", 3, "ngStyle"], ["color", "medium", "class", "ion-hide-md-down", 4, "ngIf"], ["size", "small", "translucent", "true", "mode", "ios", 3, "click"], ["color", "medium", "size", "small", "color", "primary", "name", "ellipsis-vertical"], ["color", "primary", "size", "small", 1, "ion-margin-start", 3, "click"], ["size", "small", "name", "share-social-outline"], ["size", "small", "name", "lock-open-outline"], ["color", "medium", 1, "ion-hide-md-down"]],
  template: function ItemsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemsContainerComponent_ion_row_1_Template, 14, 15, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 2, ctx.items || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1), 0, ctx.maxItemToDisplay$.value))("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_3__.BytesToSizePipe, _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.IsSharePipe],
  styles: ["[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%] {\n  background: var(--ion-item-background);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover    > ion-col[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: -1px;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --background-hover-opacity: 0.2;\n  --backdrop-filter: none;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW1zLWNvbnRhaW5lci9pdGVtcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxzQ0FBQTtFQUNBLGdEQUFBO0FDREo7QURJSTtFQUNFLHlEQUFBO0FDRk47QURHTTtFQUNFLCtCQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0FDSE47QURNSTtFQUNFLGVBQUE7QUNKTjtBRE9JO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUNMTjtBRFFJO0VBQ0UscUJBQUE7QUNOTiIsImZpbGUiOiJpdGVtcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgaW9uLXJvdy5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7IC8vICNlMGUwZTA7XG5cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEwKTtcbiAgICAgID4gaW9uLWNvbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICB9XG5cbiAgICAucG9pbnRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjI7XG4gICAgICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbiAgICB9IFxuXG4gICAgaW9uLWNoaXAge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IGlvbi1yb3cuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIgPiBpb24tY29sIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIC5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4yO1xuICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tY2hpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW1zLWNvbnRhaW5lci9pdGVtcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9pdGVtcy1jb250YWluZXIvaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usc0NBQUE7RUFDQSxnREFBQTtBQ0RKO0FESUk7RUFDRSx5REFBQTtBQ0ZOO0FER007RUFDRSwrQkFBQTtBQ0RSO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk47QURPSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FDTE47QURRSTtFQUNFLHFCQUFBO0FDTk47QURDQSx3ekVBQXd6RSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBpb24tcm93Lml0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTsgLy8gI2UwZTBlMDtcblxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTApO1xuICAgICAgPiBpb24tY29sIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIH1cblxuICAgIC5wb2ludGVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuMjtcbiAgICAgIC0tYmFja2Ryb3AtZmlsdGVyOiBub25lO1xuICAgIH0gXG5cbiAgICBpb24tY2hpcCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgfVxuICB9XG59IiwiOmhvc3QgaW9uLXJvdy5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpob3ZlciA+IGlvbi1jb2wge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2Ryb3AtZmlsdGVyOiBub25lO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1jaGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 69151:
/*!********************************************************************************!*\
  !*** ./libs/drive/src/lib/components/select-folder/select-folder.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFolderComponent": () => (/* binding */ SelectFolderComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function SelectFolderComponent_ion_header_0_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectFolderComponent_ion_header_0_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.navBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectFolderComponent_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectFolderComponent_ion_header_0_ion_button_3_Template, 2, 0, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 4)(7, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectFolderComponent_ion_header_0_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.modalCtrl.dismiss(undefined, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const queryItem_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", queryItem_r2._id !== "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](queryItem_r2.name);
  }
}
const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
function SelectFolderComponent_ion_list_3_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectFolderComponent_ion_list_3_ion_item_1_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]((ctx_r11.selelected == null ? null : ctx_r11.selelected._id) ? ctx_r11.selelected = undefined : ctx_r11.selelected = item_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectFolderComponent_ion_list_3_ion_item_1_Template_ion_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      $event.stopPropagation();
      ctx_r13.queryItem$.next(item_r10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.selelected = undefined);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r10._id === (ctx_r9.selelected == null ? null : ctx_r9.selelected._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
  }
}
function SelectFolderComponent_ion_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectFolderComponent_ion_list_3_ion_item_1_Template, 6, 4, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lookUp_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", lookUp_r8);
  }
}
class SelectFolderComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.queryItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
      _id: 'root',
      parent: undefined
    });
    this.lookUp$ = this.queryItem$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(query => {
      const result = this.folders?.filter(folder => folder.parent === query._id);
      console.log(this.folders, result, query);
      return result;
    }));
  }
  navBack() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const folder = _this.folders.find(f => f._id === _this.queryItem$.value.parent);
      if (folder) {
        _this.queryItem$.next(folder);
      } else {
        _this.queryItem$.next({
          _id: 'root',
          parent: undefined
        });
      }
    })();
  }
}
SelectFolderComponent.ɵfac = function SelectFolderComponent_Factory(t) {
  return new (t || SelectFolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController));
};
SelectFolderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SelectFolderComponent,
  selectors: [["hexa-select-folder"]],
  inputs: {
    folders: "folders"
  },
  decls: 9,
  vars: 7,
  consts: [[4, "ngIf"], ["slot", "end", "size", "small", 3, "disabled", "click"], ["slot", "start"], ["icon-only", "", 3, "click", 4, "ngIf"], ["slot", "end"], ["icon-only", "", 3, "click"], ["name", "close"], ["name", "arrow-back"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["slot", "start", "name", "folder-open-outline"], ["fill", "none", "slot", "end", 3, "click"], ["name", "arrow-forward"]],
  template: function SelectFolderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectFolderComponent_ion_header_0_Template, 9, 2, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectFolderComponent_ion_list_3_Template, 2, 1, "ion-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-footer")(6, "ion-toolbar")(7, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectFolderComponent_Template_ion_button_click_7_listener() {
        return ctx.modalCtrl.dismiss(ctx.selelected, "ok");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Move ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.queryItem$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, ctx.lookUp$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selelected === undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1mb2xkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3QtZm9sZGVyL3NlbGVjdC1mb2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzREFBQTtBQ0FKIiwiZmlsZSI6InNlbGVjdC1mb2xkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICB9XG59IiwiOmhvc3QgLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC1mb2xkZXIvc2VsZWN0LWZvbGRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC1mb2xkZXIvc2VsZWN0LWZvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNEQUFBO0FDQUo7QURDQSxncUJBQWdxQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gIH1cbn0iLCI6aG9zdCAuc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85339:
/*!**************************************************************************************!*\
  !*** ./libs/drive/src/lib/components/setup-encryption/setup-encryption.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupEncryptionComponent": () => (/* binding */ SetupEncryptionComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/slice-address.pipe */ 89918);








function SetupEncryptionComponent_ion_row_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col")(2, "ion-text", 1)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Would you like to strengthen the security of your data using cryptographic encryption? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " This will allow you to define custom controls access condition to your data to prevent unauthorized access. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_8_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.modalCtrl.dismiss(null, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_8_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.modalCtrl.dismiss([], "ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " No, start upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_8_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.isDisplayConditionForm = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(me)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.removeValue("walletAddress.values", i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_small_3_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_ion_icon_4_Template, 1, 0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const el_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, el_r9), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r9 === ctx_r7.walletAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r9 !== ctx_r7.walletAddress);
  }
}
function SetupEncryptionComponent_ion_row_9_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col")(1, "ion-text", 12)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Define access conditions to your data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 13)(5, "ion-accordion-group", 14)(6, "ion-accordion", 15)(7, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_9_ion_col_1_Template_ion_item_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.toggleCondition("walletAddress"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Access by wallet address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SetupEncryptionComponent_ion_row_9_ion_col_1_ion_chip_12_Template, 5, 5, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_9_ion_col_1_Template_ion_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r18.addValue("walletAddress.values", _r8.value + "");
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r8.value = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-label", 25)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " By enabling encryption, you will not be able to access your data without the correct access conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Check again Addresses before validate encryption access conditions rules. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_3_1;
    let tmp_4_0;
    let tmp_4_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", true)("value", ctx_r6.accordionsOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ((tmp_3_0 = ctx_r6.form.get("walletAddress")) == null ? null : (tmp_3_1 = tmp_3_0.get("selected")) == null ? null : tmp_3_1.value) === true ? "checkbox" : "square-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (tmp_4_0 = ctx_r6.form.get("walletAddress")) == null ? null : (tmp_4_1 = tmp_4_0.get("values")) == null ? null : tmp_4_1.value);
  }
}
function SetupEncryptionComponent_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SetupEncryptionComponent_ion_row_9_ion_col_1_Template, 26, 5, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col", 10)(3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_9_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.modalCtrl.dismiss(null, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupEncryptionComponent_ion_row_9_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Start ", !ctx_r1.item ? "upload" : "share", " ");
  }
}
class SetupEncryptionComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.isDisplayConditionForm = false;
    this.accordionsOpen = [];
  }
  ionViewWillEnter() {
    this._buildForm();
    if (this.item?.accessControlConditions?.length) {
      this.isDisplayConditionForm = true;
      this._patchValues(this.item.accessControlConditions);
    }
  }
  _buildForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      walletAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
        selected: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
        values: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.walletAddress)])
      }),
      nftOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
        selected: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
        values: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()])
      }),
      daoMember: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
        selected: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
        values: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()])
      })
    });
  }
  _patchValues(accessControlConditions) {
    const accordionsOpen = [];
    const walletsAddress = [];
    let nftContractAddress;
    let daoContractAddress;
    accessControlConditions.forEach(condition => {
      if (this._isWalletAddressEcryptionCondition(condition)) {
        accordionsOpen.push('walletAddress');
        walletsAddress.push(condition.returnValueTest.value);
      }
    });
    this.form.get('walletAddress')?.get('selected')?.patchValue(walletsAddress.length > 0);
    const walletAddressArrayValue = this.form.get('walletAddress')?.get('values');
    walletAddressArrayValue.clear();
    walletsAddress.forEach(address => {
      walletAddressArrayValue.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(address));
    });
    // this.form.get('nftOwner')?.get('values')?.patchValue([nftContractAddress]);
    // this.form.get('daoMember')?.get('values')?.patchValue([daoContractAddress]);
    this.accordionsOpen = accordionsOpen;
  }
  addValue(controlname, value) {
    const control = this.form.get(controlname);
    control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(value));
  }
  removeValue(controlname, index) {
    const control = this.form.get(controlname);
    control.removeAt(index);
  }
  toggleCondition(controlname) {
    const control = this.form.get(controlname);
    control.get('selected')?.setValue(!control.get('selected')?.value);
  }
  submit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = {
        walletsAddress: [],
        nftContractAddress: undefined,
        daoContractAddress: undefined
      };
      if (_this.form.get('walletAddress')?.get('selected')?.value === true) {
        result.walletsAddress = _this.form.get('walletAddress')?.get('values')?.value;
      }
      if (_this.form.get('nftOwner')?.get('selected')?.value === true) {
        result.nftContractAddress = _this.form.get('nftOwner')?.get('values')?.value?.pop();
      }
      if (_this.form.get('daoMember')?.get('selected')?.value === true) {
        result.daoContractAddress = _this.form.get('daoMember')?.get('values')?.value?.pop();
      }
      const conditions = _this._normalizeData(result);
      yield _this.modalCtrl.dismiss(conditions, 'ok');
    })();
  }
  _normalizeData(data) {
    const accessControlConditions = [];
    if (data.walletsAddress.length) {
      accessControlConditions.push(...data.walletsAddress.map(value => {
        return {
          contractAddress: '',
          standardContractType: '',
          method: '',
          parameters: [':userAddress'],
          returnValueTest: {
            comparator: '=',
            value
          }
        };
      }));
    }
    if (data.nftContractAddress) {
      accessControlConditions.push({
        contractAddress: data.nftContractAddress,
        standardContractType: 'ERC721',
        method: 'balanceOf',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '>',
          value: '0'
        }
      });
    }
    if (data.daoContractAddress) {
      accessControlConditions.push({
        contractAddress: data.daoContractAddress,
        standardContractType: 'ERC20',
        method: 'members',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '=',
          value: 'true'
        }
      });
    }
    // add object `or` condition between each condition
    const result = accessControlConditions.map((condition, i) => {
      if (i === accessControlConditions.length - 1) {
        return [condition];
      }
      return [condition, {
        operator: 'or'
      }];
    }).flat().map(condition => {
      if (condition.operator) {
        return condition;
      }
      return {
        // chain: this._normalizeChainName(this.chainName),
        ...condition
      };
    });
    return result;
  }
  _isWalletAddressEcryptionCondition(encryptAccessCondition) {
    return encryptAccessCondition.method === '' && encryptAccessCondition.parameters.includes(':userAddress');
  }
  _normalizeChainName(name) {
    return name.toLowerCase().replace(' ', '-').replace('matic', 'polygon');
  }
}
SetupEncryptionComponent.ɵfac = function SetupEncryptionComponent_Factory(t) {
  return new (t || SetupEncryptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController));
};
SetupEncryptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SetupEncryptionComponent,
  selectors: [["hexa-setup-encryption"]],
  inputs: {
    walletAddress: "walletAddress",
    item: "item"
  },
  decls: 10,
  vars: 4,
  consts: [[1, "wrapper", "ion-padding"], ["color", "dark"], [1, "ion-no-margin"], ["class", "ion-align-items-start", 4, "ngIf"], [4, "ngIf"], [1, "ion-align-items-start"], [1, "ion-text-end"], ["color", "danger", "fill", "clear", 3, "click"], ["fill", "outline", 3, "click"], [3, "click"], ["size", "12", 1, "ion-padding-top", "ion-text-end"], [3, "disabled", "click"], ["color", "primary"], [1, "ion-padding-bottom", 3, "formGroup"], [3, "multiple", "value"], ["value", "walletAddress", "toggleIcon", "", "toggleIconSlot", "end", "formGroupName", "walletAddress"], ["slot", "header", 1, "header", 3, "click"], ["slot", "end", "color", "primary", 3, "name"], ["slot", "content", 1, "ion-padding-vertical", "container"], ["color", "primary", 4, "ngFor", "ngForOf"], ["placeholder", "add wallet address", "type", "text"], ["inputWalletAddress", ""], ["size", "small", "fill", "outline", "slot", "end", 3, "click"], ["color", "warning", 1, "ion-margin-top"], ["slot", "start", "name", "warning"], [1, "ion-text-wrap"], ["class", "ion-margin-start", 4, "ngIf"], ["name", "close-circle", 3, "click", 4, "ngIf"], [1, "ion-margin-start"], ["name", "close-circle", 3, "click"]],
  template: function SetupEncryptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-text", 1)(5, "h1", 2)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SetupEncryptionComponent_ion_row_8_Template, 14, 0, "ion-row", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SetupEncryptionComponent_ion_row_9_Template, 7, 3, "ion-row", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", !ctx.item ? "" : "Shared ", "Encryption ", !ctx.item ? "" : "condition", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDisplayConditionForm === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDisplayConditionForm === true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_1__.SliceAddressPipe],
  styles: ["[_nghost-%COMP%]   ion-item.header[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.15);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   .logo-lit[_ngcontent-%COMP%] {\n  max-width: 96px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLWVuY3J5cHRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29tcG9uZW50cy9zZXR1cC1lbmNyeXB0aW9uL3NldHVwLWVuY3J5cHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzREFBQTtBQ0FKO0FERUU7RUFDRSxvREFBQTtBQ0FKO0FEQ0k7RUFDRSx5QkFBQTtBQ0NOO0FERUU7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic2V0dXAtZW5jcnlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWl0ZW0uaGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA1KTtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICAubG9nby1saXQge1xuICAgIG1heC13aWR0aDogOTZweDtcbiAgfVxufSIsIjpob3N0IGlvbi1pdGVtLmhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbn1cbjpob3N0IC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xufVxuOmhvc3QgLmNvbnRhaW5lciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCAubG9nby1saXQge1xuICBtYXgtd2lkdGg6IDk2cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL3NldHVwLWVuY3J5cHRpb24vc2V0dXAtZW5jcnlwdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb21wb25lbnRzL3NldHVwLWVuY3J5cHRpb24vc2V0dXAtZW5jcnlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNEQUFBO0FDQUo7QURFRTtFQUNFLG9EQUFBO0FDQUo7QURDSTtFQUNFLHlCQUFBO0FDQ047QURFRTtFQUNFLGVBQUE7QUNBSjtBRENBLG92Q0FBb3ZDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taXRlbS5oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIC5sb2dvLWxpdCB7XG4gICAgbWF4LXdpZHRoOiA5NnB4O1xuICB9XG59IiwiOmhvc3QgaW9uLWl0ZW0uaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XG59XG46aG9zdCAuY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5sb2dvLWxpdCB7XG4gIG1heC13aWR0aDogOTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 28178:
/*!**************************************************************************!*\
  !*** ./libs/drive/src/lib/containers/drive-page/drive-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrivePageComponent": () => (/* binding */ DrivePageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _components_select_folder_select_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/select-folder/select-folder.component */ 69151);
/* harmony import */ var _components_setup_encryption_setup_encryption_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/setup-encryption/setup-encryption.component */ 85339);
/* harmony import */ var _services_mediafile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mediafile.service */ 39962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ui_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/header/header.component */ 63040);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/items-container/items-container.component */ 92197);
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/breadcrumbs/breadcrumbs.component */ 42335);
/* harmony import */ var _components_dropable_dropable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dropable/dropable.component */ 84772);
/* harmony import */ var _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/bytes-to-size.pipe */ 6344);
/* harmony import */ var _pipes_total_storage_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/total-storage.pipe */ 30698);


















const _c0 = ["addFileElement"];
function DrivePageComponent_ion_col_31_hexa_dropable_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "hexa-dropable", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("actions", function DrivePageComponent_ion_col_31_hexa_dropable_15_Template_hexa_dropable_actions_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DrivePageComponent_ion_col_31_ion_infinite_scroll_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-infinite-scroll", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionInfinite", function DrivePageComponent_ion_col_31_ion_infinite_scroll_16_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.actions("displayMoreItem", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-infinite-scroll-content", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DrivePageComponent_ion_col_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-grid", 22)(3, "ion-row", 23)(4, "hexa-breadcrumbs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("actions", function DrivePageComponent_ion_col_31_Template_hexa_breadcrumbs_actions_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 25)(7, "span", 26)(8, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "bytesToSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "totalStorage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div")(14, "hexa-items-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("actionsEvent", function DrivePageComponent_ion_col_31_Template_hexa_items_container_actionsEvent_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DrivePageComponent_ion_col_31_hexa_dropable_15_Template, 1, 0, "hexa-dropable", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, DrivePageComponent_ion_col_31_ion_infinite_scroll_16_Template, 2, 0, "ion-infinite-scroll", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 7, ctx_r0.breadcrumbs$))("isSearching", ((ctx_r0.searchbarElement == null ? null : ctx_r0.searchbarElement.nativeElement == null ? null : ctx_r0.searchbarElement.nativeElement.value == null ? null : ctx_r0.searchbarElement.nativeElement.value.length) || 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 13, ctx_r0.allMedia$))), " Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", items_r4)("account", ctx_r0.account$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", items_r4.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", items_r4.length > 0);
  }
}
function DrivePageComponent_ng_template_33_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 35)(1, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-skeleton-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-skeleton-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-skeleton-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return [];
};
function DrivePageComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 21)(1, "ion-grid", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DrivePageComponent_ng_template_33_ion_row_2_Template, 7, 0, "ion-row", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](1, _c1).constructor(10));
  }
}
class DrivePageComponent {
  constructor(_mediaFileService, _toastCtrl, _alertCtrl, _modalCtrl, _authService, _loaderService) {
    this._mediaFileService = _mediaFileService;
    this._toastCtrl = _toastCtrl;
    this._alertCtrl = _alertCtrl;
    this._modalCtrl = _modalCtrl;
    this._authService = _authService;
    this._loaderService = _loaderService;
    this.account$ = this._authService.account$;
    this.items$ = this._mediaFileService.items$;
    this.allMedia$ = this._mediaFileService.allMedia$;
    this.breadcrumbs$ = this._mediaFileService.breadcrumbs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(breadcrumbs => {
      const maxBreadcrumbs = this.maxBreadcrumbs;
      if (breadcrumbs.length > maxBreadcrumbs) {
        breadcrumbs.splice(0, breadcrumbs.length - maxBreadcrumbs);
      }
      return breadcrumbs;
    }));
    this.maxBreadcrumbs = 3;
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._loaderService.setStatus(true);
      yield _this._mediaFileService.getFiles();
      _this._loaderService.setStatus(false);
    })();
  }
  actions(type, payload) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('[INFO] DrivePageComponent.actions():', type, payload);
      switch (true) {
        case type === 'addFile':
          _this2.searchbarElement.nativeElement.value = '';
          _this2.addFileElement.nativeElement.click();
          break;
        case type === 'onFileChange':
          {
            _this2.searchbarElement.nativeElement.value = '';
            const target = payload.target;
            const files = [...Array.from(target.files || [])];
            if (!files[0]) {
              target.value = '';
              return;
            }
            // ask for encryption
            const {
              data: conditions,
              role
            } = yield _this2._askFoEncryption();
            // check if user canceled operation
            if (!conditions || role === 'cancel') {
              target.value = '';
              return;
            }
            _this2._loaderService.setStatus(true);
            let i = 0;
            while (i !== files.length) {
              yield _this2._mediaFileService.upload({
                file: files[i],
                accessControlConditions: conditions,
                fromAccount: _this2._authService.account$.value
              });
              ++i;
            }
            _this2._loaderService.setStatus(false);
            // notify user that files was uploaded successfully
            const opts = {
              message: `File${files.length > 1 ? 's' : ''} uploaded successfully`,
              duration: 2000,
              position: 'bottom',
              color: 'primary',
              buttons: [{
                text: 'ok',
                side: 'end',
                handler: function () {
                  var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    return yield _this2._toastCtrl.dismiss();
                  });
                  return function handler() {
                    return _ref.apply(this, arguments);
                  };
                }()
              }],
              keyboardClose: true
            };
            yield _this2._displayMessage(_this2._toastCtrl, opts);
            target.value = '';
            break;
          }
        case type === 'searchByName':
          {
            const {
              detail: {
                value = null
              }
            } = payload;
            _this2._mediaFileService.searchByName(value);
            break;
          }
        case type === 'reload':
          _this2.searchbarElement.nativeElement.value = '';
          yield _this2.ionViewDidEnter();
          break;
        case type === 'navTo':
          {
            _this2.searchbarElement.nativeElement.value = '';
            const {
              item: {
                _id
              } = null
            } = payload;
            _this2._mediaFileService.navToFolderId(_id);
            break;
          }
        case type === 'newFolder':
          {
            _this2.searchbarElement.nativeElement.value = '';
            yield _this2._createFolder();
            break;
          }
        case type === 'delete':
          {
            const {
              item: {
                _id = null,
                isFolder = false
              } = null
            } = payload;
            if (!_id) {
              throw new Error('delete(): payload is invalid');
            }
            _this2._deleteItem(_id, isFolder);
            break;
          }
        case type === 'download':
          {
            const {
              item: {
                _id = null,
                isFolder = false
              } = null
            } = payload;
            if (!_id || isFolder) {
              throw new Error('download(): payload is invalid');
            }
            yield _this2._downloadFile(_id);
            break;
          }
        case type === 'rename':
          {
            const {
              item: {
                _id = null,
                name = null
              } = {}
            } = payload;
            if (!_id) {
              throw new Error('rename(): payload is invalid');
            }
            yield _this2._rename(_id);
            break;
          }
        case type === 'move':
          {
            _this2.searchbarElement.nativeElement.value = '';
            const {
              item: {
                _id = null
              } = null
            } = payload;
            if (!_id) {
              throw new Error('move(): payload is invalid');
            }
            yield _this2._move(_id);
            break;
          }
        case type === 'share':
          {
            const {
              item = null
            } = payload;
            if (!item || item.isFolder) {
              throw new Error('share(): payload is invalid');
            }
            yield _this2._share(item);
            break;
          }
      }
    })();
  }
  _createFolder() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ask for folder name
      const alertOpts = {
        header: 'Create new Folder',
        message: 'Enter folder name',
        inputs: [{
          name: 'folderName',
          type: 'text',
          placeholder: 'Folder Name',
          attributes: {
            require: true,
            minlength: 1
          }
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Create',
          role: 'ok'
        }],
        mode: 'ios'
      };
      const {
        data,
        role
      } = yield _this3._displayMessage(_this3._alertCtrl, alertOpts);
      if (role !== 'ok' || !data.values.folderName) {
        return;
      }
      _this3._loaderService.setStatus(true);
      yield _this3._mediaFileService.createFolder(data.values.folderName);
      _this3._loaderService.setStatus(false);
      // notify user that folder was successfully created
      const notifOpts = {
        message: 'Folder successfully created',
        duration: 2000,
        position: 'bottom',
        color: 'primary',
        buttons: [{
          text: 'ok',
          side: 'end',
          handler: function () {
            var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              return yield _this3._toastCtrl.dismiss();
            });
            return function handler() {
              return _ref2.apply(this, arguments);
            };
          }()
        }],
        keyboardClose: true
      };
      yield _this3._displayMessage(_this3._toastCtrl, notifOpts);
    })();
  }
  _deleteItem(_id, isFolder) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // prompt to confirm delete if is a folder
      if (isFolder) {
        const alertOpts = {
          header: 'Delete Folder',
          message: `
          <p>Are you sure you want to delete this folder? All files and subfolders will be deleted.</p>
        `,
          buttons: [{
            text: 'Cancel',
            role: 'cancel'
          }, {
            text: 'Delete',
            role: 'confirm'
          }]
        };
        const {
          role
        } = yield _this4._displayMessage(_this4._alertCtrl, alertOpts);
        if (role !== 'confirm') {
          return;
        }
      }
      _this4._loaderService.setStatus(true);
      yield _this4._mediaFileService.delete(_id);
      _this4._loaderService.setStatus(false);
      // notify user that file was uploaded successfully
      const toastOpts = {
        message: `${isFolder ? 'Folder' : 'File'} deleted successfully`,
        duration: 2000,
        position: 'bottom',
        color: 'primary',
        buttons: [{
          text: 'ok',
          side: 'end',
          handler: function () {
            var _ref3 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              return yield _this4._toastCtrl.dismiss();
            });
            return function handler() {
              return _ref3.apply(this, arguments);
            };
          }()
        }],
        keyboardClose: true
      };
      yield _this4._displayMessage(_this4._toastCtrl, toastOpts);
    })();
  }
  _downloadFile(_id) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5._loaderService.setStatus(true);
      yield _this5._mediaFileService.downloadFile(_id);
      _this5._loaderService.setStatus(false);
    })();
  }
  _rename(_id) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // get current name
      const item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this6.items$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(items => items.find(item => item._id === _id))));
      const {
        name = null
      } = item || {};
      // ask for new name
      const opts = {
        header: 'Rename',
        message: 'Enter new name',
        inputs: [{
          name: 'newName',
          type: 'text',
          placeholder: 'New Name',
          value: name
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Rename',
          role: 'ok'
        }],
        mode: 'ios'
      };
      const {
        data,
        role
      } = yield _this6._displayMessage(_this6._alertCtrl, opts);
      if (role !== 'ok' || !data.values.newName) {
        return;
      }
      _this6._loaderService.setStatus(true);
      yield _this6._mediaFileService.rename(_id, data.values.newName);
      _this6._loaderService.setStatus(false);
    })();
  }
  _move(_id) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const folders = yield _this7._mediaFileService.getAllFolders();
      const ionModal = yield _this7._modalCtrl.create({
        component: _components_select_folder_select_folder_component__WEBPACK_IMPORTED_MODULE_2__.SelectFolderComponent,
        componentProps: {
          folders
        },
        cssClass: 'modalSelectFolder'
      });
      yield ionModal.present();
      const {
        data,
        role
      } = yield ionModal.onDidDismiss();
      console.log('move(): data: ', data, role);
      if (role !== 'ok' || !data) {
        return;
      }
      _this7._loaderService.setStatus(true);
      _this7._mediaFileService.moveTo(_id, data);
      _this7._loaderService.setStatus(false);
      yield _this7._displayMessage(_this7._toastCtrl, {
        message: 'File moved successfully',
        duration: 1200,
        position: 'bottom',
        color: 'primary',
        buttons: [{
          text: 'ok',
          side: 'end',
          handler: function () {
            var _ref4 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              return yield _this7._toastCtrl.dismiss();
            });
            return function handler() {
              return _ref4.apply(this, arguments);
            };
          }()
        }],
        keyboardClose: true
      });
    })();
  }
  _share(item) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!item.accessControlConditions && !item.encryptedSymmetricKey) {
        // TODO: use browser API too share CID link from IPFS gateway
        const param = `${item.cid}.${item.name.split('.').pop()}`;
        const host = window.location.origin;
        const url = `${host}/#/ipfs/${param}`;
        yield _this8._mediaFileService.shareWithWebAPI(item, url);
      } else {
        // // open share modal
        const ionModal = yield _this8._modalCtrl.create({
          component: _components_setup_encryption_setup_encryption_component__WEBPACK_IMPORTED_MODULE_3__.SetupEncryptionComponent,
          cssClass: 'modalAlert',
          componentProps: {
            item,
            walletAddress: _this8._authService.account$.value,
            chainName: _this8._authService.signer$.value.provider.network.name
          }
        });
        yield ionModal.present();
        const {
          data: accessControlConditions,
          role
        } = yield ionModal.onDidDismiss();
        if (role !== 'ok' || !accessControlConditions) {
          return;
        }
        // send new condition to shared method from media file service
        _this8._loaderService.setStatus(true);
        yield _this8._mediaFileService.shareWithEncryption({
          ...item,
          accessControlConditions
        }, _this8._authService.account$.value);
        _this8._loaderService.setStatus(false);
        // notify user that file was uploaded successfully
        const opts = {
          message: `File shared successfully`,
          duration: 2000,
          position: 'bottom',
          color: 'primary',
          buttons: [{
            text: 'ok',
            side: 'end',
            handler: function () {
              var _ref5 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                return yield _this8._toastCtrl.dismiss();
              });
              return function handler() {
                return _ref5.apply(this, arguments);
              };
            }()
          }],
          keyboardClose: true
        };
        yield _this8._displayMessage(_this8._toastCtrl, opts);
      }
    })();
  }
  _askFoEncryption() {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const walletAddress = _this9._authService.account$.value;
      // const {chainId, name: chainName} = this._authService.signer$.value.provider.network;
      const ionModal = yield _this9._modalCtrl.create({
        component: _components_setup_encryption_setup_encryption_component__WEBPACK_IMPORTED_MODULE_3__.SetupEncryptionComponent,
        cssClass: 'modalAlert',
        componentProps: {
          walletAddress
          // chainName
        }
      });

      yield ionModal.present();
      const {
        data,
        role
      } = yield ionModal.onDidDismiss();
      return {
        data,
        role
      };
    })();
  }
  _displayMessage(ctrl, opts) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ctrlInstance = yield ctrl.create(opts);
      yield ctrlInstance.present();
      const {
        data,
        role
      } = yield ctrlInstance.onDidDismiss();
      return {
        data,
        role
      };
    })();
  }
}
DrivePageComponent.ɵfac = function DrivePageComponent_Factory(t) {
  return new (t || DrivePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_mediafile_service__WEBPACK_IMPORTED_MODULE_4__.MediaFileService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
DrivePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: DrivePageComponent,
  selectors: [["hexa-drive-page"]],
  viewQuery: function DrivePageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSearchbar, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.searchbarElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.addFileElement = _t.first);
    }
  },
  decls: 45,
  vars: 5,
  consts: [["collapse", "fade", "mode", "ios"], ["slot", "start"], ["enterkeyhint", "search", "inputmode", "search", "mode", "ios", 3, "debounce", "ionChange"], ["slot", "end"], ["color", "primary", "fill", "clear", 3, "click"], ["name", "sync"], ["color", "primary", 3, "click"], ["color", "primary", "fill", "outline", 3, "click"], ["side", "end", "menuId", "seconde", "contentId", "drive"], ["color", "primary"], ["fullscreen", "", "id", "drive", 1, "ion-padding-horizontal"], [1, "ion-align-items-start"], ["size", "12", 4, "ngIf", "ngIfElse"], ["skeletonHTML", ""], ["slot", "fixed", "horizontal", "end", "vertical", "bottom", 1, "ion-hide-md-up"], ["name", "add"], ["side", "start"], ["name", "document-outline"], ["name", "folder-outline"], ["type", "file", "id", "file-input", "multiple", "true", "hidden", "", 3, "change"], ["addFileElement", ""], ["size", "12"], [1, "header-grid"], [1, "ion-align-items-center", "ion-padding-vertical"], [3, "breadcrumbs", "isSearching", "actions"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-float-end", "item-stats", "ion-text-end"], ["color", "medium"], [3, "items", "account", "actionsEvent"], [3, "actions", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], [3, "actions"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "Loading more data..."], ["role", "article", "class", "item clickable ion-align-items-center ion-padding-start", 4, "ngFor", "ngForOf"], ["role", "article", 1, "item", "clickable", "ion-align-items-center", "ion-padding-start"], ["size", "1", 1, "ion-padding"], ["animated", "", 2, "width", "100%"], ["size", "9", 1, "ion-padding-vertical"], ["size", "2", 1, "ion-padding"]],
  template: function DrivePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0)(1, "hexa-ui-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-searchbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function DrivePageComponent_Template_ion_searchbar_ionChange_3_listener($event) {
        return ctx.actions("searchByName", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](4, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DrivePageComponent_Template_ion_button_click_5_listener() {
        return ctx.actions("reload");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DrivePageComponent_Template_ion_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](44);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r3.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Add Files ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DrivePageComponent_Template_ion_button_click_9_listener() {
        return ctx.actions("newFolder");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " New Folder ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-menu", 8)(12, "ion-header")(13, "ion-toolbar", 9)(14, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Start Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-content")(17, "ion-list")(18, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Menu Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Menu Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Menu Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Menu Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Menu Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "ion-content", 10)(29, "ion-grid")(30, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, DrivePageComponent_ion_col_31_Template, 17, 15, "ion-col", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, DrivePageComponent_ng_template_33_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "ion-fab", 14)(36, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-fab-list", 16)(39, "ion-fab-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DrivePageComponent_Template_ion_fab_button_click_39_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](44);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r3.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "ion-fab-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DrivePageComponent_Template_ion_fab_button_click_41_listener() {
        return ctx.actions("newFolder");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DrivePageComponent_Template_input_change_43_listener($event) {
        return ctx.actions("onFileChange", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 3, ctx.items$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ui_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.UIHeaderComponent, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_6__.ItemsContainerComponent, _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _components_dropable_dropable_component__WEBPACK_IMPORTED_MODULE_8__.DropableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_9__.BytesToSizePipe, _pipes_total_storage_pipe__WEBPACK_IMPORTED_MODULE_10__.TotalStoragePipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 1.1rem;\n  overflow: hidden;\n  background-color: transparent;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-grid.noItems[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 618px;\n  margin: 1rem auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2RyaXZlL3NyYy9saWIvY29udGFpbmVycy9kcml2ZS1wYWdlL2RyaXZlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVM7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0VBUUEsNkJBQUE7RUFDQSwwREFBQTtBQ2RWO0FET1U7RUFDRSx1QkFBQTtBQ0xaO0FETVk7RUFDRSx5QkFBQTtBQ0pkO0FEZUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDYk4iLCJmaWxlIjoiZHJpdmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gaW9uLXRvb2xiYXIge1xuICAvLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vIH1cblxuICBpb24tY29udGVudCB7XG4gICAgPiBpb24tZ3JpZCB7XG4gICAgICA+IGlvbi1yb3cge1xuICAgICAgICAgPiBpb24tY29sIGRpdiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgXG4gICAgICAgICAgPiBpb24tbGlzdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBpb24tZ3JpZC5ub0l0ZW1zIHtcbiAgICBwIHtcbiAgICAgIG1heC13aWR0aDogNjE4cHg7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYge1xuICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWdyaWQubm9JdGVtcyBwIHtcbiAgbWF4LXdpZHRoOiA2MThweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZHJpdmUvc3JjL2xpYi9jb250YWluZXJzL2RyaXZlLXBhZ2UvZHJpdmUtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvZHJpdmUvc3JjL2xpYi9jb250YWluZXJzL2RyaXZlLXBhZ2UvZHJpdmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUztFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFRQSw2QkFBQTtFQUNBLDBEQUFBO0FDZFY7QURPVTtFQUNFLHVCQUFBO0FDTFo7QURNWTtFQUNFLHlCQUFBO0FDSmQ7QURlSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNiTjtBRENBLHdnRUFBd2dFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAvLyBpb24tdG9vbGJhciB7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICA+IGlvbi1ncmlkIHtcbiAgICAgID4gaW9uLXJvdyB7XG4gICAgICAgICA+IGlvbi1jb2wgZGl2IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICA+IGlvbi1saXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG4gIGlvbi1ncmlkLm5vSXRlbXMge1xuICAgIHAge1xuICAgICAgbWF4LXdpZHRoOiA2MThweDtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XG4gICAgfVxuICB9XG59IiwiOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYgPiBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tZ3JpZC5ub0l0ZW1zIHAge1xuICBtYXgtd2lkdGg6IDYxOHB4O1xuICBtYXJnaW46IDFyZW0gYXV0byAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8726:
/*!*************************************************************!*\
  !*** ./libs/drive/src/lib/directives/dropable.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropableDirective": () => (/* binding */ DropableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class DropableDirective {
  constructor(ref) {
    this.ref = ref;
    this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = true;
  }
  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
  }
  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const files = e?.dataTransfer?.files;
    if (!files) {
      return;
    }
    this.fileOver = false;
    if (files.length > 0) {
      const target = this.ref.nativeElement;
      target.files = files;
      this.fileDropped.emit({
        target
      });
      this.fileDrop = true;
      console.log(`You have choosen ${files.length} files`);
    }
  }
}
DropableDirective.ɵfac = function DropableDirective_Factory(t) {
  return new (t || DropableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DropableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DropableDirective,
  selectors: [["", "hexaDropable", ""]],
  hostVars: 4,
  hostBindings: function DropableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DropableDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function DropableDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      })("drop", function DropableDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fileover", ctx.fileOver)("filedrop", ctx.fileDrop);
    }
  },
  outputs: {
    fileDropped: "fileDropped"
  }
});

/***/ }),

/***/ 61990:
/*!********************************************!*\
  !*** ./libs/drive/src/lib/drive.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriveModule": () => (/* binding */ DriveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 58722);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _containers_drive_page_drive_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/drive-page/drive-page.component */ 28178);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/items-container/items-container.component */ 92197);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 23205);
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ 42335);
/* harmony import */ var _services_mediafile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/mediafile.service */ 39962);
/* harmony import */ var _directives_dropable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/dropable.directive */ 8726);
/* harmony import */ var _components_dropable_dropable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropable/dropable.component */ 84772);
/* harmony import */ var _components_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/item-preview/item-preview.component */ 25389);
/* harmony import */ var _components_select_folder_select_folder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/select-folder/select-folder.component */ 69151);
/* harmony import */ var _components_setup_encryption_setup_encryption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/setup-encryption/setup-encryption.component */ 85339);
/* harmony import */ var _components_files_options_list_files_options_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/files-options-list/files-options-list.component */ 51999);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/safe.pipe */ 86181);
/* harmony import */ var _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/bytes-to-size.pipe */ 6344);
/* harmony import */ var _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/is-shared.pipe */ 23457);
/* harmony import */ var _pipes_preview_file_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/preview-file.pipe */ 48226);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/slice-address.pipe */ 89918);
/* harmony import */ var _pipes_total_storage_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/total-storage.pipe */ 30698);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _hexa_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hexa/ui */ 29142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);

























class DriveModule {}
DriveModule.ɵfac = function DriveModule_Factory(t) {
  return new (t || DriveModule)();
};
DriveModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: DriveModule
});
DriveModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  providers: [_services_mediafile_service__WEBPACK_IMPORTED_MODULE_5__.MediaFileService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.driveRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _hexa_ui__WEBPACK_IMPORTED_MODULE_18__.UiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](DriveModule, {
    declarations: [_containers_drive_page_drive_page_component__WEBPACK_IMPORTED_MODULE_1__.DrivePageComponent, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__.ItemsContainerComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _components_dropable_dropable_component__WEBPACK_IMPORTED_MODULE_7__.DropableComponent, _components_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_8__.ItemPreviewComponent, _components_select_folder_select_folder_component__WEBPACK_IMPORTED_MODULE_9__.SelectFolderComponent, _components_setup_encryption_setup_encryption_component__WEBPACK_IMPORTED_MODULE_10__.SetupEncryptionComponent, _components_files_options_list_files_options_list_component__WEBPACK_IMPORTED_MODULE_11__.FilesOptionsListComponent, _directives_dropable_directive__WEBPACK_IMPORTED_MODULE_6__.DropableDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe, _pipes_bytes_to_size_pipe__WEBPACK_IMPORTED_MODULE_13__.BytesToSizePipe, _pipes_is_shared_pipe__WEBPACK_IMPORTED_MODULE_14__.IsSharePipe, _pipes_preview_file_pipe__WEBPACK_IMPORTED_MODULE_15__.PreviewFilePipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_16__.SliceAddressPipe, _pipes_total_storage_pipe__WEBPACK_IMPORTED_MODULE_17__.TotalStoragePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _hexa_ui__WEBPACK_IMPORTED_MODULE_18__.UiModule]
  });
})();

/***/ }),

/***/ 75264:
/*!*******************************************!*\
  !*** ./libs/drive/src/lib/drive.utils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b64ToFile": () => (/* binding */ b64ToFile),
/* harmony export */   "fileToB64": () => (/* binding */ fileToB64)
/* harmony export */ });
// function that convert file to base64 string
const fileToB64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (!reader.result) {
        reject();
      }
      // check if is buffer or string and return as base64
      const result = typeof reader.result === 'string' ? reader.result : reader?.result?.toString();
      if (!result) {
        reject();
      }
      resolve(result);
    };
    reader.onerror = error => reject(error);
  });
};
// function that conver base64 to file
const b64ToFile = (b64, fileName = 'file') => {
  const arr = b64.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {
    type: mime
  });
};

/***/ }),

/***/ 58722:
/*!******************************************!*\
  !*** ./libs/drive/src/lib/lib.routes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "driveRoutes": () => (/* binding */ driveRoutes)
/* harmony export */ });
/* harmony import */ var _containers_drive_page_drive_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/drive-page/drive-page.component */ 28178);

const driveRoutes = [{
  path: '',
  pathMatch: 'full',
  component: _containers_drive_page_drive_page_component__WEBPACK_IMPORTED_MODULE_0__.DrivePageComponent
}];

/***/ }),

/***/ 6344:
/*!********************************************************!*\
  !*** ./libs/drive/src/lib/pipes/bytes-to-size.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BytesToSizePipe": () => (/* binding */ BytesToSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BytesToSizePipe {
  transform(value) {
    if (!value) {
      return '0 Bytes';
    }
    const bytes = Number(value);
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
      return '0 Bytes';
    }
    // convert bytes to size
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  }
}
BytesToSizePipe.ɵfac = function BytesToSizePipe_Factory(t) {
  return new (t || BytesToSizePipe)();
};
BytesToSizePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "bytesToSize",
  type: BytesToSizePipe,
  pure: true
});

/***/ }),

/***/ 23457:
/*!****************************************************!*\
  !*** ./libs/drive/src/lib/pipes/is-shared.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsSharePipe": () => (/* binding */ IsSharePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class IsSharePipe {
  transform(value, account) {
    if (!value) {
      return false;
    }
    if (!account) {
      return false;
    }
    return value.some(condition => {
      return condition?.parameters?.includes(':userAddress') && condition?.returnValueTest?.value !== account && condition?.returnValueTest?.comparator === '=';
    });
  }
}
IsSharePipe.ɵfac = function IsSharePipe_Factory(t) {
  return new (t || IsSharePipe)();
};
IsSharePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "isShared",
  type: IsSharePipe,
  pure: true
});

/***/ }),

/***/ 48226:
/*!*******************************************************!*\
  !*** ./libs/drive/src/lib/pipes/preview-file.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewFilePipe": () => (/* binding */ PreviewFilePipe)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _services_mediafile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mediafile.service */ 39962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class PreviewFilePipe {
  constructor(_mediafile) {
    this._mediafile = _mediafile;
  }
  transform(value) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!value || !value.cid) {
        return '';
      }
      // use method from servcie
      const {
        file
      } = yield _this._mediafile.downloadFile(value._id, false);
      if (!file) {
        return 'Error loading file';
      }
      const url = URL.createObjectURL(file);
      return url;
    })();
  }
}
PreviewFilePipe.ɵfac = function PreviewFilePipe_Factory(t) {
  return new (t || PreviewFilePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mediafile_service__WEBPACK_IMPORTED_MODULE_1__.MediaFileService, 16));
};
PreviewFilePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "previewFile",
  type: PreviewFilePipe,
  pure: true
});

/***/ }),

/***/ 86181:
/*!***********************************************!*\
  !*** ./libs/drive/src/lib/pipes/safe.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);



class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 89918:
/*!********************************************************!*\
  !*** ./libs/drive/src/lib/pipes/slice-address.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceAddressPipe": () => (/* binding */ SliceAddressPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SliceAddressPipe {
  transform(value) {
    if (!value) {
      return '';
    }
    if (value.length < 10) {
      return value;
    }
    return `${value.slice(0, 6)}...${value.slice(-4)}`;
  }
}
SliceAddressPipe.ɵfac = function SliceAddressPipe_Factory(t) {
  return new (t || SliceAddressPipe)();
};
SliceAddressPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sliceAddress",
  type: SliceAddressPipe,
  pure: true
});

/***/ }),

/***/ 30698:
/*!********************************************************!*\
  !*** ./libs/drive/src/lib/pipes/total-storage.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalStoragePipe": () => (/* binding */ TotalStoragePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TotalStoragePipe {
  transform(value) {
    if (!value) {
      return 0;
    }
    if (value.length <= 0) {
      return 0;
    }
    return value.reduce((acc, cur) => acc + (cur?.size || 0), 0);
  }
}
TotalStoragePipe.ɵfac = function TotalStoragePipe_Factory(t) {
  return new (t || TotalStoragePipe)();
};
TotalStoragePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "totalStorage",
  type: TotalStoragePipe,
  pure: true
});

/***/ }),

/***/ 39962:
/*!**********************************************************!*\
  !*** ./libs/drive/src/lib/services/mediafile.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaFileService": () => (/* binding */ MediaFileService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 66018);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 58921);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _drive_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drive.utils */ 75264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);








const ROOT_DB_COLLECTION = 'd-drive';
class MediaFileService {
  constructor(_authService, _fileService, _datastoreService, _encryptionService, _notificationSerivce, _ipfsPinningService, _promptStrategy) {
    this._authService = _authService;
    this._fileService = _fileService;
    this._datastoreService = _datastoreService;
    this._encryptionService = _encryptionService;
    this._notificationSerivce = _notificationSerivce;
    this._ipfsPinningService = _ipfsPinningService;
    this._promptStrategy = _promptStrategy;
    this._queryFilterBy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this._filterBy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('root');
    this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.breadcrumbs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._items$.asObservable(), this._filterBy$.asObservable()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([items, path]) => {
      const ROOT = {
        name: 'root',
        _id: 'root'
      };
      if (!items?.length) {
        return [ROOT];
      }
      const breadcrumbs = [];
      // find `root` parent folder from current path
      while (!breadcrumbs.find(b => b.name === 'root')) {
        const parent = items.find(item => item._id === path && item.isFolder);
        if (!parent) {
          breadcrumbs.unshift(ROOT);
          break;
        }
        breadcrumbs.unshift({
          name: parent.name,
          _id: parent._id
        });
        if (parent.name === 'root') {
          break;
        }
        path = parent.parent;
      }
      return breadcrumbs;
    }));
    this.items$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._items$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(Boolean)), this._filterBy$.asObservable(), this._queryFilterBy$.asObservable()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([items, filterBy, queryFilter]) => items?.filter(item => queryFilter ? item.name.toLowerCase().includes(queryFilter.toLowerCase()) : item.parent === filterBy)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(items => {
      // extract filers & folders
      const folders = items.filter(item => item?.isFolder);
      const filess = items.filter(item => !item?.isFolder);
      // return sorted datas
      const result = [
      // sort folders first
      ...folders.sort((a, b) => a.name?.localeCompare(b.name)), ...filess.sort((a, b) => a.name?.localeCompare(b.name))];
      return result;
    }));
    this.allMedia$ = this._items$.asObservable();
  }
  getFiles() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        files = []
      } = yield _this._datastoreService.getData(ROOT_DB_COLLECTION,
      // collection
      ['files'],
      // key
      {
        files: []
      } // default value to save if not exist (optional)
      );

      console.log('[INFO] files: ', files);
      _this._items$.next(files);
    })();
  }
  getAllFolders() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const folders = _this2._items$.value.filter(item => item.isFolder);
      return folders;
    })();
  }
  upload({
    file,
    accessControlConditions = [],
    metaDataValue = undefined,
    fromAccount = undefined
  }) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check if pinning service is ready and setup
      yield _this3._setupPinningStrategy();
      // build file metadata object
      const _id = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();
      const isoDateTime = new Date().toISOString();
      const metaData = !metaDataValue ? {
        parent: _this3._filterBy$.value,
        name: file?.name || _id,
        size: file.size,
        type: file.type,
        isFolder: false,
        createdIsoDateTime: isoDateTime,
        lastModifiedIsoDateTime: isoDateTime,
        _id
      } : {
        ...metaDataValue,
        lastModifiedIsoDateTime: isoDateTime
      };
      // encrypt file if needed
      if (accessControlConditions?.length > 0) {
        // update variables with encrypted data
        metaData.accessControlConditions = accessControlConditions;
      }
      // upload file to ipfs
      const {
        cid
      } = accessControlConditions?.length <= 0 ? yield _this3._fileService.add(file) : yield _this3._fileService.getDag().then( /*#__PURE__*/function () {
        var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dag) {
          console.log('[INFO] {MediafileService} accessControlConditions: ', accessControlConditions);
          const addressses = accessControlConditions.filter(acc => acc.returnValueTest?.comparator === '=').map(acc => acc.returnValueTest.value);
          console.log('[INFO] {MediafileService} addressses: ', addressses);
          // find DID from address
          const authorizedDID = yield Promise.all(addressses.map(address => _this3._authService.getAccountDID(address)));
          console.log('[INFO] {MediafileService} authorizedDID: ', authorizedDID);
          const fileB64 = yield (0,_drive_utils__WEBPACK_IMPORTED_MODULE_4__.fileToB64)(file);
          console.log('[INFO] {MediafileService} fileB64: ', fileB64);
          const jwe = yield _this3._encryptionService.encryptData(fileB64, authorizedDID);
          console.log('[INFO] {MediafileService} jwe: ', jwe);
          const dagCID = yield dag.put(jwe, {
            storeCodec: 'dag-jose',
            hashAlg: 'sha2-256',
            pin: true,
            preload: false,
            timeout: 10000
          });
          console.log('[INFO] {MediafileService} dagCID: ', dagCID);
          const cid = dagCID?.toString();
          return {
            cid
          };
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      // pin hash
      yield _this3._ipfsPinningService.pin(cid);
      // add CID to file metadata
      metaData.cid = cid;
      // update files list with new file metadata
      const files = [..._this3._items$.value, metaData];
      // update object data to database
      yield _this3._datastoreService.saveData({
        files
      }, ROOT_DB_COLLECTION, ['files']);
      // notify shared user
      const destinationAddress = _this3._isWalletAddressEcryptionCondition(accessControlConditions, fromAccount);
      if (destinationAddress && file && fromAccount) {
        yield _this3._notificationSerivce.sendNotification(metaData, fromAccount, destinationAddress, 'drive');
      }
      // update service state
      _this3._items$.next(files);
      return metaData;
    })();
  }
  createFolder(name) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // find parent folder from current path
      const currentPath = _this4._filterBy$.value;
      // handle unexisting parent folder
      if (!currentPath) {
        throw new Error('CurrentPath not found');
      }
      // run upload task
      const isoDateTime = new Date().toISOString();
      const mediaFile = {
        parent: currentPath,
        name,
        size: 0,
        isFolder: true,
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
        createdIsoDateTime: isoDateTime,
        lastModifiedIsoDateTime: isoDateTime
      };
      const mediaFiles = [..._this4._items$.value];
      mediaFiles.push(mediaFile);
      // update object data to database
      yield _this4._datastoreService.saveData({
        files: mediaFiles
      }, ROOT_DB_COLLECTION, ['files']);
      // update state
      _this4._items$.next(mediaFiles);
    })();
  }
  delete(id) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check if pinning service is ready and setup
      yield _this5._setupPinningStrategy();
      const files = [..._this5._items$.value];
      const index = files.findIndex(item => item._id === id);
      if (index === -1) {
        throw new Error('File not found');
      }
      const cid = files[index].cid;
      if (cid) {
        // unpin file from ipfs
        yield _this5._ipfsPinningService.unpin(cid).catch(err => {
          console.log('[ERROR] unpin: ', err);
        });
      }
      // remove file from list
      files.splice(index, 1);
      // find all children files
      const children = files.filter(item => item.parent === id);
      // unpin all children files
      yield Promise.all(children.map( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (child) {
          if (child.cid) {
            yield _this5._ipfsPinningService.unpin(child.cid);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()));
      // remove all children files
      children.forEach(child => {
        const childIndex = files.findIndex(item => item._id === child._id);
        if (childIndex !== -1) {
          files.splice(childIndex, 1);
        }
      });
      // update object data to database
      yield _this5._datastoreService.saveData({
        files
      }, ROOT_DB_COLLECTION, ['files']);
      // update state
      _this5._items$.next(files);
    })();
  }
  rename(_id, newName) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const files = [..._this6._items$.value];
      const index = _this6._items$.value.findIndex(item => item._id === _id);
      if (index === -1) {
        throw new Error('File not found');
      }
      // rename file
      files[index].name = newName;
      // update object data to database
      yield _this6._datastoreService.saveData({
        files
      }, ROOT_DB_COLLECTION, ['files']);
      // update state
      _this6._items$.next(files);
    })();
  }
  moveTo(itemId, itemDestination) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const files = [..._this7._items$.value];
      const index = files.findIndex(file => file._id === itemId);
      if (index === -1) {
        throw new Error('File not found');
      }
      // move file
      files[index].parent = itemDestination._id;
      // update object data to database
      yield _this7._datastoreService.saveData({
        files
      }, ROOT_DB_COLLECTION, ['files']);
      // update state
      _this7._items$.next(files);
    })();
  }
  downloadFile(_id, inBorwser = true) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        cid,
        name,
        accessControlConditions = [],
        type
      } = _this8._items$.value.find(item => item._id === _id) || {};
      if (!cid) {
        throw new Error('File not found');
      }
      const result = {};
      // load and decrypt file from IPFS
      if (accessControlConditions?.length > 0) {
        const parsedCID = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.parse(cid);
        const dag = yield _this8._fileService.getDag();
        const jwe = yield dag.get(parsedCID);
        const fileB64 = yield _this8._encryptionService.decryptData(jwe.value);
        const file = (0,_drive_utils__WEBPACK_IMPORTED_MODULE_4__.b64ToFile)(fileB64, name);
        // convert array buffer to file and overwrite result object
        result.file = file;
      } else {
        // get file from ipfs
        const fileFromCID = yield _this8._fileService.getFromCID(cid);
        result.file = fileFromCID;
      }
      if (inBorwser) {
        console.log('[INFO] Creating download link...');
        // download file from browser
        const link = document.createElement('a');
        link.href = URL.createObjectURL(result.file);
        link.download = name || cid;
        link.click();
      }
      return result;
    })();
  }
  shareWithEncryption(file, fromAccount) {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        cid,
        accessControlConditions
      } = file;
      if (!cid) {
        throw new Error('File not found');
      }
      // get file from ipfs
      const {
        file: fileFromCID
      } = yield _this9.downloadFile(file._id, false);
      if (!fileFromCID) {
        throw new Error('File not found');
      }
      // re upload file to ipfs with new encryption
      yield _this9.upload({
        file: fileFromCID,
        accessControlConditions: accessControlConditions || [],
        metaDataValue: file,
        fromAccount
      });
      // delete old pin
      yield _this9.delete(file._id);
    })();
  }
  shareWithWebAPI(mediaFile, url) {
    var _this10 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        file
      } = yield _this10.downloadFile(mediaFile._id, false);
      if (!file) {
        throw new Error('File not found');
      }
      try {
        const {
          value: canShare
        } = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.canShare();
        if (canShare) {
          yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
            text: `${url}`
          });
        } else {
          // use browser polyfill
          yield navigator.share({
            text: `${url}`
          });
        }
      } catch (error) {
        console.error(error);
        throw new Error('Share API not supported');
      }
    })();
  }
  searchByName(name) {
    if (name) {
      this._filterBy$.next('root');
    }
    this._queryFilterBy$.next(name);
  }
  navToFolderId(id) {
    this._queryFilterBy$.next(null);
    if (id === 'root') {
      this._filterBy$.next('root');
      return;
    }
    const folder = this._items$.value.find(item => item._id === id && item.isFolder);
    if (!folder) {
      throw new Error('Folder not found');
    }
    this._filterBy$.next(id);
  }
  _isWalletAddressEcryptionCondition(encryptAccessCondition, account) {
    // check existing shared users account with Notifs protocol
    const isWalletAddressCondition = encryptAccessCondition?.find(c => c.method === '' && c.parameters.includes(':userAddress') && c.returnValueTest.value !== account);
    const destinationAddress = isWalletAddressCondition?.returnValueTest?.value;
    return destinationAddress;
  }
  _buildAbsolutPath(file) {
    const path = [file.name];
    let parent = this._items$.value.find(item => item._id === file.parent);
    while (parent !== undefined) {
      path.unshift(parent.name);
      parent = this._items$.value.find(item => item._id === parent?.parent);
    }
    return path.join('/');
  }
  _setupPinningStrategy() {
    var _this11 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userData = _this11._authService.profile$.value;
      console.log('[INFO] Setup pinning strategy...', userData);
      // check existing config for pining servcie
      const config = yield _this11._promptStrategy.askSetupService(userData?.ipfsConfig?.serviceName);
      if (!config) {
        return;
      }
      if (config?.token === '') {
        config.serviceName = '';
      }
      // save user config to user base
      yield _this11._authService.updateProfilData({
        ...userData,
        ipfsConfig: {
          ...config
        }
      });
      // define pinning service using user cnfig
      _this11._ipfsPinningService.setStrategy(config.serviceName);
    })();
  }
}
MediaFileService.ɵfac = function MediaFileService_Factory(t) {
  return new (t || MediaFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_IPFS_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_ENCRYPTION_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_NOTIFICATION_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_IPFS_PINNING_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_3__.TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE)));
};
MediaFileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: MediaFileService,
  factory: MediaFileService.ɵfac
});

/***/ }),

/***/ 26549:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };
  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};
const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;
  const config = webPlugin.config;
  const Plugins = cap.Plugins;
  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  }
  // TODO: add link to upgrade guide
  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};
var ExceptionCode = /*#__PURE__*/(() => {
  (function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
  })(ExceptionCode || (ExceptionCode = {}));
  return ExceptionCode;
})();
class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== 'web';
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = err => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  // Deprecated props
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};
    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });
        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class CapacitorCookiesPluginWeb extends WebPlugin {
  getCookies() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return;
        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
        let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    })();
  }
  setCookie(options) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : '';
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  deleteCookie(options) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearCookies() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearAllCookies() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(blob);
    });
  });
  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      // last character will always be "&" so slice it off
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, '');
  // Remove initial "&" from the reduce
  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra);
  // Get the content-type
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || '';
  // If body is already a string, then pass it through as-is.
  if (typeof options.data === 'string') {
    output.body = options.data;
  }
  // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let {
        responseType = 'text'
      } = response.ok ? options : {};
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case 'json':
          data = yield response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = yield response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 48470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 48470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ 3656).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 83656)).then(m => new m.ShareWeb())
});



/***/ })

}]);
//# sourceMappingURL=304.cada7f4f3da0562e.js.map