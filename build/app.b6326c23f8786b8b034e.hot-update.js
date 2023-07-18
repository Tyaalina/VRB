webpackHotUpdate("app",{

/***/ "./src/app/components/menu/Menu.tsx":
/*!******************************************!*\
  !*** ./src/app/components/menu/Menu.tsx ***!
  \******************************************/
/*! exports provided: MenuCompnent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCompnent", function() { return MenuCompnent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/buttons/buttonComponent */ "./src/app/components/shared/buttons/buttonComponent.tsx");
/* harmony import */ var _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers/HistoryHelper */ "./src/app/utils/helpers/HistoryHelper.ts");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.css */ "./src/app/components/menu/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _pages_profileHeader_ProfileHeaderForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/profileHeader/ProfileHeaderForm */ "./src/app/components/pages/profileHeader/ProfileHeaderForm.tsx");









var MenuCompnent = function (props) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        document.body.className = 'menuable_body';
    });
    var _a = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(), t = _a.t, i18n = _a.i18n;
    var _authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_7__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__["SERVICE_IDENTIFIER"].AuthService);
    var changeLang = function (lang) {
        i18n.changeLanguage(lang);
    };
    var gotoLogin = function () {
        _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_3__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_PAGE"]);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "menu__row" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "header" }, props.items.map(function (item, i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { onClick: function () { _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_3__["default"].push(item.link); } }, t(item.name)));
            })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "menu__auth_panel" }, (!_authService.userIsAutheticated())
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], { onClick: gotoLogin, isValidating: false, formSuccess: "", type: "button", className: "tologin__btn", value: t("Log in") })
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profileHeader_ProfileHeaderForm__WEBPACK_IMPORTED_MODULE_8__["ProfileHeader"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "lang_dropdown" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], { onClick: function () { return changeLang("ru"); }, isValidating: false, formSuccess: "", type: "button", className: "lang__btn", value: "RU" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], { onClick: function () { return changeLang("en"); }, isValidating: false, formSuccess: "", type: "button", className: "lang__btn", value: "EN" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (MenuCompnent);


/***/ })

})
//# sourceMappingURL=app.b6326c23f8786b8b034e.hot-update.js.map