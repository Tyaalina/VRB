webpackHotUpdate("app",{

/***/ "./src/app/components/pages/message/MessageActions.ts":
/*!************************************************************!*\
  !*** ./src/app/components/pages/message/MessageActions.ts ***!
  \************************************************************/
/*! exports provided: MessageActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageActions", function() { return MessageActions; });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageConstants */ "./src/app/components/pages/message/MessageConstants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageActions = (function () {
    function MessageActions() {
        this.initForm = function () { return ({
            type: _MessageConstants__WEBPACK_IMPORTED_MODULE_1__["MESSAGE"]
        }); };
        this.setMessage = function (payload) { return ({
            type: _MessageConstants__WEBPACK_IMPORTED_MODULE_1__["SET_MESSAGE"],
            payload: payload
        }); };
        this.setFormError = function (payload) { return ({
            type: _MessageConstants__WEBPACK_IMPORTED_MODULE_1__["MESSAGE__SET_FORM_ERROR"],
            payload: payload
        }); };
    }
    MessageActions = __decorate([
        Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])()
    ], MessageActions);
    return MessageActions;
}());



/***/ }),

/***/ "./src/app/components/pages/message/MessageConstants.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/message/MessageConstants.ts ***!
  \**************************************************************/
/*! exports provided: MESSAGE, MESSAGE__SET_FORM_ERROR, SET_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE__SET_FORM_ERROR", function() { return MESSAGE__SET_FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MESSAGE", function() { return SET_MESSAGE; });
var MESSAGE = 'MESSAGE';
var MESSAGE__SET_FORM_ERROR = 'MESSAGE__SET_FORM_ERROR';
var SET_MESSAGE = 'SET_MESSAGE';


/***/ }),

/***/ "./src/app/components/pages/message/MessageReduser.ts":
/*!************************************************************!*\
  !*** ./src/app/components/pages/message/MessageReduser.ts ***!
  \************************************************************/
/*! exports provided: MessageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReducer", function() { return MessageReducer; });
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
/* harmony import */ var _reduxInfrastructure_reducers_form_BaseFormReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reduxInfrastructure/reducers/form/BaseFormReducer */ "./src/app/reduxInfrastructure/reducers/form/BaseFormReducer.ts");
/* harmony import */ var _MessageConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageConstants */ "./src/app/components/pages/message/MessageConstants.ts");
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



var MessageReducer = (function (_super) {
    __extends(MessageReducer, _super);
    function MessageReducer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialState = {
            form: {
                record: []
            },
            helpers: {}
        };
        _this.reduce = function (state, action) {
            if (state === void 0) { state = _this.initialState; }
            switch (action.type) {
                case _shared_constants_routes__WEBPACK_IMPORTED_MODULE_0__["MESSAGE"]: {
                    state = _this.setFormInitialArray(state);
                    break;
                }
                case _MessageConstants__WEBPACK_IMPORTED_MODULE_2__["SET_MESSAGE"]: {
                    state = _this.setFormInitialArray(state);
                    state.form.record = action.payload;
                    state = __assign(__assign({}, state), { helpers: __assign(__assign({}, state.helpers), { isLoading: false }) });
                    break;
                }
            }
            return state;
        };
        return _this;
    }
    return MessageReducer;
}(_reduxInfrastructure_reducers_form_BaseFormReducer__WEBPACK_IMPORTED_MODULE_1__["BaseFormReducer"]));



/***/ }),

/***/ "./src/app/inversify/inversifyContainer.ts":
/*!*************************************************!*\
  !*** ./src/app/inversify/inversifyContainer.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/authService */ "./src/app/services/authService.ts");
