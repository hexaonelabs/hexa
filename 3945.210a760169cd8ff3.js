"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[3945],{

/***/ 3945:
/*!**********************************!*\
  !*** ./libs/wallet/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModule": () => (/* reexport safe */ _lib_wallet_module__WEBPACK_IMPORTED_MODULE_0__.WalletModule),
/* harmony export */   "walletRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.walletRoutes)
/* harmony export */ });
/* harmony import */ var _lib_wallet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/wallet.module */ 1039);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 84266);



/***/ }),

/***/ 21494:
/*!*************************************************************************************!*\
  !*** ./libs/wallet/src/lib/components/items-container/items-container.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsContainerComponent": () => (/* binding */ ItemsContainerComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/diff-percent.pipe */ 6856);








function ItemsContainerComponent_ion_row_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ItemsContainerComponent_ion_row_1_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-list", 15)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.actions("swap-asset", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Swap asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.actions("openExternalLink", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "View on block explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function () {
  return {
    display: "flex"
  };
};
function ItemsContainerComponent_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_Template_ion_row_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.actions("preview", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 3)(2, "ion-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 6)(7, "ion-text")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-text", 7)(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-col", 8)(15, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "diffPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ItemsContainerComponent_ion_row_1_span_21_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "diffPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "diffPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-col", 11)(26, "ion-label")(27, "ion-text")(28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-text", 7)(32, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-fab-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-popover", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ItemsContainerComponent_ion_row_1_ng_template_38_Template, 11, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.chainLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 15, item_r1.symbol));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", item_r1.rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 17, item_r1.rate, item_r1.rate24h) < 0 ? "danger" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 20, item_r1.rate, item_r1.rate24h) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 23, item_r1.rate, item_r1.rate24h), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", item_r1.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.balance, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 26, item_r1.symbol), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "options-btn-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("trigger", "options-btn-", i_r2, "");
  }
}
const _c1 = function () {
  return [];
};
const MAX_ITEMS_TO_DISPLAY = 25;
class ItemsContainerComponent {
  constructor(_popCtrl, _modalCtrl) {
    this._popCtrl = _popCtrl;
    this._modalCtrl = _modalCtrl;
    this.maxItemToDisplay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(MAX_ITEMS_TO_DISPLAY);
    this.actionsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
        case type === 'preview':
          {
            _this._preview(payload.item);
            break;
          }
        case type === 'openExternalLink':
          {
            const popover = yield _this._popCtrl.getTop();
            if (popover) yield popover.dismiss();
            const {
              item = undefined
            } = payload;
            if (!item || !item.address) return;
            window.open(`https://etherscan.io/token/${item.address}`, '_blank');
          }
      }
      _this.actionsEvent.emit({
        type,
        payload
      });
    })();
  }
  trackByfn(index, item) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return item._id;
    })();
  }
  _preview(item) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const ionModal = await this._modalCtrl.create({
      //   component: ItemPreviewComponent,
      //   componentProps: {
      //     item
      //   },
      //   cssClass: 'ion-modal-preview-file',
      // });
      // await ionModal.present();
      // const { data, role = 'cancel' } = await ionModal.onDidDismiss();
      // this.actions(role, { item: data });
      console.log('preview', item);
    })();
  }
}
ItemsContainerComponent.ɵfac = function ItemsContainerComponent_Factory(t) {
  return new (t || ItemsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController));
};
ItemsContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ItemsContainerComponent,
  selectors: [["hexa-items-container"]],
  inputs: {
    items: "items"
  },
  outputs: {
    actionsEvent: "actionsEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 6,
  consts: [[1, "ion-no-padding"], ["class", "item ion-align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", "ion-align-items-center", 3, "click"], ["size", "4", 1, "ion-align-items-center", "ion-text-wrap", 3, "ngStyle"], [1, "thumbnail"], [3, "src"], [1, "ion-padding-start"], ["color", "medium"], [1, "ion-hide-md-down"], [3, "color"], [4, "ngIf"], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end", 3, "ngStyle"], ["size", "small", "translucent", "true", "mode", "ios", 3, "id"], ["color", "medium", "size", "small", "color", "primary", "name", "ellipsis-vertical"], ["triggerAction", "click", 3, "trigger"], ["lines", "none", 1, "ion-margin-bottom"], ["detail", "", 3, "click"]],
  template: function ItemsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemsContainerComponent_ion_row_1_Template, 39, 30, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, ctx.items || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1), 0, ctx.maxItemToDisplay$.value));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonPopover, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_1__.DiffPercentPipe],
  styles: ["[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%] {\n  background: var(--background-app);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover    > ion-col[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: -1px;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --background-hover-opacity: 0.2;\n  --backdrop-filter: none;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-avatar.thumbnail.md.hydrated[_ngcontent-%COMP%] {\n  transform: scale(0.3) translateX(-45px) translateY(-45px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: solid 6px var(--ion-color-light);\n  background: var(--ion-color-light);\n  z-index: 1;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9pdGVtcy1jb250YWluZXIvaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsaUNBQUE7RUFDQSxnREFBQTtBQ0RKO0FESUk7RUFDRSx5REFBQTtBQ0ZOO0FER007RUFDRSwrQkFBQTtBQ0RSO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FETUk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ0pOO0FET0k7RUFDRSxxQkFBQTtBQ0xOO0FET0k7RUFDRSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0xOO0FEU007RUFDRSxjQUFBO0FDUFIiLCJmaWxlIjoiaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1yb3cuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTsgLy8gI2UwZTBlMDtcblxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTApO1xuICAgICAgPiBpb24tY29sIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4yO1xuICAgICAgLS1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG4gICAgfSBcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICBpb24tYXZhdGFyLnRodW1ibmFpbC5tZC5oeWRyYXRlZCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtNDVweCkgdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm9yZGVyOiBzb2xpZCA2cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59IiwiOmhvc3QgaW9uLXJvdy5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIgPiBpb24tY29sIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4yO1xuICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tYXZhdGFyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1hdmF0YXIudGh1bWJuYWlsLm1kLmh5ZHJhdGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTQ1cHgpIHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiBzb2xpZCA2cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tbGFiZWwgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9pdGVtcy1jb250YWluZXIvaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93YWxsZXQvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW1zLWNvbnRhaW5lci9pdGVtcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQ0FBQTtFQUNBLGdEQUFBO0FDREo7QURJSTtFQUNFLHlEQUFBO0FDRk47QURHTTtFQUNFLCtCQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0FDSE47QURNSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FDSk47QURPSTtFQUNFLHFCQUFBO0FDTE47QURPSTtFQUNFLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FDTE47QURTTTtFQUNFLGNBQUE7QUNQUjtBRENBLGdyR0FBZ3JHIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1yb3cuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTsgLy8gI2UwZTBlMDtcblxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTApO1xuICAgICAgPiBpb24tY29sIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4yO1xuICAgICAgLS1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG4gICAgfSBcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICBpb24tYXZhdGFyLnRodW1ibmFpbC5tZC5oeWRyYXRlZCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtNDVweCkgdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm9yZGVyOiBzb2xpZCA2cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59IiwiOmhvc3QgaW9uLXJvdy5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06aG92ZXIgPiBpb24tY29sIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4yO1xuICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tYXZhdGFyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtIGlvbi1hdmF0YXIudGh1bWJuYWlsLm1kLmh5ZHJhdGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTQ1cHgpIHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiBzb2xpZCA2cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tbGFiZWwgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 19366:
/*!*****************************************************************************************!*\
  !*** ./libs/wallet/src/lib/components/swap-assets-modal/swap-assets-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapAssetsModalComponent": () => (/* binding */ SwapAssetsModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);




