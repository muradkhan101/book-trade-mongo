webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{\n  'alert': message,\n  'alert-success': message.type==='success',\n  'alert-danger' : message.type==='error'}\"\n  >{{ message.text }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.retrieveMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/alert/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__("../../../../../src/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]
        ]
    })
], AlertModule);

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "../../../../../src/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepNavForChange = false;
        router.events.subscribe(function (event) {
            // If we're about to navigate to another page
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                // keep the alert for the first time we navigate
                if (_this.keepNavForChange) {
                    _this.keepNavForChange = false;
                    // otherwise get rid of it
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepNavForChange) {
        if (keepNavForChange === void 0) { keepNavForChange = false; }
        this.keepNavForChange = keepNavForChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepNavForChange) {
        if (keepNavForChange === void 0) { keepNavForChange = false; }
        this.keepNavForChange = keepNavForChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.retrieveMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInDownAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var slideInDownAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('routeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
            opacity: 0,
            transform: 'translateX(100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('0.2s 0.3s ease-in')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('0.4s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppLandingComponent = (function () {
    function AppLandingComponent() {
    }
    return AppLandingComponent;
}());
AppLandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'landing-page',
        template: "\n  <div class='fluid-container'>\n    <div class='row align-items-center justify-content-center'>\n      <div class='col-10'>\n        <h1> Book Trading </h1>\n        <p> Replace your old books that you have already read with brand spankin' new ones by trading with people all over the country!</p>\n      </div>\n    </div>\n  </div>\n  "
    })
], AppLandingComponent);

//# sourceMappingURL=app-landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_landing_component__ = __webpack_require__("../../../../../src/app/app-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_info_component__ = __webpack_require__("../../../../../src/user/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_auth_guard_service__ = __webpack_require__("../../../../../src/global_services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Routes is an object linking paths to components, or redirecting placing




