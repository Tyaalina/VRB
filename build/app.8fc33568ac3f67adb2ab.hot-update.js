webpackHotUpdate("app",{

/***/ "./src/app/components/pages/message/MessagePage.tsx":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/message/MessagePage.tsx ***!
  \**********************************************************/
/*! exports provided: MessagePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/menuItems */ "./src/shared/constants/menuItems.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../menu/Menu */ "./src/app/components/menu/Menu.tsx");
/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageComponent */ "./src/app/components/pages/message/MessageComponent.tsx");
/* harmony import */ var _MessageConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MessageConstants */ "./src/app/components/pages/message/MessageConstants.ts");
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
                    size: "30px",
                    height: "40px",
                }
            }
        }
    },
};
var messagePage = (function (_super) {
    __extends(messagePage, _super);
    function messagePage(props) {
        var _this = _super.call(this, props) || this;
        _this._authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_5__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__["SERVICE_IDENTIFIER"].AuthService);
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_5__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__["SERVICE_IDENTIFIER"].TopicAction);
        props.dispatch(_this.actions.initForm());
        return _this;
    }
    messagePage.prototype.componentDidMount = function () {
        this.props.dispatch({ type: _MessageConstants__WEBPACK_IMPORTED_MODULE_9__["MESSAGE"] });
        this.getMessage();
    };
    messagePage.prototype.getMessage = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://185.209.31.106:55558/topic/" + this.props.match.params.id, { headers: { Authorization: "Bearer " + this._authService.getAuthToken() } })
            .then(function (result) { return _this.props.dispatch(_this.actions.setMessage(result.data.topic.topicMessageInfos)); });
    };
    messagePage.prototype.render = function () {
        document.body.className = "";
        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], { items: _shared_constants_menuItems__WEBPACK_IMPORTED_MODULE_4__["menuConfig"] }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Grommet"], { theme: theme },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], { margin: "xlarge", pad: "medium", alignSelf: 'center', alignContent: "center", align: "center" },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Card"], { elevation: "large", width: "large" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["CardBody"], { height: "small" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], { level: "2", alignSelf: "center" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u044B"),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MessageComponent__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], { id: "1", title: "\u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u0441\u0442", createdAt: "2021-05-21T17:59:28.384Z", authorUserName: "\u042D\u0442\u043E \u0430\u0432\u0442\u043E\u0440" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MessageComponent__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], { id: "2", title: "\u042D\u0442\u043E \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u0442\u0435\u043A\u0441\u0442 \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u0441\u0451", createdAt: "2021-05-21T17:59:28.384Z", authorUserName: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0430\u0432\u0442\u043E\u0440" })),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null,
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["TextArea"], { placeholder: "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" })))))));
    };
    return messagePage;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
function mapStateToProps(state) {
    return __assign({}, state.message);
}
var MessagePage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(messagePage);
/* harmony default export */ __webpack_exports__["default"] = (MessagePage);


/***/ })

})
//# sourceMappingURL=app.8fc33568ac3f67adb2ab.hot-update.js.map