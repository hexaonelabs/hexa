"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[2745],{

/***/ 2745:
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* reexport safe */ _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule),
/* harmony export */   "authRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.authRoutes)
/* harmony export */ });
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ 28672);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 78410);



/***/ }),

/***/ 28672:
/*!******************************************!*\
  !*** ./libs/auth/src/lib/auth.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 78410);
/* harmony import */ var _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/login/login-page.component */ 86491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.authRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 86491:
/*!********************************************************************!*\
  !*** ./libs/auth/src/lib/containers/login/login-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







function LoginPageComponent_ion_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_15_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.connectWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r2.isLoaderVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r2.isLoaderVisible$) === true ? "Loading..." : "Connect");
  }
}
function LoginPageComponent_ion_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_63_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_65_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.connectWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r5.isLoaderVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r5.isLoaderVisible$) === true ? "Loading..." : "Get Started");
  }
}
class LoginPageComponent {
  constructor(loaderService, _authService, _router) {
    this.loaderService = loaderService;
    this._authService = _authService;
    this._router = _router;
    this.title = 'Login Page ';
    this.account$ = this._authService.account$;
    this.isLoaderVisible$ = this.loaderService.isVisible$;
  }
  connectWallet() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loaderService.setStatus(true);
      const isConnected = yield _this._authService.connect();
      if (isConnected) {
        // const profil = await this._datastoreService.getProfileFromCeramic();
        // console.log('[INFO] Ceramic profil', profil);
        _this._router.navigate(['/d']);
      }
      _this.loaderService.setStatus(false);
    })();
  }
  disconnect() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loaderService.setStatus(true);
      _this2._authService.disconnect();
      _this2.loaderService.setStatus(false);
    })();
  }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["hexa-login-page"]],
  decls: 80,
  vars: 8,
  consts: [[1, "ion-no-padding"], ["lines", "none", 1, "logo-header"], ["slot", "start", "src", "./assets/images/logo.svg", "size", "large"], ["lines", "none", 1, "link-header"], ["rel", "noopener", "target", "_blank", "href", "https://github.com/hexaone-labs/hexa"], ["color", "light", "slot", "start", "name", "logo-github"], [1, "header-landing"], ["rel", "noopener", "target", "_blank", "href", "https://ipfs.io"], ["name", "open-outline", "size", "small"], ["size", "large", 3, "click", 4, "ngIf", "ngIfElse"], ["auth", ""], [1, "ion-text-start"], ["size-xs", "12", "size-md", "12", "size-lg", "4", 1, "ion-padding-horizontal"], [1, "sticky", "ion-padding-top", "ion-padding-horizontal"], ["color", "primary ion-text-uppercase"], ["size-xs", "12", "size-md", "12", "size-lg", "8"], [1, "call-list", "ion-no-padding", "ion-padding-top"], [1, "ion-padding-horizontal"], ["size-xs", "12", "size-sm", "12", "size-md", "6"], [1, "call-action"], ["size-sm", "12", "size-md", "8", "size-lg", "8"], ["size-sm", "12", "size-md", "4", "size-lg", "4", 1, "ion-text-end"], ["auth2", ""], [1, "footer"], ["href", "https://github.com/hexaone-labs", "target", "_blank", "rel", "noopener"], ["href", "https://ipfs.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-ipfs.svg"], ["href", "http://filecoin.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-filecoin.svg"], ["size", "large", 3, "click"], ["size", "large", 3, "disabled", "click"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "HEXA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Develop and manage your digital datas with blockchain technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Censorship-resistant, tamper-proof and privacy compliant cloud solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginPageComponent_ion_button_15_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginPageComponent_ng_template_17_Template, 4, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 11)(20, "ion-grid", 0)(21, "ion-row", 0)(22, "ion-col", 12)(23, "div", 13)(24, "ion-text", 14)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Everything you need ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " All-in-one platform ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Store data on IPFS using our free cross-platform client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-col", 15)(32, "ion-grid", 16)(33, "ion-row", 17)(34, "ion-col", 18)(35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Zero-knowledge architecture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Hexa is built on zero-knowledge architecture, meaning that we know nothing about what you do in app. Not only is this more secure, but it also gives you complete censorship-resistant and privacy compliant solution. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-col", 18)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Access data securely wherever you are ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Store files securely on IPFS and access them from anywhere. Hexa is a fully decentralized, tamper-proof platform and hosted on IPFS, meaning that you can access your data from any device, anywhere in the world. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-col", 18)(45, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Secure sharing datas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Share a copy of your file to anyone wusing dedicated upload page. Hexa allow you to share with others ERC20 address a encrypted copy of your file with custom access controls and permission settings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-col", 18)(50, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Free and Open-source");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Hexa is free and open-source, meaning that you can audit the code and be sure that your data is safe. You can also download the source code and run it on your own server or contribute to the project and help us make Hexa even better. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 19)(55, "ion-grid", 0)(56, "ion-row")(57, "ion-col", 20)(58, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Ready to be a part of it?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Get started now and enjoy the benefits of decentralized storage. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ion-col", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, LoginPageComponent_ion_button_63_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, LoginPageComponent_ng_template_65_Template, 4, 6, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 23)(68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Build by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "HEXA ONE Labs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, ". Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "ion-icon", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " IPFS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Filecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx.account$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 6, ctx.account$))("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --color: #fff;\n  --background: url('bg.897829dd3b531ad0.jpeg') transparent no-repeat left top / cover;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 4rem;\n  font-size: 0.8rem;\n  --background: transparent;\n  --color: #fff;\n  --font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 2rem;\n  --background: transparent;\n  --color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 8rem 5rem 0;\n  min-height: 100vh;\n  height: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  line-height: 5.8rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 0;\n  text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background-color: #272747;\n  color: #fff;\n  padding: 5rem 3rem 5rem;\n  margin-top: 0rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n  width: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.618rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .call-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  margin-bottom: 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: #14162d;\n  padding: 0 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--ion-color-medium-shade);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%] {\n  background-color: #1c203a;\n  padding: 8rem 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n    left: 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n    right: 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 2.8rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2F1dGgvc3JjL2xpYi9jb250YWluZXJzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURJSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNITjtBREtNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hSO0FET007RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQ0xSO0FEUU07RUFDRSxlQUFBO0FDTlI7QURTTTtFQUNFLGlCQUFBO0FDUFI7QURXTTtFQUNFLFdBQUE7QUNUUjtBRGNJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1pOO0FEY007RUFFRSxnQkFBQTtFQUNBLFNBQUE7QUNaUjtBRGVNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ2JSO0FEZ0JNO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2RSO0FEaUJNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDZlI7QURtQlE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNqQlY7QURzQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNwQk47QURzQk07RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNwQlI7QURzQk07RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0FDcEJSO0FEc0JRO0VBQ0UsOEJBQUE7QUNwQlY7QUR3Qk07RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUN0QlI7QUQwQkk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDeEJOO0FEMEJNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUN4QlI7QUQyQk07RUFDRSxTQUFBO0FDekJSO0FENkJJO0VBR0U7SUFDRSxVQUFBO0VDN0JOO0VEZ0NJO0lBQ0UsV0FBQTtFQzlCTjtFRGdDSTtJQUNFLGVBQUE7RUM5Qk47RURnQ007SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUM5QlI7RURnQ007SUFDRSxpQkFBQTtFQzlCUjtFRG1DSTtJQUNFLGVBQUE7RUNqQ047QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wICAvIGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAubG9nby1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgbGVmdDogNHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbmstaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtIDA7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC8vIHRleHQtc2hhZG93OiA2cHggMnB4IDJweCAjMzA2NGZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICBcbiAgICAgICoge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3Mjc0NztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogNXJlbSAzcmVtIDVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBkaXYuc3RpY2t5IHtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDVyZW07XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjYxOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAuY2FsbC1saXN0IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxNDE2MmQ7XG4gICAgICBwYWRkaW5nOiAwIDRyZW07XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsbC1hY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjAzYTtcbiAgICAgIHBhZGRpbmc6IDhyZW0gNXJlbTtcblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcnVsZXMgZm9yIG1vYmlsZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgXG4gICAgICBcbiAgICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5saW5rLWhlYWRlciB7XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9IFxuXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wIC8gY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICBsZWZ0OiA0cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5saW5rLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMnJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogOHJlbSA1cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaDEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyAqIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3NDc7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cmVtIDNyZW0gNXJlbTtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBkaXYuc3RpY2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxLjYxOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiAuY2FsbC1saXN0IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE0MTYyZDtcbiAgcGFkZGluZzogMCA0cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMC44O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjAzYTtcbiAgcGFkZGluZzogOHJlbSA1cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gcCB7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCBpb24tY29udGVudCAubG9nby1oZWFkZXIge1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxpbmstaGVhZGVyIHtcbiAgICByaWdodDogMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURPTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDTFI7QURRTTtFQUNFLGVBQUE7QUNOUjtBRFNNO0VBQ0UsaUJBQUE7QUNQUjtBRFdNO0VBQ0UsV0FBQTtBQ1RSO0FEY0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDWk47QURjTTtFQUVFLGdCQUFBO0VBQ0EsU0FBQTtBQ1pSO0FEZU07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDYlI7QURnQk07RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZFI7QURpQk07RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNmUjtBRG1CUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2pCVjtBRHNCSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ3BCTjtBRHNCTTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ3BCUjtBRHNCTTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7QUNwQlI7QURzQlE7RUFDRSw4QkFBQTtBQ3BCVjtBRHdCTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ3RCUjtBRDBCSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUN4Qk47QUQwQk07RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ3hCUjtBRDJCTTtFQUNFLFNBQUE7QUN6QlI7QUQ2Qkk7RUFHRTtJQUNFLFVBQUE7RUM3Qk47RURnQ0k7SUFDRSxXQUFBO0VDOUJOO0VEZ0NJO0lBQ0UsZUFBQTtFQzlCTjtFRGdDTTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQzlCUjtFRGdDTTtJQUNFLGlCQUFBO0VDOUJSO0VEbUNJO0lBQ0UsZUFBQTtFQ2pDTjtBQUNGO0FEQUEsZytVQUFnK1UiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgIC8gY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDFyZW07XG4gICAgICBsZWZ0OiA0cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgIC0tZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGluay1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgcmlnaHQ6IDJyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiA4cmVtIDVyZW0gMDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDZweCAycHggMnB4ICMzMDY0ZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgICAgfVxuICAgIFxuICAgICAgKiB7XG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzQ3O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiA1cmVtIDNyZW0gNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGRpdi5zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNXJlbTtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNjE4cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5jYWxsLWxpc3Qge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE0MTYyZDtcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYWxsLWFjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDNhO1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtO1xuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBydWxlcyBmb3IgbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBcbiAgICAgIFxuICAgICAgLmxvZ28taGVhZGVyIHtcbiAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmxpbmstaGVhZGVyIHtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH0gXG5cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgLyBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDRyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxpbmstaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAycmVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4cmVtIDVyZW0gMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nICoge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3Mjc0NztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVyZW0gM3JlbSA1cmVtO1xuICBtYXJnaW4tdG9wOiAwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGRpdi5zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDEuNjE4cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIC5jYWxsLWxpc3QgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTQxNjJkO1xuICBwYWRkaW5nOiAwIDRyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAwLjg7XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDNhO1xuICBwYWRkaW5nOiA4cmVtIDVyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gaDIge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAubGluay1oZWFkZXIge1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 78410:
/*!*****************************************!*\
  !*** ./libs/auth/src/lib/lib.routes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authRoutes": () => (/* binding */ authRoutes)
/* harmony export */ });
/* harmony import */ var _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login/login-page.component */ 86491);

const authRoutes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent
}];

/***/ })

}]);
//# sourceMappingURL=2745.5a2f0b6c74e01d5a.js.map