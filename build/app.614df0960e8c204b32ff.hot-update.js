webpackHotUpdate("app",{

/***/ "./src/app/components/pages/topic/TopicAction.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicAction.ts ***!
  \*******************************************************/
/*! exports provided: TopicActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicActions", function() { return TopicActions; });
/* harmony import */ var _TopicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicConstants */ "./src/app/components/pages/topic/TopicConstants.ts");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopicActions = (function () {
    function TopicActions() {
        this.initForm = function () { return ({
            type: _TopicConstants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"]
        }); };
        this.setTopics = function (payload) { return ({
            type: _TopicConstants__WEBPACK_IMPORTED_MODULE_0__["SET_TOPICS"],
            payload: payload
        }); };
        this.createTopic = function (payload) { return ({
            type: _TopicConstants__WEBPACK_IMPORTED_MODULE_0__["TOPIC_CREATE"],
            payload: payload
        }); };
        this.setFormError = function (payload) { return ({
            type: _TopicConstants__WEBPACK_IMPORTED_MODULE_0__["TOPIC__SET_FORM_ERROR"],
            payload: payload
        }); };
    }
    TopicActions = __decorate([
        Object(inversify__WEBPACK_IMPORTED_MODULE_1__["injectable"])()
    ], TopicActions);
    return TopicActions;
}());



/***/ }),

/***/ "./src/app/components/pages/topic/TopicSaga.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pages/topic/TopicSaga.ts ***!
  \*****************************************************/
/*! exports provided: TopicSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicSaga", function() { return TopicSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _TopicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicConstants */ "./src/app/components/pages/topic/TopicConstants.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _reduxInfrastructure_sagas_BaseSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reduxInfrastructure/sagas/BaseSaga */ "./src/app/reduxInfrastructure/sagas/BaseSaga.ts");
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
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TopicSaga = (function (_super) {
    __extends(TopicSaga, _super);
    function TopicSaga() {
        var _this = _super.call(this) || this;
        _this.serverInteractionService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].AccountServerInteractionService);
        _this.topic = _this.topic.bind(_this);
        return _this;
    }
    TopicSaga.prototype.watch = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_TopicConstants__WEBPACK_IMPORTED_MODULE_1__["TOPIC"], this.topic)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    TopicSaga.prototype.topic = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Херня 2");
                    return [4, this.doApiRequest(this.serverInteractionService.getTopic(), function (response) {
                            console.log(response);
                            Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({ type: _TopicConstants__WEBPACK_IMPORTED_MODULE_1__["SET_TOPICS"], response: response });
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    return TopicSaga;
}(_reduxInfrastructure_sagas_BaseSaga__WEBPACK_IMPORTED_MODULE_4__["BaseSaga"]));



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
/* harmony default export */ __webpack_exports__["default"] = (container);


/***/ })

})
//# sourceMappingURL=app.614df0960e8c204b32ff.hot-update.js.map