var appRoutes = [
    {
        path: 'user/profile',
        component: __WEBPACK_IMPORTED_MODULE_3__user_user_info_component__["a" /* UserInfoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__global_services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_landing_component__["a" /* AppLandingComponent */], pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// routerLink is equivalent to href for a Single Page App, navs to a path in routing module
// routerLinkActive is class given when you are at that link
// router-outlet is where the component for that route will display
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: "\n  <div ngClass='container-fluid no-padding'>\n    <div ngClass='full-height row justify-content-center'>\n      <div ngClass='col-md-3'>\n        <nav ngClass='navbar navbar-toggleable-md navbar-expand-md navbar-light bg-light'>\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-navbar\" aria-controls=\"main-navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div ngClass='collapse navbar-collapse flex-column mr-auto ml-auto' id='main-navbar'>\n            <a ngClass='nav-item nav-link'routerLink='/books' routerLinkActive='active'>Books</a>\n            <a ngClass='nav-item nav-link' routerLink='/trades' routerLinkActive='active'>Trades</a>\n            <a ngClass='nav-item nav-link' routerLink='/user/profile' routerLinkActive='active'>My Profile</a>\n          </div>\n        </nav>\n      </div>\n      <div ngClass='col mt-5'>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n  <modal></modal>\n  ",
        styles: [
            '.no-padding {padding-left: 0; padding-right: 0;}',
            '.navbar {position: sticky; top: 40vh;}'
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_landing_component__ = __webpack_require__("../../../../../src/app/app-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_books_module__ = __webpack_require__("../../../../../src/books/books.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_info_component__ = __webpack_require__("../../../../../src/user/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_module__ = __webpack_require__("../../../../../src/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_services_auth_guard_service__ = __webpack_require__("../../../../../src/global_services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_modal_module__ = __webpack_require__("../../../../../src/modal/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_directives_module__ = __webpack_require__("../../../../../src/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trades_trades_module__ = __webpack_require__("../../../../../src/trades/trades.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_landing_component__["a" /* AppLandingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__books_books_module__["a" /* BooksModule */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__modal_modal_module__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_15__trades_trades_module__["a" /* TradesModule */],
            __WEBPACK_IMPORTED_MODULE_14__directives_directives_module__["a" /* DirectivesModule */] // Have to put things in module to use them in multiple modules
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__global_services_user_authentication_service__["a" /* UserAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_11__global_services_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return headers; });
var baseURL = 'http://localhost:3000';
var headers = new Headers({ 'Content-Type': 'application/json, */*' });
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/assets/password-validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchInput;
function matchInput(otherInput) {
    var mainControl;
    var otherControl;
    return function validateInputs(control) {
        if (!control.parent)
            return null;
        if (!mainControl) {
            mainControl = control;
            otherControl = mainControl.parent.get(otherInput);
            if (!otherControl)
                throw new Error('validateInputs(): Other input not found');
            otherControl.valueChanges.subscribe(function (value) {
                mainControl.updateValueAndValidity();
            });
        }
        if (!otherControl)
            return null;
        if (otherControl.value !== mainControl.value)
            return { match: "Whoops! Your passwords don't match!" };
        return null;
    };
}
//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ "../../../../../src/books/book-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_service__ = __webpack_require__("../../../../../src/books/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_management_service__ = __webpack_require__("../../../../../src/books/book-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modal_content_service__ = __webpack_require__("../../../../../src/modal/modal-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trades_trade_form_component__ = __webpack_require__("../../../../../src/trades/trade-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// HostBinding binds certain style, attributes, etc to given item
// OnInit -> componentDidMount, OnDestroy -> componentWillUnmount

// ActivatedRoute is an observable of each navigation. Has info about current path, last path, nav path
// ParamMap makes it easier to work with things with multiple keys/parameters

// SwitchMap flattens the paramMap into an easier to work with ParamMap (yes the difference is the capital)







var BookInfoComponent = (function () {
    function BookInfoComponent(route, router, libraryService, bookManagement, modalService, alert) {
        this.route = route;
        this.router = router;
        this.libraryService = libraryService;
        this.bookManagement = bookManagement;
        this.modalService = modalService;
        this.alert = alert;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    BookInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book$ = this.route.paramMap
            .switchMap(function (params) {
            return (_this.book$ = _this.libraryService.getBook(params.get('uuid')));
        });
        this.book$.subscribe(function (b) { return _this.hasBook = _this.userHasBook(b._id); });
        this.alert.retrieveMessage()
            .subscribe(function (message) { return _this.message = message; });
    };
    // This is bad book management. Should call API to get book list each time.
    // Or account for removal of book and addition of book situation
    // API call is more authoritative since users can't modify data themselves
    BookInfoComponent.prototype.userHasBook = function (_id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser)
            return false;
        return (currentUser.books.indexOf(_id) !== -1);
    };
    BookInfoComponent.prototype.addToCollection = function (_id) {
        this.bookManagement.addToCollection(_id);
        this.hasBook = !this.hasBook;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.books.push(_id);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    BookInfoComponent.prototype.removeFromCollection = function (_id) {
        this.bookManagement.removeFromCollection(_id);
        this.hasBook = !this.hasBook;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var bookIndex = currentUser.books.indexOf(_id);
        var books = currentUser.books.slice(0, bookIndex).concat(currentUser.books.slice(bookIndex + 1));
        currentUser.books = books;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    BookInfoComponent.prototype.showModal = function () {
        var _this = this;
        if (!this.bookManagement.isAuthenticated())
            this.bookManagement.redirect('login');
        this.libraryService.getBooks('main')
            .subscribe(function (books) {
            _this.book$.subscribe(function (data) {
                var modalData = {
                    books: books,
                    preSelectedBook: data.uuid
                };
                _this.modalService.setContent(__WEBPACK_IMPORTED_MODULE_8__trades_trade_form_component__["a" /* TradeFormComponent */], modalData);
            });
        });
    };
    return BookInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], BookInfoComponent.prototype, "routeAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], BookInfoComponent.prototype, "display", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.position'),
    __metadata("design:type", Object)
], BookInfoComponent.prototype, "position", void 0);
BookInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'book-info',
        template: "\n  <div ngClass='book-display container' *ngIf=\"book$ | async as book\">\n    <alert></alert>\n    <div ngClass='row justify-content-center'>\n      <div ngClass='col-3'>\n        <img [src]=\"book.image\" ngClass='book-cover'>\n        <button *ngIf=\"!hasBook\" ngClass=\"btn btn-primary mt-2\" (click)=\"addToCollection(book._id)\">Add to Collection</button>\n        <button *ngIf=\"hasBook\" ngClass=\"btn btn-danger mt-2\" (click)=\"removeFromCollection(book._id)\">Remove from Collection</button>\n        <button ngClass=\"btn btn-alt mt-2 mb-2\" (click)=\"showModal()\" data-toggle=\"modal\" data-target=\"#main-modal\">Trade This</button>\n      </div>\n      <div ngClass='col'>\n        <div>\n          <h1 ngClass='card-title'>{{book.title}}</h1>\n          <p ngClass='card-text'>{{book.description}}</p>\n        </div>\n      </div>\n    </div>\n    <div ngClass='row'>\n      <trades title=\"Trade For This\" [bookId]=\"book._id\"></trades>\n    </div>\n  </div>\n",
        styles: ["\n  book-cover { width: 100px; height: 100px;}\n"],
        animations: [__WEBPACK_IMPORTED_MODULE_3__app_animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__library_service__["a" /* LibraryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__library_service__["a" /* LibraryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__book_management_service__["a" /* BookManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__book_management_service__["a" /* BookManagementService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__modal_modal_content_service__["a" /* ModalContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__modal_modal_content_service__["a" /* ModalContentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__["a" /* AlertService */]) === "function" && _f || Object])
], BookInfoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=book-info.component.js.map

/***/ }),

/***/ "../../../../../src/books/book-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__("../../../../../src/books/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Input lets parent components pass values down to children (like props in React)


var BookLinkComponent = (function () {
    function BookLinkComponent() {
    }
    return BookLinkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */]) === "function" && _a || Object)
], BookLinkComponent.prototype, "book", void 0);
BookLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'book-link',
        template: "\n  <div ngClass='col-6 col-md-3 mt-2'>\n    <a [routerLink]=\"['/books', book.uuid]\">\n      <img src=\"{{book.image}}\" alt=\"{{book.title}}\">\n    </a>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], BookLinkComponent);

var _a;
//# sourceMappingURL=book-link.component.js.map

/***/ }),

/***/ "../../../../../src/books/book-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config__ = __webpack_require__("../../../../../src/assets/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookManagementService = (function (_super) {
    __extends(BookManagementService, _super);
    function BookManagementService(http, router, alert, userAuth) {
        var _this = _super.call(this, http, alert, router) || this;
        _this.http = http;
        _this.router = router;
        _this.alert = alert;
        _this.userAuth = userAuth;
        return _this;
    }
    BookManagementService.prototype.addToCollection = function (_id) {
        var _this = this;
        var currentUser = this.userAuth.isAuthenticated();
        if (!currentUser) {
            __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = this.router.url;
            this.alert.error('Please login and try again', true);
            return this.router.navigate(['/login']);
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* baseURL */] + "/user/" + currentUser.uuid + "/books", { _id: _id }, this.jwt())
            .catch(function (error) {
            if (error.status == 400)
                _this.alert.error('There was a problem with the submitted data, sorry :(');
            else if (error.status == 409)
                _this.alert.error('You already have this book in your collection!');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            _this.alert.success('This book was added to your collection!');
            return;
        });
    };
    BookManagementService.prototype.removeFromCollection = function (_id) {
        var _this = this;
        var currentUser = this.userAuth.isAuthenticated();
        if (!currentUser) {
            __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = this.router.url;
            this.alert.error('Please login and try again', true);
            return this.router.navigate(['/login']);
        }
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* baseURL */] + "/user/" + currentUser.uuid + "/books/" + _id, this.jwt())
            .catch(function (error) {
            if (error.status == 400)
                _this.alert.error('There was a problem with the submitted data, sorry :(');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            _this.alert.success('This book was removed from your collection!');
            return;
        });
    };
    return BookManagementService;
}(__WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */]));
BookManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */]) === "function" && _d || Object])
], BookManagementService);

