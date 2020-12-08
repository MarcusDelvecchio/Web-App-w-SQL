(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcusdelvecchio/sy3/se3309/project/Web-App-w-SQL/src/Angular-SQL/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ConfigService, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DriverId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " shiftDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " startTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " endTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_47_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.submitNewShift(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_49_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.submitNewDriver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_50_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shift_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shift_r13.driverName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shift_r13.shiftDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shift_r13.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shift_r13.endTime);
} }
function AppComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_50_Template_h2_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showShiftTable = !ctx_r14.showShiftTable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shift Info Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DriverId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "shiftDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "startTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "endTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_50_tr_18_Template, 9, 4, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.currentShifts);
} }
function AppComponent_div_51_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r17.driverName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r17.driverID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r17.driverAddress);
} }
function AppComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_51_Template_h2_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showDrivertableData = !ctx_r18.showDrivertableData; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Driver Info Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_51_tr_12_Template, 7, 3, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.drivertableData);
} }
function AppComponent_div_52_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r21.driverID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r21.licensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r21.kmLeft);
} }
function AppComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_Template_h2_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.showLocationtableData = !ctx_r22.showLocationtableData; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Driver's with more than 70 km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Driver ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "License Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "KM Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_tr_12_Template, 7, 3, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.driverVehicles);
} }
function AppComponent_table_54_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quant_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quant_r25.locationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quant_r25.MachineNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quant_r25.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quant_r25.quantity);
} }
function AppComponent_table_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Location Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Machine Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_table_54_tr_10_Template, 9, 4, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.locationproductquantites);
} }
function AppComponent_div_55_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r27.driverID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r27.licensePlate);
} }
function AppComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_55_Template_h2_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.showlicenseplates = !ctx_r28.showlicenseplates; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drivers and their cooresponding license plates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Driver ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "License Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_55_tr_9_Template, 5, 2, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.drivervehicle);
} }
function AppComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const max_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](max_r30.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](max_r30.productISBN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](max_r30.productPrice);
} }
class ConfigService {
    // private linkstring: string = "http://localhost:3300/api/database/:query" //+this.query; ??
    constructor(http, MatTableModule) {
        this.http = http;
        this.MatTableModule = MatTableModule;
        this.url = "";
    }
    driverInfoRoute(queryString) {
        queryString = this.convertToValid(queryString);
        //console.log(queryString);
        let query = `${this.url}/api/database/${queryString}`;
        return this.http.get(query);
    }
    currentShifts(queryString) {
        // TODO: make more deezed -MD
        let query = this.convertToValid("SELECT * FROM `3309`.Shift WHERE endTime IS NULL;");
        return this.http.get(`${this.url}/api/database/${query}`);
    }
    locationproductconfig(queryString) {
        queryString = this.convertToValid(queryString);
        //console.log(queryString);
        let query = `${this.url}/api/database/${queryString}`;
        return this.http.get(query);
    }
    getdriverlicenceplate(queryString) {
        queryString = this.convertToValid(queryString);
        //console.log(queryString);
        let query = `${this.url}/api/database/${queryString}`;
        return this.http.get(query);
    }
    maxPrice(queryString) {
        queryString = this.convertToValid(queryString);
        //console.log(queryString);
        let query = `${this.url}/api/database/${queryString}`;
        return this.http.get(query);
    }
    convertToValid(str) {
        let validQueryParam = str.replace(/ /g, "BXB");
        validQueryParam = validQueryParam.replace(/\*/g, "AXA");
        return validQueryParam;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"] }]; }, null); })();
class AppComponent {
    constructor(configService) {
        this.configService = configService;
        this.title = 'Angular-SQL';
        // constants
        this.database = "`3309`.";
        this.columnsToDisplay = ['driverID', 'driverAddress', "driverName"];
        this.loggedIn = false;
        this.showPriceSearchResults = false;
        this.showShiftTable = false;
        this.showNewShift = false;
    }
    populateDriverTable() { }
    getDrivers() {
        // setup string
        let queryString = `SELECT * FROM ${this.database}Driver`;
        this.configService.driverInfoRoute(queryString).subscribe(data => {
            //console.log(data);
            // set the data and show it in the tables
            this.drivertableData = data;
            this.showDrivertableData = true;
            // set the id value
            this.driverIdNumber = data.length - 1;
        });
    }
    newDriver() {
        this.showCreateDriver = !this.showCreateDriver;
    }
    submitNewDriver() {
        // get input values 
        let name = document.getElementById("newDriverName").value;
        let address = document.getElementById("newDriverAddress").value;
        // sanitize??
        // generate a driver 
        let id = this.driverIdNumber;
        // setup query string
        let queryString = `INSERT INTO ${this.database}Driver (DriverAddress, DriverID, driverName) VALUES ('${address}', '${id}', '${name}')`;
        //console.log(queryString);
        // call query method
        this.configService.driverInfoRoute(queryString).subscribe(data => {
            // INSERT returns undefined
            //console.log(data);
            //console.log("updated driver info");
        });
        // update local driver info
        this.getDrivers();
    }
    submitNewShift() {
        // get input values 
        let driverId = document.getElementById("newShiftId").value;
        let shiftDate = document.getElementById("newShiftshiftDate").value;
        let startTime = document.getElementById("newShiftstartTime").value;
        let endTime = document.getElementById("newShiftendTime").value;
        // TODO: sanitize??
        // get running shift id
        let id = this.shiftIdNumber;
        // setup query string
        let queryString = `INSERT INTO ${this.database}Shift (driverId, shiftDate, startTime, endTime) VALUES ('${driverId}', '${shiftDate}', '${startTime}', '${endTime}')`;
        //console.log(queryString);
        // call query method
        this.configService.currentShifts(queryString).subscribe(data => {
            // INSERT returns undefined
            //console.log(data);
            //console.log("updated shift info");
        });
        // update local shift info
        this.getCurrentShifts();
    }
    getLicensePlateOfDriver() {
        // fixed -ML
        let queryString = "SELECT Driver.driverID, licensePlate FROM `3309`.Driver JOIN `3309`.Vehicle ON Driver.driverID = Vehicle.driverID;";
        //gets the ids of the driver and their licence plate
        this.configService.getdriverlicenceplate(queryString).subscribe(data => {
            //console.log(data);
            this.drivervehicle = data;
            this.showLocationtableData = true;
        });
    }
    getLocationProductQuantities() {
        // TODO: fix?
        // setup string
        let queryString = "SELECT driverID, licensePlate, kmLeft FROM `3309`.Vehicle WHERE EXISTS (SELECT licensePlate FROM `3309`.Vehicle WHERE Vehicle.kmLeft > 70);";
        this.configService.locationproductconfig(queryString).subscribe(data => {
            //console.log(data);
            this.driverVehicles = data;
            this.showLocationtableData = true;
        });
    }
    clickShowProudctPrice() {
        this.showPriceSearchResults = !this.showPriceSearchResults;
    }
    showProductsLessThanACertainPrice() {
        if (document.getElementById("price") === null) {
            return;
        }
        let price = document.getElementById("price").value;
        let queryString = "SELECT productName, productISBN, productPrice FROM Product WHERE productPrice < " + price + " GROUP BY productName, productISBN, productPrice;";
        this.configService.maxPrice(queryString).subscribe(data => {
            //console.log(data);
            this.displayMaxPrice = data;
            //this.showLocationtableData = true;
        });
    }
    // this.shiftIdNumber = data.length -1
    getCurrentShifts() {
        //console.log("getting shifts");
        this.configService.currentShifts("").subscribe(data => {
            this.currentShifts = data;
            this.shiftIdNumber = Object.keys(data).length - 1;
        }, err => console.log(err));
    }
    checkLoggedIn() {
        let value = localStorage.getItem('loggedIn');
        if (value === 'true') {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
    // returns true if the passed string contains only characters, numbers, spaces and underscores
    // boolean flase == allow spaces
    sanitize(input, isCourseCode) {
        let expressionAllowSpaces = new RegExp('^[a-zA-Z0-9 _]{0,15}$');
        let expressionNoSpaces = new RegExp('^[a-zA-Z0-9]{0,15}$');
        let newExpression = new RegExp("[<\"\/>%\$&#@\[\\\^\$\.\|\?\*\+\(\)\{\}]");
        if (!isCourseCode) {
            if (newExpression.test(input)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (expressionNoSpaces.test(input)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    ;
    ngOnInit() {
        // get locaton / product table info
        this.driverVehicles = [];
        this.getLocationProductQuantities();
        // get shift data
        this.getCurrentShifts();
        this.displayMaxPrice = [];
        //this.showProductsLessThanACertainPrice();
        this.drivervehicle = [];
        this.getLicensePlateOfDriver();
        this.checkLoggedIn();
        // get the driver data
        this.drivertableData = [];
        this.getDrivers();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService)); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 71, vars: 8, consts: [["src", "assets/img-01.jpg", "width", "100px", "height", "auto"], [1, "navbar"], ["routerLink", ""], ["routerLink", "/login"], [1, "belowImage"], [1, "info"], [1, "wrapper"], [2, "border", "1px solid black", "padding", "5px"], [3, "click"], [4, "ngIf"], [2, "padding", "10px"], ["style", "background-color: lightblue; width: 30%; border: 1px solid black;", 4, "ngIf"], ["class", "tableContainer", 4, "ngIf"], [1, "tableContainer"], ["class", "innerTable", 4, "ngIf"], [1, "bold"], ["id", "price", "type", "text", "placeholder", ""], ["id", "submitname", 1, "submit", 3, "click"], [2, "background-color", "rgb(220, 217, 217)", "border", "1px solid black"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "newShiftId"], ["type", "text", "id", "newShiftshiftDate"], ["type", "text", "id", "newShiftstartTime"], ["type", "text", "id", "newShiftendTime"], [2, "background-color", "lightblue", "width", "30%", "border", "1px solid black"], ["type", "text", "id", "newDriverName"], ["type", "text", "id", "newDriverAddress"], [1, "tableLabel", 3, "click"], [1, "innerTable"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A software application used by vending drivers to manage daily operations. It will help organize and optimize the management of various tasks such as sales, inventory, delivery details, and other entities in daily business. Drivers will use the app to record and sort information regarding their job. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Create Functionalities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.newDriver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "New Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_31_listener() { return ctx.showNewShift = !ctx.showNewShift; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Create new Shift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Table Toggles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() { return ctx.showShiftTable = !ctx.showShiftTable; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Show shift info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() { return ctx.showLocationtableData = !ctx.showLocationtableData; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Toggle Driver Mileage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener() { return ctx.showProductQuantitiesLocationTable = !ctx.showProductQuantitiesLocationTable; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Display the product quantities at location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener() { return ctx.showDrivertableData = !ctx.showDrivertableData; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Toggle Driver Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_44_listener() { return ctx.showlicenseplates = !ctx.showlicenseplates; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Display driver license plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_47_Template, 11, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AppComponent_div_49_Template, 7, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_50_Template, 19, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_div_51_Template, 13, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_div_52_Template, 13, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AppComponent_table_54_Template, 11, 1, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AppComponent_div_55_Template, 10, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Please input the max price you want to show products for:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_59_listener() { return ctx.showProductsLessThanACertainPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Search products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Product ISBM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AppComponent_tr_70_Template, 7, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNewShift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreateDriver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showShiftTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDrivertableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLocationtableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProductQuantitiesLocationTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showlicenseplates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayMaxPrice);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".navbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n{\n    width: 25%;\n    cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]\n{    \n    text-decoration: none;\n    width: 100%;\n    cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover\n{\n    background-color: green;\n}\n\n\n\n\n\n\n.tableLabel[_ngcontent-%COMP%]{\n   margin-left: 10px;;\n}\n.tableLabel[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n.innerTable[_ngcontent-%COMP%]{\n    background-color: rgb(220, 217, 217);\n    border: 1px solid black;\n    margin-left: 10px;\n    margin-bottom: 20px;\n}\n.tableContainer[_ngcontent-%COMP%]{\n    background-color: rgb(169, 162, 162); \n    width: 70%; \n    border: 1px solid black;\n}\nbody[_ngcontent-%COMP%] {\n\t \n\t \n\t \n\t \n   \n  background: white;\n\ttext-align: center; \n}\n.scrollingtable[_ngcontent-%COMP%] {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\toverflow: hidden;\n\twidth: auto; \n\t \n\theight: 188px; \n\t \n\tfont-family: Verdana, Tahoma, sans-serif;\n\tfont-size: 15px;\n\tline-height: 20px;\n\tpadding-top: 20px; \n\tpadding-bottom: 20px; \n\ttext-align: left;\n}\n.scrollingtable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {box-sizing: border-box;}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\tposition: relative;\n\tborder-top: 1px solid black; \n\theight: 100%;\n\tpadding-top: 20px; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before {\n\ttop: 0;\n\tbackground: cornflowerblue; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before, .scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tz-index: -1;\n\twidth: 100%;\n\theight: 50%;\n\tleft: 0;\n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\t \n\tmax-height: 100%;\n\toverflow: scroll; \n\toverflow-x: hidden;\n\tborder: 1px solid black; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {background: white;}\n\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tborder-spacing: 0;\n\tmargin-top: -20px; \n\t \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > caption[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: -20px; \n\tmargin-top: -1px; \n\twidth: 100%;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {padding: 0;}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n\tvertical-align: bottom;\n\twhite-space: nowrap;\n\ttext-align: center;\n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tpadding: 0 6px 0 6px; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 20px; \n\tborder-left: 1px solid black; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > div[label][_ngcontent-%COMP%]:before, .scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child, .scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + [_ngcontent-%COMP%]:before {\n\tposition: absolute;\n\ttop: 0;\n\twhite-space: pre-wrap;\n\tcolor: white; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > div[label][_ngcontent-%COMP%]:before, .scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > div[label][_ngcontent-%COMP%]:after {content: attr(label);}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + [_ngcontent-%COMP%]:before {\n\tcontent: \"\";\n\tdisplay: block;\n\tmin-height: 20px; \n\tpadding-top: 1px;\n\tborder-left: 1px solid black; \n}\n.scrollingtable[_ngcontent-%COMP%]   .scrollbarhead[_ngcontent-%COMP%] {float: right;}\n.scrollingtable[_ngcontent-%COMP%]   .scrollbarhead[_ngcontent-%COMP%]:before {\n\tposition: absolute;\n\twidth: 100px;\n\ttop: -1px; \n\tbackground: white; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:after {\n\tcontent: \"\";\n\tdisplay: table-cell;\n\tposition: relative;\n\tpadding: 0;\n\tborder-top: 1px solid black;\n\ttop: -1px; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {vertical-align: top;}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {background: white;}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n\tborder-bottom: 1px solid black;\n\tpadding: 0 6px 0 6px;\n\theight: 20px; \n}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]:last-of-type    > tr[_ngcontent-%COMP%]:last-child    > *[_ngcontent-%COMP%] {border-bottom: none;}\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {background: gainsboro;}\n\n.scrollingtable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {border-left: 1px solid black;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBOztJQUVJLHVCQUF1QjtBQUMzQjtBQUNBLFNBQVM7QUFDUixlQUFlO0FBQUUsNEJBQTRCO0FBQzdDLGdCQUFnQjtBQUFFLDZCQUE2QjtBQUNoRCxJQUFJO0FBRUo7R0FDRyxpQkFBaUI7QUFDcEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUdBO0NBQ0MsZUFBZSxFQUFFLDRCQUE0QjtDQUM3QyxnQkFBZ0IsRUFBRSw2QkFBNkI7Q0FDL0MsYUFBYSxFQUFFLHNDQUFzQztDQUNyRCwwQkFBMEIsRUFBRSxpQ0FBaUM7RUFDNUQsMEJBQTBCLEVBQUUsc0NBQXNDO0VBQ2xFLGlCQUFpQjtDQUNsQixrQkFBa0IsRUFBRSw0REFBNEQ7QUFDakY7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixXQUFXLEVBQUUsNENBQTRDO0NBQ3pELG1CQUFtQixFQUFFLGtDQUFrQztDQUN2RCxhQUFhLEVBQUUsaURBQWlEO0NBQ2hFLHFCQUFxQixFQUFFLGdHQUFnRztDQUN2SCx3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixpQkFBaUIsRUFBRSxxQ0FBcUM7Q0FDeEQsb0JBQW9CLEVBQUUsd0NBQXdDO0NBQzlELGdCQUFnQjtBQUNqQjtBQUNBLG1CQUFtQixzQkFBc0IsQ0FBQztBQUMxQztDQUNDLGtCQUFrQjtDQUNsQiwyQkFBMkIsRUFBRSxtQkFBbUI7Q0FDaEQsWUFBWTtDQUNaLGlCQUFpQixFQUFFLHVDQUF1QztBQUMzRDtBQUNBO0NBQ0MsTUFBTTtDQUNOLDBCQUEwQixFQUFFLGlDQUFpQztBQUM5RDtBQUNBOztDQUVDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsT0FBTztBQUNSO0FBQ0E7Q0FDQyxvQkFBb0IsRUFBRSw2RUFBNkU7Q0FDbkcsZ0JBQWdCO0NBQ2hCLGdCQUFnQixFQUFFLHFEQUFxRDtDQUN2RSxrQkFBa0I7Q0FDbEIsdUJBQXVCLEVBQUUsMkJBQTJCO0FBQ3JEO0FBQ0EsbUNBQW1DLGlCQUFpQixDQUFDO0FBQUUsOEJBQThCO0FBQ3JGO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixpQkFBaUIsRUFBRSxrQ0FBa0M7Q0FDckQsc0JBQXNCLEVBQUUsNkJBQTZCO0FBQ3REO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVSxFQUFFLDRCQUE0QjtDQUN4QyxnQkFBZ0IsRUFBRSwwQkFBMEI7Q0FDNUMsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQSxrREFBa0QsVUFBVSxDQUFDO0FBQzdEO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixvQkFBb0IsRUFBRSxzQkFBc0I7QUFDN0M7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxZQUFZLEVBQUUsNkJBQTZCO0NBQzNDLDRCQUE0QixFQUFFLHlCQUF5QjtBQUN4RDtBQUNBOzs7Q0FHQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLHFCQUFxQjtDQUNyQixZQUFZLEVBQUUsd0JBQXdCO0FBQ3ZDO0FBQ0E7eUVBQ3lFLG9CQUFvQixDQUFDO0FBQzlGO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxnQkFBZ0IsRUFBRSw2QkFBNkI7Q0FDL0MsZ0JBQWdCO0NBQ2hCLDRCQUE0QixFQUFFLCtCQUErQjtBQUM5RDtBQUNBLGdDQUFnQyxZQUFZLENBQUM7QUFDN0M7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbEMsaUJBQWlCLEVBQUUsOEJBQThCO0FBQ2xEO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsMkJBQTJCO0NBQzNCLFNBQVMsRUFBRSwwQkFBMEI7QUFDdEM7QUFDQSw2Q0FBNkMsbUJBQW1CLENBQUM7QUFDakUsa0RBQWtELGlCQUFpQixDQUFDO0FBQ3BFO0NBQ0MsOEJBQThCO0NBQzlCLG9CQUFvQjtDQUNwQixZQUFZLEVBQUUsNkJBQTZCO0FBQzVDO0FBQ0EsOEVBQThFLG1CQUFtQixDQUFDO0FBQ2xHLGtFQUFrRSxxQkFBcUIsQ0FBQztBQUFFLHNCQUFzQjtBQUNoSCwwREFBMEQsNEJBQTRCLENBQUM7QUFBRSw2QkFBNkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZiYXIgPiBsaVxue1xuICAgIHdpZHRoOiAyNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciA+IGxpID4gYVxueyAgICBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciA+IGxpID4gYTpob3Zlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLypodG1sIHsqL1xuXHQvKndpZHRoOiAxMDAlOyovIC8qcmVxdWlyZWQgaWYgdXNpbmcgJSB3aWR0aCovXG5cdC8qaGVpZ2h0OiAxMDAlOyovIC8qcmVxdWlyZWQgaWYgdXNpbmcgJSBoZWlnaHQqL1xuLyp9Ki9cblxuLnRhYmxlTGFiZWx7XG4gICBtYXJnaW4tbGVmdDogMTBweDs7XG59XG5cbi50YWJsZUxhYmVsOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW5uZXJUYWJsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMTcsIDIxNyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYmxlQ29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDE2MiwgMTYyKTsgXG4gICAgd2lkdGg6IDcwJTsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuYm9keSB7XG5cdC8qd2lkdGg6IDEwMCU7Ki8gLypyZXF1aXJlZCBpZiB1c2luZyAlIHdpZHRoKi9cblx0LypoZWlnaHQ6IDEwMCU7Ki8gLypyZXF1aXJlZCBpZiB1c2luZyAlIGhlaWdodCovXG5cdC8qbWFyZ2luOiAwOyovIC8qcmVxdWlyZWQgaWYgdXNpbmcgJSB3aWR0aCBvciBoZWlnaHQqL1xuXHQvKnBhZGRpbmc6IDAgMjBweCAwIDIwcHg7Ki8gLypwdXJlbHkgYWVzdGhldGljLCBub3QgcmVxdWlyZWQqL1xuICAvKmJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki8gLypyZXF1aXJlZCBpZiB1c2luZyBhYm92ZSBkZWNsYXJhdGlvbiovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IC8qZGVsZXRlIGlmIHVzaW5nICUgd2lkdGgsIG9yIHlvdSBkb24ndCB3YW50IHRhYmxlIGNlbnRlcmVkKi9cbn1cbi5zY3JvbGxpbmd0YWJsZSB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2lkdGg6IGF1dG87IC8qc2V0IHRhYmxlIHdpZHRoIGhlcmUgaWYgdXNpbmcgZml4ZWQgdmFsdWUqL1xuXHQvKm1pbi13aWR0aDogMTAwJTsqLyAvKnNldCB0YWJsZSB3aWR0aCBoZXJlIGlmIHVzaW5nICUqL1xuXHRoZWlnaHQ6IDE4OHB4OyAvKnNldCB0YWJsZSBoZWlnaHQgaGVyZTsgY2FuIGJlIGZpeGVkIHZhbHVlIG9yICUqL1xuXHQvKm1pbi1oZWlnaHQ6IDEwNHB4OyovIC8qaWYgdXNpbmcgJSBoZWlnaHQsIG1ha2UgdGhpcyBhdCBsZWFzdCBsYXJnZSBlbm91Z2ggdG8gZml0IHNjcm9sbGJhciBhcnJvd3MgKyBjYXB0aW9ucyArIHRoZWFkKi9cblx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0cGFkZGluZy10b3A6IDIwcHg7IC8qdGhpcyBkZXRlcm1pbmVzIHRvcCBjYXB0aW9uIGhlaWdodCovXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4OyAvKnRoaXMgZGV0ZXJtaW5lcyBib3R0b20gY2FwdGlvbiBoZWlnaHQqL1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNjcm9sbGluZ3RhYmxlICoge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IC8qdG9wIHRhYmxlIGJvcmRlciovXG5cdGhlaWdodDogMTAwJTtcblx0cGFkZGluZy10b3A6IDIwcHg7IC8qdGhpcyBkZXRlcm1pbmVzIGNvbHVtbiBoZWFkZXIgaGVpZ2h0Ki9cbn1cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdjpiZWZvcmUge1xuXHR0b3A6IDA7XG5cdGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlOyAvKmNvbHVtbiBoZWFkZXIgYmFja2dyb3VuZCBjb2xvciovXG59XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXY6YmVmb3JlLFxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAtMTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTAlO1xuXHRsZWZ0OiAwO1xufVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2IHtcblx0LyptaW4taGVpZ2h0OiA0M3B4OyovIC8qaWYgdXNpbmcgJSBoZWlnaHQsIG1ha2UgdGhpcyBhdCBsZWFzdCBsYXJnZSBlbm91Z2ggdG8gZml0IHNjcm9sbGJhciBhcnJvd3MqL1xuXHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogc2Nyb2xsOyAvKnNldCB0byBhdXRvIGlmIHVzaW5nIGZpeGVkIG9yICUgd2lkdGg7IGVsc2Ugc2Nyb2xsKi9cblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjazsgLypib3JkZXIgYXJvdW5kIHRhYmxlIGJvZHkqL1xufVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2OmFmdGVyIHtiYWNrZ3JvdW5kOiB3aGl0ZTt9IC8qbWF0Y2ggcGFnZSBiYWNrZ3JvdW5kIGNvbG9yKi9cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xuXHRtYXJnaW4tdG9wOiAtMjBweDsgLyppbnZlcnNlIG9mIGNvbHVtbiBoZWFkZXIgaGVpZ2h0Ki9cblx0LyptYXJnaW4tcmlnaHQ6IDE3cHg7Ki8gLyp1bmNvbW1lbnQgaWYgdXNpbmcgJSB3aWR0aCovXG59XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IGNhcHRpb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTIwcHg7IC8qaW52ZXJzZSBvZiBjYXB0aW9uIGhlaWdodCovXG5cdG1hcmdpbi10b3A6IC0xcHg7IC8qaW52ZXJzZSBvZiBib3JkZXItd2lkdGgqL1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlID4gKiA+IHRyID4gKiB7cGFkZGluZzogMDt9XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRoZWFkIHtcblx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2ID4gdGFibGUgPiB0aGVhZCA+IHRyID4gKiA+IGRpdiB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMCA2cHggMCA2cHg7IC8qaGVhZGVyIGNlbGwgcGFkZGluZyovXG59XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiA6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdGhlaWdodDogMjBweDsgLyptYXRjaCBjb2x1bW4gaGVhZGVyIGhlaWdodCovXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7IC8qbGVmdG1vc3QgaGVhZGVyIGJvcmRlciovXG59XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiAqID4gZGl2W2xhYmVsXTpiZWZvcmUsXG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiAqID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkLFxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2ID4gdGFibGUgPiB0aGVhZCA+IHRyID4gKiArIDpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRjb2xvcjogd2hpdGU7IC8qaGVhZGVyIHJvdyBmb250IGNvbG9yKi9cbn1cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlID4gdGhlYWQgPiB0ciA+ICogPiBkaXZbbGFiZWxdOmJlZm9yZSxcbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlID4gdGhlYWQgPiB0ciA+ICogPiBkaXZbbGFiZWxdOmFmdGVyIHtjb250ZW50OiBhdHRyKGxhYmVsKTt9XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiAqICsgOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtaW4taGVpZ2h0OiAyMHB4OyAvKm1hdGNoIGNvbHVtbiBoZWFkZXIgaGVpZ2h0Ki9cblx0cGFkZGluZy10b3A6IDFweDtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjazsgLypib3JkZXJzIGJldHdlZW4gaGVhZGVyIGNlbGxzKi9cbn1cbi5zY3JvbGxpbmd0YWJsZSAuc2Nyb2xsYmFyaGVhZCB7ZmxvYXQ6IHJpZ2h0O31cbi5zY3JvbGxpbmd0YWJsZSAuc2Nyb2xsYmFyaGVhZDpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDBweDtcblx0dG9wOiAtMXB4OyAvKmludmVyc2UgYm9yZGVyLXdpZHRoKi9cblx0YmFja2dyb3VuZDogd2hpdGU7IC8qbWF0Y2ggcGFnZSBiYWNrZ3JvdW5kIGNvbG9yKi9cbn1cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlID4gdGJvZHkgPiB0cjphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuXHR0b3A6IC0xcHg7IC8qaW52ZXJzZSBvZiBib3JkZXIgd2lkdGgqL1xufVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2ID4gdGFibGUgPiB0Ym9keSB7dmVydGljYWwtYWxpZ246IHRvcDt9XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHIge2JhY2tncm91bmQ6IHdoaXRlO31cbi5zY3JvbGxpbmd0YWJsZSA+IGRpdiA+IGRpdiA+IHRhYmxlID4gdGJvZHkgPiB0ciA+ICoge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xuXHRoZWlnaHQ6IDIwcHg7IC8qbWF0Y2ggY29sdW1uIGhlYWRlciBoZWlnaHQqL1xufVxuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2ID4gdGFibGUgPiB0Ym9keTpsYXN0LW9mLXR5cGUgPiB0cjpsYXN0LWNoaWxkID4gKiB7Ym9yZGVyLWJvdHRvbTogbm9uZTt9XG4uc2Nyb2xsaW5ndGFibGUgPiBkaXYgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiBnYWluc2Jvcm87fSAvKmFsdGVybmF0ZSByb3cgY29sb3IqL1xuLnNjcm9sbGluZ3RhYmxlID4gZGl2ID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gKiArICoge2JvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7fSAvKmJvcmRlcnMgYmV0d2VlbiBib2R5IGNlbGxzKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: ConfigService }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");








// UI n  



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_component__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
    ], imports: [[
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                ],
                imports: [
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");





const routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Log Out ", ctx_r1.username, "");
} }
class LoginComponent {
    constructor(router) {
        this.router = router;
        this.loggedIn = false;
    }
    ngOnInit() {
        this.checkLoggedIn();
    }
    checkLoggedIn() {
        let value = localStorage.getItem('loggedIn');
        if (value === 'true') {
            this.loggedIn = true;
            this.username = localStorage.getItem('username');
        }
        else {
            this.loggedIn = false;
        }
    }
    login() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        // #### TEMP ####
        if (username !== "admin" || password !== "pokes123")
            return;
        // #### TEMP ####
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        this.checkLoggedIn();
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 500);
    }
    logout() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        this.checkLoggedIn();
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 1000);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [[1, "login-div"], [4, "ngIf"], [1, "CourseNumber"], [1, "bold"], ["id", "username", "type", "text", "placeholder", "Username"], ["id", "password", "type", "password", "placeholder", "Password"], ["id", "submitname", 1, "submit", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 15, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".login-div[_ngcontent-%COMP%]\n{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZGl2XG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map