/* harmony import */ var _components_pages_login_LoginReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/pages/login/LoginReducer */ "./src/app/components/pages/login/LoginReducer.ts");
/* harmony import */ var _components_pages_login_LoginSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/pages/login/LoginSaga */ "./src/app/components/pages/login/LoginSaga.ts");
/* harmony import */ var _components_pages_changePassword_ChangePasswordReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/pages/changePassword/ChangePasswordReducer */ "./src/app/components/pages/changePassword/ChangePasswordReducer.ts");
/* harmony import */ var _components_pages_changePassword_ChangePasswordSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/pages/changePassword/ChangePasswordSaga */ "./src/app/components/pages/changePassword/ChangePasswordSaga.ts");
/* harmony import */ var _components_pages_registration_RegistrationSaga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/pages/registration/RegistrationSaga */ "./src/app/components/pages/registration/RegistrationSaga.ts");
/* harmony import */ var _shared_helpers_notificationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/helpers/notificationService */ "./src/shared/helpers/notificationService.ts");
/* harmony import */ var _services_objectHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/objectHelper */ "./src/app/services/objectHelper.ts");
/* harmony import */ var _shared_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/helpers/apiHelper */ "./src/shared/helpers/apiHelper.ts");
/* harmony import */ var _shared_helpers_serverInteractionUtins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/helpers/serverInteractionUtins */ "./src/shared/helpers/serverInteractionUtins.ts");
/* harmony import */ var _appActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../appActions */ "./src/app/appActions.ts");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../appReducer */ "./src/app/appReducer.ts");
/* harmony import */ var _appSaga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../appSaga */ "./src/app/appSaga.ts");
/* harmony import */ var _services_serverInteraction_accountServerInteractionService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/serverInteraction/accountServerInteractionService */ "./src/app/services/serverInteraction/accountServerInteractionService.ts");
/* harmony import */ var _services_serverInteraction_baseServiceInteractionService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/serverInteraction/baseServiceInteractionService */ "./src/app/services/serverInteraction/baseServiceInteractionService.ts");
/* harmony import */ var _services_serverInteraction_tableServerInteractionService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/serverInteraction/tableServerInteractionService */ "./src/app/services/serverInteraction/tableServerInteractionService.ts");
/* harmony import */ var _inversifyTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _components_pages_registration_RegistrationActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/pages/registration/RegistrationActions */ "./src/app/components/pages/registration/RegistrationActions.ts");
/* harmony import */ var _components_pages_registration_RegistrationReducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/pages/registration/RegistrationReducer */ "./src/app/components/pages/registration/RegistrationReducer.ts");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_pages_changePassword_ChangePasswordActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/pages/changePassword/ChangePasswordActions */ "./src/app/components/pages/changePassword/ChangePasswordActions.ts");
/* harmony import */ var _components_pages_emailConfirmation_EmailConfirmationActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/pages/emailConfirmation/EmailConfirmationActions */ "./src/app/components/pages/emailConfirmation/EmailConfirmationActions.ts");
/* harmony import */ var _components_pages_emailConfirmation_EmailConfirmationReducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../components/pages/emailConfirmation/EmailConfirmationReducer */ "./src/app/components/pages/emailConfirmation/EmailConfirmationReducer.ts");
/* harmony import */ var _components_pages_emailConfirmation_EmailConfirmationSaga__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../components/pages/emailConfirmation/EmailConfirmationSaga */ "./src/app/components/pages/emailConfirmation/EmailConfirmationSaga.ts");
/* harmony import */ var _components_pages_login_LoginActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/pages/login/LoginActions */ "./src/app/components/pages/login/LoginActions.ts");
/* harmony import */ var _components_pages_topic_TopicSaga__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../components/pages/topic/TopicSaga */ "./src/app/components/pages/topic/TopicSaga.ts");
/* harmony import */ var _components_pages_topic_TopicAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../components/pages/topic/TopicAction */ "./src/app/components/pages/topic/TopicAction.ts");
/* harmony import */ var _components_pages_topic_TopicReducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/pages/topic/TopicReducer */ "./src/app/components/pages/topic/TopicReducer.ts");
/* harmony import */ var _components_pages_message_MessageReduser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/pages/message/MessageReduser */ "./src/app/components/pages/message/MessageReduser.ts");
/* harmony import */ var _components_pages_message_MessageActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/pages/message/MessageActions */ "./src/app/components/pages/message/MessageActions.ts");
































