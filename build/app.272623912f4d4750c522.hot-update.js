webpackHotUpdate("app",{

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
                    console.log("зашёл");
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



/***/ })

})
//# sourceMappingURL=app.272623912f4d4750c522.hot-update.js.map