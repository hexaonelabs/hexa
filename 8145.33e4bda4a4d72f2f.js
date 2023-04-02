"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[8145],{

/***/ 8145:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwa_camera_modal": () => (/* binding */ PWACameraModal)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-f86805ad.js */ 25857);


const PWACameraModal = class {
  constructor(hostRef) {
    (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.facingMode = 'user';
    this.onPhoto = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "onPhoto", 7);
    this.noDeviceError = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "noDeviceError", 7);
  }
  present() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const camera = document.createElement('pwa-camera-modal-instance');
      camera.facingMode = _this.facingMode;
      camera.addEventListener('onPhoto', /*#__PURE__*/function () {
        var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          if (!_this._modal) {
            return;
          }
          const photo = e.detail;
          _this.onPhoto.emit(photo);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      camera.addEventListener('noDeviceError', /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          _this.noDeviceError.emit(e);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      document.body.append(camera);
      _this._modal = camera;
    })();
  }
  dismiss() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._modal) {
        return;
      }
      _this2._modal && _this2._modal.parentNode.removeChild(_this2._modal);
      _this2._modal = null;
    })();
  }
  render() {
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", null);
  }
  static get style() {
    return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}";
  }
};


/***/ })

}]);
//# sourceMappingURL=8145.33e4bda4a4d72f2f.js.map