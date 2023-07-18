webpackHotUpdate("app",{

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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/buttons/buttonComponent */ "./src/app/components/shared/buttons/buttonComponent.tsx");
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
            history.push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_5__["REGISTRATION_PAGE"]);
        };
        var gotoTopic = function () {
            history.push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_5__["TOPIC"]);
        };
        var _authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_4__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].AuthService);
        var t = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])().t;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_2__["menuConfig"] }),
            (!_authService.userIsAutheticated())
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], { onClick: function () { gotoSignUp(); }, isValidating: false, formSuccess: "", type: "button", className: "tosignup__btn", value: t("Sign in") })
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], { onClick: function () { gotoTopic(); }, isValidating: false, formSuccess: "", type: "button", className: "tosignup__btn", value: t("Topic") })));
    };
    return PersonalAccounPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PersonalAccounPage);


/***/ })

})
//# sourceMappingURL=app.aab13b88877f8b435949.hot-update.js.map