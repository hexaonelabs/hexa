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
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _d_workspace_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @d-workspace/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







function LoginPageComponent_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_8_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_10_Template_ion_button_click_0_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r2.isLoaderVisible$) === true ? "Loading..." : "Connect Wallet");
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
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loaderService.setStatus(true);
      _this2._authService.disconnect();
      _this2.loaderService.setStatus(false);
    })();
  }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_d_workspace_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_d_workspace_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_d_workspace_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_d_workspace_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["d-workspace-login-page"]],
  decls: 12,
  vars: 4,
  consts: [[1, "ion-padding"], ["rel", "noopener", "target", "_blank", "href", "https://ipfs.io"], ["name", "open-outline", "size", "small"], ["size", "large", 3, "click", 4, "ngIf", "ngIfElse"], ["auth", ""], ["size", "large", 3, "click"], ["size", "large", 3, "disabled", "click"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "div")(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Develop and manage your digital datas with blockchain technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Censorship-resistant, tamper-proof and privacy compliant cloud solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginPageComponent_ion_button_8_Template, 2, 0, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginPageComponent_ng_template_10_Template, 4, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx.account$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --color: #fff;\n  --background: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa) transparent no-repeat center center / cover;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0 4rem;\n  height: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  line-height: 4.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  text-shadow: 6px 4px 2px #3064ff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 0;\n  text-shadow: 0px 0px 25px rgb(0, 0, 0);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 2.8rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvZC13b3Jrc3BhY2UvbGlicy9hdXRoL3NyYy9saWIvY29udGFpbmVycy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDJIQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ047QURDTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NSO0FERU07RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtBQ0FSO0FER007RUFDRSxlQUFBO0FDRFI7QURJTTtFQUNFLGlCQUFBO0FDRlI7QURPTTtFQWpDRjtJQWtDSSxlQUFBO0VDSk47RURLTTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ0hSO0VES007SUFDRSxpQkFBQTtFQ0hSO0FBQ0YiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTExODc1ODA0NTktNDM0OTAyNzljMGZhKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAgLyBjb3ZlcjtcbiAgICBkaXYge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIHRleHQtc2hhZG93OiA2cHggNHB4IDJweCAjMzA2NGZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiKDAgMCAwKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICB9XG4gICAgXG4gICAgICAqIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAvLyBydWxlcyBmb3IgbW9iaWxlXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gXG5cbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDUxMTg3NTgwNDU5LTQzNDkwMjc5YzBmYSkgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCA0cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgaDEge1xuICBmb250LXNpemU6IDVyZW07XG4gIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRleHQtc2hhZG93OiA2cHggNHB4IDJweCAjMzA2NGZmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2IoMCwgMCwgMCk7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDdyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgKiB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdiB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9kLXdvcmtzcGFjZS9saWJzL2F1dGgvc3JjL2xpYi9jb250YWluZXJzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsMkhBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDTjtBRENNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQ1I7QURFTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7QUNEUjtBRElNO0VBQ0UsaUJBQUE7QUNGUjtBRE9NO0VBakNGO0lBa0NJLGVBQUE7RUNKTjtFREtNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDSFI7RURLTTtJQUNFLGlCQUFBO0VDSFI7QUFDRjtBRENBLDQrR0FBNCtHIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1MTE4NzU4MDQ1OS00MzQ5MDI3OWMwZmEpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICAvIGNvdmVyO1xuICAgIGRpdiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDZweCA0cHggMnB4ICMzMDY0ZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2IoMCAwIDApO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICBcbiAgICAgICoge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8vIHJ1bGVzIGZvciBtb2JpbGVcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBcblxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTExODc1ODA0NTktNDM0OTAyNzljMGZhKSB0cmFuc3BhcmVudCBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwIDRyZW07XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1zaGFkb3c6IDZweCA0cHggMnB4ICMzMDY0ZmY7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYgcCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYigwLCAwLCAwKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdiAqIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2IGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
//# sourceMappingURL=2745.2ed9d569e90410c9.js.map