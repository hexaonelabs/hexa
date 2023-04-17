(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[3945],{

/***/ 3945:
/*!**********************************!*\
  !*** ./libs/wallet/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-list", 15)(2, "ion-list-header", 16)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.actions("swap-asset", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.actions("send-asset", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label")(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.actions("receive-asset", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-label")(21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_38_Template_ion_item_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.actions("stack-asset", {
        item: item_r1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label")(28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Swap ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 4, item_r1.symbol), " for another asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Transfer ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 6, item_r1.symbol), " to another wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Get a ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 8, item_r1.symbol), " address to receive funds ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Earn interest on your ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 10, item_r1.symbol), " by stacking ");
  }
}
const _c0 = function () {
  return {
    display: "flex"
  };
};
function ItemsContainerComponent_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 2)(1, "ion-col", 3)(2, "ion-avatar", 4);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ItemsContainerComponent_ion_row_1_ng_template_38_Template, 33, 12, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.chainLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 16, item_r1.symbol));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", item_r1.rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 18, item_r1.rate, item_r1.rate24h) < 0 ? "danger" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 21, item_r1.rate, item_r1.rate24h) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 24, item_r1.rate, item_r1.rate24h), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", item_r1.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.balance, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 27, item_r1.symbol), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "options-btn-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("trigger", "options-btn-", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissOnSelect", true);
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
        case type === 'openExternalLink':
          {
            const popover = yield _this._popCtrl.getTop();
            if (popover) yield popover.dismiss();
            const {
              item = undefined
            } = payload;
            if (!item || !item.address) return;
            window.open(`https://etherscan.io/token/${item.address}`, '_blank');
            break;
          }
        default:
          {
            _this.actionsEvent.emit({
              type,
              payload
            });
          }
      }
    })();
  }
  trackByFn(index) {
    return index;
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
  vars: 7,
  consts: [[1, "ion-no-padding"], ["class", "item ion-align-items-center", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "item", "ion-align-items-center"], ["size", "4", 1, "ion-align-items-center", "ion-text-wrap", 3, "ngStyle"], [1, "thumbnail"], [3, "src"], [1, "ion-padding-start"], ["color", "medium"], [1, "ion-hide-md-down"], [3, "color"], [4, "ngIf"], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end", 3, "ngStyle"], ["size", "small", "translucent", "true", "mode", "ios", 3, "id"], ["color", "medium", "size", "small", "color", "primary", "name", "ellipsis-vertical"], ["triggerAction", "click", 3, "dismissOnSelect", "trigger"], ["lines", "none", 1, "ion-margin-bottom"], [1, "ion-margin-bottom"], ["button", "", 3, "click"], ["detail", "", 3, "click"]],
  template: function ItemsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemsContainerComponent_ion_row_1_Template, 39, 31, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 2, ctx.items || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1), 0, ctx.maxItemToDisplay$.value))("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonPopover, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_1__.DiffPercentPipe],
  styles: ["[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%] {\n  background: var(--ion-item-background);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover    > ion-col[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: -1px;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --background-hover-opacity: 0.2;\n  --backdrop-filter: none;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-avatar.thumbnail.md.hydrated[_ngcontent-%COMP%] {\n  transform: scale(0.3) translateX(-45px) translateY(-45px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: solid 6px var(--ion-color-light);\n  background: var(--ion-color-light);\n  z-index: 1;\n}\n[_nghost-%COMP%]   ion-row.item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9pdGVtcy1jb250YWluZXIvaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usc0NBQUE7RUFDQSxnREFBQTtBQ0RKO0FESUk7RUFDRSx5REFBQTtBQ0ZOO0FER007RUFDRSwrQkFBQTtBQ0RSO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FETUk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ0pOO0FET0k7RUFDRSxxQkFBQTtBQ0xOO0FET0k7RUFDRSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0xOO0FEU007RUFDRSxjQUFBO0FDUFIiLCJmaWxlIjoiaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1yb3cuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpOyAvLyAjZTBlMGUwO1xuXG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMCk7XG4gICAgICA+IGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgfVxuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjI7XG4gICAgICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbiAgICB9IFxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIudGh1bWJuYWlsLm1kLmh5ZHJhdGVkIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC00NXB4KSB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3JkZXI6IHNvbGlkIDZweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn0iLCI6aG9zdCBpb24tcm93Lml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmhvdmVyID4gaW9uLWNvbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gaW9uLWF2YXRhciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tYXZhdGFyLnRodW1ibmFpbC5tZC5oeWRyYXRlZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC00NXB4KSB0cmFuc2xhdGVZKC00NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogc29saWQgNnB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gaW9uLWxhYmVsIGlvbi10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9pdGVtcy1jb250YWluZXIvaXRlbXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93YWxsZXQvc3JjL2xpYi9jb21wb25lbnRzL2l0ZW1zLWNvbnRhaW5lci9pdGVtcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxzQ0FBQTtFQUNBLGdEQUFBO0FDREo7QURJSTtFQUNFLHlEQUFBO0FDRk47QURHTTtFQUNFLCtCQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0FDSE47QURNSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FDSk47QURPSTtFQUNFLHFCQUFBO0FDTE47QURPSTtFQUNFLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FDTE47QURTTTtFQUNFLGNBQUE7QUNQUjtBRENBLDRyR0FBNHJHIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1yb3cuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpOyAvLyAjZTBlMGUwO1xuXG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMCk7XG4gICAgICA+IGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgfVxuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjI7XG4gICAgICAtLWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbiAgICB9IFxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIudGh1bWJuYWlsLm1kLmh5ZHJhdGVkIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC00NXB4KSB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3JkZXI6IHNvbGlkIDZweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn0iLCI6aG9zdCBpb24tcm93Lml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xufVxuOmhvc3QgaW9uLXJvdy5pdGVtOmhvdmVyID4gaW9uLWNvbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCBpb24tcm93Lml0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gaW9uLWF2YXRhciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cbjpob3N0IGlvbi1yb3cuaXRlbSBpb24tYXZhdGFyLnRodW1ibmFpbC5tZC5oeWRyYXRlZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC00NXB4KSB0cmFuc2xhdGVZKC00NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogc29saWQgNnB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdCBpb24tcm93Lml0ZW0gaW9uLWxhYmVsIGlvbi10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 19366:
/*!*****************************************************************************************!*\
  !*** ./libs/wallet/src/lib/components/swap-assets-modal/swap-assets-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageComponent": () => (/* binding */ WalletPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wallet.service */ 56240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/items-container/items-container.component */ 21494);
/* harmony import */ var _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/avatar.directive */ 12713);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/assets-type.pipe */ 14769);
/* harmony import */ var _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/qrcode.pipe */ 71071);


















