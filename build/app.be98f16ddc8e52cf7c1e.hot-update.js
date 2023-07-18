webpackHotUpdate("app",{

/***/ "./src/app/components/pages/topic/SubTopicForm.tsx":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/topic/SubTopicForm.tsx ***!
  \*********************************************************/
/*! exports provided: SubTopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTopicForm", function() { return SubTopicForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopicPage.css */ "./src/app/components/pages/topic/TopicPage.css");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopicPage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/topic/topicComponent */ "./src/app/components/shared/topic/topicComponent.tsx");
/* harmony import */ var _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/palm_tree_PNG93263.png */ "./src/img/palm_tree_PNG93263.png");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _TopicConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopicConstants */ "./src/app/components/pages/topic/TopicConstants.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
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











var SubTopic = (function (_super) {
    __extends(SubTopic, _super);
    function SubTopic(props) {
        var _this = _super.call(this, props) || this;
        _this._authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_9__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_10__["SERVICE_IDENTIFIER"].AuthService);
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_9__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_10__["SERVICE_IDENTIFIER"].TopicAction);
        props.dispatch(_this.actions.initForm());
        return _this;
    }
    SubTopic.prototype.componentDidMount = function () {
        this.props.dispatch({ type: _TopicConstants__WEBPACK_IMPORTED_MODULE_7__["TOPIC"] });
        this.getTopics();
    };
    SubTopic.prototype.getTopics = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://185.209.31.106:55558/subscriptions', { headers: { Authorization: "Bearer " + this._authService.getAuthToken() } })
            .then(function (result) { return _this.props.dispatch(_this.actions.setTopics(result.data.topics)); });
        console.log("\u042D\u0442\u043E \u043F\u0440\u043E\u043F\u044B" + this.props);
    };
    SubTopic.prototype.deleteTopic = function (topicId) {
    };
    SubTopic.prototype.editComponent = function (topicId, title) {
    };
    SubTopic.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'medium', gap: "small", align: "center", alignSelf: "stretch" }, _this.props.form.record.map(function (element) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { key: element.topicId, id: element.topicId, imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: element.title, description: "Данная тема посвящена языку " + element.title, deleteTopic: function () { return _this.deleteTopic(element.topicId); }, editTopic: function (newTitle) { return _this.editComponent(element.topicId, newTitle); } })); }))))); }));
    };
    return SubTopic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return __assign({}, state.topic);
}
var SubTopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SubTopic);


/***/ }),

/***/ "./src/app/components/pages/topic/SubTopicPage.tsx":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/topic/SubTopicPage.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _SubTopicForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubTopicForm */ "./src/app/components/pages/topic/SubTopicForm.tsx");
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







var SubTopicPage = (function (_super) {
    __extends(SubTopicPage, _super);
    function SubTopicPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    SubTopicPage.prototype.render = function () {
        var _this = this;
        document.body.className = "";
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_4__["menuConfig"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], { level: "2", fill: true, textAlign: "center" }, t('Topic')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { round: "full", align: "end", margin: { right: "medium" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Add"], null), hoverIndicator: true, onClick: function () { } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubTopicForm__WEBPACK_IMPORTED_MODULE_6__["SubTopicForm"], __assign({}, _this.props)))); }));
    };
    return SubTopicPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SubTopicPage);


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
/* harmony import */ var _app_components_pages_topic_SubTopicPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../app/components/pages/topic/SubTopicPage */ "./src/app/components/pages/topic/SubTopicPage.tsx");















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
        path: _routes__WEBPACK_IMPORTED_MODULE_6__["SUBTOPIC"],
        component: _app_components_pages_topic_SubTopicPage__WEBPACK_IMPORTED_MODULE_14__["default"],
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
//# sourceMappingURL=app.be98f16ddc8e52cf7c1e.hot-update.js.map