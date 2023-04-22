"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[3161],{

/***/ 3161:
/*!*********************************!*\
  !*** ./libs/notes/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesModule": () => (/* reexport safe */ _lib_notes_module__WEBPACK_IMPORTED_MODULE_0__.NotesModule),
/* harmony export */   "notesRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.notesRoutes)
/* harmony export */ });
/* harmony import */ var _lib_notes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/notes.module */ 13954);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 9596);



/***/ }),

/***/ 25040:
/*!**************************************************************************!*\
  !*** ./libs/notes/src/lib/components/note-modal/note-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteModalComponent": () => (/* binding */ NoteModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function NoteModalComponent_ion_chip_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteModalComponent_ion_chip_15_Template_ion_icon_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.removeKeyword(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", keyword_r2, " ");
  }
}
class NoteModalComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      createdIsoDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(new Date().toISOString()),
      lastModifiedIsoDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      keywords: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([])
    });
  }
  // use getter setter to define the property
  get item() {
    return this._item;
  }
  set item(val) {
    console.log('previous item = ', this._item);
    console.log('currently selected item=', val);
    this._item = val;
    this.form.patchValue(val);
    // patch keywords
    if (!val?.keywords) {
      return;
    }
    const keywords = this.form.get('keywords');
    keywords.clear();
    val.keywords.forEach(keyword => {
      keywords.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(keyword));
    });
  }
  addKeyword(value) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const keywords = _this.form.get('keywords');
      keywords.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(value));
    })();
  }
  removeKeyword(index) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const keywords = _this2.form.get('keywords');
      keywords.removeAt(index);
    })();
  }
}
NoteModalComponent.ɵfac = function NoteModalComponent_Factory(t) {
  return new (t || NoteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController));
};
NoteModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NoteModalComponent,
  selectors: [["hexa-note-modal"]],
  inputs: {
    item: "item"
  },
  decls: 31,
  vars: 3,
  consts: [["size", "12"], [3, "formGroup"], ["type", "text", "formControlName", "title"], [1, "ion-padding-vertical", "container"], ["color", "medium", 1, "ion-padding-start"], [1, "ion-padding-start"], ["color", "primary", 4, "ngFor", "ngForOf"], ["placeholder", "add keyword", "type", "text"], ["inputKeyword", ""], ["size", "small", "fill", "outline", "slot", "end", 3, "click"], ["position", "floating"], ["formControlName", "content", 3, "autoGrow"], ["slot", "end"], [3, "click"], ["color", "primary"], ["name", "close-circle", 3, "click"]],
  template: function NoteModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "ion-grid")(2, "ion-row")(3, "ion-col", 0)(4, "ion-list", 1)(5, "ion-item")(6, "ion-label")(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "ion-label", 4)(12, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Keywords");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NoteModalComponent_ion_chip_15_Template, 3, 1, "ion-chip", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteModalComponent_Template_ion_button_click_19_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        ctx.addKeyword(_r1.value);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r1.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item")(22, "ion-label", 10)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-textarea", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-footer")(27, "ion-toolbar")(28, "ion-buttons", 12)(29, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteModalComponent_Template_ion_button_click_29_listener() {
        return ctx.modalCtrl.dismiss(ctx.form.value, "save");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", (tmp_1_0 = ctx.form.get("keywords")) == null ? null : tmp_1_0.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoGrow", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvbm90ZXMvc3JjL2xpYi9jb21wb25lbnRzL25vdGUtbW9kYWwvbm90ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 33687:
/*!**************************************************************************!*\
  !*** ./libs/notes/src/lib/containers/notes-page/notes-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesPageComponent": () => (/* binding */ NotesPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _components_note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/note-modal/note-modal.component */ 25040);
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notes.service */ 94323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ui_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/header/header.component */ 63040);










