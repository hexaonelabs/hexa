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
function ItemsContainerComponent_ion_row_1_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-list", 15)(2, "ion-list-header", 16)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_39_Template_ion_item_click_5_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_39_Template_ion_item_click_12_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_39_Template_ion_item_click_19_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsContainerComponent_ion_row_1_ng_template_39_Template_ion_item_click_26_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-text", 7)(33, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-fab-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-popover", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ItemsContainerComponent_ion_row_1_ng_template_39_Template, 33, 12, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 27, item_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.balance, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 29, item_r1.symbol), "");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemsContainerComponent_ion_row_1_Template, 40, 33, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 2, ctx.items || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1), 0, ctx.maxItemToDisplay$.value))("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonPopover, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_1__.DiffPercentPipe],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _constants_coins_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/coins.constant */ 76010);
/* harmony import */ var _constants_chains_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/chains.constant */ 91919);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/wallet.service */ 56240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);













const _c0 = ["fromAmountInput"];
function SwapAssetsModalComponent_ion_thumbnail_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-thumbnail", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const logo_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", logo_r13);
  }
}
function SwapAssetsModalComponent_ion_thumbnail_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-thumbnail", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const logo_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", logo_r14);
  }
}
function SwapAssetsModalComponent_h2_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const symbol_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](symbol_r15);
  }
}
function SwapAssetsModalComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_ng_template_41_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.isAssetsListUiVisible$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SELECT ASSET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SwapAssetsModalComponent_ion_chip_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_ion_chip_43_Template_ion_chip_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.isAssetsListUiVisible$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SwapAssetsModalComponent_ion_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 1);
  }
}
function SwapAssetsModalComponent_ion_row_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 32)(1, "ion-col", 33)(2, "ion-item")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Slippage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-note", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " 0.5% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item")(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Hexa fee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-note", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " 0% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item")(13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Gas fee estimation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-note", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 34)(18, "ion-text", 35)(19, "p")(20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Powered by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const estimatedGas_r20 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", estimatedGas_r20, " ");
  }
}
function SwapAssetsModalComponent_ion_spinner_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner");
  }
}
function SwapAssetsModalComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Swap ");
  }
}
function SwapAssetsModalComponent_ng_template_60_ion_list_8_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_ng_template_60_ion_list_8_ion_item_3_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const asset_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r27.toAssetControl.patchValue(asset_r26);
      ctx_r27.isAssetsListUiVisible$.next(false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.onToAssetChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-thumbnail", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const asset_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (asset_r26 == null ? null : asset_r26.logo) || (asset_r26 == null ? null : asset_r26.logoURI));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](asset_r26.symbol);
  }
}
function SwapAssetsModalComponent_ng_template_60_ion_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 42)(1, "ion-list-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-searchbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SwapAssetsModalComponent_ng_template_60_ion_list_8_ion_item_3_Template, 6, 2, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assets_r24 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", assets_r24);
  }
}
function SwapAssetsModalComponent_ng_template_60_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SwapAssetsModalComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 38)(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Select asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 1)(5, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_ng_template_60_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.isAssetsListUiVisible$.next(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SwapAssetsModalComponent_ng_template_60_ion_list_8_Template, 4, 1, "ion-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SwapAssetsModalComponent_ng_template_60_ng_template_9_Template, 4, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.assets$.value)("ngIfElse", _r22);
  }
}
class SwapAssetsModalComponent {
  constructor(modalCtrl, _walletService, _loaderService) {
    this.modalCtrl = modalCtrl;
    this._walletService = _walletService;
    this._loaderService = _loaderService;
    this.fromAssetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.fromAmountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.toAssetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.toAmountControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0);
    this.fromAssetBalance$ = this._walletService.tokensBalances$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(tokensBalances => {
      const token = this.fromAssetControl.value;
      return {
        token,
        tokensBalances
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(({
      token,
      tokensBalances
    }) => tokensBalances?.find(t => t.symbol === token?.symbol)?.balance || 0));
    this.estimatedGas$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this.assets$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.isAssetsListUiVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this.isLoaderVisible$ = this._loaderService.isVisible$;
  }
  get chainName() {
    return this._getChainName();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fromValue = _this.fromAsset;
      _this.fromAssetControl.patchValue(fromValue);
      _this._loadTokensList().then(() => _this.fromAmountInput.setFocus());
    })();
  }
  ngAfterViewInit() {
    setTimeout(() => this.fromAmountInput.setFocus(), 1000);
  }
  onFromAssetChange() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._getPrice();
  }
  onFromAmountChange() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maxBalance = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this2.fromAssetBalance$);
      if (maxBalance < (_this2.fromAmountControl?.value || 0)) {
        _this2.fromAmountControl.patchValue(maxBalance);
      }
      const isValid = _this2._checkAllFieldsIsValide();
      if (!isValid) {
        return;
      }
      _this2._getPrice();
    })();
  }
  onToAssetChange() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._getPrice();
  }
  reviewSwap() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isValid = _this3._checkAllFieldsIsValide();
      if (!isValid) {
        return;
      }
      _this3._swapAssets();
    })();
  }
  _loadTokensList() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        chainId
      } = _this4.fromAssetControl.value || _this4.fromAsset;
      const data = _constants_coins_constant__WEBPACK_IMPORTED_MODULE_2__.COINS.filter(c => c.chainId === chainId);
      // const isStored = localStorage.getItem('hexa:wallet:tokenlist');
      // let data: TokenInterface[] = [];
      // if (isStored) {
      //   data = JSON.parse(isStored);
      // } else {
      //   const response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
      //   const {tokens} = await response.json();
      //   data = tokens;
      //   // save localstorage
      //   localStorage.setItem('hexa:wallet:tokenlist', JSON.stringify(data));
      // }
      _this4.assets$.next(data);
    })();
  }
  _getPrice() {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.estimatedGas$.next(0);
      _this5.toAmountControl.patchValue(null);
      const fromAmount = _this5.fromAmountControl.value || 0;
      const decimals = _this5.fromAssetControl.value?.decimals || 16;
      const amount = Number(fromAmount * 10 ** decimals);
      const sellToken = _this5.fromAssetControl.value?.address;
      const buyToken = _this5.toAssetControl.value?.address;
      const fromChainId = _this5.fromAssetControl.value?.chainId;
      const toChainId = _this5.toAssetControl.value?.chainId;
      if (fromChainId !== toChainId || !fromChainId || !toChainId) {
        throw new Error(`Cross chain swap currently not implemented.`);
      }
      if (!sellToken || !buyToken) {
        return;
      }
      const params = {
        sellToken,
        buyToken,
        sellAmount: amount,
        chainId: fromChainId
      };
      // Fetch the swap price.
      const {
        buyAmount,
        estimatedGas
      } = yield _this5._walletService.getPriceToSwapAsset({
        ...params,
        strategyType: '0x'
      });
      _this5.toAmountControl.patchValue(buyAmount / 10 ** decimals);
      _this5.estimatedGas$.next(estimatedGas);
    })();
  }
  _swapAssets() {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const account = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this6._walletService.account$);
      const fromAmount = _this6.fromAmountControl.value || 0;
      const decimal = _this6.fromAssetControl.value?.decimals || 16;
      const amount = Number(fromAmount * 10 ** decimal);
      const fromChainId = _this6.fromAssetControl.value?.chainId;
      const toChainId = _this6.toAssetControl.value?.chainId;
      if (fromChainId !== toChainId || !fromChainId || !toChainId) {
        throw new Error(`Cross chain swap is currently not implemented.`);
      }
      const params = {
        sellToken: `${_this6.fromAssetControl.value?.address}`,
        buyToken: `${_this6.toAssetControl.value?.address}`,
        sellAmount: `${amount}`,
        takerAddress: account,
        chainId: fromChainId
      };
      _this6._loaderService.setStatus(true);
      const txReceipt = yield _this6._walletService.swapAssets({
        ...params,
        strategyType: '0x'
      }).catch(err => {
        _this6._loaderService.setStatus(false);
        throw err;
      });
      _this6.modalCtrl.dismiss(txReceipt, 'ok');
    })();
  }
  _checkAllFieldsIsValide() {
    return Boolean(this.fromAssetControl.value) && Boolean(this.toAssetControl.value) && Boolean(this.fromAmountControl.value);
  }
  _getChainName() {
    const {
      chainId: selectedChainId
    } = this.fromAssetControl.value || this.fromAsset;
    const chainName = `${[..._constants_chains_constant__WEBPACK_IMPORTED_MODULE_3__.TESTNETS, ..._constants_chains_constant__WEBPACK_IMPORTED_MODULE_3__.MAINNET].find(c => c.chainId === selectedChainId)?.name || 'ethereum'}`;
    return chainName;
  }
}
SwapAssetsModalComponent.ɵfac = function SwapAssetsModalComponent_Factory(t) {
  return new (t || SwapAssetsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
SwapAssetsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SwapAssetsModalComponent,
  selectors: [["hexa-swap-assets-modal"]],
  viewQuery: function SwapAssetsModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fromAmountInput = _t.first);
    }
  },
  inputs: {
    fromAsset: "fromAsset",
    toAsset: "toAsset"
  },
  decls: 61,
  vars: 32,
  consts: [[1, "ion-no-border"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding-horizontal"], [1, "ion-align-items-center"], ["size", "auto", 1, "ion-text-start"], ["color", "primary"], [1, "assets_selection_container"], ["size", "12", 1, "ion-margin-top", "ion-text-start"], ["position", "stacked"], ["size", "6", 1, "ion-text-start"], ["lines", "none"], ["slot", "start", 4, "ngIf"], ["size", "6", 1, "ion-text-end"], ["slot", "end", "type", "number", "debounce", "500", "placeholder", "0", "enterkeyhint", "done", "inputmode", "numeric", 1, "ion-text-end", 3, "max", "formControl", "ionChange"], ["fromAmountInput", ""], [4, "ngIf", "ngIfElse"], ["placeholderToken", ""], ["slot", "end", 3, "click", 4, "ngIf"], ["disabled", "", "lines", "none", 1, "disabledInput", "ion-text-end"], ["slot", "end", 4, "ngIf"], ["slot", "end", "type", "number", "min", "0", 3, "hidden", "formControl"], ["class", "ion-margin-top detailsFees", 4, "ngIf"], ["expand", "block", "color", "primary", 3, "disabled", "click"], ["displayText", ""], [3, "isOpen"], ["slot", "start"], [3, "src"], ["size", "small", 3, "click"], ["slot", "end", 3, "click"], ["size", "small", "name", "chevron-down", 1, "ion-no-margin"], [1, "ion-margin-top", "detailsFees"], ["size", "12"], ["size", "12", 1, "ion-text-center"], ["color", "medium"], ["href", "https://0x.org", "target", "_blank", "rel", "noopener"], ["slot", "start", "src", "./assets/wallet/icons/0x-zrx-logo.svg", 2, "vertical-align", "middle"], [2, "--background", "transparent"], [1, "ion-no-padding"], ["lines", "none", "class", "ion-margin-bottom", 4, "ngIf", "ngIfElse"], ["loadingTmp", ""], ["lines", "none", 1, "ion-margin-bottom"], [1, "ion-margin-bottom", "assets-list-header"], [3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "0.5rem", 3, "src"]],
  template: function SwapAssetsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Swap Assets");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 1)(5, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_Template_ion_button_click_5_listener() {
        return ctx.modalCtrl.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 4)(8, "ion-grid")(9, "ion-row", 5)(10, "ion-col", 6)(11, "ion-chip", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 8)(15, "ion-col", 9)(16, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Pay with");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col", 11)(19, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SwapAssetsModalComponent_ion_thumbnail_20_Template, 2, 1, "ion-thumbnail", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-label")(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-col", 14)(28, "ion-item", 12)(29, "ion-input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SwapAssetsModalComponent_Template_ion_input_ionChange_29_listener() {
        return ctx.onFromAmountChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-row", 8)(33, "ion-col", 9)(34, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Receive");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-col", 11)(37, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, SwapAssetsModalComponent_ion_thumbnail_38_Template, 2, 1, "ion-thumbnail", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, SwapAssetsModalComponent_h2_40_Template, 2, 1, "h2", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, SwapAssetsModalComponent_ng_template_41_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, SwapAssetsModalComponent_ion_chip_43_Template, 2, 0, "ion-chip", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-col", 14)(45, "ion-item", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, SwapAssetsModalComponent_ion_spinner_46_Template, 1, 0, "ion-spinner", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "ion-input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, SwapAssetsModalComponent_ion_row_48_Template, 24, 1, "ion-row", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-footer")(51, "ion-toolbar")(52, "ion-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapAssetsModalComponent_Template_ion_button_click_52_listener() {
        return ctx.reviewSwap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, SwapAssetsModalComponent_ion_spinner_55_Template, 1, 0, "ion-spinner", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, SwapAssetsModalComponent_ng_template_57_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-modal", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, SwapAssetsModalComponent_ng_template_60_Template, 11, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, ctx.chainName), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.fromAssetControl.value == null ? null : ctx.fromAssetControl.value.logo) || (ctx.fromAssetControl.value == null ? null : ctx.fromAssetControl.value.logoURI));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fromAssetControl.value == null ? null : ctx.fromAssetControl.value.symbol);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Balance: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 20, ctx.fromAssetBalance$), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 22, ctx.fromAssetBalance$))("formControl", ctx.fromAmountControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.toAssetControl.value == null ? null : ctx.toAssetControl.value.logo) || (ctx.toAssetControl.value == null ? null : ctx.toAssetControl.value.logoURI));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.toAssetControl.value == null ? null : ctx.toAssetControl.value.symbol)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.toAssetControl.value == null ? null : ctx.toAssetControl.value.symbol);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.toAmountControl.value === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.toAmountControl.value === null)("formControl", ctx.toAmountControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 24, ctx.estimatedGas$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 26, ctx.estimatedGas$) === 0 || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 28, ctx.isLoaderVisible$) === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 30, ctx.isLoaderVisible$) === true)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOpen", ctx.isAssetsListUiVisible$.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe],
  styles: ["[_nghost-%COMP%]   .disabledInput[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  background: var(--ion-background-color);\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem 0 0rem;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --min-height: 72px;\n  font-size: 1.6rem;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n[_nghost-%COMP%]   .assets_selection_container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n}\n[_nghost-%COMP%]   .detailsFees[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n[_nghost-%COMP%]   .detailsFees[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .detailsFees[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n[_nghost-%COMP%]   .detailsFees[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  --color: var(--ion-text-color);\n}\n\nion-modal[_ngcontent-%COMP%]   .assets-list-header[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YXAtYXNzZXRzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93YWxsZXQvc3JjL2xpYi9jb21wb25lbnRzL3N3YXAtYXNzZXRzLW1vZGFsL3N3YXAtYXNzZXRzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FDRko7QURJSTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQ0ZOO0FES0k7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9NO0VBQ0UsZUFBQTtBQ0xSO0FEU1E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDUFY7QURVUTtFQUNFLGlCQUFBO0FDUlY7QURZTTtFQUNFLHFCQUFBO0FDVlI7QURnQkU7RUFFRSxlQUFBO0FDZko7QURpQkk7RUFDRSxVQUFBO0FDZk47QURpQk07RUFDRSxpQkFBQTtBQ2ZSO0FEaUJRO0VBQ0UsOEJBQUE7QUNmVjs7QUQwQkU7RUFDRSxpQkFBQTtBQ3ZCSiIsImZpbGUiOiJzd2FwLWFzc2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmRpc2FibGVkSW5wdXQge1xuICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGlvbi1jb2wge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMXJlbSAwIDByZW07XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICBcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tbWluLWhlaWdodDogNzJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgXG4gIFxuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLmRldGFpbHNGZWVzIHtcblxuICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgXG4gICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuXG59XG5cbmlvbi1tb2RhbCB7XG4gIC5hc3NldHMtbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICBcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCAuZGlzYWJsZWRJbnB1dCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW0gMCAwcmVtO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLW1pbi1oZWlnaHQ6IDcycHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG46aG9zdCAuYXNzZXRzX3NlbGVjdGlvbl9jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1idXR0b24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciBpb24taXRlbSBpb24tY2hpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyBpb24tY29sIGlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG46aG9zdCAuZGV0YWlsc0ZlZXMgaW9uLWNvbCBpb24taXRlbSBpb24tbm90ZSB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuaW9uLW1vZGFsIC5hc3NldHMtbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9zd2FwLWFzc2V0cy1tb2RhbC9zd2FwLWFzc2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2FsbGV0L3NyYy9saWIvY29tcG9uZW50cy9zd2FwLWFzc2V0cy1tb2RhbC9zd2FwLWFzc2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FDQUo7QURHRTtFQUNFLHlCQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQ0ZKO0FESUk7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7QUNGTjtBREtJO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPTTtFQUNFLGVBQUE7QUNMUjtBRFNRO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ1BWO0FEVVE7RUFDRSxpQkFBQTtBQ1JWO0FEWU07RUFDRSxxQkFBQTtBQ1ZSO0FEZ0JFO0VBRUUsZUFBQTtBQ2ZKO0FEaUJJO0VBQ0UsVUFBQTtBQ2ZOO0FEaUJNO0VBQ0UsaUJBQUE7QUNmUjtBRGlCUTtFQUNFLDhCQUFBO0FDZlY7O0FEMEJFO0VBQ0UsaUJBQUE7QUN2Qko7QURDQSw0c0hBQTRzSCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmRpc2FibGVkSW5wdXQge1xuICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIGlvbi1jb2wge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMXJlbSAwIDByZW07XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICBcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tbWluLWhlaWdodDogNzJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgXG4gIFxuICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLmRldGFpbHNGZWVzIHtcblxuICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgXG4gICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuXG59XG5cbmlvbi1tb2RhbCB7XG4gIC5hc3NldHMtbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICBcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCAuZGlzYWJsZWRJbnB1dCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW0gMCAwcmVtO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLW1pbi1oZWlnaHQ6IDcycHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuOmhvc3QgLmFzc2V0c19zZWxlY3Rpb25fY29udGFpbmVyIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG46aG9zdCAuYXNzZXRzX3NlbGVjdGlvbl9jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1idXR0b24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbjpob3N0IC5hc3NldHNfc2VsZWN0aW9uX2NvbnRhaW5lciBpb24taXRlbSBpb24tY2hpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5kZXRhaWxzRmVlcyBpb24tY29sIGlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG46aG9zdCAuZGV0YWlsc0ZlZXMgaW9uLWNvbCBpb24taXRlbSBpb24tbm90ZSB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuaW9uLW1vZGFsIC5hc3NldHMtbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 91919:
/*!**********************************************************!*\
  !*** ./libs/wallet/src/lib/constants/chains.constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAINNET": () => (/* binding */ MAINNET),
/* harmony export */   "TESTNETS": () => (/* binding */ TESTNETS)
/* harmony export */ });
const TESTNETS = [{
  name: 'mumbai',
  url: 'https://mumbai.api.0x.org',
  chainId: 80001
}, {
  name: 'goerli',
  url: 'https://goerli.api.0x.org',
  chainId: 5
}, {
  name: 'fuji',
  url: undefined,
  chainId: 43113
}];
const MAINNET = [{
  name: 'ethereum',
  url: 'https://api.0x.org',
  chainId: 1
}, {
  name: 'polygon',
  url: 'https://polygon.api.0x.org',
  chainId: 137
}, {
  name: 'avalanche',
  url: 'https://avalanche.api.0x.org',
  chainId: 43114
}];