function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item")(1, "ion-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template_ion_checkbox_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const wallet_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.actions("toggle-account", {
        account: wallet_r9.address,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-avatar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-label")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-buttons", 15)(9, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const wallet_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", wallet_r9.isDisabled === true ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("address", wallet_r9.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 3, wallet_r9.address));
  }
}
function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template, 13, 5, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r7.wallets$));
  }
}
function WalletPageComponent_ion_row_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content", 11)(1, "ion-list", 12)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "My accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-item", 13)(6, "ion-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_Template_ion_checkbox_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const account_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.actions("toggle-account", {
        account: account_r5,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-label")(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-buttons", 15)(13, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_Template_ion_item_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.actions("add-account"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-label")(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Add account");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const account_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 2, account_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 4, ctx_r6.wallets$)) == null ? null : tmp_1_0.length) || 0) > 0);
  }
}
function WalletPageComponent_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row", 6)(1, "ion-col", 7)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-col")(5, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-popover", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, WalletPageComponent_ion_row_3_ng_template_8_Template, 24, 6, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 26)(1, "ion-grid", 36)(2, "ion-row", 37)(3, "ion-col", 38)(4, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-col", 39)(7, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-col", 40)(10, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div")(13, "hexa-items-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("actionsEvent", function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template_hexa_items_container_actionsEvent_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](14, 1, tokensBalances_r17, "token"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 26)(1, "ion-grid", 42)(2, "ion-row", 43)(3, "ion-col", 44)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " There is no token in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-text", 29)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " You can buy token from any exchange and send to your wallet address to see it here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template, 15, 4, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, WalletPageComponent_ion_row_7_ng_container_19_ng_template_3_Template, 9, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 2, tokensBalances_r17, "token")) == null ? null : tmp_0_0.length) || 0 > 0)("ngIfElse", _r21);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-img", 51);
  }
  if (rf & 2) {
    const nft_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image_512) || (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 48)(1, "ion-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template, 1, 1, "ion-img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-card-content")(4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const nft_r33 = ctx.$implicit;
    const nftgroupe_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image_512) || (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (nftgroupe_r31 == null ? null : nftgroupe_r31.name) || (nftgroupe_r31 == null ? null : nftgroupe_r31.symbol), " ");
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template, 8, 3, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nftgroupe_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", nftgroupe_r31.nft_data);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, tokensBalances_r17, "nft"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 26)(1, "ion-grid", 42)(2, "ion-row", 43)(3, "ion-col", 44)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " There is no NFTs in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-text", 29)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " You can buy NFTs from any marketplace and they will appear here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template, 3, 4, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template, 9, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 2, tokensBalances_r17, "nft")) == null ? null : tmp_0_0.length) || 0 > 0)("ngIfElse", _r28);
  }
}
function WalletPageComponent_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row", 25)(1, "ion-col", 26)(2, "ion-grid", 11)(3, "ion-row", 27)(4, "ion-col", 28)(5, "ion-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Net Worth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-text")(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "netWorth");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-col", 30)(12, "ion-segment", 31)(13, "ion-segment-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.selectedSegment = "tokens");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-segment-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.selectedSegment = "nfts");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "NFTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, WalletPageComponent_ion_row_7_ng_container_19_Template, 5, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, WalletPageComponent_ion_row_7_ng_container_20_Template, 5, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r17 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 4, tokensBalances_r17), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r1.selectedSegment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "nfts");
  }
}
function WalletPageComponent_ng_template_9_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row", 53)(1, "ion-col", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-skeleton-text", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-skeleton-text", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-skeleton-text", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
function WalletPageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row", 25)(1, "ion-col", 26)(2, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, WalletPageComponent_ng_template_9_ion_row_3_Template, 7, 0, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0).constructor(10));
  }
}
function WalletPageComponent_ng_template_12_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content", 62)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "qrcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-text", 64)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const account_r46 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, account_r46)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", account_r46, " ");
  }
}
function WalletPageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Receive Assets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-buttons", 58)(5, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WalletPageComponent_ng_template_12_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.isReceiveAssetsModalOpen$.next(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WalletPageComponent_ng_template_12_ion_content_7_Template, 8, 6, "ion-content", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 1, ctx_r4.account$));
  }
}
class WalletPageComponent {
  constructor(_alertCtrl, _popoverCtrl, _modalCtrl, _walletService, _route, _loaderService) {
    this._alertCtrl = _alertCtrl;
    this._popoverCtrl = _popoverCtrl;
    this._modalCtrl = _modalCtrl;
    this._walletService = _walletService;
    this._route = _route;
    this._loaderService = _loaderService;
    this.selectedSegment = 'tokens';
    this.account$ = this._walletService.account$;
    this.wallets$ = this._walletService.wallets$;
    this.tokensBalances$ = this._walletService.tokensBalances$;
    this.isReceiveAssetsModalOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(false);
  }
  ionViewWillEnter() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        s = 't'
      } = _this._route.snapshot.queryParams;
      switch (true) {
        case s === 't':
          {
            _this.selectedSegment = 'tokens';
            break;
          }
        case s === 'n':
          {
            _this.selectedSegment = 'nfts';
            break;
          }
        case s === 'tx':
          {
            _this.selectedSegment = 'transactions';
            break;
          }
        default:
          _this.selectedSegment = 'nfts';
      }
    })();
  }
  actions(type, payload) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('actions', type, payload);
      switch (true) {
        case type === 'add-account':
          {
            const {
              data,
              role
            } = yield _this2._promptPublicAdress();
            if (role !== 'ok') return;
            _this2._loaderService.setStatus(true);
            const {
              values: {
                address = null
              }
            } = data;
            yield _this2._walletService.addWallet(address);
            _this2._loaderService.setStatus(false);
            const ionPopover = yield _this2._popoverCtrl.getTop();
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
            _this2._loaderService.setStatus(true);
            const ionPopover = yield _this2._popoverCtrl.getTop();
            if (ionPopover) {
              ionPopover.dismiss();
            }
            yield _this2._walletService.toggleWallet(account, checked);
            _this2._loaderService.setStatus(false);
            break;
          }
        case type === 'receive-asset':
          {
            // generate qrcode with account address and displax with modal using angular pipe
            _this2.isReceiveAssetsModalOpen$.next(true);
            break;
          }
        // case type === 'swap-asset': {
        //   const {item:asset = null} = payload;
        //   const { data, role } = await this._promptSwapAsset(asset);
        //   console.log('swap-asset', asset, data);
        //   if (role !== 'ok') return;
        //   // TODO: implement swap with service
        //   break;
        // }
        default:
          {
            const ionAlert = yield _this2._alertCtrl.create({
              header: 'Not implemented',
              message: `Action "${type.toLocaleUpperCase()}" is not implemented yet`,
              buttons: ['OK']
            });
            ionAlert.present();
            break;
          }
      }
    })();
  }
  _promptSwapAsset(fromAsset, toAsset) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionModal = yield _this3._modalCtrl.create({
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
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionAlert = yield _this4._alertCtrl.create({
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
  return new (t || WalletPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
WalletPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: WalletPageComponent,
  selectors: [["hexa-wallet-page"]],
  decls: 13,
  vars: 8,
  consts: [[1, "ion-no-border"], ["class", "ion-align-items-center ion-padding-start", 4, "ngIf"], ["fullscreen", "", "id", "drive", 1, "ion-padding-horizontal"], ["class", "ion-align-items-start", 4, "ngIf", "ngIfElse"], ["skeletonHTML", ""], ["mode", "ios", 3, "isOpen", "ionModalDidDismiss"], [1, "ion-align-items-center", "ion-padding-start"], ["size", "auto"], ["id", "accounts-list", "color", "primary"], ["size", "small", "name", "chevron-down", 1, "ion-no-margin"], ["id", "wallet-account-popover", "trigger", "accounts-list", "triggerAction", "click"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-margin-bottom"], [1, "ion-margin-top"], ["mode", "md", "slot", "start", "checked", "", 3, "click"], ["slot", "end", 1, "ion-no-margin", "ion-margin-start"], ["size", "small", "fill", "clear"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "copy-outline"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "ellipsis-vertical-sharp"], [4, "ngIf"], ["button", "", 1, "ion-margin-top", 3, "click"], ["size", "small", "color", "medium", "slot", "start", "name", "add-outline"], [4, "ngFor", "ngForOf"], ["mode", "md", "slot", "start", 3, "checked", "click"], ["slot", "start", "avatar", "", 3, "address"], [1, "ion-align-items-start"], ["size", "12"], [1, "ion-align-items-end"], [1, "ion-text-start"], ["color", "medium"], ["size-xs", "6", "size-sm", "6", "size-md", "6", "size-lg", "3", "size-xl", "2", 1, "ion-text-end"], ["mode", "ios", 3, "value"], ["value", "tokens", 3, "click"], ["value", "nfts", 3, "click"], ["size", "12", 4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "ion-no-padding", "ion-padding-bottom"], [1, "ion-align-items-start", "ion-margin-top"], ["size", "4"], [1, ""], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end"], [3, "items", "actionsEvent"], [1, "ion-no-padding", "ion-text-center", "noItems"], [1, "item", "ion-align-items-center", "ion-padding-center"], [1, "ion-text-center", "ion-margin-vertical"], [4, "ngIf", "ngIfElse"], ["noNFTs", ""], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3"], ["mode", "ios"], [3, "src", 4, "ngIf"], [3, "src"], ["role", "article", "class", "item clickable ion-align-items-center ion-padding-start", 4, "ngFor", "ngForOf"], ["role", "article", 1, "item", "clickable", "ion-align-items-center", "ion-padding-start"], ["size", "1", 1, "ion-padding"], ["animated", "", 2, "width", "100%"], ["size", "9", 1, "ion-padding-vertical"], ["size", "2", 1, "ion-padding"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], ["class", "ion-padding ion-text-center", 4, "ngIf"], [1, "ion-padding", "ion-text-center"], [2, "max-width", "80%", "margin", "auto", 3, "src"], ["color", "primary"]],
  template: function WalletPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, WalletPageComponent_ion_row_3_Template, 9, 0, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-content", 2)(6, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WalletPageComponent_ion_row_7_Template, 21, 6, "ion-row", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, WalletPageComponent_ng_template_9_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-modal", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionModalDidDismiss", function WalletPageComponent_Template_ion_modal_ionModalDidDismiss_11_listener() {
        return ctx.isReceiveAssetsModalOpen$.next(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, WalletPageComponent_ng_template_12_Template, 9, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx.account$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 6, ctx.tokensBalances$))("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isOpen", ctx.isReceiveAssetsModalOpen$.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__.ItemsContainerComponent, _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_5__.AvatarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_6__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_7__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_8__.AssetsTypePipe, _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_9__.QRcodePipe],
  styles: ["[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]    > ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 1.1rem;\n  overflow: hidden;\n  background-color: transparent;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]    > ion-grid[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  box-shadow: none;\n  background-color: var(--ion-item-background);\n  margin: 6px;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n}\n\nion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93YWxsZXQvc3JjL2xpYi9jb250YWluZXJzL3dhbGxldC1wYWdlL3dhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7QUNETjtBRE9RO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQVFBLDZCQUFBO0VBQ0EsMERBQUE7QUNaVjtBREtVO0VBQ0UsdUJBQUE7QUNIWjtBRElZO0VBQ0UseUJBQUE7QUNGZDtBRFNRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0FDUFY7O0FEZ0JFO0VBQ0UseUJBQUE7QUNiSiIsImZpbGUiOiJ3YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWhlYWRlciB7XG4gICAgPiBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgPiBpb24tZ3JpZCB7XG4gICAgICA+IGlvbi1yb3cge1xuICAgICAgICA+IGlvbi1jb2wgZGl2IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICA+IGlvbi1saXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG59XG5cbmlvbi1tb2RhbCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59IiwiOmhvc3QgaW9uLWhlYWRlciA+IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYge1xuICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59XG5cbmlvbi1tb2RhbCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29udGFpbmVycy93YWxsZXQtcGFnZS93YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2FsbGV0L3NyYy9saWIvY29udGFpbmVycy93YWxsZXQtcGFnZS93YWxsZXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHlCQUFBO0FDRE47QURPUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFRQSw2QkFBQTtFQUNBLDBEQUFBO0FDWlY7QURLVTtFQUNFLHVCQUFBO0FDSFo7QURJWTtFQUNFLHlCQUFBO0FDRmQ7QURTUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtBQ1BWOztBRGdCRTtFQUNFLHlCQUFBO0FDYko7QURDQSxveUZBQW95RiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWhlYWRlciB7XG4gICAgPiBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgPiBpb24tZ3JpZCB7XG4gICAgICA+IGlvbi1yb3cge1xuICAgICAgICA+IGlvbi1jb2wgZGl2IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICA+IGlvbi1saXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG59XG5cbmlvbi1tb2RhbCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59IiwiOmhvc3QgaW9uLWhlYWRlciA+IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBkaXYge1xuICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGRpdiA+IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgZGl2ID4gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG59XG5cbmlvbi1tb2RhbCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12713:
/*!************************************************************!*\
  !*** ./libs/wallet/src/lib/directives/avatar.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 71071:
/*!**************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/qrcode.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRcodePipe": () => (/* binding */ QRcodePipe)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ 35646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class QRcodePipe {
  transform(value) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!value) return value;
      try {
        const url = yield qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(value);
        console.log(url);
        return url;
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  }
}
QRcodePipe.ɵfac = function QRcodePipe_Factory(t) {
  return new (t || QRcodePipe)();
};
QRcodePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "qrcode",
  type: QRcodePipe,
  pure: true
});

/***/ }),