var container = new inversify__WEBPACK_IMPORTED_MODULE_20__["Container"]();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].BaseServerInteractionService).to(_services_serverInteraction_baseServiceInteractionService__WEBPACK_IMPORTED_MODULE_15__["BaseServerInteractionService"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].TableServerInteractionService).to(_services_serverInteraction_tableServerInteractionService__WEBPACK_IMPORTED_MODULE_16__["TableServerInteractionService"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].AccountServerInteractionService).to(_services_serverInteraction_accountServerInteractionService__WEBPACK_IMPORTED_MODULE_14__["AccountServerInteractionService"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ServerInteractionsUtils).to(_shared_helpers_serverInteractionUtins__WEBPACK_IMPORTED_MODULE_10__["ServerInteractionsUtils"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].NotificationService).to(_shared_helpers_notificationService__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ApiHelper).to(_shared_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_9__["ApiHelper"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].AuthService).to(_services_authService__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ObjectHelper).to(_services_objectHelper__WEBPACK_IMPORTED_MODULE_8__["ObjectHelper"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].AppActions).to(_appActions__WEBPACK_IMPORTED_MODULE_11__["AppActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].RegistrationActions).to(_components_pages_registration_RegistrationActions__WEBPACK_IMPORTED_MODULE_18__["RegistrationActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ChangePasswordActions).to(_components_pages_changePassword_ChangePasswordActions__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].EmailConfirmationActions).to(_components_pages_emailConfirmation_EmailConfirmationActions__WEBPACK_IMPORTED_MODULE_22__["EmailConfirmationActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].LoginAction).to(_components_pages_login_LoginActions__WEBPACK_IMPORTED_MODULE_25__["LoginActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].TopicAction).to(_components_pages_topic_TopicAction__WEBPACK_IMPORTED_MODULE_27__["TopicActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].MessageAction).to(_components_pages_message_MessageActions__WEBPACK_IMPORTED_MODULE_30__["MessageActions"]).inSingletonScope();
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].AppSaga).to(_appSaga__WEBPACK_IMPORTED_MODULE_13__["AppSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].RegistrationSaga).to(_components_pages_registration_RegistrationSaga__WEBPACK_IMPORTED_MODULE_6__["RegistrationSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ChangePasswordSaga).to(_components_pages_changePassword_ChangePasswordSaga__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].EmailConfirmationSaga).to(_components_pages_emailConfirmation_EmailConfirmationSaga__WEBPACK_IMPORTED_MODULE_24__["EmailConfirmationSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].LoginSaga).to(_components_pages_login_LoginSaga__WEBPACK_IMPORTED_MODULE_3__["LoginSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].TopicSaga).to(_components_pages_topic_TopicSaga__WEBPACK_IMPORTED_MODULE_26__["TopicSaga"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].AppReducer).to(_appReducer__WEBPACK_IMPORTED_MODULE_12__["AppReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].RegistrationReducer).to(_components_pages_registration_RegistrationReducer__WEBPACK_IMPORTED_MODULE_19__["RegistrationReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].ChangePasswordReducer).to(_components_pages_changePassword_ChangePasswordReducer__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].EmailConfirmationReducer).to(_components_pages_emailConfirmation_EmailConfirmationReducer__WEBPACK_IMPORTED_MODULE_23__["EmailConfirmationReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].LoginReducer).to(_components_pages_login_LoginReducer__WEBPACK_IMPORTED_MODULE_2__["LoginReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].TopicReducer).to(_components_pages_topic_TopicReducer__WEBPACK_IMPORTED_MODULE_28__["TopicReducer"]);
container.bind(_inversifyTypes__WEBPACK_IMPORTED_MODULE_17__["SERVICE_IDENTIFIER"].MessageReducer).to(_components_pages_message_MessageReduser__WEBPACK_IMPORTED_MODULE_29__["MessageReducer"]);
/* harmony default export */ __webpack_exports__["default"] = (container);


/***/ })

})
//# sourceMappingURL=app.fd1142dd5bd88282e6d2.hot-update.js.map