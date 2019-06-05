(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MainPage-mainPage-module"],{

/***/ "./src/app/MainPage/mainPage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/MainPage/mainPage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainPage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage.component */ "./src/app/MainPage/mainPage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _mainPage_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        children: []
    }
];
var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/MainPage/mainPage.component.html":
/*!**************************************************!*\
  !*** ./src/app/MainPage/mainPage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<html class=\"page\">\n<div class=\"login-page\" >\n <img src=\"assets/payme.png\" style=\"width: 300px; \" alt=\"Logo\">\n    <div class=\"form\" >\n\n      <form  class=\"login-form\" [formGroup]=\"profileForm\" #myform=\"ngForm\" (ngSubmit)=\"login()\">\n        \n        <input type=\"text\" formControlName=\"username\" placeholder=\"username\"/>\n        <input type=\"password\" formControlName=\"password\" placeholder=\"password\"/>\n        <button>login / create new account</button>\n        <label style=\"margin: 20px;\">{{response}}</label>\n      </form>\n    </div>\n  </div>\n</html>"

/***/ }),

/***/ "./src/app/MainPage/mainPage.component.ts":
/*!************************************************!*\
  !*** ./src/app/MainPage/mainPage.component.ts ***!
  \************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.response = "";
    }
    MainPageComponent.prototype.login = function () {
        var _this = this;
        console.log(this.profileForm.value);
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.http.post("/api/user/login/", this.profileForm.value, config).subscribe(function (res) {
            _this.response = res["msg"];
            _this.router.navigateByUrl("/todolist");
            sessionStorage.setItem("username", res["data"]["username"]);
            window.location.reload;
        }, function (err) {
            _this.response = (err["error"]["msg"]);
        });
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainPage',
            styles: [__webpack_require__(/*! ./styles.css */ "./src/app/MainPage/styles.css")],
            template: __webpack_require__(/*! ./mainPage.component.html */ "./src/app/MainPage/mainPage.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/MainPage/mainPage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/MainPage/mainPage.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mainPage_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage-routing.module */ "./src/app/MainPage/mainPage-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mainPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainPage.component */ "./src/app/MainPage/mainPage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_mainPage_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            declarations: [_mainPage_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
            entryComponents: [],
            providers: []
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/MainPage/styles.css":
/*!*************************************!*\
  !*** ./src/app/MainPage/styles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.page{\n\n  background-color: #3374BC;\n   height: 2000px; \n   width: 100%; \n   overflow: hidden;\n    position: fixed; \n    margin: 0;\n   padding: 0;\n\n}\n\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n  height: 500px;\n}\n\nhtml {\n    height: 2000px !important;\n  }\n\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #3374BC;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form button:hover,.form button:active,.form button:focus {\n  background: #3374BC;\n}\n\n.form .message {\n  margin: 15px;\n  margin-bottom: 10px; \n  color: #b3b3b3;\n  font-size: 20px;\n}\n\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n\n.form .register-form {\n  display: none;\n}\n\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container .info span .fa {\n  color: #EF3B3A;\n}\n\nbody {\n  background: #76b852; /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;      \n}\n"

/***/ })

}]);
//# sourceMappingURL=MainPage-mainPage-module.js.map