class SwapAssetsModalComponent {
  constructor() {
    this.fromAssetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.fromAmountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.toAssetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.toAmountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.assets = [{
      name: 'Ethereum',
      symbol: 'ETH'
    }, {
      name: 'USD Coin',
      symbol: 'USDC'
    }, {
      name: 'Matic',
      symbol: 'MATIC'
    }];
  }
  onFromAssetChange() {
    console.log('onFromAssetChange', this.fromAssetControl.value);
  }
  onToAssetChange() {
    console.log('onToAssetChange', this.toAssetControl.value);
  }
  reviewSwap() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('reviewSwap', _this.fromAssetControl.value, _this.fromAmountControl.value, _this.toAssetControl.value, _this.toAmountControl.value);
    })();
  }
}
SwapAssetsModalComponent.ɵfac = function SwapAssetsModalComponent_Factory(t) {
  return new (t || SwapAssetsModalComponent)();
};
SwapAssetsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SwapAssetsModalComponent,
  selectors: [["hexa-swap-assets-modal"]],
  inputs: {
    fromAsset: "fromAsset",
    toAsset: "toAsset"
  },
  decls: 3,
  vars: 0,
  template: function SwapAssetsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Upcoming feature... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2FwLWFzc2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9zd2FwLWFzc2V0cy1tb2RhbC9zd2FwLWFzc2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 20440:
