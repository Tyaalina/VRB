webpackHotUpdate("app",{

/***/ "./src/app/components/pages/home/HomePage.tsx":
/*!****************************************************!*\
  !*** ./src/app/components/pages/home/HomePage.tsx ***!
  \****************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/buttons/buttonComponent */ "./src/app/components/shared/buttons/buttonComponent.tsx");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/helpers/HistoryHelper */ "./src/app/utils/helpers/HistoryHelper.ts");
/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homePage.css */ "./src/app/components/pages/home/homePage.css");
/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_homePage_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








var HomePage = function (props) {
    var gotoSignUp = function () {
        _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_PAGE"]);
    };
    var gotoTopic = function () {
        _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_2__["TOPIC"]);
    };
    var t = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])().t;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__["menuConfig"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_buttons_buttonComponent__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], { onClick: function () { gotoSignUp(); }, isValidating: false, formSuccess: "", type: "button", className: "tosignup__btn", value: t("Sign in") }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "home__maintext" },
            "ITFriends",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "home__maintext--point" }, ".")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "home__motivatetext" }, t("DescriptionMainPage"))));
};


/***/ })

})
//# sourceMappingURL=app.b11c6a47edf637ff33e7.hot-update.js.map