webpackHotUpdate("app",{

/***/ "./src/app/components/pages/message/MessagePage.tsx":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/message/MessagePage.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
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





var theme = {
    global: {
        font: {
            family: 'Prosto One',
        },
        focus: {
            border: {
                color: "#E9FFE1"
            }
        },
        control: {
            border: {
                radius: "20px"
            }
        }
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
                    size: "24px",
                    height: "30px",
                }
            }
        }
    },
};
var MessagePage = (function (_super) {
    __extends(MessagePage, _super);
    function MessagePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    MessagePage.prototype.render = function () {
        document.body.className = "";
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_2__["menuConfig"] }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Grommet"], { theme: theme },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], { margin: "xlarge", pad: "medium", alignSelf: 'center', alignContent: "center", align: "center" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Card"], { elevation: "large", width: "large" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["CardBody"], { height: "small" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], { level: "1", alignSelf: "center" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u044B")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["CardFooter"], null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["TextArea"], { placeholder: "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" })))))));
    };
    return MessagePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MessagePage);


/***/ })

})
//# sourceMappingURL=app.eea3b9fb96a555b55e29.hot-update.js.map