(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[179],{

/***/ 86792:
/*!*******************************************!*\
  !*** ./apps/browser/src/app/app.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppGuard": () => (/* binding */ AppGuard)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);






class AppGuard {
  constructor() {
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this._authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE));
    this._didService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DID_SERVICE));
  }
  canActivate() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let canActivateThisRoute = false;
      const isAuthenticate = _this._didService?.did$?.value?.authenticated;
      if (!isAuthenticate) {
        const isReconnected = yield _this._isReconnect();
        if (isReconnected === true) {
          canActivateThisRoute = true;
        } else {
          yield _this._router.navigate(['/auth/login']);
          canActivateThisRoute = false;
        }
      } else {
        canActivateThisRoute = true;
      }
      return canActivateThisRoute;
    })();
  }
  _isReconnect() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = window.localStorage.getItem('connectedWallets');
      if (!data) {
        return false;
      }
      const previouslyConnectedWallets = JSON.parse(data);
      if (!previouslyConnectedWallets) {
        return false;
      }
      // Connect the most recently connected wallet (first in the array)
      yield _this2._authService.connectWallet(previouslyConnectedWallets[0]);
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2._authService.isWaiting$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(isWaiting => !isWaiting)));
      const isAuthenticate = _this2._didService?.did$?.value?.authenticated;
      return isAuthenticate;
    })();
  }
}
AppGuard.ɵfac = function AppGuard_Factory(t) {
  return new (t || AppGuard)();
};
AppGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppGuard,
  factory: AppGuard.ɵfac
});

/***/ }),

/***/ 5133:
/*!********************************************!*\
  !*** ./apps/browser/src/app/app.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 58077);
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.guard */ 86792);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ 19008);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 67665);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers */ 25452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ 4641);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 98139);
/* harmony import */ var _components_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update/update.component */ 79617);
/* harmony import */ var _pipes_address_to_avatar_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/address-to-avatar.pipe */ 61301);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_components__WEBPACK_IMPORTED_MODULE_2__.MAIN_COMPONENT]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_app_guard__WEBPACK_IMPORTED_MODULE_1__.AppGuard, ..._providers__WEBPACK_IMPORTED_MODULE_4__.PROVIDERS],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot({
    mode: 'ios'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes, {
    initialNavigation: 'enabledBlocking',
    useHash: true
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _components_update_update_component__WEBPACK_IMPORTED_MODULE_7__.UpdateComponent, _pipes_address_to_avatar_pipe__WEBPACK_IMPORTED_MODULE_8__.AddressToAvatarPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 58077:
/*!********************************************!*\
  !*** ./apps/browser/src/app/app.routes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.guard */ 86792);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 98139);


const appRoutes = [{
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ 2745).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/auth */ 2745)).then(m => m.AuthModule)
}, {
  path: '',
  children: [{
    path: 'ipfs',
    // loadComponent: () => import('./components/ipfs/ipfs.component').then(m => m.IpfsComponent),
    children: [{
      path: ':cid',
      loadComponent: () => __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(__webpack_require__, /*! ./components/ipfs/ipfs.component */ 50052)).then(m => m.IpfsComponent)
    }]
  }, {
    path: 'h',
    component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
    canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_0__.AppGuard],
    children: [{
      path: 'dashboard',
      loadChildren: () => __webpack_require__.e(/*! import() */ 7185).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/welcome */ 77185)).then(m => m.WelcomeModule)
    }, {
      path: 'calendar',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(1876)]).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/calendar */ 51876)).then(m => m.CalendarModule)
    }, {
      path: 'drive',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(304)]).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/drive */ 80304)).then(m => m.DriveModule)
    }, {
      path: 'wallet',
      loadChildren: () => __webpack_require__.e(/*! import() */ 3945).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/wallet */ 3945)).then(m => m.WalletModule)
    }, {
      path: 'notes',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(3161)]).then(__webpack_require__.bind(__webpack_require__, /*! @hexa/notes */ 3161)).then(m => m.NotesModule)
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }]
  }, {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }]
}];

/***/ }),

/***/ 4641:
/*!**************************************************************!*\
  !*** ./apps/browser/src/app/components/app/app.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 67665);
/* harmony import */ var _khmyznikov_pwa_install__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @khmyznikov/pwa-install */ 42257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/update.component */ 79617);








function AppComponent_ion_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 3);
  }
}
class AppComponent {
  constructor(environmentInjector, isProd, loaderService) {
    this.environmentInjector = environmentInjector;
    this.isProd = isProd;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    const version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
    const env = `[INFO] hexa PWA APP\nVersion: ${version} - ${this.isProd ? 'PROD' : 'DEV'}`;
    window['env'] = env;
    console.log(env);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_IS_PROD)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["hexa-root"]],
  decls: 5,
  vars: 4,
  consts: [[3, "environmentInjector"], ["type", "indeterminate", 4, "ngIf"], ["manifest-url", "./manifest.webmanifest"], ["type", "indeterminate"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-router-outlet", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pwa-install", 2)(4, "hexa-update");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("environmentInjector", ctx.environmentInjector);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.loaderService.isVisible$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _update_update_component__WEBPACK_IMPORTED_MODULE_3__.UpdateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjtBRENBLDRsQkFBNGxCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59IiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 98139:
/*!**************************************************************************!*\
  !*** ./apps/browser/src/app/components/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_address_to_avatar_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/address-to-avatar.pipe */ 61301);










