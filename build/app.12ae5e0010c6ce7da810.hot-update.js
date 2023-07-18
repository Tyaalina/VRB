webpackHotUpdate("app",{

/***/ "./src/app/services/serverInteraction/accountServerInteractionService.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/serverInteraction/accountServerInteractionService.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountServerInteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountServerInteractionService", function() { return AccountServerInteractionService; });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseServiceInteractionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseServiceInteractionService */ "./src/app/services/serverInteraction/baseServiceInteractionService.ts");
/* harmony import */ var _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inversify/inversifyContainer */ "./src/app/inversify/inversifyContainer.ts");
/* harmony import */ var _inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inversify/inversifyTypes */ "./src/app/inversify/inversifyTypes.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountServerInteractionService = (function (_super) {
    __extends(AccountServerInteractionService, _super);
    function AccountServerInteractionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._authService = _inversify_inversifyContainer__WEBPACK_IMPORTED_MODULE_2__["default"].get(_inversify_inversifyTypes__WEBPACK_IMPORTED_MODULE_3__["SERVICE_IDENTIFIER"].AuthService);
        _this.login = function (payload) {
            return _this.post('/login', payload);
        };
        _this.getUser = function () {
            return _this.get('/account/self');
        };
        _this.logOut = function () {
            return _this.delete('/logout');
        };
        _this.register = function (payload) {
            return _this.post('/register', payload);
        };
        _this.changePassword = function (payload) {
            return _this.post("/account/password/change");
        };
        _this.emailConfirmation = function (payload) {
            return _this.post("/account/emailconfirm");
        };
        _this.getTopic = function () {
            console.log("Херня 3");
            return _this.get("185.209.31.106:55558/topics", { headers: { 'Authorization': 'Bearer ' + _this._authService.getAuthToken() } });
        };
        return _this;
    }
    AccountServerInteractionService = __decorate([
        Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])()
    ], AccountServerInteractionService);
    return AccountServerInteractionService;
}(_baseServiceInteractionService__WEBPACK_IMPORTED_MODULE_1__["BaseServerInteractionService"]));



/***/ })

})
//# sourceMappingURL=app.12ae5e0010c6ce7da810.hot-update.js.map