var _a, _b, _c, _d;
//# sourceMappingURL=book-management.service.js.map

/***/ }),

/***/ "../../../../../src/books/book-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_info_component__ = __webpack_require__("../../../../../src/books/book-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookshelf_component__ = __webpack_require__("../../../../../src/books/bookshelf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var bookRoutes = [
    { path: 'books/:uuid', component: __WEBPACK_IMPORTED_MODULE_2__book_info_component__["a" /* BookInfoComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_3__bookshelf_component__["a" /* BookshelfComponent */], data: { title: "List of Books" } },
];
var BookRoutingModule = (function () {
    function BookRoutingModule() {
    }
    return BookRoutingModule;
}());
BookRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(bookRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], BookRoutingModule);

//# sourceMappingURL=book-routing.module.js.map

/***/ }),

/***/ "../../../../../src/books/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.image = obj.image;
        this.uuid = obj.uuid;
        this.published = obj.published;
        this.author = obj.author;
        this._id = obj._id;
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../src/books/books.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookshelf_component__ = __webpack_require__("../../../../../src/books/bookshelf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_info_component__ = __webpack_require__("../../../../../src/books/book-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_link_component__ = __webpack_require__("../../../../../src/books/book-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_routing_module__ = __webpack_require__("../../../../../src/books/book-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_service__ = __webpack_require__("../../../../../src/books/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_management_service__ = __webpack_require__("../../../../../src/books/book-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trades_trade_management_service__ = __webpack_require__("../../../../../src/trades/trade-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__ = __webpack_require__("../../../../../src/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_alert_module__ = __webpack_require__("../../../../../src/alert/alert.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trades_trades_module__ = __webpack_require__("../../../../../src/trades/trades.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__book_routing_module__["a" /* BookRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__alert_alert_module__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_12__trades_trades_module__["a" /* TradesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bookshelf_component__["a" /* BookshelfComponent */],
            __WEBPACK_IMPORTED_MODULE_4__book_link_component__["a" /* BookLinkComponent */],
            __WEBPACK_IMPORTED_MODULE_3__book_info_component__["a" /* BookInfoComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__library_service__["a" /* LibraryService */],
            __WEBPACK_IMPORTED_MODULE_8__trades_trade_management_service__["a" /* TradeManagementService */],
            __WEBPACK_IMPORTED_MODULE_7__book_management_service__["a" /* BookManagementService */]
        ]
    })
], BooksModule);

//# sourceMappingURL=books.module.js.map

/***/ }),

/***/ "../../../../../src/books/bookshelf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookshelfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_service__ = __webpack_require__("../../../../../src/books/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookshelfComponent = (function () {
    function BookshelfComponent(libraryService) {
        this.libraryService = libraryService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    BookshelfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.libraryService.getBooks(this.list).subscribe(function (b) { return _this.books = b; });
    };
    return BookshelfComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], BookshelfComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], BookshelfComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], BookshelfComponent.prototype, "routeAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], BookshelfComponent.prototype, "display", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.position'),
    __metadata("design:type", Object)
], BookshelfComponent.prototype, "position", void 0);
BookshelfComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'bookshelf',
        template: "\n    <div ngClass='container-fluid'>\n      <h1 ngClass='card-title'> {{title || \"All Books\"}} </h1>\n      <div *ngIf=\"books\" ngClass='row'>\n        <book-link *ngFor=\"let b of (books | keys)\" [book]=\"b\"></book-link>\n      </div>\n    </div>\n  ",
        animations: [__WEBPACK_IMPORTED_MODULE_2__app_animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__library_service__["a" /* LibraryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__library_service__["a" /* LibraryService */]) === "function" && _a || Object])
], BookshelfComponent);

var _a;
//# sourceMappingURL=bookshelf.component.js.map

/***/ }),

/***/ "../../../../../src/books/library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__("../../../../../src/books/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config__ = __webpack_require__("../../../../../src/assets/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LibraryService = (function () {
    function LibraryService(http) {
        this.http = http;
        this.bookList = {};
    }
    LibraryService.prototype.getBooks = function (list) {
        var _this = this;
        var l = list || '';
        if (this.bookList[list || 'main'])
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (obs) {
                obs.next(_this.bookList[list || 'main']);
            });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* baseURL */] + "/books", __WEBPACK_IMPORTED_MODULE_4__assets_config__["b" /* headers */])
            .map(function (response) {
            _this.bookList[list || 'main'] = {};
            if (response.json())
                response.json().map(function (e) { return _this.bookList[list || 'main'][e.uuid] = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](e); });
            return _this.bookList[list || 'main'];
        });
    };
    LibraryService.prototype.getBook = function (uuid) {
        var _this = this;
        if (!this.bookList['main'])
            return this.getBooks('').map(function (books) { return books[uuid]; });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (obs) { return obs.next(_this.bookList['main'][uuid]); });
    };
    return LibraryService;
}());
LibraryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LibraryService);

var _a;
//# sourceMappingURL=library.service.js.map

/***/ }),