const _c0 = function (a0) {
  return {
    "active-link": a0
  };
};
function DashboardComponent_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ion_button_8_Template_ion_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const feature_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      ctx_r8.togglePage(feature_r6.url);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !feature_r6.isEnabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, i_r7 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", feature_r6.name);
  }
}
function DashboardComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 20)(1, "ion-list", 21)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Global Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ng_template_15_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.setupIPFSPinService(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pin service");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Manage IPFS pinning service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item")(12, "ion-label")(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Enable or disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-toggle", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ng_template_15_Template_ion_toggle_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.toogleNotification(_r2, _r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 1, ctx_r3.isNotifEnabled$));
  }
}
const _c1 = function () {
  return {
    "online": true
  };
};
function DashboardComponent_ng_template_24_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 29)(1, "ion-avatar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "addressToAvatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 32)(6, "label")(7, "ion-text", 33)(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Connected address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-buttons", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ng_template_24_ion_item_1_Template_ion_buttons_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.copyAccountAddressToClipboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const accountId_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, accountId_r15)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", accountId_r15.slice(0, 6), "...", accountId_r15.slice(-4), " ");
  }
}
function DashboardComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_ng_template_24_ion_item_1_Template, 14, 9, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ng_template_24_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
      ctx_r18.disconnect();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r4.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label")(5, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Disconnect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.account$.value);
  }
}
class DashboardComponent {
  constructor(_router, _route, _toastService, _authService, _notificationService, _promptStrategy) {
    this._router = _router;
    this._route = _route;
    this._toastService = _toastService;
    this._authService = _authService;
    this._notificationService = _notificationService;
    this._promptStrategy = _promptStrategy;
    // public routerUrl$: Observable<string>;
    this.features = [
    // {name: 'home', url: 'dashboard', sort: 0, isEnabled: false, isVisible: false},
    {
      name: 'folder-open',
      url: 'drive',
      sort: 5,
      isEnabled: true,
      isVisible: true
    }, {
      name: 'wallet-sharp',
      url: 'wallet',
      sort: 10,
      isEnabled: true,
      isVisible: true
    }, {
      name: 'calendar-number',
      url: 'calendar',
      sort: 20,
      isEnabled: true,
      isVisible: false
    }, {
      name: 'clipboard',
      url: 'notes',
      sort: 25,
      isEnabled: true,
      isVisible: false
    }, {
      name: 'chatbubbles',
      url: 'chat',
      sort: 30,
      isEnabled: false,
      isVisible: false
    }, {
      name: 'checkbox',
      url: 'todos',
      sort: 40,
      isEnabled: false,
      isVisible: false
    }
    // {name: 'add', url: 'add', sort: 100, isEnabled: false, isVisible: true},
    ].sort((a, b) => a.sort - b.sort).filter(f => f.isVisible);
    this.isNotifEnabled$ = this._notificationService.isConnected$;
    this.account$ = this._authService.account$;
    this._subs = [];
  }
  ngOnInit() {
    var _this = this;
    const sub = this._notificationService.notifications$.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (messages) {
        if (messages.length === 1) {
          yield _this.displayNotification(messages[0]);
        } else if (messages.length > 1) {
          const content = `You have ${messages.length} new notifications`;
          yield _this.displayNotification(content);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this._subs.push(sub);
    const {
      params: {
        id: _id = null
      } = {}
    } = this._route.snapshot.parent || {};
    // this.routerUrl$ = this._router.events.pipe(
    //   // filter only navigation end events
    //   filter((event) => event instanceof NavigationEnd),
    //   map((event: NavigationEnd) => {
    //     return event?.url;
    //   }),
    //   filter(url => !!url),
    //   // trick to manage first navigation enter on MainPage from other module
    //   // Force with default pannel url to prevent incorrect display color for active link 
    //   map(url =>  (url.match(/\//g)||'').length > 2 ? url : url + '/settings'),
    // );
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe());
  }
  togglePage(path) {
    const {
      id: streamId
    } = this._route.snapshot.params;
    this._router.navigate([`/h/${path}`]);
  }
  toogleNotification(popoverElement, toggleElement) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // disable element to prevent multiple click
      toggleElement.disabled = true;
      let message = '';
      const isConnected = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2._notificationService.isConnected$);
      if (isConnected) {
        yield _this2._notificationService.disconnect();
        message = `Notifications are disabled`;
      } else {
        message = yield _this2._notificationService.connect().then(() => `Notifications are  enabled`).catch(() => 'Failed to enable notifications');
      }
      // do not miss to enable element back
      yield popoverElement.dismiss();
      yield _this2.displayNotification(message);
      toggleElement.disabled = false;
    })();
  }
  displayNotification(message) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionToast = yield _this3._toastService.create({
        message,
        duration: 5000,
        cssClass: 'notification-toast',
        icon: 'information-circle-outline',
        position: 'top',
        buttons: [{
          text: 'ok',
          role: 'cancel'
        }]
      });
      yield ionToast.present();
    })();
  }
  setupIPFSPinService(popoverElement) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // close popover
      popoverElement.dismiss();
      // extract user data
      const userData = _this4._authService.profile$.value;
      // check existing config for pining servcie and reset value if needed
      const config = yield _this4._promptStrategy.askSetupService();
      if (config?.token === '') {
        config.serviceName = '';
      }
      if (!config) {
        return;
      }
      // save user config to user base
      yield _this4._authService.updateProfilData({
        ...userData,
        ipfsConfig: {
          ...config
        }
      });
    })();
  }
  disconnect() {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5._authService.disconnect();
    })();
  }
  copyAccountAddressToClipboard() {
    const account = this._authService.account$.value;
    if (account) {
      navigator.clipboard.writeText(account);
      // display toast
      this._toastService.create({
        message: 'Account address copied to clipboard',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      }).then(toast => toast.present());
    }
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_NOTIFICATION_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE)));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["hexa-dashboard"]],
  decls: 25,
  vars: 9,
  consts: [["contentId", "main", "when", "sm"], ["contentId", "main"], ["menuElement", ""], [1, "ion-no-border"], ["src", "./assets/images/logo.svg", 1, "logo", 3, "click"], ["color", "primary", 3, "fullscreen"], [1, "centervert"], ["fill", "clear", "expand", "block", "size", "large", "class", "link", "routerLinkActive", "active-link", 3, "disabled", "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "setting-options", "fill", "clear"], ["slot", "icon-only", "color", "light", "size", "small", "name", "settings-outline"], ["trigger", "setting-options", "triggerAction", "click"], ["popoverSettingElement", ""], ["id", "main", "mode", "md"], ["mode", "ios", "id", "profil-trigger", 1, "authMiniDash"], ["src", "./assets/images/logo-colored.svg"], [3, "src"], ["trigger", "profil-trigger", "size", "auto", "side", "bottom", "alignment", "start", 1, "profil-popover", 3, "keepContentsMounted", "dismissOnSelect"], ["popOverProfil", ""], ["fill", "clear", "expand", "block", "size", "large", "routerLinkActive", "active-link", 1, "link", 3, "disabled", "ngClass", "click"], ["slot", "icon-only", "color", "light", 3, "name"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-no-padding"], ["button", "", 3, "click"], ["slot", "end", "size", "small", 3, "checked", "click"], ["toggleNotifElement", ""], [1, "ion-padding"], ["lines", "none", "class", "item-profil", 4, "ngIf"], ["lines", "none", 1, "ion-margin-top", "disconnect-item", 3, "click"], ["slot", "start", "name", "log-out-outline"], ["lines", "none", 1, "item-profil"], ["slot", "start"], [3, "ngClass", "src"], [1, "ion-text-nowrap"], ["color", "medium"], ["slot", "end", 1, "ion-no-margin", "ion-margin-start", 3, "click"], ["size", "small", "fill", "clear"], ["color", "medium", "size", "small", "slot", "icon-only", "name", "copy-outline"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-split-pane", 0)(1, "ion-menu", 1, 2)(3, "ion-header", 3)(4, "ion-toolbar")(5, "ion-img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_ion_img_click_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        ctx.togglePage("dashboard");
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardComponent_ion_button_8_Template, 2, 5, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-footer", 3)(10, "ion-toolbar")(11, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-popover", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DashboardComponent_ng_template_15_Template, 20, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-router-outlet", 12)(17, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 14)(19, "ion-img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "addressToAvatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-popover", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DashboardComponent_ng_template_24_Template, 7, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 7, ctx.account$.value)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("keepContentsMounted", true)("dismissOnSelect", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _pipes_address_to_avatar_pipe__WEBPACK_IMPORTED_MODULE_2__.AddressToAvatarPipe],
  styles: ["[_nghost-%COMP%]   ion-split-pane[_ngcontent-%COMP%] {\n  --side-width: 70px!important;\n  --side-min-width: 70px!important;\n  --side-max-width: 70px!important;\n}\n[_nghost-%COMP%]   ion-split-pane[_ngcontent-%COMP%]   ion-menu[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   ion-split-pane[_ngcontent-%COMP%]   ion-menu[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  border-top: none;\n}\n[_nghost-%COMP%]   ion-split-pane[_ngcontent-%COMP%]   ion-menu[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: none;\n}\n[_nghost-%COMP%]   ion-split-pane[_ngcontent-%COMP%]   ion-menu[_ngcontent-%COMP%]::part(container) {\n  min-width: 70px !important;\n  max-width: 70px !important;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary)!important;\n}\n[_nghost-%COMP%]   .header-md[_ngcontent-%COMP%]::after {\n  display: none;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: 10px auto 20px;\n  padding: 0px;\n  max-width: 42px;\n}\n[_nghost-%COMP%]   .ion-page[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n}\n[_nghost-%COMP%]   .ion-page[_ngcontent-%COMP%]    > ion-content[_ngcontent-%COMP%] {\n  --background: #f3f3f3;\n}\n[_nghost-%COMP%]   .centervert[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .centervert[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .centervert[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transition: all ease-in-out 125ms;\n  color: var(--ion-color-secondary) !important;\n}\n[_nghost-%COMP%]   .centervert[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary) !important;\n}\n[_nghost-%COMP%]   .centervert[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n  color: var(--ion-color-primary) !important;\n}\n[_nghost-%COMP%]   .authMiniDash[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 9999;\n  min-height: 56px;\n  width: 80px;\n  --background: white;\n  --background-hover: white;\n  --border-color: var(--ion-color-medium);\n  --border-width: 1px;\n  --border-style: solid;\n}\n[_nghost-%COMP%]   .authMiniDash[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-width: 24px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\nion-popover.profil-popover[_ngcontent-%COMP%] {\n  --width: 100%;\n  --max-width: 328px;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   .disconnect-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\nion-popover.profil-popover[_ngcontent-%COMP%]   .item-profil[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0FDQU47QURHUTtFQUNFLGdCQUFBO0FDRFY7QURHVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRFo7QURPTTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUNMUjtBRFNFO0VBQ0UsZ0RBQUE7QUNQSjtBRFNFO0VBQ0UsYUFBQTtBQ1BKO0FEVUk7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUk47QURZRTtFQUNFLG1CQUFBO0FDVko7QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1hKO0FEYUk7RUFDRSxTQUFBO0FDWE47QURlTTtFQUNFLGlDQUFBO0VBQ0EsNENBQUE7QUNiUjtBRGlCTTtFQUNFLDBDQUFBO0FDZlI7QURrQkk7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDaEJOO0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbEJKO0FEb0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNsQk47O0FEdUJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsZUFBQTtBQ3BCSjtBRHVCRTtFQUNFLGtCQUFBO0FDckJKO0FEdUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNyQk47QUR3Qkk7RUFDRSxtQkFBQTtBQ3RCTjtBRHdCTTtFQUNFLGNBQUE7QUN0QlI7QUQ0QkU7RUFDRSxtQkFBQTtBQzFCSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1zcGxpdC1wYW5lIHtcbiAgICAtLXNpZGUtd2lkdGg6IDcwcHghaW1wb3J0YW50O1xuICAgIC0tc2lkZS1taW4td2lkdGg6IDcwcHghaW1wb3J0YW50O1xuICAgIC0tc2lkZS1tYXgtd2lkdGg6IDcwcHghaW1wb3J0YW50O1xuXG4gICAgaW9uLW1lbnUge1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICBpb24tZm9vdGVyIHtcbiAgICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgJjo6cGFydChjb250YWluZXIpIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWhlYWRlciwgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGVyLW1kOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpb24taGVhZGVyIHtcbiAgICAubG9nbyB7XG4gICAgICBtYXJnaW46IDEwcHggYXV0byAyMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWF4LXdpZHRoOiA0MnB4O1xuICAgIH1cblxuICB9XG4gIC5pb24tcGFnZSB7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICA+IGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICB9ICBcbiAgfVxuICBcbiAgLmNlbnRlcnZlcnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9XG5cbiAgICAubGluayB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxMjVtcztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZS1saW5rIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b246aG92ZXIgaW9uLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuYXV0aE1pbmlEYXNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICB3aWR0aDogODBweDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gICAgaW9uLWltZyB7XG4gICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIH1cbn1cblxuaW9uLXBvcG92ZXIucHJvZmlsLXBvcG92ZXIge1xuICAtLXdpZHRoOiAxMDAlO1xuICAtLW1heC13aWR0aDogMzI4cHg7XG5cbiAgLmRpc2Nvbm5lY3QtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogNjRweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5pdGVtLXByb2ZpbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufSIsIjpob3N0IGlvbi1zcGxpdC1wYW5lIHtcbiAgLS1zaWRlLXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgLS1zaWRlLW1pbi13aWR0aDogNzBweCFpbXBvcnRhbnQ7XG4gIC0tc2lkZS1tYXgtd2lkdGg6IDcwcHghaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXNwbGl0LXBhbmUgaW9uLW1lbnUge1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCBpb24tc3BsaXQtcGFuZSBpb24tbWVudSBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbjpob3N0IGlvbi1zcGxpdC1wYW5lIGlvbi1tZW51IGlvbi1mb290ZXIgaW9uLXRvb2xiYXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IGlvbi1zcGxpdC1wYW5lIGlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taGVhZGVyLCA6aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbn1cbjpob3N0IC5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IGlvbi1oZWFkZXIgLmxvZ28ge1xuICBtYXJnaW46IDEwcHggYXV0byAyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1heC13aWR0aDogNDJweDtcbn1cbjpob3N0IC5pb24tcGFnZSB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG46aG9zdCAuaW9uLXBhZ2UgPiBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YzZjNmMztcbn1cbjpob3N0IC5jZW50ZXJ2ZXJ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCAuY2VudGVydmVydCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNlbnRlcnZlcnQgLmxpbmsgaW9uLWljb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTI1bXM7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNlbnRlcnZlcnQgLmFjdGl2ZS1saW5rIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNlbnRlcnZlcnQgaW9uLWJ1dHRvbjpob3ZlciBpb24taWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmF1dGhNaW5pRGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgd2lkdGg6IDgwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuOmhvc3QgLmF1dGhNaW5pRGFzaCBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tcG9wb3Zlci5wcm9maWwtcG9wb3ZlciB7XG4gIC0td2lkdGg6IDEwMCU7XG4gIC0tbWF4LXdpZHRoOiAzMjhweDtcbn1cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIC5kaXNjb25uZWN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tcG9wb3Zlci5wcm9maWwtcG9wb3ZlciBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuaW9uLXBvcG92ZXIucHJvZmlsLXBvcG92ZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIGlvbi1pdGVtIGlvbi1sYWJlbCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLXBvcG92ZXIucHJvZmlsLXBvcG92ZXIgLml0ZW0tcHJvZmlsIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2FwcHMvYnJvd3Nlci9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0FDQU47QURHUTtFQUNFLGdCQUFBO0FDRFY7QURHVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRFo7QURPTTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUNMUjtBRFNFO0VBQ0UsZ0RBQUE7QUNQSjtBRFNFO0VBQ0UsYUFBQTtBQ1BKO0FEVUk7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUk47QURZRTtFQUNFLG1CQUFBO0FDVko7QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1hKO0FEYUk7RUFDRSxTQUFBO0FDWE47QURlTTtFQUNFLGlDQUFBO0VBQ0EsNENBQUE7QUNiUjtBRGlCTTtFQUNFLDBDQUFBO0FDZlI7QURrQkk7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDaEJOO0FEb0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbEJKO0FEb0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNsQk47O0FEdUJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsZUFBQTtBQ3BCSjtBRHVCRTtFQUNFLGtCQUFBO0FDckJKO0FEdUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNyQk47QUR3Qkk7RUFDRSxtQkFBQTtBQ3RCTjtBRHdCTTtFQUNFLGNBQUE7QUN0QlI7QUQ0QkU7RUFDRSxtQkFBQTtBQzFCSjtBRENBLGdzT0FBZ3NPIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tc3BsaXQtcGFuZSB7XG4gICAgLS1zaWRlLXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgICAtLXNpZGUtbWluLXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgICAtLXNpZGUtbWF4LXdpZHRoOiA3MHB4IWltcG9ydGFudDtcblxuICAgIGlvbi1tZW51IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgaW9uLWZvb3RlciB7XG4gICAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgICY6OnBhcnQoY29udGFpbmVyKSB7XG4gICAgICAgIG1pbi13aWR0aDogNzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogNzBweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1oZWFkZXIsIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMjBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1heC13aWR0aDogNDJweDtcbiAgICB9XG5cbiAgfVxuICAuaW9uLXBhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgPiBpb24tY29udGVudCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgfSAgXG4gIH1cbiAgXG4gIC5jZW50ZXJ2ZXJ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfVxuXG4gICAgLmxpbmsge1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTI1bXM7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUtbGluayB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9uOmhvdmVyIGlvbi1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmF1dGhNaW5pRGFzaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcblxuICAgIGlvbi1pbWcge1xuICAgICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIHtcbiAgLS13aWR0aDogMTAwJTtcbiAgLS1tYXgtd2lkdGg6IDMyOHB4O1xuXG4gIC5kaXNjb25uZWN0LWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAuaXRlbS1wcm9maWwge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn0iLCI6aG9zdCBpb24tc3BsaXQtcGFuZSB7XG4gIC0tc2lkZS13aWR0aDogNzBweCFpbXBvcnRhbnQ7XG4gIC0tc2lkZS1taW4td2lkdGg6IDcwcHghaW1wb3J0YW50O1xuICAtLXNpZGUtbWF4LXdpZHRoOiA3MHB4IWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1zcGxpdC1wYW5lIGlvbi1tZW51IHtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgaW9uLXNwbGl0LXBhbmUgaW9uLW1lbnUgaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG46aG9zdCBpb24tc3BsaXQtcGFuZSBpb24tbWVudSBpb24tZm9vdGVyIGlvbi10b29sYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCBpb24tc3BsaXQtcGFuZSBpb24tbWVudTo6cGFydChjb250YWluZXIpIHtcbiAgbWluLXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNzBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWhlYWRlciwgOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG59XG46aG9zdCAuaGVhZGVyLW1kOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCBpb24taGVhZGVyIC5sb2dvIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXgtd2lkdGg6IDQycHg7XG59XG46aG9zdCAuaW9uLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuOmhvc3QgLmlvbi1wYWdlID4gaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG46aG9zdCAuY2VudGVydmVydCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuOmhvc3QgLmNlbnRlcnZlcnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jZW50ZXJ2ZXJ0IC5saW5rIGlvbi1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDEyNW1zO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cbjpob3N0IC5jZW50ZXJ2ZXJ0IC5hY3RpdmUtbGluayBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbjpob3N0IC5jZW50ZXJ2ZXJ0IGlvbi1idXR0b246aG92ZXIgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbjpob3N0IC5hdXRoTWluaURhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA4MHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbjpob3N0IC5hdXRoTWluaURhc2ggaW9uLWltZyB7XG4gIG1heC13aWR0aDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLXBvcG92ZXIucHJvZmlsLXBvcG92ZXIge1xuICAtLXdpZHRoOiAxMDAlO1xuICAtLW1heC13aWR0aDogMzI4cHg7XG59XG5pb24tcG9wb3Zlci5wcm9maWwtcG9wb3ZlciAuZGlzY29ubmVjdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLXBvcG92ZXIucHJvZmlsLXBvcG92ZXIgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24tcG9wb3Zlci5wcm9maWwtcG9wb3ZlciBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5pb24tcG9wb3Zlci5wcm9maWwtcG9wb3ZlciBpb24taXRlbSBpb24tbGFiZWwgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1wb3BvdmVyLnByb2ZpbC1wb3BvdmVyIC5pdGVtLXByb2ZpbCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 19008:
/*!**************************************************!*\
  !*** ./apps/browser/src/app/components/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "MAIN_COMPONENT": () => (/* binding */ MAIN_COMPONENT)
/* harmony export */ });
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 4641);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 98139);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/update.component */ 79617);