/***/ }),

/***/ 76010:
/*!*********************************************************!*\
  !*** ./libs/wallet/src/lib/constants/coins.constant.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COINS": () => (/* binding */ COINS)
/* harmony export */ });
const COINS = [{
  chainId: 1,
  symbol: 'ETH',
  address: 'ETH',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
}, {
  chainId: 1,
  symbol: 'USDC',
  address: 'USDC',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
}, {
  chainId: 5,
  symbol: 'USDC',
  address: '0x5FfbaC75EFc9547FBc822166feD19B05Cd5890bb',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
}, {
  chainId: 5,
  symbol: 'WETH',
  address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
}, {
  chainId: 5,
  symbol: 'DAI',
  address: '0xE68104D83e647b7c1C15a91a8D8aAD21a51B3B3E',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/9956/large/4943.png'
}, {
  chainId: 137,
  symbol: 'USDT',
  address: 'USDT',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png'
}, {
  chainId: 137,
  symbol: 'MATIC',
  address: 'MATIC',
  decimals: 18
}, {
  chainId: 80001,
  symbol: 'DAI',
  address: '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f',
  decimals: 18,
  logo: 'https://assets.coingecko.com/coins/images/9956/large/4943.png'
}, {
  chainId: 80001,
  symbol: 'WMATIC',
  address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
  decimals: 18
}
// {
//   chainId: 'bsc',
//   symbol: 'BUSD',
//   address: undefined
// },
// {
//   chainName: 'bsc',
//   symbol: 'BNB',
//   address: undefined
// },
];

/***/ }),

/***/ 29268:
/*!************************************************************!*\
  !*** ./libs/wallet/src/lib/constants/erc20abi.constant.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "erc20abi": () => (/* binding */ erc20abi)
/* harmony export */ });
const erc20abi = [{
  inputs: [{
    internalType: 'string',
    name: 'name',
    type: 'string'
  }, {
    internalType: 'string',
    name: 'symbol',
    type: 'string'
  }, {
    internalType: 'uint256',
    name: 'max_supply',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'constructor'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Approval',
  type: 'event'
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    indexed: true,
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    indexed: false,
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  name: 'Transfer',
  type: 'event'
}, {
  inputs: [{
    internalType: 'address',
    name: 'owner',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }],
  name: 'allowance',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'account',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'burn',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'account',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'burnFrom',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'decimals',
  outputs: [{
    internalType: 'uint8',
    name: '',
    type: 'uint8'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'subtractedValue',
    type: 'uint256'
  }],
  name: 'decreaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'spender',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'addedValue',
    type: 'uint256'
  }],
  name: 'increaseAllowance',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [],
  name: 'name',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'symbol',
  outputs: [{
    internalType: 'string',
    name: '',
    type: 'string'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  name: 'totalSupply',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'sender',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'amount',
    type: 'uint256'
  }],
  name: 'transferFrom',
  outputs: [{
    internalType: 'bool',
    name: '',
    type: 'bool'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wallet.service */ 56240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/items-container/items-container.component */ 21494);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/assets-type.pipe */ 14769);
/* harmony import */ var _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/qrcode.pipe */ 71071);

















function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template_ion_checkbox_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const wallet_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.actions("toggle-account", {
        account: wallet_r9.address,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-buttons", 15)(8, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const wallet_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", wallet_r9.isDisabled === true ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 2, wallet_r9.address));
  }
}
function WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_ion_item_1_Template, 12, 4, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r7.wallets$));
  }
}
function WalletPageComponent_ion_row_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 11)(1, "ion-list", 12)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "My accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 13)(6, "ion-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_Template_ion_checkbox_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const account_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.actions("toggle-account", {
        account: account_r5,
        event: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-label")(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "sliceAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-buttons", 15)(13, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, WalletPageComponent_ion_row_3_ng_template_8_ng_container_17_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_3_ng_template_8_Template_ion_item_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.actions("add-account"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-label")(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Add account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const account_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 2, account_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 4, ctx_r6.wallets$)) == null ? null : tmp_1_0.length) || 0) > 0);
  }
}
function WalletPageComponent_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 6)(1, "ion-col", 7)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-col")(5, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-popover", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, WalletPageComponent_ion_row_3_ng_template_8_Template, 24, 6, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 25)(1, "ion-grid", 35)(2, "ion-row", 36)(3, "ion-col", 37)(4, "ion-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 38)(7, "ion-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 39)(10, "ion-text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "hexa-items-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("actionsEvent", function WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template_hexa_items_container_actionsEvent_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.actions($event.type, $event.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 1, tokensBalances_r17, "token"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 25)(1, "ion-grid", 41)(2, "ion-row", 42)(3, "ion-col", 43)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " There is no token in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 28)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " You can buy token from any exchange and send to your wallet address to see it here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_19_ion_col_1_Template, 15, 4, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, WalletPageComponent_ion_row_7_ng_container_19_ng_template_2_Template, 9, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tokensBalances_r17 == null ? null : tokensBalances_r17.length) || 0 > 0)("ngIfElse", _r21);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-img", 50);
  }
  if (rf & 2) {
    const nft_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image_512) || (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 47)(1, "ion-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_ion_img_2_Template, 1, 1, "ion-img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-card-content")(4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const nft_r33 = ctx.$implicit;
    const nftgroupe_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image_512) || (nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", nft_r33 == null ? null : nft_r33.external_data == null ? null : nft_r33.external_data.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (nftgroupe_r31 == null ? null : nftgroupe_r31.name) || (nftgroupe_r31 == null ? null : nftgroupe_r31.symbol), " ");
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_ion_col_1_Template, 8, 3, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nftgroupe_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", nftgroupe_r31.nft_data);
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, tokensBalances_r17, "nft"));
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 25)(1, "ion-grid", 41)(2, "ion-row", 42)(3, "ion-col", 43)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " There is no NFTs in your wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-text", 28)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " You can buy NFTs from any marketplace and they will appear here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
}
function WalletPageComponent_ion_row_7_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WalletPageComponent_ion_row_7_ng_container_20_ng_container_1_Template, 3, 4, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "assetsType");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ion_row_7_ng_container_20_ng_template_3_Template, 9, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const tokensBalances_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, tokensBalances_r17, "nft")) == null ? null : tmp_0_0.length) || 0 > 0)("ngIfElse", _r28);
  }
}
function WalletPageComponent_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 24)(1, "ion-col", 25)(2, "ion-grid", 11)(3, "ion-row", 26)(4, "ion-col", 27)(5, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Net Worth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-text")(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "netWorth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-col", 29)(12, "ion-segment", 30)(13, "ion-segment-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.selectedSegment = "tokens");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-segment-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ion_row_7_Template_ion_segment_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.selectedSegment = "nfts");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "NFTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, WalletPageComponent_ion_row_7_ng_container_19_Template, 4, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, WalletPageComponent_ion_row_7_ng_container_20_Template, 5, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tokensBalances_r17 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 4, tokensBalances_r17), "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 52)(1, "ion-col", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-skeleton-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-skeleton-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-skeleton-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
function WalletPageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 24)(1, "ion-col", 25)(2, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ng_template_9_ion_row_3_Template, 7, 0, "ion-row", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0).constructor(10));
  }
}
function WalletPageComponent_ng_template_12_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 61)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "qrcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-text", 63)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const account_r46 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 4, account_r46)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", account_r46, " ");
  }
}
function WalletPageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Receive Assets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-buttons", 57)(5, "ion-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WalletPageComponent_ng_template_12_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.isReceiveAssetsModalOpen$.next(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, WalletPageComponent_ng_template_12_ion_content_7_Template, 8, 6, "ion-content", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 1, ctx_r4.account$));
  }
}
class WalletPageComponent {
  constructor(_alertCtrl, _popoverCtrl, _modalCtrl, _toastCtrl, _walletService, _route, _loaderService) {
    this._alertCtrl = _alertCtrl;
    this._popoverCtrl = _popoverCtrl;
    this._modalCtrl = _modalCtrl;
    this._toastCtrl = _toastCtrl;
    this._walletService = _walletService;
    this._route = _route;
    this._loaderService = _loaderService;
    this.selectedSegment = 'tokens';
    this.account$ = this._walletService.account$;
    this.wallets$ = this._walletService.wallets$;
    this.tokensBalances$ = this._walletService.tokensBalances$;
    this.isReceiveAssetsModalOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
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
        case type === 'swap-asset':
          {
            const {
              item: asset = null
            } = payload;
            const {
              data,
              role
            } = yield _this2._promptSwapAsset(asset);
            if (role !== 'ok') {
              return;
            }
            const {
              transactionHash,
              status
            } = data;
            console.log('XXXXX', transactionHash, status);
            const ionToast = yield _this2._toastCtrl.create({
              message: `Swap with succes. View on blockscan`,
              buttons: [{
                icon: 'open-outline',
                handler: () => {
                  // TODO: open on blockscan
                  throw new Error('Feature Not implemented yet');
                }
              }],
              duration: 10000,
              color: 'success',
              position: 'bottom'
            });
            yield ionToast.present();
            // TODO: reload evm assets list
            // this._walletService.getTokensBalances();
            break;
          }
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
      _this3._loaderService.setStatus(false);
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
  return new (t || WalletPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
WalletPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: WalletPageComponent,
  selectors: [["hexa-wallet-page"]],
  decls: 13,
  vars: 8,
  consts: [[1, "ion-no-border"], ["class", "ion-align-items-center ion-padding-start", 4, "ngIf"], ["fullscreen", "", "id", "drive", 1, "ion-padding-horizontal"], ["class", "ion-align-items-start", 4, "ngIf", "ngIfElse"], ["skeletonHTML", ""], ["mode", "ios", 3, "isOpen", "ionModalDidDismiss"], [1, "ion-align-items-center", "ion-padding-start"], ["size", "auto"], ["id", "accounts-list", "color", "primary"], ["size", "small", "name", "chevron-down", 1, "ion-no-margin"], ["id", "wallet-account-popover", "trigger", "accounts-list", "triggerAction", "click"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-margin-bottom"], [1, "ion-margin-top"], ["mode", "md", "slot", "start", "checked", "", 3, "click"], ["slot", "end", 1, "ion-no-margin", "ion-margin-start"], ["size", "small", "fill", "clear"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "copy-outline"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "ellipsis-vertical-sharp"], [4, "ngIf"], ["button", "", 1, "ion-margin-top", 3, "click"], ["size", "small", "color", "medium", "slot", "start", "name", "add-outline"], [4, "ngFor", "ngForOf"], ["mode", "md", "slot", "start", 3, "checked", "click"], [1, "ion-align-items-start"], ["size", "12"], [1, "ion-align-items-end"], [1, "ion-text-start"], ["color", "medium"], ["size-xs", "6", "size-sm", "6", "size-md", "6", "size-lg", "3", "size-xl", "2", 1, "ion-text-end"], ["mode", "ios", 3, "value"], ["value", "tokens", 3, "click"], ["value", "nfts", 3, "click"], ["size", "12", 4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "ion-no-padding", "ion-padding-bottom"], [1, "ion-align-items-start", "ion-margin-top"], ["size", "4"], [1, ""], [1, "ion-text-right", "ion-align-items-center", "ion-justify-content-end"], [3, "items", "actionsEvent"], [1, "ion-no-padding", "ion-text-center", "noItems"], [1, "item", "ion-align-items-center", "ion-padding-center"], [1, "ion-text-center", "ion-margin-vertical"], [4, "ngIf", "ngIfElse"], ["noNFTs", ""], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["size-xs", "12", "size-sm", "6", "size-md", "4", "size-lg", "3"], ["mode", "ios"], [3, "src", 4, "ngIf"], [3, "src"], ["role", "article", "class", "item clickable ion-align-items-center ion-padding-start", 4, "ngFor", "ngForOf"], ["role", "article", 1, "item", "clickable", "ion-align-items-center", "ion-padding-start"], ["size", "1", 1, "ion-padding"], ["animated", "", 2, "width", "100%"], ["size", "9", 1, "ion-padding-vertical"], ["size", "2", 1, "ion-padding"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], ["class", "ion-padding ion-text-center", 4, "ngIf"], [1, "ion-padding", "ion-text-center"], [2, "max-width", "80%", "margin", "auto", 3, "src"], ["color", "primary"]],
  template: function WalletPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WalletPageComponent_ion_row_3_Template, 9, 0, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-content", 2)(6, "ion-grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, WalletPageComponent_ion_row_7_Template, 21, 6, "ion-row", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, WalletPageComponent_ng_template_9_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-modal", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionModalDidDismiss", function WalletPageComponent_Template_ion_modal_ionModalDidDismiss_11_listener() {
        return ctx.isReceiveAssetsModalOpen$.next(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, WalletPageComponent_ng_template_12_Template, 9, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 4, ctx.account$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 6, ctx.tokensBalances$))("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isOpen", ctx.isReceiveAssetsModalOpen$.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_4__.ItemsContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_5__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_6__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_7__.AssetsTypePipe, _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_8__.QRcodePipe],
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

/***/ 3551:
/*!********************************************************!*\
  !*** ./libs/wallet/src/lib/factories/local.factory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localWalletApiFactory": () => (/* binding */ localWalletApiFactory)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

const localWalletApiFactory = () => {
  return {
    getTokensBalances: function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (chainIds, address) {
        return {
          balances: [{
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            logo: 'https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png?1574218774',
            type: 'ERC20',
            nft_data: null,
            decimals: 18,
            balance: 10,
            rate: 1,
            rate24h: 1,
            value: 10,
            chainId: 1,
            ownerAddress: address
          }
          // {
          //   address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          //   name: 'Wrapped BTC',
          //   symbol: 'WBTC',
          //   logo: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 8,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          // {
          //   address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
          //   name: 'Basic Attention Token',
          //   symbol: 'BAT',
          //   logo: 'https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034426',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 18,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          // {
          //   address: '0x514910771af9ca656af840dff83e8264ecf986ca',
          //   name: 'Chainlink',
          //   symbol: 'LINK',
          //   logo: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 18,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          ]
          // .filter((t) => t.chainId === parseInt(chainId)),
        };
      });
      return function getTokensBalances(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  };
};

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

/***/ 95311:
/*!****************************************************!*\
  !*** ./libs/wallet/src/lib/services/0x.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OxServcie": () => (/* binding */ OxServcie)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ 62039);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 98838);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ 93670);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_chains_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/chains.constant */ 91919);
/* harmony import */ var _constants_erc20abi_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/erc20abi.constant */ 29268);





class OxServcie {
  constructor(_apiKey) {
    this._apiKey = _apiKey;
    this._chains = [..._constants_chains_constant__WEBPACK_IMPORTED_MODULE_2__.TESTNETS, ..._constants_chains_constant__WEBPACK_IMPORTED_MODULE_2__.MAINNET];
  }
  getPrice(ops) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiUrl = _this._getApiUrl(ops);
      if (!ops.buyToken || !ops.sellToken || !ops.sellAmount || !apiUrl) {
        console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
        throw new Error('Uncorrect request options call.');
      }
      // Fetch the swap price.
      const response = yield fetch(`${apiUrl}/swap/v1/price?${(0,qs__WEBPACK_IMPORTED_MODULE_1__.stringify)(ops)}`, {
        method: 'GET',
        headers: _this.getHeadersRequest()
      });
      const {
        buyAmount = undefined,
        estimatedGas = undefined,
        ...result
      } = yield response.json();
      console.log("[INFO] {{0xService}} getPrice(): ", {
        buyAmount,
        estimatedGas,
        result
      });
      return {
        buyAmount,
        estimatedGas,
        result
      };
    })();
  }
  getQuote(ops) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiUrl = _this2._getApiUrl(ops);
      if (!ops.buyToken || !ops.sellToken || !ops.sellAmount || !apiUrl) {
        console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
        throw new Error('Uncorrect request options call.');
      }
      const url = `${apiUrl}/swap/v1/quote?${(0,qs__WEBPACK_IMPORTED_MODULE_1__.stringify)(ops)}`;
      const res = yield fetch(url, {
        method: 'GET',
        headers: _this2.getHeadersRequest()
      });
      const data = yield res.json();
      return data;
    })();
  }
  swap(provider, txQuote) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('[INFO] {OxServcie} swap() - Trying swap: ', txQuote);
      // Set Token Allowance
      // Set up approval amount
      const fromTokenAddress = txQuote.sellTokenAddress;
      const maxApproval = ethers__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(1).pow(256);
      console.log('[INFO] {OxServcie} swap() - approval amount: ', maxApproval);
      const signer = provider.getSigner();
      const address = signer.getAddress();
      const ERC20TokenContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(fromTokenAddress, _constants_erc20abi_constant__WEBPACK_IMPORTED_MODULE_3__.erc20abi, signer);
      console.log('>>>>', ERC20TokenContract);
      // Set up allowance on the 0x contract if needed.
      const bn = ERC20TokenContract.allowance(address, fromTokenAddress).call();
      const currentAllowance = ethers__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(bn);
      if (currentAllowance.lt(txQuote.sellAmount)) {
        console.log('>> approvation>>>> ');
        const approveTx = yield ERC20TokenContract.approve(fromTokenAddress, txQuote.sellAmount, {
          gasPrice: yield provider.getGasPrice()
        });
        try {
          yield approveTx.wait();
          console.log(`Transaction mined succesfully: ${approveTx.hash}`);
        } catch (error) {
          console.log(`Transaction failed with error: ${error}`);
        }
      }
      // TODO: add token amount allowence
      // // Grant the allowance target an allowance to spend our tokens.
      // const preTx: ethers.providers.TransactionResponse = await (ERC20TokenContract as any).approve(txQuote.allowanceTarget, maxApproval);
      // // wait for the transaction to be mined
      // const aprevedTX = await preTx.wait();
      // // console.log('>>>>', tx, aprevedTX);
      // Perform the swap
      const tx = yield provider.getSigner().sendTransaction({
        from: address,
        to: txQuote.to,
        data: txQuote.data,
        value: txQuote.value,
        gasLimit: txQuote.estimatedGas
      });
      const receipt = yield tx.wait();
      return receipt;
    })();
  }
  getHeadersRequest() {
    const headers = new Headers();
    headers.append('0x-api-key', this._apiKey);
    return headers;
    // return {
    //   '0x-api-key': this._apiKey
    // }
  }

  _getApiUrl(ops) {
    const apiUrl = this._chains.find(c => c.chainId === ops?.chainId)?.url || undefined;
    if (!apiUrl) {
      throw new Error(`Unexisting chain ID params.`);
    }
    return apiUrl;
  }
}

/***/ }),

