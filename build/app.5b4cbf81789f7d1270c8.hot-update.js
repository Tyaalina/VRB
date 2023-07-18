webpackHotUpdate("app",{

/***/ "./src/app/components/pages/registration/RegistrationSaga.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/registration/RegistrationSaga.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSaga", function() { return RegistrationSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
/* harmony import */ var _reduxInfrastructure_sagas_form_BaseFormSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reduxInfrastructure/sagas/form/BaseFormSaga */ "./src/app/reduxInfrastructure/sagas/form/BaseFormSaga.ts");
/* harmony import */ var _RegistrationContants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegistrationContants */ "./src/app/components/pages/registration/RegistrationContants.ts");
/* harmony import */ var _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/helpers/HistoryHelper */ "./src/app/utils/helpers/HistoryHelper.ts");
/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/routes */ "./src/shared/constants/routes.ts");
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







var RegistrationSaga = (function (_super) {
    __extends(RegistrationSaga, _super);
    function RegistrationSaga() {
        var _this = _super.call(this) || this;
        _this.serverInteractionService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_1__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__["SERVICE_IDENTIFIER"].AccountServerInteractionService);
        _this.actions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_1__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__["SERVICE_IDENTIFIER"].RegistrationActions);
        _this._appActions = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_1__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_2__["SERVICE_IDENTIFIER"].AppActions);
        _this.registration = _this.registration.bind(_this);
        return _this;
    }
    RegistrationSaga.prototype.watch = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_RegistrationContants__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION__REGISTRATION"], this.registration)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    RegistrationSaga.prototype.registration = function (action) {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.doSubmitApiRequest(action, this.serverInteractionService.register(action.payload.dto), function (response) {
                        _this._authService.setTokens(response.data);
                        _utils_helpers_HistoryHelper__WEBPACK_IMPORTED_MODULE_5__["default"].push(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_PAGE"]);
                    })];
                case 1:
                    _a.sent();
                    ;
                    return [2];
            }
        });
    };
    return RegistrationSaga;
}(_reduxInfrastructure_sagas_form_BaseFormSaga__WEBPACK_IMPORTED_MODULE_3__["BaseFormSaga"]));



/***/ })

})
//# sourceMappingURL=app.5b4cbf81789f7d1270c8.hot-update.js.map