const MAIN_COMPONENT = _app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent;
const COMPONENTS = [MAIN_COMPONENT, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _update_update_component__WEBPACK_IMPORTED_MODULE_2__.UpdateComponent];

/***/ }),

/***/ 79617:
/*!********************************************************************!*\
  !*** ./apps/browser/src/app/components/update/update.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateComponent": () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 67665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);









function UpdateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
class UpdateComponent {
  constructor(updates, _toast) {
    var _this = this;
    this.updates = updates;
    this._toast = _toast;
    this.closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    console.log('Application updater install: ', _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production);
    // create observable to check for updates
    // if there is an update, display a toast.
    this.updateAvailable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false), this.updates.versionUpdates.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e.type === 'VERSION_DETECTED'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)( /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this._displayNotif();
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => true)), this.closed$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => false)));
  }
  /**
   * Method to activate the update
   * and reload the application
   * @returns
   */
  activateUpdate() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        return;
      }
      yield _this2.updates.activateUpdate();
      location.reload();
    })();
  }
  /**
   * Method to display a toast that will explain to the user
   * that a new version is available.
   * When the toast is closed, the update will be activated
   * and the application will be reloaded. by the dedicated method `activateUpdate`.
   */
  _displayNotif() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const duration = 1000 * 30; // 30 seconds
      const data = {
        message: 'New version available!',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: `Update`,
        buttons: [{
          text: 'Update',
          role: 'ok'
        }],
        duration // force toasts to close to trigger the update
      };

      const toast = yield _this3._toast.create(data);
      yield toast.present();
      yield toast.onDidDismiss();
      _this3.activateUpdate();
    })();
  }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
  return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController));
};
UpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UpdateComponent,
  selectors: [["hexa-update"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"]],
  template: function UpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, UpdateComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.updateAvailable$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe]
});

/***/ }),

/***/ 61301:
/*!**************************************************************!*\
  !*** ./apps/browser/src/app/pipes/address-to-avatar.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressToAvatarPipe": () => (/* binding */ AddressToAvatarPipe)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AddressToAvatarPipe {
  transform(value, theme = 'blockies') {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!value) {
        return '';
      }
      if (theme === 'jazzicons') {
        // return import('@metamask/jazzicon').then(jazzicon => jazzicon.default( 97, value ));
        throw 'Not implemented';
      } else {
        return __webpack_require__.e(/*! import() */ 1697).then(__webpack_require__.t.bind(__webpack_require__, /*! ethereum-blockies-base64 */ 51697, 23)).then(blockies => blockies.default(value));
      }
    })();
  }
}
AddressToAvatarPipe.ɵfac = function AddressToAvatarPipe_Factory(t) {
  return new (t || AddressToAvatarPipe)();
};
AddressToAvatarPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "addressToAvatar",
  type: AddressToAvatarPipe,
  pure: true
});

/***/ }),

/***/ 86041:
/*!***************************************************************!*\
  !*** ./apps/browser/src/app/providers/api-config.provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG_PROVIDER": () => (/* binding */ API_CONFIG_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 67665);


const defaultValue = {
  token: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment?.ipfs.pinning_service_token || '',
  serviceName: 'default-pinata'
};
const API_CONFIG_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_PINNING_SERVICE_DEFAULT_CONFIG),
  useValue: defaultValue
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_WALLET_SERVICE_APIKEY),
  useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment?.wallet_service_apikey
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_AUTH_APIKEY),
  useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment?.auth?.apikey
}];

/***/ }),

/***/ 99199:
/*!*******************************************************************!*\
  !*** ./apps/browser/src/app/providers/authentication.provider.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHENTICATION_PROVIDER": () => (/* binding */ AUTHENTICATION_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);


const AUTHENTICATION_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_WEB3AUTH_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.Web3AuthService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_DID_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.DIDService
}];

/***/ }),

/***/ 22440:
/*!******************************************************************!*\
  !*** ./apps/browser/src/app/providers/communication.provider.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMUNICATION_PROVIDER": () => (/* binding */ COMMUNICATION_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);


const COMMUNICATION_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_MESSAGING_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.XMTPService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_NOTIFICATION_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.NotificationService
}];

/***/ }),

/***/ 53930:
/*!*************************************************************!*\
  !*** ./apps/browser/src/app/providers/database.provider.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATABASE_PROVIDER": () => (/* binding */ DATABASE_PROVIDER)
/* harmony export */ });
/* harmony import */ var _ceramicnetwork_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ceramicnetwork/http-client */ 55390);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);



const CERAMIC_CLIENT = new _ceramicnetwork_http_client__WEBPACK_IMPORTED_MODULE_2__.CeramicClient('https://ceramic-clay.3boxlabs.com');
const DATABASE_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_CERAMIC_SERVICE),
  useValue: CERAMIC_CLIENT
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_DATASTORE_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.DatastoreService
}];

/***/ }),

/***/ 16374:
/*!***************************************************************!*\
  !*** ./apps/browser/src/app/providers/encryption.provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENCRYPTION_PROVIDER": () => (/* binding */ ENCRYPTION_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strategies */ 31654);



const ENCRYPTION_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_DID_ENCRYPTION_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.DIDEncryptionService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_ENCRYPTION_SERVICE),
  useFactory: encryptLib => {
    // setup default encryption strategy with DID Encryption Service.
    // You can change this to use a different encryption service 
    // by calling setStrategy() on the EncryptionStrategy instance.
    const strategy = new _strategies__WEBPACK_IMPORTED_MODULE_2__.EncryptionStrategy();
    strategy.setStrategy(encryptLib);
    return strategy;
  },
  deps: [(0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_DID_ENCRYPTION_SERVICE)]
}];

/***/ }),

/***/ 24698:
/*!**********************************************************!*\
  !*** ./apps/browser/src/app/providers/error.provider.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PROVIDER": () => (/* binding */ ERROR_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 67665);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);



const ERROR_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler,
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.GlobalErrorHandlerService
}] : [];

/***/ }),

/***/ 25452:
/*!*************************************************!*\
  !*** ./apps/browser/src/app/providers/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROVIDERS": () => (/* binding */ PROVIDERS)
/* harmony export */ });
/* harmony import */ var _error_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.provider */ 24698);
/* harmony import */ var _is_prod_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-prod.provider */ 40959);
/* harmony import */ var _loader_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.provider */ 38048);
/* harmony import */ var _api_config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-config.provider */ 86041);
/* harmony import */ var _authentication_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.provider */ 99199);
/* harmony import */ var _encryption_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encryption.provider */ 16374);
/* harmony import */ var _database_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database.provider */ 53930);
/* harmony import */ var _communication_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./communication.provider */ 22440);
/* harmony import */ var _media_storage_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media-storage.provider */ 44436);
/* harmony import */ var _strategy_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strategy.provider */ 39270);










const PROVIDERS = [..._strategy_provider__WEBPACK_IMPORTED_MODULE_9__.PROMPT_STRATEGY_PROVIDER, ..._api_config_provider__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG_PROVIDER, ..._authentication_provider__WEBPACK_IMPORTED_MODULE_4__.AUTHENTICATION_PROVIDER, ..._database_provider__WEBPACK_IMPORTED_MODULE_6__.DATABASE_PROVIDER, ..._communication_provider__WEBPACK_IMPORTED_MODULE_7__.COMMUNICATION_PROVIDER, ..._encryption_provider__WEBPACK_IMPORTED_MODULE_5__.ENCRYPTION_PROVIDER, ..._error_provider__WEBPACK_IMPORTED_MODULE_0__.ERROR_PROVIDER, ..._is_prod_provider__WEBPACK_IMPORTED_MODULE_1__.IS_PROD_PROVIDER, ..._loader_provider__WEBPACK_IMPORTED_MODULE_2__.LOADER_PROVIDER, ..._media_storage_provider__WEBPACK_IMPORTED_MODULE_8__.MEDIA_STORAGE_PROVIDER];

/***/ }),

/***/ 40959:
/*!************************************************************!*\
  !*** ./apps/browser/src/app/providers/is-prod.provider.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_PROD_PROVIDER": () => (/* binding */ IS_PROD_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 67665);


const IS_PROD_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_IS_PROD),
  useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production
}];

/***/ }),

/***/ 38048:
/*!***********************************************************!*\
  !*** ./apps/browser/src/app/providers/loader.provider.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADER_PROVIDER": () => (/* binding */ LOADER_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87449);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98977);


const LOADER_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_LOADER_SERVICE),
  useFactory: () => {
    // Create a loader service that can be used to show/hide 
    // a loading indicator in the UI. 
    // This is a simple example that uses a BehaviorSubject to
    // emit a boolean value that can be subscribed to by the UI.
    const LOADERCLIENT = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    return {
      setStatus: status => {
        console.log('Loader status: ', status);
        LOADERCLIENT.next(status);
      },
      isVisible$: LOADERCLIENT.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)())
    };
  }
}];

/***/ }),

/***/ 44436:
/*!******************************************************************!*\
  !*** ./apps/browser/src/app/providers/media-storage.provider.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEDIA_STORAGE_PROVIDER": () => (/* binding */ MEDIA_STORAGE_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 68987);
/* harmony import */ var _services_web3storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3storage.service */ 73519);
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strategies */ 31654);




