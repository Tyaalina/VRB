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

/***/ "./src/app/components/pages/login/LoginForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/pages/login/LoginForm.tsx ***!
  \******************************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _LoginPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPage.css */ "./src/app/components/pages/login/LoginPage.css");
/* harmony import */ var _LoginPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoginPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../App */ "./src/App.tsx");
/* harmony import */ var _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/helpers/HistoryHelper */ "./src/app/utils/helpers/HistoryHelper.ts");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/wrappers/FormMessageWrapper */ "./src/app/components/shared/wrappers/FormMessageWrapper.tsx");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};















var LoginFormComponent = (function (_super) {
    __extends(LoginFormComponent, _super);
    function LoginFormComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.validationSchema = {
            username: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Поле является обязательным').trim(),
            password: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Поле является обязательным').trim(),
        };
        _this.getInitialValues = function () { return ({
            username: '',
            password: '',
        }); };
        _this._createValidationSchemaObject = function () {
            return yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape(_this.validationSchema);
        };
        _this._onSubmit = function (dto, form) {
            _this.props.dispatch(_this.actions.clearFormMessages());
            var payload = {
                dto: dto,
                formHelpers: form,
                id: undefined
            };
            _this.props.dispatch(_this.actions.login(payload));
        };
        _this.getCustomErrorMessage = function () {
            var _a;
            return (_a = _this.props.form.formError) === null || _a === void 0 ? void 0 : _a.message;
        };
        _this.getCustomSuccessMessage = function () {
            return _this.props.form.formSuccess;
        };
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_10__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_11__["SERVICE_IDENTIFIER"].LoginAction);
        props.dispatch(_this.actions.initForm());
        return _this;
    }
    LoginFormComponent.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            this.props.helpers.isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "loader" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default.a, { type: "Puff", color: "#ADFF00", height: 100, width: 100 })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], { onSubmit: this._onSubmit, enableReinitialize: true, validationSchema: this._createValidationSchemaObject(), validateOnBlur: true, initialValues: this.getInitialValues() }, function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_8__["Translation"], null, function (t) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Grommet"], { theme: _App__WEBPACK_IMPORTED_MODULE_4__["customTheme"] },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Header"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { id: 'LoginHeader' }, t("Log in"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { direction: "column", align: "center", justify: "center", pad: { horizontal: 'medium', vertical: 'small' }, className: "loginBody" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "loginText" }, t("Full name")),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { width: "medium", direction: "row", align: "center", round: "xlarge", border: true },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: 'emailInput', value: (_a = _this.props.form.record) === null || _a === void 0 ? void 0 : _a.username, onChange: function (event) { return _this.props.dispatch(_this.actions.emailChanged(event.target.value)); } })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "fields__error__text" }, (_d = (_c = (_b = _this.props.form.formError) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c.filter(function (t) { return t.fieldName == "Username"; })[0]) === null || _d === void 0 ? void 0 : _d.message),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "loginText" }, t("Password")),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { width: "medium", direction: "row", align: "center", round: "xlarge", border: true },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: 'passwordInput', type: _this.props.helpers.reveal ? 'text' : 'password', value: (_e = _this.props.form.record) === null || _e === void 0 ? void 0 : _e.password, onChange: function (event) { return _this.props.dispatch(_this.actions.passwordChanged(event.target.value)); } }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: _this.props.helpers.reveal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_7__["View"], { size: "medium" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_7__["Hide"], { size: "medium" }), disabled: false, onClick: function (event) { return _this.props.dispatch(_this.actions.revealChanged(!_this.props.helpers.reveal)); } })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "fields__error__text" }, (_h = (_g = (_f = _this.props.form.formError) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.filter(function (t) { return t.fieldName == "Password"; })[0]) === null || _h === void 0 ? void 0 : _h.message),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Grid"], { fill: true, margin: { top: 'medium' }, rows: ['auto', 'auto'], columns: ['auto', 'auto'], areas: [
                                    { name: 'loginButton', start: [0, 0], end: [1, 0] },
                                    { name: 'singinButton', start: [1, 0], end: [1, 1] },
                                ] },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { gridArea: "loginButton", direction: "column", align: "center", justify: "center", pad: { horizontal: 'medium', vertical: 'small' } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", label: t("Log in"), onClick: function () {
                                            var _a, _b;
                                            return _this._onSubmit({
                                                username: (_a = _this.props.form.record) === null || _a === void 0 ? void 0 : _a.username,
                                                password: (_b = _this.props.form.record) === null || _b === void 0 ? void 0 : _b.password
                                            }, undefined);
                                        } })),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { gridArea: "singinButton", direction: "column", align: "center", justify: "center", pad: { horizontal: 'medium', vertical: 'small' } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: function () { return _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_PAGE"]); }, label: t("Sign in") }))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_13__["FormMessageWrapper"], { isSuccess: true }, _this.getCustomSuccessMessage()),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_13__["FormMessageWrapper"], { isError: true }, _this.getCustomErrorMessage())));
            })); })));
    };
    return LoginFormComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return __assign({}, state.login);
}
var LoginForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(LoginFormComponent);


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
//# sourceMappingURL=app.f067d916ea3b878945ea.hot-update.js.map