/***/ 4633:
/*!*********************************************************!*\
  !*** ./libs/wallet/src/lib/pipes/slice-address.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);




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
  constructor(_loaderService, _datastoreService, _apiService, _authService) {
    var _this = this;
    this._loaderService = _loaderService;
    this._datastoreService = _datastoreService;
    this._apiService = _apiService;
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
    this.tokensBalances$ = this._tokensBalances$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(tokensBalances => tokensBalances.map(token => {
      const chain = CHAIN_IDS.find(c => c.id === token.chainId);
      return {
        ...token,
        chain,
        logo: chain?.logo
      };
    })));
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
      return yield _this5._apiService.getTokensBalances(chainId, address);
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
  return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WALLET_SERVICE_APIKEY)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)));
};
WalletService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: WalletService,
  factory: WalletService.ɵfac
});

/***/ }),

/***/ 1039:
/*!**********************************************!*\
  !*** ./libs/wallet/src/lib/wallet.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModule": () => (/* binding */ WalletModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 84266);
/* harmony import */ var _containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/wallet-page/wallet-page.component */ 20440);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/items-container/items-container.component */ 21494);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/assets-type.pipe */ 14769);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/wallet.service */ 56240);
/* harmony import */ var _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/diff-percent.pipe */ 6856);
/* harmony import */ var _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/avatar.directive */ 12713);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/qrcode.pipe */ 71071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);

