/*!*****************************************************************************!*\
  !*** ./libs/wallet/src/lib/containers/wallet-page/wallet-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageComponent": () => (/* binding */ WalletPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wallet.service */ 56240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/items-container/items-container.component */ 21494);
/* harmony import */ var _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/avatar.directive */ 12713);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/assets-type.pipe */ 14769);














function WalletPageComponent_ion_row_3_ng_template_12_ng_container_18_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_12_ng_container_18_ion_item_1_Template_ion_checkbox_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const wallet_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.actions("toggle-account", {
        account: wallet_r8.address,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-avatar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-label")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-buttons", 17)(9, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const wallet_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", wallet_r8.isDisabled === true ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", wallet_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 3, wallet_r8.address));
  }
}
function WalletPageComponent_ion_row_3_ng_template_12_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_3_ng_template_12_ng_container_18_ion_item_1_Template, 13, 5, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r6.wallets$));
  }
}
function WalletPageComponent_ion_row_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 12)(1, "ion-list", 13)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "My accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 14)(6, "ion-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_12_Template_ion_checkbox_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const account_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.actions("toggle-account", {
        account: account_r4,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-avatar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-label")(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-buttons", 17)(14, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, WalletPageComponent_ion_row_3_ng_template_12_ng_container_18_Template, 3, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_12_Template_ion_item_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.actions("add-account"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-label")(23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Add account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const account_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", account_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 3, account_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 5, ctx_r5.wallets$)) == null ? null : tmp_2_0.length) || 0) > 0);
  }
}
function WalletPageComponent_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-col", 7)(5, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-avatar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-popover", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, WalletPageComponent_ion_row_3_ng_template_12_Template, 25, 7, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const account_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", account_r4)("size", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 3, account_r4), " ");
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 28)(1, "ion-grid", 38)(2, "ion-row", 39)(3, "ion-col", 40)(4, "ion-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 41)(7, "ion-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 42)(10, "ion-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "hexa-items-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("actionsEvent", function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template_hexa_items_container_actionsEvent_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tokensBalances_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 1, tokensBalances_r16, "token"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 28)(1, "ion-grid", 44)(2, "ion-row", 45)(3, "ion-col", 46)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " There is no token in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 31)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " You can buy token from any exchange and send to your wallet address to see it here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template, 15, 4, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ion_row_7_ng_container_19_ng_template_3_Template, 9, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const tokensBalances_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, tokensBalances_r16, "token")) == null ? null : tmp_0_0.length) || 0 > 0)("ngIfElse", _r20);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-img", 53);
  }
  if (rf & 2) {
    const nft_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", (nft_r32 == null ? null : nft_r32.external_data == null ? null : nft_r32.external_data.image_512) || (nft_r32 == null ? null : nft_r32.external_data == null ? null : nft_r32.external_data.image));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 50)(1, "ion-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template, 1, 1, "ion-img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-card-content")(4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const nft_r32 = ctx.$implicit;
    const nftgroupe_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (nft_r32 == null ? null : nft_r32.external_data == null ? null : nft_r32.external_data.image_512) || (nft_r32 == null ? null : nft_r32.external_data == null ? null : nft_r32.external_data.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", nft_r32 == null ? null : nft_r32.external_data == null ? null : nft_r32.external_data.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (nftgroupe_r30 == null ? null : nftgroupe_r30.name) || (nftgroupe_r30 == null ? null : nftgroupe_r30.symbol), " ");
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template, 8, 3, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nftgroupe_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", nftgroupe_r30.nft_data);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, tokensBalances_r16, "nft"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 28)(1, "ion-grid", 44)(2, "ion-row", 45)(3, "ion-col", 46)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " There is no NFTs in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 31)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " You can buy NFTs from any marketplace and they will appear here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template, 3, 4, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template, 9, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const tokensBalances_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, tokensBalances_r16, "nft")) == null ? null : tmp_0_0.length) || 0 > 0)("ngIfElse", _r27);
  }
}
function WalletPageComponent_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 27)(1, "ion-col", 28)(2, "ion-grid", 12)(3, "ion-row", 29)(4, "ion-col", 30)(5, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Net Worth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-text")(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "netWorth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-col", 32)(12, "ion-segment", 33)(13, "ion-segment-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.selectedSegment = "tokens");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-segment-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.selectedSegment = "nfts");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "NFTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, WalletPageComponent_ion_row_7_ng_container_19_Template, 5, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, WalletPageComponent_ion_row_7_ng_container_20_Template, 5, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r16 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 4, tokensBalances_r16), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.selectedSegment);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "nfts");
  }
}
function WalletPageComponent_ng_template_9_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 55)(1, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-skeleton-text", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-skeleton-text", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-skeleton-text", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
function WalletPageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 27)(1, "ion-col", 28)(2, "ion-grid", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ng_template_9_ion_row_3_Template, 7, 0, "ion-row", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0).constructor(10));
  }
}
class WalletPageComponent {
  constructor(_alertCtrl, _popoverCtrl, _modalCtrl, _walletService, _loaderService) {
    this._alertCtrl = _alertCtrl;
    this._popoverCtrl = _popoverCtrl;
    this._modalCtrl = _modalCtrl;
    this._walletService = _walletService;
    this._loaderService = _loaderService;
    this.selectedSegment = 'nfts';
    this.account$ = this._walletService.account$;
    this.wallets$ = this._walletService.wallets$;
    this.tokensBalances$ = this._walletService.tokensBalances$;
  }
  actions(type, payload) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('actions', type, payload);
      switch (true) {
        case type === 'add-account':
          {
            const {
              data,
              role
            } = yield _this._promptPublicAdress();
            if (role !== 'ok') return;
            _this._loaderService.setStatus(true);
            const {
              values: {
                address = null
              }
            } = data;
            yield _this._walletService.addWallet(address);
            _this._loaderService.setStatus(false);
            const ionPopover = yield _this._popoverCtrl.getTop();
            if (ionPopover) {
              ionPopover.dismiss();
            }
            break;
          }
        case type === 'toggle-account':
          {
            const {
              account = null,
              event: {
                target: {
                  checked = false
                }
              }
            } = payload;
            if (!account) return;
            _this._loaderService.setStatus(true);
            const ionPopover = yield _this._popoverCtrl.getTop();
            if (ionPopover) {
              ionPopover.dismiss();
            }
            yield _this._walletService.toggleWallet(account, checked);
            _this._loaderService.setStatus(false);
            break;
          }
        case type === 'swap-asset':
          {
            const {
              item: asset = null
            } = payload;
            const {
              data,
              role
            } = yield _this._promptSwapAsset(asset);
            console.log('swap-asset', asset, data);
            if (role !== 'ok') return;
            // TODO: implement swap with service
            break;
          }
        default:
          break;
      }
    })();
  }
  _promptSwapAsset(fromAsset, toAsset) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionModal = yield _this2._modalCtrl.create({
        component: _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_2__.SwapAssetsModalComponent,
        componentProps: {
          fromAsset,
          toAsset
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
  _promptPublicAdress() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionAlert = yield _this3._alertCtrl.create({
        header: 'Add account',
        subHeader: 'You can connect more than one account to view all your balances and transactions in one place.',
        message: 'Enter wallet public address or ENS name',
        inputs: [{
          name: 'address',
          type: 'text',
          placeholder: '0x...'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Import',
          role: 'ok',
          cssClass: 'primary'
        }]
      });
      yield ionAlert.present();
      const {
        data,
        role
      } = yield ionAlert.onDidDismiss();
      return {
        data,
        role
      };
    })();
  }
}
WalletPageComponent.ɵfac = function WalletPageComponent_Factory(t) {
  return new (t || WalletPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
WalletPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: WalletPageComponent,
  selectors: [["hexa-wallet-page"]],
  decls: 11,
  vars: 7,
  consts: [[1, "ion-no-border"], ["class", "ion-align-items-center ion-padding-start", 4, "ngIf"], ["fullscreen", "", "id", "drive", 1, "ion-padding-horizontal"], ["class", "ion-align-items-start", 4, "ngIf", "ngIfElse"], ["skeletonHTML", ""], [1, "ion-align-items-center", "ion-padding-start"], ["size", "auto"], [1, "ion-padding-start"], ["id", "accounts-list", "color", "primary"], ["avatar", "", 3, "address", "size"], ["size", "small", "name", "chevron-down"], ["id", "wallet-account-popover", "trigger", "accounts-list", "triggerAction", "click"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-margin-bottom"], [1, "ion-margin-top"], ["mode", "md", "slot", "start", "checked", "", 3, "click"], ["slot", "start", "avatar", "", 1, "isConnected", 3, "address"], ["slot", "end", 1, "ion-no-margin", "ion-margin-start"], ["size", "small", "fill", "clear"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "copy-outline"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "ellipsis-vertical-sharp"], [4, "ngIf"], ["button", "", 1, "ion-margin-top", 3, "click"], ["size", "small", "color", "medium", "slot", "start", "name", "add-outline"], [4, "ngFor", "ngForOf"], ["mode", "md", "slot", "start", 3, "checked", "click"], ["slot", "start", "avatar", "", 3, "address"], [1, "ion-align-items-start"], ["size", "12"], [1, "ion-align-items-end"], [1, "ion-text-start"], ["color", "medium"], ["size", "3", 1, "ion-text-end"], ["mode", "ios", 3, "value"], ["value", "tokens", 3, "click"], ["value", "nfts", 3, "click"], ["size", "12", 4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "ion-no-padding", "ion-padding-bottom"], [1, "ion-align-items-start", "ion-margin-top"], ["size", "4"], [1, ""], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end"], [3, "items", "actionsEvent"], [1, "ion-no-padding", "ion-text-center", "noItems"], [1, "item", "ion-align-items-center", "ion-padding-center"], [1, "ion-text-center", "ion-margin-vertical"], [4, "ngIf", "ngIfElse"], ["noNFTs", ""], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3"], ["mode", "ios"], [3, "src", 4, "ngIf"], [3, "src"], ["role", "article", "class", "item clickable ion-align-items-center ion-padding-start", 4, "ngFor", "ngForOf"], ["role", "article", 1, "item", "clickable", "ion-align-items-center", "ion-padding-start"], ["size", "1", 1, "ion-padding"], ["animated", "", 2, "width", "100%"], ["size", "9", 1, "ion-padding-vertical"], ["size", "2", 1, "ion-padding"]],
  template: function WalletPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ion_row_3_Template, 13, 5, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-content", 2)(6, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, WalletPageComponent_ion_row_7_Template, 21, 6, "ion-row", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, WalletPageComponent_ng_template_9_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, ctx.account$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, ctx.tokensBalances$))("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__.ItemsContainerComponent, _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_5__.AvatarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_6__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_7__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_8__.AssetsTypePipe],
  styles: ["[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]    > ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  box-shadow: none;\n  background-color: white;\n  margin: 6px;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93YWxsZXQvc3JjL2xpYi9jb250YWluZXJzL3dhbGxldC1wYWdlL3dhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7QUNETjtBRE9RO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQVFBLHVCQUFBO0VBQ0EsMERBQUE7QUNaVjtBREtVO0VBQ0UsdUJBQUE7QUNIWjtBRElZO0VBQ0UseUJBQUE7QUNGZDtBRFNRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0FDUFYiLCJmaWxlIjoid2FsbGV0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIge1xuICAgID4gaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgID4gaW9uLWdyaWQge1xuICAgICAgPiBpb24tcm93IHtcbiAgICAgICAgPiBpb24tY29sIGRpdiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIFxuICAgICAgICAgID4gaW9uLWxpc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbn0iLCI6aG9zdCBpb24taGVhZGVyID4gaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29udGFpbmVycy93YWxsZXQtcGFnZS93YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2FsbGV0L3NyYy9saWIvY29udGFpbmVycy93YWxsZXQtcGFnZS93YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHlCQUFBO0FDRE47QURPUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFRQSx1QkFBQTtFQUNBLDBEQUFBO0FDWlY7QURLVTtFQUNFLHVCQUFBO0FDSFo7QURJWTtFQUNFLHlCQUFBO0FDRmQ7QURTUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtBQ1BWO0FEQ0Esd2dGQUF3Z0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIge1xuICAgID4gaW9uLXRvb2xiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgID4gaW9uLWdyaWQge1xuICAgICAgPiBpb24tcm93IHtcbiAgICAgICAgPiBpb24tY29sIGRpdiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIFxuICAgICAgICAgID4gaW9uLWxpc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbn0iLCI6aG9zdCBpb24taGVhZGVyID4gaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12713:
/*!************************************************************!*\
  !*** ./libs/wallet/src/lib/directives/avatar.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarDirective": () => (/* binding */ AvatarDirective)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class AvatarDirective {
  constructor(ref, renderer) {
    this.ref = ref;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const size = _this.size || 32;
      const el = _this.ref.nativeElement;
      // build element with jazzicon
      const jazzicon = yield __webpack_require__.e(/*! import() */ 5861).then(__webpack_require__.bind(__webpack_require__, /*! jazzicon-ts */ 35861)).then(m => m.default);
      const addr = _this.address.slice(2, 10);
      const value = jazzicon(size, parseInt(addr, 16));
      // add to dom
      _this.renderer.appendChild(el, value);
      // set styles
      _this.renderer.setStyle(el, 'display', 'flex');
      _this.renderer.setStyle(el, 'align-items', 'center');
      _this.renderer.setStyle(el, 'min-height', `${size}px`);
      _this.renderer.setStyle(el, 'min-width', `${size}px`);
      _this.renderer.setStyle(el, 'border-color', 'transparent');
      _this.renderer.setStyle(el, 'border-width', '2px');
      _this.renderer.setStyle(el, 'border-style', 'solid');
    })();
  }
}
AvatarDirective.ɵfac = function AvatarDirective_Factory(t) {
  return new (t || AvatarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
AvatarDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: AvatarDirective,
  selectors: [["", "avatar", ""]],
  inputs: {
    address: "address",
    size: "size"
  }
});