/***/ "../../../../../src/directives/directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_pipe__ = __webpack_require__("../../../../../src/directives/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__keys_pipe__["a" /* KeysPipe */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__keys_pipe__["a" /* KeysPipe */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ "../../../../../src/directives/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (values) {
        var keyArr = Object.keys(values);
        return keyArr.map(function (e) { return values[e]; });
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/global_services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* UserAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* UserAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/global_services/user-authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config__ = __webpack_require__("../../../../../src/assets/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAuthenticationService = UserAuthenticationService_1 = (function () {
    function UserAuthenticationService(http, alert, router) {
        this.http = http;
        this.alert = alert;
        this.router = router;
    }
    UserAuthenticationService.prototype.login = function (loginCredentials) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/user/login", loginCredentials, this.jwt())
            .catch(function (error) {
            if (error.status == 403)
                _this.alert.error('Whoops! Your username or password was incorrect.');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.alert.success('Log-in successful!');
                if (UserAuthenticationService_1.redirectUrl) {
                    _this.router.navigate([UserAuthenticationService_1.redirectUrl]);
                    UserAuthenticationService_1.redirectUrl = undefined;
                }
                return true;
            }
            return false;
        });
    };
    UserAuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    UserAuthenticationService.prototype.isAuthenticated = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return currentUser;
        }
        return false;
    };
    UserAuthenticationService.prototype.redirect = function (url) {
        UserAuthenticationService_1.redirectUrl = this.router.url;
        this.alert.error('You must login first', true);
        this.router.navigate([url]);
    };
    UserAuthenticationService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserAuthenticationService;
}());
UserAuthenticationService = UserAuthenticationService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], UserAuthenticationService);

var UserAuthenticationService_1, _a, _b, _c;
//# sourceMappingURL=user-authentication.service.js.map

/***/ }),

/***/ "../../../../../src/login/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = (function () {
    // @HostBinding('style.position') position = 'absolute';
    // Remember to declare these injections as private or no access with this
    function LoginFormComponent(fb, userAuth, alert) {
        this.fb = fb;
        this.userAuth = userAuth;
        this.alert = alert;
        this.routeAnimation = true;
        this.display = 'block';
    }
    LoginFormComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.loginForm.valueChanges.subscribe(function (value) { _this.formData = value; });
        this.alert.retrieveMessage()
            .subscribe(function (message) { return _this.message = message; });
    };
    LoginFormComponent.prototype.onSubmit = function () {
        this.userAuth.login(this.formData);
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], LoginFormComponent.prototype, "routeAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], LoginFormComponent.prototype, "display", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login-page',
        template: "\n  <div ngClass='container-fluid'>\n    <div ngClass='row justify-content-center align-items-center'>\n      <div ngClass='user-info container'>\n        <div ngClass='row'>\n          <div ngClass='no-padding col-6 col-lg-4 card'>\n            <h1 ngClass='card-header'>Login</h1>\n            <div ngClass='card-body'>\n              <alert></alert>\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div ngClass='form-group'>\n                <label ngClass='col-form-label'> Email </label>\n                <input type=\"email\" ngClass=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\">\n              </div>\n              <div>\n                <label ngClass='form-control-label'> Password </label>\n                <input type=\"password\" ngClass=\"form-control mb-3\" formControlName=\"password\" placeholder=\"Password\">\n              </div>\n              <button type=\"submit\" ngClass=\"btn btn-primary submit\" [disabled]=\"!loginForm.valid\">Log-in</button>\n              </form>\n            </div>\n            <hr ngClass=\"my-4\">\n            <div ngClass='alert alert-light' role='alert'> If you don't have an account, you can <a ngClass='alert-link' routerLink=\"/register\">register here</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
        animations: [__WEBPACK_IMPORTED_MODULE_4__app_animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_services_user_authentication_service__["a" /* UserAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global_services_user_authentication_service__["a" /* UserAuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_component__ = __webpack_require__("../../../../../src/login/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_form_component__ = __webpack_require__("../../../../../src/login/registration-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_component__["a" /* LoginFormComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__registration_form_component__["a" /* RegistrationFormComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(loginRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_component__ = __webpack_require__("../../../../../src/login/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing_module__ = __webpack_require__("../../../../../src/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_management_service__ = __webpack_require__("../../../../../src/user/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_form_component__ = __webpack_require__("../../../../../src/login/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alert_alert_module__ = __webpack_require__("../../../../../src/alert/alert.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__alert_alert_module__["a" /* AlertModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__registration_form_component__["a" /* RegistrationFormComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__global_services_user_authentication_service__["a" /* UserAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_management_service__["a" /* UserManagementService */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/login/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_password_validation__ = __webpack_require__("../../../../../src/assets/password-validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_management_service__ = __webpack_require__("../../../../../src/user/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationFormComponent = (function () {
    // @HostBinding('style.position') position = 'absolute';
    function RegistrationFormComponent(fb, manageUser) {
        this.fb = fb;
        this.manageUser = manageUser;
        this.routeAnimation = true;
        this.display = 'block';
        this.createForm();
    }
    RegistrationFormComponent.prototype.createForm = function () {
        this.registrationForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            validatePassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_2__assets_password_validation__["a" /* matchInput */])('password')]]
        });
    };
    RegistrationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registrationForm.valueChanges.subscribe(function (value) { return _this.formData = value; });
    };
    RegistrationFormComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.formData);
        delete data['validatePassword'];
        this.manageUser.create(data);
    };
    return RegistrationFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], RegistrationFormComponent.prototype, "routeAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], RegistrationFormComponent.prototype, "display", void 0);
RegistrationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'registration-form',
        template: "\n  <div ngClass='container-fluid'>\n    <div ngClass='row justify-content-center align-items-center'>\n      <div ngClass='user-info container'>\n        <div ngClass='row'>\n          <div ngClass='no-padding col-6 col-lg-4 card'>\n            <h1 ngClass='card-header'>Register for an Account</h1>\n            <div ngClass='card-body'>\n              <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">First name</label>\n                <input ngClass='form-control' type=\"text\" formControlName=\"firstName\">\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Last name</label>\n                <input ngClass='form-control' type=\"text\" formControlName=\"lastName\">\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">E-mail</label>\n                <input ngClass='form-control' type=\"email\" formControlName=\"email\">\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Password</label>\n                <input ngClass='form-control' type=\"password\" formControlName=\"password\">\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Validate password</label>\n                <input ngClass='form-control' type=\"password\" formControlName=\"validatePassword\">\n              </div>\n              <button type=\"submit\" ngClass=\"btn btn-primary submit\" [disabled]=\"!registrationForm.valid\">Register</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
        animations: [__WEBPACK_IMPORTED_MODULE_4__app_animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_management_service__["a" /* UserManagementService */]) === "function" && _b || Object])
], RegistrationFormComponent);