function NotesPageComponent_ion_col_10_ion_row_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotesPageComponent_ion_col_10_ion_row_14_Template_ion_row_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.actions("edit", item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 17)(2, "ion-text")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r5.content || "", "...");
  }
}
const _c0 = function () {
  return {
    display: "flex"
  };
};
function NotesPageComponent_ion_col_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 9)(1, "ion-grid", 10)(2, "ion-row", 11)(3, "ion-col", 12)(4, "ion-label")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "My Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 13)(8, "span", 14)(9, "ion-label")(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "ion-grid", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NotesPageComponent_ion_col_10_ion_row_14_Template, 7, 2, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const items_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", items_r3.length, " Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", items_r3);
  }
}
function NotesPageComponent_ng_template_12_Template(rf, ctx) {}
class NotesPageComponent {
  constructor(_notesService, _modalCtrl, _loaderService) {
    this._notesService = _notesService;
    this._modalCtrl = _modalCtrl;
    this._loaderService = _loaderService;
    this.items$ = this._notesService.items$;
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._loaderService.setStatus(true);
      yield _this._notesService.getNotes();
      _this._loaderService.setStatus(false);
    })();
  }
  actions(type, payload) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (type) {
        case 'add':
          {
            const {
              data,
              role
            } = yield _this2._promptNewNote();
            if (role !== 'save' || !data?.title || !data?.content) {
              return;
            }
            _this2._loaderService.setStatus(true);
            yield _this2._notesService.createNote(data.title, data.content);
            _this2._loaderService.setStatus(false);
            break;
          }
        case 'edit':
          {
            const {
              data,
              role
            } = yield _this2._promptNewNote(payload);
            console.log('data', data, payload);
            if (role !== 'save' || !data?.title || !data?.content) {
              return;
            }
            _this2._loaderService.setStatus(true);
            yield _this2._notesService.update(payload._id, data);
            _this2._loaderService.setStatus(false);
            break;
          }
        case 'delete':
          yield _this2._notesService.delete(payload?._id);
          break;
        case 'search':
          {
            const {
              detail: {
                value = null
              }
            } = payload;
            _this2._notesService.search(value);
            break;
          }
      }
    })();
  }
  _promptNewNote(note) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3._modalCtrl.create({
        component: _components_note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_2__.NoteModalComponent,
        componentProps: {
          item: note
        }
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      return {
        data,
        role
      };
    })();
  }
}
NotesPageComponent.ɵfac = function NotesPageComponent_Factory(t) {
  return new (t || NotesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notes_service__WEBPACK_IMPORTED_MODULE_3__.NotesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
NotesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NotesPageComponent,
  selectors: [["hexa-notes-page"]],
  decls: 14,
  vars: 5,
  consts: [["collapse", "fade", "mode", "ios"], ["slot", "start"], ["enterkeyhint", "search", "inputmode", "search", "mode", "ios", 3, "debounce", "ionChange"], ["slot", "end"], [3, "click"], ["fullscreen", "", "id", "notes", 1, "ion-padding-horizontal"], [1, "ion-align-items-start"], ["size", "12", 4, "ngIf", "ngIfElse"], ["skeletonHTML", ""], ["size", "12"], [1, "header-grid"], [1, "ion-align-items-center", "ion-padding-bottom"], ["size", "auto", 3, "ngStyle"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-float-end", "item-stats", "ion-text-end"], ["class", "item ion-align-items-center ion-padding-horizontal", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", "ion-align-items-center", "ion-padding-horizontal", 3, "click"], ["size", "12", "size", "auto", 1, "ion-align-items-center", "ion-text-wrap", "pointer"]],
  template: function NotesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "hexa-ui-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-searchbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function NotesPageComponent_Template_ion_searchbar_ionChange_3_listener($event) {
        return ctx.actions("search", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](4, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotesPageComponent_Template_ion_button_click_5_listener() {
        return ctx.actions("add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Add Note ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 5)(8, "ion-grid")(9, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, NotesPageComponent_ion_col_10_Template, 15, 4, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NotesPageComponent_ng_template_12_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 3, ctx.items$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ui_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.UIHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 1.1rem;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-grid.noItems[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 618px;\n  margin: 1rem auto 0;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%] {\n  background: var(--background-app);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover    > ion-col[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: -1px;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL25vdGVzL3NyYy9saWIvY29udGFpbmVycy9ub3Rlcy1wYWdlL25vdGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVM7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0VBUUEsdUJBQUE7RUFDQSwwREFBQTtBQ2RWO0FET1U7RUFDRSx1QkFBQTtBQ0xaO0FETVk7RUFDRSx5QkFBQTtBQ0pkO0FEZUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDYk47QURpQkU7RUFDRSxpQ0FBQTtFQUNBLGdEQUFBO0FDZko7QURrQkk7RUFDRSx5REFBQTtBQ2hCTjtBRGlCTTtFQUNFLCtCQUFBO0FDZlI7QURtQkk7RUFDRSxtQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLGVBQUE7QUNsQk4iLCJmaWxlIjoibm90ZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gaW9uLXRvb2xiYXIge1xuICAvLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vIH1cblxuICBpb24tY29udGVudCB7XG4gICAgPiBpb24tZ3JpZCB7XG4gICAgICA+IGlvbi1yb3cge1xuICAgICAgICAgPiBpb24tY29sIGRpdiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgXG4gICAgICAgICAgPiBpb24tbGlzdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBpb24tZ3JpZC5ub0l0ZW1zIHtcbiAgICBwIHtcbiAgICAgIG1heC13aWR0aDogNjE4cHg7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1yb3cuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTsgLy8gI2UwZTBlMDtcblxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTApO1xuICAgICAgPiBpb24tY29sIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIH1cblxuICAgIC5wb2ludGVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYgPiBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tZ3JpZC5ub0l0ZW1zIHAge1xuICBtYXgtd2lkdGg6IDYxOHB4O1xuICBtYXJnaW46IDFyZW0gYXV0byAwO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIgPiBpb24tY29sIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIC5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvbm90ZXMvc3JjL2xpYi9jb250YWluZXJzL25vdGVzLXBhZ2Uvbm90ZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvbm90ZXMvc3JjL2xpYi9jb250YWluZXJzL25vdGVzLXBhZ2Uvbm90ZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUztFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFRQSx1QkFBQTtFQUNBLDBEQUFBO0FDZFY7QURPVTtFQUNFLHVCQUFBO0FDTFo7QURNWTtFQUNFLHlCQUFBO0FDSmQ7QURlSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNiTjtBRGlCRTtFQUNFLGlDQUFBO0VBQ0EsZ0RBQUE7QUNmSjtBRGtCSTtFQUNFLHlEQUFBO0FDaEJOO0FEaUJNO0VBQ0UsK0JBQUE7QUNmUjtBRG1CSTtFQUNFLG1CQUFBO0FDakJOO0FEb0JJO0VBQ0UsZUFBQTtBQ2xCTjtBRENBLG90R0FBb3RHIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAvLyBpb24tdG9vbGJhciB7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICA+IGlvbi1ncmlkIHtcbiAgICAgID4gaW9uLXJvdyB7XG4gICAgICAgICA+IGlvbi1jb2wgZGl2IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICA+IGlvbi1saXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG4gIGlvbi1ncmlkLm5vSXRlbXMge1xuICAgIHAge1xuICAgICAgbWF4LXdpZHRoOiA2MThweDtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XG4gICAgfVxuICB9XG5cbiAgaW9uLXJvdy5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpOyAvLyAjZTBlMGUwO1xuXG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMCk7XG4gICAgICA+IGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgfVxuXG4gICAgLnBvaW50ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICBcbn0iLCI6aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbn1cbjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYgPiBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1ncmlkLm5vSXRlbXMgcCB7XG4gIG1heC13aWR0aDogNjE4cHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XG59XG46aG9zdCBpb24tcm93Lml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpob3ZlciA+IGlvbi1jb2wge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9596:
/*!******************************************!*\
  !*** ./libs/notes/src/lib/lib.routes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notesRoutes": () => (/* binding */ notesRoutes)
/* harmony export */ });
/* harmony import */ var _containers_notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/notes-page/notes-page.component */ 33687);

const notesRoutes = [{
  path: '',
  children: [{
    path: '',
    component: _containers_notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_0__.NotesPageComponent
  }]
}];

/***/ }),