const MEDIA_STORAGE_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_PINATA_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.PinataService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_WEB3STORAGE_SERVICE),
  useClass: _services_web3storage_service__WEBPACK_IMPORTED_MODULE_2__.Web3storageService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_IPFS_SERVICE),
  useClass: _services__WEBPACK_IMPORTED_MODULE_1__.IPFSService
}, {
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_IPFS_PINNING_SERVICE),
  useFactory: (authService, pinata, web3) => {
    // use default service
    const profil = authService.profile$.value;
    const serviceName = profil.ipfsConfig?.serviceName;
    const mapStrategy = new Map();
    mapStrategy.set('pinata', pinata);
    mapStrategy.set('web3storage', web3);
    const strategy = new _strategies__WEBPACK_IMPORTED_MODULE_3__.IPFSPinningStrategy(mapStrategy);
    serviceName ? strategy.setStrategy(serviceName) : strategy.setStrategy('pinata'); // default service
    return strategy;
  },
  deps: [(0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_WEB3AUTH_SERVICE), (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_PINATA_SERVICE), (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_WEB3STORAGE_SERVICE)]
}];

/***/ }),

/***/ 39270:
/*!*************************************************************!*\
  !*** ./apps/browser/src/app/providers/strategy.provider.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROMPT_STRATEGY_PROVIDER": () => (/* binding */ PROMPT_STRATEGY_PROVIDER)
/* harmony export */ });
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _services_prompt_strategy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/prompt-strategy.service */ 59096);


const PROMPT_STRATEGY_PROVIDER = [{
  provide: (0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_0__.TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE),
  useClass: _services_prompt_strategy_service__WEBPACK_IMPORTED_MODULE_1__.PromptStrategyService
}];

/***/ }),

/***/ 67154:
/*!************************************************************!*\
  !*** ./apps/browser/src/app/services/datastore.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatastoreService": () => (/* binding */ DatastoreService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _glazed_did_datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glazed/did-datastore */ 67117);
/* harmony import */ var _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ceramicnetwork/stream-tile */ 89731);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);










class DatastoreService {
  constructor(_ceramic, _did, _isProd, _loaderService, _toastService) {
    this._ceramic = _ceramic;
    this._did = _did;
    this._isProd = _isProd;
    this._loaderService = _loaderService;
    this._toastService = _toastService;
    this.aliases = {
      schemas: {
        basicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio'
      },
      definitions: {
        BasicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic'
      },
      tiles: {}
    };
    this._datastore = new _glazed_did_datastore__WEBPACK_IMPORTED_MODULE_3__.DIDDataStore({
      ceramic: this._ceramic,
      model: this.aliases
    });
  }
  get datastore() {
    return this._datastore;
  }
  /**
   * Wrapper that normalize the object returned by Ceramic database
   * as a simple object with only the content of the document and the id
   * This method using DID authentication to load the document with full access (read/write)
   * @param family
   * @param tags
   * @param data
   * @returns
   */
  getData(family, tags, data) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const familyTag = _this._isProd ? family : `DEV=${family}`;
      console.log(`[INFO] {DatastoreService} getData() Query:`, familyTag, tags);
      const doc = yield _this._getDocument(familyTag, tags, data);
      console.log('[INFO] {DatastoreService} getData() Result: ', doc, doc.id.toString());
      return {
        ...doc.content,
        _id: doc.id.toString()
      };
    })();
  }
  /**
   * Wrapper that normalize call to load data from Ceramic database
   * as a simple object with only the content of the document and the id
   * This method not use authentication and load the document with read only access
   * @param streamId
   */
  loadData(streamId) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = yield _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_4__.TileDocument.load(_this2._ceramic, streamId);
      return {
        ...doc,
        _id: doc.id.toString()
      };
    })();
  }
  /**
   * Wrapper that normalize call to save new entry data in Ceramic database
   * and return the full object of the document
   * @param data
   * @param family
   * @param tags
   * @returns
   */
  saveData(data, family, tags) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const familyTag = _this3._isProd ? family : `DEV=${family}`;
      console.log(`[INFO] {DatastoreService} saveData() Query:`, data, familyTag, tags);
      // Set document controlled by the authenticated DID
      const controller = _this3._getAuthorizedDidID();
      if (!controller) throw new Error('Ceramic instance does not have an authenticated DID');
      // The following call will fail if the Ceramic instance does not have an authenticated DID
      const doc = yield _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_4__.TileDocument.deterministic(_this3._ceramic, {
        // A single controller must be provided to reference a deterministic document
        controllers: [controller],
        // A family or tag must be provided in addition to the controller
        family: familyTag,
        tags
      }, {
        pin: true
      });
      yield doc.update(data);
      const _id = doc.id.toString();
      const content = doc.content;
      return {
        _id,
        ...content
      };
    })();
  }
  // async updateUserProfil() {
  // }
  // private async _init() {}
  /**
   * Private method that load a document from Ceramic database using deterministic method
   * and return it as a `TileDocument`
   * Optionnaly this method can create document content if it does not exist yet and a data object is provided.
   * @param family
   * @param tags
   * @param data
   * @returns
   */
  _getDocument(family, tags, data) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`[INFO] {DatastoreService} _getDocument() Query:`, family, tags);
      // Load the document controlled by the authenticated DID
      const controller = _this4._getAuthorizedDidID();
      if (!controller) throw new Error('Ceramic instance does not have an authenticated DID');
      const doc = yield _ceramicnetwork_stream_tile__WEBPACK_IMPORTED_MODULE_4__.TileDocument.deterministic(_this4._ceramic, {
        // A single controller must be provided to reference a deterministic document
        controllers: [controller],
        // A family or tag must be provided in addition to the controller
        family,
        tags
      });
      // The document has no content as it's created based on metadata only...
      const haveEmptyContent = doc.content == null || Object.keys(doc.content || {}).length === 0;
      if (haveEmptyContent && data) {
        console.log('[INFO] {DatastoreService} No content found, creating new document: ', data);
        // display message to user
        const ionLoader = yield _this4._loaderService.create({
          message: `Creating database document to store your data...`,
          keyboardClose: false
        });
        yield ionLoader.present();
        // set content with data
        yield doc.update(data);
        // dismiss message
        yield ionLoader.dismiss();
        // display toast message
        const ionToast = yield _this4._toastService.create({
          message: `Database created successfully`,
          duration: 2000,
          color: 'success',
          position: 'bottom'
        });
        ionToast.present();
      }
      return doc;
    })();
  }
  _getAuthorizedDidID() {
    if (!this._did.did$.value) throw new Error('DIDSession not initialized');
    // get existing parent DID id or current DID id
    const id = this._did.did$.value.hasParent ? this._did.did$.value.parent : this._did.did$.value.id;
    return id;
  }
}
DatastoreService.ɵfac = function DatastoreService_Factory(t) {
  return new (t || DatastoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_CERAMIC_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_DID_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_IS_PROD)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController));
};
DatastoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DatastoreService,
  factory: DatastoreService.ɵfac
});

/***/ }),

/***/ 76203:
/*!*****************************************************************!*\
  !*** ./apps/browser/src/app/services/did-encryption.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDEncryptionService": () => (/* binding */ DIDEncryptionService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




// Doc: https://blog.ceramic.network/how-to-store-signed-and-encrypted-data-on-ipfs/   
class DIDEncryptionService {
  constructor(_identityService) {
    this._identityService = _identityService;
  }
  encryptData(data, authorizedDID = []) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unit8Data = new TextEncoder().encode(data);
      const did = _this._identityService.did$.value;
      const didID = _this._getAuthorizedDidID();
      if (!did) throw new Error('{DIDEncryptionService}: DIDSession not initialized');
      if (!did.createJWE) throw new Error('{DIDEncryptionService}: createJWE not implemented');
      try {
        const jwe = yield did.createJWE(unit8Data,
        // liste of authorized DID ID to decrypt
        [didID, ...authorizedDID]);
        return jwe;
      } catch (error) {
        throw new Error(`[ERROR] {DIDEncryptionService}: ${error?.message}`);
      }
    })();
  }
  decryptData(jwe) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const did = _this2._identityService.did$.value;
      console.log(`[INFO] {DIDEncryptionService} `, did, jwe);
      const decryptedJWEunit8Data = yield did.decryptJWE(jwe);
      const decryptedJWE = new TextDecoder().decode(decryptedJWEunit8Data);
      return decryptedJWE;
    })();
  }
  _getAuthorizedDidID() {
    if (!this._identityService.did$.value) throw new Error('DIDSession not initialized');
    // get existing parent DID id or current DID id
    const id = this._identityService.did$.value.hasParent ? this._identityService.did$.value.parent : this._identityService.did$.value.id;
    return id;
  }
}
DIDEncryptionService.ɵfac = function DIDEncryptionService_Factory(t) {
  return new (t || DIDEncryptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_DID_SERVICE)));
};
DIDEncryptionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DIDEncryptionService,
  factory: DIDEncryptionService.ɵfac
});

/***/ }),

/***/ 25624:
/*!******************************************************!*\
  !*** ./apps/browser/src/app/services/did.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDService": () => (/* binding */ DIDService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_dids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hexa/dids */ 22626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _3id_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @3id/connect */ 31996);
/* harmony import */ var _3id_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @self.id/web */ 52950);
/* harmony import */ var _self_id_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @self.id/web */ 63183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);






class DIDService {
  constructor() {
    this.did$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._threeID = new _3id_connect__WEBPACK_IMPORTED_MODULE_2__.ThreeIdConnect('testnet-clay');
    this._selfId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  connectWallet(provider = window.ethereum, account) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this._auth(provider, account);
        return true;
      } catch (error) {
        _this.did$.next(null);
        throw new Error(error.message);
      }
    })();
  }
  _auth(provider = window.ethereum, account) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!provider) {
        throw new Error('No injected Ethereum provider found');
      }
      yield _this2._authenticateWithEthereum(provider, account);
    })();
  }
  _authenticateWithEthereum(ethereumProvider, account) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3._connectWith3ID(ethereumProvider, account);
      // await this._saveLatestConnectionDateTime();
    })();
  }

  _connectWith3ID(ethereumProvider, account) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create an EthereumAuthProvider using the Ethereum provider and requested account
      const authProvider = new _3id_connect__WEBPACK_IMPORTED_MODULE_3__.EthereumAuthProvider(ethereumProvider, account);
      // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
      // generate the authentication secret
      yield _this4._threeID.connect(authProvider);
      const did = new _hexa_dids__WEBPACK_IMPORTED_MODULE_4__.DID({
        // Get the DID provider from the 3ID Connect instance
        provider: _this4._threeID.getDidProvider()
        // The DID resolver is used to resolve the DID document from the 3ID Connect instance 
        // and the public keys from the Key DID Resolver
        // resolver: {
        //   ...get3IDResolver(this._threeID),
        // }
      });

      _this4.did$.next(did);
    })();
  }
  _authWithSelfID(ethereumProvider, account) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selfID = yield _self_id_web__WEBPACK_IMPORTED_MODULE_5__.SelfID.authenticate({
        authProvider: new _3id_connect__WEBPACK_IMPORTED_MODULE_3__.EthereumAuthProvider(ethereumProvider, account),
        ceramic: 'testnet-clay',
        // Make sure the `ceramic` and `connectNetwork` parameter connect to the same network
        connectNetwork: 'testnet-clay',
        threeidConnect: true
      });
      const did = selfID.did;
      _this5._selfId$.next(selfID);
      _this5.did$.next(did);
    })();
  }
  _saveLatestConnectionDateTime() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // const selfId = this._selfId$.value;
  // await selfId?.set('basicProfile', {
  //   latestConnectionISODatetime: new Date().toISOString(),
  // });
}

DIDService.ɵfac = function DIDService_Factory(t) {
  return new (t || DIDService)();
};
DIDService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: DIDService,
  factory: DIDService.ɵfac
});

/***/ }),

