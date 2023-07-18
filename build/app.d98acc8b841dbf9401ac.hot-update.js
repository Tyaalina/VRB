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

/***/ "./src/app/components/pages/topic/TopicForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicForm.tsx ***!
  \******************************************************/
/*! exports provided: TopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return TopicForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopicPage.css */ "./src/app/components/pages/topic/TopicPage.css");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopicPage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/topic/topicComponent */ "./src/app/components/shared/topic/topicComponent.tsx");
/* harmony import */ var _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/palm_tree_PNG93263.png */ "./src/img/palm_tree_PNG93263.png");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
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








var Topic = (function (_super) {
    __extends(Topic, _super);
    function Topic(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { items: [] };
        return _this;
    }
    Topic.prototype.componentDidMount = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:4000/topic/')
            .then(function (result) { return _this.setState({
            items: result.data
        }); });
    };
    Topic.prototype.render = function () {
        var cards = [1, 2, 3];
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'medium', gap: "small", align: "center", alignSelf: "stretch" }, cards.map(function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { id: "1", imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: "test title", description: "test description 1 2 3 lalala sasasasa one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen" })); }))))); }));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return __assign({}, state.topic);
}
var TopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Topic);


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
//# sourceMappingURL=app.d98acc8b841dbf9401ac.hot-update.js.map