/***/ 13954:
/*!********************************************!*\
  !*** ./libs/notes/src/lib/notes.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesModule": () => (/* binding */ NotesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _hexa_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/ui */ 29142);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib.routes */ 9596);
/* harmony import */ var _containers_notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/notes-page/notes-page.component */ 33687);
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notes.service */ 94323);
/* harmony import */ var _components_note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/note-modal/note-modal.component */ 25040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);











class NotesModule {}
NotesModule.ɵfac = function NotesModule_Factory(t) {
  return new (t || NotesModule)();
};
NotesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: NotesModule
});
NotesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_services_notes_service__WEBPACK_IMPORTED_MODULE_3__.NotesService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_1__.notesRoutes), _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _hexa_ui__WEBPACK_IMPORTED_MODULE_0__.UiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NotesModule, {
    declarations: [_containers_notes_page_notes_page_component__WEBPACK_IMPORTED_MODULE_2__.NotesPageComponent, _components_note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_4__.NoteModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _hexa_ui__WEBPACK_IMPORTED_MODULE_0__.UiModule]
  });
})();

/***/ }),

/***/ 94323:
/*!******************************************************!*\
  !*** ./libs/notes/src/lib/services/notes.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesService": () => (/* binding */ NotesService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);





const ROOT_DB_COLLECTION = 'd-notes';
class NotesService {
  constructor(_datastoreService, _encryptionService) {
    this._datastoreService = _datastoreService;
    this._encryptionService = _encryptionService;
    this._queryFilterBy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.items$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this._items$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(Boolean)), this._queryFilterBy$.asObservable()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(([items, queryFilter]) => items?.filter(item => queryFilter ? item.title?.toLowerCase().includes(queryFilter.toLowerCase()) : true)));
    this.allMedia$ = this._items$.asObservable();
  }
  getNotes() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        notes = []
      } = yield _this._datastoreService.getData(ROOT_DB_COLLECTION,
      // collection
      ['notes'],
      // key
      {
        notes: []
      } // default value to save if not exist (optional)
      );

      console.log('[INFO] notes: ', notes);
      _this._items$.next(notes);
    })();
  }
  createNote(title, content) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // run upload task
      const isoDateTime = new Date().toISOString();
      const note = {
        content,
        title,
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        createdIsoDateTime: isoDateTime,
        lastModifiedIsoDateTime: isoDateTime
      };
      const notes = [..._this2._items$.value];
      notes.push(note);
      // update object data to database
      yield _this2._datastoreService.saveData({
        notes
      }, ROOT_DB_COLLECTION, ['notes']);
      // update state
      _this2._items$.next(notes);
    })();
  }
  delete(id) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const notes = [..._this3._items$.value];
      const index = notes.findIndex(item => item._id === id);
      // remove note from list
      notes.splice(index, 1);
      // update object data to database
      yield _this3._datastoreService.saveData({
        notes
      }, ROOT_DB_COLLECTION, ['notes']);
      // update state
      _this3._items$.next(notes);
    })();
  }
  update(id, data) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const notes = [..._this4._items$.value];
      const index = notes.findIndex(item => item._id === id);
      if (index === -1) {
        throw new Error('Note not found');
      }
      // update note
      notes[index] = {
        ...notes[index],
        ...data,
        _id: id,
        lastModifiedIsoDateTime: new Date().toISOString()
      };
      // update object data to database
      yield _this4._datastoreService.saveData({
        notes
      }, ROOT_DB_COLLECTION, ['notes']);
      // update state
      _this4._items$.next(notes);
    })();
  }
  search(name) {
    this._queryFilterBy$.next(name);
  }
}
NotesService.ɵfac = function NotesService_Factory(t) {
  return new (t || NotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_ENCRYPTION_SERVICE)));
};
NotesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: NotesService,
  factory: NotesService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=3161.9967a8d6d3a06bad.js.map