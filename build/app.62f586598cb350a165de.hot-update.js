webpackHotUpdate("app",{

/***/ "./node_modules/react-confirm-alert/src/react-confirm-alert.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-confirm-alert/src/react-confirm-alert.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/PersonalAccount/PersonalAccountPage.tsx":
/*!********************************************************************!*\
  !*** ./src/app/components/PersonalAccount/PersonalAccountPage.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/buttons/buttonComponent */ "./src/app/components/shared/buttons/buttonComponent.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var PersonalAccounPage = (function (_super) {
    __extends(PersonalAccounPage, _super);
    function PersonalAccounPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalAccounPage.prototype.render = function () {
        var gotoSignUp = function () {
            history.push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_PAGE"]);
        };
        var gotoTopic = function () {
            history.push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_4__["TOPIC"]);
        };
        var _authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_3__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__["SERVICE_IDENTIFIER"].AuthService);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__["menuConfig"] }),
            (!_authService.userIsAutheticated())
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], { onClick: function () { gotoSignUp(); }, isValidating: false, formSuccess: "", type: "button", className: "tosignup__btn", value: t("Sign in") })
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], { onClick: function () { gotoTopic(); }, isValidating: false, formSuccess: "", type: "button", className: "tosignup__btn", value: t("Topic") })));
    };
    return PersonalAccounPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PersonalAccounPage);


/***/ }),

/***/ "./src/app/components/menu/Menu.css":
/*!******************************************!*\
  !*** ./src/app/components/menu/Menu.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/changePassword/ChangePasswordPage.css":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/changePassword/ChangePasswordPage.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/emailConfirmation/EmailConfirmationPage.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/emailConfirmation/EmailConfirmationPage.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/home/homePage.css":
/*!****************************************************!*\
  !*** ./src/app/components/pages/home/homePage.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/login/LoginPage.css":
/*!******************************************************!*\
  !*** ./src/app/components/pages/login/LoginPage.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/profileHeader/ProfileHeaderPage.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/profileHeader/ProfileHeaderPage.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/registration/RegistrationPage.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/registration/RegistrationPage.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/searchBar/SearchBarPage.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/searchBar/SearchBarPage.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/pages/topic/TopicPage.css":
/*!******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicPage.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/buttons/buttonComponent.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/buttons/buttonComponent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/input/inputComponent.css":
/*!************************************************************!*\
  !*** ./src/app/components/shared/input/inputComponent.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/profileHeader/profileHeaderComponent.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/profileHeader/profileHeaderComponent.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.css":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "?0ca4":
false,

/***/ "?17a3":
false,

/***/ "?1974":
false,

/***/ "?1ad8":
false,

/***/ "?1ebf":
false,

/***/ "?275f":
false,

/***/ "?2bd4":
false,

/***/ "?2c83":
false,

/***/ "?2c89":
false,

/***/ "?3f11":
false,

/***/ "?4c97":
false,

/***/ "?64a9":
false,

/***/ "?74e6":
false,

/***/ "?7ed7":
false,

/***/ "?b4fc":
false,

/***/ "?bfd7":
false,

/***/ "?d4fd":
false,

/***/ "?eafe":
false,

/***/ "?ed5d":
false,

/***/ "?efc1":
false

})
//# sourceMappingURL=app.62f586598cb350a165de.hot-update.js.map