/***/ }),

/***/ 84266:
/*!*******************************************!*\
  !*** ./libs/wallet/src/lib/lib.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "walletRoutes": () => (/* binding */ walletRoutes)
/* harmony export */ });
/* harmony import */ var _containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/wallet-page/wallet-page.component */ 20440);

const walletRoutes = [{
  path: '',
  pathMatch: 'full',
  component: _containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_0__.WalletPageComponent
}];

/***/ }),

/***/ 14769:
/*!*******************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/assets-type.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsTypePipe": () => (/* binding */ AssetsTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AssetsTypePipe {
  transform(value, typeName) {
    if (!value) return [];
    if (!typeName) return value;
    switch (true) {
      case typeName === 'token':
        return value.filter(token => token.type !== "nft" && token.balance > 0).filter(token => token.balance > 0).filter(token => !token.name.includes('.')).sort((a, b) => b.value - a.value);
      case typeName === 'nft':
        return value.filter(token => token.type === "nft" && token.balance > 0);
      case typeName === 'tx':
        throw new Error('Not implemented yet');
    }
  }
}
AssetsTypePipe.ɵfac = function AssetsTypePipe_Factory(t) {
  return new (t || AssetsTypePipe)();
};
AssetsTypePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "assetsType",
  type: AssetsTypePipe,
  pure: true
});

