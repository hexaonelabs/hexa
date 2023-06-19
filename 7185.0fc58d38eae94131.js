"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[7185],{

/***/ 77185:
/*!***********************************!*\
  !*** ./libs/welcome/src/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* reexport safe */ _lib_welcome_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeModule),
/* harmony export */   "welcomeRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.welcomeRoutes)
/* harmony export */ });
/* harmony import */ var _lib_welcome_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/welcome.module */ 92038);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 8899);



/***/ }),

/***/ 72734:
/*!****************************************************************************!*\
  !*** ./libs/welcome/src/lib/components/background/background.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundComponent": () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



const _c0 = ["*"];
class BackgroundComponent {
  constructor(el, _renderer) {
    this.el = el;
    this._renderer = _renderer;
    this.url = undefined;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.imgUrl = Boolean(_this.url) === true ? _this.url : undefined;
      // check url valid formating
      if (_this.imgUrl) {
        try {
          const isUrlValid = new URL(_this.imgUrl);
          if (isUrlValid) {
            _this.el.nativeElement.style.backgroundImage = `url(${_this.imgUrl})`;
          }
        } catch (error) {
          console.log(`[ERROR] {BackgroundComponent} Invalide URL formatting: "${_this.imgUrl}"`);
          _this.fadeIn();
          throw new Error(`Invalide URL formatting: "${_this.imgUrl}"`);
        }
      }
      _this.fadeIn();
    })();
  }
  ngOnChanges(simpleChanges) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!simpleChanges?.['url']) {
        return;
      }
      if (simpleChanges?.['url']?.firstChange) {
        return;
      }
      _this2._renderer.setStyle(_this2.el.nativeElement, 'opacity', 0);
      _this2.ngOnInit();
    })();
  }
  fadeIn() {
    var _this3 = this;
    let opacity = 0;
    const int = setInterval( /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      opacity += 0.01;
      _this3._renderer.setStyle(_this3.el.nativeElement, 'opacity', opacity);
      if (opacity >= 1) {
        clearInterval(int);
      }
    }), 3);
  }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) {
  return new (t || BackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
BackgroundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BackgroundComponent,
  selectors: [["hexa-background"]],
  inputs: {
    isDevMode: "isDevMode",
    url: "url"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [[1, "bgContainer"]],
  template: function BackgroundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", (ctx.imgUrl == null ? null : ctx.imgUrl.length) || 0 ? "url(" + ctx.imgUrl + ")" : null);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .bgContainer[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL3dlbGNvbWUvc3JjL2xpYi9jb21wb25lbnRzL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuXG4gIC5iZ0NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NTQwOTE4MDU0NTItNzZiN2VkMmIwM2QyP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNzcwJnE9ODAnKTtcbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG59XG46aG9zdCAuYmdDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbXBvbmVudHMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy93ZWxjb21lL3NyYy9saWIvY29tcG9uZW50cy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENBLHdzQ0FBd3NDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcblxuICAuYmdDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjU0MDkxODA1NDUyLTc2YjdlZDJiMDNkMj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTc3MCZxPTgwJyk7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgLmJnQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 93135:
/*!********************************************************************************!*\
  !*** ./libs/welcome/src/lib/components/current-time/current-time.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentTimeComponent": () => (/* binding */ CurrentTimeComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function CurrentTimeComponent_time_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.currentDate.toLocaleTimeString().slice(0, 5).split(":")[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.currentDate.toLocaleTimeString().slice(0, 5).split(":")[1], "\n");
  }
}
function CurrentTimeComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cityname);
  }
}
function CurrentTimeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
  }
}
class CurrentTimeComponent {
  ngOnInit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.cityname || _this.cityname === '') {
        _this.currentDate = new Date();
        setInterval(() => {
          _this.currentDate = new Date();
        }, 1000);
      } else {
        yield _this._getTimeFromLocation();
        if (!_this.dt) {
          return;
        }
        _this.currentDate = new Date(_this.dt);
        setInterval(() => {
          _this.dt += 1000;
          _this.currentDate = new Date(_this.dt);
        }, 1000);
      }
    })();
  }
  _getTimeFromLocation() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.cityname || _this2.cityname === '') {
        _this2.errorMessage = 'City name not provided';
        return;
      }
      const data = yield __webpack_require__.e(/*! import() */ 9231).then(__webpack_require__.t.bind(__webpack_require__, /*! city-timezones */ 19231, 23)).then(m => {
        const res = m.lookupViaCity(_this2.cityname).shift();
        return res;
      }).catch(err => {
        _this2.errorMessage = err.message;
      });
      if (!data) {
        _this2.errorMessage = 'City not available';
        return;
      }
      const timeZone = data?.timezone;
      const time = new Date().toLocaleString('en-US', {
        timeZone
      });
      _this2.dt = new Date(time).getTime();
    })();
  }
}
CurrentTimeComponent.ɵfac = function CurrentTimeComponent_Factory(t) {
  return new (t || CurrentTimeComponent)();
};
CurrentTimeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CurrentTimeComponent,
  selectors: [["hexa-current-time"]],
  inputs: {
    cityname: "cityname"
  },
  decls: 4,
  vars: 3,
  consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], ["displayError", ""]],
  template: function CurrentTimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrentTimeComponent_time_0_Template, 5, 2, "time", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentTimeComponent_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurrentTimeComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentDate)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityname);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5em;\n  text-transform: capitalize;\n  margin-top: 0.5em;\n}\n[_nghost-%COMP%]   time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: inherit;\n  display: inline;\n  margin: inherit;\n  animation: _ngcontent-%COMP%_toggleSeconds 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_toggleSeconds {\n  0%, 20% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 0.9;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbXBvbmVudHMvY3VycmVudC10aW1lL2N1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNETjtBREtFO0VBQ0U7SUFDRSxVQUFBO0VDSEo7RURLRTtJQUNFLFlBQUE7RUNISjtBQUNGIiwiZmlsZSI6ImN1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICB9XG5cbiAgdGltZSB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW46IGluaGVyaXQ7XG4gICAgICBhbmltYXRpb246IHRvZ2dsZVNlY29uZHMgMXMgaW5maW5pdGU7XG4gICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHRvZ2dsZVNlY29uZHMge1xuICAgIDAlLCAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3Qgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG46aG9zdCB0aW1lIHNwYW4ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiBpbmhlcml0O1xuICBhbmltYXRpb246IHRvZ2dsZVNlY29uZHMgMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHRvZ2dsZVNlY29uZHMge1xuICAwJSwgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbXBvbmVudHMvY3VycmVudC10aW1lL2N1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbXBvbmVudHMvY3VycmVudC10aW1lL2N1cnJlbnQtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNETjtBREtFO0VBQ0U7SUFDRSxVQUFBO0VDSEo7RURLRTtJQUNFLFlBQUE7RUNISjtBQUNGO0FEQ0Esd3BEQUF3cEQiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgfVxuXG4gIHRpbWUge1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luOiBpbmhlcml0O1xuICAgICAgYW5pbWF0aW9uOiB0b2dnbGVTZWNvbmRzIDFzIGluZmluaXRlO1xuICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyB0b2dnbGVTZWNvbmRzIHtcbiAgICAwJSwgMjAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuOmhvc3QgdGltZSBzcGFuIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogaW5oZXJpdDtcbiAgYW5pbWF0aW9uOiB0b2dnbGVTZWNvbmRzIDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyB0b2dnbGVTZWNvbmRzIHtcbiAgMCUsIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 32627:
/*!********************************************************************************!*\
  !*** ./libs/welcome/src/lib/containers/welcome-page/welcome-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageComponent": () => (/* binding */ WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/current-time/current-time.component */ 93135);
