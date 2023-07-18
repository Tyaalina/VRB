webpackHotUpdate("app",{

/***/ "./src/app/reduxInfrastructure/reducers/form/BaseFormReducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reduxInfrastructure/reducers/form/BaseFormReducer.ts ***!
  \**********************************************************************/
/*! exports provided: BaseFormReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormReducer", function() { return BaseFormReducer; });
/* harmony import */ var _BaseReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseReducer */ "./src/app/reduxInfrastructure/reducers/BaseReducer.ts");
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

var BaseFormReducer = (function (_super) {
    __extends(BaseFormReducer, _super);
    function BaseFormReducer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.receivedRecord = function (state, payload) {
            return __assign(__assign({}, state), { form: __assign(__assign({}, state.form), { record: payload }) });
        };
        return _this;
    }
    BaseFormReducer.prototype.setFormInitial = function (state) {
        var newState = this.clearFormMessages(state);
        return __assign(__assign({}, newState), { form: __assign(__assign({}, newState.form), { record: undefined }) });
    };
    BaseFormReducer.prototype.setFormInitialArray = function (state) {
        var newState = this.clearFormMessages(state);
        return __assign(__assign({}, newState), { form: __assign(__assign({}, newState.form), { record: [] }) });
    };
    BaseFormReducer.prototype.clearFormMessages = function (state) {
        return __assign(__assign({}, state), { form: __assign(__assign({}, state.form), { formError: undefined, formSuccess: undefined }) });
    };
    BaseFormReducer.prototype.setFormError = function (state, payload) {
        return __assign(__assign({}, state), { form: __assign(__assign({}, state.form), { formError: payload }) });
    };
    BaseFormReducer.prototype.setFormSuccess = function (state, payload) {
        return __assign(__assign({}, state), { form: __assign(__assign({}, state.form), { formSuccess: payload }) });
    };
    return BaseFormReducer;
}(_BaseReducer__WEBPACK_IMPORTED_MODULE_0__["BaseReducer"]));



/***/ })

})
//# sourceMappingURL=app.362b987a1e62b499bb13.hot-update.js.map