"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[1876],{

/***/ 51876:
/*!************************************!*\
  !*** ./libs/calendar/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModule": () => (/* reexport safe */ _lib_calendar_module__WEBPACK_IMPORTED_MODULE_0__.CalendarModule),
/* harmony export */   "calendarRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.calendarRoutes)
/* harmony export */ });
/* harmony import */ var _lib_calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/calendar.module */ 5816);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 60980);



/***/ }),

/***/ 5816:
/*!**************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModule": () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/angular */ 98245);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 60980);
/* harmony import */ var _containers_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/calendar-page/calendar-page.component */ 79356);
/* harmony import */ var _fullcalendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullcalendar.service */ 37833);
/* harmony import */ var _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appointment-modal/appointment-modal.component */ 41492);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color-picker */ 60743);
/* harmony import */ var _pipes_view_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/view-name.pipe */ 18772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);



 // must go before plugins









class CalendarModule {}
CalendarModule.ɵfac = function CalendarModule_Factory(t) {
  return new (t || CalendarModule)();
};
CalendarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CalendarModule
});
CalendarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_fullcalendar_service__WEBPACK_IMPORTED_MODULE_2__.FullCalendarService],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.calendarRoutes), ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__.ColorPickerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CalendarModule, {
    declarations: [_containers_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_1__.CalendarPageComponent, _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_3__.AppointmentModalComponent, _pipes_view_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ViewNamePipe],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__.ColorPickerModule]
  });
})();

/***/ }),

/***/ 41068:
/*!***************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOptions": () => (/* binding */ getOptions)
/* harmony export */ });
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 28186);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/timegrid */ 32611);
/* harmony import */ var _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/google-calendar */ 46516);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/list */ 19142);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 24213);





const getOptions = ({
  initialView
}) => ({
  plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_2__["default"]],
  height: window.innerHeight - 117,
  initialView,
  headerToolbar: false,
  themeSystem: 'standard',
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    meridiem: false,
    hour12: false
  },
  slotLabelFormat: {
    hour12: false,
    minute: '2-digit',
    hour: '2-digit'
  },
  firstDay: 1,
  weekends: true,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  nowIndicator: true,
  // https://fullcalendar.io/docs/content-injection
  dayHeaderContent: a => ({
    html: `
    <ion-text color="${a.isToday ? 'primary' : 'none'}">
      ${a.date.toLocaleDateString([], {
      weekday: 'long'
    })}
      <br/><span>
        ${a.date.toLocaleDateString([], {
      day: 'numeric'
    })}
      </span>
    </ion-text>
  `
  }),
  // https://fullcalendar.io/docs/view-specific-options
  views: {
    dayGridMonth: {
      dayHeaderContent: a => ({
        html: `
        ${a.date.toLocaleDateString([], {
          weekday: 'short'
        })}
      `
      }),
      titleFormat: {
        hour12: false
      }
    },
    agendaThreeDay: {
      type: 'timeGrid',
      duration: {
        days: 3
      },
      buttonText: '3 day'
    }
  },
  loading: isLoading => {
    console.log('loading', isLoading);
  },
  allDayText: ''
});

/***/ }),

/***/ 41492:
/*!*******************************************************************************************!*\
  !*** ./libs/calendar/src/lib/components/appointment-modal/appointment-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentModalComponent": () => (/* binding */ AppointmentModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 28920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 14190);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);








function AppointmentModalComponent_ion_title_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!((tmp_0_0 = ctx_r0.form.get("_id")) == null ? null : tmp_0_0.value) ? "Create Event" : "Update Event");
  }
}
function AppointmentModalComponent_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.editModeEnabled = !ctx_r6.editModeEnabled);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppointmentModalComponent_div_8_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, (tmp_0_0 = ctx_r8.form.get("start")) == null ? null : tmp_0_0.value, "EEEE dd MMMM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, (tmp_0_0 = ctx_r8.form.get("start")) == null ? null : tmp_0_0.value, "HH:mm"), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 9, (tmp_0_0 = ctx_r8.form.get("end")) == null ? null : tmp_0_0.value, "HH:mm"), " ");
  }
}
function AppointmentModalComponent_div_8_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, (tmp_0_0 = ctx_r10.form.get("start")) == null ? null : tmp_0_0.value, "EEEE dd MMMM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, (tmp_0_0 = ctx_r10.form.get("start")) == null ? null : tmp_0_0.value, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" To ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, (tmp_1_0 = ctx_r10.form.get("end")) == null ? null : tmp_1_0.value, "EEEE dd MMMM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 13, (tmp_1_0 = ctx_r10.form.get("end")) == null ? null : tmp_1_0.value, "HH:mm"), " ");
  }
}
function AppointmentModalComponent_div_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "ion-text", 10)(2, "p", 17)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const description_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", description_r12, " ");
  }
}
function AppointmentModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "ion-text", 10)(2, "p", 11)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Database: Ceramic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppointmentModalComponent_div_8_ng_container_7_Template, 6, 12, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppointmentModalComponent_div_8_ng_template_10_Template, 8, 16, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppointmentModalComponent_div_8_div_12_Template, 7, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r2.form.get("title")) == null ? null : tmp_0_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 4, (tmp_1_0 = ctx_r2.form.get("start")) == null ? null : tmp_1_0.value, "EEEE dd MMMM") === _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 7, (tmp_1_0 = ctx_r2.form.get("end")) == null ? null : tmp_1_0.value, "EEEE dd MMMM"))("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.form.get("description")) == null ? null : tmp_3_0.value);
  }
}
function AppointmentModalComponent_ng_template_9_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-datetime", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function AppointmentModalComponent_ng_template_9_ng_template_13_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      let tmp_b_0;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]((tmp_b_0 = ctx_r18.form.get("start")) == null ? null : tmp_b_0.patchValue(ctx_r18.formatDate((_r17 == null ? null : _r17.value) || "")));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 32)(4, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ng_template_9_ng_template_13_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.actions("cancelDateTime", _r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ng_template_9_ng_template_13_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.actions("confirmDateTime", _r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, (tmp_0_0 = ctx_r13.form.get("start")) == null ? null : tmp_0_0.value, "YYYY-MM-ddTHH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("presentation", ((tmp_1_0 = ctx_r13.form.get("allDay")) == null ? null : tmp_1_0.value) === true ? "time" : "date-time");
  }
}
function AppointmentModalComponent_ng_template_9_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-datetime", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function AppointmentModalComponent_ng_template_9_ng_template_21_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      let tmp_b_0;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]((tmp_b_0 = ctx_r23.form.get("end")) == null ? null : tmp_b_0.patchValue(ctx_r23.formatDate((_r22 == null ? null : _r22.value) || "")));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 32)(4, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ng_template_9_ng_template_21_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.actions("cancelDateTime", _r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ng_template_9_ng_template_21_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.actions("confirmDateTime", _r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, (tmp_0_0 = ctx_r14.form.get("end")) == null ? null : tmp_0_0.value, "YYYY-MM-ddTHH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("presentation", ((tmp_1_0 = ctx_r14.form.get("allDay")) == null ? null : tmp_1_0.value) === true ? "time" : "date-time");
  }
}
function AppointmentModalComponent_ng_template_9_ion_select_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", calendar_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", calendar_r27.name, " ");
  }
}
function AppointmentModalComponent_ng_template_9_ion_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ng_template_9_ion_button_35_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.actions("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "delete event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [];
};
function AppointmentModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 18)(1, "ion-list")(2, "ion-item")(3, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 21)(7, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-text", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-modal", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppointmentModalComponent_ng_template_9_ng_template_13_Template, 8, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 23)(15, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-text", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppointmentModalComponent_ng_template_9_ng_template_21_Template, 8, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item")(23, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Calendars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function AppointmentModalComponent_ng_template_9_Template_ion_select_ionChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.actions("changeCalendar", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AppointmentModalComponent_ng_template_9_ion_select_option_26_Template, 2, 2, "ion-select-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item")(28, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "All Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function AppointmentModalComponent_ng_template_9_Template_ion_toggle_ionChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.actions("toggleAllDay", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item")(32, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AppointmentModalComponent_ng_template_9_ion_button_35_Template, 2, 0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 6, (tmp_1_0 = ctx_r4.form.get("start")) == null ? null : tmp_1_0.value, "EEEE d MMMM - HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 9, (tmp_2_0 = ctx_r4.form.get("end")) == null ? null : tmp_2_0.value, "EEEE d MMMM - HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ((tmp_3_0 = ctx_r4.form.get("calendarIds")) == null ? null : tmp_3_0.value) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.userCalendars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!((tmp_5_0 = ctx_r4.form.get("_id")) == null ? null : tmp_5_0.value));
  }
}
function AppointmentModalComponent_ion_footer_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer")(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ion_footer_11_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.actions("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_ion_footer_11_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      let tmp_b_0;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.actions(!((tmp_b_0 = ctx_r36.form.get("_id")) == null ? null : tmp_b_0.value) ? "save" : "update"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !((tmp_1_0 = ctx_r5.form.get("_id")) == null ? null : tmp_1_0.value) ? "save" : "update", " ");
  }
}
class AppointmentModalComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this._calendars = [];
    this.editModeEnabled = false;
  }
  set calendars(value) {
    this._calendars = value;
  }
  get userCalendars() {
    return this._calendars;
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(undefined),
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
      calendarIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)])),
      allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
    const {
      start,
      end,
      ...data
    } = this.data;
    // patch data value to form
    this.form.patchValue({
      ...data,
      start: start ? new Date(start) : new Date(),
      end: end ? new Date(end) : new Date()
    });
    // patch calendarIds value to form
    data?.calendarIds?.forEach(cal => {
      this.form.get('calendarIds').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(cal));
    });
    // patch default calendar for create mode
    if (this.editModeEnabled && !this.data._id && this.userCalendars?.[0]?._id) {
      this.form.get('calendarIds').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.userCalendars[0]._id));
    }
  }
  actions(type, payload) {
    switch (true) {
      case type === 'changeCalendar':
        {
          this._onCheckboxChange(payload);
          break;
        }
      case type === 'toggleAllDay':
        {
          const {
            detail: {
              checked
            }
          } = payload;
          if (checked) {
            // patch value with start and end with same day
            const start = this.form.get('start')?.value;
            const end = this.form.get('end')?.value;
            const startDate = start;
            const endDate = end;
            const startDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(startDate);
            const endDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(endDate);
            const startMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(startDate) + 1;
            const endMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(endDate) + 1;
            const startYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(startDate);
            const endYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(endDate);
            console.log('>>', startDay === endDay);
            if (startDay === endDay) {
              this.form.patchValue({
                start: this.formatDate(`${startYear}-${startMonth < 10 ? `0${startMonth}` : startMonth}-${startDay}`),
                end: this.formatDate(`${startYear}-${startMonth < 10 ? `0${startMonth}` : startMonth}-${startDay + 1}`)
              });
            }
          }
          console.log('toggleAllDay', checked);
          break;
        }
      case type === 'cancelDateTime':
        {
          const el = payload.el.closest('ion-popover') || payload.el.closest('ion-modal');
          el.dismiss();
          break;
        }
      case type === 'confirmDateTime':
        {
          const popover = payload.el.closest('ion-popover') || payload.el.closest('ion-modal');
          console.log('confirmDateTime', payload);
          // confirm date time
          payload.confirm();
          // close popover
          if (popover) popover.dismiss();
          break;
        }
      case type === 'close':
      case type === 'cancel':
        this.modalCtrl.dismiss(undefined, 'cancel');
        break;
      case type === 'save':
      case type === 'update':
        this.modalCtrl.dismiss({
          ...this.data,
          ...this.form.value
        }, type);
        break;
      case type === 'delete':
        this.modalCtrl.dismiss({
          _id: this.form.value._id
        }, 'delete');
    }
  }
  formatDate(value) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(value);
  }
  _onCheckboxChange(e) {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const checkArray = _this.form.get('calendarIds');
      // clear checkbox Array
      checkArray.clear();
      // add new values
      const value = e.target.value;
      if (Array.isArray(value)) {
        value.forEach(element => {
          checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(element));
        });
      } else {
        checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(value));
      }
    })();
  }
}
AppointmentModalComponent.ɵfac = function AppointmentModalComponent_Factory(t) {
  return new (t || AppointmentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController));
};
AppointmentModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppointmentModalComponent,
  selectors: [["hexa-appointment-modal"]],
  inputs: {
    data: "data",
    editModeEnabled: "editModeEnabled",
    calendars: "calendars"
  },
  decls: 12,
  vars: 5,
  consts: [["color", "primary"], [4, "ngIf"], ["slot", "end"], [3, "click", 4, "ngIf"], [3, "click"], ["slot", "icon-only", "color", "light", "name", "close-outline"], ["class", "ion-padding", 4, "ngIf", "ngIfElse"], ["editMode", ""], ["slot", "icon-only", "color", "light", "name", "create-outline"], [1, "ion-padding"], ["color", "medium"], [1, "ion-no-margin", "ion-no-padding"], [4, "ngIf", "ngIfElse"], ["multiDays", ""], ["class", "ion-margin-top", 4, "ngIf"], [1, "ion-no-margin"], [1, "ion-margin-top"], [1, "ion-no-margin", "ion-padding-vertical"], [3, "formGroup"], ["color", "primary", "position", "floating"], ["type", "text", "formControlName", "title", "placeholder", "New Event"], ["button", "true", "id", "open-start-input"], ["size", "cover", "trigger", "open-start-input", "show-backdrop", "false"], ["button", "true", "id", "open-end-input"], ["size", "cover", "trigger", "open-end-input", "show-backdrop", "false"], ["formArrayName", "calendarIds", "multiple", "false", 3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "medium", "formControlName", "allDay", 3, "ionChange"], ["autoGrow", "true", "rows", "3", "formControlName", "description"], ["fill", "outline", "color", "danger", "expand", "block", "class", "ion-margin", 3, "click", 4, "ngIf"], ["size", "cover", "first-day-of-week", "1", "hour-cycle", "h23", 3, "presentation", "value", "ionChange"], ["popoverStartDate", ""], ["slot", "buttons"], ["color", "danger", 3, "click"], ["color", "primary", 3, "click"], ["size", "cover", "first-day-of-week", "1", 3, "value", "presentation", "ionChange"], ["popoverEndDate", ""], [3, "value"], ["fill", "outline", "color", "danger", "expand", "block", 1, "ion-margin", 3, "click"], ["color", "primary", 3, "disabled", "click"]],
  template: function AppointmentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppointmentModalComponent_ion_title_2_Template, 2, 1, "ion-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppointmentModalComponent_ion_button_4_Template, 2, 0, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentModalComponent_Template_ion_button_click_5_listener() {
        return ctx.actions("cancel");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppointmentModalComponent_div_8_Template, 13, 10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppointmentModalComponent_ng_template_9_Template, 36, 13, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppointmentModalComponent_ion_footer_11_Template, 7, 2, "ion-footer", 1);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editModeEnabled === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editModeEnabled !== true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editModeEnabled !== true)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editModeEnabled === true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["[_nghost-%COMP%]   ion-popover[_ngcontent-%COMP%] {\n  --width: 540px;\n  --max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvYXBwb2ludG1lbnQtbW9kYWwvYXBwb2ludG1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJhcHBvaW50bWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLXBvcG92ZXIge1xuICAgIC0td2lkdGg6IDU0MHB4O1xuICAgIC0tbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59IiwiOmhvc3QgaW9uLXBvcG92ZXIge1xuICAtLXdpZHRoOiA1NDBweDtcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL2FwcG9pbnRtZW50LW1vZGFsL2FwcG9pbnRtZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvYXBwb2ludG1lbnQtbW9kYWwvYXBwb2ludG1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENBLDRwQkFBNHBCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tcG9wb3ZlciB7XG4gICAgLS13aWR0aDogNTQwcHg7XG4gICAgLS1tYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCI6aG9zdCBpb24tcG9wb3ZlciB7XG4gIC0td2lkdGg6IDU0MHB4O1xuICAtLW1heC13aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 79356:
/*!***********************************************************************************!*\
  !*** ./libs/calendar/src/lib/containers/calendar-page/calendar-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageComponent": () => (/* binding */ CalendarPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ 51176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _calendar_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../calendar.options */ 41068);
/* harmony import */ var _fullcalendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fullcalendar.service */ 37833);
/* harmony import */ var _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/appointment-modal/appointment-modal.component */ 41492);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/angular */ 98245);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color-picker */ 60743);
/* harmony import */ var _pipes_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/view-name.pipe */ 18772);
















const _c0 = ["calendarCmp"];
function CalendarPageComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list", 28)(1, "ion-radio-group", 29)(2, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ng_template_24_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.actions("view", {
        target: {
          value: "timeGridDay"
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-radio", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ng_template_24_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.actions("view", {
        target: {
          value: "timeGridWeek"
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-radio", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ng_template_24_Template_ion_item_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.actions("view", {
        target: {
          value: "dayGridMonth"
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-radio", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ng_template_24_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.actions("view", {
        target: {
          value: "agendaThreeDay"
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "3 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "ion-radio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ng_template_24_Template_ion_item_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.actions("view", {
        target: {
          value: "listWeek"
        }
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "ion-radio", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.currentView);
  }
}
function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content")(1, "ion-list", 42)(2, "ion-list-header")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Calendar options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-item", 43)(6, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_ion_input_ionChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r16.disabled === true ? _r16.disabled = false : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-item")(11, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_ion_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.actions("openColorPicker", {
        target: $event.target,
        colorPicker: _r15
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("colorPickerChange", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_div_colorPickerChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const cal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](cal_r11.color = $event);
    })("colorPickerSelect", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_div_colorPickerSelect_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const cal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r22.actions("setCalendarColor", {
        calendar: cal_r11,
        color: $event
      });
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_ion_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const cal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.actions("deleteCalendar", {
        calendar: cal_r11
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " delete calendar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-footer")(20, "ion-toolbar")(21, "ion-buttons", 50)(22, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_ion_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12 == null ? null : _r12.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-button", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template_ion_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
      const cal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      ctx_r27.actions("updateCalendarName", {
        calendar: cal_r11,
        name: _r14.value
      });
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12 == null ? null : _r12.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cal_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("--border-color", cal_r11.color)("--background", cal_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cal_r11.color || "select", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cpOKButton", true)("cpCancelButton", true)("cpSaveClickOutside", false)("cpDisableInput", false)("colorPicker", cal_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
  }
}
function CalendarPageComponent_ion_list_37_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function CalendarPageComponent_ion_list_37_ion_item_1_Template_ion_checkbox_ionChange_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const cal_r11 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.actions("toggleCalendarVisibility", cal_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-popover", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, CalendarPageComponent_ion_list_37_ion_item_1_ng_template_8_Template, 27, 12, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cal_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cal_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", cal_r11.isVisible === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("style", "--background: " + cal_r11.color + ";--background-checked: " + cal_r11.color + ";--border-color-checked: " + cal_r11.color + ";" + ";--border-color: " + cal_r11.color + ";", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "calendar-options-", cal_r11._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("trigger", "calendar-options-", cal_r11._id, "");
  }
}
function CalendarPageComponent_ion_list_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarPageComponent_ion_list_37_ion_item_1_Template, 9, 5, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_ion_list_37_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.actions("newCalendar"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Add calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const calendarsData_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", calendarsData_r9);
  }
}
class CalendarPageComponent {
  constructor(_loaderService, _fullCalendarService, _modalCtrl, _alertService, _popoverService) {
    var _this = this;
    this._loaderService = _loaderService;
    this._fullCalendarService = _fullCalendarService;
    this._modalCtrl = _modalCtrl;
    this._alertService = _alertService;
    this._popoverService = _popoverService;
    this.title = 'Calendar Page ';
    this.calendarsData$ = this._fullCalendarService.calendarsData$;
    this.uiConfig$ = this._fullCalendarService.uiConfig$;
    this.currentView = 'timeGridWeek';
    this.isVisible$ = this._fullCalendarService.initalized$;
    this.viewTitle$ = this._fullCalendarService.viewTitle$;
    this.fullCalendarOptions = {
      ...(0,_calendar_options__WEBPACK_IMPORTED_MODULE_2__.getOptions)({
        initialView: this.currentView
      }),
      eventDrop: function () {
        var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          return yield _this._fullCalendarService.handleEvent(e);
        });
        return function eventDrop(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      eventResize: function () {
        var _ref2 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          return yield _this._fullCalendarService.handleEvent(e);
        });
        return function eventResize(_x2) {
          return _ref2.apply(this, arguments);
        };
      }(),
      eventClick: function () {
        var _ref3 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          e.jsEvent.preventDefault();
          const editModeEnabled = false;
          yield _this._fullCalendarService.handleEvent(e, editModeEnabled);
        });
        return function eventClick(_x3) {
          return _ref3.apply(this, arguments);
        };
      }(),
      eventsSet: function () {
        var _ref4 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return yield _this._fullCalendarService.handleEventsSet();
        });
        return function eventsSet() {
          return _ref4.apply(this, arguments);
        };
      }(),
      select: function () {
        var _ref5 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          const {
            role,
            jsEvent,
            ...data
          } = yield _this._openModal(e);
          if (!data) return;
          if (role === 'cancel' || role === 'backdrop' || !role) return;
          yield _this._fullCalendarService.handleDateSelect(data);
        });
        return function select(_x4) {
          return _ref5.apply(this, arguments);
        };
      }(),
      eventDidMount: function () {
        var _ref6 = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          return yield _this._fullCalendarService.handleEventDidMount(e);
        });
        return function eventDidMount(_x5) {
          return _ref6.apply(this, arguments);
        };
      }(),
      businessHours: [{
        // days of week. an array of zero-based day of week integers (0=Sunday)
        daysOfWeek: [1, 2, 3, 4],
        startTime: '10:00',
        endTime: '18:00' // an end time (6pm in this example)
      }]
    };
  }

  ionViewWillEnter() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._fullCalendarService.loadUIConfigFromDatabase();
    })();
  }
  ngAfterViewInit() {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // get calendar from database
      const calendars = yield _this3._fullCalendarService.loadCalendarsFromDatabase();
      // init calendar component using service
      yield _this3._fullCalendarService.initService(_this3.calendarCmp, calendars);
      _this3._fullCalendarService.calendarAPI();
    })();
  }
  actions(type, payload) {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (true) {
        case type === 'select-date':
          {
            const {
              detail: {
                value
              }
            } = payload;
            _this4._fullCalendarService.calendarAPI().gotoDate(new Date(value));
            break;
          }
        case type === 'updateCalendarName':
          {
            const {
              calendar,
              name
            } = payload;
            _this4._loaderService.setStatus(true);
            yield _this4._fullCalendarService.updateCalendar({
              ...calendar,
              name
            });
            _this4._loaderService.setStatus(false);
            break;
          }
        case type === 'openColorPicker':
          {
            const {
              colorPicker,
              target
            } = payload;
            colorPicker?.click();
            break;
          }
        case type === 'deleteCalendar':
          {
            const {
              calendar
            } = payload;
            _this4._confirmBefore(`You are about to delete this calendar. 
          This action cannot be undone and you will lose all events associated with this calendar. 
          Are you sure you want to continue?`, /*#__PURE__*/(0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              _this4._loaderService.setStatus(true);
              yield _this4._fullCalendarService.deleteCalendar(calendar);
              _this4._loaderService.setStatus(false);
            }));
            break;
          }
        // case type === 'disconnect':{
        //   const confirm = await this._confirm({
        //     header: 'Disconnect',
        //     message: 'Are you sure you want to disconnect?',
        //   }); 
        //   if (confirm) {
        //     this._loaderService.setStatus(true);
        //     await this._disconnect();
        //     this._loaderService.setStatus(false);
        //   }
        //   break;
        // }
        case type === 'setCalendarColor':
          {
            const {
              calendar,
              color
            } = payload;
            _this4._loaderService.setStatus(true);
            yield _this4._fullCalendarService.updateCalendar({
              ...calendar,
              color
            });
            _this4._loaderService.setStatus(false);
            break;
          }
        case type === 'toggleCalendarVisibility':
          {
            payload.isVisible = !payload.isVisible;
            _this4._loaderService.setStatus(true);
            yield _this4._fullCalendarService.updateCalendarsVisibility(payload);
            _this4._loaderService.setStatus(false);
            break;
          }
        case type === 'newCalendar':
          {
            _this4._loaderService.setStatus(true);
            _this4._fullCalendarService.createNewCalendar();
            _this4._loaderService.setStatus(false);
            break;
          }
        case type === 'toggleWeekends':
          _this4.fullCalendarOptions.weekends = !_this4.fullCalendarOptions.weekends;
          break;
        case type === 'next':
          {
            _this4._fullCalendarService.calendarAPI()?.next();
            const endDate = _this4._fullCalendarService.calendarAPI()?.view.currentEnd;
            if (endDate) {
              // this._loaderService.setStatus(true);
              yield _this4._fullCalendarService.loadEventsPart(endDate);
              // this._loaderService.setStatus(false);
            }

            break;
          }
        case type === 'prev':
          {
            _this4._fullCalendarService.calendarAPI()?.prev();
            const startDate = _this4._fullCalendarService.calendarAPI()?.view.currentStart;
            if (startDate) {
              // this._loaderService.setStatus(true);
              yield _this4._fullCalendarService.loadEventsPart(startDate);
              // this._loaderService.setStatus(false);
            }

            break;
          }
        case type === 'today':
          _this4._fullCalendarService.calendarAPI()?.today();
          break;
        case type === 'view':
          {
            const {
              target: {
                value = undefined
              } = {}
            } = payload;
            _this4.currentView = value;
            _this4._fullCalendarService.calendarAPI()?.changeView(value);
            break;
          }
      }
    })();
  }
  _openModal(arg, editModeEnabled = true) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendars = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this5.calendarsData$);
      const modal = yield _this5._modalCtrl.create({
        component: _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_4__.AppointmentModalComponent,
        componentProps: {
          data: {
            ...arg
          },
          editModeEnabled,
          calendars
        }
      });
      modal.present();
      const {
        data = undefined,
        role = 'cancel'
      } = yield modal.onDidDismiss();
      return role !== 'cancel' ? {
        ...data,
        role
      } : {
        role
      };
    })();
  }
  _confirmBefore(message, cb) {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionAlert = yield _this6._alertService.create({
        header: 'Confirm',
        message,
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          role: 'ok'
        }]
      });
      yield ionAlert.present();
      const {
        role
      } = yield ionAlert.onDidDismiss();
      if (role === 'ok') {
        // closing popover calendar options UI
        const popover = yield _this6._popoverService.getTop();
        if (popover) {
          yield popover.dismiss();
        }
        return yield cb();
      }
    })();
  }
}
CalendarPageComponent.ɵfac = function CalendarPageComponent_Factory(t) {
  return new (t || CalendarPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_5__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_fullcalendar_service__WEBPACK_IMPORTED_MODULE_3__.FullCalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController));
};
CalendarPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CalendarPageComponent,
  selectors: [["hexa-calendar-page"]],
  viewQuery: function CalendarPageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.calendarCmp = _t.first);
    }
  },
  decls: 52,
  vars: 14,
  consts: [[1, "ion-no-border"], ["slot", "start", 1, "ion-margin-start"], [1, "ion-margin-start", "ion-margin-end", "ion-margin-top", "ion-no-padding"], [1, "ion-align-items-center"], ["size", "auto"], ["fill", "none", 3, "click"], ["name", "chevron-back-outline"], ["name", "chevron-forward-outline"], ["shape", "round", "fill", "none", 3, "click"], ["id", "open-view-selector", "shape", "round", "fill", "none"], ["slot", "start"], ["name", "chevron-down-outline", "slot", "end"], ["trigger", "open-view-selector", "show-backdrop", "false"], ["size", "3"], ["fullscreen", "", 1, "ion-padding"], [1, "ion-margin-top"], [1, "ion-align-items-start"], ["size", "auto", 1, "ion-hide-md-down"], ["presentation", "date", "max", "3000-12-12", "first-day-of-week", "1", 3, "ionChange"], ["value", "calendars"], ["slot", "header"], ["slot", "content", "lines", "none", "class", "ion-no-padding", 4, "ngIf"], ["slot", "content", "lines", "none", 1, "ion-no-padding"], ["lines", "none", "button", "", 3, "click"], ["color", "medium"], ["slot", "start", "name", "add-outline"], [3, "options", "hidden"], ["calendarCmp", ""], ["lines", "none"], [3, "value"], [3, "click"], ["slot", "start", "value", "timeGridDay"], ["slot", "start", "value", "timeGridWeek"], ["slot", "start", "value", "dayGridMonth"], ["slot", "start", "value", "agendaThreeDay"], ["slot", "start", "value", "listWeek"], [4, "ngFor", "ngForOf"], ["slot", "start", 3, "checked", "ionChange"], ["fill", "none", "slot", "end", 1, "calendar-options", 3, "id"], ["slot", "icon-only", "size", "small", "name", "ellipsis-vertical", "color", "medium"], ["side", "start", "alignment", "center", "reference", "event", 1, "popoverColorPicker", 3, "trigger"], ["popOver", ""], ["lines", "none", 1, "ion-no-padding", "ion-margin-bottom"], [1, "ion-text-end"], ["type", "text", 3, "value", "ionChange"], ["inputName", ""], ["slot", "end", "size", "small", "fill", "solid", 1, "cp-button-open", 3, "click"], ["cpWidth", "250", "cpOutputFormat", "hex", "cpDialogDisplay", "inline", "cpOKButtonClass", "cp-button primary", "cpCancelButtonClass", "cp-button danger", "cpCancelButtonText", "RESET", "cpPosition", "top", 3, "cpOKButton", "cpCancelButton", "cpSaveClickOutside", "cpDisableInput", "colorPicker", "colorPickerChange", "colorPickerSelect"], ["colorPicker", ""], ["fill", "outline", "color", "danger", "expand", "block", "size", "small", 1, "ion-margin", 3, "click"], ["slot", "end"], ["size", "small", "color", "danger", 3, "click"], ["size", "small", "color", "primary", 3, "disabled", "click"], ["updateBtn", ""]],
  template: function CalendarPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-menu-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-grid", 2)(4, "ion-row", 3)(5, "ion-col", 4)(6, "ion-text")(7, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-col", 4)(11, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_Template_ion_button_click_11_listener() {
        return ctx.actions("prev");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_Template_ion_button_click_13_listener() {
        return ctx.actions("next");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-col", 4)(16, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_Template_ion_button_click_16_listener() {
        return ctx.actions("today");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "today");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-button", 9)(19, "ion-text", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "viewName");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-popover", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CalendarPageComponent_ng_template_24_Template, 22, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "ion-col", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ion-content", 14)(27, "ion-grid", 15)(28, "ion-row", 16)(29, "ion-col", 17)(30, "div")(31, "ion-datetime", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function CalendarPageComponent_Template_ion_datetime_ionChange_31_listener($event) {
        return ctx.actions("select-date", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-accordion-group", 19)(33, "ion-accordion", 19)(34, "ion-item", 20)(35, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " My Calendars ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, CalendarPageComponent_ion_list_37_Template, 6, 1, "ion-list", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "ion-accordion", 19)(40, "ion-item", 20)(41, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Time slots options ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "ion-list", 22)(44, "ion-item", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarPageComponent_Template_ion_item_click_44_listener() {
        return ctx.actions("newTimeSlot");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "ion-label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Add time slot");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ion-col");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "full-calendar", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, ctx.viewTitle$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 8, ctx.currentView));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("scroll-y", ctx.currentView === "dayGridMonth" ? true : false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 10, ctx.calendarsData$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.fullCalendarOptions)("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 12, ctx.isVisible$) !== true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__.FullCalendarComponent, ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__.ColorPickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__.ViewNamePipe],
  styles: ["[_nghost-%COMP%] {\n  --fc-event-border-color: var(--ionic-color-primary-shade);\n  --fc-event-bg-color: var(--ion-color-primary-tint);\n  --fc-today-bg-color: rgba(var(--ion-color-primary-rgb), 0.05);\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background:transparent;\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 50%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   full-calendar[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 1.1rem;\n  overflow: hidden;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmljb2xhcyUyMEZhemlvL3JlcG9zL2hleGEvbGlicy9jYWxlbmRhci9zcmMvbGliL2NvbnRhaW5lcnMvY2FsZW5kYXItcGFnZS9jYWxlbmRhci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHlEQUFBO0VBQ0Esa0RBQUE7RUFDQSw2REFBQTtBQ0FOO0FERU07RUFDRSx3QkFBQTtBQ0FSO0FERVE7RUFDRSxlQUFBO0FDQVY7QURLUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSFo7QURNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwREFBQTtFQUNBLGdCQUFBO0FDSlIiLCJmaWxlIjoiY2FsZW5kYXItcGFnZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7XG4gICAgICAtLWZjLWV2ZW50LWJvcmRlci1jb2xvcjogdmFyKC0taW9uaWMtY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgICAtLWZjLWV2ZW50LWJnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICAgIC0tZmMtdG9kYXktYmctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XG4gICAgIFxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVsbC1jYWxlbmRhciwgZGl2IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIFxuICAiLCI6aG9zdCB7XG4gIC0tZmMtZXZlbnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb25pYy1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgLS1mYy1ldmVudC1iZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIC0tZmMtdG9kYXktYmctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNSk7XG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi10b29sYmFyIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuOmhvc3QgaW9uLXRvb2xiYXIgaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGZ1bGwtY2FsZW5kYXIsIDpob3N0IGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2FsZW5kYXIvc3JjL2xpYi9jb250YWluZXJzL2NhbGVuZGFyLXBhZ2UvY2FsZW5kYXItcGFnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2NhbGVuZGFyL3NyYy9saWIvY29udGFpbmVycy9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UseURBQUE7RUFDQSxrREFBQTtFQUNBLDZEQUFBO0FDQU47QURFTTtFQUNFLHdCQUFBO0FDQVI7QURFUTtFQUNFLGVBQUE7QUNBVjtBREtRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRE1NO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRENBLDQvRUFBNC9FIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgLS1mYy1ldmVudC1ib3JkZXItY29sb3I6IHZhcigtLWlvbmljLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgLS1mYy1ldmVudC1iZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgICAtLWZjLXRvZGF5LWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xuICAgICBcbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bGwtY2FsZW5kYXIsIGRpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE1KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBcbiAgIiwiOmhvc3Qge1xuICAtLWZjLWV2ZW50LWJvcmRlci1jb2xvcjogdmFyKC0taW9uaWMtY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gIC0tZmMtZXZlbnQtYmctY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAtLWZjLXRvZGF5LWJnLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDUpO1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tdG9vbGJhciBoMSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbjpob3N0IGlvbi10b29sYmFyIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCBmdWxsLWNhbGVuZGFyLCA6aG9zdCBkaXYge1xuICBib3JkZXItcmFkaXVzOiAxLjFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 37833:
/*!*******************************************************!*\
  !*** ./libs/calendar/src/lib/fullcalendar.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullCalendarService": () => (/* binding */ FullCalendarService)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appointment-modal/appointment-modal.component */ 41492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








const lightenDarkenColor = (col, amt) => {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  const num = parseInt(col, 16);
  // get R
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;else if (r < 0) r = 0;
  // get B
  let b = (num >> 8 & 0x00FF) + amt;
  if (b > 255) b = 255;else if (b < 0) b = 0;
  // get G
  let g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;else if (g < 0) g = 0;
  // return lighter RGB
  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};
const ROOT_DB_COLLECTION = 'd-calendar';
class FullCalendarService {
  constructor(_modalCtrl, _confirmCtrl, _loaderService, _datastoreService) {
    this._modalCtrl = _modalCtrl;
    this._confirmCtrl = _confirmCtrl;
    this._loaderService = _loaderService;
    this._datastoreService = _datastoreService;
    this._uiConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.uiConfig$ = this._uiConfig$.asObservable();
    this._loadedEventDataParts$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.loadedEventDataParts$ = this._loadedEventDataParts$.asObservable();
    this._calendarsData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.calendarsData$ = this._calendarsData$.asObservable();
    this._fullCalendarComp$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.fullCalendarComp$ = this._fullCalendarComp$.asObservable();
    this._initalized$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.initalized$ = this._initalized$.asObservable();
    this._viewTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
    this.viewTitle$ = this._viewTitle$.asObservable();
  }
  /**
   * Will return the FullCalendar API or throw an error if not found
   * @returns
   */
  calendarAPI() {
    const calendarApi = this._fullCalendarComp$.value?.getApi();
    if (!calendarApi) throw new Error('Calendar API not found');
    return calendarApi;
  }
  /**
   * Load UI Config from Database
   * and set reactive `_uiConfig$` property with data loaded.
   * @returns
   */
  loadUIConfigFromDatabase() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        uiConfig
      } = yield _this._datastoreService.getData(ROOT_DB_COLLECTION,
      // collection
      ['uiConfig'],
      // key
      {
        uiConfig: {
          initialView: 'timeGridWeek'
        }
      } // default value to save if not exist (optional)
      );

      _this._uiConfig$.next(uiConfig);
      return uiConfig;
    })();
  }
  /**
   * Load All Calendars from Database
   * and set reactive `_calendarsConfig` property with data loaded.
   * If no data is found, the function will create a default calendar and save it to database.
   */
  loadCalendarsFromDatabase() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const defaultCalendar = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        name: 'delault',
        className: 'ceramic-event',
        durationEditable: true,
        editable: true,
        isVisible: true,
        color: 'var(--ion-color-primary)'
      };
      const {
        calendars = []
      } = yield _this2._datastoreService.getData(ROOT_DB_COLLECTION,
      // collection
      ['calendars'],
      // key
      {
        calendars: [defaultCalendar]
      } // default value to save if not exist (optional)
      );

      _this2._calendarsData$.next(calendars);
      return calendars;
    })();
  }
  /**
   * Will init Component UI by triggering `render` method
   * and load events of each `calendars`
   * @param calendarComponent
   * @param calendarsData
   */
  initService(calendarComponent, calendarsData) {
    var _this3 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3._loaderService.setStatus(true);
      _this3._fullCalendarComp$.next(calendarComponent);
      _this3._initalized$.next(true);
      yield new Promise(resolve => {
        setTimeout(() => {
          calendarComponent.getApi().render();
          resolve(true);
        }, 250);
      });
      const loadingEventsPromises = [];
      // check if one calendar have `className` with value `ceramic-event`
      const loadCeramicEvents = calendarsData.some(calendar => calendar.className === 'ceramic-event');
      // load ceramic events from current view start to end
      if (loadCeramicEvents) {
        // get events from database
        // push promise to array
        loadingEventsPromises.push(_this3.loadEventFromViewStartEnd());
      }
      // get calendars have `className` with value `google-event`
      const loadGoogleEvents = calendarsData.filter(calendar => calendar.className === 'google-event');
      // load google events
      if (loadGoogleEvents.length > 0) {
        loadGoogleEvents.forEach( /*#__PURE__*/function () {
          var _ref = (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (googleCalendar) {
            // push promise to array
            loadingEventsPromises.push(
            // get events from Google Calendar
            new Promise((resolve, reject) => {
              _this3.setEventSource({
                ...googleCalendar,
                className: 'google-event',
                durationEditable: false,
                editable: false,
                success: googleEvent => {
                  resolve(googleEvent);
                },
                failure: e => reject('[ERROR] Load Google Calendar Events: ' + e.message)
              });
            }));
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
      // wait all promises
      yield Promise.all(loadingEventsPromises);
      // hide loader
      _this3._loaderService.setStatus(false);
    })();
  }
  /**
   * Wrapper to load events from database for each month between current start and end date
   * base on current Calendar Component UI view
   * @returns
   */
  loadEventFromViewStartEnd() {
    var _this4 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const startDate = _this4.calendarAPI()?.view?.currentStart;
      const endDate = _this4.calendarAPI()?.view?.currentEnd;
      if (!startDate || !endDate) return;
      // load data evnts for each month bwtween current start and end date incuding current month
      const startYear = startDate.getFullYear();
      const startMonth = startDate.getMonth() + 1;
      const endYear = endDate.getFullYear();
      const endMonth = endDate.getMonth() + 1;
      const months = [];
      for (let i = startMonth; i <= endMonth; i++) {
        months.push(`${startYear}/${i}`);
      }
      const events = yield Promise.all(months.map(key => _this4._getEventsFromDatabase(key))).then(result => {
        // return flated array
        return result.reduce((acc, cur) => cur && acc ? acc.concat(cur) : [], []);
      })
      // add `id`for fullcalendar methood utility
      .then(datas => datas?.map(data => ({
        ...data,
        id: data._id
      })));
      // Set events to calendar UI and return promise
      return yield new Promise((resolve, reject) => _this4.setEventSource({
        events,
        className: 'ceramic-event',
        id: 'ceramic-event',
        success: () => {
          resolve('[INFO] load events success');
        },
        failure: err => {
          reject(err.message);
        }
      }));
    })();
  }
  /**
   * Will add Events Sources data to FullCalendar API.
   * @param source
   * @returns
   */
  setEventSource(source = []) {
    var _this5 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendarApi = _this5._fullCalendarComp$.value.getApi();
      if (!calendarApi) return;
      calendarApi.addEventSource(source);
    })();
  }
  /**
   * Will prompt user to create a new calendar
   * then update the state and database
   * before return created calendar
   * @returns newCalendar
   */
  createNewCalendar() {
    var _this6 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ionAlertCreate = yield _this6._confirmCtrl.create({
        header: 'Create New Calendar',
        message: 'Fill in the form below to create a new calendar',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Create',
          role: 'ok'
        }],
        inputs: [{
          name: 'name',
          type: 'text',
          placeholder: 'Calendar Name '
        }, {
          name: 'googleCalendarApiKey',
          type: 'text',
          placeholder: 'Google API Key (optional)'
        }, {
          name: 'googleCalendarId',
          type: 'text',
          placeholder: 'Google Calendar ID (optional)'
        }]
      });
      ionAlertCreate.present();
      // extract inputs form values
      const {
        role,
        data: {
          values = {}
        }
      } = yield ionAlertCreate.onDidDismiss();
      if (role !== 'ok') {
        return;
      }
      // add unique id to calendar
      values._id = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
      // remove empty values and empty string values
      const valuesFiltered = Object.entries(values).reduce((acc, [key, value]) => {
        if (!value) return acc;
        if (value === '') return acc;
        return {
          ...acc,
          [key]: value
        };
      }, {});
      const newCalendar = {
        color: 'var(--ion-color-primary)',
        ...valuesFiltered,
        className: !valuesFiltered.googleCalendarId ? 'ceramic-event' : 'google-event',
        durationEditable: !valuesFiltered.googleCalendarId ? true : false,
        editable: !valuesFiltered.googleCalendarId ? true : false,
        isVisible: true
      };
      const calendars = [..._this6._calendarsData$.value, newCalendar];
      // update state
      _this6._calendarsData$.next(calendars);
      // save to database
      yield _this6._datastoreService.saveData({
        calendars
      }, ROOT_DB_COLLECTION, ['calendars']);
      // Load Google Calendar Events if is a Google Calendar
      if (newCalendar.googleCalendarId) {
        yield new Promise((resolve, reject) => {
          _this6.setEventSource({
            ...newCalendar,
            className: 'google-event',
            durationEditable: false,
            editable: false,
            success: googleEvent => {
              resolve(googleEvent);
            },
            failure: e => reject('[ERROR] Load Google Calendar Events: ' + e.message)
          });
        });
      }
      return newCalendar;
    })();
  }
  /**
   * Will delete a calendar from state and database
   */
  deleteCalendar(calendar) {
    var _this7 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendarsData = _this7._calendarsData$.value;
      const index = calendarsData.findIndex(element => element._id === calendar._id);
      calendarsData.splice(index, 1);
      // update state
      _this7._calendarsData$.next(calendarsData);
      // save to database
      yield _this7._datastoreService.saveData({
        calendars: calendarsData
      }, ROOT_DB_COLLECTION, ['calendars']);
    })();
  }
  /**
   * Will update data object of a calendar before update state
   * and save to database
   * @param calendar
   */
  updateCalendar(calendar) {
    var _this8 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // update application state 
      const calendarsData = _this8._calendarsData$.value;
      const index = calendarsData.findIndex(element => element._id === calendar._id);
      // update object data
      calendarsData[index] = {
        ...calendarsData[index],
        ...calendar
      };
      // update state before database to avoid UI lag or loading
      _this8._calendarsData$.next(calendarsData);
      // save to database
      yield _this8._datastoreService.saveData({
        calendars: calendarsData
      }, ROOT_DB_COLLECTION, ['calendars']);
      // update event colors
      const events = _this8.calendarAPI()?.getEvents();
      events.forEach(event => {
        if (event.extendedProps?.['calendarIds']?.includes(calendar._id)) {
          event.setProp('backgroundColor', lightenDarkenColor(calendar.color, 30));
          event.setProp('borderColor', lightenDarkenColor(calendar.color, -30));
        }
      });
    })();
  }
  handleEventsSet() {
    var _this9 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendarApi = _this9._fullCalendarComp$.value?.getApi();
      if (!calendarApi) return;
      const data = calendarApi.getCurrentData();
      _this9._viewTitle$.next(data.viewApi.title);
    })();
  }
  /**
   * Will be called when an event is mounted on the UI
   * It responsible for checking if the event is visible
   * and hide it if not
   * It also responsible for adding correct color to the event
   * based on the calendar color.
   * @param arg
   */
  handleEventDidMount(arg) {
    var _this10 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isVisible = _this10._isEventVisible(arg.event);
      // console.log('check if visible: ', isVisible, this._calendarsData$.value, arg  );
      if (arg?.el?.style?.display) {
        if (!isVisible) {
          arg.el.style.display = 'none';
        } else {
          arg.el.style.display = 'block';
        }
      }
      //  get event calendar Ids
      let calendarIds = arg.event.extendedProps['calendarIds'];
      if (!calendarIds) {
        //  if have default cal use it or use first calendar
        const defaultCal = _this10._calendarsData$.value.find(calendar => calendar.default);
        calendarIds = [defaultCal?._id || _this10._calendarsData$?.value[0]?._id];
      }
      if (calendarIds.length >= 1) {
        // set event color
        _this10._setEventColor(arg.el.style, calendarIds);
      }
    })();
  }
  _extractProp(extendedProps) {
    const props = {};
    for (const key in extendedProps) {
      const element = extendedProps[key];
      props[key] = element;
    }
    return props;
  }
  /**
   * Will be called when user `drop`, `resize` or `click` an event
   * This will open a modal to edit the event
   * and trigger corresponding action based on user action (update/delete)
   * @param arg
   * @param editModeEnabled
   * @returns
   */
  handleEvent(arg, editModeEnabled = true) {
    var _this11 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        event: eventApi,
        el
      } = arg;
      const {
        extendedProps = {}
      } = eventApi;
      const props = _this11._extractProp(extendedProps);
      const schedule = {
        ...props,
        start: eventApi.start,
        end: eventApi.end,
        title: eventApi.title,
        allDay: eventApi.allDay,
        url: eventApi.url
      };
      // run default logic to open modal
      const {
        _context = null,
        _def = null,
        _instance = null,
        role,
        jsEvent,
        view,
        ...response
      } = (yield _this11._openModal(schedule, editModeEnabled)) || {};
      // handle close modal without action
      if (role === 'cancel' || role === 'backdrop' || !role) {
        if (arg?.revert) {
          arg.revert();
        }
        return;
      }
      ;
      // display loader
      _this11._loaderService.setStatus(true);
      // handle update type event
      switch (true) {
        case role === 'delete':
          {
            const year = schedule.start.getFullYear();
            const month = schedule.start.getMonth() + 1;
            // delete from database
            yield _this11._deleteObject([`${year}/${month}`], schedule._id);
            // delete from ui
            eventApi.remove();
            break;
          }
        case role === 'update':
          {
            // save event to database
            const eventUpdated = yield _this11._saveEvent({
              ...response
            });
            const calendarApi = _this11.calendarAPI();
            // check if event exist
            const e = calendarApi.getEventById(schedule._id);
            if (!e) break;
            // e.remove();
            // calendarApi.addEvent(eventUpdated);
            // console.log('>>>', e); 
            for (const iterator in eventUpdated) {
              // console.log(iterator);
              if (!eventUpdated[iterator]) continue;
              if (iterator === 'title') {
                e.setProp('title', eventUpdated[iterator]);
                continue;
              }
              if (iterator === 'start') {
                e.setStart(eventUpdated[iterator]);
                continue;
              }
              if (iterator === 'end') {
                e.setEnd(eventUpdated[iterator]);
                continue;
              }
              if (iterator === 'allDay') {
                e.setAllDay(eventUpdated[iterator]);
                continue;
              }
              e.setExtendedProp(iterator, eventUpdated[iterator]);
              // e.setProp(iterator, eventUpdated[iterator]);
            }

            break;
          }
        default:
          break;
      }
      _this11._loaderService.setStatus(false);
    })();
  }
  /**
   * Will be called when a date range is selected on the CalendarComponent UI
   * and will create a new event in the database and update the UI
   * @param arg
   * @returns
   */
  handleDateSelect(arg) {
    var _this12 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('handleDateSelect', arg);
      _this12._loaderService.setStatus(true);
      // save event to database 
      const event = yield _this12._saveEvent({
        title: 'new Event',
        ...arg
      });
      // add `id`for fullcalendar methood utility
      event.id = event._id;
      // update calendar ui
      _this12.calendarAPI().addEvent(event);
      _this12._loaderService.setStatus(false);
    })();
  }
  updateCalendarsVisibility(calendar) {
    var _this13 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendarApi = _this13._fullCalendarComp$.value.getApi();
      if (!calendarApi) return;
      // upadate calendar config
      const calendarsConfig = _this13._calendarsData$.value;
      const index = calendarsConfig.findIndex(c => c._id === calendar._id);
      calendarsConfig[index].isVisible = calendar.isVisible;
      // update aplication state 
      _this13._calendarsData$.next(calendarsConfig);
      // update calendar ui
      const eventsApi = calendarApi.getEvents();
      eventsApi.forEach(event => {
        const isVisible = _this13._isEventVisible(event);
        if (isVisible) {
          event.setProp('display', 'auto');
        } else {
          event.setProp('display', 'none');
        }
      });
      // update database value
      yield _this13._datastoreService.saveData({
        calendars: _this13._calendarsData$.value
      }, ROOT_DB_COLLECTION, ['calendars']);
    })();
  }
  /**
   * Will load `events` from database base on `key`
   * @param key like `${year}/${month}`
   * @returns
   */
  _getEventsFromDatabase(key) {
    var _this14 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!key) {
        // use current month to define key
        const calendarApi = _this14._fullCalendarComp$.value.getApi();
        if (!calendarApi) return;
        const date = calendarApi.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        key = `${year}/${month}`;
      }
      // get events from database
      const {
        events = []
      } = yield _this14._datastoreService.getData(ROOT_DB_COLLECTION, [key], {
        events: []
      });
      // update loaded event data part state
      _this14._loadedEventDataParts$.next([..._this14._loadedEventDataParts$.value, key]);
      // return result
      return events;
    })();
  }
  _openModal(arg, editModeEnabled = true) {
    var _this15 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const calendars = yield _this15._calendarsData$.value;
      const modal = yield _this15._modalCtrl.create({
        component: _components_appointment_modal_appointment_modal_component__WEBPACK_IMPORTED_MODULE_2__.AppointmentModalComponent,
        componentProps: {
          data: {
            ...arg
          },
          editModeEnabled,
          calendars
        }
      });
      modal.present();
      const {
        data = undefined,
        role = 'cancel'
      } = yield modal.onDidDismiss();
      return role !== 'cancel' ? {
        ...data,
        role
      } : {
        role
      };
    })();
  }
  _openConfirm(ops) {
    var _this16 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16._confirmCtrl.create(ops);
      alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      return role;
    })();
  }
  /**
   * Method to load specific data part from database based on `date` and `type`
   * This method will be called when calendar view change and will load more data
   * to prevent loading all data at once on calendar init
   * and
   * @param date
   * @param type
   */
  loadEventsPart(date, type = 'fullMonth') {
    var _this17 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // get key like `${year}/${month}`;
      const key = `${date?.getFullYear()}/${(date?.getMonth() || 0) + 1}`;
      const loadedDataParts = _this17._loadedEventDataParts$.value;
      // prevent reload existing part
      if (loadedDataParts.includes(key)) {
        return;
      }
      // load more data part base on key
      const eventsParts = yield _this17._getEventsFromDatabase(key);
      console.log(`[INFO] load events part: ${key}`, eventsParts);
      // get ceramic-event source object
      const eventSource = _this17.calendarAPI()?.getEventSourceById('ceramic-event');
      // add events to calendar
      if (eventsParts && eventSource) {
        yield new Promise((resolve, reject) => {
          _this17.calendarAPI()?.addEventSource({
            events: eventsParts,
            className: 'ceramic-event',
            id: 'ceramic-event',
            success: () => {
              resolve('[INFO] add events part success');
            },
            failure: err => reject(err.message)
          });
        });
      }
    })();
  }
  /**
   * Method to save event to database.
   * Work with new or existing event
   * Events are saved in database based on `year/month` key inside an object with `events` key array.
   * The final structure will be like:
   * ```
   * {
   *    events: [
   *     ...schedule
   *   ]
   * }
   * ```
   *
   * @param schedule
   * @returns
   */
  _saveEvent(schedule) {
    var _this18 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // create ID if is a new schedule
      if (!schedule._id) {
        schedule._id = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
      }
      // generate key from Date
      const year = schedule.start.getFullYear();
      const month = schedule.start.getMonth() + 1;
      const key = [`${year}/${month}`];
      // load existing events from database to merge with new event
      const {
        events = []
      } = yield _this18._datastoreService.getData(ROOT_DB_COLLECTION, key, {
        events: []
      });
      // update database events
      yield _this18._datastoreService.saveData({
        events: [...events.filter(e => e._id !== schedule._id), schedule]
      }, ROOT_DB_COLLECTION, key);
      // return event with _id
      const event = {
        ...schedule,
        title: schedule.title || 'new Event',
        allDay: schedule.allDay || false
      };
      return event;
    })();
  }
  /**
   * Method to delete event from database
   * @param id
   */
  _deleteObject(key, scheduleId) {
    var _this19 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('_deleteObject', key);
      // load existing events from database to merge with new event
      const {
        events
      } = yield _this19._datastoreService.getData(ROOT_DB_COLLECTION, key, {
        events: []
      });
      // filter events to remove deleted one
      const filtredEvents = events.filter(e => e._id !== scheduleId);
      // update database events 
      yield _this19._datastoreService.saveData({
        events: filtredEvents
      }, ROOT_DB_COLLECTION, key);
    })();
  }
  /**
   * Method to style event based on calendar color
   * @param eventStyle
   * @param calendarIds
   * @param defaultColor
   */
  _setEventColor(eventStyle, calendarIds, defaultColor) {
    // find coresponding calendar to set event color    
    const calendar = this._calendarsData$.value.find(c => calendarIds.includes(c._id));
    const color = calendar?.color || defaultColor;
    // get rgb color  from hex
    const [r, g, b] = this._hexToRgb(color);
    const lum = 0.299 * r + (0.587 * g + 0.114 * b);
    const textColor = lum > 156 ? 'black' : 'white';
    // set event color
    // TODO: check why color text is not working
    eventStyle.color = textColor;
    eventStyle.backgroundColor = lightenDarkenColor(color, 30); //.setProp('borderColor', 'red');
    eventStyle.borderLeftColor = lightenDarkenColor(color, -30); //.setProp('borderColor', 'red');
  }
  /**
   * Utils method to check if event is visible based on calendar visibility
   * @param event
   * @returns
   * TODO: refactor this method as a pipe
   */
  _isEventVisible(event) {
    return this._calendarsData$.value.some(calendar => event.extendedProps['calendarIds']
    // test for ceramic calendar
    ? event?.extendedProps['calendarIds']?.includes?.(calendar._id) && calendar?.isVisible
    // test for Google Calendar
    : event?.source?.internalEventSource?._raw['googleCalendarId'] === calendar?.googleCalendarId && calendar?.isVisible);
  }
  _hexToRgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return [r, g, b];
  }
}
FullCalendarService.ɵfac = function FullCalendarService_Factory(t) {
  return new (t || FullCalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_DATASTORE_SERVICE)));
};
FullCalendarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: FullCalendarService,
  factory: FullCalendarService.ɵfac
});

/***/ }),

/***/ 60980:
/*!*********************************************!*\
  !*** ./libs/calendar/src/lib/lib.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendarRoutes": () => (/* binding */ calendarRoutes)
/* harmony export */ });
/* harmony import */ var _containers_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/calendar-page/calendar-page.component */ 79356);

const calendarRoutes = [{
  path: '',
  pathMatch: 'full',
  component: _containers_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_0__.CalendarPageComponent
}];

/***/ }),

/***/ 18772:
/*!*******************************************************!*\
  !*** ./libs/calendar/src/lib/pipes/view-name.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewNamePipe": () => (/* binding */ ViewNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ViewNamePipe {
  transform(value) {
    switch (value) {
      case 'dayGridMonth':
        return 'Month';
      case 'timeGridWeek':
        return 'Week';
      case 'timeGridDay':
        return 'Day';
      case 'listWeek':
        return 'List';
      case 'listDay':
        return 'List';
      case 'listMonth':
        return 'List';
      default:
        return 'Week';
    }
  }
}
ViewNamePipe.ɵfac = function ViewNamePipe_Factory(t) {
  return new (t || ViewNamePipe)();
};
ViewNamePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "viewName",
  type: ViewNamePipe,
  pure: true
});

/***/ }),

/***/ 31170:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 67367:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 30677:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ 28920:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ 97064:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ 14190:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getFullYear();
}

/***/ }),

/***/ 86527:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 30677);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)

var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 18325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ 78535:
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};

/***/ }),

/***/ 89086:
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Children": () => (/* binding */ O),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "PureComponent": () => (/* binding */ w),
/* harmony export */   "StrictMode": () => (/* binding */ mn),
/* harmony export */   "Suspense": () => (/* binding */ D),
/* harmony export */   "SuspenseList": () => (/* binding */ V),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ ln),
/* harmony export */   "cloneElement": () => (/* binding */ sn),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   "createFactory": () => (/* binding */ fn),
/* harmony export */   "createPortal": () => (/* binding */ z),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ Cn),
/* harmony export */   "findDOMNode": () => (/* binding */ vn),
/* harmony export */   "flushSync": () => (/* binding */ pn),
/* harmony export */   "forwardRef": () => (/* binding */ k),
/* harmony export */   "hydrate": () => (/* binding */ J),
/* harmony export */   "isValidElement": () => (/* binding */ an),
/* harmony export */   "lazy": () => (/* binding */ M),
/* harmony export */   "memo": () => (/* binding */ x),
/* harmony export */   "render": () => (/* binding */ G),
/* harmony export */   "startTransition": () => (/* binding */ yn),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ hn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ dn),
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   "useDeferredValue": () => (/* binding */ _n),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   "useId": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   "useInsertionEffect": () => (/* binding */ Sn),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   "useSyncExternalStore": () => (/* binding */ gn),
/* harmony export */   "useTransition": () => (/* binding */ bn),
/* harmony export */   "version": () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ 32707);




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function x(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var R = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var A = function (n, t) {
    return null == n ? null : (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t));
  },
  O = {
    map: A,
    forEach: A,
    count: function (n) {
      return n ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length : 0;
    },
    only: function (n) {
      var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
  },
  T = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function () {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function () {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, n.fallback);
  return i && (i.__h = null), [(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.__a ? null : n.children), i];
};
var W = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function j(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function (n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function (n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function (n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function z(n, e) {
  var r = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(j, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Y = /[A-Z0-9]/g,
  $ = "undefined" != typeof document,
  q = function (n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
function G(n, t, e) {
  return null == t.__k && (t.textContent = ""), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function J(n, t, e) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, t, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var K = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
function Q() {}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function (n) {
  return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
};
var tn,
  en = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    }
  },
  rn = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {};
    for (var o in t) {
      var i = t[o];
      if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
        var l = o.toLowerCase();
        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = B, rn && rn(n);
};
var un = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  un && un(n), tn = n.__c;
};
var on = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (n) {
  on && on(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), tn = null;
};
var ln = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (n) {
          return tn.__n[n.__c].props.value;
        }
      }
    }
  },
  cn = "17.0.2";
function fn(n) {
  return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, n);
}
function an(n) {
  return !!n && n.$$typeof === B;
}
function sn(n) {
  return an(n) ? preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments) : n;
}
function hn(n) {
  return !!n.__k && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, n), !0);
}
function vn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var dn = function (n, t) {
    return n(t);
  },
  pn = function (n, t) {
    return n(t);
  },
  mn = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function yn(n) {
  n();
}
function _n(n) {
  return n;
}
function bn() {
  return [!1, yn];
}
var Sn = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
function gn(n, t) {
  var e = t(),
    r = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var Cn = {
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
  useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
  useInsertionEffect: Sn,
  useTransition: bn,
  useDeferredValue: _n,
  useSyncExternalStore: gn,
  startTransition: yn,
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
  version: "17.0.2",
  Children: O,
  render: G,
  hydrate: J,
  unmountComponentAtNode: hn,
  createPortal: z,
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
  createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
  createFactory: fn,
  cloneElement: sn,
  createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
  isValidElement: an,
  findDOMNode: vn,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
  PureComponent: w,
  memo: x,
  forwardRef: k,
  flushSync: pn,
  unstable_batchedUpdates: dn,
  StrictMode: mn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln
};


/***/ }),

/***/ 98173:
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ k),
/* harmony export */   "Fragment": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ E),
/* harmony export */   "createContext": () => (/* binding */ F),
/* harmony export */   "createElement": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ d),
/* harmony export */   "h": () => (/* binding */ y),
/* harmony export */   "hydrate": () => (/* binding */ D),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ B),
/* harmony export */   "toChildArray": () => (/* binding */ P)
/* harmony export */ });
var n,
  l,
  u,
  i,
  t,
  r,
  o,
  f,
  e,
  c = {},
  s = [],
  a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function v(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function y(l, u, i) {
  var t,
    r,
    o,
    f = {};
  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
  return p(l, f, t, r, null);
}
function p(n, i, t, r, o) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++u : o
  };
  return null == o && null != l.vnode && l.vnode(f), f;
}
function d() {
  return {
    current: null
  };
}
function _(n) {
  return n.children;
}
function k(n, l) {
  this.props = n, this.context = l;
}
function b(n, l) {
  if (null == l) return n.__ ? b(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? b(n) : null;
}
function g(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return g(n);
  }
}
function m(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
}
function w() {
  var n, l, u, i, r, o, e, c;
  for (t.sort(f); n = t.shift();) n.__d && (l = t.length, i = void 0, r = void 0, e = (o = (u = n).__v).__e, (c = u.__P) && (i = [], (r = h({}, o)).__v = o.__v + 1, L(c, o, r, u.__n, void 0 !== c.ownerSVGElement, null != o.__h ? [e] : null, i, null == e ? b(o) : e, o.__h), M(i, o), o.__e != e && g(o)), t.length > l && t.sort(f));
  w.__r = 0;
}
function x(n, l, u, i, t, r, o, f, e, a) {
  var h,
    v,
    y,
    d,
    k,
    g,
    m,
    w = i && i.__k || s,
    x = w.length;
  for (u.__k = [], h = 0; h < l.length; h++) if (null != (d = u.__k[h] = null == (d = l[h]) || "boolean" == typeof d || "function" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, {
    children: d
  }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
    if (d.__ = u, d.__b = u.__b + 1, null === (y = w[h]) || y && d.key == y.key && d.type === y.type) w[h] = void 0;else for (v = 0; v < x; v++) {
      if ((y = w[v]) && d.key == y.key && d.type === y.type) {
        w[v] = void 0;
        break;
      }
      y = null;
    }
    L(n, d, y = y || c, t, r, o, f, e, a), k = d.__e, (v = d.ref) && y.ref != v && (m || (m = []), y.ref && m.push(y.ref, null, d), m.push(v, d.__c || k, d)), null != k ? (null == g && (g = k), "function" == typeof d.type && d.__k === y.__k ? d.__d = e = A(d, e, n) : e = C(n, d, y, w, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = b(y));
  }
  for (u.__e = g, h = x; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $(i).nextSibling), S(w[h], w[h]));
  if (m) for (h = 0; h < m.length; h++) O(m[h], m[++h], m[++h]);
}
function A(n, l, u) {
  for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? A(i, l, u) : C(u, i, i, t, i.__e, l));
  return l;
}
function P(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    P(n, l);
  }) : l.push(n)), l;
}
function C(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}
function $(n) {
  var l, u, i;
  if (null == n.type || "string" == typeof n.type) return n.__e;
  if (n.__k) for (l = n.__k.length - 1; l >= 0; l--) if ((u = n.__k[l]) && (i = $(u))) return i;
  return null;
}
function H(n, l, u, i, t) {
  var r;
  for (r in u) "children" === r || "key" === r || r in l || T(n, r, null, u[r], i);
  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || T(n, r, l[r], u[r], i);
}
function I(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function T(n, l, u, i, t) {
  var r;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || I(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || I(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? z : j, r) : n.removeEventListener(l, r ? z : j, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function j(n) {
  return this.l[n.type + !1](l.event ? l.event(n) : n);
}
function z(n) {
  return this.l[n.type + !0](l.event ? l.event(n) : n);
}
function L(n, u, i, t, r, o, f, e, c) {
  var s,
    a,
    v,
    y,
    p,
    d,
    b,
    g,
    m,
    w,
    A,
    P,
    C,
    $,
    H,
    I = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l.__b) && s(u);
  try {
    n: if ("function" == typeof I) {
      if (g = u.props, m = (s = I.contextType) && t[s.__c], w = s ? m ? m.props.value : s.__ : t, i.__c ? b = (a = u.__c = i.__c).__ = a.__E : ("prototype" in I && I.prototype.render ? u.__c = a = new I(g, w) : (u.__c = a = new k(g, w), a.constructor = I, a.render = q), m && m.sub(a), a.props = g, a.state || (a.state = {}), a.context = w, a.__n = t, v = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != I.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h({}, a.__s)), h(a.__s, I.getDerivedStateFromProps(g, a.__s))), y = a.props, p = a.state, a.__v = u, v) null == I.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);else {
        if (null == I.getDerivedStateFromProps && g !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(g, w), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(g, a.__s, w) || u.__v === i.__v) {
          for (u.__v !== i.__v && (a.props = g, a.state = a.__s, a.__d = !1), a.__e = !1, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), A = 0; A < a._sb.length; A++) a.__h.push(a._sb[A]);
          a._sb = [], a.__h.length && f.push(a);
          break n;
        }
        null != a.componentWillUpdate && a.componentWillUpdate(g, a.__s, w), null != a.componentDidUpdate && a.__h.push(function () {
          a.componentDidUpdate(y, p, d);
        });
      }
      if (a.context = w, a.props = g, a.__P = n, P = l.__r, C = 0, "prototype" in I && I.prototype.render) {
        for (a.state = a.__s, a.__d = !1, P && P(u), s = a.render(a.props, a.state, a.context), $ = 0; $ < a._sb.length; $++) a.__h.push(a._sb[$]);
        a._sb = [];
      } else do {
        a.__d = !1, P && P(u), s = a.render(a.props, a.state, a.context), a.state = a.__s;
      } while (a.__d && ++C < 25);
      a.state = a.__s, null != a.getChildContext && (t = h(h({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (d = a.getSnapshotBeforeUpdate(y, p)), H = null != s && s.type === _ && null == s.key ? s.props.children : s, x(n, Array.isArray(H) ? H : [H], u, i, t, r, o, f, e, c), a.base = u.__e, u.__h = null, a.__h.length && f.push(a), b && (a.__E = a.__ = null), a.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = N(i.__e, u, i, t, r, o, f, c);
    (s = l.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
  }
}
function M(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function N(l, u, i, t, r, o, f, e) {
  var s,
    a,
    h,
    y = i.props,
    p = u.props,
    d = u.type,
    _ = 0;
  if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, o[_] = null;
    break;
  }
  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, e = !1;
  }
  if (null === d) y === p || e && l.data === p || (l.data = p);else {
    if (o = o && n.call(l.childNodes), a = (y = i.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
      if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (h || a) && (h && (a && h.__html == a.__html || h.__html === l.innerHTML) || (l.innerHTML = h && h.__html || ""));
    }
    if (H(l, p, y, r, e), h) u.__k = [];else if (_ = u.props.children, x(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && b(i, 0), e), null != o) for (_ = o.length; _--;) null != o[_] && v(o[_]);
    e || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && T(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && T(l, "checked", _, y.checked, !1));
  }
  return l;
}
function O(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}
function S(n, u, i) {
  var t, r;
  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || O(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null, n.__c = void 0;
  }
  if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && S(t[r], u, i || "function" != typeof n.type);
  i || null == n.__e || v(n.__e), n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
  return this.constructor(n, u);
}
function B(u, i, t) {
  var r, o, f;
  l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], L(i, u = (!r && t || i).__k = y(_, null, [u]), o || c, c, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), M(f, u);
}
function D(n, l) {
  B(n, l, D);
}
function E(l, u, i) {
  var t,
    r,
    o,
    f = h({}, l.props);
  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), p(l.type, f, t || l.key, r || l.ref, null);
}
function F(n, l) {
  var u = {
    __c: l = "__cC" + e++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, m(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
  __e: function (n, l, u, i) {
    for (var t, r, o; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, i = function (n) {
  return null != n && void 0 === n.constructor;
}, k.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), m(this));
}, k.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
}, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, w.__r = 0, e = 0;


/***/ }),

/***/ 32707:
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ p),
/* harmony export */   "useErrorBoundary": () => (/* binding */ P),
/* harmony export */   "useId": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ y),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ s),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.__h && preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function () {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ 98245:
/*!******************************************************************************!*\
  !*** ./node_modules/@fullcalendar/angular/fesm2020/fullcalendar-angular.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullCalendarComponent": () => (/* binding */ FullCalendarComponent),
/* harmony export */   "FullCalendarModule": () => (/* binding */ FullCalendarModule)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ 78535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ 51176);




const hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays, objects, and Dates. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/
function deepCopy(input) {
  if (Array.isArray(input)) {
    return input.map(deepCopy);
  } else if (input instanceof Date) {
    return new Date(input.valueOf());
  } else if (typeof input === 'object' && input) {
    // non-null object
    return mapHash(input, deepCopy);
  } else {
    // everything else (null, function, etc)
    return input;
  }
}
function shallowCopy(val) {
  if (typeof val === 'object') {
    if (Array.isArray(val)) {
      val = Array.prototype.slice.call(val);
    } else if (val) {
      // non-null
      val = {
        ...val
      };
    }
  }
  return val;
}
function mapHash(input, func) {
  const output = {};
  for (const key in input) {
    if (hasOwnProperty.call(input, key)) {
      output[key] = func(input[key], key);
    }
  }
  return output;
}
const OPTION_IS_DEEP = {
  headerToolbar: true,
  footerToolbar: true,
  events: true,
  eventSources: true,
  resources: true
};
let FullCalendarComponent = /*#__PURE__*/(() => {
  class FullCalendarComponent {
    constructor(element) {
      this.element = element;
      this.calendar = null;
      this.optionSnapshot = {}; // for diffing only
    }

    ngAfterViewInit() {
      const {
        deepChangeDetection
      } = this;
      const options = this.options || {};
      // initialize snapshot
      this.optionSnapshot = mapHash(options, (optionVal, optionName) => deepChangeDetection && OPTION_IS_DEEP[optionName] ? deepCopy(optionVal) : optionVal);
      this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(this.element.nativeElement, options);
      this.calendar.render();
    }
    /*
    allows us to manually detect complex input changes, internal mutations to certain options.
    called before ngOnChanges. called much more often than ngOnChanges.
    */
    ngDoCheck() {
      if (this.calendar) {
        // not the initial render
        const {
          deepChangeDetection,
          optionSnapshot
        } = this;
        const newOptions = this.options || {};
        const newProcessedOptions = {};
        let anyChanges = false;
        // detect adds and updates (and update snapshot)
        for (const optionName in newOptions) {
          if (newOptions.hasOwnProperty(optionName)) {
            let optionVal = newOptions[optionName];
            if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
              if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__(optionSnapshot[optionName], optionVal)) {
                optionSnapshot[optionName] = deepCopy(optionVal);
                anyChanges = true;
                // trick FC into knowing about a nested change.
                // TODO: future versions won't need this.
                // can't use the previously-made deep copy because it blows away prototype-association.
                optionVal = shallowCopy(optionVal);
              }
            } else {
              if (optionSnapshot[optionName] !== optionVal) {
                optionSnapshot[optionName] = optionVal;
                anyChanges = true;
              }
            }
            newProcessedOptions[optionName] = optionVal;
          }
        }
        const oldOptionNames = Object.keys(optionSnapshot);
        // detect removals (and update snapshot)
        for (const optionName of oldOptionNames) {
          if (!(optionName in newOptions)) {
            // doesn't exist in new options?
            delete optionSnapshot[optionName];
            anyChanges = true;
          }
        }
        if (anyChanges) {
          this.calendar.pauseRendering();
          this.calendar.resetOptions(newProcessedOptions);
        }
      }
    }
    ngAfterContentChecked() {
      if (this.calendar) {
        // too defensive?
        this.calendar.resumeRendering();
      }
    }
    ngOnDestroy() {
      if (this.calendar) {
        // too defensive?
        this.calendar.destroy();
        this.calendar = null;
      }
    }
    getApi() {
      return this.calendar;
    }
  }
  FullCalendarComponent.ɵfac = function FullCalendarComponent_Factory(t) {
    return new (t || FullCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  FullCalendarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FullCalendarComponent,
    selectors: [["full-calendar"]],
    inputs: {
      options: "options",
      deepChangeDetection: "deepChangeDetection"
    },
    decls: 0,
    vars: 0,
    template: function FullCalendarComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
  return FullCalendarComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FullCalendarModule = /*#__PURE__*/(() => {
  class FullCalendarModule {}
  FullCalendarModule.ɵfac = function FullCalendarModule_Factory(t) {
    return new (t || FullCalendarModule)();
  };
  FullCalendarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: FullCalendarModule
  });
  FullCalendarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
  return FullCalendarModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=fullcalendar-angular.mjs.map

/***/ }),

/***/ 51176:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/core/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* binding */ Calendar),
/* harmony export */   "JsonRequestError": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatRange": () => (/* binding */ formatRange),
/* harmony export */   "sliceEvents": () => (/* binding */ sliceEvents),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-common.js */ 62543);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/compat */ 89086);




var css_248z = "\n/*\nfor css vars only.\nthese values are automatically known in all stylesheets.\nthe :root statement itself is only included in the common stylesheet.\nthis file is not processed by postcss when imported into the postcss-custom-properties plugin,\nso only write standard css!\n\nNOTE: for old browsers, will need to restart watcher after changing a variable\n*/\n\n:root {\n  --fc-small-font-size: .85em;\n  --fc-page-bg-color: #fff;\n  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);\n  --fc-neutral-text-color: #808080;\n  --fc-border-color: #ddd;\n\n  --fc-button-text-color: #fff;\n  --fc-button-bg-color: #2C3E50;\n  --fc-button-border-color: #2C3E50;\n  --fc-button-hover-bg-color: #1e2b37;\n  --fc-button-hover-border-color: #1a252f;\n  --fc-button-active-bg-color: #1a252f;\n  --fc-button-active-border-color: #151e27;\n\n  --fc-event-bg-color: #3788d8;\n  --fc-event-border-color: #3788d8;\n  --fc-event-text-color: #fff;\n  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);\n\n  --fc-more-link-bg-color: #d0d0d0;\n  --fc-more-link-text-color: inherit;\n\n  --fc-event-resizer-thickness: 8px;\n  --fc-event-resizer-dot-total-width: 8px;\n  --fc-event-resizer-dot-border-width: 1px;\n\n  --fc-non-business-color: rgba(215, 215, 215, 0.3);\n  --fc-bg-event-color: rgb(143, 223, 130);\n  --fc-bg-event-opacity: 0.3;\n  --fc-highlight-color: rgba(188, 232, 241, 0.3);\n  --fc-today-bg-color: rgba(255, 220, 40, 0.15);\n  --fc-now-indicator-color: red;\n}\n\n/* classes attached to <body> */\n\n/* TODO: make fc-event selector work when calender in shadow DOM */\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n\n/* TODO: not attached to body. attached to specific els. move */\n\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid var(--fc-border-color);\n  }\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n.fc .fc-button-primary {\n    color: var(--fc-button-text-color);\n    background-color: var(--fc-button-bg-color);\n    border-color: var(--fc-button-border-color);\n  }\n.fc .fc-button-primary:hover {\n    color: var(--fc-button-text-color);\n    background-color: var(--fc-button-hover-bg-color);\n    border-color: var(--fc-button-hover-border-color);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: var(--fc-button-text-color);\n    background-color: var(--fc-button-bg-color);\n    border-color: var(--fc-button-border-color); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: var(--fc-button-text-color);\n    background-color: var(--fc-button-active-bg-color);\n    border-color: var(--fc-button-active-border-color);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid var(--fc-border-color); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: var(--fc-page-bg-color);\n    position: sticky;\n    z-index: 3; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: var(--fc-non-business-color);\n  }\n.fc .fc-bg-event {\n    background: var(--fc-bg-event-color);\n    opacity: var(--fc-bg-event-opacity)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: var(--fc-small-font-size);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: var(--fc-highlight-color);\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: var(--fc-neutral-bg-color);\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: calc(var(--fc-event-resizer-dot-total-width) / 2);\n    border-width: var(--fc-event-resizer-dot-border-width);\n    width: var(--fc-event-resizer-dot-total-width);\n    height: var(--fc-event-resizer-dot-total-width);\n    border-style: solid;\n    border-color: inherit;\n    background: var(--fc-page-bg-color)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* OR, focused by tab-index */\n/* (TODO: maybe not the best focus-styling for .fc-daygrid-dot-event) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected,\n.fc-event:focus {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before, .fc-event:focus:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected,\n.fc-event:focus {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after, .fc-event:focus:after {\n    content: \"\";\n    background: var(--fc-event-selected-overlay-color);\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid var(--fc-event-border-color);\n  background-color: var(--fc-event-bg-color)\n\n}\n.fc-h-event .fc-event-main {\n    color: var(--fc-event-text-color);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: var(--fc-event-resizer-thickness);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: calc(-0.5 * var(--fc-event-resizer-thickness));\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: calc(-0.5 * var(--fc-event-resizer-thickness));\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: calc(-0.5 * var(--fc-event-resizer-dot-total-width));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: calc(-0.5 * var(--fc-event-resizer-dot-total-width));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: calc(-0.5 * var(--fc-event-resizer-dot-total-width));\n}\n.fc .fc-popover {\n    position: absolute;\n    z-index: 9999;\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid var(--fc-border-color);\n    background: var(--fc-page-bg-color);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: var(--fc-neutral-bg-color);\n  }\n";
(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i)(css_248z);
const MINIMAL_RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week
  },

  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  weekTextLong: 'Week',
  closeHint: 'Close',
  timeHint: 'Time',
  eventHint: 'Event',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};
const RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today(buttonText, unit) {
      return unit === 'day' ? 'Today' : `This ${buttonText}`;
    }
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint(eventCnt) {
    return `Show ${eventCnt} more event${eventCnt === 1 ? '' : 's'}`;
  }
});
function organizeRawLocales(explicitRawLocales) {
  let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  let allRawLocales = _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.g.concat(explicitRawLocales);
  let rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  for (let rawLocale of allRawLocales) {
    rawLocaleMap[rawLocale.code] = rawLocale;
  }
  return {
    map: rawLocaleMap,
    defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  let codes = [].concat(codeArg || []); // will convert to array
  let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (let i = 0; i < codes.length; i += 1) {
    let parts = codes[i].toLocaleLowerCase().split('-');
    for (let j = parts.length; j > 0; j -= 1) {
      let simpleId = parts.slice(0, j).join('-');
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  let merged = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.m)([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options
  let {
    week
  } = merged;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}
class StandardTheme extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.T {}
StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';
function compileViewDefs(defaultConfigs, overrideConfigs) {
  let hash = {};
  let viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  let defaultConfig = defaultConfigs[viewType];
  let overrideConfig = overrideConfigs[viewType];
  let queryProp = name => defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  let theComponent = queryProp('component');
  let superType = queryProp('superType');
  let superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }

  return {
    type: viewType,
    component: theComponent,
    defaults: Object.assign(Object.assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
function parseViewConfigs(inputs) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  let rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  let {
    component
  } = rawOptions;
  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions);
    // TODO: remove content/classNames/didMount/etc from options?
  }

  return {
    superType: rawOptions.type,
    component: component,
    rawOptions // includes type and component too :(
  };
}

function createViewHookComponent(options) {
  return viewProps => (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, context => (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.C, {
    elTag: "div",
    elClasses: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b)(context.viewSpec),
    renderProps: Object.assign(Object.assign({}, viewProps), {
      nextDayThreshold: context.options.nextDayThreshold
    }),
    generatorName: undefined,
    generator: options.content,
    classNameGenerator: options.classNames,
    didMount: options.didMount,
    willUnmount: options.willUnmount
  }));
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let defaultConfigs = parseViewConfigs(defaultInputs);
  let overrideConfigs = parseViewConfigs(optionOverrides.views);
  let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(viewDefs, viewDef => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  let duration = null;
  let durationUnit = '';
  let singleUnit = '';
  let singleUnitOverrides = {};
  if (durationInput) {
    duration = createDurationCached(durationInput);
    if (duration) {
      // valid?
      let denom = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c)(duration);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  let queryButtonText = optionsSubset => {
    let buttonTextMap = optionsSubset.buttonText || {};
    let buttonTextKey = viewDef.defaults.buttonTextKey;
    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }
    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }
    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
    return null;
  };
  let queryButtonTitle = optionsSubset => {
    let buttonHints = optionsSubset.buttonHints || {};
    let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }
    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }
    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }
    return null;
  };
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) ||
    // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B) || viewDef.type,
    // not DRY
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B)
    // will eventually fall back to buttonText
  };
}
// hack to get memoization working
let durationInputMap = {};
function createDurationCached(durationInput) {
  let json = JSON.stringify(durationInput);
  let res = durationInputMap[json];
  if (res === undefined) {
    res = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d)(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      viewType = action.viewType;
  }
  return viewType;
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  switch (action.type) {
    case 'SET_OPTION':
      return Object.assign(Object.assign({}, dynamicOptionOverrides), {
        [action.optionName]: action.rawOptionValue
      });
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  let dp;
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);
    case 'CHANGE_DATE':
      return dateProfileGenerator.build(action.dateMarker);
    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;
    case 'SELECT_DATES':
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';
    case 'SELECT_EVENT':
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  let newDrag;
  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;
    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  let newResize;
  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;
    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return {
    header,
    footer
  };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let sectionWidgets = {};
  let viewsWithButtons = [];
  let hasTitle = false;
  for (let sectionName in sectionStrHash) {
    let sectionStr = sectionStrHash[sectionName];
    let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push(...sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }
  return {
    sectionWidgets,
    viewsWithButtons,
    hasTitle
  };
}
/*
BAD: querying icons and text here. should be done at render time
*/
function parseSection(sectionStr, calendarOptions,
// defaults+overrides, then refined
calendarOptionOverrides,
// overrides only!, unrefined :(
theme, viewSpecs, calendarApi) {
  let isRtl = calendarOptions.direction === 'rtl';
  let calendarCustomButtons = calendarOptions.customButtons || {};
  let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  let calendarButtonText = calendarOptions.buttonText || {};
  let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  let calendarButtonHints = calendarOptions.buttonHints || {};
  let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  let viewsWithButtons = [];
  let hasTitle = false;
  let widgets = sectionSubstrs.map(buttonGroupStr => buttonGroupStr.split(',').map(buttonName => {
    if (buttonName === 'title') {
      hasTitle = true;
      return {
        buttonName
      };
    }
    let customButtonProps;
    let viewSpec;
    let buttonClick;
    let buttonIcon; // only one of these will be set
    let buttonText; // "
    let buttonHint;
    // ^ for the title="" attribute, for accessibility
    if (customButtonProps = calendarCustomButtons[buttonName]) {
      buttonClick = ev => {
        if (customButtonProps.click) {
          customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
        }
      };

      (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
      buttonHint = customButtonProps.hint || customButtonProps.text;
    } else if (viewSpec = viewSpecs[buttonName]) {
      viewsWithButtons.push(buttonName);
      buttonClick = () => {
        calendarApi.changeView(buttonName);
      };
      (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
      let textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
      buttonHint = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f)(viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint, [textFallback, buttonName],
      // view-name = buttonName
      textFallback);
    } else if (calendarApi[buttonName]) {
      // a calendarApi method
      buttonClick = () => {
        calendarApi[buttonName]();
      };
      (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); // everything else is considered default
      if (buttonName === 'prevYear' || buttonName === 'nextYear') {
        let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
        buttonHint = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f)(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [calendarButtonText.year || 'year', 'year'], calendarButtonText[buttonName]);
      } else {
        buttonHint = navUnit => (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f)(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [calendarButtonText[navUnit] || navUnit, navUnit], calendarButtonText[buttonName]);
      }
    }
    return {
      buttonName,
      buttonClick,
      buttonIcon,
      buttonText,
      buttonHint
    };
  }));
  return {
    widgets,
    viewsWithButtons,
    hasTitle
  };
}

// always represents the current view. otherwise, it'd need to change value every time date changes
class ViewImpl {
  constructor(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(name) {
    return this.getCurrentData().options[name]; // are the view-specific options
  }
}

class TaskRunner {
  constructor(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(this.drain.bind(this));
  }
  request(task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  }
  pause(scope) {
    this.delayedRunner.pause(scope);
  }
  resume(scope, force) {
    this.delayedRunner.resume(scope, force);
  }
  drain() {
    let {
      queue
    } = this;
    while (queue.length) {
      let completedTasks = [];
      let task;
      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }
      this.drained(completedTasks);
    } // keep going, in case new tasks were added in the drained handler
  }

  runTask(task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  }
  drained(completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  }
}

// Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile, viewOptions, dateEnv) {
  let range;
  // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }
  return dateEnv.formatRange(range.start, range.end, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e)(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile) {
  let {
    currentRangeUnit
  } = dateProfile;
  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  }
  if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  }

  let days = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.h)(dateProfile.currentRange.start, dateProfile.currentRange.end);
  if (days !== null && days > 1) {
    // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  }
  // one day. longer, like "September 9 2014"
  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
}

// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
class CalendarDataManager {
  constructor(props) {
    this.computeOptionsData = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(this._computeOptionsData);
    this.computeCurrentViewData = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(this._computeCurrentViewData);
    this.organizeRawLocales = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(organizeRawLocales);
    this.buildLocale = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildLocale);
    this.buildPluginHooks = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.k)();
    this.buildDateEnv = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildDateEnv$1);
    this.buildTheme = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildTheme);
    this.parseToolbars = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(parseToolbars);
    this.buildViewSpecs = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildViewSpecs);
    this.buildDateProfileGenerator = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l)(buildDateProfileGenerator);
    this.buildViewApi = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildViewApi);
    this.buildViewUiProps = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l)(buildViewUiProps);
    this.buildEventUiBySource = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildEventUiBySource, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n);
    this.buildEventUiBases = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildEventUiBases);
    this.parseContextBusinessHours = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l)(parseContextBusinessHours);
    this.buildTitle = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildTitle);
    this.emitter = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.E();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};
    this.getCurrentData = () => this.data;
    this.dispatch = action => {
      this.actionRunner.request(action); // protects against recursive calls to _handleAction
    };

    this.props = props;
    this.actionRunner.pause();
    let dynamicOptionOverrides = {};
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    // wire things up
    // TODO: not DRY
    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    let currentDate = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.o)(optionsData.calendarOptions, optionsData.dateEnv);
    let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    if (!(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r)(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    let calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    // needs to be after setThisContext
    for (let callback of optionsData.pluginHooks.contextInit) {
      callback(calendarContext);
    }
    // NOT DRY
    let eventSources = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.p)(optionsData.calendarOptions, dateProfile, calendarContext);
    let initialState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources,
      eventUiBases: {},
      eventStore: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.q)(),
      renderableEventStore: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.q)(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
    for (let reducer of optionsData.pluginHooks.reducers) {
      Object.assign(initialState, reducer(null, null, contextAndState));
    }
    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger('loading', true); // NOT DRY
    }

    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }
  resetOptions(optionOverrides, append) {
    let {
      props
    } = this;
    props.optionOverrides = append ? Object.assign(Object.assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: 'NOTHING'
    });
  }
  _handleAction(action) {
    let {
      props,
      state,
      emitter
    } = this;
    let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = reduceViewType(state.currentViewType, action);
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    // wire things up
    // TODO: not DRY
    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    let calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter,
      getCurrentData: this.getCurrentData
    };
    let {
      currentDate,
      dateProfile
    } = state;
    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      // hack
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }
    currentDate = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.s)(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
    if (action.type === 'PREV' ||
    // TODO: move this logic into DateProfileGenerator
    action.type === 'NEXT' ||
    // "
    !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r)(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    let eventSources = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.t)(state.eventSources, action, dateProfile, calendarContext);
    let eventStore = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.u)(state.eventStore, action, eventSources, dateProfile, calendarContext);
    let isEventsLoading = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.v)(eventSources); // BAD. also called in this func in computeIsLoading
    let renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore :
    // try from previous state
    eventStore;
    let {
      eventUiSingleBase,
      selectionConfig
    } = this.buildViewUiProps(calendarContext); // will memoize obj
    let eventUiBySource = this.buildEventUiBySource(eventSources);
    let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    let newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
    for (let reducer of optionsData.pluginHooks.reducers) {
      Object.assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
    }

    let wasLoading = computeIsLoading(state, calendarContext);
    let isLoading = computeIsLoading(newState, calendarContext);
    // TODO: use propSetHandlers in plugin system
    if (!wasLoading && isLoading) {
      emitter.trigger('loading', true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger('loading', false);
    }
    this.state = newState;
    if (props.onAction) {
      props.onAction(action);
    }
  }
  updateData() {
    let {
      props,
      state
    } = this;
    let oldData = this.data;
    let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
    let data = this.data = Object.assign(Object.assign(Object.assign({
      viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, optionsData), currentViewData), state);
    let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    let oldCalendarOptions = oldData && oldData.calendarOptions;
    let newCalendarOptions = optionsData.calendarOptions;
    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        // hack
        state.eventSources = data.eventSources = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.w)(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.x)(data.eventStore, oldData.dateEnv, data.dateEnv);
      }
      for (let optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }
    if (props.onData) {
      props.onData(data);
    }
  }
  _computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
    // TODO: blacklist options that are handled by optionChangeHandlers
    let {
      refinedOptions,
      pluginHooks,
      localeDefaults,
      availableLocaleData,
      extra
    } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    let viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    let theme = this.buildTheme(refinedOptions, pluginHooks);
    let toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      theme,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
    let {
      locales,
      locale
    } = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.y)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B, optionOverrides, dynamicOptionOverrides]);
    let availableLocaleData = this.organizeRawLocales(locales);
    let availableRawLocales = availableLocaleData.map;
    let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z);
    let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.F), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.G), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let extra = {};
    let raw = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.y)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B, localeDefaults, optionOverrides, dynamicOptionOverrides]);
    let refined = {};
    let currentRaw = this.currentCalendarOptionsInput;
    let currentRefined = this.currentCalendarOptionsRefined;
    let anyChanges = false;
    for (let optionName in raw) {
      if (optionName !== 'plugins') {
        // because plugins is special-cased
        if (raw[optionName] === currentRaw[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName] && optionName in currentRaw && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }
    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults,
      extra
    };
  }
  _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    let viewSpec = optionsData.viewSpecs[viewType];
    if (!viewSpec) {
      throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
    }
    let {
      refinedOptions,
      extra
    } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    let dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return {
      viewSpec,
      options: refinedOptions,
      dateProfileGenerator,
      viewApi
    };
  }
  processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    let raw = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.y)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);
    let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.F), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.G), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.I), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let refined = {};
    let currentRaw = this.currentViewOptionsInput;
    let currentRefined = this.currentViewOptionsRefined;
    let anyChanges = false;
    let extra = {};
    for (let optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName] && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName](raw[optionName], currentRaw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName] && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            // might be an "extra" prop
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra
    };
  }
}
function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.J({
    calendarSystem: 'gregory',
    timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale,
    weekNumberCalculation,
    firstDay,
    weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator
  });
}
function buildTheme(options, pluginHooks) {
  let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
  let DateProfileGeneratorClass = props.dateProfileGeneratorClass || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.K;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewImpl(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(eventSources, eventSource => eventSource.ui);
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  let eventUiBases = {
    '': eventUiSingleBase
  };
  for (let defId in eventDefs) {
    let def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  let {
    options
  } = calendarContext;
  return {
    eventUiSingleBase: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.L)({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, calendarContext),
    selectionConfig: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.L)({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
    if (isLoadingFunc(state)) {
      return true;
    }
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.M)(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
  for (let optionName in options) {
    console.warn(`Unknown option '${optionName}'` + (viewName ? ` for view '${viewName}'` : ''));
  }
}
class ToolbarSection extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N {
  render() {
    let children = this.props.widgetGroups.map(widgetGroup => this.renderWidgetGroup(widgetGroup));
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
      className: 'fc-toolbar-chunk'
    }, ...children);
  }
  renderWidgetGroup(widgetGroup) {
    let {
      props
    } = this;
    let {
      theme
    } = this.context;
    let children = [];
    let isOnlyButtons = true;
    for (let widget of widgetGroup) {
      let {
        buttonName,
        buttonClick,
        buttonText,
        buttonIcon,
        buttonHint
      } = widget;
      if (buttonName === 'title') {
        isOnlyButtons = false;
        children.push((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
          className: "fc-toolbar-title",
          id: props.titleId
        }, props.title));
      } else {
        let isPressed = buttonName === props.activeButton;
        let isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
        let buttonClasses = [`fc-${buttonName}-button`, theme.getClass('button')];
        if (isPressed) {
          buttonClasses.push(theme.getClass('buttonActive'));
        }
        children.push((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
          type: "button",
          title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint,
          disabled: isDisabled,
          "aria-pressed": isPressed,
          className: buttonClasses.join(' '),
          onClick: buttonClick
        }, buttonText || (buttonIcon ? (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          className: buttonIcon
        }) : '')));
      }
    }
    if (children.length > 1) {
      let groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
        className: groupClassName
      }, ...children);
    }
    return children[0];
  }
}
class Toolbar extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N {
  render() {
    let {
      model,
      extraClassName
    } = this.props;
    let forceLtr = false;
    let startContent;
    let endContent;
    let sectionWidgets = model.sectionWidgets;
    let centerContent = sectionWidgets.center;
    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }
    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }
    let classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classNames.join(' ')
    }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
  }
  renderSection(key, widgetGroups) {
    let {
      props
    } = this;
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarSection, {
      key: key,
      widgetGroups: widgetGroups,
      title: props.title,
      navUnit: props.navUnit,
      activeButton: props.activeButton,
      isTodayEnabled: props.isTodayEnabled,
      isPrevEnabled: props.isPrevEnabled,
      isNextEnabled: props.isNextEnabled,
      titleId: props.titleId
    });
  }
}

// TODO: do function component?
class ViewContainer extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N {
  constructor() {
    super(...arguments);
    this.state = {
      availableWidth: null
    };
    this.handleEl = el => {
      this.el = el;
      (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.O)(this.props.elRef, el);
      this.updateAvailableWidth();
    };
    this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    let {
      aspectRatio
    } = props;
    let classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
    : 'fc-view-harness-passive' // let the view do the height
    ];

    let height = '';
    let paddingBottom = '';
    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        // while waiting to know availableWidth, we can't set height to *zero*
        // because will cause lots of unnecessary scrollbars within scrollgrid.
        // BETTER: don't start rendering ANYTHING yet until we know container width
        // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
        paddingBottom = `${1 / aspectRatio * 100}%`;
      }
    } else {
      height = props.height || '';
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      "aria-labelledby": props.labeledById,
      ref: this.handleEl,
      className: classNames.join(' '),
      style: {
        height,
        paddingBottom
      }
    }, props.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    if (this.el &&
    // needed. but why?
    this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
    ) {
      this.setState({
        availableWidth: this.el.offsetWidth
      });
    }
  }
}

/*
Detects when the user clicks on an event within a DateComponent
*/
class EventClicking extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.P {
  constructor(settings) {
    super(settings);
    this.handleSegClick = (ev, segEl) => {
      let {
        component
      } = this;
      let {
        context
      } = component;
      let seg = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q)(segEl);
      if (seg &&
      // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        let hasUrlContainer = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.R)(ev.target, '.fc-event-forced-url');
        let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.S(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };
    this.destroy = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.U)(settings.el, 'click', '.fc-event',
    // on both fg and bg events
    this.handleSegClick);
  }
}

/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
class EventHovering extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.P {
  constructor(settings) {
    super(settings);
    // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
    this.handleEventElRemove = el => {
      if (el === this.currentSegEl) {
        this.handleSegLeave(null, this.currentSegEl);
      }
    };
    this.handleSegEnter = (ev, segEl) => {
      if ((0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q)(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        this.currentSegEl = segEl;
        this.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };
    this.handleSegLeave = (ev, segEl) => {
      if (this.currentSegEl) {
        this.currentSegEl = null;
        this.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };
    this.removeHoverListeners = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.W)(settings.el, '.fc-event',
    // on both fg and bg events
    this.handleSegEnter, this.handleSegLeave);
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(publicEvName, ev, segEl) {
    let {
      component
    } = this;
    let {
      context
    } = component;
    let seg = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q)(segEl);
    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.S(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  }
}
class CalendarContent extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.X {
  constructor() {
    super(...arguments);
    this.buildViewContext = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Y);
    this.buildViewPropTransformers = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildViewPropTransformers);
    this.buildToolbarProps = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(buildToolbarProps);
    this.headerRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.footerRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.interactionsStore = {};
    // eslint-disable-next-line
    this.state = {
      viewLabelId: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Z)()
    };
    // Component Registration
    // -----------------------------------------------------------------------------------------------------------------
    this.registerInteractiveComponent = (component, settingsInput) => {
      let settings = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__._)(component, settingsInput);
      let DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
      let interactions = interactionClasses.map(TheInteractionClass => new TheInteractionClass(settings));
      this.interactionsStore[component.uid] = interactions;
      _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.$[component.uid] = settings;
    };
    this.unregisterInteractiveComponent = component => {
      let listeners = this.interactionsStore[component.uid];
      if (listeners) {
        for (let listener of listeners) {
          listener.destroy();
        }
        delete this.interactionsStore[component.uid];
      }
      delete _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.$[component.uid];
    };
    // Resizing
    // -----------------------------------------------------------------------------------------------------------------
    this.resizeRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(() => {
      this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
      this.props.emitter.trigger('windowResize', {
        view: this.props.viewApi
      });
    });
    this.handleWindowResize = ev => {
      let {
        options
      } = this.props;
      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
        this.resizeRunner.request(options.windowResizeDelay);
      }
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let {
      props
    } = this;
    let {
      toolbarConfig,
      options
    } = props;
    let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a0)(props.options.now, props.dateEnv),
    // TODO: use NowTimer????
    props.viewTitle);
    let viewVGrow = false;
    let viewHeight = '';
    let viewAspectRatio;
    if (props.isHeightAuto || props.forPrint) {
      viewHeight = '';
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
    }

    let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    let viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : '';
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V.Provider, {
      value: viewContext
    }, toolbarConfig.header && (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, Object.assign({
      ref: this.headerRef,
      extraClassName: "fc-header-toolbar",
      model: toolbarConfig.header,
      titleId: viewLabelId
    }, toolbarProps)), (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContainer, {
      liquid: viewVGrow,
      height: viewHeight,
      aspectRatio: viewAspectRatio,
      labeledById: viewLabelId
    }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footer && (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, Object.assign({
      ref: this.footerRef,
      extraClassName: "fc-footer-toolbar",
      model: toolbarConfig.footer,
      titleId: ""
    }, toolbarProps)));
  }
  componentDidMount() {
    let {
      props
    } = this;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(CalendarInteractionClass => new CalendarInteractionClass(props));
    window.addEventListener('resize', this.handleWindowResize);
    let {
      propSetHandlers
    } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  }
  componentDidUpdate(prevProps) {
    let {
      props
    } = this;
    let {
      propSetHandlers
    } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    this.resizeRunner.clear();
    for (let interaction of this.calendarInteractions) {
      interaction.destroy();
    }
    this.props.emitter.trigger('_unmount');
  }
  buildAppendContent() {
    let {
      props
    } = this;
    let children = props.pluginHooks.viewContainerAppends.map(buildAppendContent => buildAppendContent(props));
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...children);
  }
  renderView(props) {
    let {
      pluginHooks
    } = props;
    let {
      viewSpec
    } = props;
    let viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
    for (let transformer of transformers) {
      Object.assign(viewProps, transformer.transform(viewProps, props));
    }
    let ViewComponent = viewSpec.component;
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewComponent, Object.assign({}, viewProps));
  }
}
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
  let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r)(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
  return theClasses.map(TheClass => new TheClass());
}
class Calendar extends _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a1 {
  constructor(el, optionOverrides = {}) {
    super();
    this.isRendering = false;
    this.isRendered = false;
    this.currentClassNames = [];
    this.customContentRenderId = 0;
    this.handleAction = action => {
      // actions we know we want to render immediately
      switch (action.type) {
        case 'SET_EVENT_DRAG':
        case 'SET_EVENT_RESIZE':
          this.renderRunner.tryDrain();
      }
    };
    this.handleData = data => {
      this.currentData = data;
      this.renderRunner.request(data.calendarOptions.rerenderDelay);
    };
    this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = true;
        let {
          currentData
        } = this;
        (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a2)(() => {
          (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a3, {
            options: currentData.calendarOptions,
            theme: currentData.theme,
            emitter: currentData.emitter
          }, (classNames, height, isHeightAuto, forPrint) => {
            this.setClassNames(classNames);
            this.setHeight(height);
            return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a4.Provider, {
              value: this.customContentRenderId
            }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(CalendarContent, Object.assign({
              isHeightAuto: isHeightAuto,
              forPrint: forPrint
            }, currentData)));
          }), this.el);
        });
      } else if (this.isRendered) {
        this.isRendered = false;
        (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null, this.el);
        this.setClassNames([]);
        this.setHeight('');
      }
    };
    this.el = el;
    this.renderRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(this.handleRenderRequest);
    new CalendarDataManager({
      optionOverrides,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let wasRendering = this.isRendering;
    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId += 1;
    }
    this.renderRunner.request();
    if (wasRendering) {
      this.updateSize();
    }
  }
  destroy() {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
  }
  updateSize() {
    (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a2)(() => {
      super.updateSize();
    });
  }
  batchRendering(func) {
    this.renderRunner.pause('batchRendering');
    func();
    this.renderRunner.resume('batchRendering');
  }
  pauseRendering() {
    this.renderRunner.pause('pauseRendering');
  }
  resumeRendering() {
    this.renderRunner.resume('pauseRendering', true);
  }
  resetOptions(optionOverrides, append) {
    this.currentDataManager.resetOptions(optionOverrides, append);
  }
  setClassNames(classNames) {
    if (!(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a5)(classNames, this.currentClassNames)) {
      let {
        classList
      } = this.el;
      for (let className of this.currentClassNames) {
        classList.remove(className);
      }
      for (let className of classNames) {
        classList.add(className);
      }
      this.currentClassNames = classNames;
    }
  }
  setHeight(height) {
    (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a6)(this.el, 'height', height);
  }
}
function formatDate(dateInput, options = {}) {
  let dateEnv = buildDateEnv(options);
  let formatter = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e)(options);
  let dateMeta = dateEnv.createMarkerMeta(dateInput);
  if (!dateMeta) {
    // TODO: warning?
    return '';
  }
  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}
function formatRange(startInput, endInput, options) {
  let dateEnv = buildDateEnv(typeof options === 'object' && options ? options : {}); // pass in if non-null object
  let formatter = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e)(options);
  let startMeta = dateEnv.createMarkerMeta(startInput);
  let endMeta = dateEnv.createMarkerMeta(endInput);
  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }
  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B.defaultRangeSeparator
  });
}
// TODO: more DRY and optimized
function buildDateEnv(settings) {
  let locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
  return new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.J(Object.assign(Object.assign({
    timeZone: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale
  }));
}

// HELPERS
/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/
function sliceEvents(props, allDay) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a7)(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}
const version = '6.0.0-beta.2';


/***/ }),

/***/ 62543:
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/core/internal-common.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ interactionSettingsStore),
/* harmony export */   "A": () => (/* binding */ BASE_OPTION_REFINERS),
/* harmony export */   "B": () => (/* binding */ BASE_OPTION_DEFAULTS),
/* harmony export */   "C": () => (/* binding */ ContentContainer),
/* harmony export */   "D": () => (/* binding */ DelayedRunner),
/* harmony export */   "E": () => (/* binding */ Emitter),
/* harmony export */   "F": () => (/* binding */ CALENDAR_LISTENER_REFINERS),
/* harmony export */   "G": () => (/* binding */ CALENDAR_OPTION_REFINERS),
/* harmony export */   "H": () => (/* binding */ COMPLEX_OPTION_COMPARATORS),
/* harmony export */   "I": () => (/* binding */ VIEW_OPTION_REFINERS),
/* harmony export */   "J": () => (/* binding */ DateEnv),
/* harmony export */   "K": () => (/* binding */ DateProfileGenerator),
/* harmony export */   "L": () => (/* binding */ createEventUi),
/* harmony export */   "M": () => (/* binding */ parseBusinessHours),
/* harmony export */   "N": () => (/* binding */ BaseComponent),
/* harmony export */   "O": () => (/* binding */ setRef),
/* harmony export */   "P": () => (/* binding */ Interaction),
/* harmony export */   "Q": () => (/* binding */ getElSeg),
/* harmony export */   "R": () => (/* binding */ elementClosest),
/* harmony export */   "S": () => (/* binding */ EventImpl),
/* harmony export */   "T": () => (/* binding */ Theme),
/* harmony export */   "U": () => (/* binding */ listenBySelector),
/* harmony export */   "V": () => (/* binding */ ViewContextType),
/* harmony export */   "W": () => (/* binding */ listenToHoverBySelector),
/* harmony export */   "X": () => (/* binding */ PureComponent),
/* harmony export */   "Y": () => (/* binding */ buildViewContext),
/* harmony export */   "Z": () => (/* binding */ getUniqueDomId),
/* harmony export */   "_": () => (/* binding */ parseInteractionSettings),
/* harmony export */   "a": () => (/* binding */ mapHash),
/* harmony export */   "a$": () => (/* binding */ whenTransitionDone),
/* harmony export */   "a0": () => (/* binding */ getNow),
/* harmony export */   "a1": () => (/* binding */ CalendarImpl),
/* harmony export */   "a2": () => (/* binding */ flushSync),
/* harmony export */   "a3": () => (/* binding */ CalendarRoot),
/* harmony export */   "a4": () => (/* binding */ RenderId),
/* harmony export */   "a5": () => (/* binding */ isArraysEqual),
/* harmony export */   "a6": () => (/* binding */ applyStyleProp),
/* harmony export */   "a7": () => (/* binding */ sliceEventStore),
/* harmony export */   "a8": () => (/* binding */ createPlugin),
/* harmony export */   "a9": () => (/* binding */ JsonRequestError),
/* harmony export */   "aA": () => (/* binding */ pointInsideRect),
/* harmony export */   "aB": () => (/* binding */ constrainPoint),
/* harmony export */   "aC": () => (/* binding */ getRectCenter),
/* harmony export */   "aD": () => (/* binding */ diffPoints),
/* harmony export */   "aE": () => (/* binding */ translateRect),
/* harmony export */   "aF": () => (/* binding */ filterHash),
/* harmony export */   "aG": () => (/* binding */ compareObjs),
/* harmony export */   "aH": () => (/* binding */ collectFromHash),
/* harmony export */   "aI": () => (/* binding */ findElements),
/* harmony export */   "aJ": () => (/* binding */ findDirectChildren),
/* harmony export */   "aK": () => (/* binding */ removeElement),
/* harmony export */   "aL": () => (/* binding */ applyStyle),
/* harmony export */   "aM": () => (/* binding */ elementMatches),
/* harmony export */   "aN": () => (/* binding */ getElRoot),
/* harmony export */   "aO": () => (/* binding */ getEventTargetViaRoot),
/* harmony export */   "aP": () => (/* binding */ parseClassNames),
/* harmony export */   "aQ": () => (/* binding */ getCanVGrowWithinCell),
/* harmony export */   "aR": () => (/* binding */ mergeEventStores),
/* harmony export */   "aS": () => (/* binding */ getRelevantEvents),
/* harmony export */   "aT": () => (/* binding */ eventTupleToStore),
/* harmony export */   "aU": () => (/* binding */ combineEventUis),
/* harmony export */   "aV": () => (/* binding */ Splitter),
/* harmony export */   "aW": () => (/* binding */ getDayClassNames),
/* harmony export */   "aX": () => (/* binding */ getDateMeta),
/* harmony export */   "aY": () => (/* binding */ getSlotClassNames),
/* harmony export */   "aZ": () => (/* binding */ buildNavLinkAttrs),
/* harmony export */   "a_": () => (/* binding */ preventDefault),
/* harmony export */   "aa": () => (/* binding */ createContext),
/* harmony export */   "ab": () => (/* binding */ identity),
/* harmony export */   "ac": () => (/* binding */ refineProps),
/* harmony export */   "ad": () => (/* binding */ createEventInstance),
/* harmony export */   "ae": () => (/* binding */ parseEventDef),
/* harmony export */   "af": () => (/* binding */ refineEventDef),
/* harmony export */   "ag": () => (/* binding */ padStart),
/* harmony export */   "ah": () => (/* binding */ isInt),
/* harmony export */   "ai": () => (/* binding */ parseFieldSpecs),
/* harmony export */   "aj": () => (/* binding */ compareByFieldSpecs),
/* harmony export */   "ak": () => (/* binding */ flexibleCompare),
/* harmony export */   "al": () => (/* binding */ preventSelection),
/* harmony export */   "am": () => (/* binding */ allowSelection),
/* harmony export */   "an": () => (/* binding */ preventContextMenu),
/* harmony export */   "ao": () => (/* binding */ allowContextMenu),
/* harmony export */   "ap": () => (/* binding */ compareNumbers),
/* harmony export */   "aq": () => (/* binding */ enableCursor),
/* harmony export */   "ar": () => (/* binding */ disableCursor),
/* harmony export */   "as": () => (/* binding */ guid),
/* harmony export */   "at": () => (/* binding */ computeVisibleDayRange),
/* harmony export */   "au": () => (/* binding */ isMultiDayRange),
/* harmony export */   "av": () => (/* binding */ diffDates),
/* harmony export */   "aw": () => (/* binding */ removeExact),
/* harmony export */   "ax": () => (/* binding */ memoizeArraylike),
/* harmony export */   "ay": () => (/* binding */ memoizeHashlike),
/* harmony export */   "az": () => (/* binding */ intersectRects),
/* harmony export */   "b": () => (/* binding */ buildViewClassNames),
/* harmony export */   "b$": () => (/* binding */ requestJson),
/* harmony export */   "b0": () => (/* binding */ computeInnerRect),
/* harmony export */   "b1": () => (/* binding */ computeEdges),
/* harmony export */   "b2": () => (/* binding */ getClippingParents),
/* harmony export */   "b3": () => (/* binding */ computeRect),
/* harmony export */   "b4": () => (/* binding */ unpromisify),
/* harmony export */   "b5": () => (/* binding */ intersectRanges),
/* harmony export */   "b6": () => (/* binding */ rangesEqual),
/* harmony export */   "b7": () => (/* binding */ rangesIntersect),
/* harmony export */   "b8": () => (/* binding */ rangeContainsRange),
/* harmony export */   "b9": () => (/* binding */ PositionCache),
/* harmony export */   "bA": () => (/* binding */ SegHierarchy),
/* harmony export */   "bB": () => (/* binding */ buildEntryKey),
/* harmony export */   "bC": () => (/* binding */ getEntrySpanEnd),
/* harmony export */   "bD": () => (/* binding */ binarySearch),
/* harmony export */   "bE": () => (/* binding */ groupIntersectingEntries),
/* harmony export */   "bF": () => (/* binding */ intersectSpans),
/* harmony export */   "bG": () => (/* binding */ interactionSettingsToStore),
/* harmony export */   "bH": () => (/* binding */ ElementDragging),
/* harmony export */   "bI": () => (/* binding */ config),
/* harmony export */   "bJ": () => (/* binding */ parseDragMeta),
/* harmony export */   "bK": () => (/* binding */ DayHeader),
/* harmony export */   "bL": () => (/* binding */ computeFallbackHeaderFormat),
/* harmony export */   "bM": () => (/* binding */ TableDateCell),
/* harmony export */   "bN": () => (/* binding */ TableDowCell),
/* harmony export */   "bO": () => (/* binding */ DaySeriesModel),
/* harmony export */   "bP": () => (/* binding */ hasBgRendering),
/* harmony export */   "bQ": () => (/* binding */ buildSegTimeText),
/* harmony export */   "bR": () => (/* binding */ sortEventSegs),
/* harmony export */   "bS": () => (/* binding */ getSegMeta),
/* harmony export */   "bT": () => (/* binding */ buildEventRangeKey),
/* harmony export */   "bU": () => (/* binding */ getSegAnchorAttrs),
/* harmony export */   "bV": () => (/* binding */ DayTableModel),
/* harmony export */   "bW": () => (/* binding */ Slicer),
/* harmony export */   "bX": () => (/* binding */ applyMutationToEventStore),
/* harmony export */   "bY": () => (/* binding */ isPropsValid),
/* harmony export */   "bZ": () => (/* binding */ isInteractionValid),
/* harmony export */   "b_": () => (/* binding */ isDateSelectionValid),
/* harmony export */   "ba": () => (/* binding */ ScrollController),
/* harmony export */   "bb": () => (/* binding */ ElementScrollController),
/* harmony export */   "bc": () => (/* binding */ WindowScrollController),
/* harmony export */   "bd": () => (/* binding */ DateComponent),
/* harmony export */   "be": () => (/* binding */ isDateSpansEqual),
/* harmony export */   "bf": () => (/* binding */ addDays),
/* harmony export */   "bg": () => (/* binding */ startOfDay),
/* harmony export */   "bh": () => (/* binding */ addMs),
/* harmony export */   "bi": () => (/* binding */ addWeeks),
/* harmony export */   "bj": () => (/* binding */ diffWeeks),
/* harmony export */   "bk": () => (/* binding */ diffWholeWeeks),
/* harmony export */   "bl": () => (/* binding */ diffDayAndTime),
/* harmony export */   "bm": () => (/* binding */ diffDays),
/* harmony export */   "bn": () => (/* binding */ isValidDate),
/* harmony export */   "bo": () => (/* binding */ asCleanDays),
/* harmony export */   "bp": () => (/* binding */ multiplyDuration),
/* harmony export */   "bq": () => (/* binding */ addDurations),
/* harmony export */   "br": () => (/* binding */ asRoughMinutes),
/* harmony export */   "bs": () => (/* binding */ asRoughSeconds),
/* harmony export */   "bt": () => (/* binding */ asRoughMs),
/* harmony export */   "bu": () => (/* binding */ wholeDivideDurations),
/* harmony export */   "bv": () => (/* binding */ formatIsoTimeString),
/* harmony export */   "bw": () => (/* binding */ formatDayString),
/* harmony export */   "bx": () => (/* binding */ buildIsoString),
/* harmony export */   "by": () => (/* binding */ NamedTimeZoneImpl),
/* harmony export */   "bz": () => (/* binding */ parse),
/* harmony export */   "c": () => (/* binding */ greatestDurationDenominator),
/* harmony export */   "c0": () => (/* binding */ SimpleScrollGrid),
/* harmony export */   "c1": () => (/* binding */ hasShrinkWidth),
/* harmony export */   "c2": () => (/* binding */ renderMicroColGroup),
/* harmony export */   "c3": () => (/* binding */ getScrollGridClassNames),
/* harmony export */   "c4": () => (/* binding */ getSectionClassNames),
/* harmony export */   "c5": () => (/* binding */ getSectionHasLiquidHeight),
/* harmony export */   "c6": () => (/* binding */ getAllowYScrolling),
/* harmony export */   "c7": () => (/* binding */ renderChunkContent),
/* harmony export */   "c8": () => (/* binding */ computeShrinkWidth),
/* harmony export */   "c9": () => (/* binding */ sanitizeShrinkWidth),
/* harmony export */   "ca": () => (/* binding */ isColPropsEqual),
/* harmony export */   "cb": () => (/* binding */ renderScrollShim),
/* harmony export */   "cc": () => (/* binding */ getStickyFooterScrollbar),
/* harmony export */   "cd": () => (/* binding */ getStickyHeaderDates),
/* harmony export */   "ce": () => (/* binding */ Scroller),
/* harmony export */   "cf": () => (/* binding */ getScrollbarWidths),
/* harmony export */   "cg": () => (/* binding */ RefMap),
/* harmony export */   "ch": () => (/* binding */ getIsRtlScrollbarOnLeft),
/* harmony export */   "ci": () => (/* binding */ NowTimer),
/* harmony export */   "cj": () => (/* binding */ ScrollResponder),
/* harmony export */   "ck": () => (/* binding */ StandardEvent),
/* harmony export */   "cl": () => (/* binding */ NowIndicatorContainer),
/* harmony export */   "cm": () => (/* binding */ DayCellContainer),
/* harmony export */   "cn": () => (/* binding */ hasCustomDayCellContent),
/* harmony export */   "co": () => (/* binding */ EventContainer),
/* harmony export */   "cp": () => (/* binding */ renderFill),
/* harmony export */   "cq": () => (/* binding */ BgEvent),
/* harmony export */   "cr": () => (/* binding */ WeekNumberContainer),
/* harmony export */   "cs": () => (/* binding */ MoreLinkContainer),
/* harmony export */   "ct": () => (/* binding */ computeEarliestSegStart),
/* harmony export */   "cu": () => (/* binding */ ViewContainer),
/* harmony export */   "cv": () => (/* binding */ triggerDateSelect),
/* harmony export */   "cw": () => (/* binding */ getDefaultEventEnd),
/* harmony export */   "cx": () => (/* binding */ buildEventApis),
/* harmony export */   "cy": () => (/* binding */ buildElAttrs),
/* harmony export */   "cz": () => (/* binding */ CustomRenderingStore),
/* harmony export */   "d": () => (/* binding */ createDuration),
/* harmony export */   "e": () => (/* binding */ createFormatter),
/* harmony export */   "f": () => (/* binding */ formatWithOrdinals),
/* harmony export */   "g": () => (/* binding */ globalLocales),
/* harmony export */   "h": () => (/* binding */ diffWholeDays),
/* harmony export */   "i": () => (/* binding */ injectStyles),
/* harmony export */   "j": () => (/* binding */ memoize),
/* harmony export */   "k": () => (/* binding */ buildBuildPluginHooks),
/* harmony export */   "l": () => (/* binding */ memoizeObjArg),
/* harmony export */   "m": () => (/* binding */ mergeProps),
/* harmony export */   "n": () => (/* binding */ isPropsEqual),
/* harmony export */   "o": () => (/* binding */ getInitialDate),
/* harmony export */   "p": () => (/* binding */ initEventSources),
/* harmony export */   "q": () => (/* binding */ createEmptyEventStore),
/* harmony export */   "r": () => (/* binding */ rangeContainsMarker),
/* harmony export */   "s": () => (/* binding */ reduceCurrentDate),
/* harmony export */   "t": () => (/* binding */ reduceEventSources),
/* harmony export */   "u": () => (/* binding */ reduceEventStore),
/* harmony export */   "v": () => (/* binding */ computeEventSourcesLoading),
/* harmony export */   "w": () => (/* binding */ reduceEventSourcesNewTimeZone),
/* harmony export */   "x": () => (/* binding */ rezoneEventStoreDates),
/* harmony export */   "y": () => (/* binding */ mergeRawOptions),
/* harmony export */   "z": () => (/* binding */ globalPlugins)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ 89086);




/*
NOTE: this can be a public API, especially createElement for hooks.
See examples/typescript-scheduler/src/index.ts
*/
function flushSync(runBeforeFlush) {
  runBeforeFlush();
  let oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering; // orig
  let callbackQ = [];
  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }
  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = execCallbackSync;
  preact__WEBPACK_IMPORTED_MODULE_0__.render(preact__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeComponent, {}), document.createElement('div'));
  while (callbackQ.length) {
    callbackQ.shift()();
  }
  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
}
class FakeComponent extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {});
  }
  componentDidMount() {
    this.setState({});
  }
}
// TODO: use preact/compat instead?
function createContext(defaultValue) {
  let ContextType = preact__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);
  let origProvider = ContextType.Provider;
  ContextType.Provider = function () {
    let isNew = !this.getChildContext;
    let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
    if (isNew) {
      let subs = [];
      this.shouldComponentUpdate = _props => {
        if (this.props.value !== _props.value) {
          subs.forEach(c => {
            c.context = _props.value;
            c.forceUpdate();
          });
        }
      };
      this.sub = c => {
        subs.push(c);
        let old = c.componentWillUnmount;
        c.componentWillUnmount = () => {
          subs.splice(subs.indexOf(c), 1);
          old && old.call(c);
        };
      };
    }
    return children;
  };
  return ContextType;
}
function injectStyles(css) {
  if (!css || typeof document === 'undefined') {
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
class DelayedRunner {
  constructor(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  request(delay) {
    this.isDirty = true;
    if (!this.isPaused()) {
      this.clearTimeout();
      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout(
        // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this), delay);
      }
    }
  }
  pause(scope = '') {
    let {
      pauseDepths
    } = this;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  }
  resume(scope = '', force) {
    let {
      pauseDepths
    } = this;
    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        let depth = pauseDepths[scope];
        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }
      this.tryDrain();
    }
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;
      while (this.isDirty) {
        this.isDirty = false;
        this.drained(); // might set isDirty to true again
      }

      this.isRunning = false;
    }
  }
  clear() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }
  drained() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  }
}
const {
  hasOwnProperty
} = Object.prototype;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexPropsMap) {
  let dest = {};
  if (complexPropsMap) {
    for (let name in complexPropsMap) {
      let complexObjs = [];
      // collect the trailing object values, stopping when a non-object is discovered
      for (let i = propObjs.length - 1; i >= 0; i -= 1) {
        let val = propObjs[i][name];
        if (typeof val === 'object' && val) {
          // non-null object
          complexObjs.unshift(val);
        } else if (val !== undefined) {
          dest[name] = val; // if there were no objects, this value will be used
          break;
        }
      }
      // if the trailing values were objects, use the merged value
      if (complexObjs.length) {
        dest[name] = mergeProps(complexObjs);
      }
    }
  }
  // copy values into the destination, going from last to first
  for (let i = propObjs.length - 1; i >= 0; i -= 1) {
    let props = propObjs[i];
    for (let name in props) {
      if (!(name in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[name] = props[name];
      }
    }
  }
  return dest;
}
function filterHash(hash, func) {
  let filtered = {};
  for (let key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash(hash, func) {
  let newHash = {};
  for (let key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function arrayToHash(a) {
  let hash = {};
  for (let item of a) {
    hash[item] = true;
  }
  return hash;
}
// TODO: reassess browser support
// https://caniuse.com/?search=object.values
function hashValuesToArray(obj) {
  let a = [];
  for (let key in obj) {
    a.push(obj[key]);
  }
  return a;
}
function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }
  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }
  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }
  return true;
}
function getUnequalProps(obj0, obj1) {
  let keys = [];
  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }
  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }
  return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs = {}) {
  if (oldProps === newProps) {
    return true;
  }
  for (let key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  }
  // check for props that were omitted in the new
  for (let key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }
  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/
function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }
  if (comparator) {
    return comparator(val0, val1);
  }
  return false;
}
function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
  let res = [];
  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }
  for (let i = startIndex; i < endIndex; i += step) {
    let val = hash[i];
    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }
  return res;
}
const globalLocales = [];

// TODO: new util arrayify?
function removeExact(array, exactVal) {
  let removeCnt = 0;
  let i = 0;
  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt += 1;
    } else {
      i += 1;
    }
  }
  return removeCnt;
}
function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }
  let len = a0.length;
  let i;
  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }
  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }
  return true;
}
function memoize(workerFunc, resEquality, teardownFunc) {
  let currentArgs;
  let currentRes;
  return function (...newArgs) {
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  let currentArg;
  let currentRes;
  return newArg => {
    if (!currentArg) {
      currentRes = workerFunc.call(this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.call(this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
function memoizeArraylike(
// used at all?
workerFunc, resEquality, teardownFunc) {
  let currentArgSets = [];
  let currentResults = [];
  return newArgSets => {
    let currentLen = currentArgSets.length;
    let newLen = newArgSets.length;
    let i = 0;
    for (; i < currentLen; i += 1) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
        let res = workerFunc.apply(this, newArgSets[i]);
        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }
    for (; i < newLen; i += 1) {
      currentResults[i] = workerFunc.apply(this, newArgSets[i]);
    }
    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess
    return currentResults;
  };
}
function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
  let currentArgHash = {};
  let currentResHash = {};
  return newArgHash => {
    let newResHash = {};
    for (let key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(this, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }
        let res = workerFunc.apply(this, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }
    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
    // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  }

  if (!document.documentElement.contains(el)) {
    return null;
  }
  do {
    if (elementMatches(el, selector)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
function elementMatches(el, selector) {
  let method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container, selector) {
  let containers = container instanceof HTMLElement ? [container] : container;
  let allMatches = [];
  for (let i = 0; i < containers.length; i += 1) {
    let matches = containers[i].querySelectorAll(selector);
    for (let j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }
  return allMatches;
}
// accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!
function findDirectChildren(parent, selector) {
  let parents = parent instanceof HTMLElement ? [parent] : parent;
  let allMatches = [];
  for (let i = 0; i < parents.length; i += 1) {
    let childNodes = parents[i].children; // only ever elements
    for (let j = 0; j < childNodes.length; j += 1) {
      let childNode = childNodes[j];
      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }
  return allMatches;
}
// Style
// ----------------------------------------------------------------------------------------------------------------
const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (let propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = `${val}px`;
  } else {
    el.style[name] = val;
  }
}
// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev) {
  var _a, _b;
  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
// Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------
function getElRoot(el) {
  return el.getRootNode ? el.getRootNode() : document;
}
// Unique ID for DOM attribute
let guid$1 = 0;
function getUniqueDomId() {
  guid$1 += 1;
  return 'fc-dom-' + guid$1;
}

// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
  ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector, handler) {
  return ev => {
    let matchedChild = elementClosest(ev.target, selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  let attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return () => {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  let currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, (mouseOverEv, matchedChild) => {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      let realOnMouseLeave = mouseLeaveEv => {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
      };
      // listen to the next mouseleave, and then unattach
      matchedChild.addEventListener('mouseleave', realOnMouseLeave);
    }
  });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
const transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend'];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
  let realCallback = ev => {
    callback(ev);
    transitionEventNames.forEach(eventName => {
      el.removeEventListener(eventName, realCallback);
    });
  };
  transitionEventNames.forEach(eventName => {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
}
// ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------
function createAriaClickAttrs(handler) {
  return Object.assign({
    onClick: handler
  }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown(ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        handler(ev);
        ev.preventDefault(); // if space, don't scroll down page
      }
    }
  };
}

let guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
  document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/
function preventSelection(el) {
  el.classList.add('fc-unselectable');
  el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
  el.classList.remove('fc-unselectable');
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/
function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}
function parseFieldSpecs(input) {
  let specs = [];
  let tokens = [];
  let i;
  let token;
  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];
    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  let i;
  let cmp;
  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (b == null) {
    return -1;
  }
  if (a == null) {
    return 1;
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }
  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function padStart(val, len) {
  let s = String(val);
  return '000'.substr(0, len - s.length) + s;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === 'function') {
    return formatter(...args);
  }
  if (typeof formatter === 'string') {
    // non-blank string
    return args.reduce((str, arg, index) => str.replace('$' + index, arg || ''), formatter);
  }
  return fallbackText;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/
function compareNumbers(a, b) {
  return a - b;
}
function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/
function computeSmallestCellWidth(cellEl) {
  let allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  let contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }

  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }
  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width +
  // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}

// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input) {
  return {
    id: guid(),
    name: input.name,
    premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : undefined,
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  let currentPluginIds = {};
  let hooks = {
    premiumReleaseDate: undefined,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function addDefs(defs) {
    for (let def of defs) {
      const pluginName = def.name;
      const currentId = currentPluginIds[pluginName];
      if (currentId === undefined) {
        currentPluginIds[pluginName] = def.id;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      } else if (currentId !== def.id) {
        // different ID than the one already added
        console.warn(`Duplicate plugin '${pluginName}'`);
      }
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  let currentOverrideDefs = [];
  let currentGlobalDefs = [];
  let currentHooks;
  return (overrideDefs, globalDefs) => {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}
function compareOptionalDates(date0, date1) {
  if (date0 === undefined) {
    return date1;
  }
  if (date1 === undefined) {
    return date0;
  }
  return new Date(Math.max(date0.valueOf(), date1.valueOf()));
}
const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
  let a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}
function addDays(m, n) {
  let a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}
function addMs(m, n) {
  let a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
}
// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
  let m0day = startOfDay(m0);
  let m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
  let d = diffWholeDays(m0, m1);
  if (d !== null && d % 7 === 0) {
    return d / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }
  return null;
}
// Start-Of
function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}
function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}
function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}
function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
  let y = marker.getUTCFullYear();
  let w = weekOfGivenYear(marker, y, dow, doy);
  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }
  let nextW = weekOfGivenYear(marker, y + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w, nextW);
  }
  return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
  let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  let dayStart = startOfDay(marker);
  let days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  let fwd = 7 + dow - doy;
  // first-week day local weekday -- which local weekday is fwd
  let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}
function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2],
  // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}
function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }
  return new Date(Date.UTC(...a));
}
// Other Utils
function isValidDate(m) {
  return !isNaN(m.valueOf());
}
function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}
let calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
class GregorianCalendarSystem {
  getMarkerYear(d) {
    return d.getUTCFullYear();
  }
  getMarkerMonth(d) {
    return d.getUTCMonth();
  }
  getMarkerDay(d) {
    return d.getUTCDate();
  }
  arrayToMarker(arr) {
    return arrayToUtcDate(arr);
  }
  markerToArray(marker) {
    return dateToUtcArray(marker);
  }
}
registerCalendarSystem('gregory', GregorianCalendarSystem);
const INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
const PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
  if (typeof input === 'string') {
    return parseString(input);
  }
  if (typeof input === 'object' && input) {
    // non-null object
    return parseObject(input);
  }
  if (typeof input === 'number') {
    return parseObject({
      [unit || 'milliseconds']: input
    });
  }
  return null;
}
function parseString(s) {
  let m = PARSE_RE.exec(s);
  if (m) {
    let sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 +
      // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 +
      // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + (
      // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }

  return null;
}
function parseObject(obj) {
  let duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 +
    // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 +
    // minutes
    (obj.seconds || obj.second || 0) * 1000 + (
    // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
  };

  let weeks = obj.weeks || obj.week;
  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }
  return duration;
}
// Equality
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }
  return 0;
}
// Simple Math
function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}
function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
  let res = null;
  for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
    let unit = INTERNAL_UNITS[i];
    if (denominator[unit]) {
      let localRes = numerator[unit] / denominator[unit];
      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }
      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }
  return res;
}
function greatestDurationDenominator(dur) {
  let ms = dur.milliseconds;
  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }
    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }
    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }
    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }
    return {
      unit: 'day',
      value: dur.days
    };
  }
  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }
  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }
  return {
    unit: 'millisecond',
    value: 0
  };
}

// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
  let s = marker.toISOString();
  s = s.replace('.000', '');
  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }
  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    }
    // otherwise, its UTC-0 and we want to keep the Z
  }

  return s;
}
// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
}
// TODO: use Date::toISOString and use everything after the T?
function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso = false) {
  let sign = minutes < 0 ? '-' : '+';
  let abs = Math.abs(minutes);
  let hours = Math.floor(abs / 60);
  let mins = Math.round(abs % 60);
  if (doIso) {
    return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
  }
  return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ''}`;
}
const ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
  let m = ISO_RE.exec(str);
  if (m) {
    let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number(`0.${m[12]}`) * 1000 : 0));
    if (isValidDate(marker)) {
      let timeZoneOffset = null;
      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }
      return {
        marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset
      };
    }
  }
  return null;
}
class DateEnv {
  constructor(settings) {
    let timeZone = this.timeZone = settings.timeZone;
    let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }
    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(input) {
    let meta = this.createMarkerMeta(input);
    if (meta === null) {
      return null;
    }
    return meta.marker;
  }
  createNowMarker() {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    }
    // if we can't compute the current date val for a timezone,
    // better to give the current local date vals than UTC
    return arrayToUtcDate(dateToLocalArray(new Date()));
  }
  createMarkerMeta(input) {
    if (typeof input === 'string') {
      return this.parse(input);
    }
    let marker = null;
    if (typeof input === 'number') {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();
      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }
    if (marker === null || !isValidDate(marker)) {
      return null;
    }
    return {
      marker,
      isTimeUnspecified: false,
      forcedTzo: null
    };
  }
  parse(s) {
    let parts = parse(s);
    if (parts === null) {
      return null;
    }
    let {
      marker
    } = parts;
    let forcedTzo = null;
    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }
    return {
      marker,
      isTimeUnspecified: parts.isTimeUnspecified,
      forcedTzo
    };
  }
  // Accessors
  getYear(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  }
  getMonth(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }
  // Adding / Subtracting
  add(marker, dur) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  }
  subtract(marker, dur) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  }
  addYears(marker, n) {
    let a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  }
  addMonths(marker, n) {
    let a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  }
  // Diffing Whole Units
  diffWholeYears(m0, m1) {
    let {
      calendarSystem
    } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }
    return null;
  }
  diffWholeMonths(m0, m1) {
    let {
      calendarSystem
    } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }
    return null;
  }
  // Range / Duration
  greatestWholeUnit(m0, m1) {
    let n = this.diffWholeYears(m0, m1);
    if (n !== null) {
      return {
        unit: 'year',
        value: n
      };
    }
    n = this.diffWholeMonths(m0, m1);
    if (n !== null) {
      return {
        unit: 'month',
        value: n
      };
    }
    n = diffWholeWeeks(m0, m1);
    if (n !== null) {
      return {
        unit: 'week',
        value: n
      };
    }
    n = diffWholeDays(m0, m1);
    if (n !== null) {
      return {
        unit: 'day',
        value: n
      };
    }
    n = diffHours(m0, m1);
    if (isInt(n)) {
      return {
        unit: 'hour',
        value: n
      };
    }
    n = diffMinutes(m0, m1);
    if (isInt(n)) {
      return {
        unit: 'minute',
        value: n
      };
    }
    n = diffSeconds(m0, m1);
    if (isInt(n)) {
      return {
        unit: 'second',
        value: n
      };
    }
    return {
      unit: 'millisecond',
      value: m1.valueOf() - m0.valueOf()
    };
  }
  countDurationsBetween(m0, m1, d) {
    // TODO: can use greatestWholeUnit
    let diff;
    if (d.years) {
      diff = this.diffWholeYears(m0, m1);
      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }
    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);
      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }
    if (d.days) {
      diff = diffWholeDays(m0, m1);
      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }
    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(m, unit) {
    if (unit === 'year') {
      return this.startOfYear(m);
    }
    if (unit === 'month') {
      return this.startOfMonth(m);
    }
    if (unit === 'week') {
      return this.startOfWeek(m);
    }
    if (unit === 'day') {
      return startOfDay(m);
    }
    if (unit === 'hour') {
      return startOfHour(m);
    }
    if (unit === 'minute') {
      return startOfMinute(m);
    }
    if (unit === 'second') {
      return startOfSecond(m);
    }
    return null;
  }
  startOfYear(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
  }
  startOfMonth(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
  }
  startOfWeek(m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
  }
  // Week Number
  computeWeekNumber(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }
    return weekOfYear(marker, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(marker, formatter, dateOptions = {}) {
    return formatter.format({
      marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  }
  formatRange(start, end, formatter, dateOptions = {}) {
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }
    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(marker, extraOptions = {}) {
    let timeZoneOffset = null;
    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }
    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }
  // TimeZone
  timestampToMarker(ms) {
    if (this.timeZone === 'local') {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }
    if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }
    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  }
  offsetForMarker(m) {
    if (this.timeZone === 'local') {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
    }

    if (this.timeZone === 'UTC') {
      return 0;
    }
    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }
    return null;
  }
  // Conversion
  toDate(m, forcedTzo) {
    if (this.timeZone === 'local') {
      return arrayToLocalDate(dateToUtcArray(m));
    }
    if (this.timeZone === 'UTC') {
      return new Date(m.valueOf()); // make sure it's a copy
    }

    if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    }
    return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
  }
}
class Theme {
  constructor(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }
  setIconOverride(iconOverrideHash) {
    let iconClassesCopy;
    let buttonName;
    if (typeof iconOverrideHash === 'object' && iconOverrideHash) {
      // non-null object
      iconClassesCopy = Object.assign({}, this.iconClasses);
      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }
      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  }
  applyIconOverridePrefix(className) {
    let prefix = this.iconOverridePrefix;
    if (prefix && className.indexOf(prefix) !== 0) {
      // if not already present
      className = prefix + className;
    }
    return className;
  }
  getClass(key) {
    return this.classes[key] || '';
  }
  getIconClass(buttonName, isRtl) {
    let className;
    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }
    if (className) {
      return `${this.baseIconClass} ${className}`;
    }
    return '';
  }
  getCustomButtonIconClass(customButtonProps) {
    let className;
    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];
      if (className) {
        return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
      }
    }
    return '';
  }
}
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';
const EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
const STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
const MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
const COMMA_RE = /,/g; // we need re for globalness
const MULTI_SPACE_RE = /\s+/g;
const LTR_RE = /\u200e/g; // control character
const UTC_RE = /UTC|GMT/;
class NativeFormatter {
  constructor(formatSettings) {
    let standardDateProps = {};
    let extendedSettings = {};
    let severity = 0;
    for (let name in formatSettings) {
      if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name] = formatSettings[name];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
      } else {
        standardDateProps[name] = formatSettings[name];
        if (name in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
        }
      }
    }
    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }
  format(date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  }
  formatRange(start, end, context, betterDefaultSeparator) {
    let {
      standardDateProps,
      extendedSettings
    } = this;
    let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
    if (!diffSeverity) {
      return this.format(start, context);
    }
    let biggestUnitForPartial = diffSeverity;
    if (biggestUnitForPartial > 1 && (
    // the two dates are different in a way that's larger scale than time
    standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
      biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
    }

    let full0 = this.format(start, context);
    let full1 = this.format(end, context);
    if (full0 === full1) {
      return full0;
    }
    let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    let partial0 = partialFormattingFunc(start);
    let partial1 = partialFormattingFunc(end);
    let insertion = findCommonInsertion(full0, partial0, full1, partial1);
    let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }
    return full0 + separator + full1;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year';
      case 4:
        return 'month';
      case 3:
        return 'week';
      case 2:
        return 'day';
      default:
        return 'time';
      // really?
    }
  }
}

function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  let standardDatePropCnt = Object.keys(standardDateProps).length;
  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return date => formatTimeZoneOffset(date.timeZoneOffset);
  }
  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return date => formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
  }
  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = Object.assign({}, standardDateProps); // copy
  extendedSettings = Object.assign({}, extendedSettings); // copy
  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
  let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  let zeroFormat; // needed?
  if (extendedSettings.omitZeroMinute) {
    let zeroProps = Object.assign({}, standardDateProps);
    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }
  return date => {
    let {
      marker
    } = date;
    let format;
    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }
    let s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }
    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  }
  // only support short timezone names
  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  }
  // if requesting to display seconds, MUST display minutes
  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' :
    // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }
  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }
  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  }
  // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces
  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, m0 => m0.toLocaleLowerCase());
  }
  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}
function injectTzoStr(s, tzoStr) {
  let replaced = false;
  s = s.replace(UTC_RE, () => {
    replaced = true;
    return tzoStr;
  });
  // IE11 doesn't include UTC/GMT in the original string, so append to end
  if (!replaced) {
    s += ` ${tzoStr}`;
  }
  return s;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  let parts = [];
  if (display === 'long') {
    parts.push(weekTextLong);
  } else if (display === 'short' || display === 'narrow') {
    parts.push(weekText);
  }
  if (display === 'long' || display === 'short') {
    parts.push(' ');
  }
  parts.push(locale.simpleNumberFormat.format(num));
  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }
  return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }
  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }
  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }
  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }
  return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
  let partialOptions = {};
  for (let name in options) {
    if (!(name in STANDARD_DATE_PROP_SEVERITIES) ||
    // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
      partialOptions[name] = options[name];
    }
  }
  return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
  let i0 = 0;
  while (i0 < full0.length) {
    let found0 = full0.indexOf(partial0, i0);
    if (found0 === -1) {
      break;
    }
    let before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    let after0 = full0.substr(i0);
    let i1 = 0;
    while (i1 < full1.length) {
      let found1 = full1.indexOf(partial1, i1);
      if (found1 === -1) {
        break;
      }
      let before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      let after1 = full1.substr(i1);
      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }
  return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
  let a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}
function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  let startInfo = expandZonedMarker(start, context.calendarSystem);
  let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
class CmdFormatter {
  constructor(cmdStr) {
    this.cmdStr = cmdStr;
  }
  format(date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }
  formatRange(start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  }
}
class FuncFormatter {
  constructor(func) {
    this.func = func;
  }
  format(date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }
  formatRange(start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  }
}
function createFormatter(input) {
  if (typeof input === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  }
  if (typeof input === 'string') {
    return new CmdFormatter(input);
  }
  if (typeof input === 'function') {
    return new FuncFormatter(input);
  }
  return null;
}

// base options
// ------------
const BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: identity,
  customRenderingMetaMap: identity
};
// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
const BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: ' \u2013 ',
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  scrollTimeReset: true,
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
};
// calendar listeners
// ------------------
const CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
};
// calendar-specific options
// -------------------------
const CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
const COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual
};
function isMaybeObjectsEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  }
  return a === b;
}
// view-specific options
// ---------------------
const VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
};
// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
  let refined = {};
  let extra = {};
  for (let propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }
  for (let propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }
  return {
    refined,
    extra
  };
}
function identity(raw) {
  return raw;
}
class ScrollResponder {
  constructor(execFunc, emitter, scrollTime, scrollTimeReset) {
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;
    this.handleScrollRequest = request => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, request);
      this.drain();
    };
    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }
  detach() {
    this.emitter.off('_scrollRequest', this.handleScrollRequest);
  }
  update(isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll(); // will drain
    } else {
      this.drain();
    }
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  }
}
const ViewContextType = createContext({}); // for Components
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    theme,
    isRtl: viewOptions.direction === 'rtl',
    addResizeHandler(handler) {
      emitter.on('_resize', handler);
    },
    removeResizeHandler(handler) {
      emitter.off('_resize', handler);
    },
    createScrollResponder(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}

/* eslint max-classes-per-file: off */
let PureComponent = /*#__PURE__*/(() => {
  class PureComponent extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
      }
      return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
    }
    // HACK for freakin' React StrictMode
    safeSetState(newState) {
      if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
        this.setState(newState);
      }
    }
  }
  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  return PureComponent;
})();
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
let BaseComponent = /*#__PURE__*/(() => {
  class BaseComponent extends PureComponent {}
  BaseComponent.contextType = ViewContextType;
  return BaseComponent;
})();
function addPropsEquality(propEquality) {
  let hash = Object.create(this.prototype.propEquality);
  Object.assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  let hash = Object.create(this.prototype.stateEquality);
  Object.assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
// use other one
function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}
class ContentInjector extends BaseComponent {
  constructor() {
    super(...arguments);
    this.id = guid();
    this.currentDomNodes = [];
    this.queuedDomNodes = [];
  }
  render() {
    const {
      props,
      context
    } = this;
    const {
      options
    } = context;
    const {
      generator,
      renderProps
    } = props;
    const attrs = buildElAttrs(props);
    let innerContent;
    let queuedDomNodes = [];
    if (!hasCustomRenderingHandler(props.generatorName, options)) {
      const customContent = typeof generator === 'function' ? generator(renderProps, preact__WEBPACK_IMPORTED_MODULE_0__.createElement) : generator;
      if (typeof customContent === 'string' || (0,preact__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(customContent) || Array.isArray(customContent)) {
        innerContent = customContent;
      } else if (typeof customContent === 'object') {
        if ('html' in customContent) {
          attrs.dangerouslySetInnerHTML = {
            __html: customContent.html
          };
        } else if ('domNodes' in customContent) {
          queuedDomNodes = Array.prototype.slice.call(customContent.domNodes);
        }
      }
    }
    this.queuedDomNodes = queuedDomNodes;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(props.elTag, attrs, innerContent);
  }
  componentDidMount() {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentDidUpdate(oldProps) {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(false); // TODO: different API for removal?
  }

  triggerCustomRendering(isActive) {
    const {
      props,
      context
    } = this;
    const {
      handleCustomRendering,
      customRenderingMetaMap
    } = context.options;
    if (handleCustomRendering) {
      const customRenderingMeta = customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
      if (customRenderingMeta) {
        handleCustomRendering(Object.assign({
          id: this.id,
          isActive,
          containerEl: this.base,
          generatorMeta: customRenderingMeta
        }, props));
      }
    }
  }
  applyQueueudDomNodes() {
    const {
      queuedDomNodes,
      currentDomNodes
    } = this;
    const el = this.base;
    if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
      currentDomNodes.forEach(removeElement);
      for (let newNode of queuedDomNodes) {
        el.appendChild(newNode);
      }
      this.currentDomNodes = queuedDomNodes;
    }
  }
}
ContentInjector.addPropsEquality({
  elClasses: isArraysEqual,
  elStyle: isPropsEqual,
  elAttrs: isPropsEqual,
  renderProps: isPropsEqual
});
// Util
function hasCustomRenderingHandler(generatorName, options) {
  var _a;
  return Boolean(options.handleCustomRendering && generatorName && ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
}
function buildElAttrs(props, extraClassNames) {
  const attrs = Object.assign(Object.assign({}, props.elAttrs), {
    ref: props.elRef
  });
  if (props.elClasses || extraClassNames) {
    attrs.className = (props.elClasses || []).concat(extraClassNames || []).concat(attrs.className || []).filter(Boolean).join(' ');
  }
  if (props.elStyle) {
    attrs.style = props.elStyle;
  }
  return attrs;
}
const RenderId = createContext(0);
let ContentContainer = /*#__PURE__*/(() => {
  class ContentContainer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
      super(...arguments);
      this.InnerContent = InnerContentInjector.bind(undefined, this);
    }
    render() {
      const {
        props
      } = this;
      const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
      if (props.children) {
        const elAttrs = buildElAttrs(props, generatedClassNames);
        const children = props.children(this.InnerContent, props.renderProps, elAttrs);
        if (props.elTag) {
          return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(props.elTag, elAttrs, children);
        } else {
          return children;
        }
      } else {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentInjector, Object.assign(Object.assign({}, props), {
          elTag: props.elTag || 'div',
          elClasses: (props.elClasses || []).concat(generatedClassNames),
          renderId: this.context
        }));
      }
    }
    componentDidMount() {
      var _a, _b;
      (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), {
        el: this.base
      }));
    }
    componentWillUnmount() {
      var _a, _b;
      (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), {
        el: this.base
      }));
    }
  }
  ContentContainer.contextType = RenderId;
  return ContentContainer;
})();
function InnerContentInjector(containerComponent, props) {
  const parentProps = containerComponent.props;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentInjector, Object.assign({
    renderProps: parentProps.renderProps,
    generatorName: parentProps.generatorName,
    generator: parentProps.generator,
    renderId: containerComponent.context
  }, props));
}
// Utils
function generateClassNames(classNameGenerator, renderProps) {
  const classNames = typeof classNameGenerator === 'function' ? classNameGenerator(renderProps) : classNameGenerator || [];
  return typeof classNames === 'string' ? [classNames] : classNames;
}
class ViewContainer extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let renderProps = {
      view: context.viewApi
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props, {
      elTag: props.elTag || 'div',
      elClasses: [...buildViewClassNames(props.viewSpec), ...(props.elClasses || [])],
      renderProps: renderProps,
      classNameGenerator: options.viewClassNames,
      generatorName: undefined,
      generator: undefined,
      didMount: options.viewDidMount,
      willUnmount: options.viewWillUnmount
    }), () => props.children);
  }
}
function buildViewClassNames(viewSpec) {
  return [`fc-${viewSpec.type}-view`, 'fc-view'];
}
function parseRange(input, dateEnv) {
  let start = null;
  let end = null;
  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start && !end) {
    return null;
  }
  if (start && end && end < start) {
    return null;
  }
  return {
    start,
    end
  };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
  let invertedRanges = [];
  let {
    start
  } = constraintRange; // the end of the previous range. the start of the new range
  let i;
  let dateRange;
  // ranges need to be in order. required for our date-walking algorithm
  ranges.sort(compareRanges);
  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i];
    // add the span of time before the event (if there is any)
    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start,
        end: dateRange.start
      });
    }
    if (dateRange.end > start) {
      start = dateRange.end;
    }
  }
  // add the span of time after the last event (if there is any)
  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start,
      end: constraintRange.end
    });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}

function intersectRanges(range0, range1) {
  let {
    start,
    end
  } = range0;
  let newRange = null;
  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start === null || end === null || start < end) {
    newRange = {
      start,
      end
    };
  }
  return newRange;
}
function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}

/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
  let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  let start = startOfDay(timedRange.start);
  let end = addDays(start, dayCnt);
  return {
    start,
    end
  };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
  let startDay = null;
  let endDay = null;
  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }
  return {
    start: startDay,
    end: endDay
  };
}
// spans from one day into another?
function isMultiDayRange(range) {
  let visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  }
  if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  }
  return diffDayAndTime(date0, date1); // returns a duration
}

function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv) {
  let initialDateInput = options.initialDate;
  // compute the initial ambig-timezone date
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return getNow(options.now, dateEnv); // getNow already returns unzoned
}

function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }
  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }
  return dateEnv.createMarker(nowInput);
}
class DateProfileGenerator {
  constructor(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(currentDateProfile, currentDate, forceToValid) {
    let {
      dateEnv
    } = this.props;
    let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
    // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(prevDate, -1, forceToValid);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(currentDateProfile, currentDate, forceToValid) {
    let {
      dateEnv
    } = this.props;
    let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
    // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(nextDate, 1, forceToValid);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(currentDate, direction, forceToValid = true) {
    let {
      props
    } = this;
    let validRange;
    let currentInfo;
    let isRangeAllDay;
    let renderRange;
    let activeRange;
    let isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);
    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }
    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;
    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }
    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange); // might return null
    // it's invalid if the originally requested date is not contained,
    // or if the range is completely outside of the valid range.
    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let input = this.props.validRangeInput;
    let simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || {
      start: null,
      end: null
    }; // completely open-ended
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(date, direction) {
    let {
      props
    } = this;
    let duration = null;
    let unit = null;
    let range = null;
    let dayCount;
    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = 'day';
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }
    return {
      duration,
      unit,
      range
    };
  }
  getFallbackDuration() {
    return createDuration({
      day: 1
    });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(range) {
    let {
      dateEnv,
      usesMinMaxTime,
      slotMinTime,
      slotMaxTime
    } = this.props;
    let {
      start,
      end
    } = range;
    if (usesMinMaxTime) {
      // expand active range if slotMinTime is negative (why not when positive?)
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start); // necessary?
        start = dateEnv.add(start, slotMinTime);
      }
      // expand active range if slotMaxTime is beyond one day (why not when negative?)
      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end); // necessary?
        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }
    return {
      start,
      end
    };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(date, direction, duration, unit) {
    let {
      dateEnv,
      dateAlignment
    } = this.props;
    let start;
    let end;
    let res;
    // compute what the alignment should be
    if (!dateAlignment) {
      let {
        dateIncrement
      } = this.props;
      if (dateIncrement) {
        // use the smaller of the two units
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    }
    // if the view displays a single day or smaller
    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }
    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = {
        start,
        end
      };
    }
    computeRes();
    // if range is completely enveloped by hidden days, go past the hidden days
    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }
    return res;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(date, direction, dayCount) {
    let {
      dateEnv,
      dateAlignment
    } = this.props;
    let runningCount = 0;
    let start = date;
    let end;
    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }
    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;
    do {
      end = addDays(end, 1);
      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);
    return {
      start,
      end
    };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(date) {
    let {
      props
    } = this;
    let input = props.visibleRangeInput;
    let simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    let range = this.refineRange(simpleInput);
    if (range && (range.start == null || range.end == null)) {
      return null;
    }
    return range;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(fallback) {
    let {
      dateIncrement
    } = this.props;
    let customAlignment;
    if (dateIncrement) {
      return dateIncrement;
    }
    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }
    if (fallback) {
      return fallback;
    }
    return createDuration({
      days: 1
    });
  }
  refineRange(rangeInput) {
    if (rangeInput) {
      let range = parseRange(rangeInput, this.props.dateEnv);
      if (range) {
        range = computeVisibleDayRange(range);
      }
      return range;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
    let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
    let dayCnt = 0;
    let i;
    if (this.props.weekends === false) {
      hiddenDays.push(0, 6); // 0=sunday, 6=saturday
    }

    for (i = 0; i < 7; i += 1) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt += 1;
      }
    }
    if (!dayCnt) {
      throw new Error('invalid hiddenDays'); // all days were hidden? bad.
    }

    this.isHiddenDayHash = isHiddenDayHash;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(range) {
    let {
      start,
      end
    } = range;
    if (start) {
      start = this.skipHiddenDays(start);
    }
    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }
    if (start == null || end == null || start < end) {
      return {
        start,
        end
      };
    }
    return null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }
    return this.isHiddenDayHash[day];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(date, inc = 1, isExclusive = false) {
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }
    return date;
  }
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId,
    range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (let i = 0; i < recurringTypes.length; i += 1) {
    let parsed = recurringTypes[i].parse(refined, dateEnv);
    if (parsed) {
      let {
        allDay
      } = refined;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  let {
    dateEnv,
    pluginHooks,
    options
  } = context;
  let {
    defs,
    instances
  } = eventStore;
  // remove existing recurring instances
  // TODO: bad. always expand events as a second step
  instances = filterHash(instances, instance => !defs[instance.defId].recurringDef);
  for (let defId in defs) {
    let def = defs[defId];
    if (def.recurringDef) {
      let {
        duration
      } = def.recurringDef;
      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
      for (let start of starts) {
        let instance = createEventInstance(defId, {
          start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }
  return {
    defs,
    instances
  };
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  let typeDef = recurringTypes[eventDef.recurringDef.typeId];
  let markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv);
  // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }
  return markers;
}
const EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
const EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
const EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});
function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context)) {
  let {
    refined,
    extra
  } = refineEventDef(raw, context, refiners);
  let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def,
      instance: null
    };
  }
  let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
    let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return {
      def,
      instance
    };
  }
  return null;
}
function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  let def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: Object.assign(Object.assign({}, refined.extendedProps || {}), extra)
  };
  for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
    Object.assign(def, memberAdder(refined));
  }
  // help out EventImpl from having user modify props
  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  let {
    allDay
  } = refined;
  let startMeta;
  let startMarker = null;
  let hasEnd = false;
  let endMeta;
  let endMarker = null;
  let startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }
  if (endMeta) {
    endMarker = endMeta.marker;
    if (allDay) {
      endMarker = startOfDay(endMarker);
    }
    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }
  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }
  return {
    allDay,
    hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}
function computeIsDefaultAllDay(eventSource, context) {
  let res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  let eventStore = createEmptyEventStore();
  let eventRefiners = buildEventRefiners(context);
  for (let rawEvent of rawEvents) {
    let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }
  return eventStore;
}
function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
  let instance = eventStore.instances[instanceId];
  if (instance) {
    let def = eventStore.defs[instance.defId];
    // get events/instances with same group
    let newStore = filterEventStoreDefs(eventStore, lookDef => isEventDefsGrouped(def, lookDef));
    // add the original
    // TODO: wish we could use eventTupleToStore or something like it
    newStore.defs[def.defId] = def;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}
function mergeEventStores(store0, store1) {
  return {
    defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
    instances: Object.assign(Object.assign({}, store0.instances), store1.instances)
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  let defs = filterHash(eventStore.defs, filterFunc);
  let instances = filterHash(eventStore.instances, instance => defs[instance.defId] // still exists?
  );

  return {
    defs,
    instances
  };
}
function excludeSubEventStore(master, sub) {
  let {
    defs,
    instances
  } = master;
  let filteredDefs = {};
  let filteredInstances = {};
  for (let defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }
  for (let instanceId in instances) {
    if (!sub.instances[instanceId] &&
    // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  }

  if (input != null) {
    return String(input);
  }
  return null;
}
function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === 'string') {
    return raw.split(/\s+/);
  }
  return [];
}

// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
const EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
const EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};
function createEventUi(refined, context) {
  let constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural
  };
}
// TODO: prevent against problems with <2 args!
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}
const EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};
function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
  let rawObj;
  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (typeof raw === 'object' && raw) {
    // not null
    rawObj = raw;
  }
  if (rawObj) {
    let {
      refined,
      extra
    } = refineProps(rawObj, refiners);
    let metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  for (let i = defs.length - 1; i >= 0; i -= 1) {
    // later-added plugins take precedence
    let def = defs[i];
    let meta = def.parseMeta(raw);
    if (meta) {
      return {
        sourceDefId: i,
        meta
      };
    }
  }
  return null;
}
function initEventSources(calendarOptions, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);
    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);
    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ?
      // why no type?
      arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (let sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  let hash = {};
  for (let source of sources) {
    hash[source.sourceId] = source;
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return Object.assign(Object.assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, eventSource => eventSource.sourceId !== sourceId);
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, eventSource => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching ||
  // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  let nextSources = {};
  for (let sourceId in prevSources) {
    let source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  let {
    options,
    calendarApi
  } = context;
  let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  let fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, res => {
    let {
      rawEvents
    } = res;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, error => {
    console.warn(error.message, error);
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }
    if (eventSource.failure) {
      eventSource.failure(error);
    }
    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return Object.assign(Object.assign({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  let eventSource = sourceHash[sourceId];
  if (eventSource &&
  // not already removed
  fetchId === eventSource.latestFetchId) {
    return Object.assign(Object.assign({}, sourceHash), {
      [sourceId]: Object.assign(Object.assign({}, eventSource), {
        isFetching: false,
        fetchRange
      })
    });
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, eventSource => doesSourceNeedRange(eventSource, context));
}
function parseInitialSources(rawOptions, context) {
  let refiners = buildEventSourceRefiners(context);
  let rawSources = [].concat(rawOptions.eventSources || []);
  let sources = []; // parsed
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  for (let rawSource of rawSources) {
    let source = parseEventSource(rawSource, context, refiners);
    if (source) {
      sources.push(source);
    }
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore,
      // new ones
      dateProfile ? dateProfile.activeRange : null, context);
    case 'RESET_EVENTS':
      return action.eventStore;
    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);
    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);
    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, eventDef => !eventDef.sourceId // only keep events with no source id
      );

    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource &&
  // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
    let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function transformRawEvents(rawEvents, eventSource, context) {
  let calEachTransform = context.options.eventDataTransform;
  let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  let refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    for (let rawEvent of rawEvents) {
      let refinedEvent = func(rawEvent);
      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      } // if a different falsy value, do nothing
    }
  }

  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  let {
    defs
  } = eventStore;
  let instances = mapHash(eventStore.instances, instance => {
    let def = defs[instance.defId];
    if (def.allDay || def.recurringDef) {
      return instance; // isn't dependent on timezone
    }

    return Object.assign(Object.assign({}, instance), {
      range: {
        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
      },
      forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
      forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
    });
  });
  return {
    defs,
    instances
  };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, eventDef => eventDef.sourceId !== sourceId);
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, instance => !removals[instance.instanceId])
  };
}
class Emitter {
  constructor() {
    this.handlers = {};
    this.thisContext = null;
  }
  setThisContext(thisContext) {
    this.thisContext = thisContext;
  }
  setOptions(options) {
    this.options = options;
  }
  on(type, handler) {
    addToHash(this.handlers, type, handler);
  }
  off(type, handler) {
    removeFromHash(this.handlers, type, handler);
  }
  trigger(type, ...args) {
    let attachedHandlers = this.handlers[type] || [];
    let optionHandler = this.options && this.options[type];
    let handlers = [].concat(optionHandler || [], attachedHandlers);
    for (let handler of handlers) {
      handler.apply(this.thisContext, args);
    }
  }
  hasHandlers(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  }
}
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(func => func !== handler);
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}

const DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  let rawDefs;
  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(rawDef => rawDef.daysOfWeek);
  } else if (typeof input === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }
  rawDefs = rawDefs.map(rawDef => Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef));
  return rawDefs;
}
let eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback) {
    successCallback({
      rawEvents: arg.eventSource.meta
    });
  }
};
const arrayEventSourcePlugin = createPlugin({
  name: 'array-event-source',
  eventSourceDefs: [eventSourceDef$2]
});
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.dateSpanTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay, marker, context) {
  let {
    dateEnv,
    options
  } = context;
  let end = marker;
  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  let dest = createEmptyEventStore();
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = dest.defs[instance.defId]; // important to grab the newly modified def
    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  let standardProps = mutation.standardProps || {};
  // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }

  let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), {
    ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui)
  });
  if (mutation.extendedProps) {
    copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
  }
  for (let applier of context.pluginHooks.eventDefMutationAppliers) {
    applier(copy, mutation, context);
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef,
// must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  let {
    dateEnv
  } = context;
  let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  let copy = Object.assign({}, eventInstance);
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }
  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  }
  // in case event was all-day but the supplied deltas were not
  // better util for this?
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  }
  // handle invalid durations
  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }
  return copy;
}
class EventSourceImpl {
  constructor(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  remove() {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
  }
}

class EventImpl {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(name, val) {
    if (name in EVENT_DATE_REFINERS) {
      console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
      // TODO: make proper aliasing system?
    } else if (name === 'id') {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          publicId: val
        } // hardcoded internal name
      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          [name]: val
        }
      });
    } else if (name in EVENT_UI_REFINERS) {
      let ui = EVENT_UI_REFINERS[name](val);
      if (name === 'color') {
        ui = {
          backgroundColor: val,
          borderColor: val
        };
      } else if (name === 'editable') {
        ui = {
          startEditable: val,
          durationEditable: val
        };
      } else {
        ui = {
          [name]: val
        };
      }
      this.mutate({
        standardProps: {
          ui
        }
      });
    } else {
      console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
    }
  }
  setExtendedProp(name, val) {
    this.mutate({
      extendedProps: {
        [name]: val
      }
    });
  }
  setStart(startInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let start = dateEnv.createMarker(startInput);
    if (start && this._instance) {
      // TODO: warning if parsed bad
      let instanceRange = this._instance.range;
      let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
      if (options.maintainDuration) {
        this.mutate({
          datesDelta: startDelta
        });
      } else {
        this.mutate({
          startDelta
        });
      }
    }
  }
  setEnd(endInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let end;
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return; // TODO: warning if parsed bad
      }
    }

    if (this._instance) {
      if (end) {
        let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({
          endDelta
        });
      } else {
        this.mutate({
          standardProps: {
            hasEnd: false
          }
        });
      }
    }
  }
  setDates(startInput, endInput, options = {}) {
    let {
      dateEnv
    } = this._context;
    let standardProps = {
      allDay: options.allDay
    };
    let start = dateEnv.createMarker(startInput);
    let end;
    if (!start) {
      return; // TODO: warning if parsed bad
    }

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        // TODO: warning if parsed bad
        return;
      }
    }
    if (this._instance) {
      let instanceRange = this._instance.range;
      // when computing the diff for an event being converted to all-day,
      // compute diff off of the all-day values the way event-mutation does.
      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }
      let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
      if (end) {
        let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({
            datesDelta: startDelta,
            standardProps
          });
        } else {
          this.mutate({
            startDelta,
            endDelta,
            standardProps
          });
        }
      } else {
        // means "clear the end"
        standardProps.hasEnd = false;
        this.mutate({
          datesDelta: startDelta,
          standardProps
        });
      }
    }
  }
  moveStart(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        startDelta: delta
      });
    }
  }
  moveEnd(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        endDelta: delta
      });
    }
  }
  moveDates(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        datesDelta: delta
      });
    }
  }
  setAllDay(allDay, options = {}) {
    let standardProps = {
      allDay
    };
    let {
      maintainDuration
    } = options;
    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }
    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }
    this.mutate({
      standardProps
    });
  }
  formatRange(formatInput) {
    let {
      dateEnv
    } = this._context;
    let instance = this._instance;
    let formatter = createFormatter(formatInput);
    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }
    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  }
  mutate(mutation) {
    let instance = this._instance;
    if (instance) {
      let def = this._def;
      let context = this._context;
      let {
        eventStore
      } = context.getCurrentData();
      let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
      let eventConfigBase = {
        '': {
          display: '',
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: '',
          borderColor: '',
          textColor: '',
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
      let oldEvent = new EventImpl(context, def, instance); // snapshot
      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context.dispatch({
        type: 'MERGE_EVENTS',
        eventStore: relevantEvents
      });
      context.emitter.trigger('eventChange', {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context, instance),
        revert() {
          context.dispatch({
            type: 'RESET_EVENTS',
            eventStore // the ORIGINAL store
          });
        }
      });
    }
  }

  remove() {
    let context = this._context;
    let asStore = eventApiToStore(this);
    context.dispatch({
      type: 'REMOVE_EVENTS',
      eventStore: asStore
    });
    context.emitter.trigger('eventRemove', {
      event: this,
      relatedEvents: [],
      revert() {
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: asStore
        });
      }
    });
  }
  get source() {
    let {
      sourceId
    } = this._def;
    if (sourceId) {
      return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
    }
    return null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let instance = this._instance;
    if (instance) {
      return this._context.dateEnv.formatIso(instance.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedStartTzo
      });
    }
    return '';
  }
  get endStr() {
    let instance = this._instance;
    if (instance && this._def.hasEnd) {
      return this._context.dateEnv.formatIso(instance.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedEndTzo
      });
    }
    return '';
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || 'auto';
  } // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(settings = {}) {
    let def = this._def;
    let {
      ui
    } = def;
    let {
      startStr,
      endStr
    } = this;
    let res = {};
    if (def.title) {
      res.title = def.title;
    }
    if (startStr) {
      res.start = startStr;
    }
    if (endStr) {
      res.end = endStr;
    }
    if (def.publicId) {
      res.id = def.publicId;
    }
    if (def.groupId) {
      res.groupId = def.groupId;
    }
    if (def.url) {
      res.url = def.url;
    }
    if (ui.display && ui.display !== 'auto') {
      res.display = ui.display;
    }
    // TODO: what about recurring-event properties???
    // TODO: include startEditable/durationEditable/constraint/overlap/allow
    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }
      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }
    if (ui.textColor) {
      res.textColor = ui.textColor;
    }
    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }
    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        Object.assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }
    return res;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function eventApiToStore(eventApi) {
  let def = eventApi._def;
  let instance = eventApi._instance;
  return {
    defs: {
      [def.defId]: def
    },
    instances: instance ? {
      [instance.instanceId]: instance
    } : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  let {
    defs,
    instances
  } = eventStore;
  let eventApis = [];
  let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
  for (let id in instances) {
    let instance = instances[id];
    let def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventImpl(context, def, instance));
    }
  }
  return eventApis;
}

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  let inverseBgByGroupId = {};
  let inverseBgByDefId = {};
  let defByGroupId = {};
  let bgRanges = [];
  let fgRanges = [];
  let eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    let ui = eventUis[def.defId];
    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = eventStore.defs[instance.defId];
    let ui = eventUis[def.defId];
    let origRange = instance.range;
    let normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    let slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (ui.display === 'inverse-background') {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== 'none') {
        (ui.display === 'background' ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (let groupId in inverseBgByGroupId) {
    // BY GROUP
    let ranges = inverseBgByGroupId[groupId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      let def = defByGroupId[groupId];
      let ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  for (let defId in inverseBgByDefId) {
    let ranges = inverseBgByDefId[defId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  return {
    bg: bgRanges,
    fg: fgRanges
  };
}
function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}
function setElSeg(el, seg) {
  el.fcSeg = seg;
}
function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg ||
  // for the harness
  null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, eventDef => compileEventUi(eventDef, eventUiBases));
}
function compileEventUi(eventDef, eventUiBases) {
  let uis = [];
  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }
  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  let objs = segs.map(buildSegCompareObj);
  objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
  return objs.map(c => c._seg);
}
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
  let {
    eventRange
  } = seg;
  let eventDef = eventRange.def;
  let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
  let end = range.end ? range.end.valueOf() : 0; // "
  return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start,
    end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}
function computeSegDraggable(seg, context) {
  let {
    pluginHooks
  } = context;
  let transformers = pluginHooks.isDraggableTransformers;
  let {
    def,
    ui
  } = seg.eventRange;
  let val = ui.startEditable;
  for (let transformer of transformers) {
    val = transformer(val, def, ui, context);
  }
  return val;
}
function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime,
// defaults to true
defaultDisplayEventEnd,
// defaults to true
startOverride, endOverride) {
  let {
    dateEnv,
    options
  } = context;
  let {
    displayEventTime,
    displayEventEnd
  } = options;
  let eventDef = seg.eventRange.def;
  let eventInstance = seg.eventRange.instance;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  let wholeEventStart = eventInstance.range.start;
  let wholeEventEnd = eventInstance.range.end;
  let segStart = startOverride || seg.start || seg.eventRange.range.start;
  let segEnd = endOverride || seg.end || seg.eventRange.range.end;
  let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;
    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }
    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same
    });
  }

  return '';
}
function getSegMeta(seg, todayRange, nowDate) {
  let segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function getEventClassNames(props) {
  let classNames = ['fc-event'];
  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }
  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }
  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }
  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }
  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }
  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }
  if (props.isStart) {
    classNames.push('fc-event-start');
  }
  if (props.isEnd) {
    classNames.push('fc-event-end');
  }
  if (props.isPast) {
    classNames.push('fc-event-past');
  }
  if (props.isToday) {
    classNames.push('fc-event-today');
  }
  if (props.isFuture) {
    classNames.push('fc-event-future');
  }
  return classNames;
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
  // inverse-background events don't have specific instances. TODO: better solution
}

function getSegAnchorAttrs(seg, context) {
  let {
    def,
    instance
  } = seg.eventRange;
  let {
    url
  } = def;
  if (url) {
    return {
      href: url
    };
  }
  let {
    emitter,
    options
  } = context;
  let {
    eventInteractive
  } = options;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
    }
  }
  // mock what happens in EventClicking
  if (eventInteractive) {
    // only attach keyboard-related handlers because click handler is already done in EventClicking
    return createAriaKeyboardAttrs(ev => {
      emitter.trigger('eventClick', {
        el: ev.target,
        event: new EventImpl(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }
  return {};
}
const STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  let span = parseOpenDateSpan(raw, dateEnv);
  let {
    range
  } = span;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    range.end = dateEnv.add(range.start, defaultDuration);
  }
  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
  let {
    refined: standardProps,
    extra
  } = refineProps(raw, STANDARD_PROPS);
  let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  let {
    allDay
  } = standardProps;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  return Object.assign({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay
  }, extra);
}
function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
  for (let propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  }
  // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.
  for (let propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }
  return true;
}
function buildDateSpanApi(span, dateEnv) {
  return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}
function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime
    })
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  let res = refineEventDef({
    editable: false
  }, context);
  let def = parseEventDef(res.refined, res.extra, '',
  // sourceId
  dateSpan.allDay, true,
  // hasEnd
  context);
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func, success, failure) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  let isResolved = false;
  let wrappedSuccess = function () {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }
  };

  let wrappedFailure = function () {
    if (!isResolved) {
      isResolved = true;
      if (failure) {
        failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
    }
  };

  let res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
let eventSourceDef$1 = {
  parseMeta(refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const {
      dateEnv
    } = arg.context;
    const func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), rawEvents => successCallback({
      rawEvents
    }), errorCallback);
  }
};
const funcEventSourcePlugin = createPlugin({
  name: 'func-event-source',
  eventSourceDefs: [eventSourceDef$1]
});
class JsonRequestError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
function requestJson(method, url, params) {
  method = method.toUpperCase();
  const fetchOptions = {
    method
  };
  if (method === 'GET') {
    url += (url.indexOf('?') === -1 ? '?' : '&') + new URLSearchParams(params);
  } else {
    fetchOptions.body = new URLSearchParams(params);
    fetchOptions.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }
  return fetch(url, fetchOptions).then(fetchRes => {
    if (fetchRes.ok) {
      return fetchRes.json().then(parsedResponse => {
        return [parsedResponse, fetchRes];
      }, () => {
        throw new JsonRequestError('Failure parsing JSON', fetchRes);
      });
    } else {
      throw new JsonRequestError('Request failed', fetchRes);
    }
  });
}
const JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let eventSourceDef = {
  parseMeta(refined) {
    if (refined.url && (refined.format === 'json' || !refined.format)) {
      return {
        url: refined.url,
        format: 'json',
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const {
      meta
    } = arg.eventSource;
    const requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
      successCallback({
        rawEvents,
        response
      });
    }, errorCallback);
  }
};
const jsonFeedEventSourcePlugin = createPlugin({
  name: 'json-event-source',
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});
function buildRequestParams(meta, range, context) {
  let {
    dateEnv,
    options
  } = context;
  let startParam;
  let endParam;
  let timeZoneParam;
  let customRequestParams;
  let params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  // retrieve any outbound GET/POST data from the options
  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }
  Object.assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
const SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
let recurring = {
  parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      let recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      let duration;
      if (refined.duration) {
        duration = refined.duration;
      }
      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration,
        typeData: recurringData // doesn't need endTime anymore but oh well
      };
    }

    return null;
  },
  expand(typeData, framingRange, dateEnv) {
    let clippedFramingRange = intersectRanges(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }
    return [];
  }
};
const simpleRecurringEventsPlugin = createPlugin({
  name: 'simple-recurring-event',
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  let dayMarker = startOfDay(framingRange.start);
  let endMarker = framingRange.end;
  let instanceStarts = [];
  while (dayMarker < endMarker) {
    let instanceStart;
    // if everyday, or this particular day-of-week
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(instanceStart);
    }
    dayMarker = addDays(dayMarker, 1);
  }
  return instanceStarts;
}
const changeHandlerPlugin = createPlugin({
  name: 'change-handler',
  optionChangeHandlers: {
    events(events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/
function handleEventSources(inputs, context) {
  let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  let newInputs = [];
  for (let input of inputs) {
    let inputFound = false;
    for (let i = 0; i < unfoundSources.length; i += 1) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1); // delete
        inputFound = true;
        break;
      }
    }
    if (!inputFound) {
      newInputs.push(input);
    }
  }
  for (let unfoundSource of unfoundSources) {
    context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: unfoundSource.sourceId
    });
  }
  for (let newInput of newInputs) {
    context.calendarApi.addEventSource(newInput);
  }
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}
function handleEventStore(eventStore, context) {
  let {
    emitter
  } = context;
  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', buildEventApis(eventStore, context));
  }
}

/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/
const globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  name: 'misc',
  isLoadingFuncs: [state => computeEventSourcesLoading(state.eventSources)],
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];
let canVGrowWithinCell;
function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }
  return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }
  let el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  let div = el.querySelector('div');
  let possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}
class CalendarRoot extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      forPrint: false
    };
    this.handleBeforePrint = () => {
      this.setState({
        forPrint: true
      });
    };
    this.handleAfterPrint = () => {
      this.setState({
        forPrint: false
      });
    };
  }
  render() {
    let {
      props
    } = this;
    let {
      options
    } = props;
    let {
      forPrint
    } = this.state;
    let isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
    let height = !isHeightAuto && options.height != null ? options.height : '';
    let classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', `fc-direction-${options.direction}`, props.theme.getClass('root')];
    if (!getCanVGrowWithinCell()) {
      classNames.push('fc-liquid-hack');
    }
    return props.children(classNames, height, isHeightAuto, forPrint);
  }
  componentDidMount() {
    let {
      emitter
    } = this.props;
    emitter.on('_beforeprint', this.handleBeforePrint);
    emitter.on('_afterprint', this.handleAfterPrint);
  }
  componentWillUnmount() {
    let {
      emitter
    } = this.props;
    emitter.off('_beforeprint', this.handleBeforePrint);
    emitter.off('_afterprint', this.handleAfterPrint);
  }
}
class Interaction {
  constructor(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  destroy() {}
}
function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
function interactionSettingsToStore(settings) {
  return {
    [settings.component.uid]: settings
  };
}
// global state
const interactionSettingsStore = {};
class CalendarImpl {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(action) {
    this.currentDataManager.dispatch(action);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(callback) {
    callback();
  }
  updateSize() {
    this.trigger('_resize', true);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(name, val) {
    this.dispatch({
      type: 'SET_OPTION',
      optionName: name,
      rawOptionValue: val
    });
  }
  getOption(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(handlerName, handler) {
    let {
      currentDataManager
    } = this;
    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn(`Unknown listener name '${handlerName}'`);
    }
  }
  off(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }
  // not meant for public use
  trigger(handlerName, ...args) {
    this.currentDataManager.emitter.trigger(handlerName, ...args);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(viewType, dateOrRange) {
    this.batchRendering(() => {
      this.unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType
          });
          this.dispatch({
            type: 'SET_OPTION',
            optionName: 'visibleRange',
            rawOptionValue: dateOrRange
          });
        } else {
          let {
            dateEnv
          } = this.getCurrentData();
          this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType
        });
      }
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(dateMarker, viewType) {
    let state = this.getCurrentData();
    let spec;
    viewType = viewType || 'day'; // day is default zoom
    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();
    if (spec) {
      this.dispatch({
        type: 'CHANGE_VIEW_TYPE',
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker
      });
    }
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(unit) {
    let {
      viewSpecs,
      toolbarConfig
    } = this.getCurrentData();
    let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    let i;
    let spec;
    for (let viewType in viewSpecs) {
      viewTypes.push(viewType);
    }
    for (i = 0; i < viewTypes.length; i += 1) {
      spec = viewSpecs[viewTypes[i]];
      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect();
    this.dispatch({
      type: 'PREV'
    });
  }
  next() {
    this.unselect();
    this.dispatch({
      type: 'NEXT'
    });
  }
  prevYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  }
  nextYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  }
  today() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  }
  gotoDate(zonedDateInput) {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  }
  incrementDate(deltaInput) {
    let state = this.getCurrentData();
    let delta = createDuration(deltaInput);
    if (delta) {
      // else, warn about invalid input?
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }
  getDate() {
    let state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(d, formatter) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(d0, d1, settings) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  }
  formatIso(d, omitTime) {
    let {
      dateEnv
    } = this.getCurrentData();
    return dateEnv.formatIso(dateEnv.createMarker(d), {
      omitTime
    });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(dateOrObj, endDate) {
    let selectionInput;
    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }
    let state = this.getCurrentData();
    let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
      days: 1
    }));
    if (selection) {
      // throw parse error otherwise?
      this.dispatch({
        type: 'SELECT_DATES',
        selection
      });
      triggerDateSelect(selection, null, state);
    }
  }
  unselect(pev) {
    let state = this.getCurrentData();
    if (state.dateSelection) {
      this.dispatch({
        type: 'UNSELECT_DATES'
      });
      triggerDateUnselect(pev, state);
    }
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(eventInput, sourceInput) {
    if (eventInput instanceof EventImpl) {
      let def = eventInput._def;
      let instance = eventInput._instance;
      let currentData = this.getCurrentData();
      // not already present? don't want to add an old snapshot
      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore({
            def,
            instance
          }) // TODO: better util for two args?
        });

        this.triggerEventAdd(eventInput);
      }
      return eventInput;
    }
    let state = this.getCurrentData();
    let eventSource;
    if (sourceInput instanceof EventSourceImpl) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === 'boolean') {
      if (sourceInput) {
        // true. part of the first event source
        [eventSource] = hashValuesToArray(state.eventSources);
      }
    } else if (sourceInput != null) {
      // an ID. accepts a number too
      let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
      if (!sourceApi) {
        console.warn(`Could not find an event source with ID "${sourceInput}"`); // TODO: test
        return null;
      }
      eventSource = sourceApi.internalEventSource;
    }
    let tuple = parseEvent(eventInput, eventSource, state, false);
    if (tuple) {
      let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: 'ADD_EVENTS',
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }
    return null;
  }
  triggerEventAdd(eventApi) {
    let {
      emitter
    } = this.getCurrentData();
    emitter.trigger('eventAdd', {
      event: eventApi,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: 'REMOVE_EVENTS',
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(id) {
    let state = this.getCurrentData();
    let {
      defs,
      instances
    } = state.eventStore;
    id = String(id);
    for (let defId in defs) {
      let def = defs[defId];
      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventImpl(state, def, null);
        }
        for (let instanceId in instances) {
          let instance = instances[instanceId];
          if (instance.defId === def.defId) {
            return new EventImpl(state, def, instance);
          }
        }
      }
    }
    return null;
  }
  getEvents() {
    let currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  }
  removeAllEvents() {
    this.dispatch({
      type: 'REMOVE_ALL_EVENTS'
    });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    let sourceApis = [];
    for (let internalId in sourceHash) {
      sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
    }
    return sourceApis;
  }
  getEventSourceById(id) {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    id = String(id);
    for (let sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceImpl(state, sourceHash[sourceId]);
      }
    }
    return null;
  }
  addEventSource(sourceInput) {
    let state = this.getCurrentData();
    if (sourceInput instanceof EventSourceImpl) {
      // not already present? don't want to add an old snapshot
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [sourceInput.internalEventSource]
        });
      }
      return sourceInput;
    }
    let eventSource = parseEventSource(sourceInput, state);
    if (eventSource) {
      // TODO: error otherwise?
      this.dispatch({
        type: 'ADD_EVENT_SOURCES',
        sources: [eventSource]
      });
      return new EventSourceImpl(state, eventSource);
    }
    return null;
  }
  removeAllEventSources() {
    this.dispatch({
      type: 'REMOVE_ALL_EVENT_SOURCES'
    });
  }
  refetchEvents() {
    this.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      isRefetch: true
    });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(timeInput) {
    let time = createDuration(timeInput);
    if (time) {
      this.trigger('_scrollRequest', {
        time
      });
    }
  }
}
function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
  let res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}
const EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
class Splitter {
  constructor() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }

  splitProps(props) {
    let keyInfos = this.getKeyInfo(props);
    let defKeys = this.getKeysForEventDefs(props.eventStore);
    let dateSelections = this.splitDateSelection(props.dateSelection);
    let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
    let eventStores = this.splitEventStore(props.eventStore, defKeys);
    let eventDrags = this.splitEventDrag(props.eventDrag);
    let eventResizes = this.splitEventResize(props.eventResize);
    let splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, (info, key) => this.eventUiBuilders[key] || memoize(buildEventUiForKey));
    for (let key in keyInfos) {
      let keyInfo = keyInfos[key];
      let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      let buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }
    return splitProps;
  }
  _splitDateSpan(dateSpan) {
    let dateSpans = {};
    if (dateSpan) {
      let keys = this.getKeysForDateSpan(dateSpan);
      for (let key of keys) {
        dateSpans[key] = dateSpan;
      }
    }
    return dateSpans;
  }
  _getKeysForEventDefs(eventStore) {
    return mapHash(eventStore.defs, eventDef => this.getKeysForEventDef(eventDef));
  }
  _splitEventStore(eventStore, defKeys) {
    let {
      defs,
      instances
    } = eventStore;
    let splitStores = {};
    for (let defId in defs) {
      for (let key of defKeys[defId]) {
        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }
        splitStores[key].defs[defId] = defs[defId];
      }
    }
    for (let instanceId in instances) {
      let instance = instances[instanceId];
      for (let key of defKeys[instance.defId]) {
        if (splitStores[key]) {
          // must have already been created
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }
    return splitStores;
  }
  _splitIndividualUi(eventUiBases, defKeys) {
    let splitHashes = {};
    for (let defId in eventUiBases) {
      if (defId) {
        // not the '' key
        for (let key of defKeys[defId]) {
          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }
          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }
    return splitHashes;
  }
  _splitInteraction(interaction) {
    let splitStates = {};
    if (interaction) {
      let affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
      // can't rely on defKeys because event data is mutated
      let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
      let mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
      let populate = key => {
        if (!splitStates[key]) {
          splitStates[key] = {
            affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };
      for (let key in affectedStores) {
        populate(key);
      }
      for (let key in mutatedStores) {
        populate(key);
      }
    }
    return splitStates;
  }
}
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  let baseParts = [];
  if (allUi) {
    baseParts.push(allUi);
  }
  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }
  let stuff = {
    '': combineEventUis(baseParts)
  };
  if (individualUi) {
    Object.assign(stuff, individualUi);
  }
  return stuff;
}
function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}
function getDayClassNames(meta, theme) {
  let classNames = ['fc-day', `fc-day-${DAY_IDS[meta.dow]}`];
  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }
    if (meta.isPast) {
      classNames.push('fc-day-past');
    }
    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }
    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }
  return classNames;
}
function getSlotClassNames(meta, theme) {
  let classNames = ['fc-slot', `fc-slot-${DAY_IDS[meta.dow]}`];
  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }
    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }
    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }
  return classNames;
}
const DAY_FORMAT = createFormatter({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const WEEK_FORMAT = createFormatter({
  week: 'long'
});
function buildNavLinkAttrs(context, dateMarker, viewType = 'day', isTabbable = true) {
  const {
    dateEnv,
    options,
    calendarApi
  } = context;
  let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
  if (options.navLinks) {
    let zonedDate = dateEnv.toDate(dateMarker);
    const handleInteraction = ev => {
      let customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;
      if (typeof customAction === 'function') {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === 'string') {
          viewType = customAction;
        }
        calendarApi.zoomTo(dateMarker, viewType);
      }
    };
    return Object.assign({
      title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr),
      'data-navlink': ''
    }, isTabbable ? createAriaClickAttrs(handleInteraction) : {
      onClick: handleInteraction
    });
  }
  return {
    'aria-label': dateStr
  };
}
let _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }
  return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
  let outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  let innerEl = outerEl.firstChild;
  let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}
let _scrollbarWidths;
function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }
  return _scrollbarWidths;
}
function computeScrollbarWidths() {
  let el = document.createElement('div');
  el.style.overflow = 'scroll';
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  let res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
}
// WARNING: will include border
function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}
function computeEdges(el, getPadding = false) {
  let computedStyle = window.getComputedStyle(el);
  let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  let badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
  let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  let res = {
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }
  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }
  return res;
}
function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
  let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  let edges = computeEdges(el, goWithinPadding);
  let res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };
  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }
  return res;
}
function computeRect(el) {
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}
function computeClippedClientRect(el) {
  let clippingParents = getClippingParents(el);
  let rect = el.getBoundingClientRect();
  for (let clippingParent of clippingParents) {
    let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }
  return rect;
}
// does not return window
function getClippingParents(el) {
  let parents = [];
  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    let computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === 'fixed') {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
class PositionCache {
  constructor(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }
    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(originClientLeft) {
    let lefts = [];
    let rights = [];
    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }
    this.lefts = lefts;
    this.rights = rights;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(originClientTop) {
    let tops = [];
    let bottoms = [];
    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }
    this.tops = tops;
    this.bottoms = bottoms;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(leftPosition) {
    let {
      lefts,
      rights
    } = this;
    let len = lefts.length;
    let i;
    for (i = 0; i < len; i += 1) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }
    return undefined; // TODO: better
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(topPosition) {
    let {
      tops,
      bottoms
    } = this;
    let len = tops.length;
    let i;
    for (i = 0; i < len; i += 1) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }
    return undefined; // TODO: better
  }
  // Gets the width of the element at the given index
  getWidth(leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  }
  // Gets the height of the element at the given index
  getHeight(topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  }
}

/* eslint max-classes-per-file: "off" */
/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/
class ScrollController {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class ElementScrollController extends ScrollController {
  constructor(el) {
    super();
    this.el = el;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(top) {
    this.el.scrollTop = top;
  }
  setScrollLeft(left) {
    this.el.scrollLeft = left;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class WindowScrollController extends ScrollController {
  getScrollTop() {
    return window.pageYOffset;
  }
  getScrollLeft() {
    return window.pageXOffset;
  }
  setScrollTop(n) {
    window.scroll(window.pageXOffset, n);
  }
  setScrollLeft(n) {
    window.scroll(n, window.pageYOffset);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}

/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
class DateComponent extends BaseComponent {
  constructor() {
    super(...arguments);
    this.uid = guid();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {}
  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    return null; // this should be abstract
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(el) {
    return !this.props.eventDrag &&
    // HACK
    !this.props.eventResize &&
    // HACK
    !elementClosest(el, '.fc-event-mirror');
  }
  isValidDateDownEl(el) {
    return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') &&
    // a "more.." link
    !elementClosest(el, 'a[data-navlink]') &&
    // a clickable nav link
    !elementClosest(el, '.fc-popover'); // hack
  }
}

class NamedTimeZoneImpl {
  constructor(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }
}
class SegHierarchy {
  constructor() {
    // settings
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1; // -1 means no max
    this.maxStackCnt = -1; // -1 means no max
    this.levelCoords = []; // ordered
    this.entriesByLevel = []; // parallel with levelCoords
    this.stackCnts = {}; // TODO: use better technique!?
  }

  addSegs(inputs) {
    let hiddenEntries = [];
    for (let input of inputs) {
      this.insertEntry(input, hiddenEntries);
    }
    return hiddenEntries;
  }
  insertEntry(entry, hiddenEntries) {
    let insertion = this.findInsertion(entry);
    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }
    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
  isInsertionValid(insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  }
  // returns number of new entries inserted
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }
    hiddenEntries.push(entry);
    return 0;
  }
  splitEntry(entry, barrier, hiddenEntries) {
    let partCnt = 0;
    let splitHiddenEntries = [];
    let entrySpan = entry.span;
    let barrierSpan = barrier.span;
    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: entrySpan.start,
          end: barrierSpan.start
        }
      }, splitHiddenEntries);
    }
    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: barrierSpan.end,
          end: entrySpan.end
        }
      }, splitHiddenEntries);
    }
    if (partCnt) {
      hiddenEntries.push({
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan) // guaranteed to intersect
      }, ...splitHiddenEntries);
      return partCnt;
    }
    hiddenEntries.push(entry);
    return 0;
  }
  insertEntryAt(entry, insertion) {
    let {
      entriesByLevel,
      levelCoords
    } = this;
    if (insertion.lateral === -1) {
      // create a new level
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      // insert into existing level
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }
    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  }
  findInsertion(newEntry) {
    let {
      levelCoords,
      entriesByLevel,
      strictOrder,
      stackCnts
    } = this;
    let levelCnt = levelCoords.length;
    let candidateCoord = 0;
    let touchingLevel = -1;
    let touchingLateral = -1;
    let touchingEntry = null;
    let stackCnt = 0;
    for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      let trackingCoord = levelCoords[trackingLevel];
      // if the current level is past the placed entry, we have found a good empty space and can stop.
      // if strictOrder, keep finding more lateral intersections.
      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }
      let trackingEntries = entriesByLevel[trackingLevel];
      let trackingEntry;
      let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
      let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
      while (
      // loop through entries that horizontally intersect
      (trackingEntry = trackingEntries[lateralIndex]) &&
      // but not past the whole entry list
      trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
      ) {
        let trackingEntryBottom = trackingCoord + trackingEntry.thickness;
        // intersects into the top of the candidate?
        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        }
        // butts up against top of candidate? (will happen if just intersected as well)
        if (trackingEntryBottom === candidateCoord) {
          // accumulate the highest possible stackCnt of the trackingEntries that butt up
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }
        lateralIndex += 1;
      }
    }
    // the destination level will be after touchingEntry's level. find it
    let destLevel = 0;
    if (touchingEntry) {
      destLevel = touchingLevel + 1;
      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    }
    // if adding to an existing level, find where to insert
    let destLateral = -1;
    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }
    return {
      touchingLevel,
      touchingLateral,
      touchingEntry,
      stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let {
      entriesByLevel,
      levelCoords
    } = this;
    let levelCnt = entriesByLevel.length;
    let rects = [];
    for (let level = 0; level < levelCnt; level += 1) {
      let entries = entriesByLevel[level];
      let levelCoord = levelCoords[level];
      for (let entry of entries) {
        rects.push(Object.assign(Object.assign({}, entry), {
          levelCoord
        }));
      }
    }
    return rects;
  }
}
function getEntrySpanEnd(entry) {
  return entry.span.end;
}
function buildEntryKey(entry) {
  return entry.index + ':' + entry.span.start;
}
// returns groups with entries sorted by input order
function groupIntersectingEntries(entries) {
  let merges = [];
  for (let entry of entries) {
    let filteredMerges = [];
    let hungryMerge = {
      span: entry.span,
      entries: [entry]
    };
    for (let merge of merges) {
      if (intersectSpans(merge.span, hungryMerge.span)) {
        hungryMerge = {
          entries: merge.entries.concat(hungryMerge.entries),
          span: joinSpans(merge.span, hungryMerge.span)
        };
      } else {
        filteredMerges.push(merge);
      }
    }
    filteredMerges.push(hungryMerge);
    merges = filteredMerges;
  }
  return merges;
}
function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}
function intersectSpans(span0, span1) {
  let start = Math.max(span0.start, span1.start);
  let end = Math.min(span0.end, span1.end);
  if (start < end) {
    return {
      start,
      end
    };
  }
  return null;
}
// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
  let startIndex = 0;
  let endIndex = a.length; // exclusive
  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    // no items OR before first item
    return [0, 0];
  }
  if (searchVal > getItemVal(a[endIndex - 1])) {
    // after last item
    return [endIndex, 0];
  }
  while (startIndex < endIndex) {
    let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    let middleVal = getItemVal(a[middleIndex]);
    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      // equal!
      return [middleIndex, 1];
    }
  }
  return [startIndex, 0];
}

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
class ElementDragging {
  constructor(el, selector) {
    this.emitter = new Emitter();
  }
  destroy() {}
  setMirrorIsVisible(bool) {
    // optional if subclass doesn't want to support a mirror
  }
  setMirrorNeedsRevert(bool) {
    // optional if subclass doesn't want to support a mirror
  }
  setAutoScrollEnabled(bool) {
    // optional
  }
}

// TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.
const config = {};

/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/
const DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};
function parseDragMeta(raw) {
  let {
    refined,
    extra
  } = refineProps(raw, DRAG_META_REFINERS);
  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  }

  if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  }

  return createFormatter({
    weekday: 'long'
  }); // "Saturday"
}

const CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
function renderInner$1(renderProps) {
  return renderProps.text;
}

// BAD name for this class now. used in the Header
class TableDateCell extends BaseComponent {
  render() {
    let {
      dateEnv,
      options,
      theme,
      viewApi
    } = this.context;
    let {
      props
    } = this;
    let {
      date,
      dateProfile
    } = props;
    let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    let text = dateEnv.format(date, props.dayHeaderFormat);
    // if colCnt is 1, we are already in a day-view and don't need a navlink
    let navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
    let renderProps = Object.assign(Object.assign(Object.assign({
      date: dateEnv.toDate(date),
      view: viewApi
    }, props.extraRenderProps), {
      text
    }), dayMeta);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
      elTag: "th",
      elClasses: classNames,
      elAttrs: Object.assign({
        role: 'columnheader',
        colSpan: props.colSpan,
        'data-date': !dayMeta.isDisabled ? formatDayString(date) : undefined
      }, props.extraDataAttrs),
      renderProps: renderProps,
      generatorName: "dayHeaderContent",
      generator: options.dayHeaderContent || renderInner$1,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, InnerContainer => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-scrollgrid-sync-inner"
    }, !dayMeta.isDisabled && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContainer, {
      elTag: "a",
      elAttrs: navLinkAttrs,
      elClasses: ['fc-col-header-cell-cushion', props.isSticky && 'fc-sticky']
    })));
  }
}
const WEEKDAY_FORMAT = createFormatter({
  weekday: 'long'
});
class TableDowCell extends BaseComponent {
  render() {
    let {
      props
    } = this;
    let {
      dateEnv,
      theme,
      viewApi,
      options
    } = this.context;
    let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
    let dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    let text = dateEnv.format(date, props.dayHeaderFormat);
    let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date
    }, dateMeta), {
      view: viewApi
    }), props.extraRenderProps), {
      text
    });
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
      elTag: "th",
      elClasses: [CLASS_NAME, ...getDayClassNames(dateMeta, theme), ...(props.extraClassNames || [])],
      elAttrs: Object.assign({
        role: 'columnheader',
        colSpan: props.colSpan
      }, props.extraDataAttrs),
      renderProps: renderProps,
      generatorName: "dayHeaderContent",
      generator: options.dayHeaderContent || renderInner$1,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, InnerContent => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-scrollgrid-sync-inner"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
      elTag: "a",
      elClasses: ['fc-col-header-cell-cushion', props.isSticky && 'fc-sticky'],
      elAttrs: {
        'aria-label': dateEnv.format(date, WEEKDAY_FORMAT)
      }
    })));
  }
}
let NowTimer = /*#__PURE__*/(() => {
  class NowTimer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props, context) {
      super(props, context);
      this.initialNowDate = getNow(context.options.now, context.dateEnv);
      this.initialNowQueriedMs = new Date().valueOf();
      this.state = this.computeTiming().currentState;
    }
    render() {
      let {
        props,
        state
      } = this;
      return props.children(state.nowDate, state.todayRange);
    }
    componentDidMount() {
      this.setTimeout();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.unit !== this.props.unit) {
        this.clearTimeout();
        this.setTimeout();
      }
    }
    componentWillUnmount() {
      this.clearTimeout();
    }
    computeTiming() {
      let {
        props,
        context
      } = this;
      let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
      let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
      let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
      let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
      // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
      // ensure no longer than a day
      waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
      return {
        currentState: {
          nowDate: currentUnitStart,
          todayRange: buildDayRange(currentUnitStart)
        },
        nextState: {
          nowDate: nextUnitStart,
          todayRange: buildDayRange(nextUnitStart)
        },
        waitMs
      };
    }
    setTimeout() {
      let {
        nextState,
        waitMs
      } = this.computeTiming();
      this.timeoutId = setTimeout(() => {
        this.setState(nextState, () => {
          this.setTimeout();
        });
      }, waitMs);
    }
    clearTimeout() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }
  NowTimer.contextType = ViewContextType;
  return NowTimer;
})();
function buildDayRange(date) {
  let start = startOfDay(date);
  let end = addDays(start, 1);
  return {
    start,
    end
  };
}
class DayHeader extends BaseComponent {
  constructor() {
    super(...arguments);
    this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
  }
  render() {
    let {
      context
    } = this;
    let {
      dates,
      dateProfile,
      datesRepDistinctDays,
      renderIntro
    } = this.props;
    let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      role: "row"
    }, renderIntro && renderIntro('day'), dates.map(date => datesRepDistinctDays ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDateCell, {
      key: date.toISOString(),
      date: date,
      dateProfile: dateProfile,
      todayRange: todayRange,
      colCnt: dates.length,
      dayHeaderFormat: dayHeaderFormat
    }) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDowCell, {
      key: date.getUTCDay(),
      dow: date.getUTCDay(),
      dayHeaderFormat: dayHeaderFormat
    }))));
  }
}
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
class DaySeriesModel {
  constructor(range, dateProfileGenerator) {
    let date = range.start;
    let {
      end
    } = range;
    let indices = [];
    let dates = [];
    let dayIndex = -1;
    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }
      date = addDays(date, 1);
    }
    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }
  sliceRange(range) {
    let firstIndex = this.getDateDayIndex(range.start); // inclusive first index
    let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
    let clippedFirstIndex = Math.max(0, firstIndex);
    let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
    // deal with in-between indices
    clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
    clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }
    return null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(date) {
    let {
      indices
    } = this;
    let dayOffset = Math.floor(diffDays(this.dates[0], date));
    if (dayOffset < 0) {
      return indices[0] - 1;
    }
    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }
    return indices[dayOffset];
  }
}
class DayTableModel {
  constructor(daySeries, breakOnWeeks) {
    let {
      dates
    } = daySeries;
    let daysPerRow;
    let firstDay;
    let rowCnt;
    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }
    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let rows = [];
    for (let row = 0; row < this.rowCnt; row += 1) {
      let cells = [];
      for (let col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }
      rows.push(cells);
    }
    return rows;
  }
  buildCell(row, col) {
    let date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date
    };
  }
  buildHeaderDates() {
    let dates = [];
    for (let col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }
    return dates;
  }
  sliceRange(range) {
    let {
      colCnt
    } = this;
    let seriesSeg = this.daySeries.sliceRange(range);
    let segs = [];
    if (seriesSeg) {
      let {
        firstIndex,
        lastIndex
      } = seriesSeg;
      let index = firstIndex;
      while (index <= lastIndex) {
        let row = Math.floor(index / colCnt);
        let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }
    return segs;
  }
}
class Slicer {
  constructor() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }

  sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
    let {
      eventUiBases
    } = props;
    let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
    return {
      dateSelectionSegs: this.sliceDateSelection(props.dateSelection, eventUiBases, context, ...extraArgs),
      businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventSelection: props.eventSelection
    }; // TODO: give interactionSegs?
  }

  sliceNowDate(
  // does not memoize
  date, context, ...extraArgs) {
    return this._sliceDateSpan({
      range: {
        start: date,
        end: addMs(date, 1)
      },
      allDay: false
    },
    // add 1 ms, protect against null range
    {}, context, ...extraArgs);
  }
  _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
    if (!businessHours) {
      return [];
    }
    return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
  }
  _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (eventStore) {
      let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }
    return {
      bg: [],
      fg: []
    };
  }
  _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (!interaction) {
      return null;
    }
    let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  }
  _sliceDateSpan(dateSpan, eventUiBases, context, ...extraArgs) {
    if (!dateSpan) {
      return [];
    }
    let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    let segs = this.sliceRange(dateSpan.range, ...extraArgs);
    for (let seg of segs) {
      seg.eventRange = eventRange;
    }
    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(eventRanges, extraArgs) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.sliceEventRange(eventRange, extraArgs));
    }
    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(eventRange, extraArgs) {
    let dateRange = eventRange.range;
    // hack to make multi-day events that are being force-displayed as list-items to take up only one day
    if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }
    let segs = this.sliceRange(dateRange, ...extraArgs);
    for (let seg of segs) {
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }
    return segs;
  }
}
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
  let range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day
  };
}

// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, dateProfile, context) {
  let {
    instances
  } = interaction.mutatedEvents;
  for (let instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }
  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}

function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }
  return isNewPropsValid({
    dateSelection
  }, context);
}
function isNewPropsValid(newProps, context) {
  let calendarState = context.getCurrentData();
  let props = Object.assign({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);
  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let currentState = context.getCurrentData();
  let interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
  let subjectEventStore = interaction.mutatedEvents;
  let subjectDefs = subjectEventStore.defs;
  let subjectInstances = subjectEventStore.instances;
  let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  });
  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  }
  // exclude the subject events. TODO: exclude defs too?
  let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  let otherDefs = otherEventStore.defs;
  let otherInstances = otherEventStore.instances;
  let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
  for (let subjectInstanceId in subjectInstances) {
    let subjectInstance = subjectInstances[subjectInstanceId];
    let subjectRange = subjectInstance.range;
    let subjectConfig = subjectConfigs[subjectInstance.defId];
    let subjectDef = subjectDefs[subjectInstance.defId];
    // constraint
    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    }
    // overlap
    let {
      eventOverlap
    } = context.options;
    let eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
    for (let otherInstanceId in otherInstances) {
      let otherInstance = otherInstances[otherInstanceId];
      // intersect! evaluate
      if (rangesIntersect(subjectRange, otherInstance.range)) {
        let otherOverlap = otherConfigs[otherInstance.defId].overlap;
        // consider the other event's overlap. only do this if the subject event is a "real" event
        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }
        if (subjectConfig.overlap === false) {
          return false;
        }
        if (eventOverlapFunc && !eventOverlapFunc(new EventImpl(context, otherDefs[otherInstance.defId], otherInstance),
        // still event
        new EventImpl(context, subjectDef, subjectInstance))) {
          return false;
        }
      }
    }
    // allow (a function)
    let calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
    for (let subjectAllow of subjectConfig.allows) {
      let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), {
        range: subjectInstance.range,
        allDay: subjectDef.allDay
      });
      let origDef = calendarEventStore.defs[subjectDef.defId];
      let origInstance = calendarEventStore.instances[subjectInstanceId];
      let eventApi;
      if (origDef) {
        // was previously in the calendar
        eventApi = new EventImpl(context, origDef, origInstance);
      } else {
        // was an external event
        eventApi = new EventImpl(context, subjectDef); // no instance, because had no dates
      }

      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }
  return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let relevantEventStore = state.eventStore;
  let relevantDefs = relevantEventStore.defs;
  let relevantInstances = relevantEventStore.instances;
  let selection = state.dateSelection;
  let selectionRange = selection.range;
  let {
    selectionConfig
  } = context.getCurrentData();
  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  }
  // constraint
  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  }
  // overlap
  let {
    selectOverlap
  } = context.options;
  let selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
  for (let relevantInstanceId in relevantInstances) {
    let relevantInstance = relevantInstances[relevantInstanceId];
    // intersect! evaluate
    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }
      if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  }
  // allow (a function)
  for (let selectionAllow of selectionConfig.allows) {
    let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }
  return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (let constraint of constraints) {
    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }
  return true;
}
function constraintToRanges(constraint, subjectRange,
// for expanding a recurring constraint, or expanding business hours
otherEventStore,
// for if constraint is an even group ID
businessHoursUnexpanded,
// for if constraint is 'businessHours'
context) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }
  if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, eventDef => eventDef.groupId === constraint));
  }
  if (typeof constraint === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }
  return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
  let {
    instances
  } = eventStore;
  let ranges = [];
  for (let instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }
  return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
  for (let outerRange of outerRanges) {
    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }
  return false;
}
const VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
class Scroller extends BaseComponent {
  constructor() {
    super(...arguments);
    this.handleEl = el => {
      this.el = el;
      setRef(this.props.elRef, el);
    };
  }
  render() {
    let {
      props
    } = this;
    let {
      liquid,
      liquidIsAbsolute
    } = props;
    let isAbsolute = liquid && liquidIsAbsolute;
    let className = ['fc-scroller'];
    if (liquid) {
      if (liquidIsAbsolute) {
        className.push('fc-scroller-liquid-absolute');
      } else {
        className.push('fc-scroller-liquid');
      }
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: this.handleEl,
      className: className.join(' '),
      style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || '',
        right: isAbsolute && -(props.overcomeRight || 0) || '',
        bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
        maxHeight: props.maxHeight || ''
      }
    }, props.children);
  }
  needsXScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    }
    // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning
    let {
      el
    } = this;
    let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    let {
      children
    } = el;
    for (let i = 0; i < children.length; i += 1) {
      let childEl = children[i];
      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }
    return false;
  }
  needsYScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    }
    // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning
    let {
      el
    } = this;
    let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    let {
      children
    } = el;
    for (let i = 0; i < children.length; i += 1) {
      let childEl = children[i];
      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }
    return false;
  }
  getXScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }
    return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
  }

  getYScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }
    return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
  }
}

/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/
class RefMap {
  constructor(masterCallback) {
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};
    this.handleValue = (val, key) => {
      let {
        depths,
        currentMap
      } = this;
      let removed = false;
      let added = false;
      if (val !== null) {
        // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;
        if (!depths[key]) {
          delete currentMap[key];
          delete this.callbackMap[key];
          removed = true;
        }
      }
      if (this.masterCallback) {
        if (removed) {
          this.masterCallback(null, String(key));
        }
        if (added) {
          this.masterCallback(val, String(key));
        }
      }
    };
  }
  createRef(key) {
    let refCallback = this.callbackMap[key];
    if (!refCallback) {
      refCallback = this.callbackMap[key] = val => {
        this.handleValue(val, String(key));
      };
    }
    return refCallback;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  }
  getAll() {
    return hashValuesToArray(this.currentMap);
  }
}
function computeShrinkWidth(chunkEls) {
  let shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  let largestWidth = 0;
  for (let shrinkCell of shrinkCells) {
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }
  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}

function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}

function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null ||
  // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
}
// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  let {
    expandRows
  } = arg;
  let content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
    role: 'presentation',
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height
    }
  }, arg.tableColGroupNode, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'thead' : 'tbody', {
    role: 'presentation'
  }, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}
function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
  let colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */
  for (let colProps of cols) {
    let span = colProps.span || 1;
    for (let i = 0; i < span; i += 1) {
      colNodes.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("col", {
        style: {
          width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
          minWidth: colProps.minWidth || ''
        }
      }));
    }
  }
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('colgroup', {}, ...colNodes);
}
function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
  for (let col of cols) {
    if (col.width === 'shrink') {
      return true;
    }
  }
  return false;
}
function getScrollGridClassNames(liquid, context) {
  let classNames = ['fc-scrollgrid', context.theme.getClass('table')];
  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }
  return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  let classNames = ['fc-scrollgrid-section', `fc-scrollgrid-section-${sectionConfig.type}`, sectionConfig.className // used?
  ];

  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }
  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }
  return classNames;
}
function renderScrollShim(arg) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}
function getStickyHeaderDates(options) {
  let {
    stickyHeaderDates
  } = options;
  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }
  return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
  let {
    stickyFooterScrollbar
  } = options;
  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }
  return stickyFooterScrollbar;
}
class SimpleScrollGrid extends BaseComponent {
  constructor() {
    super(...arguments);
    this.processCols = memoize(a => a, isColPropsEqual); // so we get same `cols` props every time
    // yucky to memoize VNodes, but much more efficient for consumers
    this.renderMicroColGroup = memoize(renderMicroColGroup);
    this.scrollerRefs = new RefMap();
    this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
    this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    };
    // TODO: can do a really simple print-view. dont need to join rows
    this.handleSizing = () => {
      this.safeSetState(Object.assign({
        shrinkWidth: this.computeShrinkWidth()
      }, this.computeScrollerDims()));
    };
  }
  render() {
    let {
      props,
      state,
      context
    } = this;
    let sectionConfigs = props.sections || [];
    let cols = this.processCols(props.cols);
    let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    let classNames = getScrollGridClassNames(props.liquid, context);
    if (props.collapsibleWidth) {
      classNames.push('fc-scrollgrid-collapsible');
    }
    // TODO: make DRY
    let configCnt = sectionConfigs.length;
    let configI = 0;
    let currentConfig;
    let headSectionNodes = [];
    let bodySectionNodes = [];
    let footSectionNodes = [];
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }
    // firefox bug: when setting height on table and there is a thead or tfoot,
    // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
    // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
    // if so, use a simpler dom structure, jam everything into a lone tbody.
    let isBuggy = !getCanVGrowWithinCell();
    const roleAttrs = {
      role: 'rowgroup'
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
      role: 'grid',
      className: classNames.join(' '),
      style: {
        height: props.height
      }
    }, Boolean(!isBuggy && headSectionNodes.length) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('thead', roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('tbody', roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('tfoot', roleAttrs, ...footSectionNodes), isBuggy && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('tbody', roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
  }
  renderSection(sectionConfig, microColGroupNode, isHeader) {
    if ('outerContent' in sectionConfig) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: sectionConfig.key
      }, sectionConfig.outerContent);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: sectionConfig.key,
      role: "presentation",
      className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
    }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  }
  renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ('outerContent' in chunkConfig) {
      return chunkConfig.outerContent;
    }
    let {
      props
    } = this;
    let {
      forceYScrollbars,
      scrollerClientWidths,
      scrollerClientHeights
    } = this.state;
    let needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
    let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
    // for `!props.liquid` - is WHOLE scrollgrid natural height?
    // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
    let overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
    let sectionKey = sectionConfig.key;
    let content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: '',
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: () => {}
    }, isHeader);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'th' : 'td', {
      ref: chunkConfig.elRef,
      role: 'presentation'
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `fc-scroller-harness${isLiquid ? ' fc-scroller-harness-liquid' : ''}`
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Scroller, {
      ref: this.scrollerRefs.createRef(sectionKey),
      elRef: this.scrollerElRefs.createRef(sectionKey),
      overflowY: overflowY,
      overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */,
      maxHeight: sectionConfig.maxHeight,
      liquid: isLiquid,
      liquidIsAbsolute // because its within a harness
      : true
    }, content)));
  }
  _handleScrollerEl(scrollerEl, key) {
    let section = getSectionByKey(this.props.sections, key);
    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  }
  componentDidMount() {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    // TODO: need better solution when state contains non-sizing things
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let scrollbarWidth = getScrollbarWidths();
    let {
      scrollerRefs,
      scrollerElRefs
    } = this;
    let forceYScrollbars = false;
    let scrollerClientWidths = {};
    let scrollerClientHeights = {};
    for (let sectionKey in scrollerRefs.currentMap) {
      let scroller = scrollerRefs.currentMap[sectionKey];
      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }
    for (let section of this.props.sections) {
      let sectionKey = section.key;
      let scrollerEl = scrollerElRefs.currentMap[sectionKey];
      if (scrollerEl) {
        let harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
        : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }
    return {
      forceYScrollbars,
      scrollerClientWidths,
      scrollerClientHeights
    };
  }
}
SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
  for (let section of sections) {
    if (section.key === key) {
      return section;
    }
  }
  return null;
}
class EventContainer extends BaseComponent {
  constructor() {
    super(...arguments);
    this.elRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }
  render() {
    const {
      props,
      context
    } = this;
    const {
      options
    } = context;
    const {
      seg
    } = props;
    const {
      eventRange
    } = seg;
    const {
      ui
    } = eventRange;
    const renderProps = {
      event: new EventImpl(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* contains children */, {
      elRef: this.elRef,
      elClasses: [...getEventClassNames(renderProps), ...seg.eventRange.ui.classNames, ...(props.elClasses || [])],
      renderProps: renderProps,
      generatorName: "eventContent",
      generator: options.eventContent || props.defaultGenerator,
      classNameGenerator: options.eventClassNames,
      didMount: options.eventDidMount,
      willUnmount: options.eventWillUnmount
    }));
  }
  componentDidMount() {
    setElSeg(this.elRef.current, this.props.seg);
  }
}

// should not be a purecomponent
class StandardEvent extends BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let {
      ui
    } = seg.eventRange;
    let timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
    let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventContainer, Object.assign({}, props /* includes elRef */, {
      elTag: "a",
      elStyle: {
        borderColor: ui.borderColor,
        backgroundColor: ui.backgroundColor
      },
      elAttrs: getSegAnchorAttrs(seg, context),
      defaultGenerator: renderInnerContent$1,
      timeText: timeText
    }), (InnerContent, eventContentArg) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-event-main'],
      elStyle: {
        color: eventContentArg.textColor
      }
    }), Boolean(eventContentArg.isStartResizable) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-event-resizer fc-event-resizer-start"
    }), Boolean(eventContentArg.isEndResizable) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fc-event-resizer fc-event-resizer-end"
    })));
  }
}
function renderInnerContent$1(innerProps) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-main-frame"
  }, innerProps.timeText && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-time"
  }, innerProps.timeText), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title-container"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title fc-sticky"
  }, innerProps.event.title || (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u00A0"))));
}
const NowIndicatorContainer = props => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
  let {
    options
  } = context;
  let renderProps = {
    isAxis: props.isAxis,
    date: context.dateEnv.toDate(props.date),
    view: context.viewApi
  };
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* includes children */, {
    elTag: props.elTag || 'div',
    renderProps: renderProps,
    generatorName: "nowIndicatorContent",
    generator: options.nowIndicatorContent,
    classNameGenerator: options.nowIndicatorClassNames,
    didMount: options.nowIndicatorDidMount,
    willUnmount: options.nowIndicatorWillUnmount
  }));
});
const DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});
class DayCellContainer extends BaseComponent {
  constructor() {
    super(...arguments);
    this.refineRenderProps = memoizeObjArg(refineRenderProps);
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let renderProps = this.refineRenderProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraRenderProps: props.extraRenderProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* includes children */, {
      elClasses: [...getDayClassNames(renderProps, context.theme), ...(props.elClasses || [])],
      elAttrs: Object.assign(Object.assign({}, props.elAttrs), renderProps.isDisabled ? {} : {
        'data-date': formatDayString(props.date)
      }),
      renderProps: renderProps,
      generatorName: "dayCellContent",
      generator: options.dayCellContent || props.defaultGenerator,
      classNameGenerator:
      // don't use custom classNames if disabled
      renderProps.isDisabled ? undefined : options.dayCellClassNames,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount
    }));
  }
}
function hasCustomDayCellContent(options) {
  return Boolean(options.dayCellContent || hasCustomRenderingHandler('dayCellContent', options));
}
function refineRenderProps(raw) {
  let {
    date,
    dateEnv
  } = raw;
  let dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return Object.assign(Object.assign(Object.assign({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
  }), raw.extraRenderProps);
}
class BgEvent extends BaseComponent {
  render() {
    let {
      props
    } = this;
    let {
      seg
    } = props;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventContainer, {
      elTag: "div",
      elClasses: ['fc-bg-event'],
      elStyle: {
        backgroundColor: seg.eventRange.ui.backgroundColor
      },
      defaultGenerator: renderInnerContent,
      seg: seg,
      timeText: "",
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: false,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday,
      disableDragging: true,
      disableResizing: true
    });
  }
}
function renderInnerContent(props) {
  let {
    title
  } = props.event;
  return title && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title"
  }, props.event.title);
}
function renderFill(fillType) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `fc-${fillType}`
  });
}
const WeekNumberContainer = props => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
  let {
    dateEnv,
    options
  } = context;
  let {
    date
  } = props;
  let format = options.weekNumberFormat || props.defaultFormat;
  let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
  let text = dateEnv.format(date, format);
  let renderProps = {
    num,
    text,
    date
  };
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer // why isn't WeekNumberContentArg being auto-detected?
  , Object.assign({}, props /* includes children */, {
    renderProps: renderProps,
    generatorName: "weekNumberContent",
    generator: options.weekNumberContent || renderInner,
    classNameGenerator: options.weekNumberClassNames,
    didMount: options.weekNumberDidMount,
    willUnmount: options.weekNumberWillUnmount
  }));
});
function renderInner(innerProps) {
  return innerProps.text;
}
const PADDING_FROM_VIEWPORT = 10;
class Popover extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      titleId: getUniqueDomId()
    };
    this.handleRootEl = el => {
      this.rootEl = el;
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    };
    // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
    this.handleDocumentMouseDown = ev => {
      // only hide the popover if the click happened outside the popover
      const target = getEventTargetViaRoot(ev);
      if (!this.rootEl.contains(target)) {
        this.handleCloseClick();
      }
    };
    this.handleDocumentKeyDown = ev => {
      if (ev.key === 'Escape') {
        this.handleCloseClick();
      }
    };
    this.handleCloseClick = () => {
      let {
        onClose
      } = this.props;
      if (onClose) {
        onClose();
      }
    };
  }
  render() {
    let {
      theme,
      options
    } = this.context;
    let {
      props,
      state
    } = this;
    let classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return (0,preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({}, props.extraAttrs, {
      id: props.id,
      className: classNames.join(' '),
      "aria-labelledby": state.titleId,
      ref: this.handleRootEl
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fc-popover-title",
      id: state.titleId
    }, props.title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      title: options.closeHint,
      onClick: this.handleCloseClick
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children)), props.parentEl);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }
  updateSize() {
    let {
      isRtl
    } = this.context;
    let {
      alignmentEl,
      alignGridTop
    } = this.props;
    let {
      rootEl
    } = this;
    let alignmentRect = computeClippedClientRect(alignmentEl);
    if (alignmentRect) {
      let popoverDims = rootEl.getBoundingClientRect();
      // position relative to viewport
      let popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
      let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
      // constrain
      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      let origin = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin.top,
        left: popoverLeft - origin.left
      });
    }
  }
}
class MorePopover extends DateComponent {
  constructor() {
    super(...arguments);
    this.handleRootEl = rootEl => {
      this.rootEl = rootEl;
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      options,
      dateEnv
    } = this.context;
    let {
      props
    } = this;
    let {
      startDate,
      todayRange,
      dateProfile
    } = props;
    let title = dateEnv.format(startDate, options.dayPopoverFormat);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayCellContainer, {
      elRef: this.handleRootEl,
      date: startDate,
      dateProfile: dateProfile,
      todayRange: todayRange
    }, (InnerContent, renderProps, elAttrs) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      elRef: elAttrs.ref,
      id: props.id,
      title: title,
      extraClassNames: ['fc-more-popover'].concat(elAttrs.className || []),
      extraAttrs: elAttrs /* TODO: make these time-based when not whole-day? */,
      parentEl: props.parentEl,
      alignmentEl: props.alignmentEl,
      alignGridTop: props.alignGridTop,
      onClose: props.onClose
    }, hasCustomDayCellContent(options) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-more-popover-misc']
    }), props.children));
  }
  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    let {
      rootEl,
      props
    } = this;
    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: Object.assign({
          allDay: true,
          range: {
            start: props.startDate,
            end: props.endDate
          }
        }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1 // important when comparing with hits from other components
      };
    }

    return null;
  }
}
class MoreLinkContainer extends BaseComponent {
  constructor() {
    super(...arguments);
    this.linkElRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };
    this.handleClick = ev => {
      let {
        props,
        context
      } = this;
      let {
        moreLinkClick
      } = context.options;
      let date = computeRange(props).start;
      function buildPublicSeg(seg) {
        let {
          def,
          instance,
          range
        } = seg.eventRange;
        return {
          event: new EventImpl(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === 'function') {
        moreLinkClick = moreLinkClick({
          date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === 'popover') {
        this.setState({
          isPopoverOpen: true
        });
      } else if (typeof moreLinkClick === 'string') {
        // a view name
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    this.handlePopoverClose = () => {
      this.setState({
        isPopoverOpen: false
      });
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, context => {
      let {
        viewApi,
        options,
        calendarApi
      } = context;
      let {
        moreLinkText
      } = options;
      let {
        moreCnt
      } = props;
      let range = computeRange(props);
      let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
      ? moreLinkText.call(calendarApi, moreCnt) : `+${moreCnt} ${moreLinkText}`;
      let hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
      let renderProps = {
        num: moreCnt,
        shortText: `+${moreCnt}`,
        text,
        view: viewApi
      };
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Boolean(props.moreCnt) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
        elTag: props.elTag || 'a',
        elRef: this.linkElRef,
        elClasses: [...(props.elClasses || []), 'fc-more-link'],
        elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(this.handleClick)), {
          title: hint,
          'aria-expanded': state.isPopoverOpen,
          'aria-controls': state.isPopoverOpen ? state.popoverId : ''
        }),
        renderProps: renderProps,
        generatorName: "moreLinkContent",
        generator: options.moreLinkContent || props.defaultGenerator || renderMoreLinkInner,
        classNameGenerator: options.moreLinkClassNames,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, props.children), state.isPopoverOpen && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(MorePopover, {
        id: state.popoverId,
        startDate: range.start,
        endDate: range.end,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraDateSpan: props.extraDateSpan,
        parentEl: this.parentEl,
        alignmentEl: props.alignmentElRef ? props.alignmentElRef.current : this.linkElRef.current,
        alignGridTop: props.alignGridTop,
        onClose: this.handlePopoverClose
      }, props.popoverContent()));
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
    }
  }
}
function renderMoreLinkInner(props) {
  return props.text;
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }
  let {
    hiddenSegs
  } = props;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}
function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}
class Store {
  constructor() {
    this.handlers = [];
  }
  set(value) {
    this.currentValue = value;
    for (let handler of this.handlers) {
      handler(value);
    }
  }
  subscribe(handler) {
    this.handlers.push(handler);
    if (this.currentValue !== undefined) {
      handler(this.currentValue);
    }
  }
}

/*
Subscribers will get a LIST of CustomRenderings
*/
class CustomRenderingStore extends Store {
  constructor() {
    super(...arguments);
    this.map = new Map();
  }
  // for consistent order
  handle(customRendering) {
    const {
      map
    } = this;
    let updated = false;
    if (customRendering.isActive) {
      map.set(customRendering.id, customRendering);
      updated = true;
    } else if (map.has(customRendering.id)) {
      map.delete(customRendering.id);
      updated = true;
    }
    if (updated) {
      this.set(map);
    }
  }
}


/***/ }),

/***/ 57393:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/core/internal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cq),
/* harmony export */   "CalendarImpl": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   "ContentContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "CustomRenderingStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cz),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bd),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "DayCellContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cm),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bK),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bO),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bV),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bH),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bb),
/* harmony export */   "Emitter": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "EventContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.co),
/* harmony export */   "EventImpl": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "Interaction": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "MoreLinkContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cs),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.by),
/* harmony export */   "NowIndicatorContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cl),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ci),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b9),
/* harmony export */   "RefMap": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cg),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ba),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cj),
/* harmony export */   "Scroller": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ce),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bA),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c0),
/* harmony export */   "Slicer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bW),
/* harmony export */   "Splitter": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ck),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bM),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bN),
/* harmony export */   "Theme": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "ViewContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cu),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "WeekNumberContainer": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cr),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bc),
/* harmony export */   "addDays": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bf),
/* harmony export */   "addDurations": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bq),
/* harmony export */   "addMs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bh),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bi),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bX),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aL),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bo),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.br),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bt),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bs),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bD),
/* harmony export */   "buildElAttrs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cy),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bB),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cx),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bT),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bx),
/* harmony export */   "buildNavLinkAttrs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bQ),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ct),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b1),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   "computeRect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b3),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c8),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   "config": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bI),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   "createDuration": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "diffDates": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bl),
/* harmony export */   "diffDays": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bm),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bj),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bk),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   "filterHash": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   "findElements": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bw),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bv),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c6),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b2),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cw),
/* harmony export */   "getElRoot": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bC),
/* harmony export */   "getEventTargetViaRoot": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ch),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c3),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cf),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c4),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c5),
/* harmony export */   "getSegAnchorAttrs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bU),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bS),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cc),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cd),
/* harmony export */   "getUniqueDomId": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bE),
/* harmony export */   "guid": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bP),
/* harmony export */   "hasCustomDayCellContent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cn),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c1),
/* harmony export */   "identity": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   "injectStyles": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bG),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b5),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   "intersectSpans": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bF),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ca),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b_),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.be),
/* harmony export */   "isInt": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bZ),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bY),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bn),
/* harmony export */   "mapHash": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "memoize": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bp),
/* harmony export */   "padStart": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bJ),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bz),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b8),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b6),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b7),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   "refineProps": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   "removeElement": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   "removeExact": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c7),
/* harmony export */   "renderFill": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cp),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c2),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cb),
/* harmony export */   "requestJson": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b$),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c9),
/* harmony export */   "setRef": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bR),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bg),
/* harmony export */   "translateRect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.cv),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b4),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.bu)
/* harmony export */ });
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-common.js */ 62543);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/compat */ 89086);




/***/ }),

/***/ 98077:
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/core/preact.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "cloneElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement),
/* harmony export */   "createContext": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_2__.aa),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   "createPortal": () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "flushSync": () => (/* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_2__.a2),
/* harmony export */   "h": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "hydrate": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "isValidElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.isValidElement),
/* harmony export */   "options": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.options),
/* harmony export */   "render": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "toChildArray": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ 89086);
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal-common.js */ 62543);




/***/ }),

/***/ 28186:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 51176);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 96355);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);




class TableDateProfileGenerator extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.DateProfileGenerator {
  // Computes the date range that will be rendered.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let {
      dateEnv
    } = this.props;
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let start = renderRange.start;
    let end = renderRange.end;
    let endOfWeek;
    // year and month views should be aligned with weeks. this is already done for week
    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start);
      // make end-of-week if not already
      endOfWeek = dateEnv.startOfWeek(end);
      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.addWeeks)(endOfWeek, 1);
      }
    }
    // ensure 6 weeks
    if (this.props.monthMode && this.props.fixedWeekCount) {
      let rowCnt = Math.ceil(
      // could be partial weeks due to hiddenDays
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.diffWeeks)(start, end));
      end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.addWeeks)(end, 6 - rowCnt);
    }
    return {
      start,
      end
    };
  }
}
var css_248z = "\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n\n/* help things clear margins of inner content */\n\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: var(--fc-today-bg-color);\n    }\n\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n\n.fc {\n\n  /* cell top */\n\n}\n\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n\n.fc {\n\n  /* day number (within cell top) */\n\n}\n\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n\n.fc {\n\n  /* event container */\n\n}\n\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n\n.fc {\n\n  /* event harness */\n\n}\n\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n\n.fc {\n\n  /* bg content */\n\n}\n\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n\n.fc {\n\n  /* events */\n\n}\n\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n\n.fc .fc-daygrid-day-bottom:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n\n.fc {\n\n  /* week number (within frame) */\n\n}\n\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: var(--fc-neutral-bg-color);\n    color: var(--fc-neutral-text-color);\n  }\n\n.fc {\n\n  /* popover */\n\n}\n\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: var(--fc-small-font-size);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: calc(var(--fc-daygrid-event-dot-width) / 2) solid var(--fc-event-border-color);\n  border-radius: calc(var(--fc-daygrid-event-dot-width) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.injectStyles)(css_248z);
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/daygrid',
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayGridView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});


/***/ }),

/***/ 96355:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/internal.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayGridView": () => (/* binding */ DayTableView),
/* harmony export */   "DayTable": () => (/* binding */ DayTable),
/* harmony export */   "DayTableSlicer": () => (/* binding */ DayTableSlicer),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableView": () => (/* binding */ TableView),
/* harmony export */   "buildDayTableModel": () => (/* binding */ buildDayTableModel)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
class TableView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  renderSimpleLayout(headerRowContent, bodyContent) {
    let {
      props,
      context
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContainer, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.SimpleScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [] /* TODO: make optional? */,
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      props,
      context
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyFooterScrollbar)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.renderScrollShim
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContainer, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      colGroups: [{
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
}
function splitSegsByRow(segs, rowCnt) {
  let byRow = [];
  for (let i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];
  for (let i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
const DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});
function hasListItemDisplay(seg) {
  let {
    display
  } = seg.eventRange.ui;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol &&
  // can't be multi-day
  seg.isStart &&
  // "
  seg.isEnd // "
  ;
}

class TableBlockEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.StandardEvent, Object.assign({}, props, {
      elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  }
}
class TableListItemEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildSegTimeText)(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.EventContainer, Object.assign({}, props, {
      elTag: "a",
      elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegAnchorAttrs)(props.seg, context),
      defaultGenerator: renderInnerContent,
      timeText: timeText,
      isResizing: false,
      isDateSelecting: false
    }));
  }
}
function renderInnerContent(renderProps) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: renderProps.borderColor || renderProps.backgroundColor
    }
  }), renderProps.timeText && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-time"
  }, renderProps.timeText), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title"
  }, renderProps.event.title || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0")));
}
class TableCellMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.compileSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(compileSegs);
  }
  render() {
    let {
      props
    } = this;
    let {
      allSegs,
      invisibleSegs
    } = this.compileSegs(props.singlePlacements);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.MoreLinkContainer, {
      elClasses: ['fc-daygrid-more-link'],
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs: allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: () => {
        let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(seg => {
          let instanceId = seg.eventRange.instance.instanceId;
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
            }
          }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, props.todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, props.todayRange))));
        }));
      }
    });
  }
}
function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];
  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return {
    allSegs,
    invisibleSegs
  };
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  week: 'narrow'
});
class TableCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      dayNumberId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)()
    };
    this.handleRootEl = el => {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.setRef)(this.rootElRef, el);
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.setRef)(this.props.elRef, el);
    };
  }
  render() {
    let {
      context,
      props,
      state,
      rootElRef
    } = this;
    let {
      options
    } = context;
    let {
      date,
      dateProfile
    } = props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayCellContainer, {
      elTag: "td",
      elRef: this.handleRootEl,
      elClasses: ['fc-daygrid-day', ...(props.extraClassNames || [])],
      elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? {
        'aria-labelledby': state.dayNumberId
      } : {}), {
        role: 'gridcell'
      }),
      defaultGenerator: renderTopInner,
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraRenderProps: props.extraRenderProps
    }, (InnerContent, renderProps) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
      ref: props.innerElRef
    }, props.showWeekNumber && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.WeekNumberContainer, {
      elTag: "a",
      elClasses: ['fc-daygrid-week-number'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(context, date, 'week'),
      date: date,
      defaultFormat: DEFAULT_WEEK_NUM_FORMAT
    }), Boolean(!renderProps.isDisabled && (props.showDayNumber || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.hasCustomDayCellContent)(options) || props.forceDayTop)) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-top"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "a",
      elClasses: ['fc-daygrid-day-number'],
      elAttrs: Object.assign(Object.assign({}, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(context, date)), {
        id: state.dayNumberId
      })
    })), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-events",
      ref: props.fgContentElRef
    }, props.fgContent, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bottom",
      style: {
        marginTop: props.moreMarginTop
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, {
      allDayDate: date,
      singlePlacements: props.singlePlacements,
      moreCnt: props.moreCnt,
      alignmentElRef: rootElRef,
      alignGridTop: !props.showDayNumber,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange
    }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bg"
    }, props.bgContent)));
  }
}
function renderTopInner(props) {
  return props.dayNumberText || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}
function computeFgSegPlacement(segs,
// assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy();
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  // create segInputs only for segs with known heights
  let segInputs = [];
  let unknownHeightSegs = [];
  for (let i = 0; i < segs.length; i += 1) {
    let seg = segs[i];
    let {
      instanceId
    } = seg.eventRange.instance;
    let eventHeight = eventInstanceHeights[instanceId];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        thickness: eventHeight,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = [];
  // add segs with unknown heights
  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // add the hidden entries
  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // deal with leftover margins
  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    moreCnts,
    moreMarginTops
  };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];
  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col];
    // compute all static segs in singlePlacements
    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    // compute mixed static/absolute segs in multiPlacements
    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
      currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop // claim the margin
        });

        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  };
}
function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];
  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.intersectRanges)(origRange, {
    start: cells[spanStart].date,
    end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}
class DayGridSegHierarchy extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.SegHierarchy {
  constructor() {
    super(...arguments);
    // config
    this.hiddenConsumes = false;
    // allows us to keep hidden entries in the hierarchy so they take up space
    this.forceHidden = {};
  }
  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const {
      entriesByLevel
    } = this;
    const excludeHidden = entry => !this.forceHidden[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(entry)];
    // remove the forced-hidden segs
    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const {
      entriesByLevel,
      forceHidden
    } = this;
    const {
      touchingEntry,
      touchingLevel,
      touchingLateral
    } = insertion;
    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(touchingEntry);
      // if not already hidden
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          const placeholderEntry = Object.assign(Object.assign({}, touchingEntry), {
            span: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.intersectSpans)(touchingEntry.span, entry.span)
          });
          const placeholderEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(placeholderEntry);
          forceHidden[placeholderEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
          this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    return super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
}
class TableRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the <td>
    this.frameElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the fc-daygrid-day-frame
    this.fgElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // the fc-daygrid-day-events
    this.segHarnessRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap(); // indexed by "instanceId:firstCol"
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    };
  }
  render() {
    let {
      props,
      state,
      context
    } = this;
    let {
      options
    } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let {
      singleColPlacements,
      multiColPlacements,
      moreCnts,
      moreMarginTops
    } = computeFgSegPlacement((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.sortEventSegs)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      ref: this.rootElRef,
      role: "row"
    }, props.renderIntro && props.renderIntro(), props.cells.map((cell, col) => {
      let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
      let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, {
        key: cell.key,
        elRef: this.cellElRefs.createRef(cell.key),
        innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraRenderProps: cell.extraRenderProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: this.fgElRefs.createRef(cell.key),
        fgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes)),
        bgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderFillSegs(highlightSegsByCol[col], 'highlight'), this.renderFillSegs(businessHoursByCol[col], 'non-business'), this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
      });
    }));
  }
  componentDidMount() {
    this.updateSizing(true);
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.isPropsEqual)(prevProps, currentProps));
  }
  getHighlightSegs() {
    let {
      props
    } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
  getMirrorSegs() {
    let {
      props
    } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return [];
  }
  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      context
    } = this;
    let {
      eventSelection
    } = this.props;
    let {
      framePositions
    } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];
    if (framePositions) {
      for (let placement of segPlacements) {
        let {
          seg
        } = placement;
        let {
          instanceId
        } = seg.eventRange.instance;
        let key = instanceId + ':' + col;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = '';
        let right = '';
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        todo: in print view, for multi-day events, don't display title within non-start/end segs
        */
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: key,
          ref: isMirror ? null : this.segHarnessRefs.createRef(key),
          style: {
            visibility: isVisible ? '' : 'hidden',
            marginTop: isAbsolute ? '' : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : '',
            left,
            right
          }
        }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange)))));
      }
    }
    return nodes;
  }
  renderFillSegs(segs, fillType) {
    let {
      isRtl
    } = this.context;
    let {
      todayRange
    } = this.props;
    let {
      framePositions
    } = this.state;
    let nodes = [];
    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEventRangeKey)(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BgEvent, Object.assign({
          seg: seg
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.renderFill)(fillType)));
      }
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...nodes);
  }
  updateSizing(isExternalSizingChange) {
    let {
      props,
      frameElRefs
    } = this;
    if (!props.forPrint && props.clientWidth !== null // positioning ready?
    ) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map(cell => frameElRefs.currentMap[cell.key]);
        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          this.setState({
            framePositions: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.PositionCache(originEl, frameEls, true,
            // isHorizontal
            false)
          });
        }
      }
      const oldInstanceHeights = this.state.eventInstanceHeights;
      const newInstanceHeights = this.queryEventInstanceHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        eventInstanceHeights: Object.assign(Object.assign({}, oldInstanceHeights), newInstanceHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }
  queryEventInstanceHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let eventInstanceHeights = {};
    // get the max height amongst instance segs
    for (let key in segElMap) {
      let height = Math.round(segElMap[key].getBoundingClientRect().height);
      let instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
      eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
    }
    return eventInstanceHeights;
  }
  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }
  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(cell => elMap[cell.key]);
  }
}
TableRow.addStateEquality({
  eventInstanceHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
  return mirrorSegs.map(seg => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};
  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
class Table extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByRow);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByRow);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByRow);
    this.rowRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap();
    this.handleRootEl = rootEl => {
      this.rootEl = rootEl;
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      props
    } = this;
    let {
      dateProfile,
      dayMaxEventRows,
      dayMaxEvents,
      expandRows
    } = props;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    let classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];

    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classNames.join(' '),
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      className: "fc-scrollgrid-sync-table",
      style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth,
        height: expandRows ? props.clientHeight : ''
      }
    }, props.colGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, props.cells.map((cells, row) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */ : row // in case there are no cells (like when resource view is loading)
      ,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange: todayRange,
      dateProfile: dateProfile,
      cells: cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */,
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: dayMaxEvents,
      dayMaxEventRows: dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    })))))));
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootEl, this.rowRefs.collect().map(rowObj => rowObj.getCellEls()[0]),
    // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(),
    // cell els in first row
    true,
    // horizontal
    false);
  }
  queryHit(positionLeft, positionTop) {
    let {
      colPositions,
      rowPositions
    } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  }

  getCellRange(row, col) {
    let start = this.props.cells[row][col].date;
    let end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(start, 1);
    return {
      start,
      end
    };
  }
}
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
class DayTableSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Slicer {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }
}
class DayTable extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, Object.assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  }
}
class DayTableView extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(buildDayTableModel);
    this.headerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      options,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayHeader, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });
    let bodyContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, {
      ref: this.tableRef,
      dateProfile: props.dateProfile,
      dayTableModel: dayTableModel,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      nextDayThreshold: options.nextDayThreshold,
      colGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      dayMaxEvents: options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      showWeekNumbers: options.weekNumbers,
      expandRows: !props.isHeightAuto,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    });
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }
}
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}


/***/ }),

/***/ 46516:
/*!*************************************************************!*\
  !*** ./node_modules/@fullcalendar/google-calendar/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 51176);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);



// TODO: expose somehow
const API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
const eventSourceDef = {
  parseMeta(refined) {
    let {
      googleCalendarId
    } = refined;
    if (!googleCalendarId && refined.url) {
      googleCalendarId = parseGoogleCalendarId(refined.url);
    }
    if (googleCalendarId) {
      return {
        googleCalendarId,
        googleCalendarApiKey: refined.googleCalendarApiKey,
        googleCalendarApiBase: refined.googleCalendarApiBase,
        extraParams: refined.extraParams
      };
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    let {
      dateEnv,
      options
    } = arg.context;
    let meta = arg.eventSource.meta;
    let apiKey = meta.googleCalendarApiKey || options.googleCalendarApiKey;
    if (!apiKey) {
      errorCallback(new Error('Specify a googleCalendarApiKey. See https://fullcalendar.io/docs/google-calendar'));
    } else {
      let url = buildUrl(meta);
      // TODO: make DRY with json-feed-event-source
      let {
        extraParams
      } = meta;
      let extraParamsObj = typeof extraParams === 'function' ? extraParams() : extraParams;
      let requestParams = buildRequestParams(arg.range, apiKey, extraParamsObj, dateEnv);
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.requestJson)('GET', url, requestParams).then(([body, response]) => {
        if (body.error) {
          errorCallback(new _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.JsonRequestError('Google Calendar API: ' + body.error.message, response));
        } else {
          successCallback({
            rawEvents: gcalItemsToRawEventDefs(body.items, requestParams.timeZone),
            response
          });
        }
      }, errorCallback);
    }
  }
};
function parseGoogleCalendarId(url) {
  let match;
  // detect if the ID was specified as a single string.
  // will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
  if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(url)) {
    return url;
  }
  if ((match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(url)) || (match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(url))) {
    return decodeURIComponent(match[1]);
  }
  return null;
}
function buildUrl(meta) {
  let apiBase = meta.googleCalendarApiBase;
  if (!apiBase) {
    apiBase = API_BASE;
  }
  return apiBase + '/' + encodeURIComponent(meta.googleCalendarId) + '/events';
}
function buildRequestParams(range, apiKey, extraParams, dateEnv) {
  let params;
  let startStr;
  let endStr;
  if (dateEnv.canComputeOffset) {
    // strings will naturally have offsets, which GCal needs
    startStr = dateEnv.formatIso(range.start);
    endStr = dateEnv.formatIso(range.end);
  } else {
    // when timezone isn't known, we don't know what the UTC offset should be, so ask for +/- 1 day
    // from the UTC day-start to guarantee we're getting all the events
    // (start/end will be UTC-coerced dates, so toISOString is okay)
    startStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.addDays)(range.start, -1).toISOString();
    endStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.addDays)(range.end, 1).toISOString();
  }
  params = Object.assign(Object.assign({}, extraParams || {}), {
    key: apiKey,
    timeMin: startStr,
    timeMax: endStr,
    singleEvents: true,
    maxResults: 9999
  });
  if (dateEnv.timeZone !== 'local') {
    params.timeZone = dateEnv.timeZone;
  }
  return params;
}
function gcalItemsToRawEventDefs(items, gcalTimezone) {
  return items.map(item => gcalItemToRawEventDef(item, gcalTimezone));
}
function gcalItemToRawEventDef(item, gcalTimezone) {
  let url = item.htmlLink || null;
  // make the URLs for each event show times in the correct timezone
  if (url && gcalTimezone) {
    url = injectQsComponent(url, 'ctz=' + gcalTimezone);
  }
  return {
    id: item.id,
    title: item.summary,
    start: item.start.dateTime || item.start.date,
    end: item.end.dateTime || item.end.date,
    url,
    location: item.location,
    description: item.description,
    attachments: item.attachments || [],
    extendedProps: (item.extendedProperties || {}).shared || {}
  };
}
// Injects a string like "arg=value" into the querystring of a URL
// TODO: move to a general util file?
function injectQsComponent(url, component) {
  // inject it after the querystring but before the fragment
  return url.replace(/(\?.*?)?(#|$)/, (whole, qs, hash) => (qs ? qs + '&' : '?') + component + hash);
}
const OPTION_REFINERS = {
  googleCalendarApiKey: String
};
const EVENT_SOURCE_REFINERS = {
  googleCalendarApiKey: String,
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity
};
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/google-calendar',
  eventSourceDefs: [eventSourceDef],
  optionRefiners: OPTION_REFINERS,
  eventSourceRefiners: EVENT_SOURCE_REFINERS
});


/***/ }),

/***/ 24213:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draggable": () => (/* binding */ ExternalDraggable),
/* harmony export */   "ThirdPartyDraggable": () => (/* binding */ ThirdPartyDraggable),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 51176);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);


_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.config.touchMouseIgnoreWait = 500;
let ignoreMouseDepth = 0;
let listenerCnt = 0;
let isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
class PointerDragging {
  constructor(containerEl) {
    this.subjectEl = null;
    // options that can be directly assigned by caller
    this.selector = ''; // will cause subjectEl in all emitted events to be this element
    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    // Mouse
    // ----------------------------------------------------------------------------------------------------
    this.handleMouseDown = ev => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        if (!this.shouldIgnoreMove) {
          document.addEventListener('mousemove', this.handleMouseMove);
        }
        document.addEventListener('mouseup', this.handleMouseUp);
      }
    };
    this.handleMouseMove = ev => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleMouseUp = ev => {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
      this.cleanup(); // call last so that pointerup has access to props
    };
    // Touch
    // ----------------------------------------------------------------------------------------------------
    this.handleTouchStart = ev => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014
        let targetEl = ev.target;
        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', this.handleTouchMove);
        }
        targetEl.addEventListener('touchend', this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = ev => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleTouchEnd = ev => {
      if (this.isDragging) {
        // done to guard against touchend followed by touchcancel
        let targetEl = ev.target;
        targetEl.removeEventListener('touchmove', this.handleTouchMove);
        targetEl.removeEventListener('touchend', this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
        window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
        this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
        this.cleanup(); // call last so that pointerup has access to props
        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };
    this.handleScroll = ev => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.pageXOffset - this.prevScrollX + this.prevPageX;
        let pageY = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Emitter();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }
  destroy() {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  }
  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;
    if (subjectEl && (!this.handleSelector || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  }
  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    // keep wasTouchScroll around for later access
    this.destroyScrollWatch();
  }
  querySubjectEl(ev) {
    if (this.selector) {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(ev.target, this.selector);
    }
    return this.containerEl;
  }
  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  }

  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.pageXOffset;
      this.prevScrollY = window.pageYOffset;
    }
  }
  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0;
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }
  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0;
    // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }
}
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.config.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
class ElementMirror {
  constructor() {
    this.isVisible = false; // must be explicitly enabled
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller
    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.pageXOffset;
    this.origScreenY = pageY - window.pageYOffset;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }
  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.pageXOffset - this.origScreenX;
    this.deltaY = pageY - window.pageYOffset - this.origScreenY;
    this.updateElPosition();
  }
  // can be called before start
  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }
        this.isVisible = bool; // needs to happen before updateElPosition
        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }
      this.isVisible = bool;
    }
  }
  // always async
  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && (
    // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }
  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.applyStyle)(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone)(mirrorEl, () => {
      mirrorEl.style.transition = '';
      callback();
    });
  }
  cleanup() {
    if (this.mirrorEl) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.removeElement)(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  }
  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.applyStyle)(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }
  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.
      mirrorEl.classList.add('fc-unselectable');
      mirrorEl.classList.add('fc-event-dragging');
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.applyStyle)(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  }
}

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
class ScrollGeomCache extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ScrollController {
  constructor(scrollController, doesListening) {
    super();
    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };
    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect(); // do last in case it needs cached values
    if (this.doesListening) {
      this.getEventTarget().addEventListener('scroll', this.handleScroll);
    }
  }
  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }
  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {}
}
class ElementScrollGeomCache extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController(el), doesListening);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect)(this.scrollController.el);
  }
}
class WindowScrollGeomCache extends ScrollGeomCache {
  constructor(doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController(), doesListening);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
class AutoScroller {
  constructor() {
    // options that can be set by caller
    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels
    this.maxVelocity = 300; // pixels per second
    // internal state
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    // protect against the initial pointerdown being too close to an edge and starting the scroll
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = () => {
      if (this.isAnimating) {
        // wasn't cancelled between animation calls
        let edge = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1000);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false; // will stop animation
        }
      }
    };
  }

  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }
  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.pageXOffset;
      let pointerScreenY = pageY - window.pageYOffset;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  }
  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }
  handleSide(edge, seconds) {
    let {
      scrollCache
    } = edge;
    let {
      edgeThreshold
    } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity =
    // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) *
    // quadratic
    this.maxVelocity * seconds;
    let sign = 1;
    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through
      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case 'top':
        sign = -1;
      // falls through
      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(left, top) {
    let {
      edgeThreshold
    } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];
    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top;
      // completely within the rect?
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache,
            name: 'top',
            distance: topDist
          };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache,
            name: 'left',
            distance: leftDist
          };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }
    return bestSide;
  }
  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(el => {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }

      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  }

  queryScrollEls(scrollStartEl) {
    let els = [];
    for (let query of this.scrollQuery) {
      if (typeof query === 'object') {
        els.push(query);
      } else {
        els.push(...Array.prototype.slice.call((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getElRoot)(scrollStartEl).querySelectorAll(query)));
      }
    }
    return els;
  }
}

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
class FeaturefulElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ElementDragging {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl;
    // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well
    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
    this.mirrorNeedsRevert = false;
    this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
    this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;
    this.onPointerDown = ev => {
      if (!this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.preventSelection)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu)(document.body);
        // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        this.emitter.trigger('pointerdown', ev);
        if (this.isInteracting &&
        // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          this.mirror.setIsVisible(false); // reset. caller must set-visible
          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
          this.startDelay(ev);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    this.onPointerMove = ev => {
      if (this.isInteracting) {
        this.emitter.trigger('pointermove', ev);
        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq; // current distance from the origin, squared
          let {
            deltaX,
            deltaY
          } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            this.handleDistanceSurpassed(ev);
          }
        }
        if (this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          this.emitter.trigger('dragmove', ev);
        }
      }
    };
    this.onPointerUp = ev => {
      if (this.isInteracting) {
        this.isInteracting = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.allowSelection)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu)(document.body);
        this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev); // which will stop the mirror
        }

        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.onPointerDown);
    pointer.emitter.on('pointermove', this.onPointerMove);
    pointer.emitter.on('pointerup', this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }
  destroy() {
    this.pointer.destroy();
    // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
    this.onPointerUp({});
  }
  startDelay(ev) {
    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  }
  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }
  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }
  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger('dragstart', ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }
  tryStopDrag(ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }
  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  }
  // fill in the implementations...
  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }
  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }
  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }
}

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
class OffsetTracker {
  constructor(el) {
    this.origRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.computeRect)(el);
    // will work fine for divs that have overflow:hidden
    this.scrollCaches = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getClippingParents)(el).map(scrollEl => new ElementScrollGeomCache(scrollEl, true));
  }
  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }
  computeLeft() {
    let left = this.origRect.left;
    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  }
  computeTop() {
    let top = this.origRect.top;
    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  }
  isWithinClipping(pageX, pageY) {
    let point = {
      left: pageX,
      top: pageY
    };
    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect)(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  }
}
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
class HitDragging {
  constructor(dragging, droppableStore) {
    // options that can be set by caller
    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);
      if (this.initialHit || !this.requireInitial) {
        dragging.setIgnoreMove(false);
        // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
        this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };
    this.handleDragStart = ev => {
      this.emitter.trigger('dragstart', ev);
      this.handleMove(ev, true); // force = fire even if initially null
    };

    this.handleDragMove = ev => {
      this.emitter.trigger('dragmove', ev);
      this.handleMove(ev);
    };
    this.handlePointerUp = ev => {
      this.releaseHits();
      this.emitter.trigger('pointerup', ev);
    };
    this.handleDragEnd = ev => {
      if (this.movingHit) {
        this.emitter.trigger('hitupdate', null, true, ev);
      }
      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger('dragend', ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Emitter();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(ev) {
    let origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;
    if (subjectEl instanceof HTMLElement) {
      // i.e. not a Document/ShadowRoot
      subjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.computeRect)(subjectEl);
      adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.constrainPoint)(adjustedPoint, subjectRect);
    }
    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.intersectRects)(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getRectCenter)(slicedSubjectRect);
        }
      }
      this.coordAdjust = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.diffPoints)(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  }
  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  }
  prepareHits() {
    this.offsetTrackers = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.mapHash)(this.droppableStore, interactionSettings => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }
  releaseHits() {
    let {
      offsetTrackers
    } = this;
    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  }
  queryHitForOffset(offsetLeft, offsetTop) {
    let {
      droppableStore,
      offsetTrackers
    } = this;
    let bestHit = null;
    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];
      if (offsetTracker &&
      // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let {
          origRect
        } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;
        if (
        // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit &&
          // make sure the hit is within activeRange, meaning it's not a dead cell
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange)(hit.dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            // TODO: better way to re-orient rectangle
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  }
}
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual)(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.datePointTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
class DateClicking extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Interaction {
  constructor(settings) {
    super(settings);
    this.handlePointerDown = pev => {
      let {
        dragging
      } = this;
      let downEl = pev.origEvent.target;
      // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    };
    // won't even fire if moving was ignored
    this.handleDragEnd = ev => {
      let {
        component
      } = this;
      let {
        pointer
      } = this.dragging;
      if (!pointer.wasTouchScroll) {
        let {
          initialHit,
          finalHit
        } = this.hitDragging;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let {
            context
          } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger('dateClick', arg);
        }
      }
    };
    // we DO want to watch pointer moves because otherwise finalHit won't get populated
    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
class DateSelecting extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Interaction {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;
    this.handlePointerDown = ev => {
      let {
        component,
        dragging
      } = this;
      let {
        options
      } = component.context;
      let canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target);
      // don't bother to watch expensive moves if component won't do selection
      dragging.setIgnoreMove(!canSelect);
      // if touch, require user to hold down
      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };
    this.handleDragStart = ev => {
      this.component.context.calendarApi.unselect(ev); // unselect previous selections
    };

    this.handleHitUpdate = (hit, isFinal) => {
      let {
        context
      } = this.component;
      let dragSelection = null;
      let isInvalid = false;
      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.enableCursor)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.disableCursor)();
      }
      if (!isFinal) {
        this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };

    this.handlePointerUp = pev => {
      if (this.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect)(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };
    let {
      component
    } = settings;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function getComponentTouchDelay$1(component) {
  let {
    options
  } = component.context;
  let delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.compareNumbers);
  let props = {};
  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      Object.assign(props, res);
    }
  }
  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}
let EventDragging = /*#__PURE__*/(() => {
  class EventDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Interaction {
    constructor(settings) {
      super(settings);
      // internal state
      this.subjectEl = null;
      this.subjectSeg = null; // the seg being selected/dragged
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null; // the events being dragged
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
      this.handlePointerDown = ev => {
        let origTarget = ev.origEvent.target;
        let {
          component,
          dragging
        } = this;
        let {
          mirror
        } = dragging;
        let {
          options
        } = component.context;
        let initialContext = component.context;
        this.subjectEl = ev.subjectEl;
        let subjectSeg = this.subjectSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getElSeg)(ev.subjectEl);
        let eventRange = this.eventRange = subjectSeg.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents)(initialContext.getCurrentData().eventStore, eventInstanceId);
        dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
        dragging.delay =
        // only do a touch delay if touch and this event hasn't been selected yet
        ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;
        if (options.fixedMirrorParent) {
          mirror.parentNode = options.fixedMirrorParent;
        } else {
          mirror.parentNode = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(origTarget, '.fc');
        }
        mirror.revertDuration = options.dragRevertDuration;
        let isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(origTarget, '.fc-event-resizer'); // NOT on a resizer
        dragging.setIgnoreMove(!isValid);
        // disable dragging for elements that are resizable (ie, selectable)
        // but are not draggable
        this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
      };
      this.handleDragStart = ev => {
        let initialContext = this.component.context;
        let eventRange = this.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        if (ev.isTouch) {
          // need to select a different event?
          if (eventInstanceId !== this.component.props.eventSelection) {
            initialContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId
            });
          }
        } else {
          // if now using mouse, but was previous touch interaction, clear selected event
          initialContext.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
        if (this.isDragging) {
          initialContext.calendarApi.unselect(ev); // unselect *date* selection
          initialContext.emitter.trigger('eventDragStart', {
            el: this.subjectEl,
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(initialContext, eventRange.def, eventRange.instance),
            jsEvent: ev.origEvent,
            view: initialContext.viewApi
          });
        }
      };
      this.handleHitUpdate = (hit, isFinal) => {
        if (!this.isDragging) {
          return;
        }
        let relevantEvents = this.relevantEvents;
        let initialHit = this.hitDragging.initialHit;
        let initialContext = this.component.context;
        // states based on new hit
        let receivingContext = null;
        let mutation = null;
        let mutatedRelevantEvents = null;
        let isInvalid = false;
        let interaction = {
          affectedEvents: relevantEvents,
          mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)(),
          isEvent: true
        };
        if (hit) {
          receivingContext = hit.context;
          let receivingOptions = receivingContext.options;
          if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
            mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
            if (mutation) {
              mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
              interaction.mutatedEvents = mutatedRelevantEvents;
              if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid)(interaction, hit.dateProfile, receivingContext)) {
                isInvalid = true;
                mutation = null;
                mutatedRelevantEvents = null;
                interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)();
              }
            }
          } else {
            receivingContext = null;
          }
        }
        this.displayDrag(receivingContext, interaction);
        if (!isInvalid) {
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.enableCursor)();
        } else {
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.disableCursor)();
        }
        if (!isFinal) {
          if (initialContext === receivingContext &&
          // TODO: write test for this
          isHitsEqual(initialHit, hit)) {
            mutation = null;
          }
          this.dragging.setMirrorNeedsRevert(!mutation);
          // render the mirror if no already-rendered mirror
          // TODO: wish we could somehow wait for dispatch to guarantee render
          this.dragging.setMirrorIsVisible(!hit || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getElRoot)(this.subjectEl).querySelector('.fc-event-mirror'));
          // assign states based on new hit
          this.receivingContext = receivingContext;
          this.validMutation = mutation;
          this.mutatedRelevantEvents = mutatedRelevantEvents;
        }
      };
      this.handlePointerUp = () => {
        if (!this.isDragging) {
          this.cleanup(); // because handleDragEnd won't fire
        }
      };

      this.handleDragEnd = ev => {
        if (this.isDragging) {
          let initialContext = this.component.context;
          let initialView = initialContext.viewApi;
          let {
            receivingContext,
            validMutation
          } = this;
          let eventDef = this.eventRange.def;
          let eventInstance = this.eventRange.instance;
          let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(initialContext, eventDef, eventInstance);
          let relevantEvents = this.relevantEvents;
          let mutatedRelevantEvents = this.mutatedRelevantEvents;
          let {
            finalHit
          } = this.hitDragging;
          this.clearDrag(); // must happen after revert animation
          initialContext.emitter.trigger('eventDragStop', {
            el: this.subjectEl,
            event: eventApi,
            jsEvent: ev.origEvent,
            view: initialView
          });
          if (validMutation) {
            // dropped within same calendar
            if (receivingContext === initialContext) {
              let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
              initialContext.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: mutatedRelevantEvents
              });
              let eventChangeArg = {
                oldEvent: eventApi,
                event: updatedEventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.buildEventApis)(mutatedRelevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents // the pre-change data
                  });
                }
              };

              let transformed = {};
              for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                Object.assign(transformed, transformer(validMutation, initialContext));
              }
              initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
                el: ev.subjectEl,
                delta: validMutation.datesDelta,
                jsEvent: ev.origEvent,
                view: initialView
              }));
              initialContext.emitter.trigger('eventChange', eventChangeArg);
              // dropped in different calendar
            } else if (receivingContext) {
              let eventRemoveArg = {
                event: eventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.buildEventApis)(relevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents
                  });
                }
              };
              initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), {
                draggedEl: ev.subjectEl,
                view: initialView
              }));
              initialContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: relevantEvents
              });
              initialContext.emitter.trigger('eventRemove', eventRemoveArg);
              let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
              let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
              let addedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(receivingContext, addedEventDef, addedEventInstance);
              receivingContext.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: mutatedRelevantEvents
              });
              let eventAddArg = {
                event: addedEventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.buildEventApis)(mutatedRelevantEvents, receivingContext, addedEventInstance),
                revert() {
                  receivingContext.dispatch({
                    type: 'REMOVE_EVENTS',
                    eventStore: mutatedRelevantEvents
                  });
                }
              };
              receivingContext.emitter.trigger('eventAdd', eventAddArg);
              if (ev.isTouch) {
                receivingContext.dispatch({
                  type: 'SELECT_EVENT',
                  eventInstanceId: eventInstance.instanceId
                });
              }
              receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
                draggedEl: ev.subjectEl,
                jsEvent: ev.origEvent,
                view: finalHit.context.viewApi
              }));
              receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), {
                draggedEl: ev.subjectEl,
                view: finalHit.context.viewApi
              }));
            }
          } else {
            initialContext.emitter.trigger('_noEventDrop');
          }
        }
        this.cleanup();
      };
      let {
        component
      } = this;
      let {
        options
      } = component.context;
      let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
      dragging.pointer.selector = EventDragging.SELECTOR;
      dragging.touchScrollAllowed = false;
      dragging.autoScroller.isEnabled = options.dragScroll;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore);
      hitDragging.useSubjectCenter = settings.useEventCenter;
      hitDragging.emitter.on('pointerdown', this.handlePointerDown);
      hitDragging.emitter.on('dragstart', this.handleDragStart);
      hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
      hitDragging.emitter.on('pointerup', this.handlePointerUp);
      hitDragging.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    // render a drag state on the next receivingCalendar
    displayDrag(nextContext, state) {
      let initialContext = this.component.context;
      let prevContext = this.receivingContext;
      // does the previous calendar need to be cleared?
      if (prevContext && prevContext !== nextContext) {
        // does the initial calendar need to be cleared?
        // if so, don't clear all the way. we still need to to hide the affectedEvents
        if (prevContext === initialContext) {
          prevContext.dispatch({
            type: 'SET_EVENT_DRAG',
            state: {
              affectedEvents: state.affectedEvents,
              mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)(),
              isEvent: true
            }
          });
          // completely clear the old calendar if it wasn't the initial
        } else {
          prevContext.dispatch({
            type: 'UNSET_EVENT_DRAG'
          });
        }
      }
      if (nextContext) {
        nextContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state
        });
      }
    }
    clearDrag() {
      let initialCalendar = this.component.context;
      let {
        receivingContext
      } = this;
      if (receivingContext) {
        receivingContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
      // the initial calendar might have an dummy drag state from displayDrag
      if (initialCalendar !== receivingContext) {
        initialCalendar.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }
    cleanup() {
      this.subjectSeg = null;
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null;
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
    }
  }
  // TODO: test this in IE11
  // QUESTION: why do we need it on the resizable???
  EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  return EventDragging;
})();
function computeEventMutation(hit0, hit1, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(date0);
    }
  }
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.diffDates)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }
  let mutation = {
    datesDelta: delta,
    standardProps
  };
  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  let {
    options
  } = component.context;
  let delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
class EventResizing extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Interaction {
  constructor(settings) {
    super(settings);
    // internal state
    this.draggingSegEl = null;
    this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = ev => {
      let {
        component
      } = this;
      let segEl = this.querySegEl(ev);
      let seg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getElSeg)(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component.context.options.eventDragMinDistance;
      // if touch, need to be working with a selected event
      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    this.handleDragStart = ev => {
      let {
        context
      } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents)(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getElSeg)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        context
      } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)(),
        isEvent: true
      };
      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.enableCursor)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.disableCursor)();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handleDragEnd = ev => {
      let {
        context
      } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (this.validMutation) {
        let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.buildEventApis)(mutatedRelevantEvents, context, eventInstance),
          revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events
            });
          }
        };

        context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), {
          el: this.draggingSegEl,
          startDelta: this.validMutation.startDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createDuration)(0),
          endDelta: this.validMutation.endDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createDuration)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      }
      // reset all internal state
      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null;
      // okay to keep eventInstance around. useful to set it in handlePointerDown
    };

    let {
      component
    } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(ev) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(ev.subjectEl, '.fc-event');
  }
}
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.diffDates)(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }
  return null;
}
class UnselectAuto {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = selectInfo => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = pev => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getEventTargetViaRoot)(pev.origEvent);
      this.matchesCancel = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(downEl, unselectCancel);
      this.matchesEvent = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementClosest)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };

    this.onDocumentPointerUp = pev => {
      let {
        context
      } = this;
      let {
        documentPointer
      } = this;
      let calendarState = context.getCurrentData();
      // touch-scrolling should never unfocus any type of selection
      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection &&
        // an existing date selection?
        !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          let unselectAuto = context.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection &&
        // an existing event selected?
        !this.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }
      this.isRecentPointerDateSelect = false;
    };
    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */
    context.emitter.on('select', this.onSelect);
  }
  destroy() {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  }
}
const OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity
};
const LISTENER_REFINERS = {
  dateClick: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventDragStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventDragStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventDrop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventResizeStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventResizeStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventResize: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  drop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventReceive: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity,
  eventLeave: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.identity
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
class ExternalElementDragging {
  constructor(dragging, suppliedDragMeta) {
    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false
    this.suppliedDragMeta = null;
    this.dragMeta = null;
    this.handleDragStart = ev => {
      this.dragMeta = this.buildDragMeta(ev.subjectEl);
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        dragging
      } = this.hitDragging;
      let receivingContext = null;
      let droppableEvent = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)(),
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)(),
        isEvent: this.dragMeta.create
      };
      if (hit) {
        receivingContext = hit.context;
        if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore)(droppableEvent);
          isInvalid = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid)(interaction, hit.dateProfile, receivingContext);
          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore)();
            droppableEvent = null;
          }
        }
      }
      this.displayDrag(receivingContext, interaction);
      // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render
      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.enableCursor)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.disableCursor)();
      }
      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        this.receivingContext = receivingContext;
        this.droppableEvent = droppableEvent;
      }
    };
    this.handleDragEnd = pev => {
      let {
        receivingContext,
        droppableEvent
      } = this;
      this.clearDrag();
      if (receivingContext && droppableEvent) {
        let finalHit = this.hitDragging.finalHit;
        let finalView = finalHit.context.viewApi;
        let dragMeta = this.dragMeta;
        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));
        if (dragMeta.create) {
          let addingEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents
          });
          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          }
          // signal that an external event landed
          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.EventImpl(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }
      this.receivingContext = null;
      this.droppableEvent = null;
    };
    let hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore);
    hitDragging.requireInitial = false; // will start outside of a component
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }
  buildDragMeta(subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta)(this.suppliedDragMeta);
    }
    if (typeof this.suppliedDragMeta === 'function') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta)(this.suppliedDragMeta(subjectEl));
    }
    return getDragMetaFromEl(subjectEl);
  }
  displayDrag(nextContext, state) {
    let prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }
  clearDrag() {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }
  canDropElOnCalendar(el, receivingContext) {
    let dropAccept = receivingContext.options.dropAccept;
    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }
    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.elementMatches)(el, dropAccept));
    }
    return true;
  }
}
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
  let defProps = Object.assign({}, dragMeta.leftoverProps);
  for (let transform of context.pluginHooks.externalDefTransforms) {
    Object.assign(defProps, transform(dateSpan, dragMeta));
  }
  let {
    refined,
    extra
  } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.refineEventDef)(defProps, context);
  let def = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.parseEventDef)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration),
  // hasEnd
  context);
  let start = dateSpan.range.start;
  // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time
  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }
  let end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd)(dateSpan.allDay, start, context);
  let instance = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.createEventInstance)(def.defId, {
    start,
    end
  });
  return {
    def,
    instance
  };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
  let str = getEmbeddedElData(el, 'event');
  let obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta)(obj);
}
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.config.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
  let prefix = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.config.dataAttrPrefix;
  let prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
class ExternalDraggable {
  constructor(el, settings = {}) {
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      let {
        minDistance,
        longPressDelay
      } = this.settings;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS.eventDragMinDistance;
      dragging.delay = ev.isTouch ?
      // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS.longPressDelay : 0;
    };
    this.handleDragStart = ev => {
      if (ev.isTouch && this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };
    this.settings = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;
    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }
    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }

    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  destroy() {
    this.dragging.destroy();
  }
}

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
class InferredElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ElementDragging {
  constructor(containerEl) {
    super(containerEl);
    this.shouldIgnoreMove = false;
    this.mirrorSelector = '';
    this.currentMirrorEl = null;
    this.handlePointerDown = ev => {
      this.emitter.trigger('pointerdown', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        this.emitter.trigger('dragstart', ev);
      }
    };
    this.handlePointerMove = ev => {
      if (!this.shouldIgnoreMove) {
        this.emitter.trigger('dragmove', ev);
      }
    };
    this.handlePointerUp = ev => {
      this.emitter.trigger('pointerup', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        this.emitter.trigger('dragend', ev);
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.handlePointerDown);
    pointer.emitter.on('pointermove', this.handlePointerMove);
    pointer.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.pointer.destroy();
  }
  setIgnoreMove(bool) {
    this.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      let mirrorEl = this.mirrorSelector
      // TODO: somehow query FullCalendars WITHIN shadow-roots
      ? document.querySelector(this.mirrorSelector) : null;
      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  }
}

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
class ThirdPartyDraggable {
  constructor(containerOrSettings, settings) {
    let containerEl = document;
    if (
    // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }
    let dragging = this.dragging = new InferredElementDragging(containerEl);
    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }
    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  destroy() {
    this.dragging.destroy();
  }
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/interaction',
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});


/***/ }),

/***/ 19142:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 51176);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 93640);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);




const OPTION_REFINERS = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.identity,
  noEventsContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.identity,
  noEventsDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.identity,
  noEventsWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.identity
  // noEventsText is defined in base options
};

function createFalsableFormatter(input) {
  return input === false ? null : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.createFormatter)(input);
}
var css_248z = "\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n\n.fc-theme-standard .fc-list {\n    border: 1px solid var(--fc-border-color);\n  }\n\n.fc {\n\n  /* message when no events */\n\n}\n\n.fc .fc-list-empty {\n    background-color: var(--fc-neutral-bg-color);\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: sticky;\n      top: 0;\n      background: var(--fc-page-bg-color); /* for when headers are styled to be transparent and sticky */\n    }\n.fc {\n\n  /* only exists for aria reasons, hide for non-screen-readers */\n\n}\n.fc .fc-list-table thead {\n    position: absolute;\n    left: -10000px;\n  }\n.fc {\n\n  /* the table's border-style:hidden gets confused by hidden thead. force-hide top border of first cell */\n\n}\n.fc .fc-list-table tbody > tr:first-child th {\n    border-top: 0;\n  }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: \"\";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: var(--fc-neutral-bg-color);\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: var(--fc-list-event-hover-bg-color);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: calc(var(--fc-list-event-dot-width) / 2) solid var(--fc-event-border-color);\n    border-radius: calc(var(--fc-list-event-dot-width) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.injectStyles)(css_248z);
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/list',
  optionRefiners: OPTION_REFINERS,
  views: {
    list: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.ListView,
      buttonTextKey: 'list',
      listDayFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      } // like "January 1, 2016"
    },

    listDay: {
      type: 'list',
      duration: {
        days: 1
      },
      listDayFormat: {
        weekday: 'long'
      } // day-of-week is all we need. full date is probably in headerToolbar
    },

    listWeek: {
      type: 'list',
      duration: {
        weeks: 1
      },
      listDayFormat: {
        weekday: 'long'
      },
      listDaySideFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    listMonth: {
      type: 'list',
      duration: {
        month: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    },

    listYear: {
      type: 'list',
      duration: {
        year: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    }
  }
});



/***/ }),

/***/ 93640:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/list/internal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListView": () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);


class ListViewHeaderRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      textId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)()
    };
  }
  render() {
    let {
      theme,
      dateEnv,
      options,
      viewApi
    } = this.context;
    let {
      cellId,
      dayDate,
      todayRange
    } = this.props;
    let {
      textId
    } = this.state;
    let dayMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getDateMeta)(dayDate, todayRange);
    // will ever be falsy?
    let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
    // will ever be falsy? also, BAD NAME "alt"
    let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
    let renderProps = Object.assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text,
      sideText,
      navLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(this.context, dayDate),
      sideNavLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(this.context, dayDate, 'day', false)
    }, dayMeta);
    // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
      elTag: "tr",
      elClasses: ['fc-list-day', ...(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getDayClassNames)(dayMeta, theme)],
      elAttrs: {
        'data-date': (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.formatDayString)(dayDate)
      },
      renderProps: renderProps,
      generatorName: "dayHeaderContent",
      generator: options.dayHeaderContent || renderInnerContent,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, InnerContent =>
    // TODO: force-hide top border based on :first-child
    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
      scope: "colgroup",
      colSpan: 3,
      id: cellId,
      "aria-labelledby": textId
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-day-cushion', theme.getClass('tableCellShaded')]
    })));
  }
}
function renderInnerContent(props) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.text && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    id: props.textId,
    className: "fc-list-day-text"
  }, props.navLinkAttrs), props.text), props.sideText && /* not keyboard tabbable */(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    "aria-hidden": true,
    className: "fc-list-day-side-text"
  }, props.sideNavLinkAttrs), props.sideText));
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
});
class ListViewEventRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg,
      timeHeaderId,
      eventHeaderId,
      dateHeaderId
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.EventContainer, Object.assign({}, props, {
      elTag: "tr",
      elClasses: ['fc-list-event', seg.eventRange.def.url && 'fc-event-forced-url'],
      defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */,
      seg: seg,
      timeText: "",
      disableDragging: true,
      disableResizing: true
    }), (InnerContent, eventContentArg) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-list-event-graphic"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "fc-list-event-dot",
      style: {
        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
      }
    })), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "td",
      elClasses: ['fc-list-event-title'],
      elAttrs: {
        headers: `${eventHeaderId} ${dateHeaderId}`
      }
    })));
  }
}
function renderEventInnerContent(seg, context) {
  let interactiveAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegAnchorAttrs)(seg, context);
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  let {
    options
  } = context;
  if (options.displayEventTime !== false) {
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    let doAllDay = false;
    let timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.isMultiDayRange)(seg.eventRange.range)) {
      // TODO: use (!isStart || !isEnd) instead?
      if (seg.isStart) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildSegTimeText)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildSegTimeText)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildSegTimeText)(seg, timeFormat, context);
    }
    if (doAllDay) {
      let renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
        elTag: "td",
        elClasses: ['fc-list-event-time'],
        elAttrs: {
          headers: `${timeHeaderId} ${dateHeaderId}`
        },
        renderProps: renderProps,
        generatorName: "allDayContent",
        generator: options.allDayContent || renderAllDayInner,
        classNameGenerator: options.allDayClassNames,
        didMount: options.allDayDidMount,
        willUnmount: options.allDayWillUnmount
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      className: "fc-list-event-time"
    }, timeText);
  }
  return null;
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
class ListView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.computeDateVars = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(computeDateVars);
    this.eventStoreToSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(this._eventStoreToSegs);
    this.state = {
      timeHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)(),
      eventHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)(),
      dateHeaderIdRoot: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueDomId)()
    };
    this.setRootEl = rootEl => {
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dayDates,
      dayRanges
    } = this.computeDateVars(props.dateProfile);
    let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContainer, {
      elRef: this.setRootEl,
      elClasses: ['fc-list', context.theme.getClass('table'), context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : ''],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Scroller, {
      liquid: !props.isHeightAuto,
      overflowX: props.isHeightAuto ? 'visible' : 'hidden',
      overflowY: props.isHeightAuto ? 'visible' : 'auto'
    }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage()));
  }
  renderEmptyMessage() {
    let {
      options,
      viewApi
    } = this.context;
    let renderProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
      elTag: "div",
      elClasses: ['fc-list-empty'],
      renderProps: renderProps,
      generatorName: "noEventsContent",
      generator: options.noEventsContent || renderNoEventsInner,
      classNameGenerator: options.noEventsClassNames,
      didMount: options.noEventsDidMount,
      willUnmount: options.noEventsWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-empty-cushion']
    }));
  }
  renderSegList(allSegs, dayDates) {
    let {
      theme,
      options
    } = this.context;
    let {
      timeHeaderId,
      eventHeaderId,
      dateHeaderIdRoot
    } = this.state;
    let segsByDay = groupSegsByDay(allSegs); // sparse array
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowTimer, {
      unit: "day"
    }, (nowDate, todayRange) => {
      let innerNodes = [];
      for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        let daySegs = segsByDay[dayIndex];
        if (daySegs) {
          // sparse array, so might be undefined
          let dayStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.formatDayString)(dayDates[dayIndex]);
          let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
          // append a day header
          innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, {
            key: dayStr,
            cellId: dateHeaderId,
            dayDate: dayDates[dayIndex],
            todayRange: todayRange
          }));
          daySegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.sortEventSegs)(daySegs, options.eventOrder);
          for (let seg of daySegs) {
            innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, Object.assign({
              key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */,
              seg: seg,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId: timeHeaderId,
              eventHeaderId: eventHeaderId,
              dateHeaderId: dateHeaderId
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange, nowDate))));
          }
        }
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
        className: 'fc-list-table ' + theme.getClass('table')
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: timeHeaderId
      }, options.timeHint), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        "aria-hidden": true
      }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: eventHeaderId
      }, options.eventHint))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes));
    });
  }
  _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.sliceEventStore)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  }
  eventRangesToSegs(eventRanges, dayRanges) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  }
  eventRangeToSegs(eventRange, dayRanges) {
    let {
      dateEnv
    } = this.context;
    let {
      nextDayThreshold
    } = this.context.options;
    let range = eventRange.range;
    let allDay = eventRange.def.allDay;
    let dayIndex;
    let segRange;
    let seg;
    let segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.intersectRanges)(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        // detect when range won't go fully into the next day,
        // and mutate the latest seg to the be the end.
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  }
}
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  let dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateProfile.renderRange.start);
  let viewEnd = dateProfile.renderRange.end;
  let dayDates = [];
  let dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(dayStart, 1)
    });
    dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(dayStart, 1);
  }
  return {
    dayDates,
    dayRanges
  };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
  let segsByDay = []; // sparse array
  let i;
  let seg;
  for (i = 0; i < segs.length; i += 1) {
    seg = segs[i];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}


/***/ }),

/***/ 32611:
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 51176);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 56372);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid/internal.js */ 96355);





const OPTION_REFINERS = {
  allDaySlot: Boolean
};
var css_248z = "\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid var(--fc-event-border-color);\n  background-color: var(--fc-event-bg-color)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: var(--fc-event-text-color);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: var(--fc-event-resizer-thickness);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: calc(var(--fc-event-resizer-thickness) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: calc(var(--fc-event-resizer-thickness) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: calc(var(--fc-event-resizer-dot-total-width) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: calc(var(--fc-event-resizer-dot-total-width) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: calc(var(--fc-event-resizer-dot-total-width) / -2);\n    }\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: var(--fc-today-bg-color);\n    }\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n    }\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n.fc {\n\n  /* bg */\n\n}\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n.fc {\n\n  /* now indicator */\n\n}\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n.fc-timegrid-event-harness {\n  position: absolute /* top/left/right/bottom will all be set by JS */\n}\n.fc-timegrid-event-harness > .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0; /* for when not yet positioned */\n    bottom: 0; /* \" */\n    left: 0;\n    right: 0;\n  }\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror,\n.fc-timegrid-more-link {\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color);\n}\n.fc-timegrid-event,\n.fc-timegrid-more-link { /* events need to be root */\n  font-size: var(--fc-small-font-size);\n  border-radius: 3px;\n}\n.fc-timegrid-event { /* events need to be root */\n  margin-bottom: 1px /* give some space from bottom */\n}\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: var(--fc-small-font-size);\n    margin-bottom: 1px;\n  }\n.fc-timegrid-event-short .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n.fc-timegrid-event-short .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n.fc-timegrid-event-short .fc-event-title {\n    font-size: var(--fc-small-font-size)\n  }\n.fc-timegrid-more-link { /* does NOT inherit from fc-timegrid-event */\n  position: absolute;\n  z-index: 9999; /* hack */\n  color: var(--fc-more-link-text-color);\n  background: var(--fc-more-link-bg-color);\n  cursor: pointer;\n  margin-bottom: 1px; /* match space below fc-timegrid-event */\n}\n.fc-timegrid-more-link-inner { /* has fc-sticky */\n  padding: 3px 2px;\n  top: 0;\n}\n.fc-direction-ltr .fc-timegrid-more-link {\n    right: 0;\n  }\n.fc-direction-rtl .fc-timegrid-more-link {\n    left: 0;\n  }\n.fc {\n\n  /* line */\n\n}\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: var(--fc-now-indicator-color);\n    border-width: 1px 0 0;\n  }\n.fc {\n\n  /* arrow */\n\n}\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: var(--fc-now-indicator-color);\n  }\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_2__.injectStyles)(css_248z);
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/timegrid',
  initialView: 'timeGridWeek',
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: '00:30:00',
      slotEventOverlap: true // a bad name. confused with overlap/constraint system
    },

    timeGridDay: {
      type: 'timeGrid',
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: 'timeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});


/***/ }),

/***/ 56372:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/internal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayTimeCols": () => (/* binding */ DayTimeCols),
/* harmony export */   "DayTimeColsSlicer": () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   "DayTimeColsView": () => (/* binding */ DayTimeColsView),
/* harmony export */   "TimeCols": () => (/* binding */ TimeCols),
/* harmony export */   "TimeColsSlatsCoords": () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   "TimeColsView": () => (/* binding */ TimeColsView),
/* harmony export */   "buildDayRanges": () => (/* binding */ buildDayRanges),
/* harmony export */   "buildSlatMetas": () => (/* binding */ buildSlatMetas),
/* harmony export */   "buildTimeColsModel": () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 57393);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 98077);
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid/internal.js */ 96355);



class AllDaySplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Splitter {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(dateSpan) {
    if (dateSpan.allDay) {
      return ['allDay'];
    }
    return ['timed'];
  }
  getKeysForEventDef(eventDef) {
    if (!eventDef.allDay) {
      return ['timed'];
    }
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.hasBgRendering)(eventDef)) {
      return ['timed', 'allDay'];
    }
    return ['allDay'];
  }
}
const DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
});
function TimeColsAxisCell(props) {
  let classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-label', props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'];
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContextType.Consumer, null, context => {
    if (!props.isLabeled) {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
        className: classNames.join(' '),
        "data-time": props.isoTimeStr
      });
    }
    let {
      dateEnv,
      options,
      viewApi
    } = context;
    let labelFormat =
    // TODO: fully pre-parse
    options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)(options.slotLabelFormat[0]) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)(options.slotLabelFormat);
    let renderProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
      elTag: "td",
      elClasses: classNames,
      elAttrs: {
        'data-time': props.isoTimeStr
      },
      renderProps: renderProps,
      generatorName: "slotLabelContent",
      generator: options.slotLabelContent || renderInnerContent,
      classNameGenerator: options.slotLabelClassNames,
      didMount: options.slotLabelDidMount,
      willUnmount: options.slotLabelWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion']
    })));
  });
}
function renderInnerContent(props) {
  return props.text;
}
class TimeBodyAxis extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    return this.props.slatMetas.map(slatMeta => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      key: slatMeta.key
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta))));
  }
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  week: 'short'
});
const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
class TimeColsView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.scrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      slatCoords: null
    };
    this.handleScrollTopRequest = scrollTop => {
      let scrollerEl = this.scrollerElRef.current;
      if (scrollerEl) {
        // TODO: not sure how this could ever be null. weirdness with the reducer
        scrollerEl.scrollTop = scrollTop;
      }
    };
    /* Header Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    this.renderHeadAxis = (rowKey, frameHeight = '') => {
      let {
        options
      } = this.context;
      let {
        dateProfile
      } = this.props;
      let range = dateProfile.renderRange;
      let dayCnt = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.diffDays)(range.start, range.end);
      // only do in day views (to avoid doing in week views that dont need it)
      let navLinkAttrs = dayCnt === 1 ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildNavLinkAttrs)(this.context, range.start, 'week') : {};
      if (options.weekNumbers && rowKey === 'day') {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.WeekNumberContainer, {
          elTag: "th",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', 'fc-timegrid-axis-frame-liquid'].join(' '),
          style: {
            height: frameHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "a",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner'],
          elAttrs: navLinkAttrs
        })));
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        "aria-hidden": true,
        className: "fc-timegrid-axis"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-axis-frame",
        style: {
          height: frameHeight
        }
      }));
    };
    /* Table Component Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
    // but DayGrid still needs to have classNames on inner elements in order to measure.
    this.renderTableRowAxis = rowHeight => {
      let {
        options,
        viewApi
      } = this.context;
      let renderProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (
        // TODO: make reusable hook. used in list view too
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
          elTag: "td",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          renderProps: renderProps,
          generatorName: "allDayContent",
          generator: options.allDayContent || renderAllDayInner,
          classNameGenerator: options.allDayClassNames,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''].join(' '),
          style: {
            height: rowHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "span",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner']
        })))
      );
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
    let {
      context,
      props
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        chunk: {
          content: allDayContent
        }
      });
      sections.push({
        type: 'body',
        key: 'all-day-divider',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContainer, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.SimpleScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [{
        width: 'shrink'
      }],
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      context,
      props
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyHeaderDates)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getStickyFooterScrollbar)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: arg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          content: allDayContent
        }]
      });
      sections.push({
        key: 'all-day-divider',
        type: 'body',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          colSpan: 2,
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    let isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [{
        key: 'axis',
        content: arg =>
        // TODO: make this now-indicator arrow more DRY with TimeColsContent
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-axis-chunk"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
          "aria-hidden": true,
          style: {
            height: arg.expandRows ? arg.clientHeight : ''
          }
        }, arg.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, {
          slatMetas: slatMetas
        }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-now-indicator-container"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowTimer, {
          unit: isNowIndicator ? 'minute' : 'day' /* hacky */
        }, nowDate => {
          let nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate); // might return void
          if (typeof nowIndicatorTop === 'number') {
            return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowIndicatorContainer, {
              elClasses: ['fc-timegrid-now-indicator-arrow'],
              elStyle: {
                top: nowIndicatorTop
              },
              isAxis: true,
              date: nowDate
            });
          }
          return null;
        })))
      }, {
        key: 'cols',
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        key: 'footer',
        type: 'footer',
        isSticky: true,
        chunks: [{
          key: 'axis',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.renderScrollShim
        }, {
          key: 'cols',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.renderScrollShim
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ViewContainer, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: false,
      colGroups: [{
        width: 'shrink',
        cols: [{
          width: 'shrink'
        }]
      }, {
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let {
      dayMaxEvents,
      dayMaxEventRows
    } = this.context.options;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
      // is auto?
      dayMaxEvents = undefined;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
    }

    return {
      dayMaxEvents,
      dayMaxEventRows
    };
  }
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
class TimeColsSlatsCoords {
  constructor(positions, dateProfile, slotDuration) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  safeComputeTop(date) {
    let {
      dateProfile
    } = this;
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.rangeContainsMarker)(dateProfile.currentRange, date)) {
      let startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(date);
      let timeMs = date.valueOf() - startOfDayDate.valueOf();
      if (timeMs >= (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(dateProfile.slotMinTime) && timeMs < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(dateProfile.slotMaxTime)) {
        return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createDuration)(timeMs));
      }
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(when);
    }
    return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createDuration)(when.valueOf() - startOfDayDate.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(duration) {
    let {
      positions,
      dateProfile
    } = this;
    let len = positions.els.length;
    // floating-point value of # of slots covered
    let slatCoverage = (duration.milliseconds - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(dateProfile.slotMinTime)) / (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(this.slotDuration);
    let slatIndex;
    let slatRemainder;
    // compute a floating-point number for how many slats should be progressed through.
    // from 0 to number of slats (inclusive)
    // constrained because slotMinTime/slotMaxTime might be customized.
    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage);
    // an integer index of the furthest whole slat
    // from 0 to number slats (*exclusive*, so len-1)
    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1);
    // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
    // could be 1.0 if slatCoverage is covering *all* the slots
    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  }
}
class TimeColsSlatsBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      slatElRefs
    } = props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map((slatMeta, i) => {
      let renderProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
        key: slatMeta.key,
        ref: slatElRefs.createRef(slatMeta.key)
      }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ContentContainer, {
        elTag: "td",
        elClasses: ['fc-timegrid-slot', 'fc-timegrid-slot-lane', !slatMeta.isLabeled && 'fc-timegrid-slot-minor'],
        elAttrs: {
          'data-time': slatMeta.isoTimeStr
        },
        renderProps: renderProps,
        generatorName: "slotLaneContent",
        generator: options.slotLaneContent,
        classNameGenerator: options.slotLaneClassNames,
        didMount: options.slotLaneDidMount,
        willUnmount: options.slotLaneWillUnmount
      }));
    }));
  }
}

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
class TimeColsSlats extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.slatElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.rootElRef,
      className: "fc-timegrid-slots"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      "aria-hidden": true,
      className: context.theme.getClass('table'),
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth,
        height: props.minHeight
      }
    }, props.tableColGroupNode /* relies on there only being a single <col> for the axis */, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, {
      slatElRefs: this.slatElRefs,
      axis: props.axis,
      slatMetas: props.slatMetas
    })));
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  }
  updateSizing() {
    let {
      context,
      props
    } = this;
    if (props.onCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      let rootEl = this.rootElRef.current;
      if (rootEl.offsetHeight) {
        // not hidden by css
        props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
      }
    }
  }
}
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(slatMeta => elMap[slatMeta.key]);
}
function splitSegsByCol(segs, colCnt) {
  let segsByCol = [];
  let i;
  for (i = 0; i < colCnt; i += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i = 0; i < segs.length; i += 1) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.col].segs.push(seg);
    }
  }
  return byRow;
}
class TimeColMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.MoreLinkContainer, {
      elClasses: ['fc-timegrid-more-link'],
      elStyle: {
        top: props.top,
        bottom: props.bottom
      },
      allDayDate: null,
      moreCnt: props.hiddenSegs.length,
      allSegs: props.hiddenSegs,
      hiddenSegs: props.hiddenSegs,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props),
      defaultGenerator: renderMoreLinkInner
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky']
    }));
  }
}
function renderMoreLinkInner(props) {
  return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  let hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.SegHierarchy();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.groupIntersectingEntries)(hiddenEntries);
  let web = buildWeb(hierarchy);
  web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
  let segRects = webToRects(web);
  return {
    segRects,
    hiddenGroups
  };
}
function buildWeb(hierarchy) {
  const {
    entriesByLevel
  } = hierarchy;
  const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
    let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    let nextLevelRes = buildNodes(siblingRange, buildNode);
    let entry = entriesByLevel[level][lateral];
    return [Object.assign(Object.assign({}, entry), {
      nextLevelNodes: nextLevelRes[0]
    }), entry.thickness + nextLevelRes[1] // the pressure builds
    ];
  });

  return buildNodes(entriesByLevel.length ? {
    level: 0,
    lateralStart: 0,
    lateralEnd: entriesByLevel[0].length
  } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  let {
    level,
    lateralStart,
    lateralEnd
  } = siblingRange;
  let lateral = lateralStart;
  let pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [pairs.map(extractNode), pairs[0][1] // first item's pressure
  ];
}

function cmpDescPressures(a, b) {
  return b[1] - a[1];
}
function extractNode(a) {
  return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  let {
    levelCoords,
    entriesByLevel
  } = hierarchy;
  let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  let levelCnt = levelCoords.length;
  let level = subjectLevel;
  // skip past levels that are too high up
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1); // do nothing
  for (; level < levelCnt; level += 1) {
    let entries = entriesByLevel[level];
    let entry;
    let searchIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(entries, subjectEntry.span.start, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getEntrySpanEnd);
    let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
    let lateralEnd = lateralStart;
    while (
    // loop through entries that horizontally intersect
    (entry = entries[lateralEnd]) &&
    // but not past the whole seg list
    entry.span.start < subjectEntry.span.end) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return {
        level,
        lateralStart,
        lateralEnd
      };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  const stretchNode = cacheable((node, startCoord, prevThickness) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(node), (node, startCoord, prevThickness) => {
    let {
      nextLevelNodes,
      thickness
    } = node;
    let allThickness = thickness + prevThickness;
    let thicknessFraction = thickness / allThickness;
    let endCoord;
    let newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      for (let childNode of nextLevelNodes) {
        if (endCoord === undefined) {
          let res = stretchNode(childNode, startCoord, allThickness);
          endCoord = res[0];
          newChildren.push(res[1]);
        } else {
          let res = stretchNode(childNode, endCoord, 0);
          newChildren.push(res[1]);
        }
      }
    }
    let newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, Object.assign(Object.assign({}, node), {
      thickness: newThickness,
      nextLevelNodes: newChildren
    })];
  });
  return topLevelNodes.map(node => stretchNode(node, 0, 0)[1]);
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
  let rects = [];
  const processNode = cacheable((node, levelCoord, stackDepth) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEntryKey)(node), (node, levelCoord, stackDepth) => {
    let rect = Object.assign(Object.assign({}, node), {
      levelCoord,
      stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    let stackForward = 0;
    for (let node of nodes) {
      stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
  const cache = {};
  return (...args) => {
    let key = keyFunc(...args);
    return key in cache ? cache[key] : cache[key] = workFunc(...args);
  };
}
function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
  let vcoords = [];
  if (slatCoords) {
    for (let i = 0; i < segs.length; i += 1) {
      let seg = segs[i];
      let spanStart = slatCoords.computeDateTop(seg.start, colDate);
      let spanEnd = Math.max(spanStart + (eventMinHeight || 0),
      // :(
      slatCoords.computeDateTop(seg.end, colDate));
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd) //
      });
    }
  }

  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords,
// might not have for every seg
eventOrderStrict, eventMaxStack) {
  let segInputs = [];
  let dumbSegs = []; // segs without coords
  for (let i = 0; i < segs.length; i += 1) {
    let vcoords = segVCoords[i];
    if (vcoords) {
      segInputs.push({
        index: i,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i]);
    }
  }
  let {
    segRects,
    hiddenGroups
  } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
  let segPlacements = [];
  for (let segRect of segRects) {
    segPlacements.push({
      seg: segs[segRect.index],
      rect: segRect
    });
  }
  for (let dumbSeg of dumbSegs) {
    segPlacements.push({
      seg: dumbSeg,
      rect: null
    });
  }
  return {
    segPlacements,
    hiddenGroups
  };
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createFormatter)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
});
class TimeColEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  render() {
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.StandardEvent, Object.assign({}, this.props, {
      elClasses: ['fc-timegrid-event', 'fc-v-event', this.props.isShort && 'fc-timegrid-event-short'],
      defaultTimeFormat: DEFAULT_TIME_FORMAT
    }));
  }
}
class TimeCol extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.sortEventSegs);
  }
  // TODO: memoize event-placement?
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let isSelectMirror = options.selectMirror;
    let mirrorSegs =
    // yuck
    props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
    let interactionAffectedInstances =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayCellContainer, {
      elTag: "td",
      elRef: props.elRef,
      elClasses: ['fc-timegrid-col', ...(props.extraClassNames || [])],
      elAttrs: Object.assign({
        role: 'gridcell'
      }, props.extraDataAttrs),
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraRenderProps: props.extraRenderProps
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-bg"
    }, this.renderFillSegs(props.businessHourSegs, 'non-business'), this.renderFillSegs(props.bgEventSegs, 'bg-event'), this.renderFillSegs(props.dateSelectionSegs, 'highlight')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, this.renderNowIndicator(props.nowIndicatorSegs)), (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.hasCustomDayCellContent)(options) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-col-misc']
    })));
  }
  renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      props
    } = this;
    if (props.forPrint) {
      return renderPlainFgSegs(sortedFgSegs, props);
    }
    return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
  }
  renderPositionedFgSegs(segs,
  // if not mirror, needs to be sorted
  segIsInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      eventMaxStack,
      eventShortHeight,
      eventOrderStrict,
      eventMinHeight
    } = this.context.options;
    let {
      date,
      slatCoords,
      eventSelection,
      todayRange,
      nowDate
    } = this.props;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
    let {
      segPlacements,
      hiddenGroups
    } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderHiddenGroups(hiddenGroups, segs), segPlacements.map(segPlacement => {
      let {
        seg,
        rect
      } = segPlacement;
      let instanceId = seg.eventRange.instance.instanceId;
      let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
      let vStyle = computeSegVStyle(rect && rect.span);
      let hStyle = !isMirror && rect ? this.computeSegHStyle(rect) : {
        left: 0,
        right: 0
      };
      let isInset = Boolean(rect) && rect.stackForward > 0;
      let isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight; // look at other places for this problem
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: 'fc-timegrid-event-harness' + (isInset ? ' fc-timegrid-event-harness-inset' : ''),
        key: instanceId,
        style: Object.assign(Object.assign({
          visibility: isVisible ? '' : 'hidden'
        }, vStyle), hStyle)
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
        seg: seg,
        isDragging: isDragging,
        isResizing: isResizing,
        isDateSelecting: isDateSelecting,
        isSelected: instanceId === eventSelection,
        isShort: isShort
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange, nowDate))));
    }));
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(hiddenGroups, segs) {
    let {
      extraDateSpan,
      dateProfile,
      todayRange,
      nowDate,
      eventSelection,
      eventDrag,
      eventResize
    } = this.props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(hiddenGroup => {
      let positionCss = computeSegVStyle(hiddenGroup.span);
      let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildIsoString)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.computeEarliestSegStart)(hiddenSegs)),
        hiddenSegs: hiddenSegs,
        top: positionCss.top,
        bottom: positionCss.bottom,
        extraDateSpan: extraDateSpan,
        dateProfile: dateProfile,
        todayRange: todayRange,
        nowDate: nowDate,
        eventSelection: eventSelection,
        eventDrag: eventDrag,
        eventResize: eventResize
      });
    }));
  }
  renderFillSegs(segs, fillType) {
    let {
      props,
      context
    } = this;
    let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
    let children = segVCoords.map((vcoords, i) => {
      let seg = segs[i];
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.buildEventRangeKey)(seg.eventRange),
        className: "fc-timegrid-bg-harness",
        style: computeSegVStyle(vcoords)
      }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BgEvent, Object.assign({
        seg: seg
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, props.todayRange, props.nowDate))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.renderFill)(fillType));
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
  }
  renderNowIndicator(segs) {
    let {
      slatCoords,
      date
    } = this.props;
    if (!slatCoords) {
      return null;
    }
    return segs.map((seg, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowIndicatorContainer
    // key doesn't matter. will only ever be one
    , {
      // key doesn't matter. will only ever be one
      key: i,
      elClasses: ['fc-timegrid-now-indicator-line'],
      elStyle: {
        top: slatCoords.computeDateTop(seg.start, date)
      },
      isAxis: false,
      date: date
    }));
  }
  computeSegHStyle(segHCoords) {
    let {
      isRtl,
      options
    } = this.context;
    let shouldOverlap = options.slotEventOverlap;
    let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
    let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
    let left; // amount of space from left edge, a fraction of the total width
    let right; // amount of space from right edge, a fraction of the total width
    if (shouldOverlap) {
      // double the width, but don't go beyond the maximum forward coordinate (1.0)
      farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
    }
    if (isRtl) {
      left = 1 - farCoord;
      right = nearCoord;
    } else {
      left = nearCoord;
      right = 1 - farCoord;
    }
    let props = {
      zIndex: segHCoords.stackDepth + 1,
      left: left * 100 + '%',
      right: right * 100 + '%'
    };
    if (shouldOverlap && !segHCoords.stackForward) {
      // add padding to the edge so that forward stacked events don't cover the resizer's icon
      props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
    }

    return props;
  }
}
function renderPlainFgSegs(sortedFgSegs, {
  todayRange,
  nowDate,
  eventSelection,
  eventDrag,
  eventResize
}) {
  let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(seg => {
    let instanceId = seg.eventRange.instance.instanceId;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      key: instanceId,
      style: {
        visibility: hiddenInstances[instanceId] ? 'hidden' : ''
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
      seg: seg,
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: instanceId === eventSelection,
      isShort: false
    }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.getSegMeta)(seg, todayRange, nowDate))));
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return {
      top: '',
      bottom: ''
    };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map(segEntry => allSegs[segEntry.index]);
}
class TimeColsContent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super(...arguments);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByCol);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByCol);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByCol);
    this.splitNowIndicatorSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByCol);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitSegsByCol);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByCol);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(splitInteractionByCol);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.RefMap();
  }
  render() {
    let {
      props,
      context
    } = this;
    let nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate); // might return void
    let colCnt = props.cells.length;
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-cols",
      ref: this.rootElRef
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth
      }
    }, props.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      role: "row"
    }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-timegrid-col fc-timegrid-axis"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, typeof nowIndicatorTop === 'number' && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowIndicatorContainer, {
      elClasses: ['fc-timegrid-now-indicator-arrow'],
      elStyle: {
        top: nowIndicatorTop
      },
      isAxis: true,
      date: props.nowDate
    })))), props.cells.map((cell, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, {
      key: cell.key,
      elRef: this.cellElRefs.createRef(cell.key),
      dateProfile: props.dateProfile,
      date: cell.date,
      nowDate: props.nowDate,
      todayRange: props.todayRange,
      extraRenderProps: cell.extraRenderProps,
      extraDataAttrs: cell.extraDataAttrs,
      extraClassNames: cell.extraClassNames,
      extraDateSpan: cell.extraDateSpan,
      fgEventSegs: fgEventSegsByRow[i],
      bgEventSegs: bgEventSegsByRow[i],
      businessHourSegs: businessHourSegsByRow[i],
      nowIndicatorSegs: nowIndicatorSegsByRow[i],
      dateSelectionSegs: dateSelectionSegsByRow[i],
      eventDrag: eventDragByRow[i],
      eventResize: eventResizeByRow[i],
      slatCoords: props.slatCoords,
      eventSelection: props.eventSelection,
      forPrint: props.forPrint
    }))))));
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let {
      props
    } = this;
    if (props.onColCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      props.onColCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true,
      // horizontal
      false));
    }
  }
}
function collectCellEls(elMap, cells) {
  return cells.map(cell => elMap[cell.key]);
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
class TimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.processSlotOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(processSlotOptions);
    this.state = {
      slatCoords: null
    };
    this.handleRootEl = el => {
      if (el) {
        this.context.registerInteractiveComponent(this, {
          el,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
    this.handleScrollRequest = request => {
      let {
        onScrollTopRequest
      } = this.props;
      let {
        slatCoords
      } = this.state;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          let top = slatCoords.computeTimeTop(request.time);
          top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
          if (top) {
            top += 1; // to overcome top border that slots beyond the first have. looks better
          }

          onScrollTopRequest(top);
        }
        return true;
      }
      return false;
    };
    this.handleColCoords = colCoords => {
      this.colCoords = colCoords;
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
      if (this.props.onSlatCoords) {
        this.props.onSlatCoords(slatCoords);
      }
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-body",
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, {
      axis: props.axis,
      dateProfile: props.dateProfile,
      slatMetas: props.slatMetas,
      clientWidth: props.clientWidth,
      minHeight: props.expandRows ? props.clientHeight : '',
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */,
      onCoords: this.handleSlatCoords
    }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, {
      cells: props.cells,
      axis: props.axis,
      dateProfile: props.dateProfile,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange,
      nowDate: props.nowDate,
      nowIndicatorSegs: props.nowIndicatorSegs,
      clientWidth: props.clientWidth,
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.tableColGroupNode,
      slatCoords: state.slatCoords,
      onColCoords: this.handleColCoords,
      forPrint: props.forPrint
    }));
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(positionLeft, positionTop) {
    let {
      dateEnv,
      options
    } = this.context;
    let {
      colCoords
    } = this;
    let {
      dateProfile
    } = this.props;
    let {
      slatCoords
    } = this.state;
    let {
      snapDuration,
      snapsPerSlot
    } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
    let colIndex = colCoords.leftToIndex(positionLeft);
    let slatIndex = slatCoords.positions.topToIndex(positionTop);
    if (colIndex != null && slatIndex != null) {
      let cell = this.props.cells[colIndex];
      let slatTop = slatCoords.positions.tops[slatIndex];
      let slatHeight = slatCoords.positions.getHeight(slatIndex);
      let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
      let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
      let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      let dayDate = this.props.cells[colIndex].date;
      let time = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDurations)(dateProfile.slotMinTime, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.multiplyDuration)(snapDuration, snapIndex));
      let start = dateEnv.add(dayDate, time);
      let end = dateEnv.add(start, snapDuration);
      return {
        dateProfile,
        dateSpan: Object.assign({
          range: {
            start,
            end
          },
          allDay: false
        }, cell.extraDateSpan),
        dayEl: colCoords.els[colIndex],
        rect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        },
        layer: 0
      };
    }
    return null;
  }
}
function processSlotOptions(slotDuration, snapDurationOverride) {
  let snapDuration = snapDurationOverride || slotDuration;
  let snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.wholeDivideDurations)(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
    // TODO: say warning?
  }

  return {
    snapDuration,
    snapsPerSlot
  };
}
class DayTimeColsSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Slicer {
  sliceRange(range, dayRanges) {
    let segs = [];
    for (let col = 0; col < dayRanges.length; col += 1) {
      let segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.intersectRanges)(range, dayRanges[col]);
      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col
        });
      }
    }
    return segs;
  }
}
class DayTimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DateComponent {
  constructor() {
    super(...arguments);
    this.buildDayRanges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(buildDayRanges);
    this.slicer = new DayTimeColsSlicer();
    this.timeColsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dateProfile,
      dayTableModel
    } = props;
    let isNowIndicator = context.options.nowIndicator;
    let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
    // give it the first row of cells
    // TODO: would move this further down hierarchy, but sliceNowDate needs it
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.NowTimer, {
      unit: isNowIndicator ? 'minute' : 'day'
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, Object.assign({
      ref: this.timeColsRef
    }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
      forPrint: props.forPrint,
      axis: props.axis,
      dateProfile: dateProfile,
      slatMetas: props.slatMetas,
      slotDuration: props.slotDuration,
      cells: dayTableModel.cells[0],
      tableColGroupNode: props.tableColGroupNode,
      tableMinWidth: props.tableMinWidth,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      expandRows: props.expandRows,
      nowDate: nowDate,
      nowIndicatorSegs: isNowIndicator && this.slicer.sliceNowDate(nowDate, context, dayRanges),
      todayRange: todayRange,
      onScrollTopRequest: props.onScrollTopRequest,
      onSlatCoords: props.onSlatCoords
    })));
  }
}
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  let ranges = [];
  for (let date of dayTableModel.headerDates) {
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }
  return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
const STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  let dayStart = new Date(0);
  let slatTime = slotMinTime;
  let slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0);
  let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  let metas = [];
  while ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(slatTime) < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.asRoughMs)(slotMaxTime)) {
    let date = dateEnv.add(dayStart, slatTime);
    let isLabeled = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.wholeDivideDurations)(slatIterator, labelInterval) !== null;
    metas.push({
      date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.formatIsoTimeString)(date),
      isLabeled
    });
    slatTime = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDurations)(slatTime, slotDuration);
    slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.addDurations)(slatIterator, slotDuration);
  }
  return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
  let i;
  let labelInterval;
  let slotsPerLabel;
  // find the smallest stock label interval that results in more than one slots-per-label
  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
    labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.createDuration)(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.wholeDivideDurations)(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration; // fall back
}

class DayTimeColsView extends TimeColsView {
  constructor() {
    super(...arguments);
    this.buildTimeColsModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(buildTimeColsModel);
    this.buildSlatMetas = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.memoize)(buildSlatMetas);
  }
  render() {
    let {
      options,
      dateEnv,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let {
      dateProfile
    } = props;
    let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    let splitProps = this.allDaySplitter.splitProps(props);
    let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    let {
      dayMinWidth
    } = options;
    let hasAttachedAxis = !dayMinWidth;
    let hasDetachedAxis = dayMinWidth;
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayHeader, {
      dates: dayTableModel.headerDates,
      dateProfile: dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });
    let allDayContent = options.allDaySlot !== false && (contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.DayTable, Object.assign({}, splitProps.allDay, {
      dateProfile: dateProfile,
      dayTableModel: dayTableModel,
      nextDayThreshold: options.nextDayThreshold,
      tableMinWidth: contentArg.tableMinWidth,
      colGroupNode: contentArg.tableColGroupNode,
      renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null,
      showWeekNumbers: false,
      expandRows: false,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    }, this.getAllDayMaxEventProps())));
    let timeGridContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, Object.assign({}, splitProps.timed, {
      dayTableModel: dayTableModel,
      dateProfile: dateProfile,
      axis: hasAttachedAxis,
      slotDuration: options.slotDuration,
      slatMetas: slatMetas,
      forPrint: props.forPrint,
      tableColGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      onSlatCoords: this.handleSlatCoords,
      expandRows: contentArg.expandRows,
      onScrollTopRequest: this.handleScrollTopRequest
    }));
    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  }
}
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.DayTableModel(daySeries, false);
}


/***/ }),

/***/ 60743:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/fesm2020/ngx-color-picker.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cmyk": () => (/* binding */ Cmyk),
/* harmony export */   "ColorPickerComponent": () => (/* binding */ ColorPickerComponent),
/* harmony export */   "ColorPickerDirective": () => (/* binding */ ColorPickerDirective),
/* harmony export */   "ColorPickerModule": () => (/* binding */ ColorPickerModule),
/* harmony export */   "ColorPickerService": () => (/* binding */ ColorPickerService),
/* harmony export */   "Hsla": () => (/* binding */ Hsla),
/* harmony export */   "Hsva": () => (/* binding */ Hsva),
/* harmony export */   "Rgba": () => (/* binding */ Rgba),
/* harmony export */   "SliderDirective": () => (/* binding */ SliderDirective),
/* harmony export */   "TextDirective": () => (/* binding */ TextDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);




const _c0 = ["dialogPopup"];
const _c1 = ["hueSlider"];
const _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r1.cpArrowPosition)("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onDragEnd("saturation-lightness"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.hueSliderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1)("rgY", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 30)(2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onAddPresetColor($event, ctx_r22.selectedColor));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.cpAddColorButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.cpPresetColors && ctx_r4.cpPresetColors.length >= ctx_r4.cpMaxPresetColorsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r24.cmykText == null ? null : ctx_r24.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.onCyanInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.onMagentaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.onYellowInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.onBlackInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r9.format !== 3 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.m);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.k);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r38.hslaText == null ? null : ctx_r38.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "div", 35)(2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r45.onHueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.onSaturationInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.onLightnessInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r10.format !== 2 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 360)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.h);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.s);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r52.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r50.rgbaText == null ? null : ctx_r50.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "div", 35)(2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r57.onRedInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r59.onGreenInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r60.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r61.onBlueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r11.format !== 1 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.b);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r64.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r66.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r62.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 35)(2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r67.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r69.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.onHexInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r12.format !== 0 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hex-alpha", ctx_r12.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r12.hexText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r72.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r74.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r71.hslaText == null ? null : ctx_r71.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "div", 35)(2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r75.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r77.onValueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r13.hslaText == null ? null : ctx_r13.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47)(1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r78.onFormatToggle(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r80.onFormatToggle(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);
      const color_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r86.onRemovePresetColor($event, color_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r85.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);
      const color_r84 = restoredCtx.$implicit;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r89.setColorFromString(color_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r84 = ctx.$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r81.cpPresetColorsClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r81.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r82.cpPresetEmptyMessageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r82.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.cpPresetLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpPresetColors == null ? null : ctx_r15.cpPresetColors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r15.cpPresetColors == null ? null : ctx_r15.cpPresetColors.length) && ctx_r15.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r93.onCancelColor($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r91.cpCancelButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r91.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r95.onAcceptColor($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r92.cpOKButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r92.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cpCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.cpExtraTemplate);
  }
}
var ColorFormats = /*#__PURE__*/(() => {
  (function (ColorFormats) {
    ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
    ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
    ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
    ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
  })(ColorFormats || (ColorFormats = {}));
  return ColorFormats;
})();
class Rgba {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
class Hsva {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
}
class Hsla {
  constructor(h, s, l, a) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
}
class Cmyk {
  constructor(c, m, y, k, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }
}
function calculateAutoPositioning(elBounds, triggerElBounds) {
  // Defaults
  let usePositionX = 'right';
  let usePositionY = 'bottom';
  // Calculate collisions
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  // Generate X & Y position values
  if (collisionBottom) {
    usePositionY = 'top';
  }
  if (collisionTop) {
    usePositionY = 'bottom';
  }
  if (collisionLeft) {
    usePositionX = 'right';
  }
  if (collisionRight) {
    usePositionX = 'left';
  }
  // Choose the largest gap available
  if (collisionAll) {
    const postions = ['left', 'right', 'top', 'bottom'];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return 'bottom';
    }
    if (collisionBottom) {
      return 'top';
    }
    return top > bottom ? 'top' : 'bottom';
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return 'right';
    }
    if (collisionRight) {
      return 'left';
    }
    return left > right ? 'left' : 'right';
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = '';
  if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf('msie ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  // Other browser
  return false;
}
let TextDirective = /*#__PURE__*/(() => {
  class TextDirective {
    constructor() {
      this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    inputChange(event) {
      const value = event.target.value;
      if (this.rg === undefined) {
        this.newValue.emit(value);
      } else {
        const numeric = parseFloat(value);
        this.newValue.emit({
          v: numeric,
          rg: this.rg
        });
      }
    }
  }
  TextDirective.ɵfac = function TextDirective_Factory(t) {
    return new (t || TextDirective)();
  };
  TextDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TextDirective,
    selectors: [["", "text", ""]],
    hostBindings: function TextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) {
          return ctx.inputChange($event);
        });
      }
    },
    inputs: {
      rg: "rg",
      text: "text"
    },
    outputs: {
      newValue: "newValue"
    }
  });
  return TextDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SliderDirective = /*#__PURE__*/(() => {
  class SliderDirective {
    constructor(elRef) {
      this.elRef = elRef;
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.listenerMove = event => this.move(event);
      this.listenerStop = () => this.stop();
    }
    mouseDown(event) {
      this.start(event);
    }
    touchStart(event) {
      this.start(event);
    }
    move(event) {
      event.preventDefault();
      this.setCursor(event);
    }
    start(event) {
      this.setCursor(event);
      event.stopPropagation();
      document.addEventListener('mouseup', this.listenerStop);
      document.addEventListener('touchend', this.listenerStop);
      document.addEventListener('mousemove', this.listenerMove);
      document.addEventListener('touchmove', this.listenerMove);
      this.dragStart.emit();
    }
    stop() {
      document.removeEventListener('mouseup', this.listenerStop);
      document.removeEventListener('touchend', this.listenerStop);
      document.removeEventListener('mousemove', this.listenerMove);
      document.removeEventListener('touchmove', this.listenerMove);
      this.dragEnd.emit();
    }
    getX(event) {
      const position = this.elRef.nativeElement.getBoundingClientRect();
      const pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
      return pageX - position.left - window.pageXOffset;
    }
    getY(event) {
      const position = this.elRef.nativeElement.getBoundingClientRect();
      const pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
      return pageY - position.top - window.pageYOffset;
    }
    setCursor(event) {
      const width = this.elRef.nativeElement.offsetWidth;
      const height = this.elRef.nativeElement.offsetHeight;
      const x = Math.max(0, Math.min(this.getX(event), width));
      const y = Math.max(0, Math.min(this.getY(event), height));
      if (this.rgX !== undefined && this.rgY !== undefined) {
        this.newValue.emit({
          s: x / width,
          v: 1 - y / height,
          rgX: this.rgX,
          rgY: this.rgY
        });
      } else if (this.rgX === undefined && this.rgY !== undefined) {
        this.newValue.emit({
          v: y / height,
          rgY: this.rgY
        });
      } else if (this.rgX !== undefined && this.rgY === undefined) {
        this.newValue.emit({
          v: x / width,
          rgX: this.rgX
        });
      }
    }
  }
  SliderDirective.ɵfac = function SliderDirective_Factory(t) {
    return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  SliderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderDirective,
    selectors: [["", "slider", ""]],
    hostBindings: function SliderDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
          return ctx.mouseDown($event);
        })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
          return ctx.touchStart($event);
        });
      }
    },
    inputs: {
      rgX: "rgX",
      rgY: "rgY",
      slider: "slider"
    },
    outputs: {
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      newValue: "newValue"
    }
  });
  return SliderDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class SliderPosition {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
}
class SliderDimension {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
}
let ColorPickerService = /*#__PURE__*/(() => {
  class ColorPickerService {
    constructor() {
      this.active = null;
    }
    setActive(active) {
      if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
        this.active.closeDialog();
      }
      this.active = active;
    }
    hsva2hsla(hsva) {
      const h = hsva.h,
        s = hsva.s,
        v = hsva.v,
        a = hsva.a;
      if (v === 0) {
        return new Hsla(h, 0, 0, a);
      } else if (s === 0 && v === 1) {
        return new Hsla(h, 1, 1, a);
      } else {
        const l = v * (2 - s) / 2;
        return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
      }
    }
    hsla2hsva(hsla) {
      const h = Math.min(hsla.h, 1),
        s = Math.min(hsla.s, 1);
      const l = Math.min(hsla.l, 1),
        a = Math.min(hsla.a, 1);
      if (l === 0) {
        return new Hsva(h, 0, 0, a);
      } else {
        const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
        return new Hsva(h, 2 * (v - l) / v, v, a);
      }
    }
    hsvaToRgba(hsva) {
      let r, g, b;
      const h = hsva.h,
        s = hsva.s,
        v = hsva.v,
        a = hsva.a;
      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v, g = t, b = p;
          break;
        case 1:
          r = q, g = v, b = p;
          break;
        case 2:
          r = p, g = v, b = t;
          break;
        case 3:
          r = p, g = q, b = v;
          break;
        case 4:
          r = t, g = p, b = v;
          break;
        case 5:
          r = v, g = p, b = q;
          break;
        default:
          r = 0, g = 0, b = 0;
      }
      return new Rgba(r, g, b, a);
    }
    cmykToRgb(cmyk) {
      const r = (1 - cmyk.c) * (1 - cmyk.k);
      const g = (1 - cmyk.m) * (1 - cmyk.k);
      const b = (1 - cmyk.y) * (1 - cmyk.k);
      return new Rgba(r, g, b, cmyk.a);
    }
    rgbaToCmyk(rgba) {
      const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
      if (k === 1) {
        return new Cmyk(0, 0, 0, 1, rgba.a);
      } else {
        const c = (1 - rgba.r - k) / (1 - k);
        const m = (1 - rgba.g - k) / (1 - k);
        const y = (1 - rgba.b - k) / (1 - k);
        return new Cmyk(c, m, y, k, rgba.a);
      }
    }
    rgbaToHsva(rgba) {
      let h, s;
      const r = Math.min(rgba.r, 1),
        g = Math.min(rgba.g, 1);
      const b = Math.min(rgba.b, 1),
        a = Math.min(rgba.a, 1);
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      const v = max,
        d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
          default:
            h = 0;
        }
        h /= 6;
      }
      return new Hsva(h, s, v, a);
    }
    rgbaToHex(rgba, allowHex8) {
      /* eslint-disable no-bitwise */
      let hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
      if (allowHex8) {
        hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
      }
      /* eslint-enable no-bitwise */
      return hex;
    }
    normalizeCMYK(cmyk) {
      return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
    }
    denormalizeCMYK(cmyk) {
      return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
    }
    denormalizeRGBA(rgba) {
      return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    }
    stringToHsva(colorString = '', allowHex8 = false) {
      let hsva = null;
      colorString = (colorString || '').toLowerCase();
      const stringParsers = [{
        re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
        parse: function (execResult) {
          return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
        }
      }, {
        re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
        parse: function (execResult) {
          return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
        }
      }];
      if (allowHex8) {
        stringParsers.push({
          re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
          parse: function (execResult) {
            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
          }
        });
      } else {
        stringParsers.push({
          re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
          parse: function (execResult) {
            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
          }
        });
      }
      stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: function (execResult) {
          return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
        }
      });
      for (const key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
          const parser = stringParsers[key];
          const match = parser.re.exec(colorString),
            color = match && parser.parse(match);
          if (color) {
            if (color instanceof Rgba) {
              hsva = this.rgbaToHsva(color);
            } else if (color instanceof Hsla) {
              hsva = this.hsla2hsva(color);
            }
            return hsva;
          }
        }
      }
      return hsva;
    }
    outputFormat(hsva, outputFormat, alphaChannel) {
      if (outputFormat === 'auto') {
        outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
      }
      switch (outputFormat) {
        case 'hsla':
          const hsla = this.hsva2hsla(hsva);
          const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
          if (hsva.a < 1 || alphaChannel === 'always') {
            return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
          } else {
            return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
          }
        case 'rgba':
          const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
          if (hsva.a < 1 || alphaChannel === 'always') {
            return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
          } else {
            return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
          }
        default:
          const allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
          return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
      }
    }
  }
  ColorPickerService.ɵfac = function ColorPickerService_Factory(t) {
    return new (t || ColorPickerService)();
  };
  ColorPickerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ColorPickerService,
    factory: ColorPickerService.ɵfac
  });
  return ColorPickerService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Do not store that on the class instance since the condition will be run
// every time the class is created.
const SUPPORTS_TOUCH = typeof window !== 'undefined' && 'ontouchstart' in window;
let ColorPickerComponent = /*#__PURE__*/(() => {
  class ColorPickerComponent {
    constructor(ngZone, elRef, cdRef, document, platformId, service) {
      this.ngZone = ngZone;
      this.elRef = elRef;
      this.cdRef = cdRef;
      this.document = document;
      this.platformId = platformId;
      this.service = service;
      this.isIE10 = false;
      this.dialogArrowSize = 10;
      this.dialogArrowOffset = 15;
      this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
      this.useRootViewContainer = false;
      this.eyeDropperSupported = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && 'EyeDropper' in this.document.defaultView;
    }
    handleEsc(event) {
      if (this.show && this.cpDialogDisplay === 'popup') {
        this.onCancelColor(event);
      }
    }
    handleEnter(event) {
      if (this.show && this.cpDialogDisplay === 'popup') {
        this.onAcceptColor(event);
      }
    }
    ngOnInit() {
      this.slider = new SliderPosition(0, 0, 0, 0);
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      if (this.cpCmykEnabled) {
        this.format = ColorFormats.CMYK;
      } else if (this.cpOutputFormat === 'rgba') {
        this.format = ColorFormats.RGBA;
      } else if (this.cpOutputFormat === 'hsla') {
        this.format = ColorFormats.HSLA;
      } else {
        this.format = ColorFormats.HEX;
      }
      this.listenerMouseDown = event => {
        this.onMouseDown(event);
      };
      this.listenerResize = () => {
        this.onResize();
      };
      this.openDialog(this.initialColor, false);
    }
    ngOnDestroy() {
      this.closeDialog();
    }
    ngAfterViewInit() {
      if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
        const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        this.updateColorPicker(false);
        this.cdRef.detectChanges();
      }
    }
    openDialog(color, emit = true) {
      this.service.setActive(this);
      if (!this.width) {
        this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
      }
      if (!this.height) {
        this.height = 320;
      }
      this.setInitialColor(color);
      this.setColorFromString(color, emit);
      this.openColorPicker();
    }
    closeDialog() {
      this.closeColorPicker();
    }
    setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
      this.setInitialColor(color);
      this.setColorMode(cpColorMode);
      this.isIE10 = detectIE() === 10;
      this.directiveInstance = instance;
      this.directiveElementRef = elementRef;
      this.cpDisableInput = cpDisableInput;
      this.cpCmykEnabled = cpCmykEnabled;
      this.cpAlphaChannel = cpAlphaChannel;
      this.cpOutputFormat = cpOutputFormat;
      this.cpDialogDisplay = cpDialogDisplay;
      this.cpIgnoredElements = cpIgnoredElements;
      this.cpSaveClickOutside = cpSaveClickOutside;
      this.cpCloseClickOutside = cpCloseClickOutside;
      this.useRootViewContainer = cpUseRootViewContainer;
      this.width = this.cpWidth = parseInt(cpWidth, 10);
      this.height = this.cpHeight = parseInt(cpHeight, 10);
      this.cpPosition = cpPosition;
      this.cpPositionOffset = parseInt(cpPositionOffset, 10);
      this.cpOKButton = cpOKButton;
      this.cpOKButtonText = cpOKButtonText;
      this.cpOKButtonClass = cpOKButtonClass;
      this.cpCancelButton = cpCancelButton;
      this.cpCancelButtonText = cpCancelButtonText;
      this.cpCancelButtonClass = cpCancelButtonClass;
      this.cpEyeDropper = cpEyeDropper;
      this.fallbackColor = cpFallbackColor || '#fff';
      this.setPresetConfig(cpPresetLabel, cpPresetColors);
      this.cpPresetColorsClass = cpPresetColorsClass;
      this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
      this.cpPresetEmptyMessage = cpPresetEmptyMessage;
      this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
      this.cpAddColorButton = cpAddColorButton;
      this.cpAddColorButtonText = cpAddColorButtonText;
      this.cpAddColorButtonClass = cpAddColorButtonClass;
      this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
      this.cpTriggerElement = cpTriggerElement;
      this.cpExtraTemplate = cpExtraTemplate;
      if (!cpPositionRelativeToArrow) {
        this.dialogArrowOffset = 0;
      }
      if (cpDialogDisplay === 'inline') {
        this.dialogArrowSize = 0;
        this.dialogArrowOffset = 0;
      }
      if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
        this.cpAlphaChannel = 'disabled';
      }
    }
    setColorMode(mode) {
      switch (mode.toString().toUpperCase()) {
        case '1':
        case 'C':
        case 'COLOR':
          this.cpColorMode = 1;
          break;
        case '2':
        case 'G':
        case 'GRAYSCALE':
          this.cpColorMode = 2;
          break;
        case '3':
        case 'P':
        case 'PRESETS':
          this.cpColorMode = 3;
          break;
        default:
          this.cpColorMode = 1;
      }
    }
    setInitialColor(color) {
      this.initialColor = color;
    }
    setPresetConfig(cpPresetLabel, cpPresetColors) {
      this.cpPresetLabel = cpPresetLabel;
      this.cpPresetColors = cpPresetColors;
    }
    setColorFromString(value, emit = true, update = true) {
      let hsva;
      if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
        hsva = this.service.stringToHsva(value, true);
        if (!hsva && !this.hsva) {
          hsva = this.service.stringToHsva(value, false);
        }
      } else {
        hsva = this.service.stringToHsva(value, false);
      }
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(this.fallbackColor, false);
      }
      if (hsva) {
        this.hsva = hsva;
        this.sliderH = this.hsva.h;
        if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
          this.hsva.a = 1;
        }
        this.updateColorPicker(emit, update);
      }
    }
    onResize() {
      if (this.position === 'fixed') {
        this.setDialogPosition();
      } else if (this.cpDialogDisplay !== 'inline') {
        this.closeColorPicker();
      }
    }
    onDragEnd(slider) {
      this.directiveInstance.sliderDragEnd({
        slider: slider,
        color: this.outputColor
      });
    }
    onDragStart(slider) {
      this.directiveInstance.sliderDragStart({
        slider: slider,
        color: this.outputColor
      });
    }
    onMouseDown(event) {
      if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(item => item === event.target).length === 0) {
        this.ngZone.run(() => {
          if (this.cpSaveClickOutside) {
            this.directiveInstance.colorSelected(this.outputColor);
          } else {
            this.hsva = null;
            this.setColorFromString(this.initialColor, false);
            if (this.cpCmykEnabled) {
              this.directiveInstance.cmykChanged(this.cmykColor);
            }
            this.directiveInstance.colorChanged(this.initialColor);
            this.directiveInstance.colorCanceled();
          }
          if (this.cpCloseClickOutside) {
            this.closeColorPicker();
          }
        });
      }
    }
    onAcceptColor(event) {
      event.stopPropagation();
      if (this.outputColor) {
        this.directiveInstance.colorSelected(this.outputColor);
      }
      if (this.cpDialogDisplay === 'popup') {
        this.closeColorPicker();
      }
    }
    onCancelColor(event) {
      this.hsva = null;
      event.stopPropagation();
      this.directiveInstance.colorCanceled();
      this.setColorFromString(this.initialColor, true);
      if (this.cpDialogDisplay === 'popup') {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.initialColor, true);
        this.closeColorPicker();
      }
    }
    onEyeDropper() {
      if (!this.eyeDropperSupported) return;
      const eyeDropper = new window.EyeDropper();
      eyeDropper.open().then(eyeDropperResult => {
        this.setColorFromString(eyeDropperResult.sRGBHex, true);
      });
    }
    onFormatToggle(change) {
      const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
      const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
      this.format = this.dialogInputFields[nextFormat];
    }
    onColorChange(value) {
      this.hsva.s = value.s / value.rgX;
      this.hsva.v = value.v / value.rgY;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'lightness',
        value: this.hsva.v,
        color: this.outputColor
      });
      this.directiveInstance.sliderChanged({
        slider: 'saturation',
        value: this.hsva.s,
        color: this.outputColor
      });
    }
    onHueChange(value) {
      this.hsva.h = value.v / value.rgX;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'hue',
        value: this.hsva.h,
        color: this.outputColor
      });
    }
    onValueChange(value) {
      this.hsva.v = value.v / value.rgX;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'value',
        value: this.hsva.v,
        color: this.outputColor
      });
    }
    onAlphaChange(value) {
      this.hsva.a = value.v / value.rgX;
      this.updateColorPicker();
      this.directiveInstance.sliderChanged({
        slider: 'alpha',
        value: this.hsva.a,
        color: this.outputColor
      });
    }
    onHexInput(value) {
      if (value === null) {
        this.updateColorPicker();
      } else {
        if (value && value[0] !== '#') {
          value = '#' + value;
        }
        let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
        if (this.cpAlphaChannel === 'always') {
          validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
        }
        const valid = validHex.test(value);
        if (valid) {
          if (value.length < 5) {
            value = '#' + value.substring(1).split('').map(c => c + c).join('');
          }
          if (this.cpAlphaChannel === 'forced') {
            value += Math.round(this.hsva.a * 255).toString(16);
          }
          this.setColorFromString(value, true, false);
        }
        this.directiveInstance.inputChanged({
          input: 'hex',
          valid: valid,
          value: value,
          color: this.outputColor
        });
      }
    }
    onRedInput(value) {
      const rgba = this.service.hsvaToRgba(this.hsva);
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        rgba.r = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'red',
        valid: valid,
        value: rgba.r,
        color: this.outputColor
      });
    }
    onBlueInput(value) {
      const rgba = this.service.hsvaToRgba(this.hsva);
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        rgba.b = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'blue',
        valid: valid,
        value: rgba.b,
        color: this.outputColor
      });
    }
    onGreenInput(value) {
      const rgba = this.service.hsvaToRgba(this.hsva);
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        rgba.g = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'green',
        valid: valid,
        value: rgba.g,
        color: this.outputColor
      });
    }
    onHueInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.hsva.h = value.v / value.rg;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'hue',
        valid: valid,
        value: this.hsva.h,
        color: this.outputColor
      });
    }
    onValueInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.hsva.v = value.v / value.rg;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'value',
        valid: valid,
        value: this.hsva.v,
        color: this.outputColor
      });
    }
    onAlphaInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.hsva.a = value.v / value.rg;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'alpha',
        valid: valid,
        value: this.hsva.a,
        color: this.outputColor
      });
    }
    onLightnessInput(value) {
      const hsla = this.service.hsva2hsla(this.hsva);
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        hsla.l = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'lightness',
        valid: valid,
        value: hsla.l,
        color: this.outputColor
      });
    }
    onSaturationInput(value) {
      const hsla = this.service.hsva2hsla(this.hsva);
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        hsla.s = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
      }
      this.directiveInstance.inputChanged({
        input: 'saturation',
        valid: valid,
        value: hsla.s,
        color: this.outputColor
      });
    }
    onCyanInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.cmyk.c = value.v;
        this.updateColorPicker(false, true, true);
      }
      this.directiveInstance.inputChanged({
        input: 'cyan',
        valid: true,
        value: this.cmyk.c,
        color: this.outputColor
      });
    }
    onMagentaInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.cmyk.m = value.v;
        this.updateColorPicker(false, true, true);
      }
      this.directiveInstance.inputChanged({
        input: 'magenta',
        valid: true,
        value: this.cmyk.m,
        color: this.outputColor
      });
    }
    onYellowInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.cmyk.y = value.v;
        this.updateColorPicker(false, true, true);
      }
      this.directiveInstance.inputChanged({
        input: 'yellow',
        valid: true,
        value: this.cmyk.y,
        color: this.outputColor
      });
    }
    onBlackInput(value) {
      const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
      if (valid) {
        this.cmyk.k = value.v;
        this.updateColorPicker(false, true, true);
      }
      this.directiveInstance.inputChanged({
        input: 'black',
        valid: true,
        value: this.cmyk.k,
        color: this.outputColor
      });
    }
    onAddPresetColor(event, value) {
      event.stopPropagation();
      if (!this.cpPresetColors.filter(color => color === value).length) {
        this.cpPresetColors = this.cpPresetColors.concat(value);
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
      }
    }
    onRemovePresetColor(event, value) {
      event.stopPropagation();
      this.cpPresetColors = this.cpPresetColors.filter(color => color !== value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
    // Private helper functions for the color picker dialog status
    openColorPicker() {
      if (!this.show) {
        this.show = true;
        this.hidden = true;
        setTimeout(() => {
          this.hidden = false;
          this.setDialogPosition();
          this.cdRef.detectChanges();
        }, 0);
        this.directiveInstance.stateChanged(true);
        if (!this.isIE10) {
          // The change detection should be run on `mousedown` event only when the condition
          // is met within the `onMouseDown` method.
          this.ngZone.runOutsideAngular(() => {
            // There's no sense to add both event listeners on touch devices since the `touchstart`
            // event is handled earlier than `mousedown`, so we'll get 2 change detections and the
            // second one will be unnecessary.
            if (SUPPORTS_TOUCH) {
              document.addEventListener('touchstart', this.listenerMouseDown);
            } else {
              document.addEventListener('mousedown', this.listenerMouseDown);
            }
          });
        }
        window.addEventListener('resize', this.listenerResize);
      }
    }
    closeColorPicker() {
      if (this.show) {
        this.show = false;
        this.directiveInstance.stateChanged(false);
        if (!this.isIE10) {
          if (SUPPORTS_TOUCH) {
            document.removeEventListener('touchstart', this.listenerMouseDown);
          } else {
            document.removeEventListener('mousedown', this.listenerMouseDown);
          }
        }
        window.removeEventListener('resize', this.listenerResize);
        if (!this.cdRef['destroyed']) {
          this.cdRef.detectChanges();
        }
      }
    }
    updateColorPicker(emit = true, update = true, cmykInput = false) {
      if (this.sliderDimMax) {
        if (this.cpColorMode === 2) {
          this.hsva.s = 0;
        }
        let hue, hsla, rgba;
        const lastOutput = this.outputColor;
        hsla = this.service.hsva2hsla(this.hsva);
        if (!this.cpCmykEnabled) {
          rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
        } else {
          if (!cmykInput) {
            rgba = this.service.hsvaToRgba(this.hsva);
            this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
          } else {
            rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
            this.hsva = this.service.rgbaToHsva(rgba);
          }
          rgba = this.service.denormalizeRGBA(rgba);
          this.sliderH = this.hsva.h;
        }
        hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
        if (update) {
          this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
          this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
          if (this.cpCmykEnabled) {
            this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
          }
          const allowHex8 = this.cpAlphaChannel === 'always';
          this.hexText = this.service.rgbaToHex(rgba, allowHex8);
          this.hexAlpha = this.rgbaText.a;
        }
        if (this.cpOutputFormat === 'auto') {
          if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
            if (this.hsva.a < 1) {
              this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
            }
          }
        }
        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
        this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
        this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
        if (this.format !== ColorFormats.CMYK) {
          this.cmykColor = '';
        } else {
          if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
            const alpha = Math.round(this.cmyk.a * 100) / 100;
            this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
          } else {
            this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
          }
        }
        this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
        if (emit && lastOutput !== this.outputColor) {
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.outputColor);
        }
      }
    }
    // Private helper functions for the color picker dialog positioning
    setDialogPosition() {
      if (this.cpDialogDisplay === 'inline') {
        this.position = 'relative';
      } else {
        let position = 'static',
          transform = '',
          style;
        let parentNode = null,
          transformNode = null;
        let node = this.directiveElementRef.nativeElement.parentNode;
        const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
        while (node !== null && node.tagName !== 'HTML') {
          style = window.getComputedStyle(node);
          position = style.getPropertyValue('position');
          transform = style.getPropertyValue('transform');
          if (position !== 'static' && parentNode === null) {
            parentNode = node;
          }
          if (transform && transform !== 'none' && transformNode === null) {
            transformNode = node;
          }
          if (position === 'fixed') {
            parentNode = transformNode;
            break;
          }
          node = node.parentNode;
        }
        const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');
        if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
          this.top = boxDirective.top;
          this.left = boxDirective.left;
        } else {
          if (parentNode === null) {
            parentNode = node;
          }
          const boxParent = this.createDialogBox(parentNode, position !== 'fixed');
          this.top = boxDirective.top - boxParent.top;
          this.left = boxDirective.left - boxParent.left;
        }
        if (position === 'fixed') {
          this.position = 'fixed';
        }
        let usePosition = this.cpPosition;
        if (this.cpPosition === 'auto') {
          const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
          const windowInnerHeight = window.innerHeight;
          const windowInnerWidth = window.innerWidth;
          const elRefClientRect = this.elRef.nativeElement.getBoundingClientRect();
          const bottom = this.top + dialogBounds.height;
          if (bottom > windowInnerHeight) {
            this.top = windowInnerHeight - dialogBounds.height;
            this.cpArrowPosition = elRefClientRect.x / 2 - 20;
          }
          const right = this.left + dialogBounds.width;
          if (right > windowInnerWidth) {
            this.left = windowInnerWidth - dialogBounds.width;
            this.cpArrowPosition = elRefClientRect.x / 2 - 20;
          }
          const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
          usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
        }
        if (usePosition === 'top') {
          this.arrowTop = dialogHeight - 1;
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        } else if (usePosition === 'bottom') {
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        } else if (usePosition === 'top-left' || usePosition === 'left-top') {
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
        } else if (usePosition === 'top-right' || usePosition === 'right-top') {
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
        } else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
        } else {
          // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
        }
        this.cpUsePosition = usePosition;
      }
    }
    // Private helper functions for the color picker dialog positioning and opening
    isDescendant(parent, child) {
      let node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
    createDialogBox(element, offset) {
      const {
        top,
        left
      } = element.getBoundingClientRect();
      return {
        top: top + (offset ? window.pageYOffset : 0),
        left: left + (offset ? window.pageXOffset : 0),
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }
  }
  ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
    return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
  };
  ColorPickerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ColorPickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
      }
    },
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
          return ctx.handleEsc($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
          return ctx.handleEnter($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    decls: 30,
    vars: 51,
    consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "left", "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_7_listener() {
          return ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColorPickerComponent_button_9_Template, 2, 5, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorPickerComponent_div_11_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
          return ctx.onHueChange($event);
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
          return ctx.onDragStart("hue");
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
          return ctx.onDragEnd("hue");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
          return ctx.onValueChange($event);
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
          return ctx.onDragStart("value");
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
          return ctx.onDragEnd("value");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
          return ctx.onAlphaChange($event);
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
          return ctx.onDragStart("alpha");
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
          return ctx.onDragEnd("alpha");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay === "popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpExtraTemplate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, TextDirective, SliderDirective],
    styles: [".color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:\"x\";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n"],
    encapsulation: 2
  });
  return ColorPickerComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Caretaker note: we have still left the `typeof` condition in order to avoid
// creating a breaking change for projects that still use the View Engine.
// The `ngDevMode` is always available when Ivy is enabled.
// This will be evaluated during compilation into `const NG_DEV_MODE = false`,
// thus Terser will be able to tree-shake `console.warn` calls.
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
let ColorPickerDirective = /*#__PURE__*/(() => {
  class ColorPickerDirective {
    constructor(injector, cfr, appRef, vcRef, elRef, _service) {
      this.injector = injector;
      this.cfr = cfr;
      this.appRef = appRef;
      this.vcRef = vcRef;
      this.elRef = elRef;
      this._service = _service;
      this.dialogCreated = false;
      this.ignoreChanges = false;
      this.viewAttachedToAppRef = false;
      this.cpWidth = '230px';
      this.cpHeight = 'auto';
      this.cpToggle = false;
      this.cpDisabled = false;
      this.cpIgnoredElements = [];
      this.cpFallbackColor = '';
      this.cpColorMode = 'color';
      this.cpCmykEnabled = false;
      this.cpOutputFormat = 'auto';
      this.cpAlphaChannel = 'enabled';
      this.cpDisableInput = false;
      this.cpDialogDisplay = 'popup';
      this.cpSaveClickOutside = true;
      this.cpCloseClickOutside = true;
      this.cpUseRootViewContainer = false;
      this.cpPosition = 'auto';
      this.cpPositionOffset = '0%';
      this.cpPositionRelativeToArrow = false;
      this.cpOKButton = false;
      this.cpOKButtonText = 'OK';
      this.cpOKButtonClass = 'cp-ok-button-class';
      this.cpCancelButton = false;
      this.cpCancelButtonText = 'Cancel';
      this.cpCancelButtonClass = 'cp-cancel-button-class';
      this.cpEyeDropper = false;
      this.cpPresetLabel = 'Preset colors';
      this.cpPresetColorsClass = 'cp-preset-colors-class';
      this.cpMaxPresetColorsLength = 6;
      this.cpPresetEmptyMessage = 'No colors added';
      this.cpPresetEmptyMessageClass = 'preset-empty-message';
      this.cpAddColorButton = false;
      this.cpAddColorButtonText = 'Add color';
      this.cpAddColorButtonClass = 'cp-add-color-button-class';
      this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
      this.cpArrowPosition = 0;
      this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
      this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    }
    handleClick() {
      this.inputFocus();
    }
    handleFocus() {
      this.inputFocus();
    }
    handleInput(event) {
      this.inputChange(event);
    }
    ngOnDestroy() {
      if (this.cmpRef != null) {
        if (this.viewAttachedToAppRef) {
          this.appRef.detachView(this.cmpRef.hostView);
        }
        this.cmpRef.destroy();
        this.cmpRef = null;
        this.dialog = null;
      }
    }
    ngOnChanges(changes) {
      if (changes.cpToggle && !this.cpDisabled) {
        if (changes.cpToggle.currentValue) {
          this.openDialog();
        } else if (!changes.cpToggle.currentValue) {
          this.closeDialog();
        }
      }
      if (changes.colorPicker) {
        if (this.dialog && !this.ignoreChanges) {
          if (this.cpDialogDisplay === 'inline') {
            this.dialog.setInitialColor(changes.colorPicker.currentValue);
          }
          this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
          if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
            this.cmpRef.changeDetectorRef.detectChanges();
          }
        }
        this.ignoreChanges = false;
      }
      if (changes.cpPresetLabel || changes.cpPresetColors) {
        if (this.dialog) {
          this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
        }
      }
    }
    openDialog() {
      if (!this.dialogCreated) {
        let vcRef = this.vcRef;
        this.dialogCreated = true;
        this.viewAttachedToAppRef = false;
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
          const classOfRootComponent = this.appRef.componentTypes[0];
          const appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL);
          if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL) {
            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
            if (NG_DEV_MODE && vcRef === this.vcRef) {
              console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
            }
          } else {
            this.viewAttachedToAppRef = true;
          }
        }
        const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
        if (this.viewAttachedToAppRef) {
          this.cmpRef = compFactory.create(this.injector);
          this.appRef.attachView(this.cmpRef.hostView);
          document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
        } else {
          const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
            providers: [],
            // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
            // in newer Angular versions: https://github.com/angular/angular/pull/25174.
            parent: vcRef.injector
          });
          this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
        }
        this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
        this.dialog = this.cmpRef.instance;
        if (this.vcRef !== vcRef) {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      } else if (this.dialog) {
        this.dialog.openDialog(this.colorPicker);
      }
    }
    closeDialog() {
      if (this.dialog && this.cpDialogDisplay === 'popup') {
        this.dialog.closeDialog();
      }
    }
    cmykChanged(value) {
      this.cpCmykColorChange.emit(value);
    }
    stateChanged(state) {
      this.cpToggleChange.emit(state);
      if (state) {
        this.colorPickerOpen.emit(this.colorPicker);
      } else {
        this.colorPickerClose.emit(this.colorPicker);
      }
    }
    colorChanged(value, ignore = true) {
      this.ignoreChanges = ignore;
      this.colorPickerChange.emit(value);
    }
    colorSelected(value) {
      this.colorPickerSelect.emit(value);
    }
    colorCanceled() {
      this.colorPickerCancel.emit();
    }
    inputFocus() {
      const element = this.elRef.nativeElement;
      const ignored = this.cpIgnoredElements.filter(item => item === element);
      if (!this.cpDisabled && !ignored.length) {
        if (typeof document !== 'undefined' && element === document.activeElement) {
          this.openDialog();
        } else if (!this.dialog || !this.dialog.show) {
          this.openDialog();
        } else {
          this.closeDialog();
        }
      }
    }
    inputChange(event) {
      if (this.dialog) {
        this.dialog.setColorFromString(event.target.value, true);
      } else {
        this.colorPicker = event.target.value;
        this.colorPickerChange.emit(this.colorPicker);
      }
    }
    inputChanged(event) {
      this.cpInputChange.emit(event);
    }
    sliderChanged(event) {
      this.cpSliderChange.emit(event);
    }
    sliderDragEnd(event) {
      this.cpSliderDragEnd.emit(event);
    }
    sliderDragStart(event) {
      this.cpSliderDragStart.emit(event);
    }
    presetColorsChanged(value) {
      this.cpPresetColorsChange.emit(value);
    }
  }
  ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) {
    return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
  };
  ColorPickerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ColorPickerDirective,
    selectors: [["", "colorPicker", ""]],
    hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        });
      }
    },
    inputs: {
      colorPicker: "colorPicker",
      cpWidth: "cpWidth",
      cpHeight: "cpHeight",
      cpToggle: "cpToggle",
      cpDisabled: "cpDisabled",
      cpIgnoredElements: "cpIgnoredElements",
      cpFallbackColor: "cpFallbackColor",
      cpColorMode: "cpColorMode",
      cpCmykEnabled: "cpCmykEnabled",
      cpOutputFormat: "cpOutputFormat",
      cpAlphaChannel: "cpAlphaChannel",
      cpDisableInput: "cpDisableInput",
      cpDialogDisplay: "cpDialogDisplay",
      cpSaveClickOutside: "cpSaveClickOutside",
      cpCloseClickOutside: "cpCloseClickOutside",
      cpUseRootViewContainer: "cpUseRootViewContainer",
      cpPosition: "cpPosition",
      cpPositionOffset: "cpPositionOffset",
      cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
      cpOKButton: "cpOKButton",
      cpOKButtonText: "cpOKButtonText",
      cpOKButtonClass: "cpOKButtonClass",
      cpCancelButton: "cpCancelButton",
      cpCancelButtonText: "cpCancelButtonText",
      cpCancelButtonClass: "cpCancelButtonClass",
      cpEyeDropper: "cpEyeDropper",
      cpPresetLabel: "cpPresetLabel",
      cpPresetColors: "cpPresetColors",
      cpPresetColorsClass: "cpPresetColorsClass",
      cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
      cpPresetEmptyMessage: "cpPresetEmptyMessage",
      cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
      cpAddColorButton: "cpAddColorButton",
      cpAddColorButtonText: "cpAddColorButtonText",
      cpAddColorButtonClass: "cpAddColorButtonClass",
      cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
      cpArrowPosition: "cpArrowPosition",
      cpExtraTemplate: "cpExtraTemplate"
    },
    outputs: {
      cpInputChange: "cpInputChange",
      cpToggleChange: "cpToggleChange",
      cpSliderChange: "cpSliderChange",
      cpSliderDragEnd: "cpSliderDragEnd",
      cpSliderDragStart: "cpSliderDragStart",
      colorPickerOpen: "colorPickerOpen",
      colorPickerClose: "colorPickerClose",
      colorPickerCancel: "colorPickerCancel",
      colorPickerSelect: "colorPickerSelect",
      colorPickerChange: "colorPickerChange",
      cpCmykColorChange: "cpCmykColorChange",
      cpPresetColorsChange: "cpPresetColorsChange"
    },
    exportAs: ["ngxColorPicker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return ColorPickerDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ColorPickerModule = /*#__PURE__*/(() => {
  class ColorPickerModule {}
  ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) {
    return new (t || ColorPickerModule)();
  };
  ColorPickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ColorPickerModule
  });
  ColorPickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [ColorPickerService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
  return ColorPickerModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=1876.22fc72218287f9fe.js.map