/***/ }),

/***/ 6856:
/*!********************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/diff-percent.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiffPercentPipe": () => (/* binding */ DiffPercentPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DiffPercentPipe {
  transform(value, oldValue) {
    if (!value || !oldValue) return 0;
    const percent = (value - oldValue) / oldValue * 100;
    // returtn rounded with 2 decimal percent value
    return Math.round(percent * 100) / 100;
  }
}
DiffPercentPipe.ɵfac = function DiffPercentPipe_Factory(t) {
  return new (t || DiffPercentPipe)();
};
DiffPercentPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "diffPercent",
  type: DiffPercentPipe,
  pure: true
});

/***/ }),

/***/ 2660:
/*!*****************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/net-worth.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetWorthPipe": () => (/* binding */ NetWorthPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NetWorthPipe {
  transform(value) {
    if (!value) return 0;
    const total = value.reduce((acc, token) => acc + token.value || 0, 0);
    // only 2 decimals
    return Math.round(total * 100) / 100;
  }
}
NetWorthPipe.ɵfac = function NetWorthPipe_Factory(t) {
  return new (t || NetWorthPipe)();
};
NetWorthPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "netWorth",
  type: NetWorthPipe,
  pure: true
});

/***/ }),

/***/ 4633:
/*!*********************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/slice-address.pipe.ts ***!
  \*********************************************************/
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

