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
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







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
function ModalExampleBasic() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), open = _a[0], setOpen = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"], { basic: true, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, open: open, size: 'small', trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Basic Modal") },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], { icon: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'archive' }),
            "Archive Old Messages"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Content, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your inbox is getting full, would you like us to enable automatic archiving of old messages?")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Modal"].Actions, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { basic: true, color: 'red', inverted: true, onClick: function () { return setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'remove' }),
                " No"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], { color: 'green', inverted: true, onClick: function () { return setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], { name: 'checkmark' }),
                " Yes"))));
}
var TopicComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], { theme: theme },
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Edit"], null), focusIndicator: false, hoverIndicator: true, onClick: function () { } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Trash"], null), focusIndicator: false, hoverIndicator: true, onClick: function () { } })))))));
};
function editComponent(topicId, title) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put('http://185.209.31.106:55558/topic/' + { topicId: topicId } + '/edit')
        .then(function (result) { return console.log("Отредачили"); });
}
function deleteComponent(topicId) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete('http://185.209.31.106:55558/topic/' + { topicId: topicId } + '/delete')
        .then(function (result) { return console.log("Удалили"); });
}


/***/ })

})
//# sourceMappingURL=app.37d1c4cf43a924aac935.hot-update.js.map