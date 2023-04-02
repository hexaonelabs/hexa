"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[8724],{

/***/ 68724:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwa_camera_modal_instance": () => (/* binding */ PWACameraModal)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-f86805ad.js */ 25857);


const PWACameraModal = class {
  constructor(hostRef) {
    var _this = this;
    (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.facingMode = 'user';
    this.noDevicesText = 'No camera found';
    this.noDevicesButtonText = 'Choose image';
    this.handlePhoto = /*#__PURE__*/function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (photo) {
        _this.onPhoto.emit(photo);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.handleNoDeviceError = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (photo) {
        _this.noDeviceError.emit(photo);
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.onPhoto = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "onPhoto", 7);
    this.noDeviceError = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "noDeviceError", 7);
  }
  handleBackdropClick(e) {
    if (e.target !== this.el) {
      this.onPhoto.emit(null);
    }
  }
  handleComponentClick(e) {
    e.stopPropagation();
  }
  handleBackdropKeyUp(e) {
    if (e.key === "Escape") {
      this.onPhoto.emit(null);
    }
  }
  render() {
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "wrapper",
      onClick: e => this.handleBackdropClick(e)
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "content"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("pwa-camera", {
      onClick: e => this.handleComponentClick(e),
      facingMode: this.facingMode,
      handlePhoto: this.handlePhoto,
      handleNoDeviceError: this.handleNoDeviceError,
      noDevicesButtonText: this.noDevicesButtonText,
      noDevicesText: this.noDevicesText
    })));
  }
  get el() {
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);
  }
  static get style() {
    return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}";
  }
};


/***/ })

}]);
//# sourceMappingURL=8724.d84fc1d95561e1e5.js.map