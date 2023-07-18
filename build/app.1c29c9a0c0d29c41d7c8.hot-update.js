webpackHotUpdate("app",{

/***/ "":
false,

/***/ "./src/app/components/pages/topic/TopicPage.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicPage.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopicForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicForm */ "./src/app/components/pages/topic/TopicForm.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
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







var TopicPage = (function (_super) {
    __extends(TopicPage, _super);
    function TopicPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    TopicPage.prototype.render = function () {
        var _this = this;
        document.body.className = "";
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_5__["menuConfig"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Heading"], { level: "2", fill: true, textAlign: "center" }, t('Topic')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { round: "full", align: "end", margin: { right: "medium" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_6__["Add"], null), hoverIndicator: true, onClick: function () { } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopicForm__WEBPACK_IMPORTED_MODULE_1__["TopicForm"], __assign({}, _this.props)))); }));
    };
    return TopicPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TopicPage);


/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.css":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

})
//# sourceMappingURL=app.1c29c9a0c0d29c41d7c8.hot-update.js.map