/***/ 40216:
/*!***********************************************************************!*\
  !*** ./apps/browser/src/app/services/global-error-handler.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalErrorHandlerService": () => (/* binding */ GlobalErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






class GlobalErrorHandlerService {
  constructor(_alertService, _zone, _loadingCtrl, _loaderService) {
    this._alertService = _alertService;
    this._zone = _zone;
    this._loadingCtrl = _loadingCtrl;
    this._loaderService = _loaderService;
  }
  handleError(error) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = error.message || error;
      // get message error from Unkown Promise Error
      if (message.indexOf('Uncaught (in promise):') !== -1) {
        message = message.split('Uncaught (in promise):')[1].trim();
      }
      console.error('[ERROR] GlobalErrorHandler: ', error.message);
      // use `NgZone.run`, too update loader state even if the error is thrown outside the ngZone
      _this._zone.run( /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this._loaderService.setStatus(false);
        // close existing loader UI ctrl 
        const existingLoader = yield _this._loadingCtrl.getTop();
        if (existingLoader) {
          yield existingLoader.dismiss();
        }
        // close existing alert
        const existingAlert = yield _this._alertService.getTop();
        if (existingAlert) {
          yield existingAlert.dismiss();
        }
        // show alert
        const appAlert = yield _this._alertService.create({
          header: 'Error',
          message,
          buttons: ['OK'],
          cssClass: 'app-alert danger'
        });
        yield appAlert.present();
      }));
    })();
  }
}
GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) {
  return new (t || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
GlobalErrorHandlerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GlobalErrorHandlerService,
  factory: GlobalErrorHandlerService.ɵfac
});

/***/ }),

/***/ 68987:
/*!************************************************!*\
  !*** ./apps/browser/src/app/services/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDEncryptionService": () => (/* reexport safe */ _did_encryption_service__WEBPACK_IMPORTED_MODULE_2__.DIDEncryptionService),
/* harmony export */   "DIDService": () => (/* reexport safe */ _did_service__WEBPACK_IMPORTED_MODULE_1__.DIDService),
/* harmony export */   "DatastoreService": () => (/* reexport safe */ _datastore_service__WEBPACK_IMPORTED_MODULE_0__.DatastoreService),
/* harmony export */   "GlobalErrorHandlerService": () => (/* reexport safe */ _global_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.GlobalErrorHandlerService),
/* harmony export */   "IPFSService": () => (/* reexport safe */ _ipfs_service__WEBPACK_IMPORTED_MODULE_4__.IPFSService),
/* harmony export */   "NotificationService": () => (/* reexport safe */ _notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService),
/* harmony export */   "PinataService": () => (/* reexport safe */ _pinata_service__WEBPACK_IMPORTED_MODULE_7__.PinataService),
/* harmony export */   "Web3AuthService": () => (/* reexport safe */ _web3_auth_service__WEBPACK_IMPORTED_MODULE_8__.Web3AuthService),
/* harmony export */   "XMTPService": () => (/* reexport safe */ _xmtp_service__WEBPACK_IMPORTED_MODULE_5__.XMTPService)
/* harmony export */ });
/* harmony import */ var _datastore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datastore.service */ 67154);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did.service */ 25624);
/* harmony import */ var _did_encryption_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./did-encryption.service */ 76203);
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-error-handler.service */ 40216);
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ipfs.service */ 47032);
/* harmony import */ var _xmtp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xmtp.service */ 8325);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ 27790);
/* harmony import */ var _pinata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pinata.service */ 42868);
/* harmony import */ var _web3_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web3-auth.service */ 80595);








// export * from './nacl.service';


/***/ }),

/***/ 47032:
/*!*******************************************************!*\
  !*** ./apps/browser/src/app/services/ipfs.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPFSService": () => (/* binding */ IPFSService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var ipfs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core */ 86214);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multiformats/cid */ 66018);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);







class IPFSService {
  constructor() {
    this.dag$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
  }
  disconect() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._ipfsNode.dag) {
        yield _this._ipfsNode.stop();
      }
    })();
  }
  add(file, s) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._ipfsNode) {
        _this2._ipfsNode = yield (0,ipfs_core__WEBPACK_IMPORTED_MODULE_2__.create)({
          config: {}
        });
      }
      const nodeIsOnline = _this2._ipfsNode.isOnline();
      if (!nodeIsOnline) {
        throw new Error('IPFS node is not online');
      }
      const {
        cid
      } = yield _this2._ipfsNode.add(file, {
        timeout: 10000,
        preload: false,
        progress: prog => console.log(`received: ${prog}`)
      });
      if (s) {
        yield s.pin(cid.toString());
      }
      return {
        cid: cid.toString()
      };
    })();
  }
  pin(s, cid) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield s.pin(cid);
    })();
  }
  unpin(s, cid) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield s.unpin(cid);
    })();
  }
  getFromCID(cid, type) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._ipfsNode) {
        _this3._ipfsNode = yield (0,ipfs_core__WEBPACK_IMPORTED_MODULE_2__.create)();
      }
      const nodeIsOnline = _this3._ipfsNode.isOnline();
      if (!nodeIsOnline) {
        throw new Error('IPFS node is not online');
      }
      const asyncUint8Array = _this3._ipfsNode.cat(cid, {
        timeout: 10000,
        preload: false
      });
      const blobsPart = [];
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(asyncUint8Array), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
          const chunk = _step.value;
          {
            blobsPart.push(chunk);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      const file = new File(blobsPart, cid, {
        type
      });
      return file;
    })();
  }
  getDag() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4._ipfsNode) {
        _this4._ipfsNode = yield (0,ipfs_core__WEBPACK_IMPORTED_MODULE_2__.create)({
          config: {}
        });
      }
      const nodeIsOnline = _this4._ipfsNode.isOnline();
      if (!nodeIsOnline) {
        throw new Error('IPFS node is not online');
      }
      if (!_this4.dag$.value) {
        _this4.dag$.next(_this4._ipfsNode.dag);
      }
      return _this4.dag$.value;
    })();
  }
  cidFromString(id) {
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_3__.CID.parse(id);
  }
}
IPFSService.ɵfac = function IPFSService_Factory(t) {
  return new (t || IPFSService)();
};
IPFSService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: IPFSService,
  factory: IPFSService.ɵfac
});

/***/ }),

/***/ 27790:
/*!***************************************************************!*\
  !*** ./apps/browser/src/app/services/notification.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 87449);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);







class NotificationService {
  constructor(_loaderCtrl, _messagingService, _authService) {
    this._loaderCtrl = _loaderCtrl;
    this._messagingService = _messagingService;
    this._authService = _authService;
    this.notifications$ = this._messagingService.messages$.pipe(
    // formating messages to be displayed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(messages => messages.map(message => message.messagesInConversation).flat()
    // filter only application messages
    .filter(m => m.content.startsWith('hexa'))
    // parse message
    .map(m => this._parseMessage(m.content))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000),
    // update the user profil `latestNotifedISODatetime` field
    // each time a new notification is received from XMTP
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(messages => messages.length > 0 ? this._authService.updateProfilData({
      latestNotifedISODatetime: new Date().toISOString()
    }).then(() => console.log('[INFO] {NOTIFService} User profil `latestNotifedISODatetime` updated')) : null),
    // update user `sharedDocument` list data
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(messages => {
      // TODO: update user `sharedDocument` list data using `CeramicService`
    }),
    // clear `messages` BehaviorSubject after XXXXms
    // to avoid displaying the same messages twice
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(messages => {
      if (messages.length > 0) {
        // clear messages
        const t = setTimeout(() => {
          this._messagingService.messages$.next([]);
          clearTimeout(t);
        }, 2500);
      }
    }));
    this.isConnected$ = this._messagingService.isConnected$;
  }
  connect() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionLoading = yield _this._loaderCtrl.create({
        message: `Waiting signature from your wallet to enable notifications...`
      });
      yield ionLoading.present();
      yield _this._messagingService.connect().catch(error => {
        ionLoading.dismiss();
        throw error;
      });
      yield ionLoading.dismiss();
      yield _this._messagingService.loadDatas();
    })();
  }
  disconnect() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._messagingService.disconnect();
    })();
  }
  sendNotification(metaData, senderAddress, destinationAddress, filterKey) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // formating message
      const messageData = {
        metaData,
        senderAddress,
        createdISODateTime: new Date().toISOString()
      };
      // encoding message
      const base64Data = `hexa/${filterKey}:${btoa(JSON.stringify(messageData))}`;
      // send message
      yield _this3._messagingService.sendMessage({
        destinationAddress,
        message: base64Data
      });
      console.log('[INFO] {NotificationService} message sent: ', base64Data);
    })();
  }
  _parseMessage(value) {
    const base64Message = value.replace('hexa/', '');
    const [prefixKey, ...b64messageArray] = base64Message.split(':');
    const jsonMessage = atob(b64messageArray.toString());
    let message;
    let dataMessage;
    try {
      dataMessage = JSON.parse(jsonMessage);
    } catch (error) {
      message = 'Error while parsing message';
      console.log('[ERROR] {NotificationService} _parseMessage: ', error);
      return message;
    }
    switch (true) {
      case prefixKey === 'drive':
        message = `You have a new shared document from ${dataMessage.senderAddress}`;
        break;
      case prefixKey === 'calendar':
        message = `You have a new shared event from ${dataMessage.senderAddress}`;
        break;
      case prefixKey === 'note':
        message = `You have a new shared note from ${dataMessage.senderAddress}`;
        break;
      default:
        message = 'You have a new notification';
    }
    return message;
  }
}
NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_MESSAGING_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)));
};
NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac
});

/***/ }),

/***/ 42868:
/*!*********************************************************!*\
  !*** ./apps/browser/src/app/services/pinata.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinataService": () => (/* binding */ PinataService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);






class PinataService {
  constructor() {
    this.defaultConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_PINNING_SERVICE_DEFAULT_CONFIG));
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WEB3AUTH_SERVICE));
  }
  pin(cid) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profile = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.authService.profile$);
      const url = 'https://api.pinata.cloud/pinning/pinByHash';
      const token = profile?.ipfsConfig?.token || _this.defaultConfig.token;
      if (!url || !token) {
        throw new Error('Pinata IPFS pinning service is not configured');
      }
      const body = JSON.stringify({
        hashToPin: cid
      });
      const config = {
        method: 'POST',
        body,
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      };
      yield fetch(url, config).then(res => res.json()).catch(err => {
        throw err;
      });
    })();
  }
  unpin(cid) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profile = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.authService.profile$);
      const url = `https://api.pinata.cloud/pinning/unpin/${cid}`;
      const token = profile?.ipfsConfig?.token || _this2.defaultConfig.token;
      if (!url || !token) {
        throw new Error('Pinata IPFS pinning service is not configured');
      }
      const config = {
        method: 'DELETE',
        headers: new Headers({
          Authorization: `Bearer ${token}`
        })
      };
      yield fetch(url, config).catch(err => {
        throw err;
      });
    })();
  }
}
PinataService.ɵfac = function PinataService_Factory(t) {
  return new (t || PinataService)();
};
PinataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PinataService,
  factory: PinataService.ɵfac
});

/***/ }),