class WalletModule {}
WalletModule.ɵfac = function WalletModule_Factory(t) {
  return new (t || WalletModule)();
};
WalletModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: WalletModule
});
WalletModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [_services_wallet_service__WEBPACK_IMPORTED_MODULE_6__.WalletService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.walletRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](WalletModule, {
    declarations: [_containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__.WalletPageComponent, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__.ItemsContainerComponent, _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__.SwapAssetsModalComponent, _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__.AvatarDirective, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__.AssetsTypePipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__.DiffPercentPipe, _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_10__.QRcodePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 26348:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function (graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);
    var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = typeof costs[v] === 'undefined';
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }
    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }
    return predecessors;
  },
  extract_shortest_path_from_predecessor_list: function (predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },
  find_path: function (graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
  },
  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
        t = {},
        key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },
    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },
    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {
        value: value,
        cost: cost
      };
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },
    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return this.queue.length === 0;
    }
  }
};

// node.js module exports
if (true) {
  module.exports = dijkstra;
}

/***/ }),

/***/ 76236:
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8(input) {
  var result = [];
  var size = input.length;
  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index);
    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        index += 1;
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point);
      continue;
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push(point >> 6 | 192);
      result.push(point & 63 | 128);
      continue;
    }

    // 3-byte UTF-8
    if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
      result.push(point >> 12 | 224);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push(point >> 18 | 240);
      result.push(point >> 12 & 63 | 128);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD);
  }
  return new Uint8Array(result).buffer;
};

