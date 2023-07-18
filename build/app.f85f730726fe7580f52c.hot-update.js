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
    Topic.prototype.deleteTopic = function (topicId) {
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete("http://185.209.31.106:55558/topic/" + topicId + "/delete", { headers: { Authorization: "Bearer " + _authService.getAuthToken() } })
            .then(function (result) { return console.log("Удалили"); });
        this.getTopics();
    };
    Topic.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'medium', gap: "small", align: "center", alignSelf: "stretch" }, _this.props.form.record.map(function (element) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { id: element.topicId, imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: element.title, description: "Данная тема посвящена языку " + element.title, updateTopicList: function () { _this.getTopics(), console.log("Обновляю"); } })); }))))); }));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return __assign({}, state.topic);
}
var TopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Topic);


/***/ })

})
//# sourceMappingURL=app.f85f730726fe7580f52c.hot-update.js.map