/***/ 59096:
/*!******************************************************************!*\
  !*** ./apps/browser/src/app/services/prompt-strategy.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptStrategyService": () => (/* binding */ PromptStrategyService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PromptStrategyService {
  askSetupService(serviceName) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const valueExist = Boolean(serviceName);
      console.log('valueExist', valueExist, serviceName);
      const isNotDefaultService = valueExist && serviceName && !serviceName.includes('default');
      if (isNotDefaultService) {
        return;
      }
      const userWantSetup = yield _this._promptInfos().then(r => r === 'ok');
      if (!userWantSetup) {
        return;
      }
      const {
        role,
        data: {
          values: selectedService
        } = {}
      } = yield _this._promptSelectService();
      if (!selectedService || role !== 'ok') {
        return;
      }
      const {
        data: {
          values: apiConfig
        },
        role: promptAPIKeys
      } = yield _this._promptAPIKeys(selectedService);
      if (promptAPIKeys !== 'ok') {
        return;
      }
      return {
        ...apiConfig,
        serviceName: selectedService
      };
    })();
  }
  _promptInfos() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ctrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController();
      const alertUI = yield ctrl.create({
        header: `Configure pinning service`,
        subHeader: `This app is using IPFS to store your data and delegate to external service to pin your data on the IPFS network.`,
        message: 'Do you want to configure the pinning service with your own account? If not, the default service will be used and your data will be stored on the IPFS network and pinned by the default service but this will not guarantee the long term availability of your data.',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Yes',
          role: 'ok'
        }]
      });
      yield alertUI.present();
      const {
        role
      } = yield alertUI.onDidDismiss();
      return role;
    })();
  }
  _promptSelectService() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ctrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController();
      const alertUI = yield ctrl.create({
        header: `Select pinning service`,
        message: `You can select the pinning service you want to use to pin your data on the IPFS network. If you don't know what to choose, just "Pinata" the default service and go create an account on <a href="https://pinata.cloud" target="_blank">https://pinata.cloud</a>. to get your own API key.`,
        inputs: [{
          name: 'pinata',
          type: 'radio',
          label: 'Pinata',
          value: 'pinata',
          checked: true
        }, {
          name: 'web3.storage',
          type: 'radio',
          label: 'Web3.Storage',
          value: 'web3.storage'
        }],
        mode: 'ios',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          role: 'ok'
        }]
      });
      yield alertUI.present();
      return yield alertUI.onDidDismiss();
    })();
  }
  _promptAPIKeys(serviceName) {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const availableService = [{
        name: 'pinata',
        url: 'https://pinata.cloud'
      }, {
        name: 'web3.storage',
        url: 'https://web3.storage/'
      }];
      const urlAPI = availableService.find(s => s.name === serviceName)?.url;
      const ctrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController();
      const alertUI = yield ctrl.create({
        header: `Configure pinning service`,
        subHeader: `Please enter your API keys to configure the pinning service.`,
        message: `You can get it by creating an free account on <a href="${urlAPI}" target="_blank">${urlAPI}</a>.`,
        inputs: [{
          name: 'token',
          type: 'text',
          placeholder: 'API Token'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          role: 'ok'
        }]
      });
      yield alertUI.present();
      return yield alertUI.onDidDismiss();
    })();
  }
}
PromptStrategyService.ɵfac = function PromptStrategyService_Factory(t) {
  return new (t || PromptStrategyService)();
};
PromptStrategyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PromptStrategyService,
  factory: PromptStrategyService.ɵfac
});

/***/ }),

/***/ 80595:
/*!************************************************************!*\
  !*** ./apps/browser/src/app/services/web3-auth.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3AuthService": () => (/* binding */ Web3AuthService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ 60352);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magic-sdk */ 10389);
/* harmony import */ var _magic_ext_webauthn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @magic-ext/webauthn */ 87819);
/* harmony import */ var _metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metamask/eth-sig-util */ 95527);
/* harmony import */ var _metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _ceramicnetwork_3id_did_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ceramicnetwork/3id-did-resolver */ 59304);
/* harmony import */ var _ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ceramicnetwork/stream-caip10-link */ 33783);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);















const DB_NAME = 'hexa';
const MAINNET_RPC_URL = 'https://rpc.ankr.com/eth';
const MATIC_RPC_URL = 'https://matic-mainnet.chainstacklabs.com';
class Web3AuthService {
  constructor(_router, _route, _msgService, _did, _ceramic, _datastore, _authApiKey) {
    this._router = _router;
    this._route = _route;
    this._msgService = _msgService;
    this._did = _did;
    this._ceramic = _ceramic;
    this._datastore = _datastore;
    this._authApiKey = _authApiKey;
    this.ethereumProvider$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.signer$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.account$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.profile$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.magic = this._magicWeb3();
    this.did$ = this._did.did$;
    this.isWaiting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false); // used by app guard to prevent navigation while waiting for wallet connection
  }

  connect(accountToConnect) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isWaiting$.next(true);
      // await this._connectWithOnboard();
      const {
        account,
        provider
      } = yield _this._connectWithMagic(accountToConnect);
      console.log('[INFO] Connected with Magic', {
        account,
        provider
      });
      const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_7__.Web3Provider(provider, 'any');
      // verify signature
      const isOwner = yield _this.signAndVerify(ethersProvider.getSigner(), account);
      if (!isOwner) {
        _this.isWaiting$.next(false);
        yield _this.disconnect();
        throw new Error('User is not owner of this wallet. Unable to verify signature.');
      }
      yield _this._connectDID(provider, account);
      console.log('[INFO] Connected DID with Ethers provider:', {
        ethersProvider
      });
      // update profile or set default profile if not exist
      yield _this.updateProfilData({
        latestConnectionISODatetime: new Date().toISOString()
      });
      console.log('[INFO] Updated user profil data.');
      // update state
      _this.ethereumProvider$.next(ethersProvider);
      _this.signer$.next(ethersProvider.getSigner());
      _this.account$.next(account);
      _this.isWaiting$.next(false);
      // try listen events wallet
      ethersProvider.on('accountsChanged', /*#__PURE__*/function () {
        var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (accounts) {
          console.log('[INFO] Accounts changed', accounts);
          yield _this.disconnect();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      ethersProvider.on("network", /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (newNetwork, oldNetwork) {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
            yield _this.disconnect();
          }
        });
        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }());
      yield _this._connectOthersServices();
      return Boolean(account);
    })();
  }
  connectWallet(address) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.connect(address);
    })();
  }
  disconnect() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('[INFO] Disconnecting wallet');
      yield _this3.magic.wallet.disconnect();
      window.localStorage.removeItem('connectedWallets');
      _this3.signer$.next(null);
      _this3.account$.next(null);
      _this3.profile$.next(null);
      _this3._did.did$.next(null);
      _this3.isWaiting$.next(false);
      // this.unsubscribe();
      _this3._redirectToRoot();
    })();
  }
  getAccountDID(address, chainParam = 'eip155:1') {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const link = yield _ceramicnetwork_stream_caip10_link__WEBPACK_IMPORTED_MODULE_8__.Caip10Link.fromAccount(_this4._ceramic, `${address}@${chainParam}`);
      if (link.did == null) {
        throw new Error(`No DID found for ${address}`);
      }
      return link.did;
    })();
  }
  signAndVerify(signer, account) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const message = 'hexa authentication with wallet signature.';
      const signedMessage = yield signer.signMessage(message).catch( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this5.disconnect();
          throw error;
        });
        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }());
      // recover the public address of the signer to verify
      const recoveredAddress = (0,_metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_3__.recoverPersonalSignature)({
        data: message,
        signature: signedMessage
      });
      return recoveredAddress.toLocaleLowerCase() === account.toLocaleLowerCase();
    })();
  }
  _connectDID(provider, accountAddress) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // connect DID service
      const isDIDConnected = yield _this6._did.connectWallet(provider, accountAddress).then(() => true).catch(error => error);
      // set resolver
      console.log('[INFO] Set resolver');
      const resolvers = {
        ...(0,_ceramicnetwork_3id_did_resolver__WEBPACK_IMPORTED_MODULE_9__.getResolver)(_this6._ceramic)
      };
      const did = _this6._did.did$.value;
      did.setResolver(resolvers);
      console.log('[INFO] Authenticate with DID provider');
      // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
      // authentication flow using 3ID Connect and the Ethereum provider
      const isAuth = yield did.authenticate();
      _this6._ceramic.did = did;
      console.log('[INFO] DID ', isAuth);
      // throw error if DID connection failed
      if (!isDIDConnected || isDIDConnected instanceof Error) {
        yield _this6.disconnect();
        _this6.isWaiting$.next(false);
        throw Error(isDIDConnected instanceof Error ? isDIDConnected.message || 'Could not connect wallet to DID service.' : 'Could not connect wallet to DID service.');
      }
    })();
  }
  _connectWithMagic(accountToConnect) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = _this7.magic.rpcProvider;
      if (accountToConnect) {
        return {
          account: accountToConnect,
          provider
        };
      }
      const accounts = yield _this7.magic.wallet.connectWithUI();
      const account = accounts[0];
      // set local storage
      window.localStorage.setItem('connectedWallets', JSON.stringify(accounts));
      return {
        account,
        provider
      };
    })();
  }
  _magicWeb3() {
    const customNodeOptions = {
      rpcUrl: MAINNET_RPC_URL,
      chainId: 1 // corresponding chainId for your rpc url
    };

    const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_1__.Magic(this._authApiKey, {
      network: customNodeOptions,
      extensions: [new _magic_ext_webauthn__WEBPACK_IMPORTED_MODULE_2__.WebAuthnExtension()]
    });
    return magic;
  }
  /**
   * Method that check the current route and redirect to root if the route is not the root
   */
  _redirectToRoot() {
    if (this._router.url !== '/') {
      this._router.navigate(['/'], {
        relativeTo: this._route
      });
    }
  }
  _connectOthersServices() {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        latestConnectionISODatetime,
        latestNotifedISODatetime
      } = yield _this8.getProfilData();
      const mostRecentDate = [latestConnectionISODatetime, latestNotifedISODatetime].filter(Boolean).sort((a, b) => (b ? new Date(b).getTime() : new Date().getTime()) - (a ? new Date(a).getTime() : new Date().getTime())).shift();
      // build options for xmtp messages fetching
      // this will only return messages that are newer than the `mostRecentDate` constante
      const opts = mostRecentDate ? {
        startTime: new Date(mostRecentDate),
        endTime: new Date()
      } : undefined;
      const provider = _this8.ethereumProvider$.value;
      // this will only init the service and not connect the wallet
      if (_this8._msgService.init) {
        yield _this8._msgService.init(provider, {
          ...opts
          // startTime: new Date('2023-01-01'),
        });
      }
    })();
  }

  getProfilData() {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profil = yield _this9._datastore.getData(DB_NAME,
      // database name
      ['basicProfile'],
      // datbase collections
      // default values if database is empty
      {
        latestConnectionISODatetime: new Date('2000-01-01').toISOString(),
        latestNotifedISODatetime: new Date('2000-01-01').toISOString(),
        creationISODatetime: new Date().toISOString()
      });
      _this9.profile$.next(profil);
      return profil;
    })();
  }
  updateProfilData(data) {
    var _this10 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profil = _this10.profile$.value || (yield _this10.getProfilData());
      const result = yield _this10._datastore.saveData({
        ...profil,
        ...data
      }, DB_NAME,
      // database name
      ['basicProfile'] // datbase collections,
      );

      _this10.profile$.next(result);
      return result;
    })();
  }
}
Web3AuthService.ɵfac = function Web3AuthService_Factory(t) {
  return new (t || Web3AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_MESSAGING_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_DID_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_CERAMIC_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_AUTH_APIKEY)));
};
Web3AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: Web3AuthService,
  factory: Web3AuthService.ɵfac
});

/***/ }),

/***/ 73519:
/*!**************************************************************!*\
  !*** ./apps/browser/src/app/services/web3storage.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3storageService": () => (/* binding */ Web3storageService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hexa/token-injection */ 8396);