/***/ }),

/***/ 35646:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const canPromise = __webpack_require__(/*! ./can-promise */ 25704);
const QRCode = __webpack_require__(/*! ./core/qrcode */ 99102);
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 99326);
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 50226);
function renderCanvas(renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';
  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }
  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts);
});

/***/ }),

/***/ 25704:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

/***/ }),

/***/ 18298:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ 62230).getSymbolSize);

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords(version) {
  if (version === 1) return [];
  const posCount = Math.floor(version / 7) + 2;
  const size = getSymbolSize(version);
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  const positions = [size - 7]; // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }
  positions.push(6); // First coord is always 6

  return positions.reverse();
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const coords = [];
  const pos = exports.getRowColCoords(version);
  const posLength = pos.length;
  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if (i === 0 && j === 0 ||
      // top-left
      i === 0 && j === posLength - 1 ||
      // bottom-left
      i === posLength - 1 && j === 0) {
        // top-right
        continue;
      }
      coords.push([pos[i], pos[j]]);
    }
  }
  return coords;
};

/***/ }),

/***/ 69321:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 84059);

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];
function AlphanumericData(data) {
  this.mode = Mode.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};
module.exports = AlphanumericData;

/***/ }),

/***/ 34915:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer.prototype = {
  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  }
};
module.exports = BitBuffer;