/***/ 5230:
/*!***************************************************************!*\
  !*** ./libs/wallet/src/lib/services/swap-service.strategy.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapeServiceStrategy": () => (/* binding */ SwapeServiceStrategy)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SwapeServiceStrategy extends _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__.Strategy {
  constructor() {
    super(...arguments);
    this.strategyType = '0x';
  }
  getPrice(ops) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._lib.getPrice(ops);
    })();
  }
  getQuote(ops) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2._lib.getQuote(ops);
    })();
  }
  swap(provider, txQuote) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3._lib.swap(provider, txQuote);
    })();
  }
}
SwapeServiceStrategy.ɵfac = /*@__PURE__*/function () {
  let ɵSwapeServiceStrategy_BaseFactory;
  return function SwapeServiceStrategy_Factory(t) {
    return (ɵSwapeServiceStrategy_BaseFactory || (ɵSwapeServiceStrategy_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SwapeServiceStrategy)))(t || SwapeServiceStrategy);
  };
}();
SwapeServiceStrategy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SwapeServiceStrategy,
  factory: SwapeServiceStrategy.ɵfac
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _0x_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./0x.service */ 95311);
/* harmony import */ var _swap_service_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swap-service.strategy */ 5230);









const SWAP_STRATEGIES = [{
  name: '0x',
  get: apiKey => new _0x_service__WEBPACK_IMPORTED_MODULE_3__.OxServcie(apiKey)
}];
const CHAIN_IDS = [{
  id: 1,
  name: "Ethereum Mainnet",
  logo: 'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png'
},
// { id: 3, name: "Ropsten Testnet" },
// { id: 4, name: "Rinkeby Testnet" },
{
  id: 5,
  name: "Goerli Testnet"
},
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
}, {
  id: 80001,
  name: "Polygon Mumbai Testnet",
  logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png'
}, {
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
  constructor(_swapService, _loaderService, _datastoreService, _utilsService, _authService) {
    var _this = this;
    this._swapService = _swapService;
    this._loaderService = _loaderService;
    this._datastoreService = _datastoreService;
    this._utilsService = _utilsService;
    this._authService = _authService;
    this._config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WALLET_SERVICE_APIKEYS));
    this.account$ = this._authService.account$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)( /*#__PURE__*/function () {
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
    this._wallets$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.wallets$ = this._wallets$.asObservable();
    this._tokensBalances$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.tokensBalances$ = this._tokensBalances$.asObservable().pipe(
    // add logo to all token
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(tokensBalances => tokensBalances.map(token => {
      const chain = CHAIN_IDS.find(c => c.id === token?.chainId);
      return {
        ...token,
        logo: chain?.logo
      };
    })));
    // define swap default strategy
    this._setSwapStrategy();
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
  getPriceToSwapAsset(ops) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        strategyType = '0x',
        ...value
      } = ops;
      _this4._setSwapStrategy(strategyType);
      return yield _this4._swapService.getPrice(value);
    })();
  }
  /**
   * Method that have to define `swap` strategy using `swapService.setStrategy()` before
   * call `getQuote()` and `swap()` method to perform assets swaping.
   * This method will exit with a `modalCtrl.close(txResult)` with `tx` details, if success or will display
   * error message using error propagation strategy  `new Error()`
   */
  swapAssets(ops) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = _this5._authService.ethereumProvider$.value;
      const {
        strategyType = '0x',
        ...value
      } = ops;
      _this5._setSwapStrategy(strategyType);
      const quote = yield _this5._swapService.getQuote(value);
      return yield _this5._swapService.swap(provider, quote);
    })();
  }
  _loadOtherWallets() {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallets = []
      } = yield _this6._datastoreService.getData(ROOT_DB_COLLECTION, ['wallets'],
      // key
      {
        wallets: []
      } // default value to save if not exist (optional)
      );
      // update state
      _this6._wallets$.next(wallets || []);
      return _this6._wallets$.value;
    })();
  }
  getTokensBalances(chainIds, address) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this7._utilsService.getTokensBalances(chainIds, address);
    })();
  }
  _loadEVMTokensBalances(account) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const chainIds = CHAIN_IDS.map(c => c.id);
      const {
        balances
      } = yield _this8.getTokensBalances(chainIds, account);
      // add token logo
      _this8._tokensBalances$.next([..._this8._tokensBalances$.value, ...balances]);
    })();
  }
  _setSwapStrategy(strategyType = '0x') {
    const apiKey = this._config?.['0xapiKey'];
    // define swap default strategy
    const swapStrategy = SWAP_STRATEGIES.find(s => s.name === strategyType)?.get(apiKey);
    if (!swapStrategy) {
      throw new Error(`Swap strategy not available.`);
    }
    this._swapService.setStrategy(swapStrategy);
  }
}
WalletService.ɵfac = function WalletService_Factory(t) {
  return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_swap_service_strategy__WEBPACK_IMPORTED_MODULE_4__.SwapeServiceStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WALLET_UTILS)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)));
};
WalletService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 84266);
/* harmony import */ var _containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/wallet-page/wallet-page.component */ 20440);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/items-container/items-container.component */ 21494);
/* harmony import */ var _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/net-worth.pipe */ 2660);
/* harmony import */ var _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/slice-address.pipe */ 4633);
/* harmony import */ var _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/assets-type.pipe */ 14769);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/wallet.service */ 56240);
/* harmony import */ var _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/diff-percent.pipe */ 6856);
/* harmony import */ var _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/avatar.directive */ 12713);
/* harmony import */ var _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/swap-assets-modal/swap-assets-modal.component */ 19366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/qrcode.pipe */ 71071);
/* harmony import */ var _services_swap_service_strategy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/swap-service.strategy */ 5230);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _factories_local_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./factories/local.factory */ 3551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);




















class WalletModule {}
WalletModule.ɵfac = function WalletModule_Factory(t) {
  return new (t || WalletModule)();
};
WalletModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: WalletModule
});
WalletModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  providers: [{
    provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_12__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_12__.TOKENS_NAME.APP_WALLET_UTILS),
    useFactory: isProd => {
      return (0,_factories_local_factory__WEBPACK_IMPORTED_MODULE_13__.localWalletApiFactory)();
      // return (environment?.version?.includes('local')||false)
      //   ? localWalletApiFactory()
      //   // : alchemyFactory('q8jTnGRDHP4g2uP6mkkfLU7RMB7aFRuC')
      //   : ankrFactory()
      //  //  : covalentFactory('cqt_rQBTdRtJhRPbhb6cpkmYM7bJkdm6')
    },

    deps: [(0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_12__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_12__.TOKENS_NAME.APP_IS_PROD)]
  }, _services_wallet_service__WEBPACK_IMPORTED_MODULE_6__.WalletService, _services_swap_service_strategy__WEBPACK_IMPORTED_MODULE_11__.SwapeServiceStrategy],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.walletRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](WalletModule, {
    declarations: [_containers_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_1__.WalletPageComponent, _components_items_container_items_container_component__WEBPACK_IMPORTED_MODULE_2__.ItemsContainerComponent, _components_swap_assets_modal_swap_assets_modal_component__WEBPACK_IMPORTED_MODULE_9__.SwapAssetsModalComponent, _directives_avatar_directive__WEBPACK_IMPORTED_MODULE_8__.AvatarDirective, _pipes_net_worth_pipe__WEBPACK_IMPORTED_MODULE_3__.NetWorthPipe, _pipes_slice_address_pipe__WEBPACK_IMPORTED_MODULE_4__.SliceAddressPipe, _pipes_assets_type_pipe__WEBPACK_IMPORTED_MODULE_5__.AssetsTypePipe, _pipes_diff_percent_pipe__WEBPACK_IMPORTED_MODULE_7__.DiffPercentPipe, _pipes_qrcode_pipe__WEBPACK_IMPORTED_MODULE_10__.QRcodePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 94503:
/*!*************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/_version.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
const version = "abi/5.7.0";

/***/ }),

/***/ 79625:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/abi-coder.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbiCoder": () => (/* binding */ AbiCoder),
/* harmony export */   "defaultAbiCoder": () => (/* binding */ defaultAbiCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 35111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 94503);
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coders/abstract-coder */ 50822);
/* harmony import */ var _coders_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coders/address */ 76539);
/* harmony import */ var _coders_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coders/array */ 40754);
/* harmony import */ var _coders_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coders/boolean */ 84401);
/* harmony import */ var _coders_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coders/bytes */ 5812);
/* harmony import */ var _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coders/fixed-bytes */ 97290);
/* harmony import */ var _coders_null__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coders/null */ 98159);
/* harmony import */ var _coders_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coders/number */ 82183);
/* harmony import */ var _coders_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coders/string */ 80330);
/* harmony import */ var _coders_tuple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coders/tuple */ 3076);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fragments */ 46935);


// See: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);











const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
class AbiCoder {
  constructor(coerceFunc) {
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "coerceFunc", coerceFunc || null);
  }
  _getCoder(param) {
    switch (param.baseType) {
      case "address":
        return new _coders_address__WEBPACK_IMPORTED_MODULE_3__.AddressCoder(param.name);
      case "bool":
        return new _coders_boolean__WEBPACK_IMPORTED_MODULE_4__.BooleanCoder(param.name);
      case "string":
        return new _coders_string__WEBPACK_IMPORTED_MODULE_5__.StringCoder(param.name);
      case "bytes":
        return new _coders_bytes__WEBPACK_IMPORTED_MODULE_6__.BytesCoder(param.name);
      case "array":
        return new _coders_array__WEBPACK_IMPORTED_MODULE_7__.ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
      case "tuple":
        return new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder((param.components || []).map(component => {
          return this._getCoder(component);
        }), param.name);
      case "":
        return new _coders_null__WEBPACK_IMPORTED_MODULE_9__.NullCoder(param.name);
    }
    // u?int[0-9]*
    let match = param.type.match(paramTypeNumber);
    if (match) {
      let size = parseInt(match[2] || "256");
      if (size === 0 || size > 256 || size % 8 !== 0) {
        logger.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
      }
      return new _coders_number__WEBPACK_IMPORTED_MODULE_10__.NumberCoder(size / 8, match[1] === "int", param.name);
    }
    // bytes[0-9]+
    match = param.type.match(paramTypeBytes);
    if (match) {
      let size = parseInt(match[1]);
      if (size === 0 || size > 32) {
        logger.throwArgumentError("invalid bytes length", "param", param);
      }
      return new _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__.FixedBytesCoder(size, param.name);
    }
    return logger.throwArgumentError("invalid type", "type", param.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(data, allowLoose) {
    return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Reader(data, this._getWordSize(), this.coerceFunc, allowLoose);
  }
  _getWriter() {
    return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Writer(this._getWordSize());
  }
  getDefaultValue(types) {
    const coders = types.map(type => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
    const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
    return coder.defaultValue();
  }
  encode(types, values) {
    if (types.length !== values.length) {
      logger.throwError("types/values length mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
        count: {
          types: types.length,
          values: values.length
        },
        value: {
          types: types,
          values: values
        }
      });
    }
    const coders = types.map(type => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
    const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
    const writer = this._getWriter();
    coder.encode(writer, values);
    return writer.data;
  }
  decode(types, data, loose) {
    const coders = types.map(type => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
    const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
    return coder.decode(this._getReader((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__.arrayify)(data), loose));
  }
}
const defaultAbiCoder = new AbiCoder();

/***/ }),

/***/ 50822:
/*!**************************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coder": () => (/* binding */ Coder),
/* harmony export */   "Reader": () => (/* binding */ Reader),
/* harmony export */   "Writer": () => (/* binding */ Writer),
/* harmony export */   "checkResultErrors": () => (/* binding */ checkResultErrors)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ 62039);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 35111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ 94503);







const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
function checkResultErrors(result) {
  // Find the first error (if any)
  const errors = [];
  const checkErrors = function (path, object) {
    if (!Array.isArray(object)) {
      return;
    }
    for (let key in object) {
      const childPath = path.slice();
      childPath.push(key);
      try {
        checkErrors(childPath, object[key]);
      } catch (error) {
        errors.push({
          path: childPath,
          error: error
        });
      }
    }
  };
  checkErrors([], result);
  return errors;
}
class Coder {
  constructor(name, type, localName, dynamic) {
    // @TODO: defineReadOnly these
    this.name = name;
    this.type = type;
    this.localName = localName;
    this.dynamic = dynamic;
  }
  _throwError(message, value) {
    logger.throwArgumentError(message, this.localName, value);
  }
}
class Writer {
  constructor(wordSize) {
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
    this._data = [];
    this._dataLength = 0;
    this._padding = new Uint8Array(wordSize);
  }
  get data() {
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(data) {
    this._data.push(data);
    this._dataLength += data.length;
    return data.length;
  }
  appendWriter(writer) {
    return this._writeData((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)(writer._data));
  }
  // Arrayish items; padded on the right to wordSize
  writeBytes(value) {
    let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
    const paddingOffset = bytes.length % this.wordSize;
    if (paddingOffset) {
      bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([bytes, this._padding.slice(paddingOffset)]);
    }
    return this._writeData(bytes);
  }
  _getValue(value) {
    let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(value));
    if (bytes.length > this.wordSize) {
      logger.throwError("value out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
        length: this.wordSize,
        offset: bytes.length
      });
    }
    if (bytes.length % this.wordSize) {
      bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([this._padding.slice(bytes.length % this.wordSize), bytes]);
    }
    return bytes;
  }
  // BigNumberish items; padded on the left to wordSize
  writeValue(value) {
    return this._writeData(this._getValue(value));
  }
  writeUpdatableValue() {
    const offset = this._data.length;
    this._data.push(this._padding);
    this._dataLength += this.wordSize;
    return value => {
      this._data[offset] = this._getValue(value);
    };
  }
}
class Reader {
  constructor(data, wordSize, coerceFunc, allowLoose) {
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data));
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_coerceFunc", coerceFunc);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "allowLoose", allowLoose);
    this._offset = 0;
  }
  get data() {
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(this._data);
  }
  get consumed() {
    return this._offset;
  }
  // The default Coerce function
  static coerce(name, value) {
    let match = name.match("^u?int([0-9]+)$");
    if (match && parseInt(match[1]) <= 48) {
      value = value.toNumber();
    }
    return value;
  }
  coerce(name, value) {
    if (this._coerceFunc) {
      return this._coerceFunc(name, value);
    }
    return Reader.coerce(name, value);
  }
  _peekBytes(offset, length, loose) {
    let alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
    if (this._offset + alignedLength > this._data.length) {
      if (this.allowLoose && loose && this._offset + length <= this._data.length) {
        alignedLength = length;
      } else {
        logger.throwError("data out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
          length: this._data.length,
          offset: this._offset + alignedLength
        });
      }
    }
    return this._data.slice(this._offset, this._offset + alignedLength);
  }
  subReader(offset) {
    return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
  }
  readBytes(length, loose) {
    let bytes = this._peekBytes(0, length, !!loose);
    this._offset += bytes.length;
    // @TODO: Make sure the length..end bytes are all 0?
    return bytes.slice(0, length);
  }
  readValue() {
    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(this.readBytes(this.wordSize));
  }
}

/***/ }),

/***/ 76539:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/address.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressCoder": () => (/* binding */ AddressCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);





class AddressCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(localName) {
    super("address", "address", localName, false);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(writer, value) {
    try {
      value = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)(value);
    } catch (error) {
      this._throwError(error.message, value);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexZeroPad)(reader.readValue().toHexString(), 20));
  }
}

/***/ }),

/***/ 12116:
/*!*********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousCoder": () => (/* binding */ AnonymousCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);



// Clones the functionality of an existing Coder, but without a localName
class AnonymousCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(coder) {
    super(coder.name, coder.type, undefined, coder.dynamic);
    this.coder = coder;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(writer, value) {
    return this.coder.encode(writer, value);
  }
  decode(reader) {
    return this.coder.decode(reader);
  }
}

/***/ }),

/***/ 40754:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayCoder": () => (/* binding */ ArrayCoder),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "unpack": () => (/* binding */ unpack)
/* harmony export */ });
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ 94503);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-coder */ 50822);
/* harmony import */ var _anonymous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anonymous */ 12116);




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);


function pack(writer, coders, values) {
  let arrayValues = null;
  if (Array.isArray(values)) {
    arrayValues = values;
  } else if (values && typeof values === "object") {
    let unique = {};
    arrayValues = coders.map(coder => {
      const name = coder.localName;
      if (!name) {
        logger.throwError("cannot encode object for signature with missing names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
          argument: "values",
          coder: coder,
          value: values
        });
      }
      if (unique[name]) {
        logger.throwError("cannot encode object for signature with duplicate names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
          argument: "values",
          coder: coder,
          value: values
        });
      }
      unique[name] = true;
      return values[name];
    });
  } else {
    logger.throwArgumentError("invalid tuple value", "tuple", values);
  }
  if (coders.length !== arrayValues.length) {
    logger.throwArgumentError("types/value length mismatch", "tuple", values);
  }
  let staticWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
  let dynamicWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
  let updateFuncs = [];
  coders.forEach((coder, index) => {
    let value = arrayValues[index];
    if (coder.dynamic) {
      // Get current dynamic offset (for the future pointer)
      let dynamicOffset = dynamicWriter.length;
      // Encode the dynamic value into the dynamicWriter
      coder.encode(dynamicWriter, value);
      // Prepare to populate the correct offset once we are done
      let updateFunc = staticWriter.writeUpdatableValue();
      updateFuncs.push(baseOffset => {
        updateFunc(baseOffset + dynamicOffset);
      });
    } else {
      coder.encode(staticWriter, value);
    }
  });
  // Backfill all the dynamic offsets, now that we know the static length
  updateFuncs.forEach(func => {
    func(staticWriter.length);
  });
  let length = writer.appendWriter(staticWriter);
  length += writer.appendWriter(dynamicWriter);
  return length;
}
function unpack(reader, coders) {
  let values = [];
  // A reader anchored to this base
  let baseReader = reader.subReader(0);
  coders.forEach(coder => {
    let value = null;
    if (coder.dynamic) {
      let offset = reader.readValue();
      let offsetReader = baseReader.subReader(offset.toNumber());
      try {
        value = coder.decode(offsetReader);
      } catch (error) {
        // Cannot recover from this
        if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    } else {
      try {
        value = coder.decode(reader);
      } catch (error) {
        // Cannot recover from this
        if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    }
    if (value != undefined) {
      values.push(value);
    }
  });
  // We only output named properties for uniquely named coders
  const uniqueNames = coders.reduce((accum, coder) => {
    const name = coder.localName;
    if (name) {
      if (!accum[name]) {
        accum[name] = 0;
      }
      accum[name]++;
    }
    return accum;
  }, {});
  // Add any named parameters (i.e. tuples)
  coders.forEach((coder, index) => {
    let name = coder.localName;
    if (!name || uniqueNames[name] !== 1) {
      return;
    }
    if (name === "length") {
      name = "_length";
    }
    if (values[name] != null) {
      return;
    }
    const value = values[index];
    if (value instanceof Error) {
      Object.defineProperty(values, name, {
        enumerable: true,
        get: () => {
          throw value;
        }
      });
    } else {
      values[name] = value;
    }
  });
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value instanceof Error) {
      Object.defineProperty(values, i, {
        enumerable: true,
        get: () => {
          throw value;
        }
      });
    }
  }
  return Object.freeze(values);
}
class ArrayCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Coder {
  constructor(coder, length, localName) {
    const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
    const dynamic = length === -1 || coder.dynamic;
    super("array", type, localName, dynamic);
    this.coder = coder;
    this.length = length;
  }
  defaultValue() {
    // Verifies the child coder is valid (even if the array is dynamic or 0-length)
    const defaultChild = this.coder.defaultValue();
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(defaultChild);
    }
    return result;
  }
  encode(writer, value) {
    if (!Array.isArray(value)) {
      this._throwError("expected array value", value);
    }
    let count = this.length;
    if (count === -1) {
      count = value.length;
      writer.writeValue(value.length);
    }
    logger.checkArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
    let coders = [];
    for (let i = 0; i < value.length; i++) {
      coders.push(this.coder);
    }
    return pack(writer, coders, value);
  }
  decode(reader) {
    let count = this.length;
    if (count === -1) {
      count = reader.readValue().toNumber();
      // Check that there is *roughly* enough data to ensure
      // stray random data is not being read as a length. Each
      // slot requires at least 32 bytes for their value (or 32
      // bytes as a link to the data). This could use a much
      // tighter bound, but we are erroring on the side of safety.
      if (count * 32 > reader._data.length) {
        logger.throwError("insufficient data length", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
          length: reader._data.length,
          count: count
        });
      }
    }
    let coders = [];
    for (let i = 0; i < count; i++) {
      coders.push(new _anonymous__WEBPACK_IMPORTED_MODULE_3__.AnonymousCoder(this.coder));
    }
    return reader.coerce(this.name, unpack(reader, coders));
  }
}