class Web3storageService {
  constructor() {
    this._authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_2__.TOKENS_NAME.APP_WEB3AUTH_SERVICE));
  }
  pin(cid) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profile = _this._authService.profile$.value;
      const token = profile?.ipfsConfig?.token;
      const url = 'https://api.web3.storage/pins';
      if (!url || !token) {
        throw new Error('IPFS pinning service is not configured');
      }
      const body = JSON.stringify({
        "cid": cid
      });
      const config = {
        method: 'POST',
        body,
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      };
      yield fetch(url, config).then(res => res.json()).catch(err => {
        throw err;
      });
    })();
  }
  unpin(cid) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profile = _this2._authService.profile$.value;
      const token = profile?.ipfsConfig?.token;
      const url = `https://api.web3.storage/pins'/${cid}`;
      if (!url || !token) {
        throw new Error('IPFS pinning service is not configured');
      }
      const config = {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': `Bearer ${token}`
        })
      };
      yield fetch(url, config).catch(err => {
        throw err;
      });
    })();
  }
}
Web3storageService.ɵfac = function Web3storageService_Factory(t) {
  return new (t || Web3storageService)();
};
Web3storageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: Web3storageService,
  factory: Web3storageService.ɵfac
});

/***/ }),

/***/ 8325:
/*!*******************************************************!*\
  !*** ./apps/browser/src/app/services/xmtp.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XMTPService": () => (/* binding */ XMTPService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _xmtp_xmtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xmtp/xmtp-js */ 5778);
/* harmony import */ var _xmtp_xmtp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xmtp_xmtp_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hexa/token-injection */ 8396);








class XMTPService {
  constructor() {
    this.messages$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this._ops = undefined;
    this._conversations = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this._xmtp = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.isConnected$ = this._xmtp.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(xmtp => Boolean(xmtp)));
    this._isProduction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_4__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_4__.TOKENS_NAME.APP_IS_PROD));
  }
  init(web3Provider, ops = undefined) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._web3Provider = web3Provider;
      _this._ops = ops;
    })();
  }
  connect() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._web3Provider) {
        throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
      }
      // Create the client with your wallet.
      // This will connect to the XMTP development network by default
      const xmtp = yield _xmtp_xmtp_js__WEBPACK_IMPORTED_MODULE_2__.Client.create(_this2._web3Provider.getSigner(), {
        env: _this2._isProduction ? 'production' : 'dev'
      });
      console.log('[INFO] {XMTPService} XMTP client created successfully');
      _this2._xmtp.next(xmtp);
    })();
  }
  loadDatas(opts = this._ops) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        conversationId = undefined,
        ...options
      } = opts || {};
      const {
        conversations = []
      } = yield _this3._getConversations(conversationId);
      _this3._conversations.next(conversations);
      const messages = yield _this3._getPreviousMessagesFromExistingConverstion(options);
      _this3.messages$.next(messages);
      _this3._listenAllUpcomingMessages();
    })();
  }
  disconnect() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const xmtp = _this4._xmtp.getValue();
      if (!xmtp) {
        return;
      }
      yield xmtp.close();
      _this4._xmtp.next(null);
    })();
  }
  sendMessage(ops) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5._web3Provider) {
        throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
      }
      const {
        destinationAddress,
        message
      } = ops;
      const {
        value: conversations = []
      } = _this5._conversations;
      let conversation = conversations.find(c => c.peerAddress === destinationAddress);
      if (!conversation) {
        const {
          conversation: newConversation
        } = yield _this5._startNewConversation(destinationAddress);
        conversation = newConversation;
      }
      if (!conversation) {
        throw 'Error while creating conversation';
      }
      // await conversation.send(message);
    })();
  }

  _startNewConversation(address, conversationId = 'hexa') {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6._web3Provider) {
        throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
      }
      let xmtp = _this6._xmtp.getValue();
      if (!xmtp) {
        yield _this6.connect();
        xmtp = _this6._xmtp.getValue();
      }
      const conversation = yield xmtp.conversations.newConversation(address, {
        conversationId,
        metadata: {}
      }).catch(e => {
        throw e?.message || `Failed to start conversation with ${address}`;
      });
      // this._addListener(conversation);
      _this6._conversations.next([..._this6._conversations.getValue(), conversation]);
      return {
        conversation
      };
    })();
  }
  _getConversations(conversationId = 'hexa') {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7._web3Provider) {
        throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
      }
      let xmtp = _this7._xmtp.getValue();
      if (!xmtp) {
        yield _this7.connect();
        xmtp = _this7._xmtp.getValue();
      }
      const allConversations = yield xmtp.conversations.list();
      const conversations = allConversations.filter(convo => convo.context?.conversationId && convo.context.conversationId.startsWith(conversationId));
      return {
        conversations
      };
    })();
  }
  _getPreviousMessagesFromExistingConverstion(opts) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const xmtp = _this8._xmtp.value;
      const messages = [];
      const conversations = _this8._conversations.getValue();
      console.log('[INFO] {XMTPService} Conversations', conversations, opts);
      for (const conversation of conversations) {
        // All parameters are optional and can be omitted
        opts = opts ? opts : {
          // Only show messages from last 24 hours
          startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
          endTime: new Date()
        };
        // get messages from conversation
        const messagesInConversation = yield conversation.messages(opts).then(messages => {
          // filter out messages from self and return
          return messages.filter(message => message.senderAddress !== xmtp.address);
        });
        // add conversation and messages to messages array
        if (messagesInConversation.length > 0) {
          messages.push({
            conversation,
            messagesInConversation
          });
        }
      }
      ;
      console.log('[INFO] {XMTPService} Messages', messages);
      return messages;
    })();
  }
  _listenAllUpcomingMessages() {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this9._web3Provider) {
        throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
      }
      const xmtp = _this9._xmtp.value;
      // Listen for new messages in existing conversations and new conversations
      const streamAllMessages = yield xmtp.conversations.streamAllMessages();
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(streamAllMessages), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
          const message = _step.value;
          {
            // filter out messages from self
            if (message.senderAddress !== xmtp.address) {
              console.log(`[INFO] {XMTPService} New message received from ${message.senderAddress}: #${message?.id} ${message?.content}`);
              _this9.messages$.next([..._this9.messages$.getValue(), {
                messagesInConversation: [message]
              }]);
            }
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })();
  }
}
XMTPService.ɵfac = function XMTPService_Factory(t) {
  return new (t || XMTPService)();
};
XMTPService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: XMTPService,
  factory: XMTPService.ɵfac
});

/***/ }),

/***/ 97969:
/*!****************************************************************!*\
  !*** ./apps/browser/src/app/strategies/encryption.strategy.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptionStrategy": () => (/* binding */ EncryptionStrategy)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/**
 * Strategy pattern for encryption and decryption services
 */
class EncryptionStrategy {
  setStrategy(lib) {
    this._lib = lib;
  }
  encryptData(data, authorizedIDs = []) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._lib.encryptData(data, authorizedIDs);
    })();
  }
  decryptData(data) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2._lib.decryptData(data);
    })();
  }
}

/***/ }),

/***/ 31654:
/*!**************************************************!*\
  !*** ./apps/browser/src/app/strategies/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptionStrategy": () => (/* reexport safe */ _encryption_strategy__WEBPACK_IMPORTED_MODULE_0__.EncryptionStrategy),
/* harmony export */   "IPFSPinningStrategy": () => (/* reexport safe */ _ipfs_pinning_strategy__WEBPACK_IMPORTED_MODULE_1__.IPFSPinningStrategy)
/* harmony export */ });
/* harmony import */ var _encryption_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryption.strategy */ 97969);
/* harmony import */ var _ipfs_pinning_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipfs-pinning.strategy */ 40558);



/***/ }),

/***/ 40558:
/*!******************************************************************!*\
  !*** ./apps/browser/src/app/strategies/ipfs-pinning.strategy.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPFSPinningStrategy": () => (/* binding */ IPFSPinningStrategy)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/interfaces */ 53870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



/**
 * Strategy pattern for IPFS Pinning services
 */
class IPFSPinningStrategy extends _hexa_interfaces__WEBPACK_IMPORTED_MODULE_1__.Strategy {
  constructor(libs) {
    super();
    this.strategyType = 'ipfs-pinning';
    this.AVAILABLE_STRATEGY = libs;
  }
  setStrategy(name) {
    const lib = this.AVAILABLE_STRATEGY.get(name);
    if (!lib) {
      throw new Error(`Unsupported strategy: [${name}]. Please check the available strategies and try again.`);
    }
    super.setStrategy(lib);
  }
  pin(hash) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._lib.pin(hash);
    })();
  }
  unpin(hash) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2._lib.unpin(hash);
    })();
  }
}
IPFSPinningStrategy.ɵfac = function IPFSPinningStrategy_Factory(t) {
  return new (t || IPFSPinningStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](Map));
};
IPFSPinningStrategy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IPFSPinningStrategy,
  factory: IPFSPinningStrategy.ɵfac
});

/***/ }),

/***/ 67665:
/*!******************************************************!*\
  !*** ./apps/browser/src/environments/environment.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  version: "0.0.17",
  production: true,
  defaultChain: 'ethereum',
  ipfs: {
    pinning_service_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzODE0YTYyMC1hNmQyLTRmOTUtYTYyYi1kNGUyODc2ZWM5N2IiLCJlbWFpbCI6ImNvbnRhY3RAbmljb2xhc2ZhemlvLmNoIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjQ0OTVlZDVjZDUzYmVmNzhmMzRkIiwic2NvcGVkS2V5U2VjcmV0IjoiMGIzNmQ2MzljNmZhNzVjN2JhNWVkZjk0ODhhMjg1YWQxYjBlNDVjYzg3ZDBlN2U1YjVkMDg4MGY3Y2I0Mzk5NyIsImlhdCI6MTY2MzcwMTI2NH0.Purlvi6kFetgxIYqEkYnth_TU9Fq_yAJ56W-ZOoYT1A",
    pinning_service_endpoint: "https://api.pinata.cloud/pinning/pinByHash",
    unpinning_service_endpoint: "https://api.pinata.cloud/pinning/unpin",
    api_endpoint: "https://ceramic-clay.3boxlabs.com"
  },
  auth: {
    apikey: "pk_live_14CF924A984BA93D"
  },
  wallet_service_apikey: "ckey_6cf893a95c854a3c8a80dda86a4",
  availableChainsId: {
    // ETH
    '1': 'ethereum' // mainnet
    // '3': 'ropsten',
    // '4': 'rinkeby',
    // POLYGON
    // '89': 'polygon', // mainnet
    // '13881': 'mumbai',
    // BNB
    // '38': 'binance smart chain', // mainnet
    // '61': 'binance smart chain testnet',
  }
};

/***/ }),

/***/ 40402:
/*!**********************************!*\
  !*** ./apps/browser/src/main.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 5133);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 67665);





const disableConsole = () => {
  // disabling console.log in production
  window.console.log = (...data) => ({});
  // disabling console.warn in production
  window.console.warn = (...data) => ({});
  // disabling console.error in production
  window.console.error = (...data) => ({});
  // disabling console.info in production
  window.console.info = (...data) => ({});
  // disabling console.debug in production
  window.console.debug = (...data) => ({});
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
  disableConsole();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
// Call the element loader after the platform has been bootstrapped
.then(() => (0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window))
// Global handler for unhandled promise rejections
.catch(err => console.error(err));

/***/ }),

/***/ 53870:
/*!**************************************!*\
  !*** ./libs/interfaces/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__.Strategy)
/* harmony export */ });
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces */ 20384);


/***/ }),

/***/ 59259:
/*!*******************************************************!*\
  !*** ./libs/interfaces/src/lib/abstracts/strategy.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
class Strategy {
  setStrategy(lib) {
    this._lib = lib;
  }
}

/***/ }),

/***/ 20384:
/*!***********************************************!*\
  !*** ./libs/interfaces/src/lib/interfaces.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* reexport safe */ _abstracts_strategy__WEBPACK_IMPORTED_MODULE_10__.Strategy)