/***/ }),

/***/ 79088:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix(size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0');
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col];
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

/***/ }),

/***/ 16323:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ 76236);
const Mode = __webpack_require__(/*! ./mode */ 84059);
function ByteData(data) {
  this.mode = Mode.BYTE;
  if (typeof data === 'string') {
    data = encodeUtf8(data);
  }
  this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};
module.exports = ByteData;

/***/ }),

/***/ 91690:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ 65448);
const EC_BLOCKS_TABLE = [
// L  M  Q  H
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
const EC_CODEWORDS_TABLE = [
// L  M  Q  H
7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/***/ }),

/***/ 65448:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = {
  bit: 1
};
exports.M = {
  bit: 0
};
exports.Q = {
  bit: 3
};
exports.H = {
  bit: 2
};
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L;
    case 'm':
    case 'medium':
      return exports.M;
    case 'q':
    case 'quartile':
      return exports.Q;
    case 'h':
    case 'high':
      return exports.H;
    default:
      throw new Error('Unknown EC Level: ' + string);
  }
}
exports.isValid = function isValid(level) {
  return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 62903:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ 62230).getSymbolSize);
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const size = getSymbolSize(version);
  return [
  // top-left
  [0, 0],
  // top-right
  [size - FINDER_PATTERN_SIZE, 0],
  // bottom-left
  [0, size - FINDER_PATTERN_SIZE]];
};

/***/ }),

/***/ 26327:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 62230);
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
  const data = errorCorrectionLevel.bit << 3 | mask;
  let d = data << 10;
  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return (data << 10 | d) ^ G15_MASK;
};

/***/ }),

/***/ 39240:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */;
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log(n) {
  if (n < 1) throw new Error('log(' + n + ')');
  return LOG_TABLE[n];
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp(n) {
  return EXP_TABLE[n];
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul(x, y) {
  if (x === 0 || y === 0) return 0;

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

/***/ }),

/***/ 75134:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 84059);
const Utils = __webpack_require__(/*! ./utils */ 62230);
function KanjiData(data) {
  this.mode = Mode.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

      // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};
module.exports = KanjiData;

/***/ }),

