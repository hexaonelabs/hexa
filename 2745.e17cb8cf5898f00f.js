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







function LoginPageComponent_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_19_Template_ion_button_click_0_listener() {
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
function LoginPageComponent_ion_button_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_116_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_118_Template_ion_button_click_0_listener() {
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
        _this._router.navigate(['/h']);
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
  decls: 133,
  vars: 8,
  consts: [[1, "ion-no-padding"], ["lines", "none", 1, "logo-header"], ["slot", "start", "src", "./assets/images/logo.svg", "size", "large"], ["lines", "none", 1, "link-header"], ["rel", "noopener", "target", "_blank", "href", "https://github.com/hexaonelabs/hexa"], ["color", "light", "slot", "start", "name", "logo-github"], [1, "header-landing"], ["color", "primary"], ["rel", "noopener", "target", "_blank", "href", "https://ipfs.io"], ["name", "open-outline", "size", "small"], ["size", "large", 3, "click", 4, "ngIf", "ngIfElse"], ["auth", ""], [1, "ion-text-start"], ["size-xs", "12", "size-md", "12", "size-lg", "4", 1, "ion-padding-horizontal", "ion-padding-bottom"], [1, "sticky", "ion-padding-top", "ion-padding-horizontal", "ion-padding-bottom"], ["color", "medium", 1, "ion-text-uppercase"], ["size-xs", "12", "size-md", "12", "size-lg", "8"], [1, "call-list", "ion-no-padding", "ion-padding-top"], [1, "ion-padding-horizontal"], ["size-xs", "12", "size-sm", "12", "size-md", "6"], [1, "ion-text-start", "features"], [1, "call-action"], ["size-xs", "12", "size-md", "8", "size-lg", "8"], ["size-xs", "12", "size-md", "4", "size-lg", "4", 1, "ion-padding-vertical"], ["auth2", ""], [1, "footer"], ["href", "https://hexaonelabs.com", "target", "_blank", "rel", "noopener"], ["href", "https://ipfs.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-ipfs.svg"], ["href", "http://filecoin.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-filecoin.svg"], ["size", "large", 3, "click"], ["size", "large", 3, "disabled", "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Use the full potential ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "of internet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Censorship-resistant, tamper-proof and privacy compliant solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginPageComponent_ion_button_17_Template, 2, 0, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginPageComponent_ng_template_19_Template, 4, 6, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "section", 12)(22, "ion-grid", 0)(23, "ion-row", 0)(24, "ion-col", 13)(25, "div", 14)(26, "ion-text", 15)(27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " 100% Decentralized & Open-source ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Trust what you ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "control");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Store data on IPFS using free cross-platform application client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-col", 16)(36, "ion-grid", 17)(37, "ion-row", 18)(38, "ion-col", 19)(39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Zero-knowledge architecture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Hexa is built on zero-knowledge architecture, meaning that we know nothing about what you do in app. Not only is this more secure, but it also gives you complete censorship-resistant and privacy compliant solution. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-col", 19)(44, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Access data securely ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Store data securely on IPFS and access them from anywhere. Hexa is a fully decentralized, tamper-proof platform and hosted on IPFS, meaning that you can access your data from any device, anywhere in the world. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-col", 19)(49, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Secure sharing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Share a copy of your data to anyone using dedicated upload page. Hexa allow you to share with others ERC20 address a encrypted copy of data with custom access controls and permission settings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ion-col", 19)(54, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Free and Open-source");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Hexa is free and open-source, meaning that you can audit the code and be sure that your data is safe. You can also download the source code and run it on your own server or contribute to the project and help us make Hexa even better. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "section", 20)(59, "ion-grid", 0)(60, "ion-row", 0)(61, "ion-col", 13)(62, "div", 14)(63, "ion-text", 15)(64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " All in one platform ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Choose your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "ion-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "features");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Customise your experience with Hexa and choose which features you want to use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ion-col", 16)(73, "ion-grid", 17)(74, "ion-row", 18)(75, "ion-col", 19)(76, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Get clean and simple page with custom background image and many widgets that you can use to display your data as you want. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "ion-col", 19)(81, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Drive");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Store and manage files securely on IPFS, access them from anywhere, share them with others with custom access controls and permission settings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "ion-col", 19)(86, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Wallet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Hexa is EVM chain support so you can use Hexa wallet to manage your crypto assets and NFTs. Send and receive payments, swape tokens, stake and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ion-col", 19)(91, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Calendar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Keep track of your events, set reminders, schedule meetings and more with a encrypted solution, censorship-resistant, privacy compliant that work on any device. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "ion-col", 19)(96, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Write down your thoughts and ideas, keep track of your tasks and more without any third-party tracking. Your notes are encrypted with access controls condition and stored on IPFS, so you can securely access them from anywhere. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "ion-col", 19)(101, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "and more...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Hexa provide many other features like messaging system with full encryption, dedicated Web Page hosted to IPFS to enforce censorship-resistant, tamper-proof and privacy compliant of your data. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 21)(106, "ion-grid", 0)(107, "ion-row")(108, "ion-col", 22)(109, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Ready to be a part of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "ion-text", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "the future?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Get started now and enjoy the benefits of decentralized web. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, LoginPageComponent_ion_button_116_Template, 2, 0, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](117, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, LoginPageComponent_ng_template_118_Template, 4, 6, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 25)(121, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " Build by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "HEXA ONE Labs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, ". Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " IPFS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "ion-icon", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " Filecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 4, ctx.account$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](117, 6, ctx.account$))("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --color: #fff;\n  --background: url('bg.897829dd3b531ad0.jpeg') transparent no-repeat left top / cover;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 4rem;\n  font-size: 0.8rem;\n  --background: transparent;\n  --color: #fff;\n  --font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 2rem;\n  --background: transparent;\n  --color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 8rem 5rem 2rem;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  line-height: 5.8rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 0;\n  text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background-color: #272747;\n  color: #fff;\n  padding: 10rem 3rem;\n  margin-top: 0rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n  width: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 4rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.718rem;\n  line-height: 1.718rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .call-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  margin-bottom: 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section.features[_ngcontent-%COMP%] {\n  background-color: #14162d;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: #14162d;\n  padding: 0 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--ion-color-medium-shade);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%] {\n  background-color: #1c203a;\n  padding: 8rem 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 600;\n  line-height: 3rem;\n  margin: 0 0 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n    left: 0.5rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n    right: 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 2.8rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 4rem 0rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.sticky[_ngcontent-%COMP%] {\n    position: static;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 2.5rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%] {\n    padding: 4rem 2rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2F1dGgvc3JjL2xpYi9jb250YWluZXJzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURJSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURPTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDTFI7QURRTTtFQUNFLGVBQUE7QUNOUjtBRFNNO0VBQ0UsaUJBQUE7QUNQUjtBRFdNO0VBQ0UsV0FBQTtBQ1RSO0FEY0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDWk47QURjTTtFQUVFLGdCQUFBO0VBQ0EsU0FBQTtBQ1pSO0FEZU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDYlI7QURnQk07RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNkUjtBRGlCTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ2ZSO0FEa0JNO0VBQ0UsZ0JBQUE7QUNoQlI7QURvQlE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNsQlY7QUR1Qkk7RUFDRSx5QkFBQTtBQ3JCTjtBRHdCSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ3RCTjtBRHdCTTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ3RCUjtBRHdCTTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7QUN0QlI7QUR3QlE7RUFDRSw4QkFBQTtBQ3RCVjtBRDBCTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ3hCUjtBRDRCSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUMxQk47QUQ0Qk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJSO0FENkJNO0VBQ0UsU0FBQTtBQzNCUjtBRDhCTTtFQUNFLGlCQUFBO0FDNUJSO0FEZ0NJO0VBR0U7SUFDRSxZQUFBO0VDaENOO0VEbUNJO0lBQ0UsV0FBQTtFQ2pDTjtFRG9DSTtJQUNFLGVBQUE7RUNsQ047RURvQ007SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNsQ1I7RURvQ007SUFDRSxpQkFBQTtFQ2xDUjtFRHVDSTtJQUNFLGtCQUFBO0VDckNOO0VEdUNNO0lBQ0UsZ0JBQUE7RUNyQ1I7RUR3Q007SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VDdENSO0VEMkNJO0lBQ0Usa0JBQUE7RUN6Q047RUQyQ007SUFDRSxnQkFBQTtFQ3pDUjtFRDZDSTtJQUNFLGVBQUE7RUMzQ047QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wICAvIGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAubG9nby1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgbGVmdDogNHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbmstaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtIDJyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC8vIHRleHQtc2hhZG93OiA2cHggMnB4IDJweCAjMzA2NGZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICBcbiAgICAgICoge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3Mjc0NztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogMTByZW0gM3JlbTtcbiAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGRpdi5zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNXJlbTtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43MThyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmNhbGwtbGlzdCB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbi5mZWF0dXJlcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNjJkO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE0MTYyZDtcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYWxsLWFjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDNhO1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtO1xuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcnVsZXMgZm9yIG1vYmlsZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgXG4gICAgICBcbiAgICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmxpbmstaGVhZGVyIHtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNHJlbSAwcmVtO1xuXG4gICAgICAgIGRpdi5zdGlja3kge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5jYWxsLWFjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9IFxuXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wIC8gY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICBsZWZ0OiA0cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5saW5rLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMnJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogOHJlbSA1cmVtIDJyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGgxIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsaW5lLWhlaWdodDogNS44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaW9uLWljb24ge1xuICBmb250LXNpemU6IDdyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgKiB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTByZW0gM3JlbTtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBkaXYuc3RpY2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBsaW5lLWhlaWdodDogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDEuNzE4cmVtO1xuICBsaW5lLWhlaWdodDogMS43MThyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIC5jYWxsLWxpc3QgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24uZmVhdHVyZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNjJkO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNDE2MmQ7XG4gIHBhZGRpbmc6IDAgNHJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBpb24taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIwM2E7XG4gIHBhZGRpbmc6IDhyZW0gNXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gcCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBpb24tYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgICBsZWZ0OiAwLjVyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxpbmstaGVhZGVyIHtcbiAgICByaWdodDogMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDByZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBkaXYuc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIGlvbi1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRE9NO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNMUjtBRFFNO0VBQ0UsZUFBQTtBQ05SO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEV007RUFDRSxXQUFBO0FDVFI7QURjSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNaTjtBRGNNO0VBRUUsZ0JBQUE7RUFDQSxTQUFBO0FDWlI7QURlTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNiUjtBRGdCTTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2RSO0FEaUJNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDZlI7QURrQk07RUFDRSxnQkFBQTtBQ2hCUjtBRG9CUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2xCVjtBRHVCSTtFQUNFLHlCQUFBO0FDckJOO0FEd0JJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDdEJOO0FEd0JNO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDdEJSO0FEd0JNO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtBQ3RCUjtBRHdCUTtFQUNFLDhCQUFBO0FDdEJWO0FEMEJNO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDeEJSO0FENEJJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQzFCTjtBRDRCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUMxQlI7QUQ2Qk07RUFDRSxTQUFBO0FDM0JSO0FEOEJNO0VBQ0UsaUJBQUE7QUM1QlI7QURnQ0k7RUFHRTtJQUNFLFlBQUE7RUNoQ047RURtQ0k7SUFDRSxXQUFBO0VDakNOO0VEb0NJO0lBQ0UsZUFBQTtFQ2xDTjtFRG9DTTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ2xDUjtFRG9DTTtJQUNFLGlCQUFBO0VDbENSO0VEdUNJO0lBQ0Usa0JBQUE7RUNyQ047RUR1Q007SUFDRSxnQkFBQTtFQ3JDUjtFRHdDTTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUN0Q1I7RUQyQ0k7SUFDRSxrQkFBQTtFQ3pDTjtFRDJDTTtJQUNFLGdCQUFBO0VDekNSO0VENkNJO0lBQ0UsZUFBQTtFQzNDTjtBQUNGO0FEQUEsNCtZQUE0K1kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgIC8gY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDFyZW07XG4gICAgICBsZWZ0OiA0cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgIC0tZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGluay1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgcmlnaHQ6IDJyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiA4cmVtIDVyZW0gMnJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDZweCAycHggMnB4ICMzMDY0ZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgICAgfVxuICAgIFxuICAgICAgKiB7XG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzQ3O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgZGl2LnN0aWNreSB7XG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjcxOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE4cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAuY2FsbC1saXN0IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWN0aW9uLmZlYXR1cmVzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE2MmQ7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTQxNjJkO1xuICAgICAgcGFkZGluZzogMCA0cmVtO1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbGwtYWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIwM2E7XG4gICAgICBwYWRkaW5nOiA4cmVtIDVyZW07XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBydWxlcyBmb3IgbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBcbiAgICAgIFxuICAgICAgLmxvZ28taGVhZGVyIHtcbiAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAubGluay1oZWFkZXIge1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDByZW07XG5cbiAgICAgICAgZGl2LnN0aWNreSB7XG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLmNhbGwtYWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNHJlbSAycmVtO1xuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH0gXG5cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgLyBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDRyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxpbmstaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAycmVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4cmVtIDVyZW0gMnJlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaDEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyAqIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3NDc7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xuICBtYXJnaW4tdG9wOiAwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGRpdi5zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMS43MThyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjcxOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gLmNhbGwtbGlzdCBpb24tY29sIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbi5mZWF0dXJlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE2MmQ7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE0MTYyZDtcbiAgcGFkZGluZzogMCA0cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMC44O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjAzYTtcbiAgcGFkZGluZzogOHJlbSA1cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIGlvbi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCBpb24tY29udGVudCAubG9nby1oZWFkZXIge1xuICAgIGxlZnQ6IDAuNXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAubGluay1oZWFkZXIge1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGRpdi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
//# sourceMappingURL=2745.e17cb8cf5898f00f.js.map