/* harmony export */ });
/* harmony import */ var _services_datastore_service_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/datastore-service.interface */ 57373);
/* harmony import */ var _services_identity_service_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/identity-service.interface */ 71655);
/* harmony import */ var _services_ipfs_service_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ipfs-service.interface */ 96474);
/* harmony import */ var _services_pining_service_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/pining-service.interface */ 81214);
/* harmony import */ var _services_auth_service_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-service.interface */ 84024);
/* harmony import */ var _services_encryption_service_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/encryption-service.interface */ 72300);
/* harmony import */ var _services_notification_service_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/notification-service.interface */ 91040);
/* harmony import */ var _services_loading_service_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/loading-service.interface */ 36436);
/* harmony import */ var _services_messaging_service_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/messaging-service.interface */ 90603);
/* harmony import */ var _services_prompt_strategy_service_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/prompt-strategy-service.interface */ 30453);
/* harmony import */ var _abstracts_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abstracts/strategy */ 59259);












/***/ }),

/***/ 84024:
/*!********************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/auth-service.interface.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 57373:
/*!*************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/datastore-service.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 72300:
/*!**************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/encryption-service.interface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 71655:
/*!************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/identity-service.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 96474:
/*!********************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/ipfs-service.interface.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 36436:
/*!***********************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/loading-service.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90603:
/*!*************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/messaging-service.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 91040:
/*!****************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/notification-service.interface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 81214:
/*!**********************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/pining-service.interface.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 30453:
/*!*******************************************************************************!*\
  !*** ./libs/interfaces/src/lib/services/prompt-strategy-service.interface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8396:
/*!*******************************************!*\
  !*** ./libs/token-injection/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOKENS_NAME": () => (/* reexport safe */ _lib_token_enum__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME),
/* harmony export */   "getInjectionToken": () => (/* reexport safe */ _lib_token_injection__WEBPACK_IMPORTED_MODULE_0__.getInjectionToken)
/* harmony export */ });
/* harmony import */ var _lib_token_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/token-injection */ 30088);
/* harmony import */ var _lib_token_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/token.enum */ 14153);



/***/ }),

/***/ 30088:
/*!*********************************************************!*\
  !*** ./libs/token-injection/src/lib/token-injection.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInjectionToken": () => (/* binding */ getInjectionToken)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const APP_DID_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_DID_SERVICE');
const APP_WEB3AUTH_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_WEB3AUTH_SERVICE');
const APP_PINNING_SERVICE_DEFAULT_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_PINNING_SERVICE_DEFAULT_CONFIG');
const APP_WALLET_SERVICE_APIKEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_WALLET_SERVICE_APIKEY');
const APP_MESSAGING_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_MESSAGING_SERVICE');
const APP_NOTIFICATION_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_NOTIFICATION_SERVICE');
const APP_CERAMIC_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_CERAMIC_SERVICE');
const APP_DATASTORE_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_DATASTORE_SERVICE');
const APP_DID_ENCRYPTION_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_DID_ENCRYPTION_SERVICE');
const APP_ENCRYPTION_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_ENCRYPTION_SERVICE');
const APP_IS_PROD_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_IS_PROD');
const APP_LOADER_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_LOADER_SERVICE');
const APP_PINATA_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_PINATA_SERVICE');
const APP_WEB3STORAGE_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_WEB3STORAGE_SERVICE');
const APP_IPFS_PINNING_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_IPFS_PINNING_SERVICE');
const APP_IPFS_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_IPFS_SERVICE');
const APP_PROMPT_STRATEGY_SERVICE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_PROMPT_STRATEGY_SERVICE');
const APP_AUTH_APIKEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('APP_AUTH_APIKEY');
const TOKENS_MAP = new Map();
TOKENS_MAP.set('APP_DID_SERVICE', APP_DID_SERVICE_TOKEN);
TOKENS_MAP.set('APP_WEB3AUTH_SERVICE', APP_WEB3AUTH_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PINNING_SERVICE_DEFAULT_CONFIG', APP_PINNING_SERVICE_DEFAULT_CONFIG_TOKEN);
TOKENS_MAP.set('APP_WALLET_SERVICE_APIKEY', APP_WALLET_SERVICE_APIKEY_TOKEN);
TOKENS_MAP.set('APP_MESSAGING_SERVICE', APP_MESSAGING_SERVICE_TOKEN);
TOKENS_MAP.set('APP_NOTIFICATION_SERVICE', APP_NOTIFICATION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_CERAMIC_SERVICE', APP_CERAMIC_SERVICE_TOKEN);
TOKENS_MAP.set('APP_DATASTORE_SERVICE', APP_DATASTORE_SERVICE_TOKEN);
TOKENS_MAP.set('APP_DID_ENCRYPTION_SERVICE', APP_DID_ENCRYPTION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_ENCRYPTION_SERVICE', APP_ENCRYPTION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IS_PROD', APP_IS_PROD_TOKEN);
TOKENS_MAP.set('APP_LOADER_SERVICE', APP_LOADER_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PINATA_SERVICE', APP_PINATA_SERVICE_TOKEN);
TOKENS_MAP.set('APP_WEB3STORAGE_SERVICE', APP_WEB3STORAGE_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IPFS_PINNING_SERVICE', APP_IPFS_PINNING_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IPFS_SERVICE', APP_IPFS_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PROMPT_STRATEGY_SERVICE', APP_PROMPT_STRATEGY_SERVICE_TOKEN);
TOKENS_MAP.set('APP_AUTH_APIKEY', APP_AUTH_APIKEY_TOKEN);
function getInjectionToken(tokenName) {
  return TOKENS_MAP.get(tokenName);
}

/***/ }),

/***/ 14153:
/*!****************************************************!*\
  !*** ./libs/token-injection/src/lib/token.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOKENS_NAME": () => (/* binding */ TOKENS_NAME)
/* harmony export */ });
var TOKENS_NAME = /*#__PURE__*/(() => {
  (function (TOKENS_NAME) {
    TOKENS_NAME["APP_DID_SERVICE"] = "APP_DID_SERVICE";
    TOKENS_NAME["APP_WEB3AUTH_SERVICE"] = "APP_WEB3AUTH_SERVICE";
    TOKENS_NAME["APP_PINNING_SERVICE_DEFAULT_CONFIG"] = "APP_PINNING_SERVICE_DEFAULT_CONFIG";
    TOKENS_NAME["APP_WALLET_SERVICE_APIKEY"] = "APP_WALLET_SERVICE_APIKEY";
    TOKENS_NAME["APP_MESSAGING_SERVICE"] = "APP_MESSAGING_SERVICE";
    TOKENS_NAME["APP_NOTIFICATION_SERVICE"] = "APP_NOTIFICATION_SERVICE";
    TOKENS_NAME["APP_CERAMIC_SERVICE"] = "APP_CERAMIC_SERVICE";
    TOKENS_NAME["APP_DATASTORE_SERVICE"] = "APP_DATASTORE_SERVICE";
    TOKENS_NAME["APP_DID_ENCRYPTION_SERVICE"] = "APP_DID_ENCRYPTION_SERVICE";
    TOKENS_NAME["APP_ENCRYPTION_SERVICE"] = "APP_ENCRYPTION_SERVICE";
    TOKENS_NAME["APP_IS_PROD"] = "APP_IS_PROD";
    TOKENS_NAME["APP_LOADER_SERVICE"] = "APP_LOADER_SERVICE";
    TOKENS_NAME["APP_PINATA_SERVICE"] = "APP_PINATA_SERVICE";
    TOKENS_NAME["APP_WEB3STORAGE_SERVICE"] = "APP_WEB3STORAGE_SERVICE";
    TOKENS_NAME["APP_IPFS_PINNING_SERVICE"] = "APP_IPFS_PINNING_SERVICE";
    TOKENS_NAME["APP_IPFS_SERVICE"] = "APP_IPFS_SERVICE";
    TOKENS_NAME["APP_PROMPT_STRATEGY_SERVICE"] = "APP_PROMPT_STRATEGY_SERVICE";
    TOKENS_NAME["APP_AUTH_APIKEY"] = "APP_AUTH_APIKEY";
  })(TOKENS_NAME || (TOKENS_NAME = {}));
  return TOKENS_NAME;
})();

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		8592,
		79
	],
	"./ion-action-sheet.entry.js": [
		25593,
		8592,
		5593
	],
	"./ion-alert.entry.js": [
		13225,
		8592,
		3225
	],
	"./ion-app_8.entry.js": [
		4812,
		8592,
		4812
	],
	"./ion-avatar_3.entry.js": [
		86655,
		6655
	],
	"./ion-back-button.entry.js": [
		44856,
		8592,
		4856
	],
	"./ion-backdrop.entry.js": [
		13059,
		3059
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		8592,
		8648
	],
	"./ion-button_2.entry.js": [
		98308,
		8308
	],
	"./ion-card_5.entry.js": [
		44690,
		4690
	],
	"./ion-checkbox.entry.js": [
		64090,
		4090
	],
	"./ion-chip.entry.js": [
		36214,
		6214
	],
	"./ion-col_3.entry.js": [
		69447,
		9447
	],
	"./ion-datetime-button.entry.js": [
		17950,
		9022,
		7950
	],
	"./ion-datetime_3.entry.js": [
		79689,
		9022,
		8592,
		9689
	],
	"./ion-fab_3.entry.js": [
		18840,
		8592,
		8840
	],
	"./ion-img.entry.js": [
		40749,
		749
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		8592,
		9667
	],
	"./ion-input.entry.js": [
		83288,
		8592,
		3288
	],
	"./ion-item-option_3.entry.js": [
		35473,
		8592,
		5473
	],
	"./ion-item_8.entry.js": [
		53634,
		8592,
		3634
	],
	"./ion-loading.entry.js": [
		22855,
		2855
	],
	"./ion-menu_3.entry.js": [
		495,
		8592,
		495
	],
	"./ion-modal.entry.js": [
		58737,
		8592,
		8737
	],
	"./ion-nav_2.entry.js": [
		99632,
		8592,
		9632
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		8592,
		4446
	],
	"./ion-picker-internal.entry.js": [
		32275,
		2275
	],
	"./ion-popover.entry.js": [
		48050,
		8592,
		8050
	],
	"./ion-progress-bar.entry.js": [
		18994,
		8994
	],
	"./ion-radio_2.entry.js": [
		23592,
		3592
	],
	"./ion-range.entry.js": [
		35454,
		8592,
		5454
	],
	"./ion-refresher_2.entry.js": [
		290,
		8592,
		290
	],
	"./ion-reorder_2.entry.js": [
		92666,
		8592,
		2666
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		4816
	],
	"./ion-route_4.entry.js": [
		45534,
		5534
	],
	"./ion-searchbar.entry.js": [
		94902,
		8592,
		4902
	],
	"./ion-segment_2.entry.js": [
		91938,
		8592,
		1938
	],
	"./ion-select_3.entry.js": [
		78179,
		8179
	],
	"./ion-slide_2.entry.js": [
		90668,
		668
	],
	"./ion-spinner.entry.js": [
		61624,
		8592,
		1624
	],
	"./ion-split-pane.entry.js": [
		19989,
		9989
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		8592,
		8902
	],
	"./ion-tab_2.entry.js": [
		70199,
		8592,
		199
	],
	"./ion-text.entry.js": [
		48395,
		8395
	],
	"./ion-textarea.entry.js": [
		96357,
		6357
	],
	"./ion-toast.entry.js": [
		38268,
		8268
	],
	"./ion-toggle.entry.js": [
		15269,
		8592,
		5269
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		2875
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		5464
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		8724
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		8145
	],
	"./pwa-camera.entry.js": [
		30527,
		527
	],
	"./pwa-toast.entry.js": [
		44389,
		4389
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 993:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 80950:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 96419:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56353:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69386:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52596:
/*!*****************************************************!*\
  !*** ipfs-utils/src/files/glob-source.js (ignored) ***!
  \*****************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 63897:
/*!*****************************************************!*\
  !*** ipfs-utils/src/files/glob-source.js (ignored) ***!
  \*****************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 81265:
/*!*************************!*\
  !*** cluster (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69862:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 40964:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4736], () => (__webpack_exec__(40402)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.b303d12961b8a3a9.js.map