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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _topicIconComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topicIconComponent */ "./src/app/components/shared/topic/topicIconComponent.tsx");
/* harmony import */ var _topicTitleComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topicTitleComponent */ "./src/app/components/shared/topic/topicTitleComponent.tsx");
/* harmony import */ var _topicDescriptionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topicDescriptionComponent */ "./src/app/components/shared/topic/topicDescriptionComponent.tsx");
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topicComponent.css */ "./src/app/components/shared/topic/topicComponent.css");
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_topicComponent_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");







var TopicComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Card"], { elevation: "large", width: "medium" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["CardBody"], { height: "small" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Image"], { fit: "cover", src: "//v2.grommet.io/assets/IMG_4245.jpg", a11yTitle: "bridge" })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: { horizontal: 'medium' }, responsive: false },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Heading"], { level: "3", margin: { vertical: 'medium' } }, "Bridge"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], { margin: { top: 'none' } }, "A structure carrying a road, path, railroad, or canal across a river, ravine, road, railroad, or other obstacle.")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { direction: "row", align: "center", gap: "small" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Favorite, { color: favorite ? 'red' : undefined }), hoverIndicator: true, onClick: function () {
                        setFavorite(!favorite);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShareOption, { color: "plain" }), hoverIndicator: true }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Anchor"], { href: "https://www.collinsdictionary.com/us/dictionary/english/bridge", label: "Learn More" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpandButton, { onClick: function () { return setOpen(!open); } })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Collapsible"], { open: open },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Paragraph"], { margin: "medium", color: "dark-3" }, "The greatest bridge builders of antiquity were the ancient Romans. The Romans built arch bridges and aqueducts that could stand in conditions that would damage or destroy earlier designs. Some stand today.")))
        ,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: props.className + " topicComponent", id: props.id },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "topicIconComponent" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_topicIconComponent__WEBPACK_IMPORTED_MODULE_2__["TopicIconComponent"], { imagelink: props.imagelink })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "topicTitleComponent" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_topicTitleComponent__WEBPACK_IMPORTED_MODULE_3__["TopicTitleComponent"], { title: props.title })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "topicDescriptionComponent" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_topicDescriptionComponent__WEBPACK_IMPORTED_MODULE_4__["TopicDescriptionComponent"], { description: props.description })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { className: "topicComponentButton" }, "MORE"))));
};


/***/ })

})
//# sourceMappingURL=app.01f6a7c43302916843c8.hot-update.js.map