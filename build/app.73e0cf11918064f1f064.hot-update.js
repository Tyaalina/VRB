webpackHotUpdate("app",{

/***/ "./src/app/reduxInfrastructure/rootReducer.ts":
/*!****************************************************!*\
  !*** ./src/app/reduxInfrastructure/rootReducer.ts ***!
  \****************************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");




var registationReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].RegistrationReducer);
var changePasswordReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].ChangePasswordReducer);
var emailConfirmationReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].EmailConfirmationReducer);
var loginReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].LoginReducer);
var appReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].AppReducer);
var topicReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].TopicReducer);
var messageReducer = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].MessageReducer);
var rootReducer = function (history) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
        app: appReducer.getReducer(),
        registration: registationReducer.getReducer(),
        changePassword: changePasswordReducer.getReducer(),
        emailConfirmation: emailConfirmationReducer.getReducer(),
        login: loginReducer.getReducer(),
        router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_0__["connectRouter"])(history),
        topic: topicReducer.getReducer(),
        message: messageReducer.getReducer()
    });
};


/***/ })

})
//# sourceMappingURL=app.73e0cf11918064f1f064.hot-update.js.map