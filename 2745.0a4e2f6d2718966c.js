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







function LoginPageComponent_ion_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_12_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_14_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.connectWallet());
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
  decls: 16,
  vars: 4,
  consts: [[1, "ion-padding"], ["lines", "none", 1, "logo-header"], ["slot", "start", "src", "./assets/images/logo.svg", "size", "large"], ["rel", "noopener", "target", "_blank", "href", "https://ipfs.io"], ["name", "open-outline", "size", "small"], ["size", "large", 3, "click", 4, "ngIf", "ngIfElse"], ["auth", ""], ["size", "large", 3, "click"], ["size", "large", 3, "disabled", "click"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "HEXA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Develop and manage your digital datas with blockchain technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Censorship-resistant, tamper-proof and privacy compliant cloud solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginPageComponent_ion_button_12_Template, 2, 0, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginPageComponent_ng_template_14_Template, 4, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 2, ctx.account$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --color: #fff;\n  --background: url('bg.897829dd3b531ad0.jpeg') transparent no-repeat left top / cover;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 4rem;\n  font-size: 0.8rem;\n  --background: transparent;\n  --color: #fff;\n  --font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 8rem 4rem 0;\n  height: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  line-height: 5.8rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 0;\n  text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n    left: 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 2.8rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2F1dGgvc3JjL2xpYi9jb250YWluZXJzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURJSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURNTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDSlI7QURPTTtFQUNFLGVBQUE7QUNMUjtBRFFNO0VBQ0UsaUJBQUE7QUNOUjtBRFVNO0VBQ0UsV0FBQTtBQ1JSO0FEYUk7RUFHRTtJQUNFLFVBQUE7RUNiTjtFRGdCSTtJQUNFLGVBQUE7RUNkTjtFRGdCTTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ2RSO0VEZ0JNO0lBQ0UsaUJBQUE7RUNkUjtBQUNGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgIC8gY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDFyZW07XG4gICAgICBsZWZ0OiA0cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgIC0tZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGl2IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiA4cmVtIDRyZW0gMDtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC8vIHRleHQtc2hhZG93OiA2cHggMnB4IDJweCAjMzA2NGZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICBcbiAgICAgICoge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICAvLyBydWxlcyBmb3IgbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBcbiAgICAgIFxuICAgICAgLmxvZ28taGVhZGVyIHtcbiAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9IFxuXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wIC8gY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICBsZWZ0OiA0cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogOHJlbSA0cmVtIDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiBwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2ICoge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgICBsZWZ0OiAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdiB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRE1NO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNKUjtBRE9NO0VBQ0UsZUFBQTtBQ0xSO0FEUU07RUFDRSxpQkFBQTtBQ05SO0FEVU07RUFDRSxXQUFBO0FDUlI7QURhSTtFQUdFO0lBQ0UsVUFBQTtFQ2JOO0VEZ0JJO0lBQ0UsZUFBQTtFQ2ROO0VEZ0JNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDZFI7RURnQk07SUFDRSxpQkFBQTtFQ2RSO0FBQ0Y7QURDQSw0d0pBQTR3SiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vYXBwcy9icm93c2VyL3NyYy9hc3NldHMvaW1hZ2VzL2JnLmpwZWcpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCBsZWZ0IHRvcCAgLyBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLmxvZ28taGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIGxlZnQ6IDRyZW07XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXYge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDhyZW0gNHJlbSAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDZweCAycHggMnB4ICMzMDY0ZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgICAgfVxuICAgIFxuICAgICAgKiB7XG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIC8vIHJ1bGVzIGZvciBtb2JpbGVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIFxuICAgICAgXG4gICAgICAubG9nby1oZWFkZXIge1xuICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH0gXG5cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgbGVmdCB0b3AgLyBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDRyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4cmVtIDRyZW0gMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IGgxIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsaW5lLWhlaWdodDogNS44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDdyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgKiB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCBpb24tY29udGVudCAubG9nby1oZWFkZXIge1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
//# sourceMappingURL=2745.0a4e2f6d2718966c.js.map