var _a, _b;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modal/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_content_service__ = __webpack_require__("../../../../../src/modal/modal-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("../../../../../src/modal/modal.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalContainerComponent = (function () {
    function ModalContainerComponent(cfr, modalService) {
        this.cfr = cfr;
        this.modalService = modalService;
    }
    ModalContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = this.modalService.getContent().subscribe(function (content) { return _this.loadComponent(content); });
    };
    ModalContainerComponent.prototype.loadComponent = function (content) {
        var componentFactory = this.cfr.resolveComponentFactory(content.component);
        var viewContainerRef = this.modalContent.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = content.data;
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    return ModalContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]) === "function" && _a || Object)
], ModalContainerComponent.prototype, "modalContent", void 0);
ModalContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'modal',
        template: "\n  <div ngClass=\"modal fade\" id=\"main-modal\">\n    <div ngClass=\"modal-dialog\" role=\"document\">\n      <div ngClass=\"modal-content\">\n        <ng-template modal-content></ng-template>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__modal_content_service__["a" /* ModalContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_content_service__["a" /* ModalContentService */]) === "function" && _c || Object])
], ModalContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../../src/modal/modal-content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_content__ = __webpack_require__("../../../../../src/modal/modal-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalContentService = (function () {
    function ModalContentService() {
        this.content = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ModalContentService.prototype.setContent = function (component, data) {
        this.content.next(new __WEBPACK_IMPORTED_MODULE_1__modal_content__["a" /* ModalContent */](component, data));
    };
    ModalContentService.prototype.clearContent = function () {
        this.content.next();
    };
    ModalContentService.prototype.getContent = function () {
        return this.content.asObservable();
    };
    return ModalContentService;
}());
ModalContentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ModalContentService);

//# sourceMappingURL=modal-content.service.js.map

/***/ }),

/***/ "../../../../../src/modal/modal-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContent; });
var ModalContent = (function () {
    function ModalContent(component, data) {
        this.component = component;
        this.data = data;
    }
    return ModalContent;
}());

//# sourceMappingURL=modal-content.js.map

/***/ }),

/***/ "../../../../../src/modal/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDirective = (function () {
    function ModalDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return ModalDirective;
}());
ModalDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[modal-content]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object])
], ModalDirective);

var _a;
//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "../../../../../src/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_content_service__ = __webpack_require__("../../../../../src/modal/modal-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_container_component__ = __webpack_require__("../../../../../src/modal/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trades_trade_form_component__ = __webpack_require__("../../../../../src/trades/trade-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_directive__ = __webpack_require__("../../../../../src/modal/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alert_alert_module__ = __webpack_require__("../../../../../src/alert/alert.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__ = __webpack_require__("../../../../../src/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trades_trade_accept_component__ = __webpack_require__("../../../../../src/trades/trade-accept.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__alert_alert_module__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__modal_container_component__["a" /* ModalContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__modal_directive__["a" /* ModalDirective */],
            __WEBPACK_IMPORTED_MODULE_5__trades_trade_form_component__["a" /* TradeFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__trades_trade_accept_component__["a" /* TradeAcceptComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__modal_content_service__["a" /* ModalContentService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__modal_container_component__["a" /* ModalContainerComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__trades_trade_form_component__["a" /* TradeFormComponent */], __WEBPACK_IMPORTED_MODULE_9__trades_trade_accept_component__["a" /* TradeAcceptComponent */]]
    })
], ModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../../src/trades/trade-accept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeAcceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__ = __webpack_require__("../../../../../src/trades/trade-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradeAcceptComponent = (function () {
    function TradeAcceptComponent(fb, alert, trades) {
        this.fb = fb;
        this.alert = alert;
        this.trades = trades;
    }
    TradeAcceptComponent.prototype.createForm = function () {
        this.tradeAcceptForm = this.fb.group({
            offerBook: [this.data.trade.offerBook._id || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            wantBook: [this.data.trade.wantBook._id || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            with: [JSON.parse(localStorage.getItem('currentUser'))._id || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            status: ["Closed"],
            uuid: [this.data.trade.uuid || '']
        });
    };
    TradeAcceptComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        if (!this.trades.isAuthenticated()) {
            this.trades.redirect('/login');
        }
        this.createForm();
        this.tradeAcceptForm.valueChanges.subscribe(function (value) { return _this.formData = value; });
    };
    TradeAcceptComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.formData);
        this.trades.update(data);
    };
    return TradeAcceptComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TradeAcceptComponent.prototype, "data", void 0);
TradeAcceptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n  <div ngClass=\"modal-header\">\n    <h2>Complete a Trade</h2>\n    <button ngClass=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div ngClass=\"modal-body\">\n    <form [formGroup]=\"tradeAcceptForm\" (ngSubmit)=\"onSubmit()\">\n    <alert></alert>\n      <div ngClass=\"form-group\">\n        <label ngClass=\"col-form-label\">Trading For: </label>\n        <select ngClass=\"custom-select\" formControlName=\"offerBook\">\n          <option selected [ngValue]=\"data.trade.offerBook._id\">{{data.trade.offerBook.title}}</option>\n        </select>\n      </div>\n      <div ngClass=\"form-group\">\n        <label ngClass=\"col-form-label\">Your offer:</label>\n        <select ngClass=\"custom-select\" formControlName=\"wantBook\">\n          <option *ngIf=\"data.trade.wantBook\" selected [ngValue]=\"data.trade.wantBook._id\">{{data.trade.wantBook.title}}</option>\n          <option *ngFor=\"let b of (data.books | keys)\" [ngValue]=\"b._id\">{{b.title}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" ngClass=\"btn btn-primary\" [disabled]=\"!tradeAcceptForm.valid\">Accept Trade</button>\n    </form>\n  </div>\n  <div ngClass=\"modal-footer\">\n    <button ngClass=\"btn btn-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__["a" /* TradeManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__["a" /* TradeManagementService */]) === "function" && _c || Object])
], TradeAcceptComponent);

