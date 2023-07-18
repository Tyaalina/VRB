webpackHotUpdate("app",{

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
            family: 'Prosto One'
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
};
var TopicComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Card"], { elevation: "large", width: "medium" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardBody"], { height: "small" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Image"], { fit: "cover", src: props.imagelink })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { pad: { horizontal: 'medium' }, responsive: false },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], { level: "4", margin: { vertical: 'medium' } }, props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], { margin: { top: 'none' } }, props.description)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { direction: "row", align: "center", gap: "small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], { href: "https://www.collinsdictionary.com/us/dictionary/english/bridge", label: "More" }))))));
};


/***/ })

})
//# sourceMappingURL=app.d24c52fab3798d863148.hot-update.js.map