/***/ }),

/***/ 84401:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/boolean.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanCoder": () => (/* binding */ BooleanCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);



class BooleanCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(localName) {
    super("bool", "bool", localName, false);
  }
  defaultValue() {
    return false;
  }
  encode(writer, value) {
    return writer.writeValue(value ? 1 : 0);
  }
  decode(reader) {
    return reader.coerce(this.type, !reader.readValue().isZero());
  }
}

/***/ }),

/***/ 5812:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BytesCoder": () => (/* binding */ BytesCoder),
/* harmony export */   "DynamicBytesCoder": () => (/* binding */ DynamicBytesCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);




class DynamicBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(type, localName) {
    super(type, type, localName, true);
  }
  defaultValue() {
    return "0x";
  }
  encode(writer, value) {
    value = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
    let length = writer.writeValue(value.length);
    length += writer.writeBytes(value);
    return length;
  }
  decode(reader) {
    return reader.readBytes(reader.readValue().toNumber(), true);
  }
}
class BytesCoder extends DynamicBytesCoder {
  constructor(localName) {
    super("bytes", localName);
  }
  decode(reader) {
    return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(super.decode(reader)));
  }
}

/***/ }),

/***/ 97290:
/*!***********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedBytesCoder": () => (/* binding */ FixedBytesCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);




// @TODO: Merge this with bytes
class FixedBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(size, localName) {
    let name = "bytes" + String(size);
    super(name, name, localName, false);
    this.size = size;
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(writer, value) {
    let data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
    if (data.length !== this.size) {
      this._throwError("incorrect data length", value);
    }
    return writer.writeBytes(data);
  }
  decode(reader) {
    return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(reader.readBytes(this.size)));
  }
}

/***/ }),

/***/ 98159:
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/null.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullCoder": () => (/* binding */ NullCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);



class NullCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(localName) {
    super("null", "", localName, false);
  }
  defaultValue() {
    return null;
  }
  encode(writer, value) {
    if (value != null) {
      this._throwError("not null", value);
    }
    return writer.writeBytes([]);
  }
  decode(reader) {
    reader.readBytes(0);
    return reader.coerce(this.name, null);
  }
}

/***/ }),

/***/ 82183:
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/number.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberCoder": () => (/* binding */ NumberCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bignumber */ 62039);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/constants */ 36556);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);





class NumberCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(size, signed, localName) {
    const name = (signed ? "int" : "uint") + size * 8;
    super(name, name, localName, false);
    this.size = size;
    this.signed = signed;
  }
  defaultValue() {
    return 0;
  }
  encode(writer, value) {
    let v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(value);
    // Check bounds are safe for encoding
    let maxUintValue = _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.MaxUint256.mask(writer.wordSize * 8);
    if (this.signed) {
      let bounds = maxUintValue.mask(this.size * 8 - 1);
      if (v.gt(bounds) || v.lt(bounds.add(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.One).mul(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.NegativeOne))) {
        this._throwError("value out-of-bounds", value);
      }
    } else if (v.lt(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.Zero) || v.gt(maxUintValue.mask(this.size * 8))) {
      this._throwError("value out-of-bounds", value);
    }
    v = v.toTwos(this.size * 8).mask(this.size * 8);
    if (this.signed) {
      v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
    }
    return writer.writeValue(v);
  }
  decode(reader) {
    let value = reader.readValue().mask(this.size * 8);
    if (this.signed) {
      value = value.fromTwos(this.size * 8);
    }
    return reader.coerce(this.name, value);
  }
}

/***/ }),

/***/ 80330:
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/string.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringCoder": () => (/* binding */ StringCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/strings */ 20151);
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytes */ 5812);




class StringCoder extends _bytes__WEBPACK_IMPORTED_MODULE_0__.DynamicBytesCoder {
  constructor(localName) {
    super("string", localName);
  }
  defaultValue() {
    return "";
  }
  encode(writer, value) {
    return super.encode(writer, (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8Bytes)(value));
  }
  decode(reader) {
    return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8String)(super.decode(reader));
  }
}

/***/ }),

/***/ 3076:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/tuple.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TupleCoder": () => (/* binding */ TupleCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 50822);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ 40754);




class TupleCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
  constructor(coders, localName) {
    let dynamic = false;
    const types = [];
    coders.forEach(coder => {
      if (coder.dynamic) {
        dynamic = true;
      }
      types.push(coder.type);
    });
    const type = "tuple(" + types.join(",") + ")";
    super("tuple", type, localName, dynamic);
    this.coders = coders;
  }
  defaultValue() {
    const values = [];
    this.coders.forEach(coder => {
      values.push(coder.defaultValue());
    });
    // We only output named properties for uniquely named coders
    const uniqueNames = this.coders.reduce((accum, coder) => {
      const name = coder.localName;
      if (name) {
        if (!accum[name]) {
          accum[name] = 0;
        }
        accum[name]++;
      }
      return accum;
    }, {});
    // Add named values
    this.coders.forEach((coder, index) => {
      let name = coder.localName;
      if (!name || uniqueNames[name] !== 1) {
        return;
      }
      if (name === "length") {
        name = "_length";
      }
      if (values[name] != null) {
        return;
      }
      values[name] = values[index];
    });
    return Object.freeze(values);
  }
  encode(writer, value) {
    return (0,_array__WEBPACK_IMPORTED_MODULE_1__.pack)(writer, this.coders, value);
  }
  decode(reader) {
    return reader.coerce(this.name, (0,_array__WEBPACK_IMPORTED_MODULE_1__.unpack)(reader, this.coders));
  }
}

/***/ }),

/***/ 46935:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/fragments.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorFragment": () => (/* binding */ ConstructorFragment),
/* harmony export */   "ErrorFragment": () => (/* binding */ ErrorFragment),
/* harmony export */   "EventFragment": () => (/* binding */ EventFragment),
/* harmony export */   "FormatTypes": () => (/* binding */ FormatTypes),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "FunctionFragment": () => (/* binding */ FunctionFragment),
/* harmony export */   "ParamType": () => (/* binding */ ParamType)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bignumber */ 62039);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 35111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 94503);






const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
const _constructorGuard = {};
let ModifiersBytes = {
  calldata: true,
  memory: true,
  storage: true
};
let ModifiersNest = {
  calldata: true,
  memory: true
};
function checkModifier(type, name) {
  if (type === "bytes" || type === "string") {
    if (ModifiersBytes[name]) {
      return true;
    }
  } else if (type === "address") {
    if (name === "payable") {
      return true;
    }
  } else if (type.indexOf("[") >= 0 || type === "tuple") {
    if (ModifiersNest[name]) {
      return true;
    }
  }
  if (ModifiersBytes[name] || name === "payable") {
    logger.throwArgumentError("invalid modifier", "name", name);
  }
  return false;
}
// @TODO: Make sure that children of an indexed tuple are marked with a null indexed
function parseParamType(param, allowIndexed) {
  let originalParam = param;
  function throwError(i) {
    logger.throwArgumentError(`unexpected character at position ${i}`, "param", param);
  }
  param = param.replace(/\s/g, " ");
  function newNode(parent) {
    let node = {
      type: "",
      name: "",
      parent: parent,
      state: {
        allowType: true
      }
    };
    if (allowIndexed) {
      node.indexed = false;
    }
    return node;
  }
  let parent = {
    type: "",
    name: "",
    state: {
      allowType: true
    }
  };
  let node = parent;
  for (let i = 0; i < param.length; i++) {
    let c = param[i];
    switch (c) {
      case "(":
        if (node.state.allowType && node.type === "") {
          node.type = "tuple";
        } else if (!node.state.allowParams) {
          throwError(i);
        }
        node.state.allowType = false;
        node.type = verifyType(node.type);
        node.components = [newNode(node)];
        node = node.components[0];
        break;
      case ")":
        delete node.state;
        if (node.name === "indexed") {
          if (!allowIndexed) {
            throwError(i);
          }
          node.indexed = true;
          node.name = "";
        }
        if (checkModifier(node.type, node.name)) {
          node.name = "";
        }
        node.type = verifyType(node.type);
        let child = node;
        node = node.parent;
        if (!node) {
          throwError(i);
        }
        delete child.parent;
        node.state.allowParams = false;
        node.state.allowName = true;
        node.state.allowArray = true;
        break;
      case ",":
        delete node.state;
        if (node.name === "indexed") {
          if (!allowIndexed) {
            throwError(i);
          }
          node.indexed = true;
          node.name = "";
        }
        if (checkModifier(node.type, node.name)) {
          node.name = "";
        }
        node.type = verifyType(node.type);
        let sibling = newNode(node.parent);
        //{ type: "", name: "", parent: node.parent, state: { allowType: true } };
        node.parent.components.push(sibling);
        delete node.parent;
        node = sibling;
        break;
      // Hit a space...
      case " ":
        // If reading type, the type is done and may read a param or name
        if (node.state.allowType) {
          if (node.type !== "") {
            node.type = verifyType(node.type);
            delete node.state.allowType;
            node.state.allowName = true;
            node.state.allowParams = true;
          }
        }
        // If reading name, the name is done
        if (node.state.allowName) {
          if (node.name !== "") {
            if (node.name === "indexed") {
              if (!allowIndexed) {
                throwError(i);
              }
              if (node.indexed) {
                throwError(i);
              }
              node.indexed = true;
              node.name = "";
            } else if (checkModifier(node.type, node.name)) {
              node.name = "";
            } else {
              node.state.allowName = false;
            }
          }
        }
        break;
      case "[":
        if (!node.state.allowArray) {
          throwError(i);
        }
        node.type += c;
        node.state.allowArray = false;
        node.state.allowName = false;
        node.state.readArray = true;
        break;
      case "]":
        if (!node.state.readArray) {
          throwError(i);
        }
        node.type += c;
        node.state.readArray = false;
        node.state.allowArray = true;
        node.state.allowName = true;
        break;
      default:
        if (node.state.allowType) {
          node.type += c;
          node.state.allowParams = true;
          node.state.allowArray = true;
        } else if (node.state.allowName) {
          node.name += c;
          delete node.state.allowArray;
        } else if (node.state.readArray) {
          node.type += c;
        } else {
          throwError(i);
        }
    }
  }
  if (node.parent) {
    logger.throwArgumentError("unexpected eof", "param", param);
  }
  delete parent.state;
  if (node.name === "indexed") {
    if (!allowIndexed) {
      throwError(originalParam.length - 7);
    }
    if (node.indexed) {
      throwError(originalParam.length - 7);
    }
    node.indexed = true;
    node.name = "";
  } else if (checkModifier(node.type, node.name)) {
    node.name = "";
  }
  parent.type = verifyType(parent.type);
  return parent;
}
function populate(object, params) {
  for (let key in params) {
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(object, key, params[key]);
  }
}
const FormatTypes = Object.freeze({
  // Bare formatting, as is needed for computing a sighash of an event or function
  sighash: "sighash",
  // Human-Readable with Minimal spacing and without names (compact human-readable)
  minimal: "minimal",
  // Human-Readable with nice spacing, including all names
  full: "full",
  // JSON-format a la Solidity
  json: "json"
});
const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ParamType {
  constructor(constructorGuard, params) {
    if (constructorGuard !== _constructorGuard) {
      logger.throwError("use fromString", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "new ParamType()"
      });
    }
    populate(this, params);
    let match = this.type.match(paramTypeArray);
    if (match) {
      populate(this, {
        arrayLength: parseInt(match[2] || "-1"),
        arrayChildren: ParamType.fromObject({
          type: match[1],
          components: this.components
        }),
        baseType: "array"
      });
    } else {
      populate(this, {
        arrayLength: null,
        arrayChildren: null,
        baseType: this.components != null ? "tuple" : this.type
      });
    }
    this._isParamType = true;
    Object.freeze(this);
  }
  // Format the parameter fragment
  //   - sighash: "(uint256,address)"
  //   - minimal: "tuple(uint256,address) indexed"
  //   - full:    "tuple(uint256 foo, address bar) indexed baz"
  format(format) {
    if (!format) {
      format = FormatTypes.sighash;
    }
    if (!FormatTypes[format]) {
      logger.throwArgumentError("invalid format type", "format", format);
    }
    if (format === FormatTypes.json) {
      let result = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || undefined
      };
      if (typeof this.indexed === "boolean") {
        result.indexed = this.indexed;
      }
      if (this.components) {
        result.components = this.components.map(comp => JSON.parse(comp.format(format)));
      }
      return JSON.stringify(result);
    }
    let result = "";
    // Array
    if (this.baseType === "array") {
      result += this.arrayChildren.format(format);
      result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
    } else {
      if (this.baseType === "tuple") {
        if (format !== FormatTypes.sighash) {
          result += this.type;
        }
        result += "(" + this.components.map(comp => comp.format(format)).join(format === FormatTypes.full ? ", " : ",") + ")";
      } else {
        result += this.type;
      }
    }
    if (format !== FormatTypes.sighash) {
      if (this.indexed === true) {
        result += " indexed";
      }
      if (format === FormatTypes.full && this.name) {
        result += " " + this.name;
      }
    }
    return result;
  }
  static from(value, allowIndexed) {
    if (typeof value === "string") {
      return ParamType.fromString(value, allowIndexed);
    }
    return ParamType.fromObject(value);
  }
  static fromObject(value) {
    if (ParamType.isParamType(value)) {
      return value;
    }
    return new ParamType(_constructorGuard, {
      name: value.name || null,
      type: verifyType(value.type),
      indexed: value.indexed == null ? null : !!value.indexed,
      components: value.components ? value.components.map(ParamType.fromObject) : null
    });
  }
  static fromString(value, allowIndexed) {
    function ParamTypify(node) {
      return ParamType.fromObject({
        name: node.name,
        type: node.type,
        indexed: node.indexed,
        components: node.components
      });
    }
    return ParamTypify(parseParamType(value, !!allowIndexed));
  }
  static isParamType(value) {
    return !!(value != null && value._isParamType);
  }
}
;
function parseParams(value, allowIndex) {
  return splitNesting(value).map(param => ParamType.fromString(param, allowIndex));
}
class Fragment {
  constructor(constructorGuard, params) {
    if (constructorGuard !== _constructorGuard) {
      logger.throwError("use a static from method", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "new Fragment()"
      });
    }
    populate(this, params);
    this._isFragment = true;
    Object.freeze(this);
  }
  static from(value) {
    if (Fragment.isFragment(value)) {
      return value;
    }
    if (typeof value === "string") {
      return Fragment.fromString(value);
    }
    return Fragment.fromObject(value);
  }
  static fromObject(value) {
    if (Fragment.isFragment(value)) {
      return value;
    }
    switch (value.type) {
      case "function":
        return FunctionFragment.fromObject(value);
      case "event":
        return EventFragment.fromObject(value);
      case "constructor":
        return ConstructorFragment.fromObject(value);
      case "error":
        return ErrorFragment.fromObject(value);
      case "fallback":
      case "receive":
        // @TODO: Something? Maybe return a FunctionFragment? A custom DefaultFunctionFragment?
        return null;
    }
    return logger.throwArgumentError("invalid fragment object", "value", value);
  }
  static fromString(value) {
    // Make sure the "returns" is surrounded by a space and all whitespace is exactly one space
    value = value.replace(/\s/g, " ");
    value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
    value = value.trim();
    if (value.split(" ")[0] === "event") {
      return EventFragment.fromString(value.substring(5).trim());
    } else if (value.split(" ")[0] === "function") {
      return FunctionFragment.fromString(value.substring(8).trim());
    } else if (value.split("(")[0].trim() === "constructor") {
      return ConstructorFragment.fromString(value.trim());
    } else if (value.split(" ")[0] === "error") {
      return ErrorFragment.fromString(value.substring(5).trim());
    }
    return logger.throwArgumentError("unsupported fragment", "value", value);
  }
  static isFragment(value) {
    return !!(value && value._isFragment);
  }
}
class EventFragment extends Fragment {
  format(format) {
    if (!format) {
      format = FormatTypes.sighash;
    }
    if (!FormatTypes[format]) {
      logger.throwArgumentError("invalid format type", "format", format);
    }
    if (format === FormatTypes.json) {
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map(input => JSON.parse(input.format(format)))
      });
    }
    let result = "";
    if (format !== FormatTypes.sighash) {
      result += "event ";
    }
    result += this.name + "(" + this.inputs.map(input => input.format(format)).join(format === FormatTypes.full ? ", " : ",") + ") ";
    if (format !== FormatTypes.sighash) {
      if (this.anonymous) {
        result += "anonymous ";
      }
    }
    return result.trim();
  }
  static from(value) {
    if (typeof value === "string") {
      return EventFragment.fromString(value);
    }
    return EventFragment.fromObject(value);
  }
  static fromObject(value) {
    if (EventFragment.isEventFragment(value)) {
      return value;
    }
    if (value.type !== "event") {
      logger.throwArgumentError("invalid event object", "value", value);
    }
    const params = {
      name: verifyIdentifier(value.name),
      anonymous: value.anonymous,
      inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
      type: "event"
    };
    return new EventFragment(_constructorGuard, params);
  }
  static fromString(value) {
    let match = value.match(regexParen);
    if (!match) {
      logger.throwArgumentError("invalid event string", "value", value);
    }
    let anonymous = false;
    match[3].split(" ").forEach(modifier => {
      switch (modifier.trim()) {
        case "anonymous":
          anonymous = true;
          break;
        case "":
          break;
        default:
          logger.warn("unknown modifier: " + modifier);
      }
    });
    return EventFragment.fromObject({
      name: match[1].trim(),
      anonymous: anonymous,
      inputs: parseParams(match[2], true),
      type: "event"
    });
  }
  static isEventFragment(value) {
    return value && value._isFragment && value.type === "event";
  }
}
function parseGas(value, params) {
  params.gas = null;
  let comps = value.split("@");
  if (comps.length !== 1) {
    if (comps.length > 2) {
      logger.throwArgumentError("invalid human-readable ABI signature", "value", value);
    }
    if (!comps[1].match(/^[0-9]+$/)) {
      logger.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
    }
    params.gas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(comps[1]);
    return comps[0];
  }
  return value;
}
function parseModifiers(value, params) {
  params.constant = false;
  params.payable = false;
  params.stateMutability = "nonpayable";
  value.split(" ").forEach(modifier => {
    switch (modifier.trim()) {
      case "constant":
        params.constant = true;
        break;
      case "payable":
        params.payable = true;
        params.stateMutability = "payable";
        break;
      case "nonpayable":
        params.payable = false;
        params.stateMutability = "nonpayable";
        break;
      case "pure":
        params.constant = true;
        params.stateMutability = "pure";
        break;
      case "view":
        params.constant = true;
        params.stateMutability = "view";
        break;
      case "external":
      case "public":
      case "":
        break;
      default:
        console.log("unknown modifier: " + modifier);
    }
  });
}
function verifyState(value) {
  let result = {
    constant: false,
    payable: true,
    stateMutability: "payable"
  };
  if (value.stateMutability != null) {
    result.stateMutability = value.stateMutability;
    // Set (and check things are consistent) the constant property
    result.constant = result.stateMutability === "view" || result.stateMutability === "pure";
    if (value.constant != null) {
      if (!!value.constant !== result.constant) {
        logger.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
      }
    }
    // Set (and check things are consistent) the payable property
    result.payable = result.stateMutability === "payable";
    if (value.payable != null) {
      if (!!value.payable !== result.payable) {
        logger.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
      }
    }
  } else if (value.payable != null) {
    result.payable = !!value.payable;
    // If payable we can assume non-constant; otherwise we can't assume
    if (value.constant == null && !result.payable && value.type !== "constructor") {
      logger.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    result.constant = !!value.constant;
    if (result.constant) {
      result.stateMutability = "view";
    } else {
      result.stateMutability = result.payable ? "payable" : "nonpayable";
    }
    if (result.payable && result.constant) {
      logger.throwArgumentError("cannot have constant payable function", "value", value);
    }
  } else if (value.constant != null) {
    result.constant = !!value.constant;
    result.payable = !result.constant;
    result.stateMutability = result.constant ? "view" : "payable";
  } else if (value.type !== "constructor") {
    logger.throwArgumentError("unable to determine stateMutability", "value", value);
  }
  return result;
}
class ConstructorFragment extends Fragment {
  format(format) {
    if (!format) {
      format = FormatTypes.sighash;
    }
    if (!FormatTypes[format]) {
      logger.throwArgumentError("invalid format type", "format", format);
    }
    if (format === FormatTypes.json) {
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : undefined,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : undefined,
        inputs: this.inputs.map(input => JSON.parse(input.format(format)))
      });
    }
    if (format === FormatTypes.sighash) {
      logger.throwError("cannot format a constructor for sighash", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "format(sighash)"
      });
    }
    let result = "constructor(" + this.inputs.map(input => input.format(format)).join(format === FormatTypes.full ? ", " : ",") + ") ";
    if (this.stateMutability && this.stateMutability !== "nonpayable") {
      result += this.stateMutability + " ";
    }
    return result.trim();
  }
  static from(value) {
    if (typeof value === "string") {
      return ConstructorFragment.fromString(value);
    }
    return ConstructorFragment.fromObject(value);
  }
  static fromObject(value) {
    if (ConstructorFragment.isConstructorFragment(value)) {
      return value;
    }
    if (value.type !== "constructor") {
      logger.throwArgumentError("invalid constructor object", "value", value);
    }
    let state = verifyState(value);
    if (state.constant) {
      logger.throwArgumentError("constructor cannot be constant", "value", value);
    }
    const params = {
      name: null,
      type: value.type,
      inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
      payable: state.payable,
      stateMutability: state.stateMutability,
      gas: value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null
    };
    return new ConstructorFragment(_constructorGuard, params);
  }
  static fromString(value) {
    let params = {
      type: "constructor"
    };
    value = parseGas(value, params);
    let parens = value.match(regexParen);
    if (!parens || parens[1].trim() !== "constructor") {
      logger.throwArgumentError("invalid constructor string", "value", value);
    }
    params.inputs = parseParams(parens[2].trim(), false);
    parseModifiers(parens[3].trim(), params);
    return ConstructorFragment.fromObject(params);
  }
  static isConstructorFragment(value) {
    return value && value._isFragment && value.type === "constructor";
  }
}
class FunctionFragment extends ConstructorFragment {
  format(format) {
    if (!format) {
      format = FormatTypes.sighash;
    }
    if (!FormatTypes[format]) {
      logger.throwArgumentError("invalid format type", "format", format);
    }
    if (format === FormatTypes.json) {
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : undefined,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : undefined,
        inputs: this.inputs.map(input => JSON.parse(input.format(format))),
        outputs: this.outputs.map(output => JSON.parse(output.format(format)))
      });
    }
    let result = "";
    if (format !== FormatTypes.sighash) {
      result += "function ";
    }
    result += this.name + "(" + this.inputs.map(input => input.format(format)).join(format === FormatTypes.full ? ", " : ",") + ") ";
    if (format !== FormatTypes.sighash) {
      if (this.stateMutability) {
        if (this.stateMutability !== "nonpayable") {
          result += this.stateMutability + " ";
        }
      } else if (this.constant) {
        result += "view ";
      }
      if (this.outputs && this.outputs.length) {
        result += "returns (" + this.outputs.map(output => output.format(format)).join(", ") + ") ";
      }
      if (this.gas != null) {
        result += "@" + this.gas.toString() + " ";
      }
    }
    return result.trim();
  }
  static from(value) {
    if (typeof value === "string") {
      return FunctionFragment.fromString(value);
    }
    return FunctionFragment.fromObject(value);
  }
  static fromObject(value) {
    if (FunctionFragment.isFunctionFragment(value)) {
      return value;
    }
    if (value.type !== "function") {
      logger.throwArgumentError("invalid function object", "value", value);
    }
    let state = verifyState(value);
    const params = {
      type: value.type,
      name: verifyIdentifier(value.name),
      constant: state.constant,
      inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : [],
      outputs: value.outputs ? value.outputs.map(ParamType.fromObject) : [],
      payable: state.payable,
      stateMutability: state.stateMutability,
      gas: value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null
    };
    return new FunctionFragment(_constructorGuard, params);
  }
  static fromString(value) {
    let params = {
      type: "function"
    };
    value = parseGas(value, params);
    let comps = value.split(" returns ");
    if (comps.length > 2) {
      logger.throwArgumentError("invalid function string", "value", value);
    }
    let parens = comps[0].match(regexParen);
    if (!parens) {
      logger.throwArgumentError("invalid function signature", "value", value);
    }
    params.name = parens[1].trim();
    if (params.name) {
      verifyIdentifier(params.name);
    }
    params.inputs = parseParams(parens[2], false);
    parseModifiers(parens[3].trim(), params);
    // We have outputs
    if (comps.length > 1) {
      let returns = comps[1].match(regexParen);
      if (returns[1].trim() != "" || returns[3].trim() != "") {
        logger.throwArgumentError("unexpected tokens", "value", value);
      }
      params.outputs = parseParams(returns[2], false);
    } else {
      params.outputs = [];
    }
    return FunctionFragment.fromObject(params);
  }
  static isFunctionFragment(value) {
    return value && value._isFragment && value.type === "function";
  }
}
//export class StructFragment extends Fragment {
//}
function checkForbidden(fragment) {
  const sig = fragment.format();
  if (sig === "Error(string)" || sig === "Panic(uint256)") {
    logger.throwArgumentError(`cannot specify user defined ${sig} error`, "fragment", fragment);
  }
  return fragment;
}
class ErrorFragment extends Fragment {
  format(format) {
    if (!format) {
      format = FormatTypes.sighash;
    }
    if (!FormatTypes[format]) {
      logger.throwArgumentError("invalid format type", "format", format);
    }
    if (format === FormatTypes.json) {
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map(input => JSON.parse(input.format(format)))
      });
    }
    let result = "";
    if (format !== FormatTypes.sighash) {
      result += "error ";
    }
    result += this.name + "(" + this.inputs.map(input => input.format(format)).join(format === FormatTypes.full ? ", " : ",") + ") ";
    return result.trim();
  }
  static from(value) {
    if (typeof value === "string") {
      return ErrorFragment.fromString(value);
    }
    return ErrorFragment.fromObject(value);
  }
  static fromObject(value) {
    if (ErrorFragment.isErrorFragment(value)) {
      return value;
    }
    if (value.type !== "error") {
      logger.throwArgumentError("invalid error object", "value", value);
    }
    const params = {
      type: value.type,
      name: verifyIdentifier(value.name),
      inputs: value.inputs ? value.inputs.map(ParamType.fromObject) : []
    };
    return checkForbidden(new ErrorFragment(_constructorGuard, params));
  }
  static fromString(value) {
    let params = {
      type: "error"
    };
    let parens = value.match(regexParen);
    if (!parens) {
      logger.throwArgumentError("invalid error signature", "value", value);
    }
    params.name = parens[1].trim();
    if (params.name) {
      verifyIdentifier(params.name);
    }
    params.inputs = parseParams(parens[2], false);
    return checkForbidden(ErrorFragment.fromObject(params));
  }
  static isErrorFragment(value) {
    return value && value._isFragment && value.type === "error";
  }
}
function verifyType(type) {
  // These need to be transformed to their full description
  if (type.match(/^uint($|[^1-9])/)) {
    type = "uint256" + type.substring(4);
  } else if (type.match(/^int($|[^1-9])/)) {
    type = "int256" + type.substring(3);
  }
  // @TODO: more verification
  return type;
}
// See: https://github.com/ethereum/solidity/blob/1f8f1a3db93a548d0555e3e14cfc55a10e25b60e/docs/grammar/SolidityLexer.g4#L234
const regexIdentifier = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function verifyIdentifier(value) {
  if (!value || !value.match(regexIdentifier)) {
    logger.throwArgumentError(`invalid identifier "${value}"`, "value", value);
  }
  return value;
}
const regexParen = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function splitNesting(value) {
  value = value.trim();
  let result = [];
  let accum = "";
  let depth = 0;
  for (let offset = 0; offset < value.length; offset++) {
    let c = value[offset];
    if (c === "," && depth === 0) {
      result.push(accum);
      accum = "";
    } else {
      accum += c;
      if (c === "(") {
        depth++;
      } else if (c === ")") {
        depth--;
        if (depth === -1) {
          logger.throwArgumentError("unbalanced parenthesis", "value", value);
        }
      }
    }
  }
  if (accum) {
    result.push(accum);
  }
  return result;
}