var _a, _b, _c;
//# sourceMappingURL=trade-accept.component.js.map

/***/ }),

/***/ "../../../../../src/trades/trade-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__ = __webpack_require__("../../../../../src/trades/trade-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradeFormComponent = (function () {
    function TradeFormComponent(fb, alert, trades) {
        this.fb = fb;
        this.alert = alert;
        this.trades = trades;
    }
    TradeFormComponent.prototype.createForm = function () {
        this.tradeForm = this.fb.group({
            offerBook: [this.data.books[this.data.preSelectedBook]._id || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            wantBook: [''],
            from: [JSON.parse(localStorage.getItem('currentUser'))._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    TradeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.tradeForm.valueChanges.subscribe(function (value) { return _this.formData = value; });
    };
    TradeFormComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.formData);
        if (!data.wantBook)
            delete data['wantBook'];
        this.trades.create(data);
    };
    return TradeFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TradeFormComponent.prototype, "data", void 0);
TradeFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n  <div ngClass=\"modal-header\">\n    <h2>Add a trade</h2>\n    <button ngClass=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div ngClass=\"modal-body\">\n    <form [formGroup]=\"tradeForm\" (ngSubmit)=\"onSubmit()\">\n    <alert></alert>\n      <div ngClass=\"form-group\">\n        <label ngClass=\"col-form-label\">Trade This: </label>\n        <select ngClass=\"custom-select\" formControlName=\"offerBook\">\n          <option *ngIf=\"data.preSelectedBook\" [ngValue]=\"data.books[data.preSelectedBook]._id\" selected>{{data.books[data.preSelectedBook].title}}</option>\n          <ng-container *ngIf=\"!data.preSelectedBook\">\n            <option *ngFor=\"let b of (data.books | keys)\" [ngValue]=\"b._id\">{{b.title}}</option>\n          </ng-container>\n        </select>\n      </div>\n      <div ngClass=\"form-group\">\n        <label ngClass=\"col-form-label\">Want something?</label>\n        <select ngClass=\"custom-select\" formControlName=\"wantBook\">\n          <option selected ngValue=\"null\">Suprise me!</option>\n          <option *ngFor=\"let b of (data.books | keys)\" [ngValue]=\"b._id\">{{b.title}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" ngClass=\"btn btn-primary\" [disabled]=\"!tradeForm.valid\">Submit Trade</button>\n    </form>\n  </div>\n  <div ngClass=\"modal-footer\">\n    <button ngClass=\"btn btn-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__["a" /* TradeManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__trades_trade_management_service__["a" /* TradeManagementService */]) === "function" && _c || Object])
], TradeFormComponent);

var _a, _b, _c;
//# sourceMappingURL=trade-form.component.js.map

/***/ }),

/***/ "../../../../../src/trades/trade-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config__ = __webpack_require__("../../../../../src/assets/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade__ = __webpack_require__("../../../../../src/trades/trade.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TradeManagementService = (function (_super) {
    __extends(TradeManagementService, _super);
    function TradeManagementService(http, alert, router) {
        var _this = _super.call(this, http, alert, router) || this;
        _this.http = http;
        _this.alert = alert;
        _this.router = router;
        return _this;
    }
    TradeManagementService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/trades", this.jwt())
            .map(function (response) {
            var trades = response.json();
            if (trades)
                return trades.map(function (e) { return new __WEBPACK_IMPORTED_MODULE_4__trade__["a" /* Trade */](e); });
            return [];
        });
    };
    TradeManagementService.prototype.getOne = function (tradeId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/trades/" + tradeId, this.jwt())
            .subscribe(function (response) { return response.json(); });
    };
    TradeManagementService.prototype.getForBook = function (bookId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/books/" + bookId + "/trades")
            .map(function (response) {
            var trades = response.json();
            if (trades)
                return trades.map(function (e) { return new __WEBPACK_IMPORTED_MODULE_4__trade__["a" /* Trade */](e); });
            return [];
        });
    };
    TradeManagementService.prototype.create = function (tradeInfo) {
        var _this = this;
        if (!this.isAuthenticated()) {
            __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = this.router.url;
            this.alert.error('Please login and try again', true);
            return this.router.navigate(['/login']);
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/trades", tradeInfo, this.jwt())
            .catch(function (error) {
            if (error.status == 400)
                _this.alert.error('There was a problem with the submitted data, sorry :(');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            _this.alert.success('Congrats! Your trade request was added to the system!');
            return response.json();
        });
    };
    TradeManagementService.prototype.update = function (newInfo) {
        var _this = this;
        if (!this.isAuthenticated()) {
            __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = this.router.url;
            return this.router.navigate(['/login']);
        }
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/trades", newInfo, this.jwt())
            .catch(function (error) {
            if (error.status == 204)
                _this.alert.error('We couldn\'t find that trade in our systems.');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            _this.alert.success('Hooray! Your trade information was updated!');
            return response.json();
        });
    };
    TradeManagementService.prototype.delete = function (tradeId) {
        var _this = this;
        if (!this.isAuthenticated()) {
            __WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */].redirectUrl = this.router.url;
            return this.router.navigate(['/login']);
        }
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* baseURL */] + "/trades/" + tradeId, this.jwt())
            .catch(function (error) {
            if (error.status == 400)
                _this.alert.error('We couldn\'t find that trade in our systems.');
            else
                _this.alert.error('Whoops! Something might be wrong on our end. Please try again in a few minutes!');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ error: true });
        })
            .subscribe(function (response) {
            if (response.hasOwnProperty('error'))
                return;
            _this.alert.success('The trade was deleted from our systems.');
            return response.json();
        });
    };
    return TradeManagementService;
}(__WEBPACK_IMPORTED_MODULE_5__global_services_user_authentication_service__["a" /* UserAuthenticationService */]));
TradeManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _c || Object])
], TradeManagementService);

