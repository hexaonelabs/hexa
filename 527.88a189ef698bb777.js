"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[527],{

/***/ 30527:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwa_camera": () => (/* binding */ CameraPWA)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-f86805ad.js */ 25857);



/**
 * MediaStream ImageCapture polyfill
 *
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ImageCapture = window.ImageCapture;
if (typeof ImageCapture === 'undefined') {
  ImageCapture = class {
    /**
     * TODO https://www.w3.org/TR/image-capture/#constructors
     *
     * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
     */
    constructor(videoStreamTrack) {
      if (videoStreamTrack.kind !== 'video') throw new DOMException('NotSupportedError');
      this._videoStreamTrack = videoStreamTrack;
      if (!('readyState' in this._videoStreamTrack)) {
        // Polyfill for Firefox
        this._videoStreamTrack.readyState = 'live';
      }
      // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512
      this._previewStream = new MediaStream([videoStreamTrack]);
      this.videoElement = document.createElement('video');
      this.videoElementPlaying = new Promise(resolve => {
        this.videoElement.addEventListener('playing', resolve);
      });
      if (HTMLMediaElement) {
        this.videoElement.srcObject = this._previewStream; // Safari 11 doesn't allow use of createObjectURL for MediaStream
      } else {
        this.videoElement.src = URL.createObjectURL(this._previewStream);
      }
      this.videoElement.muted = true;
      this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784
      this.videoElement.play();
      this.canvasElement = document.createElement('canvas');
      // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
      this.canvas2dContext = this.canvasElement.getContext('2d');
    }
    /**
     * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
     * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
     */
    get videoStreamTrack() {
      return this._videoStreamTrack;
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
     * @return {Promise<PhotoCapabilities>} Fulfilled promise with
     * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
     * object on success, rejected promise on failure
     */
    getPhotoCapabilities() {
      return new Promise(function executorGPC(resolve, reject) {
        // TODO see https://github.com/w3c/mediacapture-image/issues/97
        const MediaSettingsRange = {
          current: 0,
          min: 0,
          max: 0
        };
        resolve({
          exposureCompensation: MediaSettingsRange,
          exposureMode: 'none',
          fillLightMode: ['none'],
          focusMode: 'none',
          imageHeight: MediaSettingsRange,
          imageWidth: MediaSettingsRange,
          iso: MediaSettingsRange,
          redEyeReduction: false,
          whiteBalanceMode: 'none',
          zoom: MediaSettingsRange
        });
        reject(new DOMException('OperationError'));
      });
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
     * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
     * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
     */
    setOptions(_photoSettings = {}) {
      return new Promise(function executorSO(_resolve, _reject) {
        // TODO
      });
    }
    /**
     * TODO
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
     * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
     * argument on success; rejected promise on failure
     */
    takePhoto() {
      const self = this;
      return new Promise(function executorTP(resolve, reject) {
        // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
        // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
        if (self._videoStreamTrack.readyState !== 'live') {
          return reject(new DOMException('InvalidStateError'));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            self.canvasElement.toBlob(resolve);
          } catch (error) {
            reject(new DOMException('UnknownError'));
          }
        });
      });
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
     * @return {Promise<ImageBitmap>} Fulfilled promise with
     * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
     * argument on success; rejected promise on failure
     */
    grabFrame() {
      const self = this;
      return new Promise(function executorGF(resolve, reject) {
        // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
        // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
        if (self._videoStreamTrack.readyState !== 'live') {
          return reject(new DOMException('InvalidStateError'));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE
            resolve(window.createImageBitmap(self.canvasElement));
          } catch (error) {
            reject(new DOMException('UnknownError'));
          }
        });
      });
    }
  };
}
window.ImageCapture = ImageCapture;
const CameraPWA = class {
  constructor(hostRef) {
    var _this = this;
    (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.facingMode = 'user';
    this.noDevicesText = 'No camera found';
    this.noDevicesButtonText = 'Choose image';
    this.showShutterOverlay = false;
    this.flashIndex = 0;
    this.hasCamera = null;
    this.rotation = 0;
    this.deviceError = null;
    // Whether the device has multiple cameras (front/back)
    this.hasMultipleCameras = false;
    // Whether the device has flash support
    this.hasFlash = false;
    // Flash modes for camera
    this.flashModes = [];
    // Current flash mode
    this.flashMode = 'off';
    this.handlePickFile = _e => {};
    this.handleShutterClick = _e => {
      console.debug('shutter click');
      this.capture();
    };
    this.handleRotateClick = _e => {
      this.rotate();
    };
    this.handleClose = _e => {
      this.handlePhoto && this.handlePhoto(null);
    };
    this.handleFlashClick = _e => {
      this.cycleFlash();
    };
    this.handleCancelPhoto = _e => {
      const track = this.stream && this.stream.getTracks()[0];
      let c = track && track.getConstraints();
      this.photo = null;
      this.photoSrc = null;
      if (c) {
        this.initCamera({
          video: {
            facingMode: c.facingMode
          }
        });
      } else {
        this.initCamera();
      }
    };
    this.handleAcceptPhoto = _e => {
      this.handlePhoto && this.handlePhoto(this.photo);
    };
    this.handleFileInputChange = /*#__PURE__*/function () {
      var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
        const input = e.target;
        const file = input.files[0];
        try {
          const orientation = yield _this.getOrientation(file);
          console.debug('Got orientation', orientation);
          _this.photoOrientation = orientation;
        } catch (e) {}
        _this.handlePhoto && _this.handlePhoto(file);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.handleVideoMetadata = e => {
      console.debug('Video metadata', e);
    };
    this.isServer = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "isServer");
  }
  componentDidLoad() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isServer) {
        return;
      }
      _this2.defaultConstraints = {
        video: {
          facingMode: _this2.facingMode
        }
      };
      // Figure out how many cameras we have
      yield _this2.queryDevices();
      // Initialize the camera
      yield _this2.initCamera();
    })();
  }
  componentDidUnload() {
    this.stopStream();
    this.photoSrc && URL.revokeObjectURL(this.photoSrc);
  }
  hasImageCapture() {
    return 'ImageCapture' in window;
  }
  /**
   * Query the list of connected devices and figure out how many video inputs we have.
   */
  queryDevices() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const devices = yield navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(d => d.kind == 'videoinput');
        _this3.hasCamera = !!videoDevices.length;
        _this3.hasMultipleCameras = videoDevices.length > 1;
      } catch (e) {
        _this3.deviceError = e;
      }
    })();
  }
  initCamera(constraints) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!constraints) {
        constraints = _this4.defaultConstraints;
      }
      try {
        const stream = yield navigator.mediaDevices.getUserMedia(Object.assign({
          video: true,
          audio: false
        }, constraints));
        _this4.initStream(stream);
      } catch (e) {
        _this4.deviceError = e;
        _this4.handleNoDeviceError && _this4.handleNoDeviceError(e);
      }
    })();
  }
  initStream(stream) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.stream = stream;
      _this5.videoElement.srcObject = stream;
      if (_this5.hasImageCapture()) {
        _this5.imageCapture = new window.ImageCapture(stream.getVideoTracks()[0]);
        yield _this5.initPhotoCapabilities(_this5.imageCapture);
      } else {
        _this5.deviceError = 'No image capture';
        _this5.handleNoDeviceError && _this5.handleNoDeviceError();
      }
      // Always re-render
      _this5.el.forceUpdate();
    })();
  }
  initPhotoCapabilities(imageCapture) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const c = yield imageCapture.getPhotoCapabilities();
      if (c.fillLightMode && c.fillLightMode.length > 1) {
        _this6.flashModes = c.fillLightMode.map(m => m);
        // Try to recall the current flash mode
        if (_this6.flashMode) {
          _this6.flashMode = _this6.flashModes[_this6.flashModes.indexOf(_this6.flashMode)] || 'off';
          _this6.flashIndex = _this6.flashModes.indexOf(_this6.flashMode) || 0;
        } else {
          _this6.flashIndex = 0;
        }
      }
    })();
  }
  stopStream() {
    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }
    this.stream && this.stream.getTracks().forEach(track => track.stop());
  }
  capture() {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.hasImageCapture()) {
        try {
          const photo = yield _this7.imageCapture.takePhoto({
            fillLightMode: _this7.flashModes.length > 1 ? _this7.flashMode : undefined
          });
          yield _this7.flashScreen();
          _this7.promptAccept(photo);
        } catch (e) {
          console.error('Unable to take photo!', e);
        }
      }
      _this7.stopStream();
    })();
  }
  promptAccept(photo) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.photo = photo;
      const orientation = yield _this8.getOrientation(photo);
      console.debug('Got orientation', orientation);
      _this8.photoOrientation = orientation;
      if (orientation) {
        switch (orientation) {
          case 1:
          case 2:
            _this8.rotation = 0;
            break;
          case 3:
          case 4:
            _this8.rotation = 180;
            break;
          case 5:
          case 6:
            _this8.rotation = 90;
            break;
          case 7:
          case 8:
            _this8.rotation = 270;
            break;
        }
      }
      _this8.photoSrc = URL.createObjectURL(photo);
    })();
  }
  getOrientation(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => {
        const view = new DataView(event.target.result);
        if (view.getUint16(0, false) !== 0xFFD8) {
          return resolve(-2);
        }
        const length = view.byteLength;
        let offset = 2;
        while (offset < length) {
          const marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
              return resolve(-1);
            }
            const little = view.getUint16(offset += 6, false) === 0x4949;
            offset += view.getUint32(offset + 4, little);
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) === 0x0112) {
                return resolve(view.getUint16(offset + i * 12 + 8, little));
              }
            }
          } else if ((marker & 0xFF00) !== 0xFF00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        return resolve(-1);
      };
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    });
  }
  rotate() {
    this.stopStream();
    const track = this.stream && this.stream.getTracks()[0];
    if (!track) {
      return;
    }
    let c = track.getConstraints();
    let facingMode = c.facingMode;
    if (!facingMode) {
      let c = track.getCapabilities();
      if (c.facingMode) {
        facingMode = c.facingMode[0];
      }
    }
    if (facingMode === 'environment') {
      this.initCamera({
        video: {
          facingMode: 'user'
        }
      });
    } else {
      this.initCamera({
        video: {
          facingMode: 'environment'
        }
      });
    }
  }
  setFlashMode(mode) {
    console.debug('New flash mode: ', mode);
    this.flashMode = mode;
  }
  cycleFlash() {
    if (this.flashModes.length > 0) {
      this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
      this.setFlashMode(this.flashModes[this.flashIndex]);
    }
  }
  flashScreen() {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, _reject) => {
        _this9.showShutterOverlay = true;
        setTimeout(() => {
          _this9.showShutterOverlay = false;
          resolve();
        }, 100);
      });
    })();
  }
  iconExit() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconPhotos() {
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '512',
      height: '512',
      viewBox: '0 0 512 512'
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
      d: 'M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z'
    }), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
      d: 'M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z'
    }));
  }
  iconConfirm() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconReverseCamera() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  iconRetake() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconFlashOff() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  iconFlashOn() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E`;
  }
  iconFlashAuto() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  render() {
    // const acceptStyles = { transform: `rotate(${-this.rotation}deg)` };
    const acceptStyles = {};
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "camera-wrapper"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "camera-header"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("section", {
      class: "items"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "item close",
      onClick: e => this.handleClose(e)
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconExit()
    })), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "item flash",
      onClick: e => this.handleFlashClick(e)
    }, this.flashModes.length > 0 && (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, this.flashMode == 'off' ? (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconFlashOff()
    }) : '', this.flashMode == 'auto' ? (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconFlashAuto()
    }) : '', this.flashMode == 'flash' ? (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconFlashOn()
    }) : '')))), (this.hasCamera === false || !!this.deviceError) && (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "no-device"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("h2", null, this.noDevicesText), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      htmlFor: "_pwa-elements-camera-input"
    }, this.noDevicesButtonText), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      type: "file",
      id: "_pwa-elements-camera-input",
      onChange: this.handleFileInputChange,
      accept: "image/*",
      class: "select-file-button"
    })), this.photoSrc ? (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "accept"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "accept-image",
      style: Object.assign({
        backgroundImage: `url(${this.photoSrc})`
      }, acceptStyles)
    })) : (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "camera-video"
    }, this.showShutterOverlay && (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "shutter-overlay"
    }), this.hasImageCapture() ? (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("video", {
      ref: el => this.videoElement = el,
      onLoadedMetaData: this.handleVideoMetadata,
      autoplay: true,
      playsinline: true
    }) : (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("canvas", {
      ref: el => this.canvasElement = el,
      width: "100%",
      height: "100%"
    }), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("canvas", {
      class: "offscreen-image-render",
      ref: e => this.offscreenCanvas = e,
      width: "100%",
      height: "100%"
    })), this.hasCamera && (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "camera-footer"
    }, !this.photo ? [(0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "pick-image",
      onClick: this.handlePickFile
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      htmlFor: "_pwa-elements-file-pick"
    }, this.iconPhotos()), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      type: "file",
      id: "_pwa-elements-file-pick",
      onChange: this.handleFileInputChange,
      accept: "image/*",
      class: "pick-image-button"
    })), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "shutter",
      onClick: this.handleShutterClick
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "shutter-button"
    })), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "rotate",
      onClick: this.handleRotateClick
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconReverseCamera()
    }))] : (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("section", {
      class: "items"
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "item accept-cancel",
      onClick: e => this.handleCancelPhoto(e)
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconRetake()
    })), (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "item accept-use",
      onClick: e => this.handleAcceptPhoto(e)
    }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
      src: this.iconConfirm()
    })))));
  }
  static get assetsDirs() {
    return ["icons"];
  }
  get el() {
    return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);
  }
  static get style() {
    return ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}\@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
  }
};


/***/ })

}]);
//# sourceMappingURL=527.88a189ef698bb777.js.map