webpackHotUpdate("app",{

/***/ "./src/app/components/pages/registration/RegistrationForm.tsx":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/registration/RegistrationForm.tsx ***!
  \********************************************************************/
/*! exports provided: RegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationForm", function() { return RegistrationForm; });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/helpers/HistoryHelper */ "./src/app/utils/helpers/HistoryHelper.ts");
/* harmony import */ var _shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/buttons/buttonComponent */ "./src/app/components/shared/buttons/buttonComponent.tsx");
/* harmony import */ var _shared_checkBox_checkBoxComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/checkBox/checkBoxComponent */ "./src/app/components/shared/checkBox/checkBoxComponent.tsx");
/* harmony import */ var _shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/input/inputComponent */ "./src/app/components/shared/input/inputComponent.tsx");
/* harmony import */ var _shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/wrappers/FormMessageWrapper */ "./src/app/components/shared/wrappers/FormMessageWrapper.tsx");
/* harmony import */ var _shared_wrappers_FormPlaceholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/wrappers/FormPlaceholder */ "./src/app/components/shared/wrappers/FormPlaceholder.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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















function componentDidMount() {
    var script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/003b2b18f7.js";
    script.async = true;
    document.body.appendChild(script);
}
var RegistrationFormComponent = (function (_super) {
    __extends(RegistrationFormComponent, _super);
    function RegistrationFormComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.validationSchema = {
            email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Поле является обязательным').trim().email("Email не корректный"),
            isSubscribe: yup__WEBPACK_IMPORTED_MODULE_4__["boolean"]().required("Вы должны согласится с правилами"),
            username: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Поле является обязательным').trim(),
            password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Поле является обязательным').trim(),
            repeatePassword: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Поле является обязательным').trim(),
        };
        _this.getInitialValues = function () { return ({
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatePassword: '',
        }); };
        _this._onSubmit = function (dto, form) {
            _this.props.dispatch(_this.actions.clearFormMessages());
            var payload = {
                dto: dto,
                formHelpers: form,
                id: undefined
            };
            _this.props.dispatch(_this.actions.registration(payload));
        };
        _this._createValidationSchemaObject = function () {
            return yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape(_this.validationSchema);
        };
        _this.getCustomErrorMessage = function () {
            var _a;
            return (_a = _this.props.form.formError) === null || _a === void 0 ? void 0 : _a.message;
        };
        _this.getCustomSuccessMessage = function () {
            return _this.props.form.formSuccess;
        };
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_6__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_7__["SERVICE_IDENTIFIER"].RegistrationActions);
        props.dispatch(_this.actions.initForm());
        return _this;
    }
    RegistrationFormComponent.prototype.render = function () {
        var _this = this;
        var initialValues = this.getInitialValues();
        if (!initialValues) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_wrappers_FormPlaceholder__WEBPACK_IMPORTED_MODULE_13__["FormPlaceholder"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__["Formik"], { enableReinitialize: true, onSubmit: this._onSubmit, validationSchema: this._createValidationSchemaObject(), validateOnBlur: true, initialValues: initialValues }, function (props) {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], { success: !!_this.props.form.formSuccess, loading: props.isSubmitting, error: !!((_a = _this.props.form.formError) === null || _a === void 0 ? void 0 : _a.message), onSubmit: props.handleSubmit },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_14__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "text" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t("Terms and condition header")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t("Privacy policy"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "registrationForm" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: t("Full name"), required: true, autoFocus: true, name: "username" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: t("First name"), required: true, autoFocus: true, name: "firstname" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: t("Last name"), required: true, autoFocus: true, name: "lastname" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: "Email", required: true, autoFocus: true, name: "email" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: t("Password"), required: true, inputProps: { type: "password" }, name: "password" }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_input_inputComponent__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], { placeholder: t("Repeat password"), required: true, inputProps: { type: "password" }, name: "repeatePassword" })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "checkBox" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_checkBox_checkBoxComponent__WEBPACK_IMPORTED_MODULE_10__["CheckBoxComponent"], { placeholder: t("label"), required: true, name: "isSubscribe" })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "pushButtons" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], { onClick: function () { return _this._onSubmit({
                                username: _this.props.form.record.username,
                                firstname: _this.props.form.record.firstname,
                                lastname: _this.props.form.record.lastname,
                                email: _this.props.form.record.email,
                                password: _this.props.form.record.password,
                                repeatePassword: _this.props.form.record.repeatePassword,
                                isSubscribe: _this.props.form.record.isSubscribe,
                            }, undefined); }, isValidating: props.isInitialValid, formSuccess: _this.props.form.formSuccess, type: "submit", className: "agree", value: t("Agree and continue") }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], { onClick: function () { return _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_8__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_5__["LOGIN_PAGE"]); }, isValidating: false, formSuccess: _this.props.form.formSuccess, type: "button", className: "login", value: t("To Log In") })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_12__["FormMessageWrapper"], { isSuccess: true }, _this.getCustomSuccessMessage()),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_wrappers_FormMessageWrapper__WEBPACK_IMPORTED_MODULE_12__["FormMessageWrapper"], { isError: true }, _this.getCustomErrorMessage()))); })));
        }));
    };
    ;
    return RegistrationFormComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
function mapStateToProps(state) {
    return state.registration;
}
var RegistrationForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(RegistrationFormComponent);


/***/ })

})
//# sourceMappingURL=app.65491f49c1f4abbacfbd.hot-update.js.map