var _a, _b, _c;
//# sourceMappingURL=trade-management.service.js.map

/***/ }),

/***/ "../../../../../src/trades/trade-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade__ = __webpack_require__("../../../../../src/trades/trade.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_content_service__ = __webpack_require__("../../../../../src/modal/modal-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trades_trade_accept_component__ = __webpack_require__("../../../../../src/trades/trade-accept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_library_service__ = __webpack_require__("../../../../../src/books/library.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TradeViewComponent = (function () {
    function TradeViewComponent(modalService, libraryService) {
        this.modalService = modalService;
        this.libraryService = libraryService;
    }
    TradeViewComponent.prototype.showModal = function () {
        var _this = this;
        this.libraryService.getBooks('')
            .subscribe(function (books) {
            var data = {
                trade: _this.trade,
                books: books
            };
            _this.modalService.setContent(__WEBPACK_IMPORTED_MODULE_3__trades_trade_accept_component__["a" /* TradeAcceptComponent */], data);
        });
    };
    return TradeViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trade__["a" /* Trade */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trade__["a" /* Trade */]) === "function" && _a || Object)
], TradeViewComponent.prototype, "trade", void 0);
TradeViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'trade-view',
        template: "\n  <div ngClass=\"container-fluid trade\">\n    <div ngClass=\"row justify-content-center\">\n      <div ngClass='col-12 col-md-6 mt-2 align-items-center'>\n        <div ngClass=\"offerBook\">\n          <img src=\"{{trade.offerBook.image}}\" alt=\"{{trade.offerBook.title}}\">\n        </div>\n        <div *ngIf=\"trade.wantBook\" ngClass=\"wantBook\">\n          <img src=\"{{trade.wantBook.image}}\" alt=\"{{trade.wantBook.title}}\">\n        </div>\n      </div>\n    </div>\n    <div ngClass=\"row justify-content-center\">\n      <div ngClass='col-12 col-md-6'>\n        <button ngClass=\"btn btn-primary mt-2 mb-2\" (click)=\"showModal()\" data-toggle=\"modal\" data-target=\"#main-modal\">Offer Trade</button>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__modal_modal_content_service__["a" /* ModalContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_modal_content_service__["a" /* ModalContentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__books_library_service__["a" /* LibraryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__books_library_service__["a" /* LibraryService */]) === "function" && _c || Object])
], TradeViewComponent);

var _a, _b, _c;
//# sourceMappingURL=trade-view.component.js.map

/***/ }),

/***/ "../../../../../src/trades/trade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trade; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_book__ = __webpack_require__("../../../../../src/books/book.ts");

var Trade = (function () {
    function Trade(obj) {
        this.wantBook = new __WEBPACK_IMPORTED_MODULE_0__books_book__["a" /* Book */](obj.wantBook);
        this.offerBook = new __WEBPACK_IMPORTED_MODULE_0__books_book__["a" /* Book */](obj.offerBook);
        this.from = obj.from;
        this.status = obj.status;
        this.uuid = obj.uuid;
        this.completed = obj.completed;
        this._id = obj._id;
    }
    return Trade;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ "../../../../../src/trades/trades-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trades_component__ = __webpack_require__("../../../../../src/trades/trades.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'trades', component: __WEBPACK_IMPORTED_MODULE_2__trades_component__["a" /* TradesComponent */] }
];
var TradesRoutingModule = (function () {
    function TradesRoutingModule() {
    }
    return TradesRoutingModule;
}());
TradesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(loginRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], TradesRoutingModule);

//# sourceMappingURL=trades-routing.module.js.map

/***/ }),

/***/ "../../../../../src/trades/trades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_management_service__ = __webpack_require__("../../../../../src/trades/trade-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradesComponent = (function () {
    function TradesComponent(manageTrade, alert) {
        this.manageTrade = manageTrade;
        this.alert = alert;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    TradesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.bookId)
            return this.manageTrade.getForBook(this.bookId).subscribe(function (trades) { return _this.trades = trades; });
        this.manageTrade.getAll().subscribe(function (trades) { return _this.trades = trades; });
    };
    return TradesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TradesComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TradesComponent.prototype, "bookId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], TradesComponent.prototype, "routeAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], TradesComponent.prototype, "display", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.position'),
    __metadata("design:type", Object)
], TradesComponent.prototype, "position", void 0);
TradesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'trades',
        template: "\n    <div ngClass='container-fluid'>\n      <h1 ngClass='card-title'> {{title || \"Open Trades\"}} </h1>\n      <div *ngIf=\"trades\" ngClass='row'>\n        <trade-view *ngFor=\"let t of trades\" [trade]=\"t\"></trade-view>\n      </div>\n    </div>\n  ",
        animations: [__WEBPACK_IMPORTED_MODULE_3__app_animations__["a" /* slideInDownAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trade_management_service__["a" /* TradeManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trade_management_service__["a" /* TradeManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], TradesComponent);

var _a, _b;
//# sourceMappingURL=trades.component.js.map

/***/ }),