/* harmony import */ var _components_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/background/background.component */ 72734);









function WelcomePageComponent_ion_content_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 12)(1, "ion-list", 13)(2, "ion-list-header", 14)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Widgets Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomePageComponent_ion_content_0_ng_template_9_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.actions("open-settings-modal", "background"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Change background image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
}
function WelcomePageComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 1)(1, "ion-grid", 2)(2, "ion-row", 3)(3, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 5)(6, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-popover", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WelcomePageComponent_ion_content_0_ng_template_9_Template, 11, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "hexa-background", 10)(13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "hexa-current-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", config_r1 == null ? null : config_r1.background == null ? null : config_r1.background.url)("isDevMode", !ctx_r0.isProd);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.text, "!");
  }
}
const ROOT_DB_COLLECTION = 'd-welcome';
const DEFAULT_WIDGETS_CONFIG = {
  background: {
    url: undefined
  }
};
const WIDGETS_MESSAGE = {
  background: `You can provide a URL address of the image you want to use as a background.`
};
const WIDGETS_INPUTS_OPTIONS = {
  background: background => [
  // {
  //   name: 'unsplashClientId',
  //   type: 'text',
  //   placeholder: 'Unsplash Client ID',
  //   value: background?.unsplashClientId,
  // },
  // {
  //   name: 'query',
  //   type: 'text',
  //   placeholder: 'Unsplash query to search images',
  //   value: background?.query,
  // },
  {
    name: 'url',
    type: 'text',
    placeholder: 'Web URL address of the image',
    value: background?.url
  }]
};
class WelcomePageComponent {
  constructor(_modal, _alertCtrl, _popoverCtrl, isProd, _datastoreService, _loaderService) {
    this._modal = _modal;
    this._alertCtrl = _alertCtrl;
    this._popoverCtrl = _popoverCtrl;
    this.isProd = isProd;
    this._datastoreService = _datastoreService;
    this._loaderService = _loaderService;
    this.text = 'Welcome';
    this._config$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.config$ = this._config$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)((prev, next) => JSON.stringify(prev) === JSON.stringify(next)));
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._config$.value) {
        return;
      }
      // get config from db
      const {
        background
      } = yield _this._datastoreService.getData(ROOT_DB_COLLECTION, ['widgetsConfig'], DEFAULT_WIDGETS_CONFIG);
      // update app state
      _this._config$.next({
        background
      });
    })();
  }
  ionViewWillEnter() {
    this._sayHello();
  }
  actions(type, payload) {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (true) {
        case type === 'open-settings-modal':
          {
            // close existing popover
            const popover = yield _this2._popoverCtrl.getTop();
            if (popover) {
              yield popover.dismiss();
            }
            // prompt settings modal
            const settings = yield _this2._openAlertSettings(payload);
            // save settings to db
            if (settings) {
              _this2.actions('saveConfig', {
                [payload]: settings
              });
            }
            break;
          }
        case type === 'saveConfig':
          {
            _this2._loaderService.setStatus(true);
            const data = {
              ..._this2._config$.value,
              ...payload
            };
            // update app state
            _this2._config$.next(data);
            // save config to db
            yield _this2._datastoreService.saveData(data, ROOT_DB_COLLECTION, ['widgetsConfig']);
            _this2._loaderService.setStatus(false);
            // TODO: display notification
            break;
          }
      }
    })();
  }
  _sayHello() {
    const currentDate = new Date();
    switch (true) {
      case currentDate.getHours() < 5:
        this.text = 'Good night';
        break;
      case currentDate.getHours() < 12:
        this.text = 'Good morning';
        break;
      case currentDate.getHours() < 18:
        this.text = 'Good afternoon';
        break;
      case currentDate.getHours() < 24:
        this.text = 'Good evening';
        break;
      default:
        break;
    }
  }
  _openAlertSettings(widgetType) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const inputs = WIDGETS_INPUTS_OPTIONS[widgetType](_this3._config$.value[widgetType]);
      if (!inputs) {
        return;
      }
      // create header title capitalized
      const header = `${widgetType[0].toUpperCase()}${widgetType.slice(1)} Settings`;
      const message = WIDGETS_MESSAGE[widgetType];
      const alert = yield _this3._alertCtrl.create({
        header,
        message,
        inputs,
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok'
        }]
      });
      yield alert.present();
      const {
        data,
        role
      } = yield alert.onDidDismiss();
      if (role === 'cancel' || role === 'backdrop') {
        return;
      }
      const {
        values = null
      } = data;
      return values;
    })();
  }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) {
  return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_IS_PROD)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DATASTORE_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)));
};
WelcomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WelcomePageComponent,
  selectors: [["hexa-welcome-page"]],
  decls: 2,
  vars: 3,
  consts: [["fullscreen", "true", "class", "ion-padding-horizontal", "class", "ion-no-padding", 4, "ngIf"], ["fullscreen", "true", 1, "ion-no-padding"], [1, "header", "ion-no-padding", "ion-padding-horizontal"], [1, "ion-no-padding", "ion-align-items-center"], ["size", "auto"], [1, "ion-text-end"], ["id", "settings-btn", "fill", "clear", "size", "large"], ["size", "small", "name", "ellipsis-vertical-sharp"], ["trigger", "settings-btn", "triggerAction", "click"], [2, "width", "82px"], [3, "url", "isDevMode"], ["id", "flexContainer"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-no-padding", "ion-margin-bottom"], [1, "ion-margin-bottom"], ["button", "", 3, "click"]],
  template: function WelcomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WelcomePageComponent_ion_content_0_Template, 17, 3, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.config$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonPopover, _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_2__.CurrentTimeComponent, _components_background_background_component__WEBPACK_IMPORTED_MODULE_3__.BackgroundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   #flexContainer[_ngcontent-%COMP%], [_nghost-%COMP%]   .noAuth[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  height: 100vh;\n  padding-top: 3rem;\n}\n[_nghost-%COMP%]   #flexContainer[_ngcontent-%COMP%] {\n  background: radial-gradient(ellipse closest-side, rgba(0, 0, 0, 0.4) 0%, transparent 100%);\n}\n[_nghost-%COMP%]   hexa-current-time[_ngcontent-%COMP%] {\n  font-size: 14rem;\n  font-weight: 700;\n  font-family: serif;\n  line-height: 1;\n}\n[_nghost-%COMP%]   hexa-hello[_ngcontent-%COMP%], [_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-family: serif;\n  line-height: normal;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 13px 16px;\n  min-height: 90px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbnRhaW5lcnMvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDREo7QURHRTtFQUNFLDBGQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGSjtBRE9FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUEo7QURTSTtFQUNFLFlBQUE7QUNQTiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgI2ZsZXhDb250YWluZXIsIC5ub0F1dGh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gIH1cbiAgI2ZsZXhDb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGNsb3Nlc3Qtc2lkZSwgcmdiYSgwLCAwLCAwLCAwLjQpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgfVxuXG4gIGhleGEtY3VycmVudC10aW1lIHtcbiAgICBmb250LXNpemU6IDE0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxOyBcbiAgICAvLyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG5cblxuICBoZXhhLWhlbGxvLCBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsOyBcbiAgICAvLyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xuXG4gICAgaW9uLXJvdyB7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgfVxuICB9XG4gIFxufSIsIjpob3N0ICNmbGV4Q29udGFpbmVyLCA6aG9zdCAubm9BdXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuOmhvc3QgI2ZsZXhDb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBjbG9zZXN0LXNpZGUsIHJnYmEoMCwgMCwgMCwgMC40KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG46aG9zdCBoZXhhLWN1cnJlbnQtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG46aG9zdCBoZXhhLWhlbGxvLCA6aG9zdCBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuOmhvc3QgLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTNweCAxNnB4O1xuICBtaW4taGVpZ2h0OiA5MHB4O1xufVxuOmhvc3QgLmhlYWRlciBpb24tcm93IHtcbiAgaGVpZ2h0OiA1OHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbnRhaW5lcnMvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvd2VsY29tZS9zcmMvbGliL2NvbnRhaW5lcnMvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDREo7QURHRTtFQUNFLDBGQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGSjtBRE9FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUEo7QURTSTtFQUNFLFlBQUE7QUNQTjtBRENBLG80RkFBbzRGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gICNmbGV4Q29udGFpbmVyLCAubm9BdXRoe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG4gICNmbGV4Q29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBjbG9zZXN0LXNpZGUsIHJnYmEoMCwgMCwgMCwgMC40KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIH1cblxuICBoZXhhLWN1cnJlbnQtdGltZSB7XG4gICAgZm9udC1zaXplOiAxNHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMTsgXG4gICAgLy8gY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgfVxuXG5cbiAgaGV4YS1oZWxsbywgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgXG4gICAgLy8gY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgIH1cbiAgfVxuICBcbn0iLCI6aG9zdCAjZmxleENvbnRhaW5lciwgOmhvc3QgLm5vQXV0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cbjpob3N0ICNmbGV4Q29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgY2xvc2VzdC1zaWRlLCByZ2JhKDAsIDAsIDAsIDAuNCkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxuOmhvc3QgaGV4YS1jdXJyZW50LXRpbWUge1xuICBmb250LXNpemU6IDE0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuOmhvc3QgaGV4YS1oZWxsbywgOmhvc3QgaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbjpob3N0IC5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgbWluLWhlaWdodDogOTBweDtcbn1cbjpob3N0IC5oZWFkZXIgaW9uLXJvdyB7XG4gIGhlaWdodDogNThweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8899:
/*!********************************************!*\
  !*** ./libs/welcome/src/lib/lib.routes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcomeRoutes": () => (/* binding */ welcomeRoutes)
/* harmony export */ });
/* harmony import */ var _containers_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/welcome-page/welcome-page.component */ 32627);

const welcomeRoutes = [{
  path: '',
  pathMatch: 'full',
  component: _containers_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePageComponent
}];

/***/ }),

/***/ 92038:
/*!************************************************!*\
  !*** ./libs/welcome/src/lib/welcome.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 8899);
/* harmony import */ var _containers_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/welcome-page/welcome-page.component */ 32627);
/* harmony import */ var _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/current-time/current-time.component */ 93135);
/* harmony import */ var _components_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/background/background.component */ 72734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);









class WelcomeModule {}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) {
  return new (t || WelcomeModule)();
};
WelcomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: WelcomeModule
});
WelcomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.welcomeRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WelcomeModule, {
    declarations: [_containers_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_1__.WelcomePageComponent, _components_current_time_current_time_component__WEBPACK_IMPORTED_MODULE_2__.CurrentTimeComponent, _components_background_background_component__WEBPACK_IMPORTED_MODULE_3__.BackgroundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=7185.0fc58d38eae94131.js.map