/***/ }),

/***/ 44641:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/interface.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDescription": () => (/* binding */ ErrorDescription),
/* harmony export */   "Indexed": () => (/* binding */ Indexed),
/* harmony export */   "Interface": () => (/* binding */ Interface),
/* harmony export */   "LogDescription": () => (/* binding */ LogDescription),
/* harmony export */   "TransactionDescription": () => (/* binding */ TransactionDescription),
/* harmony export */   "checkResultErrors": () => (/* reexport safe */ _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__.checkResultErrors)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/bignumber */ 62039);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/hash */ 19019);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/keccak256 */ 49948);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ 35111);
/* harmony import */ var _abi_coder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abi-coder */ 79625);
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coders/abstract-coder */ 50822);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fragments */ 46935);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 94503);













const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

class LogDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {}
class TransactionDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {}
class ErrorDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {}
class Indexed extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
  static isIndexed(value) {
    return !!(value && value._isIndexed);
  }
}
const BuiltinErrors = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: true
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"]
  }
};
function wrapAccessError(property, error) {
  const wrap = new Error(`deferred error during ABI decoding triggered accessing ${property}`);
  wrap.error = error;
  return wrap;
}
/*
function checkNames(fragment: Fragment, type: "input" | "output", params: Array<ParamType>): void {
    params.reduce((accum, param) => {
        if (param.name) {
            if (accum[param.name]) {
                logger.throwArgumentError(`duplicate ${ type } parameter ${ JSON.stringify(param.name) } in ${ fragment.format("full") }`, "fragment", fragment);
            }
            accum[param.name] = true;
        }
        return accum;
    }, <{ [ name: string ]: boolean }>{ });
}
*/
class Interface {
  constructor(fragments) {
    let abi = [];
    if (typeof fragments === "string") {
      abi = JSON.parse(fragments);
    } else {
      abi = fragments;
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragments", abi.map(fragment => {
      return _fragments__WEBPACK_IMPORTED_MODULE_4__.Fragment.from(fragment);
    }).filter(fragment => fragment != null));
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_abiCoder", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getAbiCoder")());
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "errors", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "events", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "structs", {});
    // Add all fragments by their signature
    this.fragments.forEach(fragment => {
      let bucket = null;
      switch (fragment.type) {
        case "constructor":
          if (this.deploy) {
            logger.warn("duplicate definition - constructor");
            return;
          }
          //checkNames(fragment, "input", fragment.inputs);
          (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", fragment);
          return;
        case "function":
          //checkNames(fragment, "input", fragment.inputs);
          //checkNames(fragment, "output", (<FunctionFragment>fragment).outputs);
          bucket = this.functions;
          break;
        case "event":
          //checkNames(fragment, "input", fragment.inputs);
          bucket = this.events;
          break;
        case "error":
          bucket = this.errors;
          break;
        default:
          return;
      }
      let signature = fragment.format();
      if (bucket[signature]) {
        logger.warn("duplicate definition - " + signature);
        return;
      }
      bucket[signature] = fragment;
    });
    // If we do not have a constructor add a default
    if (!this.deploy) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", _fragments__WEBPACK_IMPORTED_MODULE_4__.ConstructorFragment.from({
        payable: false,
        type: "constructor"
      }));
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_isInterface", true);
  }
  format(format) {
    if (!format) {
      format = _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.full;
    }
    if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.sighash) {
      logger.throwArgumentError("interface does not support formatting sighash", "format", format);
    }
    const abi = this.fragments.map(fragment => fragment.format(format));
    // We need to re-bundle the JSON fragments a bit
    if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.json) {
      return JSON.stringify(abi.map(j => JSON.parse(j)));
    }
    return abi;
  }
  // Sub-classes can override these to handle other blockchains
  static getAbiCoder() {
    return _abi_coder__WEBPACK_IMPORTED_MODULE_5__.defaultAbiCoder;
  }
  static getAddress(address) {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getAddress)(address);
  }
  static getSighash(fragment) {
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexDataSlice)((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(fragment.format()), 0, 4);
  }
  static getEventTopic(eventFragment) {
    return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(eventFragment.format());
  }
  // Find a function definition by any means necessary (unless it is ambiguous)
  getFunction(nameOrSignatureOrSighash) {
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
      for (const name in this.functions) {
        if (nameOrSignatureOrSighash === this.getSighash(name)) {
          return this.functions[name];
        }
      }
      logger.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
    }
    // It is a bare name, look up the function (will return null if ambiguous)
    if (nameOrSignatureOrSighash.indexOf("(") === -1) {
      const name = nameOrSignatureOrSighash.trim();
      const matching = Object.keys(this.functions).filter(f => f.split("(" /* fix:) */)[0] === name);
      if (matching.length === 0) {
        logger.throwArgumentError("no matching function", "name", name);
      } else if (matching.length > 1) {
        logger.throwArgumentError("multiple matching functions", "name", name);
      }
      return this.functions[matching[0]];
    }
    // Normalize the signature and lookup the function
    const result = this.functions[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
    if (!result) {
      logger.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
    }
    return result;
  }
  // Find an event definition by any means necessary (unless it is ambiguous)
  getEvent(nameOrSignatureOrTopic) {
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrTopic)) {
      const topichash = nameOrSignatureOrTopic.toLowerCase();
      for (const name in this.events) {
        if (topichash === this.getEventTopic(name)) {
          return this.events[name];
        }
      }
      logger.throwArgumentError("no matching event", "topichash", topichash);
    }
    // It is a bare name, look up the function (will return null if ambiguous)
    if (nameOrSignatureOrTopic.indexOf("(") === -1) {
      const name = nameOrSignatureOrTopic.trim();
      const matching = Object.keys(this.events).filter(f => f.split("(" /* fix:) */)[0] === name);
      if (matching.length === 0) {
        logger.throwArgumentError("no matching event", "name", name);
      } else if (matching.length > 1) {
        logger.throwArgumentError("multiple matching events", "name", name);
      }
      return this.events[matching[0]];
    }
    // Normalize the signature and lookup the function
    const result = this.events[_fragments__WEBPACK_IMPORTED_MODULE_4__.EventFragment.fromString(nameOrSignatureOrTopic).format()];
    if (!result) {
      logger.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
    }
    return result;
  }
  // Find a function definition by any means necessary (unless it is ambiguous)
  getError(nameOrSignatureOrSighash) {
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
      const getSighash = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash");
      for (const name in this.errors) {
        const error = this.errors[name];
        if (nameOrSignatureOrSighash === getSighash(error)) {
          return this.errors[name];
        }
      }
      logger.throwArgumentError("no matching error", "sighash", nameOrSignatureOrSighash);
    }
    // It is a bare name, look up the function (will return null if ambiguous)
    if (nameOrSignatureOrSighash.indexOf("(") === -1) {
      const name = nameOrSignatureOrSighash.trim();
      const matching = Object.keys(this.errors).filter(f => f.split("(" /* fix:) */)[0] === name);
      if (matching.length === 0) {
        logger.throwArgumentError("no matching error", "name", name);
      } else if (matching.length > 1) {
        logger.throwArgumentError("multiple matching errors", "name", name);
      }
      return this.errors[matching[0]];
    }
    // Normalize the signature and lookup the function
    const result = this.errors[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
    if (!result) {
      logger.throwArgumentError("no matching error", "signature", nameOrSignatureOrSighash);
    }
    return result;
  }
  // Get the sighash (the bytes4 selector) used by Solidity to identify a function
  getSighash(fragment) {
    if (typeof fragment === "string") {
      try {
        fragment = this.getFunction(fragment);
      } catch (error) {
        try {
          fragment = this.getError(fragment);
        } catch (_) {
          throw error;
        }
      }
    }
    return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash")(fragment);
  }
  // Get the topic (the bytes32 hash) used by Solidity to identify an event
  getEventTopic(eventFragment) {
    if (typeof eventFragment === "string") {
      eventFragment = this.getEvent(eventFragment);
    }
    return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getEventTopic")(eventFragment);
  }
  _decodeParams(params, data) {
    return this._abiCoder.decode(params, data);
  }
  _encodeParams(params, values) {
    return this._abiCoder.encode(params, values);
  }
  encodeDeploy(values) {
    return this._encodeParams(this.deploy.inputs, values || []);
  }
  decodeErrorResult(fragment, data) {
    if (typeof fragment === "string") {
      fragment = this.getError(fragment);
    }
    const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(fragment)) {
      logger.throwArgumentError(`data signature does not match error ${fragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
    }
    return this._decodeParams(fragment.inputs, bytes.slice(4));
  }
  encodeErrorResult(fragment, values) {
    if (typeof fragment === "string") {
      fragment = this.getError(fragment);
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([this.getSighash(fragment), this._encodeParams(fragment.inputs, values || [])]));
  }
  // Decode the data for a function call (e.g. tx.data)
  decodeFunctionData(functionFragment, data) {
    if (typeof functionFragment === "string") {
      functionFragment = this.getFunction(functionFragment);
    }
    const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
      logger.throwArgumentError(`data signature does not match function ${functionFragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
    }
    return this._decodeParams(functionFragment.inputs, bytes.slice(4));
  }
  // Encode the data for a function call (e.g. tx.data)
  encodeFunctionData(functionFragment, values) {
    if (typeof functionFragment === "string") {
      functionFragment = this.getFunction(functionFragment);
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([this.getSighash(functionFragment), this._encodeParams(functionFragment.inputs, values || [])]));
  }
  // Decode the result from a function call (e.g. from eth_call)
  decodeFunctionResult(functionFragment, data) {
    if (typeof functionFragment === "string") {
      functionFragment = this.getFunction(functionFragment);
    }
    let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
    let reason = null;
    let message = "";
    let errorArgs = null;
    let errorName = null;
    let errorSignature = null;
    switch (bytes.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(functionFragment.outputs, bytes);
        } catch (error) {}
        break;
      case 4:
        {
          const selector = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4));
          const builtin = BuiltinErrors[selector];
          if (builtin) {
            errorArgs = this._abiCoder.decode(builtin.inputs, bytes.slice(4));
            errorName = builtin.name;
            errorSignature = builtin.signature;
            if (builtin.reason) {
              reason = errorArgs[0];
            }
            if (errorName === "Error") {
              message = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(errorArgs[0])}`;
            } else if (errorName === "Panic") {
              message = `; VM Exception while processing transaction: reverted with panic code ${errorArgs[0]}`;
            }
          } else {
            try {
              const error = this.getError(selector);
              errorArgs = this._abiCoder.decode(error.inputs, bytes.slice(4));
              errorName = error.name;
              errorSignature = error.format();
            } catch (error) {}
          }
          break;
        }
    }
    return logger.throwError("call revert exception" + message, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION, {
      method: functionFragment.format(),
      data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(data),
      errorArgs,
      errorName,
      errorSignature,
      reason
    });
  }
  // Encode the result for a function call (e.g. for eth_call)
  encodeFunctionResult(functionFragment, values) {
    if (typeof functionFragment === "string") {
      functionFragment = this.getFunction(functionFragment);
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(this._abiCoder.encode(functionFragment.outputs, values || []));
  }
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(eventFragment, values) {
    if (typeof eventFragment === "string") {
      eventFragment = this.getEvent(eventFragment);
    }
    if (values.length > eventFragment.inputs.length) {
      logger.throwError("too many arguments for " + eventFragment.format(), _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNEXPECTED_ARGUMENT, {
        argument: "values",
        value: values
      });
    }
    let topics = [];
    if (!eventFragment.anonymous) {
      topics.push(this.getEventTopic(eventFragment));
    }
    const encodeTopic = (param, value) => {
      if (param.type === "string") {
        return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value);
      } else if (param.type === "bytes") {
        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value));
      }
      if (param.type === "bool" && typeof value === "boolean") {
        value = value ? "0x01" : "0x00";
      }
      if (param.type.match(/^u?int/)) {
        value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(value).toHexString();
      }
      // Check addresses are valid
      if (param.type === "address") {
        this._abiCoder.encode(["address"], [value]);
      }
      return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexZeroPad)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value), 32);
    };
    values.forEach((value, index) => {
      let param = eventFragment.inputs[index];
      if (!param.indexed) {
        if (value != null) {
          logger.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
        }
        return;
      }
      if (value == null) {
        topics.push(null);
      } else if (param.baseType === "array" || param.baseType === "tuple") {
        logger.throwArgumentError("filtering with tuples or arrays not supported", "contract." + param.name, value);
      } else if (Array.isArray(value)) {
        topics.push(value.map(value => encodeTopic(param, value)));
      } else {
        topics.push(encodeTopic(param, value));
      }
    });
    // Trim off trailing nulls
    while (topics.length && topics[topics.length - 1] === null) {
      topics.pop();
    }
    return topics;
  }
  encodeEventLog(eventFragment, values) {
    if (typeof eventFragment === "string") {
      eventFragment = this.getEvent(eventFragment);
    }
    const topics = [];
    const dataTypes = [];
    const dataValues = [];
    if (!eventFragment.anonymous) {
      topics.push(this.getEventTopic(eventFragment));
    }
    if (values.length !== eventFragment.inputs.length) {
      logger.throwArgumentError("event arguments/values mismatch", "values", values);
    }
    eventFragment.inputs.forEach((param, index) => {
      const value = values[index];
      if (param.indexed) {
        if (param.type === "string") {
          topics.push((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value));
        } else if (param.type === "bytes") {
          topics.push((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)(value));
        } else if (param.baseType === "tuple" || param.baseType === "array") {
          // @TODO
          throw new Error("not implemented");
        } else {
          topics.push(this._abiCoder.encode([param.type], [value]));
        }
      } else {
        dataTypes.push(param);
        dataValues.push(value);
      }
    });
    return {
      data: this._abiCoder.encode(dataTypes, dataValues),
      topics: topics
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(eventFragment, data, topics) {
    if (typeof eventFragment === "string") {
      eventFragment = this.getEvent(eventFragment);
    }
    if (topics != null && !eventFragment.anonymous) {
      let topicHash = this.getEventTopic(eventFragment);
      if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
        logger.throwError("fragment/topic mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
          argument: "topics[0]",
          expected: topicHash,
          value: topics[0]
        });
      }
      topics = topics.slice(1);
    }
    let indexed = [];
    let nonIndexed = [];
    let dynamic = [];
    eventFragment.inputs.forEach((param, index) => {
      if (param.indexed) {
        if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
          indexed.push(_fragments__WEBPACK_IMPORTED_MODULE_4__.ParamType.fromObject({
            type: "bytes32",
            name: param.name
          }));
          dynamic.push(true);
        } else {
          indexed.push(param);
          dynamic.push(false);
        }
      } else {
        nonIndexed.push(param);
        dynamic.push(false);
      }
    });
    let resultIndexed = topics != null ? this._abiCoder.decode(indexed, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)(topics)) : null;
    let resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
    let result = [];
    let nonIndexedIndex = 0,
      indexedIndex = 0;
    eventFragment.inputs.forEach((param, index) => {
      if (param.indexed) {
        if (resultIndexed == null) {
          result[index] = new Indexed({
            _isIndexed: true,
            hash: null
          });
        } else if (dynamic[index]) {
          result[index] = new Indexed({
            _isIndexed: true,
            hash: resultIndexed[indexedIndex++]
          });
        } else {
          try {
            result[index] = resultIndexed[indexedIndex++];
          } catch (error) {
            result[index] = error;
          }
        }
      } else {
        try {
          result[index] = resultNonIndexed[nonIndexedIndex++];
        } catch (error) {
          result[index] = error;
        }
      }
      // Add the keyword argument if named and safe
      if (param.name && result[param.name] == null) {
        const value = result[index];
        // Make error named values throw on access
        if (value instanceof Error) {
          Object.defineProperty(result, param.name, {
            enumerable: true,
            get: () => {
              throw wrapAccessError(`property ${JSON.stringify(param.name)}`, value);
            }
          });
        } else {
          result[param.name] = value;
        }
      }
    });
    // Make all error indexed values throw on access
    for (let i = 0; i < result.length; i++) {
      const value = result[i];
      if (value instanceof Error) {
        Object.defineProperty(result, i, {
          enumerable: true,
          get: () => {
            throw wrapAccessError(`index ${i}`, value);
          }
        });
      }
    }
    return Object.freeze(result);
  }
  // Given a transaction, find the matching function fragment (if any) and
  // determine all its properties and call parameters
  parseTransaction(tx) {
    let fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
    if (!fragment) {
      return null;
    }
    return new TransactionDescription({
      args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
      functionFragment: fragment,
      name: fragment.name,
      signature: fragment.format(),
      sighash: this.getSighash(fragment),
      value: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(tx.value || "0")
    });
  }
  // @TODO
  //parseCallResult(data: BytesLike): ??
  // Given an event log, find the matching event fragment (if any) and
  // determine all its properties and values
  parseLog(log) {
    let fragment = this.getEvent(log.topics[0]);
    if (!fragment || fragment.anonymous) {
      return null;
    }
    // @TODO: If anonymous, and the only method, and the input count matches, should we parse?
    //        Probably not, because just because it is the only event in the ABI does
    //        not mean we have the full ABI; maybe just a fragment?
    return new LogDescription({
      eventFragment: fragment,
      name: fragment.name,
      signature: fragment.format(),
      topic: this.getEventTopic(fragment),
      args: this.decodeEventLog(fragment, log.data, log.topics)
    });
  }
  parseError(data) {
    const hexData = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(data);
    let fragment = this.getError(hexData.substring(0, 10).toLowerCase());
    if (!fragment) {
      return null;
    }
    return new ErrorDescription({
      args: this._abiCoder.decode(fragment.inputs, "0x" + hexData.substring(10)),
      errorFragment: fragment,
      name: fragment.name,
      signature: fragment.format(),
      sighash: this.getSighash(fragment)
    });
  }
  /*
  static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
      if (Interface.isInterface(value)) {
          return value;
      }
      if (typeof(value) === "string") {
          return new Interface(JSON.parse(value));
      }
      return new Interface(value);
  }
  */
  static isInterface(value) {
    return !!(value && value._isInterface);
  }
}

/***/ }),

/***/ 22497:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/_version.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
const version = "contracts/5.7.0";

/***/ }),

/***/ 98838:
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseContract": () => (/* binding */ BaseContract),
/* harmony export */   "Contract": () => (/* binding */ Contract),
/* harmony export */   "ContractFactory": () => (/* binding */ ContractFactory)
/* harmony export */ });
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/abi */ 50822);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/abi */ 44641);
/* harmony import */ var _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/abstract-provider */ 94019);
/* harmony import */ var _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/abstract-signer */ 73481);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ 62039);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/bytes */ 89887);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ 35111);
/* harmony import */ var _ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/transactions */ 7038);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 63686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 22497);


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};










const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
;
///////////////////////////////
const allowedTransactionKeys = {
  chainId: true,
  data: true,
  from: true,
  gasLimit: true,
  gasPrice: true,
  nonce: true,
  to: true,
  value: true,
  type: true,
  accessList: true,
  maxFeePerGas: true,
  maxPriorityFeePerGas: true,
  customData: true,
  ccipReadEnabled: true
};
function resolveName(resolver, nameOrPromise) {
  return __awaiter(this, void 0, void 0, function* () {
    const name = yield nameOrPromise;
    if (typeof name !== "string") {
      logger.throwArgumentError("invalid address or ENS name", "name", name);
    }
    // If it is already an address, just use it (after adding checksum)
    try {
      return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(name);
    } catch (error) {}
    if (!resolver) {
      logger.throwError("a provider or signer is needed to resolve ENS names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "resolveName"
      });
    }
    const address = yield resolver.resolveName(name);
    if (address == null) {
      logger.throwArgumentError("resolver or addr is not configured for ENS name", "name", name);
    }
    return address;
  });
}
// Recursively replaces ENS names with promises to resolve the name and resolves all properties
function resolveAddresses(resolver, value, paramType) {
  return __awaiter(this, void 0, void 0, function* () {
    if (Array.isArray(paramType)) {
      return yield Promise.all(paramType.map((paramType, index) => {
        return resolveAddresses(resolver, Array.isArray(value) ? value[index] : value[paramType.name], paramType);
      }));
    }
    if (paramType.type === "address") {
      return yield resolveName(resolver, value);
    }
    if (paramType.type === "tuple") {
      return yield resolveAddresses(resolver, value, paramType.components);
    }
    if (paramType.baseType === "array") {
      if (!Array.isArray(value)) {
        return Promise.reject(logger.makeError("invalid value for array", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
          argument: "value",
          value
        }));
      }
      return yield Promise.all(value.map(v => resolveAddresses(resolver, v, paramType.arrayChildren)));
    }
    return value;
  });
}
function populateTransaction(contract, fragment, args) {
  return __awaiter(this, void 0, void 0, function* () {
    // If an extra argument is given, it is overrides
    let overrides = {};
    if (args.length === fragment.inputs.length + 1 && typeof args[args.length - 1] === "object") {
      overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
    }
    // Make sure the parameter count matches
    logger.checkArgumentCount(args.length, fragment.inputs.length, "passed to contract");
    // Populate "from" override (allow promises)
    if (contract.signer) {
      if (overrides.from) {
        // Contracts with a Signer are from the Signer's frame-of-reference;
        // but we allow overriding "from" if it matches the signer
        overrides.from = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
          override: resolveName(contract.signer, overrides.from),
          signer: contract.signer.getAddress()
        }).then(check => __awaiter(this, void 0, void 0, function* () {
          if ((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(check.signer) !== check.override) {
            logger.throwError("Contract with a Signer cannot override from", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "overrides.from"
            });
          }
          return check.override;
        }));
      } else {
        overrides.from = contract.signer.getAddress();
      }
    } else if (overrides.from) {
      overrides.from = resolveName(contract.provider, overrides.from);
      //} else {
      // Contracts without a signer can override "from", and if
      // unspecified the zero address is used
      //overrides.from = AddressZero;
    }
    // Wait for all dependencies to be resolved (prefer the signer over the provider)
    const resolved = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
      args: resolveAddresses(contract.signer || contract.provider, args, fragment.inputs),
      address: contract.resolvedAddress,
      overrides: (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)(overrides) || {}
    });
    // The ABI coded transaction
    const data = contract.interface.encodeFunctionData(fragment, resolved.args);
    const tx = {
      data: data,
      to: resolved.address
    };
    // Resolved Overrides
    const ro = resolved.overrides;
    // Populate simple overrides
    if (ro.nonce != null) {
      tx.nonce = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.nonce).toNumber();
    }
    if (ro.gasLimit != null) {
      tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasLimit);
    }
    if (ro.gasPrice != null) {
      tx.gasPrice = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasPrice);
    }
    if (ro.maxFeePerGas != null) {
      tx.maxFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxFeePerGas);
    }
    if (ro.maxPriorityFeePerGas != null) {
      tx.maxPriorityFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxPriorityFeePerGas);
    }
    if (ro.from != null) {
      tx.from = ro.from;
    }
    if (ro.type != null) {
      tx.type = ro.type;
    }
    if (ro.accessList != null) {
      tx.accessList = (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__.accessListify)(ro.accessList);
    }
    // If there was no "gasLimit" override, but the ABI specifies a default, use it
    if (tx.gasLimit == null && fragment.gas != null) {
      // Compute the intrinsic gas cost for this transaction
      // @TODO: This is based on the yellow paper as of Petersburg; this is something
      // we may wish to parameterize in v6 as part of the Network object. Since this
      // is always a non-nil to address, we can ignore G_create, but may wish to add
      // similar logic to the ContractFactory.
      let intrinsic = 21000;
      const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
      for (let i = 0; i < bytes.length; i++) {
        intrinsic += 4;
        if (bytes[i]) {
          intrinsic += 64;
        }
      }
      tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(fragment.gas).add(intrinsic);
    }
    // Populate "value" override
    if (ro.value) {
      const roValue = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.value);
      if (!roValue.isZero() && !fragment.payable) {
        logger.throwError("non-payable method cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "overrides.value",
          value: overrides.value
        });
      }
      tx.value = roValue;
    }
    if (ro.customData) {
      tx.customData = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(ro.customData);
    }
    if (ro.ccipReadEnabled) {
      tx.ccipReadEnabled = !!ro.ccipReadEnabled;
    }
    // Remove the overrides
    delete overrides.nonce;
    delete overrides.gasLimit;
    delete overrides.gasPrice;
    delete overrides.from;
    delete overrides.value;
    delete overrides.type;
    delete overrides.accessList;
    delete overrides.maxFeePerGas;
    delete overrides.maxPriorityFeePerGas;
    delete overrides.customData;
    delete overrides.ccipReadEnabled;
    // Make sure there are no stray overrides, which may indicate a
    // typo or using an unsupported key.
    const leftovers = Object.keys(overrides).filter(key => overrides[key] != null);
    if (leftovers.length) {
      logger.throwError(`cannot override ${leftovers.map(l => JSON.stringify(l)).join(",")}`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides",
        overrides: leftovers
      });
    }
    return tx;
  });
}
function buildPopulate(contract, fragment) {
  return function (...args) {
    return populateTransaction(contract, fragment, args);
  };
}
function buildEstimate(contract, fragment) {
  const signerOrProvider = contract.signer || contract.provider;
  return function (...args) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!signerOrProvider) {
        logger.throwError("estimate require a provider or signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "estimateGas"
        });
      }
      const tx = yield populateTransaction(contract, fragment, args);
      return yield signerOrProvider.estimateGas(tx);
    });
  };
}
function addContractWait(contract, tx) {
  const wait = tx.wait.bind(tx);
  tx.wait = confirmations => {
    return wait(confirmations).then(receipt => {
      receipt.events = receipt.logs.map(log => {
        let event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
        let parsed = null;
        try {
          parsed = contract.interface.parseLog(log);
        } catch (e) {}
        // Successfully parsed the event log; include it
        if (parsed) {
          event.args = parsed.args;
          event.decode = (data, topics) => {
            return contract.interface.decodeEventLog(parsed.eventFragment, data, topics);
          };
          event.event = parsed.name;
          event.eventSignature = parsed.signature;
        }
        // Useful operations
        event.removeListener = () => {
          return contract.provider;
        };
        event.getBlock = () => {
          return contract.provider.getBlock(receipt.blockHash);
        };
        event.getTransaction = () => {
          return contract.provider.getTransaction(receipt.transactionHash);
        };
        event.getTransactionReceipt = () => {
          return Promise.resolve(receipt);
        };
        return event;
      });
      return receipt;
    });
  };
}
function buildCall(contract, fragment, collapseSimple) {
  const signerOrProvider = contract.signer || contract.provider;
  return function (...args) {
    return __awaiter(this, void 0, void 0, function* () {
      // Extract the "blockTag" override if present
      let blockTag = undefined;
      if (args.length === fragment.inputs.length + 1 && typeof args[args.length - 1] === "object") {
        const overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
        if (overrides.blockTag != null) {
          blockTag = yield overrides.blockTag;
        }
        delete overrides.blockTag;
        args.push(overrides);
      }
      // If the contract was just deployed, wait until it is mined
      if (contract.deployTransaction != null) {
        yield contract._deployed(blockTag);
      }
      // Call a node and get the result
      const tx = yield populateTransaction(contract, fragment, args);
      const result = yield signerOrProvider.call(tx, blockTag);
      try {
        let value = contract.interface.decodeFunctionResult(fragment, result);
        if (collapseSimple && fragment.outputs.length === 1) {
          value = value[0];
        }
        return value;
      } catch (error) {
        if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION) {
          error.address = contract.address;
          error.args = args;
          error.transaction = tx;
        }
        throw error;
      }
    });
  };
}
function buildSend(contract, fragment) {
  return function (...args) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!contract.signer) {
        logger.throwError("sending a transaction requires a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "sendTransaction"
        });
      }
      // If the contract was just deployed, wait until it is mined
      if (contract.deployTransaction != null) {
        yield contract._deployed();
      }
      const txRequest = yield populateTransaction(contract, fragment, args);
      const tx = yield contract.signer.sendTransaction(txRequest);
      // Tweak the tx.wait so the receipt has extra properties
      addContractWait(contract, tx);
      return tx;
    });
  };
}
function buildDefault(contract, fragment, collapseSimple) {
  if (fragment.constant) {
    return buildCall(contract, fragment, collapseSimple);
  }
  return buildSend(contract, fragment);
}
function getEventTag(filter) {
  if (filter.address && (filter.topics == null || filter.topics.length === 0)) {
    return "*";
  }
  return (filter.address || "*") + "@" + (filter.topics ? filter.topics.map(topic => {
    if (Array.isArray(topic)) {
      return topic.join("|");
    }
    return topic;
  }).join(":") : "");
}
class RunningEvent {
  constructor(tag, filter) {
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "tag", tag);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filter", filter);
    this._listeners = [];
  }
  addListener(listener, once) {
    this._listeners.push({
      listener: listener,
      once: once
    });
  }
  removeListener(listener) {
    let done = false;
    this._listeners = this._listeners.filter(item => {
      if (done || item.listener !== listener) {
        return true;
      }
      done = true;
      return false;
    });
  }
  removeAllListeners() {
    this._listeners = [];
  }
  listeners() {
    return this._listeners.map(i => i.listener);
  }
  listenerCount() {
    return this._listeners.length;
  }
  run(args) {
    const listenerCount = this.listenerCount();
    this._listeners = this._listeners.filter(item => {
      const argsCopy = args.slice();
      // Call the callback in the next event loop
      setTimeout(() => {
        item.listener.apply(this, argsCopy);
      }, 0);
      // Reschedule it if it not "once"
      return !item.once;
    });
    return listenerCount;
  }
  prepareEvent(event) {}
  // Returns the array that will be applied to an emit
  getEmit(event) {
    return [event];
  }
}
class ErrorRunningEvent extends RunningEvent {
  constructor() {
    super("error", null);
  }
}
// @TODO Fragment should inherit Wildcard? and just override getEmit?
//       or have a common abstract super class, with enough constructor
//       options to configure both.
// A Fragment Event will populate all the properties that Wildcard
// will, and additionally dereference the arguments when emitting
class FragmentRunningEvent extends RunningEvent {
  constructor(address, contractInterface, fragment, topics) {
    const filter = {
      address: address
    };
    let topic = contractInterface.getEventTopic(fragment);
    if (topics) {
      if (topic !== topics[0]) {
        logger.throwArgumentError("topic mismatch", "topics", topics);
      }
      filter.topics = topics.slice();
    } else {
      filter.topics = [topic];
    }
    super(getEventTag(filter), filter);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragment", fragment);
  }
  prepareEvent(event) {
    super.prepareEvent(event);
    event.event = this.fragment.name;
    event.eventSignature = this.fragment.format();
    event.decode = (data, topics) => {
      return this.interface.decodeEventLog(this.fragment, data, topics);
    };
    try {
      event.args = this.interface.decodeEventLog(this.fragment, event.data, event.topics);
    } catch (error) {
      event.args = null;
      event.decodeError = error;
    }
  }
  getEmit(event) {
    const errors = (0,_ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__.checkResultErrors)(event.args);
    if (errors.length) {
      throw errors[0].error;
    }
    const args = (event.args || []).slice();
    args.push(event);
    return args;
  }
}
// A Wildcard Event will attempt to populate:
//  - event            The name of the event name
//  - eventSignature   The full signature of the event
//  - decode           A function to decode data and topics
//  - args             The decoded data and topics
class WildcardRunningEvent extends RunningEvent {
  constructor(address, contractInterface) {
    super("*", {
      address: address
    });
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
  }
  prepareEvent(event) {
    super.prepareEvent(event);
    try {
      const parsed = this.interface.parseLog(event);
      event.event = parsed.name;
      event.eventSignature = parsed.signature;
      event.decode = (data, topics) => {
        return this.interface.decodeEventLog(parsed.eventFragment, data, topics);
      };
      event.args = parsed.args;
    } catch (error) {
      // No matching event
    }
  }
}
class BaseContract {
  constructor(addressOrName, contractInterface, signerOrProvider) {
    // @TODO: Maybe still check the addressOrName looks like a valid address or name?
    //address = getAddress(address);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
    if (signerOrProvider == null) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", null);
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
    } else if (_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signerOrProvider)) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider.provider || null);
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signerOrProvider);
    } else if (_ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__.Provider.isProvider(signerOrProvider)) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider);
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
    } else {
      logger.throwArgumentError("invalid signer or provider", "signerOrProvider", signerOrProvider);
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "callStatic", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "estimateGas", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "populateTransaction", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filters", {});
    {
      const uniqueFilters = {};
      Object.keys(this.interface.events).forEach(eventSignature => {
        const event = this.interface.events[eventSignature];
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, eventSignature, (...args) => {
          return {
            address: this.address,
            topics: this.interface.encodeFilterTopics(event, args)
          };
        });
        if (!uniqueFilters[event.name]) {
          uniqueFilters[event.name] = [];
        }
        uniqueFilters[event.name].push(eventSignature);
      });
      Object.keys(uniqueFilters).forEach(name => {
        const filters = uniqueFilters[name];
        if (filters.length === 1) {
          (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, name, this.filters[filters[0]]);
        } else {
          logger.warn(`Duplicate definition of ${name} (${filters.join(", ")})`);
        }
      });
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_runningEvents", {});
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_wrappedEmits", {});
    if (addressOrName == null) {
      logger.throwArgumentError("invalid contract address or ENS name", "addressOrName", addressOrName);
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", addressOrName);
    if (this.provider) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", resolveName(this.provider, addressOrName));
    } else {
      try {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(addressOrName)));
      } catch (error) {
        // Without a provider, we cannot use ENS names
        logger.throwError("provider is required to use ENS name as contract address", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "new Contract"
        });
      }
    }
    // Swallow bad ENS names to prevent Unhandled Exceptions
    this.resolvedAddress.catch(e => {});
    const uniqueNames = {};
    const uniqueSignatures = {};
    Object.keys(this.interface.functions).forEach(signature => {
      const fragment = this.interface.functions[signature];
      // Check that the signature is unique; if not the ABI generation has
      // not been cleaned or may be incorrectly generated
      if (uniqueSignatures[signature]) {
        logger.warn(`Duplicate ABI entry for ${JSON.stringify(signature)}`);
        return;
      }
      uniqueSignatures[signature] = true;
      // Track unique names; we only expose bare named functions if they
      // are ambiguous
      {
        const name = fragment.name;
        if (!uniqueNames[`%${name}`]) {
          uniqueNames[`%${name}`] = [];
        }
        uniqueNames[`%${name}`].push(signature);
      }
      if (this[signature] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, signature, buildDefault(this, fragment, true));
      }
      // We do not collapse simple calls on this bucket, which allows
      // frameworks to safely use this without introspection as well as
      // allows decoding error recovery.
      if (this.functions[signature] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, signature, buildDefault(this, fragment, false));
      }
      if (this.callStatic[signature] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, signature, buildCall(this, fragment, true));
      }
      if (this.populateTransaction[signature] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, signature, buildPopulate(this, fragment));
      }
      if (this.estimateGas[signature] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, signature, buildEstimate(this, fragment));
      }
    });
    Object.keys(uniqueNames).forEach(name => {
      // Ambiguous names to not get attached as bare names
      const signatures = uniqueNames[name];
      if (signatures.length > 1) {
        return;
      }
      // Strip off the leading "%" used for prototype protection
      name = name.substring(1);
      const signature = signatures[0];
      // If overwriting a member property that is null, swallow the error
      try {
        if (this[name] == null) {
          (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, name, this[signature]);
        }
      } catch (e) {}
      if (this.functions[name] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, name, this.functions[signature]);
      }
      if (this.callStatic[name] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, name, this.callStatic[signature]);
      }
      if (this.populateTransaction[name] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, name, this.populateTransaction[signature]);
      }
      if (this.estimateGas[name] == null) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, name, this.estimateGas[signature]);
      }
    });
  }
  static getContractAddress(transaction) {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(transaction);
  }
  static getInterface(contractInterface) {
    if (_ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface.isInterface(contractInterface)) {
      return contractInterface;
    }
    return new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface(contractInterface);
  }
  // @TODO: Allow timeout?
  deployed() {
    return this._deployed();
  }
  _deployed(blockTag) {
    if (!this._deployedPromise) {
      // If we were just deployed, we know the transaction we should occur in
      if (this.deployTransaction) {
        this._deployedPromise = this.deployTransaction.wait().then(() => {
          return this;
        });
      } else {
        // @TODO: Once we allow a timeout to be passed in, we will wait
        // up to that many blocks for getCode
        // Otherwise, poll for our code to be deployed
        this._deployedPromise = this.provider.getCode(this.address, blockTag).then(code => {
          if (code === "0x") {
            logger.throwError("contract not deployed", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
              contractAddress: this.address,
              operation: "getDeployed"
            });
          }
          return this;
        });
      }
    }
    return this._deployedPromise;
  }
  // @TODO:
  // estimateFallback(overrides?: TransactionRequest): Promise<BigNumber>
  // @TODO:
  // estimateDeploy(bytecode: string, ...args): Promise<BigNumber>
  fallback(overrides) {
    if (!this.signer) {
      logger.throwError("sending a transactions require a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "sendTransaction(fallback)"
      });
    }
    const tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(overrides || {});
    ["from", "to"].forEach(function (key) {
      if (tx[key] == null) {
        return;
      }
      logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: key
      });
    });
    tx.to = this.resolvedAddress;
    return this.deployed().then(() => {
      return this.signer.sendTransaction(tx);
    });
  }
  // Reconnect to a different signer or provider
  connect(signerOrProvider) {
    if (typeof signerOrProvider === "string") {
      signerOrProvider = new _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.VoidSigner(signerOrProvider, this.provider);
    }
    const contract = new this.constructor(this.address, this.interface, signerOrProvider);
    if (this.deployTransaction) {
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", this.deployTransaction);
    }
    return contract;
  }
  // Re-attach to a different on-chain instance of this contract
  attach(addressOrName) {
    return new this.constructor(addressOrName, this.interface, this.signer || this.provider);
  }
  static isIndexed(value) {
    return _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Indexed.isIndexed(value);
  }
  _normalizeRunningEvent(runningEvent) {
    // Already have an instance of this event running; we can re-use it
    if (this._runningEvents[runningEvent.tag]) {
      return this._runningEvents[runningEvent.tag];
    }
    return runningEvent;
  }
  _getRunningEvent(eventName) {
    if (typeof eventName === "string") {
      // Listen for "error" events (if your contract has an error event, include
      // the full signature to bypass this special event keyword)
      if (eventName === "error") {
        return this._normalizeRunningEvent(new ErrorRunningEvent());
      }
      // Listen for any event that is registered
      if (eventName === "event") {
        return this._normalizeRunningEvent(new RunningEvent("event", null));
      }
      // Listen for any event
      if (eventName === "*") {
        return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
      }
      // Get the event Fragment (throws if ambiguous/unknown event)
      const fragment = this.interface.getEvent(eventName);
      return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment));
    }
    // We have topics to filter by...
    if (eventName.topics && eventName.topics.length > 0) {
      // Is it a known topichash? (throws if no matching topichash)
      try {
        const topic = eventName.topics[0];
        if (typeof topic !== "string") {
          throw new Error("invalid topic"); // @TODO: May happen for anonymous events
        }

        const fragment = this.interface.getEvent(topic);
        return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment, eventName.topics));
      } catch (error) {}
      // Filter by the unknown topichash
      const filter = {
        address: this.address,
        topics: eventName.topics
      };
      return this._normalizeRunningEvent(new RunningEvent(getEventTag(filter), filter));
    }
    return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
  }
  _checkRunningEvents(runningEvent) {
    if (runningEvent.listenerCount() === 0) {
      delete this._runningEvents[runningEvent.tag];
      // If we have a poller for this, remove it
      const emit = this._wrappedEmits[runningEvent.tag];
      if (emit && runningEvent.filter) {
        this.provider.off(runningEvent.filter, emit);
        delete this._wrappedEmits[runningEvent.tag];
      }
    }
  }
  // Subclasses can override this to gracefully recover
  // from parse errors if they wish
  _wrapEvent(runningEvent, log, listener) {
    const event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
    event.removeListener = () => {
      if (!listener) {
        return;
      }
      runningEvent.removeListener(listener);
      this._checkRunningEvents(runningEvent);
    };
    event.getBlock = () => {
      return this.provider.getBlock(log.blockHash);
    };
    event.getTransaction = () => {
      return this.provider.getTransaction(log.transactionHash);
    };
    event.getTransactionReceipt = () => {
      return this.provider.getTransactionReceipt(log.transactionHash);
    };
    // This may throw if the topics and data mismatch the signature
    runningEvent.prepareEvent(event);
    return event;
  }
  _addEventListener(runningEvent, listener, once) {
    if (!this.provider) {
      logger.throwError("events require a provider or a signer with a provider", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "once"
      });
    }
    runningEvent.addListener(listener, once);
    // Track this running event and its listeners (may already be there; but no hard in updating)
    this._runningEvents[runningEvent.tag] = runningEvent;
    // If we are not polling the provider, start polling
    if (!this._wrappedEmits[runningEvent.tag]) {
      const wrappedEmit = log => {
        let event = this._wrapEvent(runningEvent, log, listener);
        // Try to emit the result for the parameterized event...
        if (event.decodeError == null) {
          try {
            const args = runningEvent.getEmit(event);
            this.emit(runningEvent.filter, ...args);
          } catch (error) {
            event.decodeError = error.error;
          }
        }
        // Always emit "event" for fragment-base events
        if (runningEvent.filter != null) {
          this.emit("event", event);
        }
        // Emit "error" if there was an error
        if (event.decodeError != null) {
          this.emit("error", event.decodeError, event);
        }
      };
      this._wrappedEmits[runningEvent.tag] = wrappedEmit;
      // Special events, like "error" do not have a filter
      if (runningEvent.filter != null) {
        this.provider.on(runningEvent.filter, wrappedEmit);
      }
    }
  }
  queryFilter(event, fromBlockOrBlockhash, toBlock) {
    const runningEvent = this._getRunningEvent(event);
    const filter = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(runningEvent.filter);
    if (typeof fromBlockOrBlockhash === "string" && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(fromBlockOrBlockhash, 32)) {
      if (toBlock != null) {
        logger.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", toBlock);
      }
      filter.blockHash = fromBlockOrBlockhash;
    } else {
      filter.fromBlock = fromBlockOrBlockhash != null ? fromBlockOrBlockhash : 0;
      filter.toBlock = toBlock != null ? toBlock : "latest";
    }
    return this.provider.getLogs(filter).then(logs => {
      return logs.map(log => this._wrapEvent(runningEvent, log, null));
    });
  }
  on(event, listener) {
    this._addEventListener(this._getRunningEvent(event), listener, false);
    return this;
  }
  once(event, listener) {
    this._addEventListener(this._getRunningEvent(event), listener, true);
    return this;
  }
  emit(eventName, ...args) {
    if (!this.provider) {
      return false;
    }
    const runningEvent = this._getRunningEvent(eventName);
    const result = runningEvent.run(args) > 0;
    // May have drained all the "once" events; check for living events
    this._checkRunningEvents(runningEvent);
    return result;
  }
  listenerCount(eventName) {
    if (!this.provider) {
      return 0;
    }
    if (eventName == null) {
      return Object.keys(this._runningEvents).reduce((accum, key) => {
        return accum + this._runningEvents[key].listenerCount();
      }, 0);
    }
    return this._getRunningEvent(eventName).listenerCount();
  }
  listeners(eventName) {
    if (!this.provider) {
      return [];
    }
    if (eventName == null) {
      const result = [];
      for (let tag in this._runningEvents) {
        this._runningEvents[tag].listeners().forEach(listener => {
          result.push(listener);
        });
      }
      return result;
    }
    return this._getRunningEvent(eventName).listeners();
  }
  removeAllListeners(eventName) {
    if (!this.provider) {
      return this;
    }
    if (eventName == null) {
      for (const tag in this._runningEvents) {
        const runningEvent = this._runningEvents[tag];
        runningEvent.removeAllListeners();
        this._checkRunningEvents(runningEvent);
      }
      return this;
    }
    // Delete any listeners
    const runningEvent = this._getRunningEvent(eventName);
    runningEvent.removeAllListeners();
    this._checkRunningEvents(runningEvent);
    return this;
  }
  off(eventName, listener) {
    if (!this.provider) {
      return this;
    }
    const runningEvent = this._getRunningEvent(eventName);
    runningEvent.removeListener(listener);
    this._checkRunningEvents(runningEvent);
    return this;
  }
  removeListener(eventName, listener) {
    return this.off(eventName, listener);
  }
}
class Contract extends BaseContract {}
class ContractFactory {
  constructor(contractInterface, bytecode, signer) {
    let bytecodeHex = null;
    if (typeof bytecode === "string") {
      bytecodeHex = bytecode;
    } else if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isBytes)(bytecode)) {
      bytecodeHex = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytecode);
    } else if (bytecode && typeof bytecode.object === "string") {
      // Allow the bytecode object from the Solidity compiler
      bytecodeHex = bytecode.object;
    } else {
      // Crash in the next verification step
      bytecodeHex = "!";
    }
    // Make sure it is 0x prefixed
    if (bytecodeHex.substring(0, 2) !== "0x") {
      bytecodeHex = "0x" + bytecodeHex;
    }
    // Make sure the final result is valid bytecode
    if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(bytecodeHex) || bytecodeHex.length % 2) {
      logger.throwArgumentError("invalid bytecode", "bytecode", bytecode);
    }
    // If we have a signer, make sure it is valid
    if (signer && !_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signer)) {
      logger.throwArgumentError("invalid signer", "signer", signer);
    }
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "bytecode", bytecodeHex);
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signer || null);
  }
  // @TODO: Future; rename to populateTransaction?
  getDeployTransaction(...args) {
    let tx = {};
    // If we have 1 additional argument, we allow transaction overrides
    if (args.length === this.interface.deploy.inputs.length + 1 && typeof args[args.length - 1] === "object") {
      tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
      for (const key in tx) {
        if (!allowedTransactionKeys[key]) {
          throw new Error("unknown transaction override " + key);
        }
      }
    }
    // Do not allow these to be overridden in a deployment transaction
    ["data", "from", "to"].forEach(key => {
      if (tx[key] == null) {
        return;
      }
      logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: key
      });
    });
    if (tx.value) {
      const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(tx.value);
      if (!value.isZero() && !this.interface.deploy.payable) {
        logger.throwError("non-payable constructor cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "overrides.value",
          value: tx.value
        });
      }
    }
    // Make sure the call matches the constructor signature
    logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
    // Set the data to the bytecode + the encoded constructor arguments
    tx.data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)([this.bytecode, this.interface.encodeDeploy(args)]));
    return tx;
  }
  deploy(...args) {
    return __awaiter(this, void 0, void 0, function* () {
      let overrides = {};
      // If 1 extra parameter was passed in, it contains overrides
      if (args.length === this.interface.deploy.inputs.length + 1) {
        overrides = args.pop();
      }
      // Make sure the call matches the constructor signature
      logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
      // Resolve ENS names and promises in the arguments
      const params = yield resolveAddresses(this.signer, args, this.interface.deploy.inputs);
      params.push(overrides);
      // Get the deployment transaction (with optional overrides)
      const unsignedTx = this.getDeployTransaction(...params);
      // Send the deployment transaction
      const tx = yield this.signer.sendTransaction(unsignedTx);
      const address = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContractAddress")(tx);
      const contract = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContract")(address, this.interface, this.signer);
      // Add the modified wait that wraps events
      addContractWait(contract, tx);
      (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", tx);
      return contract;
    });
  }
  attach(address) {
    return this.constructor.getContract(address, this.interface, this.signer);
  }
  connect(signer) {
    return new this.constructor(this.interface, this.bytecode, signer);
  }
  static fromSolidity(compilerOutput, signer) {
    if (compilerOutput == null) {
      logger.throwError("missing compiler output", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.MISSING_ARGUMENT, {
        argument: "compilerOutput"
      });
    }
    if (typeof compilerOutput === "string") {
      compilerOutput = JSON.parse(compilerOutput);
    }
    const abi = compilerOutput.abi;
    let bytecode = null;
    if (compilerOutput.bytecode) {
      bytecode = compilerOutput.bytecode;
    } else if (compilerOutput.evm && compilerOutput.evm.bytecode) {
      bytecode = compilerOutput.evm.bytecode;
    }
    return new this(abi, bytecode, signer);
  }
  static getInterface(contractInterface) {
    return Contract.getInterface(contractInterface);
  }
  static getContractAddress(tx) {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(tx);
  }
  static getContract(address, contractInterface, signer) {
    return new Contract(address, contractInterface, signer);
  }
}

/***/ }),

/***/ 4263:
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 79903);
var callBind = __webpack_require__(/*! ./ */ 3855);
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic(name, !!allowMissing);
  if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};

/***/ }),

/***/ 3855:
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 20224);
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 79903);
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) {
  try {
    $defineProperty({}, 'a', {
      value: 1
    });
  } catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
  }
}
module.exports = function callBind(originalFunction) {
  var func = $reflectApply(bind, $call, arguments);
  if ($gOPD && $defineProperty) {
    var desc = $gOPD(func, 'length');
    if (desc.configurable) {
      // original length, plus the receiver, minus any additional arguments (after the receiver)
      $defineProperty(func, 'length', {
        value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
      });
    }
  }
  return func;
};
var applyBind = function applyBind() {
  return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) {
  $defineProperty(module.exports, 'apply', {
    value: applyBind
  });
} else {
  module.exports.apply = applyBind;
}

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

/***/ 59398:
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
  var target = this;
  if (typeof target !== 'function' || toStr.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function () {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }
  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
  if (target.prototype) {
    var Empty = function Empty() {};
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};

/***/ }),

/***/ 20224:
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 59398);
module.exports = Function.prototype.bind || implementation;

/***/ }),

/***/ 79903:
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
  try {
    $gOPD({}, '');
  } catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
  }
}

var throwTypeError = function () {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function () {
  try {
    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
    arguments.callee; // IE 8 does not throw here
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
      return $gOPD(arguments, 'callee').get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols = __webpack_require__(/*! has-symbols */ 90524)();
var getProto = Object.getPrototypeOf || function (x) {
  return x.__proto__;
}; // eslint-disable-line no-proto

var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
  '%Array%': Array,
  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
  '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
  '%AsyncFromSyncIteratorPrototype%': undefined,
  '%AsyncFunction%': needsEval,
  '%AsyncGenerator%': needsEval,
  '%AsyncGeneratorFunction%': needsEval,
  '%AsyncIteratorPrototype%': needsEval,
  '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
  '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
  '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
  '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
  '%Boolean%': Boolean,
  '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
  '%Date%': Date,
  '%decodeURI%': decodeURI,
  '%decodeURIComponent%': decodeURIComponent,
  '%encodeURI%': encodeURI,
  '%encodeURIComponent%': encodeURIComponent,
  '%Error%': Error,
  '%eval%': eval,
  // eslint-disable-line no-eval
  '%EvalError%': EvalError,
  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
  '%Function%': $Function,
  '%GeneratorFunction%': needsEval,
  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
  '%isFinite%': isFinite,
  '%isNaN%': isNaN,
  '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
  '%JSON%': typeof JSON === 'object' ? JSON : undefined,
  '%Map%': typeof Map === 'undefined' ? undefined : Map,
  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
  '%Math%': Math,
  '%Number%': Number,
  '%Object%': Object,
  '%parseFloat%': parseFloat,
  '%parseInt%': parseInt,
  '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
  '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
  '%RangeError%': RangeError,
  '%ReferenceError%': ReferenceError,
  '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
  '%RegExp%': RegExp,
  '%Set%': typeof Set === 'undefined' ? undefined : Set,
  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
  '%String%': String,
  '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
  '%Symbol%': hasSymbols ? Symbol : undefined,
  '%SyntaxError%': $SyntaxError,
  '%ThrowTypeError%': ThrowTypeError,
  '%TypedArray%': TypedArray,
  '%TypeError%': $TypeError,
  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
  '%URIError%': URIError,
  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
try {
  null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
  // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
  var errorProto = getProto(getProto(e));
  INTRINSICS['%Error.prototype%'] = errorProto;
}
var doEval = function doEval(name) {
  var value;
  if (name === '%AsyncFunction%') {
    value = getEvalledConstructor('async function () {}');
  } else if (name === '%GeneratorFunction%') {
    value = getEvalledConstructor('function* () {}');
  } else if (name === '%AsyncGeneratorFunction%') {
    value = getEvalledConstructor('async function* () {}');
  } else if (name === '%AsyncGenerator%') {
    var fn = doEval('%AsyncGeneratorFunction%');
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === '%AsyncIteratorPrototype%') {
    var gen = doEval('%AsyncGenerator%');
    if (gen) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  '%ArrayPrototype%': ['Array', 'prototype'],
  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  '%BooleanPrototype%': ['Boolean', 'prototype'],
  '%DataViewPrototype%': ['DataView', 'prototype'],
  '%DatePrototype%': ['Date', 'prototype'],
  '%ErrorPrototype%': ['Error', 'prototype'],
  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  '%FunctionPrototype%': ['Function', 'prototype'],
  '%Generator%': ['GeneratorFunction', 'prototype'],
  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  '%JSONParse%': ['JSON', 'parse'],
  '%JSONStringify%': ['JSON', 'stringify'],
  '%MapPrototype%': ['Map', 'prototype'],
  '%NumberPrototype%': ['Number', 'prototype'],
  '%ObjectPrototype%': ['Object', 'prototype'],
  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  '%PromisePrototype%': ['Promise', 'prototype'],
  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  '%Promise_all%': ['Promise', 'all'],
  '%Promise_reject%': ['Promise', 'reject'],
  '%Promise_resolve%': ['Promise', 'resolve'],
  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  '%RegExpPrototype%': ['RegExp', 'prototype'],
  '%SetPrototype%': ['Set', 'prototype'],
  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  '%StringPrototype%': ['String', 'prototype'],
  '%SymbolPrototype%': ['Symbol', 'prototype'],
  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  '%URIErrorPrototype%': ['URIError', 'prototype'],
  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
  '%WeakSetPrototype%': ['WeakSet', 'prototype']
};
var bind = __webpack_require__(/*! function-bind */ 20224);
var hasOwn = __webpack_require__(/*! has */ 84031);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === '%' && last !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  } else if (last === '%' && first !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  }
  var result = [];
  $replace(string, rePropName, function (match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  });
  return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = '%' + alias[0] + '%';
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === 'undefined' && !allowMissing) {
      throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }
    return {
      alias: alias,
      name: intrinsicName,
      value: value
    };
  }
  throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new $TypeError('intrinsic name must be a non-empty string');
  }
  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
      throw new $SyntaxError('property names with quotes must have matching quotes');
    }
    if (part === 'constructor' || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += '.' + part;
    intrinsicRealName = '%' + intrinsicBaseName + '%';
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
        }
        return void undefined;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc;

        // By convention, when a data property is converted to an accessor
        // property to emulate a data property that does not suffer from
        // the override mistake, that accessor's getter is marked with
        // an `originalValue` property. Here, when we detect this, we
        // uphold the illusion by pretending to see that original data
        // property, i.e., returning the value rather than the getter
        // itself.
        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};

/***/ }),

/***/ 90524:
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ 86858);
module.exports = function hasNativeSymbols() {
  if (typeof origSymbol !== 'function') {
    return false;
  }
  if (typeof Symbol !== 'function') {
    return false;
  }
  if (typeof origSymbol('foo') !== 'symbol') {
    return false;
  }
  if (typeof Symbol('bar') !== 'symbol') {
    return false;
  }
  return hasSymbolSham();
};

/***/ }),

/***/ 86858:
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
    return false;
  }
  if (typeof Symbol.iterator === 'symbol') {
    return true;
  }
  var obj = {};
  var sym = Symbol('test');
  var symObj = Object(sym);
  if (typeof sym === 'string') {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
    return false;
  }

  // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }

  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ 84031:
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 20224);
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

/***/ }),

/***/ 28597:
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
? function (O) {
  return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === 'number') {
    var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
    }
  }
  return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __webpack_require__(/*! ./util.inspect */ 24654);
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has(opts, 'quoteStyle') && opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double') {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
  if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
    throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
  }
  if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === 'undefined') {
    return 'undefined';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  }
  if (typeof obj === 'string') {
    return inspectString(obj, opts);
  }
  if (typeof obj === 'number') {
    if (obj === 0) {
      return Infinity / obj > 0 ? '0' : '-0';
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === 'bigint') {
    var bigIntStr = String(obj) + 'n';
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
  if (typeof depth === 'undefined') {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
    return isArray(obj) ? '[Array]' : '[Object]';
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === 'undefined') {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return '[Circular]';
  }
  function inspect(value, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has(opts, 'quoteStyle')) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === 'function' && !isRegExp(obj)) {
    // in older engines, regexes are callable
    var name = nameOf(obj);
    var keys = arrObjKeys(obj, inspect);
    return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
    return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = '<' + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
    }
    s += '>';
    if (obj.childNodes && obj.childNodes.length) {
      s += '...';
    }
    s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
    return s;
  }
  if (isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var xs = arrObjKeys(obj, inspect);
    if (indent && !singleLineValues(xs)) {
      return '[' + indentedJoin(xs, indent) + ']';
    }
    return '[ ' + $join.call(xs, ', ') + ' ]';
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect);
    if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
      return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
    }
    if (parts.length === 0) {
      return '[' + String(obj) + ']';
    }
    return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
  }
  if (typeof obj === 'object' && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
      return utilInspect(obj, {
        depth: maxDepth - depth
      });
    } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function (value, key) {
        mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
      });
    }
    return collectionOf('Map', mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function (value) {
        setParts.push(inspect(value, obj));
      });
    }
    return collectionOf('Set', setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf('WeakMap');
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf('WeakSet');
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf('WeakRef');
  }
  if (isNumber(obj)) {
    return markBoxed(inspect(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect(String(obj)));
  }
  if (!isDate(obj) && !isRegExp(obj)) {
    var ys = arrObjKeys(obj, inspect);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? '' : 'null prototype';
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
    var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
    var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
    if (ys.length === 0) {
      return tag + '{}';
    }
    if (indent) {
      return tag + '{' + indentedJoin(ys, indent) + '}';
    }
    return tag + '{ ' + $join.call(ys, ', ') + ' }';
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace.call(String(s), /"/g, '&quot;');
}
function isArray(obj) {
  return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isDate(obj) {
  return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isRegExp(obj) {
  return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isError(obj) {
  return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isString(obj) {
  return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isNumber(obj) {
  return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === 'object' && obj instanceof Symbol;
  }
  if (typeof obj === 'symbol') {
    return true;
  }
  if (!obj || typeof obj !== 'object' || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {}
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {}
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function (key) {
  return key in this;
};
function has(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== 'object') {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== 'object') {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== 'object') {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {}
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== 'object') {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== 'object') {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
  } catch (e) {}
  return false;
}
function isElement(x) {
  if (!x || typeof x !== 'object') {
    return false;
  }
  if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  // eslint-disable-next-line no-control-regex
  var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: 'b',
    9: 't',
    10: 'n',
    12: 'f',
    13: 'r'
  }[n];
  if (x) {
    return '\\' + x;
  }
  return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
  return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
  return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], '\n') >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === '\t') {
    baseIndent = '\t';
  } else if (typeof opts.indent === 'number' && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), ' ');
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return '';
  }
  var lineJoiner = '\n' + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
  var isArr = isArray(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
    }
  }
  var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap['$' + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (!has(obj, key)) {
      continue;
    } // eslint-disable-line no-restricted-syntax, no-continue
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    } // eslint-disable-line no-restricted-syntax, no-continue
    if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
      // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
      continue; // eslint-disable-line no-restricted-syntax, no-continue
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
    } else {
      xs.push(key + ': ' + inspect(obj[key], obj));
    }
  }
  if (typeof gOPS === 'function') {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}

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

/***/ }),

/***/ 77434:
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};
module.exports = {
  'default': Format.RFC3986,
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};

/***/ }),

/***/ 93670:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 41799);
var parse = __webpack_require__(/*! ./parse */ 42207);
var formats = __webpack_require__(/*! ./formats */ 77434);
module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};

/***/ }),

/***/ 42207:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 98477);
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function (str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function (val, options) {
  if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
    return val.split(',');
  }
  return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }
        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, 'key');
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
      val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function (encodedVal) {
        return options.decoder(encodedVal, defaults.decoder, charset, 'value');
      });
    }
    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }
    if (part.indexOf('[]=') > -1) {
      val = isArray(val) ? [val] : val;
    }
    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function (chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else if (cleanRoot !== '__proto__') {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }

  // Transform dot notation to bracket notation
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

  // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;

  // Get the parent

  var segment = options.depth > 0 && brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;

  // Stash the parent if it exists

  var keys = [];
  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent);
  }

  // Loop through children appending to the array until we hit depth

  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }

  // If there's a remainder, just add whatever is left

  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }
  return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
  if (!opts) {
    return defaults;
  }
  if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }
  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }
  var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
    arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
module.exports = function (str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }
  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {};

  // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};

/***/ }),

/***/ 41799:
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ 98432);
var utils = __webpack_require__(/*! ./utils */ 98477);
var formats = __webpack_require__(/*! ./formats */ 77434);
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + '[]';
  },
  comma: 'comma',
  indices: function indices(prefix, key) {
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
  var obj = object;
  var tmpSc = sideChannel;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
    // Where object last appeared in the ref tree
    var pos = tmpSc.get(object);
    step += 1;
    if (typeof pos !== 'undefined') {
      if (pos === step) {
        throw new RangeError('Cyclic object value');
      } else {
        findFlag = true; // Break while
      }
    }

    if (typeof tmpSc.get(sentinel) === 'undefined') {
      step = 0;
    }
  }
  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
    obj = utils.maybeMap(obj, function (value) {
      if (value instanceof Date) {
        return serializeDate(value);
      }
      return value;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
    }
    obj = '';
  }
  if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
    }
    return [formatter(prefix) + '=' + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === 'undefined') {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === 'comma' && isArray(obj)) {
    // we need to join elements in
    if (encodeValuesOnly && encoder) {
      obj = utils.maybeMap(obj, encoder);
    }
    objKeys = [{
      value: obj.length > 0 ? obj.join(',') || null : void undefined
    }];
  } else if (isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;
  for (var j = 0; j < objKeys.length; ++j) {
    var key = objKeys[j];
    var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');
    sideChannel.set(object, step);
    var valueSideChannel = getSideChannel();
    valueSideChannel.set(sentinel, sideChannel);
    pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
  if (!opts) {
    return defaults;
  }
  if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }
  var charset = opts.charset || defaults.charset;
  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }
  var format = formats['default'];
  if (typeof opts.format !== 'undefined') {
    if (!has.call(formats.formatters, opts.format)) {
      throw new TypeError('Unknown format option provided.');
    }
    format = opts.format;
  }
  var formatter = formats.formatters[format];
  var filter = defaults.filter;
  if (typeof opts.filter === 'function' || isArray(opts.filter)) {
    filter = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
    encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter: filter,
    format: format,
    formatter: formatter,
    serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
    sort: typeof opts.sort === 'function' ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
module.exports = function (object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys = [];
  if (typeof obj !== 'object' || obj === null) {
    return '';
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && 'indices' in opts) {
    arrayFormat = opts.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
    throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
  }
  var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel = getSideChannel();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';
  if (options.charsetSentinel) {
    if (options.charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }
  return joined.length > 0 ? prefix + joined : '';
};

/***/ }),

/***/ 98477:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(/*! ./formats */ 77434);
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function () {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge(target, source, options) {
  /* eslint no-param-reassign: 0 */
  if (!source) {
    return target;
  }
  if (typeof source !== 'object') {
    if (isArray(target)) {
      target.push(source);
    } else if (target && typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== 'object') {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray(target) && !isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray(target) && isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];
    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function (str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');
  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  // utf-8
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === 'symbol') {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== 'string') {
    string = String(str);
  }
  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }
  var out = '';
  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);
    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
    ) {
      out += string.charAt(i);
      continue;
    }
    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }
    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }
    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }
    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    /* eslint operator-linebreak: [2, "before"] */
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }
  return out;
};
var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];
      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
  if (isArray(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  maybeMap: maybeMap,
  merge: merge
};

/***/ }),

/***/ 98432:
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 79903);
var callBound = __webpack_require__(/*! call-bind/callBound */ 4263);
var inspect = __webpack_require__(/*! object-inspect */ 28597);
var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) {
  // eslint-disable-line consistent-return
  for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = list.next;
      list.next = curr; // eslint-disable-line no-param-reassign
      return curr;
    }
  }
};
var listGet = function (objects, key) {
  var node = listGetNode(objects, key);
  return node && node.value;
};
var listSet = function (objects, key, value) {
  var node = listGetNode(objects, key);
  if (node) {
    node.value = value;
  } else {
    // Prepend the new node to the beginning of the list
    objects.next = {
      // eslint-disable-line no-param-reassign
      key: key,
      next: objects.next,
      value: value
    };
  }
};
var listHas = function (objects, key) {
  return !!listGetNode(objects, key);
};
module.exports = function getSideChannel() {
  var $wm;
  var $m;
  var $o;
  var channel = {
    assert: function (key) {
      if (!channel.has(key)) {
        throw new $TypeError('Side channel does not contain ' + inspect(key));
      }
    },
    get: function (key) {
      // eslint-disable-line consistent-return
      if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
        if ($wm) {
          return $weakMapGet($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key);
        }
      } else {
        if ($o) {
          // eslint-disable-line no-lonely-if
          return listGet($o, key);
        }
      }
    },
    has: function (key) {
      if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
        if ($wm) {
          return $weakMapHas($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key);
        }
      } else {
        if ($o) {
          // eslint-disable-line no-lonely-if
          return listHas($o, key);
        }
      }
      return false;
    },
    set: function (key, value) {
      if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key, value);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      } else {
        if (!$o) {
          /*
           * Initialize the linked list as an empty node, so that we don't have
           * to special-case handling of the first node: we can always refer to
           * it as (previous node).next, instead of something like (list).head
           */
          $o = {
            key: {},
            next: null
          };
        }
        listSet($o, key, value);
      }
    }
  };
  return channel;
};

/***/ }),

/***/ 24654:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=3945.562a821affe45868.js.map