/***/ 56240:
/*!********************************************************!*\
  !*** ./libs/wallet/src/lib/services/wallet.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletService": () => (/* binding */ WalletService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);




const CHAIN_IDS = [{
  id: 1,
  name: "Ethereum Mainnet",
  logo: 'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png'
},
// { id: 3, name: "Ropsten Testnet" },
// { id: 4, name: "Rinkeby Testnet" },
// { id: 5, name: "Goerli Testnet" },
// { id: 42, name: "Kovan Testnet" },
{
  id: 56,
  name: "Binance Smart Chain Mainnet",
  logo: 'https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png'
},
// { id: 97, name: "Binance Smart Chain Testnet" },
{
  id: 137,
  name: "Polygon Mainnet",
  logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png'
},
// {  id: 80001, name: "Polygon Mumbai Testnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png' },
// { id: 80001, name: "Polygon Testnet" },
{
  id: 43114,
  name: "Avalanche Mainnet",
  logo: "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png"
},
// { id: 43113, name: "Avalanche Testnet" },
{
  id: 250,
  name: "Fantom Opera Mainnet",
  logo: "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png"
},
// { id: 4002, name: "Fantom Opera Testnet" },
// { id: 128, name: "Heco Mainnet" },
// { id: 256, name: "Heco Testnet" },
// { id: 1666600000, name: "Harmony Mainnet" },
// { id: 1666700000, name: "Harmony Test" },
// { id: 100, name: "xDai Chain" },
{
  id: 42161,
  name: "Arbitrum Mainnet"
},
// { id: 421611, name: "Arbitrum Testnet" },
{
  id: 10,
  name: 'Optimism Mainnet',
  logo: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg'
}
// { id: 69, name: 'Optimism Testnet' }
];

