"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[3656],{

/***/ 83656:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/web.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareWeb": () => (/* binding */ ShareWeb)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);


class ShareWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  canShare() {
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.share) {
        return {
          value: false
        };
      } else {
        return {
          value: true
        };
      }
    })();
  }
  share(options) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_d_workspace_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.share) {
        throw _this.unavailable('Share API not available in this browser');
      }
      yield navigator.share({
        title: options.title,
        text: options.text,
        url: options.url
      });
      return {};
    })();
  }
}

/***/ })

}]);
//# sourceMappingURL=3656.a00c83459ae26a1f.js.map