/***/ "../../../../../src/trades/trades.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trades_routing_module__ = __webpack_require__("../../../../../src/trades/trades-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trades_component__ = __webpack_require__("../../../../../src/trades/trades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade_view_component__ = __webpack_require__("../../../../../src/trades/trade-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trade_management_service__ = __webpack_require__("../../../../../src/trades/trade-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert_module__ = __webpack_require__("../../../../../src/alert/alert.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TradesModule = (function () {
    function TradesModule() {
    }
    return TradesModule;
}());
TradesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__trades_routing_module__["a" /* TradesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__alert_alert_module__["a" /* AlertModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__trades_component__["a" /* TradesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__trade_view_component__["a" /* TradeViewComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__trade_management_service__["a" /* TradeManagementService */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__trades_component__["a" /* TradesComponent */]]
    })
], TradesModule);

//# sourceMappingURL=trades.module.js.map

/***/ }),

/***/ "../../../../../src/user/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_password_validation__ = __webpack_require__("../../../../../src/assets/password-validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_service__ = __webpack_require__("../../../../../src/user/user-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserInfoComponent = (function () {
    function UserInfoComponent(userManagement, fb, userAuth) {
        this.userManagement = userManagement;
        this.fb = fb;
        this.userAuth = userAuth;
        this.editing = false;
    }
    UserInfoComponent.prototype.createForm = function (user) {
        this.userForm = this.fb.group({
            firstName: [user.firstName || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastName: [user.lastName || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: [user.email || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]],
            password: [user.password || ''],
            validatePassword: [user.password || '', [Object(__WEBPACK_IMPORTED_MODULE_2__assets_password_validation__["a" /* matchInput */])('password')]]
        });
    };
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.createForm(user);
        this.userForm.valueChanges.subscribe(function (value) { return _this.formData = value; });
    };
    UserInfoComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.formData);
        if (!data['password'])
            delete data['password'];
        delete data['validatePassword'];
        data['uuid'] = JSON.parse(localStorage.getItem('currentUser'))['uuid'];
        this.userManagement.update(data);
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-info',
        template: "\n  <div ngClass='container-fluid'>\n    <div ngClass='row justify-content-center align-items-center'>\n      <div ngClass='user-info col-10 col-lg-9'>\n        <div ngClass='card'>\n          <h1 ngClass='title card-header'>User Profile</h1>\n          <div ngClass='card-body'>\n            <form *ngIf=\"userForm\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">First name</label>\n                <input *ngIf=\"editing\" ngClass='form-control' type=\"text\" formControlName=\"firstName\">\n                <p *ngIf=\"!editing\">{{this.userForm.value.firstName || ''}}</p>\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Last name</label>\n                <input *ngIf=\"editing\" ngClass='form-control' type=\"text\" formControlName=\"lastName\">\n                <p *ngIf=\"!editing\">{{this.userForm.value.lastName || ''}}</p>\n              </div>\n              <div ngClass='form-group'>\n                <label ngClass=\"form-control-label\">E-mail</label>\n                <input *ngIf=\"editing\" ngClass='form-control' type=\"email\" formControlName=\"email\">\n                <p *ngIf=\"!editing\">{{this.userForm.value.email || ''}}</p>\n              </div>\n              <div *ngIf=\"editing\" ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Password</label>\n                <input *ngIf=\"editing\" ngClass='form-control' type=\"password\" formControlName=\"password\">\n              </div>\n              <div *ngIf=\"editing\" ngClass='form-group'>\n                <label ngClass=\"form-control-label\">Validate password</label>\n                <input *ngIf=\"editing\" ngClass='form-control' type=\"password\" formControlName=\"validatePassword\">\n              </div>\n              <button ngClass='btn btn-secondary' type=\"alt\" (click)=\"editing=!editing\">{{editing ? 'Cancel' : 'Edit'}}</button>\n              <button ngClass='btn btn-primary'*ngIf=\"editing\" type=\"submit\" [disabled]=\"!userForm.valid\">Submit</button>\n              <button ngClass='btn btn-danger float-right' type=\"danger\" (click)=\"userAuth.logout()\">Log-out</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_management_service__["a" /* UserManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_management_service__["a" /* UserManagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_services_user_authentication_service__["a" /* UserAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_services_user_authentication_service__["a" /* UserAuthenticationService */]) === "function" && _c || Object])
], UserInfoComponent);

var _a, _b, _c;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/user/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_config__ = __webpack_require__("../../../../../src/assets/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_user_authentication_service__ = __webpack_require__("../../../../../src/global_services/user-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_service__ = __webpack_require__("../../../../../src/alert/alert.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Missing the @ symbol can give failed to resolve parameters error
var UserManagementService = (function (_super) {
    __extends(UserManagementService, _super);
    //When extending, still have to pass in injected components to constructor
    function UserManagementService(http, alert, router) {
        var _this = _super.call(this, http, alert, router) || this;
        _this.http = http;
        _this.alert = alert;
        _this.router = router;
        return _this;
    }
    UserManagementService.prototype.create = function (userInfo) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* baseURL */] + "/user", userInfo, this.jwt())
            .subscribe(function (response) {
            _this.router.navigate(['user/profile']);
            _this.alert.success('Yay! Your account was created!', true);
            return response.json();
        });
    };
    UserManagementService.prototype.update = function (userInfo) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* baseURL */] + "/user", userInfo, this.jwt())
            .subscribe(function (response) { return response.json(); });
    };
    UserManagementService.prototype.delete = function (userInfo) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* baseURL */] + "/user/" + userInfo.id, this.jwt())
            .subscribe(function (response) { return response.json(); });
    };
    UserManagementService.prototype.get = function (userInfo) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* baseURL */] + "/user/" + userInfo.id, this.jwt())
            .subscribe(function (response) { return response.json(); });
    };
    return UserManagementService;
}(__WEBPACK_IMPORTED_MODULE_3__global_services_user_authentication_service__["a" /* UserAuthenticationService */]));
UserManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
], UserManagementService);

var _a, _b, _c;
//# sourceMappingURL=user-management.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map