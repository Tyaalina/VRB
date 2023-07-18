webpackHotUpdate("app",{

/***/ "./src/app/components/pages/message/MessagePage.tsx":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/message/MessagePage.tsx ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
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




var MessagePage = (function (_super) {
    __extends(MessagePage, _super);
    function MessagePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    MessagePage.prototype.render = function () {
        document.body.className = "";
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_1__["menuConfig"] })));
    };
    return MessagePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));


/***/ }),

/***/ "./src/shared/constants/routesConfig.ts":
/*!**********************************************!*\
  !*** ./src/shared/constants/routesConfig.ts ***!
  \**********************************************/
/*! exports provided: routerConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerConfig", function() { return routerConfig; });
/* harmony import */ var _app_components_pages_about_aboutComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/components/pages/about/aboutComponent */ "./src/app/components/pages/about/aboutComponent.tsx");
/* harmony import */ var _app_components_pages_blogComponent_blogComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/components/pages/blogComponent/blogComponent */ "./src/app/components/pages/blogComponent/blogComponent.tsx");
/* harmony import */ var _app_components_pages_faq_faqComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/components/pages/faq/faqComponent */ "./src/app/components/pages/faq/faqComponent.tsx");
/* harmony import */ var _app_components_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/pages/home/HomePage */ "./src/app/components/pages/home/HomePage.tsx");
/* harmony import */ var _app_components_pages_login_LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/pages/login/LoginPage */ "./src/app/components/pages/login/LoginPage.tsx");
/* harmony import */ var _app_components_pages_registration_RegistrationPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/pages/registration/RegistrationPage */ "./src/app/components/pages/registration/RegistrationPage.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _app_components_pages_changePassword_ChangePasswordPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/pages/changePassword/ChangePasswordPage */ "./src/app/components/pages/changePassword/ChangePasswordPage.tsx");
/* harmony import */ var _app_components_pages_emailConfirmation_EmailConfirmationPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/pages/emailConfirmation/EmailConfirmationPage */ "./src/app/components/pages/emailConfirmation/EmailConfirmationPage.tsx");
/* harmony import */ var _app_components_pages_searchBar_SearchBarPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/components/pages/searchBar/SearchBarPage */ "./src/app/components/pages/searchBar/SearchBarPage.tsx");
/* harmony import */ var _app_components_pages_profileHeader_ProfileHeaderPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/components/pages/profileHeader/ProfileHeaderPage */ "./src/app/components/pages/profileHeader/ProfileHeaderPage.tsx");
/* harmony import */ var _app_components_pages_topic_TopicPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app/components/pages/topic/TopicPage */ "./src/app/components/pages/topic/TopicPage.tsx");
/* harmony import */ var _app_components_PersonalAccount_PersonalAccountPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app/components/PersonalAccount/PersonalAccountPage */ "./src/app/components/PersonalAccount/PersonalAccountPage.tsx");
/* harmony import */ var _app_components_pages_message_MessagePage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../app/components/pages/message/MessagePage */ "./src/app/components/pages/message/MessagePage.tsx");














var routerConfig = [
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["ROOT_ROUTE"],
        component: _app_components_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_PAGE"],
        component: _app_components_pages_login_LoginPage__WEBPACK_IMPORTED_MODULE_4__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_PAGE"],
        component: _app_components_pages_registration_RegistrationPage__WEBPACK_IMPORTED_MODULE_5__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["CHANGEPASSWORD_PAGE"],
        component: _app_components_pages_changePassword_ChangePasswordPage__WEBPACK_IMPORTED_MODULE_7__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["EMAILCONFIRMATION_PAGE"],
        component: _app_components_pages_emailConfirmation_EmailConfirmationPage__WEBPACK_IMPORTED_MODULE_8__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["SEARCH_BAR"],
        component: _app_components_pages_searchBar_SearchBarPage__WEBPACK_IMPORTED_MODULE_9__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["PROFILE_HEADER"],
        component: _app_components_pages_profileHeader_ProfileHeaderPage__WEBPACK_IMPORTED_MODULE_10__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["TOPIC"],
        component: _app_components_pages_topic_TopicPage__WEBPACK_IMPORTED_MODULE_11__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["ABOUT_ROUTE_PAGE"],
        component: _app_components_pages_about_aboutComponent__WEBPACK_IMPORTED_MODULE_0__["AboutPage"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["FAQ_ROUTE_PAGE"],
        component: _app_components_pages_faq_faqComponent__WEBPACK_IMPORTED_MODULE_2__["FaqPage"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["BLOG_ROUTE_PAGE"],
        component: _app_components_pages_blogComponent_blogComponent__WEBPACK_IMPORTED_MODULE_1__["BlogPage"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["PROFILE"],
        component: _app_components_PersonalAccount_PersonalAccountPage__WEBPACK_IMPORTED_MODULE_12__["default"],
        exact: true
    },
    {
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["MESSAGE"],
        component: _app_components_pages_message_MessagePage__WEBPACK_IMPORTED_MODULE_13__["default"],
        exact: true
    },
];
/* harmony default export */ __webpack_exports__["default"] = (routerConfig);


/***/ })

})
//# sourceMappingURL=app.5fc0297fd063c850df97.hot-update.js.map