const ROOT_DB_COLLECTION = 'd-wallet';
class WalletService {
  constructor(_loaderService, _datastoreService, _apiKey, _authService) {
    var _this = this;
    this._loaderService = _loaderService;
    this._datastoreService = _datastoreService;
    this._apiKey = _apiKey;
    this._authService = _authService;
    this.account$ = this._authService.account$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)( /*#__PURE__*/function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (account) {
        if (!account) return;
        if (_this._tokensBalances$.value) {
          return;
        }
        _this._loaderService.setStatus(true);
        _this._tokensBalances$.next([]);
        _this._loadEVMTokensBalances(account);
        const wallets = yield _this._loadOtherWallets();
        yield Promise.all(wallets.filter(w => !w.isDisabled).map(w => _this._loadEVMTokensBalances(w.address)));
        _this._loaderService.setStatus(false);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this._wallets$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.wallets$ = this._wallets$.asObservable();
    this._tokensBalances$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.tokensBalances$ = this._tokensBalances$.asObservable();
  }
  addWallet(address) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const walletsData = _this2._wallets$.value;
      const wallets = [...walletsData, {
        address
      }];
      yield _this2._datastoreService.saveData({
        wallets
      }, ROOT_DB_COLLECTION, ['wallets']);
      _this2._wallets$.next(wallets);
      yield _this2._loadEVMTokensBalances(address);
      return {
        address
      };
    })();
  }
  toggleWallet(address, isDisabled) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const walletsData = _this3._wallets$.value;
      const wallets = walletsData.map(w => {
        if (w.address === address) {
          return {
            ...w,
            isDisabled
          };
        }
        return w;
      });
      // update state
      _this3._wallets$.next(wallets);
      // update balances value
      const balances = _this3._tokensBalances$.value;
      if (isDisabled) {
        const filteredBalances = balances.filter(b => b.ownerAddress !== address);
        _this3._tokensBalances$.next(filteredBalances);
      } else {
        yield _this3._loadEVMTokensBalances(address);
      }
      // finaly save to db
      yield _this3._datastoreService.saveData({
        wallets
      }, ROOT_DB_COLLECTION, ['wallets']);
    })();
  }
  _loadOtherWallets() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallets = []
      } = yield _this4._datastoreService.getData(ROOT_DB_COLLECTION, ['wallets'],
      // key
      {
        wallets: []
      } // default value to save if not exist (optional)
      );
      // update state
      _this4._wallets$.next(wallets || []);
      return _this4._wallets$.value;
    })();
  }
  getTokensBalances(chainId, address) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${_this5._apiKey}`);
      const balances = (yield res.json()).data.items;
      const formatedBalances = balances.map(t => {
        return {
          address: t.contract_address,
          name: t.contract_name,
          symbol: t.contract_ticker_symbol,
          logo: t.logo_url,
          type: t.type,
          nft_data: t.nft_data,
          decimals: t.contract_decimals,
          balance: parseFloat((t.balance / 10 ** t.contract_decimals).toFixed(4)),
          rate: t.quote_rate,
          rate24h: t.quote_rate_24h,
          value: t.quote ? parseFloat(t.quote.toFixed(2)) : 0,
          chainId: parseInt(chainId),
          chainLogo: CHAIN_IDS.find(c => c.id === parseInt(chainId))?.logo,
          ownerAddress: address
        };
      });
      return {
        balances: formatedBalances
      };
    })();
  }
  _loadEVMTokensBalances(account) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all(CHAIN_IDS.map( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (chain) {
          const {
            balances
          } = yield _this6.getTokensBalances(`${chain.id}`, account);
          _this6._tokensBalances$.next([..._this6._tokensBalances$.value, ...balances]);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())).catch(err => err);
    })();
  }
}
WalletService.ɵfac = function WalletService_Factory(t) {
  return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WALLET_SERVICE_APIKEY)), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)));
};
WalletService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: WalletService,
  factory: WalletService.ɵfac
});

/***/ }),

/***/ 1039:
/*!**********************************************!*\
  !*** ./libs/wallet/src/lib/wallet.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModule": () => (/* binding */ WalletModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 84266);
/* harmony import */ var _containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/wallet-page/wallet-page.component */ 20440);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/items-container/items-container.component */ 21494);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/assets-type.pipe */ 14769);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/wallet.service */ 56240);
/* harmony import */ var _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/diff-percent.pipe */ 6856);
/* harmony import */ var _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/avatar.directive */ 12713);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
















class WalletModule {}
WalletModule.ɵfac = function WalletModule_Factory(t) {
  return new (t || WalletModule)();
};
WalletModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: WalletModule
});
WalletModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_services_wallet_service__WEBPACK_IMPORTED_MODULE_6__.WalletService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.walletRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WalletModule, {
    declarations: [_containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__.WalletPageComponent, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__.ItemsContainerComponent, _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__.SwapAssetsModalComponent, _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__.AvatarDirective, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__.AssetsTypePipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__.DiffPercentPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=3945.210a760169cd8ff3.js.map