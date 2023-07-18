webpackHotUpdate("app",{

/***/ "./src/app/components/pages/topic/TopicForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicForm.tsx ***!
  \******************************************************/
/*! exports provided: Example, TopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return Example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return TopicForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopicPage.css */ "./src/app/components/pages/topic/TopicPage.css");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopicPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
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




var cards = Array(20);
var Example = function () {
    var size = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(grommet__WEBPACK_IMPORTED_MODULE_3__["ResponsiveContext"]);
    console.log(size);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Grommet"], { theme: grommet__WEBPACK_IMPORTED_MODULE_3__["grommet"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], { pad: "large" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Grid"], { columns: size !== 'small' ? 'small' : '100%', gap: "small" }, cards.map(function (card, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Card"], { pad: "large", key: index }, card)); })))));
};
var Topic = (function (_super) {
    __extends(Topic, _super);
    function Topic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Topic.prototype.render = function () {
        var cards = Array(20);
        console.log("Размер массива", cards.length);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "123"));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return state.registration;
}
var TopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Topic);


/***/ })

})
//# sourceMappingURL=app.427022351b610f0230b5.hot-update.js.map