webpackHotUpdate("app",{

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
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_7__);
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








var Topic = (function (_super) {
    __extends(Topic, _super);
    function Topic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Topic.prototype.render = function () {
        var cards = [1, 2, 3];
        console.log("Размер массива", cards.length);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], { theme: grommet_themes__WEBPACK_IMPORTED_MODULE_7__["grommet"], full: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'small', gap: "small" }, cards.map(function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { id: "1", imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: "test title", description: "test description 1 2 3 lalala sasasasa one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen" })); }))))); }));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return state.registration;
}
var TopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Topic);


/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.css":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.tsx":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.tsx ***!
  \************************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topicComponent.css */ "./src/app/components/shared/topic/topicComponent.css");
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_topicComponent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



var theme = {
    global: {
        font: {
            family: 'Prosto One',
        },
    },
    card: {
        container: {
            background: '#FFFFFF10',
            elevation: 'none',
        },
        footer: {
            pad: { horizontal: 'medium', vertical: 'small' },
        },
    },
    heading: {
        color: '#ADFF0037',
        level: {
            2: {
                medium: {
                    size: "24px",
                    height: "30px",
                }
            }
        }
    },
};
var TopicComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Card"], { elevation: "large", width: "medium" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardBody"], { height: "small" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Image"], { fit: "contain", alignSelf: "center", src: props.imagelink })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { pad: { horizontal: 'medium' }, responsive: false },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], { level: "2", alignSelf: "center" }, props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], { color: "white", size: "small", margin: { top: 'none' } }, props.description)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { direction: "row", align: "center", gap: "small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], { href: "https://www.collinsdictionary.com/us/dictionary/english/bridge", label: "MORE", size: "medium", color: "#ADFF0037" }))))));
};


/***/ }),

/***/ "./src/img/palm_tree_PNG93263.png":
/*!****************************************!*\
  !*** ./src/img/palm_tree_PNG93263.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5c64618126fb988f8398c311ddd0a4b.png");

/***/ })

})
//# sourceMappingURL=app.fd3bd0fa2be219fb91d6.hot-update.js.map