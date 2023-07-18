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
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





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
var ModalDelete = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, deleteTopic = _a.deleteTopic;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], { basic: true, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, open: open, size: 'small' },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], { icon: true },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'trash' }),
            "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", { className: "descriptionModal" }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?")),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "buttonModal", basic: true, color: 'red', inverted: true, onClick: function () { setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'remove' }),
                " \u041D\u0435\u0442"),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "buttonModal", color: 'green', inverted: true, onClick: function () { setOpen(false); deleteTopic(); } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'checkmark' }),
                " \u0414\u0430"))));
};
var ModalEdit = function (_a) {
    var open = _a.open, setOpen = _a.setOpen, oldTitle = _a.oldTitle, editTopic = _a.editTopic;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(oldTitle), newTitle = _b[0], setNewTitle = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], { basic: true, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, open: open, size: 'small' },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], { icon: true },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'edit' }),
            "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", { className: "descriptionModal" }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?"),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], { className: "inputModal", size: 'huge', icon: 'heading', iconPosition: 'left', placeholder: 'Titel', value: newTitle, onChange: function (event) { return setNewTitle(event.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "buttonModal", basic: true, color: 'red', inverted: true, onClick: function () { return setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'remove' }),
                " \u041D\u0435\u0442"),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "buttonModal", color: 'green', inverted: true, onClick: function () { setOpen(false); editTopic(newTitle); } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], { name: 'checkmark' }),
                " \u0414\u0430"))));
};
var MessageComponent = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false), openDel = _a[0], setOpenDel = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false), openEd = _b[0], setOpenEd = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ModalDelete, { open: openDel, setOpen: setOpenDel, deleteTopic: props.deleteMessage }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ModalEdit, { open: openEd, setOpen: setOpenEd, oldTitle: props.title, editTopic: props.editMessage }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], { margin: { vertical: "small", horizontal: "medium" }, border: { color: "#E9FFE1" }, round: "small" },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], { direction: "row" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], { alignSelf: "center", size: "medium", margin: { horizontal: "small" }, color: "#ADFF00" }, props.authorUserName),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Edit"], { color: "#ADFF0037" }), size: "small", focusIndicator: false, hoverIndicator: true, onClick: function () { setOpenEd(true); } }),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Trash"], { color: "#ADFF0037" }), size: "small", focusIndicator: false, hoverIndicator: true, onClick: function () { setOpenDel(true); } })),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], { size: "small", margin: { horizontal: "small" } }, props.title))));
};


/***/ })

})
//# sourceMappingURL=app.d731a8e3eb27a396ba5c.hot-update.js.map