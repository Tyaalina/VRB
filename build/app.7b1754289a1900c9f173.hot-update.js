webpackHotUpdate("app",{

/***/ "./src/app/components/pages/message/MessageComponent.tsx":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/message/MessageComponent.tsx ***!
  \***************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var theme = {
    global: {
        font: {
            family: 'Prosto One',
        },
    },
    card: {
        container: {
            background: '#1a3a39',
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
                    size: "30px",
                    height: "40px",
                }
            }
        }
    },
};
var MessageComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], { margin: "medium" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], { size: "large", margin: "small", color: "#ADFF00" }, props.authorUserName),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], { size: "small" }, props.title))));
};


/***/ })

})
//# sourceMappingURL=app.7b1754289a1900c9f173.hot-update.js.map