/***/ 56485:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid(mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from(value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined;
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1(data) {
  const size = data.size;
  let points = 0;
  let sameCountCol = 0;
  let sameCountRow = 0;
  let lastCol = null;
  let lastRow = null;
  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;
    for (let col = 0; col < size; col++) {
      let module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }
      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }
    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }
  return points;
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2(data) {
  const size = data.size;
  let points = 0;
  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
      if (last === 4 || last === 0) points++;
    }
  }
  return points * PenaltyScores.N2;
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3(data) {
  const size = data.size;
  let points = 0;
  let bitsCol = 0;
  let bitsRow = 0;
  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (let col = 0; col < size; col++) {
      bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
      bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }
  return points * PenaltyScores.N3;
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4(data) {
  let darkCount = 0;
  const modulesCount = data.data.length;
  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
  const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
  return k * PenaltyScores.N4;
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt(maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000:
      return (i + j) % 2 === 0;
    case exports.Patterns.PATTERN001:
      return i % 2 === 0;
    case exports.Patterns.PATTERN010:
      return j % 3 === 0;
    case exports.Patterns.PATTERN011:
      return (i + j) % 3 === 0;
    case exports.Patterns.PATTERN100:
      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
    case exports.Patterns.PATTERN101:
      return i * j % 2 + i * j % 3 === 0;
    case exports.Patterns.PATTERN110:
      return (i * j % 2 + i * j % 3) % 2 === 0;
    case exports.Patterns.PATTERN111:
      return (i * j % 3 + (i + j) % 2) % 2 === 0;
    default:
      throw new Error('bad maskPattern:' + maskPattern);
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask(pattern, data) {
  const size = data.size;
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue;
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask(data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length;
  let bestPattern = 0;
  let lowerPenalty = Infinity;
  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);
    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }
  return bestPattern;
};

/***/ }),

/***/ 84059:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ 76859);
const Regex = __webpack_require__(/*! ./regex */ 7526);

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version);
  }
  if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
  return mode.ccBits[2];
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData(dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString(mode) {
  if (mode && mode.id) return mode.id;
  throw new Error('Invalid mode');
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid(mode) {
  return mode && mode.bit && mode.ccBits;
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC;
    case 'alphanumeric':
      return exports.ALPHANUMERIC;
    case 'kanji':
      return exports.KANJI;
    case 'byte':
      return exports.BYTE;
    default:
      throw new Error('Unknown mode: ' + string);
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 16302:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 84059);
function NumericData(data) {
  this.mode = Mode.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};
module.exports = NumericData;

/***/ }),

/***/ 91845:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ 39240);

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul(p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    }
  }
  return coeff;
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod(divident, divisor) {
  let result = new Uint8Array(divident);
  while (result.length - divisor.length >= 0) {
    const coeff = result[0];
    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    let offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }
  return result;
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial(degree) {
  let poly = new Uint8Array([1]);
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
  }
  return poly;
};

/***/ }),

/***/ 99102:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 62230);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 65448);
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ 34915);
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ 79088);
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 18298);
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ 62903);
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ 56485);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 91690);
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 23035);
const Version = __webpack_require__(/*! ./version */ 18421);
const FormatInfo = __webpack_require__(/*! ./format-info */ 26327);
const Mode = __webpack_require__(/*! ./mode */ 84059);
const Segments = __webpack_require__(/*! ./segments */ 12149);

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue;
        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
  const pos = AlignmentPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;
  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;
  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData(matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();
  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }
  return createCodewords(buffer, version, errorCorrectionLevel);
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }
  return data;
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
  let segments;
  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data');
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code');
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

    // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
  }
  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);
  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);
  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  };
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create(data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text');
  }
  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;
  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version, errorCorrectionLevel, mask);
};

/***/ }),

/***/ 23035:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ 91845);
function ReedSolomonEncoder(degree) {
  this.genPoly = undefined;
  this.degree = degree;
  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized');
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
module.exports = ReedSolomonEncoder;

/***/ }),

/***/ 7526:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};

/***/ }),

/***/ 12149:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 84059);
const NumericData = __webpack_require__(/*! ./numeric-data */ 16302);
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 69321);
const ByteData = __webpack_require__(/*! ./byte-data */ 16323);
const KanjiData = __webpack_require__(/*! ./kanji-data */ 75134);
const Regex = __webpack_require__(/*! ./regex */ 7526);
const Utils = __webpack_require__(/*! ./utils */ 62230);
const dijkstra = __webpack_require__(/*! dijkstrajs */ 26348);

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength(str) {
  return unescape(encodeURIComponent(str)).length;
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments(regex, mode, str) {
  const segments = [];
  let result;
  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }
  return segments;
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString(dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
  let byteSegs;
  let kanjiSegs;
  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
    kanjiSegs = [];
  }
  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
  return segs.sort(function (s1, s2) {
    return s1.index - s2.index;
  }).map(function (obj) {
    return {
      data: obj.data,
      mode: obj.mode,
      length: obj.length
    };
  });
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength(length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length);
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length);
    case Mode.KANJI:
      return KanjiData.getBitsLength(length);
    case Mode.BYTE:
      return ByteData.getBitsLength(length);
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments(segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes(segs) {
  const nodes = [];
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.ALPHANUMERIC,
          length: seg.length
        }, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.ALPHANUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.KANJI:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
        break;
      case Mode.BYTE:
        nodes.push([{
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
    }
  }
  return nodes;
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph(nodes, version) {
  const table = {};
  const graph = {
    start: {}
  };
  let prevNodeIds = ['start'];
  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i];
    const currentNodeIds = [];
    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j];
      const key = '' + i + j;
      currentNodeIds.push(key);
      table[key] = {
        node: node,
        lastCount: 0
      };
      graph[key] = {};
      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n];
        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }
  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0;
  }
  return {
    map: graph,
    table: table
  };
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment(data, modesHint) {
  let mode;
  const bestMode = Mode.getBestModeForData(data);
  mode = Mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE;
  }
  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data);
    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data);
    case Mode.KANJI:
      return new KanjiData(data);
    case Mode.BYTE:
      return new ByteData(data);
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray(array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }
    return acc;
  }, []);
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString(data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
  const nodes = buildNodes(segs);
  const graph = buildGraph(nodes, version);
  const path = dijkstra.find_path(graph.map, 'start', 'end');
  const optimizedSegs = [];
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }
  return exports.fromArray(mergeSegments(optimizedSegs));
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit(data) {
  return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

/***/ }),

