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











var Topic = (function (_super) {
    __extends(Topic, _super);
    function Topic(props) {
        var _this = _super.call(this, props) || this;
        _this._authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_9__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_10__["SERVICE_IDENTIFIER"].AuthService);
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_9__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_10__["SERVICE_IDENTIFIER"].TopicAction);
        props.dispatch(_this.actions.initForm());
        return _this;
    }
    Topic.prototype.componentDidMount = function () {
        this.props.dispatch({ type: _TopicConstants__WEBPACK_IMPORTED_MODULE_7__["TOPIC"] });
        this.getTopics();
    };
    Topic.prototype.getTopics = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://185.209.31.106:55558/topics', { headers: { Authorization: "Bearer " + this._authService.getAuthToken() } })
            .then(function (result) { return _this.props.dispatch(_this.actions.setTopics(result.data.topics)); });
    };
    Topic.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'medium', gap: "small", align: "center", alignSelf: "stretch" }, _this.props.form.record.map(function (element) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { id: element.topicId, imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: element.title, description: "Данная тема посвящена языку " + element.title, updateTopicList: function () { return _this.getTopics(); } })); }))))); }));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return __assign({}, state.topic);
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
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");









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
                    size: "24px",
                    height: "30px",
                }
            }
        }
    },
};
var ModalDelete = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, topicId = _a.topicId, onCliked = _a.onCliked;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"], { basic: true, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, open: open, size: 'small' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], { icon: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'trash' }),
            "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u044B"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Content, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "descriptionModal" }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0442\u0435\u043C\u0443?")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Actions, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { className: "buttonModal", basic: true, color: 'red', inverted: true, onClick: function () { setOpen(false); onCliked(); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'remove' }),
                " \u041D\u0435\u0442"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { className: "buttonModal", color: 'green', inverted: true, onClick: function () { setOpen(false); deleteComponent(topicId); onCliked(); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'checkmark' }),
                " \u0414\u0430"))));
};
var ModalEdit = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, topicId = _a.topicId, oldTitle = _a.oldTitle;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"], { basic: true, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, open: open, size: 'small' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], { icon: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'edit' }),
            "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Content, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "descriptionModal" }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0442\u0435\u043C\u0443?"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], { className: "inputModal", size: 'huge', icon: 'heading', iconPosition: 'left', placeholder: 'Titel', value: oldTitle })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Actions, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { className: "buttonModal", basic: true, color: 'red', inverted: true, onClick: function () { return setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'remove' }),
                " \u041D\u0435\u0442"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { className: "buttonModal", color: 'green', inverted: true, onClick: function () { setOpen(false); deleteComponent(topicId); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'checkmark' }),
                " \u0414\u0430"))));
};
var TopicComponent = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), openDel = _a[0], setOpenDel = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), openEd = _b[0], setOpenEd = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalDelete, { open: openDel, setOpen: setOpenDel, topicId: props.id, onCliked: props.updateTopicList }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalEdit, { open: openEd, setOpen: setOpenEd, topicId: props.id, oldTitle: props.title }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Card"], { elevation: "large", width: "medium" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardBody"], { height: "small" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Image"], { fit: "cover", alignSelf: "center", src: props.imagelink })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { pad: { horizontal: 'medium' }, responsive: false },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], { level: "2", alignSelf: "center" }, props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], { color: "white", size: "small", margin: { top: 'none' } }, props.description)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { direction: "row", fill: true, align: "center", gap: "small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], { href: "https://www.collinsdictionary.com/us/dictionary/english/bridge", label: "MORE", size: "medium", color: "#ADFF0037" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { direction: "row", fill: true, align: "end", alignContent: "end", gap: "small" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Edit"], null), focusIndicator: false, hoverIndicator: true, onClick: function () { setOpenEd(true); } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Trash"], null), focusIndicator: false, hoverIndicator: true, onClick: function () { setOpenDel(true); } })))))));
};
var _authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_7__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_6__["SERVICE_IDENTIFIER"].AuthService);
function editComponent(topicId, title) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://185.209.31.106:55558/topic/" + topicId + "/edit", { headers: { Authorization: "Bearer " + _authService.getAuthToken() } })
        .then(function (result) { return console.log("Отредачили"); });
}
function deleteComponent(topicId) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("http://185.209.31.106:55558/topic/" + topicId + "/delete", { headers: { Authorization: "Bearer " + _authService.getAuthToken() } })
        .then(function (result) { return console.log("Отредачили"); });
}


/***/ }),

/***/ "./src/img/palm_tree_PNG93263.png":
/*!****************************************!*\
  !*** ./src/img/palm_tree_PNG93263.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2a75b18ac6027fc9ef22fac9d6399ba.png");

/***/ })

})
//# sourceMappingURL=app.b4c707dbabdb2a7aad97.hot-update.js.map