/***/ 62230:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [0,
// Not used
26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize(version) {
  if (!version) throw new Error('"version" cannot be null or undefined');
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
  return version * 4 + 17;
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
  return CODEWORDS_COUNT[version];
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f;
};
exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
  return toSJISFunction(kanji);
};

/***/ }),

/***/ 76859:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid(version) {
  return !isNaN(version) && version >= 1 && version <= 40;
};

/***/ }),

/***/ 18421:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 62230);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 91690);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 65448);
const Mode = __webpack_require__(/*! ./mode */ 84059);
const VersionCheck = __webpack_require__(/*! ./version-check */ 76859);

// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion;
    }
  }
  return undefined;
}
function getReservedBitsCount(mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
  let totalBits = 0;
  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });
  return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion;
    }
  }
  return undefined;
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from(value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10);
  }
  return defaultValue;
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version');
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (mode === Mode.MIXED) return dataTotalCodewordsBits;
  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor(usableBits / 10 * 3);
    case Mode.ALPHANUMERIC:
      return Math.floor(usableBits / 11 * 2);
    case Mode.KANJI:
      return Math.floor(usableBits / 13);
    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8);
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
  let seg;
  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl);
    }
    if (data.length === 0) {
      return 1;
    }
    seg = data[0];
  } else {
    seg = data;
  }
  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits(version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version');
  }
  let d = version << 12;
  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
  }
  return version << 12 | d;
};

/***/ }),

/***/ 99326:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 83239);
function clearCanvas(ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}
function getCanvasElement() {
  try {
    return document.createElement('canvas');
  } catch (e) {
    throw new Error('You need to specify a canvas element');
  }
}
exports.render = function render(qrData, canvas, options) {
  let opts = options;
  let canvasEl = canvas;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!canvas) {
    canvasEl = getCanvasElement();
  }
  opts = Utils.getOptions(opts);
  const size = Utils.getImageWidth(qrData.modules.size, opts);
  const ctx = canvasEl.getContext('2d');
  const image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);
  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);
  return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
  let opts = options;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!opts) opts = {};
  const canvasEl = exports.render(qrData, canvas, opts);
  const type = opts.type || 'image/png';
  const rendererOpts = opts.rendererOpts || {};
  return canvasEl.toDataURL(type, rendererOpts.quality);
};

/***/ }),

/***/ 50226:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 83239);
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;
  return str;
}
function qrToPath(data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    if (!col && !newRow) newRow = true;
    if (data[i]) {
      lineLength++;
      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
exports.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
  const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
  if (typeof cb === 'function') {
    cb(null, svgTag);
  }
  return svgTag;
};

/***/ }),

/***/ 83239:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba(hex) {
  if (typeof hex === 'number') {
    hex = hex.toString();
  }
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string');
  }
  let hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex);
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c];
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');
  const hexValue = parseInt(hexCode.join(''), 16);
  return {
    r: hexValue >> 24 & 255,
    g: hexValue >> 16 & 255,
    b: hexValue >> 8 & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  };
}
exports.getOptions = function getOptions(options) {
  if (!options) options = {};
  if (!options.color) options.color = {};
  const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
  const width = options.width && options.width >= 21 ? options.width : undefined;
  const scale = options.scale || 4;
  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  };
};
exports.getScale = function getScale(qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
  const scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
  const size = qr.modules.size;
  const data = qr.modules.data;
  const scale = exports.getScale(size, opts);
  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
  const scaledMargin = opts.margin * scale;
  const palette = [opts.color.light, opts.color.dark];
  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4;
      let pxColor = opts.color.light;
      if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale);
        const jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }
      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=3945.f8d80e91d902129d.js.map