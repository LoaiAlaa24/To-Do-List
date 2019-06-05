(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TodoListPage-toDo-module"],{

/***/ "./src/app/TodoListPage/styles.css":
/*!*****************************************!*\
  !*** ./src/app/TodoListPage/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\n\n  background-color: #3374BC;\n   height: 2000px; \n   width: 100%; \n   overflow: hidden;\n    position: fixed; \n    margin: 0;\n   padding: 0;\n\n}\n\n.thingToDo{\n\n  margin-bottom: 80px;\n   margin-top:80px\n   ;margin-left: 80px;\n   height:50px;\n   width: 200px;\n\n}\n\n.list-type5{\n  width:410px;\n  margin:0 auto;\n  }\n\n.list-type5 ol {\n  list-style-type: none;\n  list-style-type: decimal ;\n  margin: 0;\n  margin-left: 1em;\n  padding: 0;\n  counter-reset: li-counter;\n  }\n\n.list-type5 ol li{\n  position: relative;\n  margin-bottom: 1.5em;\n  padding: 0.5em;\n  background-color: #F0D756;\n  padding-left: 58px;\n  }\n\n.list-type5 a{\n  text-decoration:none;\n  color:black;\n  font-size:15px;\n  font-family: 'Raleway', sans-serif;\n  }\n\n.list-type5 li:hover{\n  box-shadow:inset -1em 0 #6CD6CC; \n  transition: box-shadow 0.5s;\n  }\n\n.list-type5 ol li:before {\n  position: absolute;\n  top: -0.3em;\n  left: -0.5em;\n  width: 1.8em;\n  height: 1.2em;\n  font-size: 2em;\n  line-height: 1.2;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  background-color: #6CD6CC;\n  transform: rotate(-20deg);\n  -ms-transform: rotate(-20deg);\n  -webkit-transform: rotate(-20deg);\n  z-index: 99;\n  overflow: hidden;\n  content: counter(li-counter);\n  counter-increment: li-counter;\n  }\n\ninput {\n    font-family: \"Roboto\", sans-serif;\n    outline: 0;\n    background: #f2f2f2;\n    width: 100%;\n    border: 0;\n    margin: 0 0 15px;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n  }\n\n.add {\n    font-family: \"Roboto\", sans-serif;\n    text-transform: uppercase;\n    outline: 0;\n    background: #F0D756;\n    width: 100px;\n    border: 0;\n    padding: 15px;\n    color: #FFFFFF;\n    font-size: 14px;\n    transition: all 0.3 ease;\n    cursor: pointer;\n  }\n\n.done {\n    font-family: \"Roboto\", sans-serif;\n    outline: 0;\n    background: #F0D756;\n    text-transform: uppercase;\n    width: 50px;\n    border: 0;\n    padding: 15px;\n    color: #FFFFFF;\n    font-size: 14px;\n    transition: all 0.3 ease;\n    cursor: pointer;\n    float: right; \n    margin-right: 30px;\n     height: 1px; \n     -webkit-transform: translateY(-8px); \n             transform: translateY(-8px)\n  }"

/***/ }),

/***/ "./src/app/TodoListPage/toDo-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/TodoListPage/toDo-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ToDoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoRoutingModule", function() { return ToDoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toDo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo.component */ "./src/app/TodoListPage/toDo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _toDo_component__WEBPACK_IMPORTED_MODULE_2__["ToDoComponent"],
        children: []
    }
];
var ToDoRoutingModule = /** @class */ (function () {
    function ToDoRoutingModule() {
    }
    ToDoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ToDoRoutingModule);
    return ToDoRoutingModule;
}());



/***/ }),

/***/ "./src/app/TodoListPage/toDo.component.html":
/*!**************************************************!*\
  !*** ./src/app/TodoListPage/toDo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<html class=\"page\" >\n<div style=\"align-content: center;\">\n  <button class=\"add\" (click)=\"logout()\">logout</button>\n<div class=\"list-type5\">\n  <form [formGroup]=\"dataForm\" #myform=\"ngForm\" (ngSubmit)=\"addTodo()\" >\n    <input type=\"text\" formControlName=\"dataEntered\"  placeholder=\"Things To Do\" class=\"thingToDo\" />\n    <button class=\"add\">add  </button>\n  </form>\n<ol>\n    <li *ngFor=\"let todoItem of todoList\">\n      {{ todoItem }}\n      <button class=\"done\" (click)= done(todoItem) > Done </button>\n    </li>\n    \n  </ol>\n</div>\n</div>  \n</html> -->"

/***/ }),

/***/ "./src/app/TodoListPage/toDo.component.ts":
/*!************************************************!*\
  !*** ./src/app/TodoListPage/toDo.component.ts ***!
  \************************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
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




var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.dataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dataEntered: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.todoList = [];
    }
    ToDoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!(sessionStorage.getItem("username"))) {
            this.router.navigateByUrl("/");
        }
        this.http.get("/api/user/getToDo/" + sessionStorage.getItem("username"), this.config).subscribe(function (res) {
            _this.todoList = res["data"]["toDoList"];
            console.log(res["msg"]);
            console.log(res["data"]["toDoList"]);
        }, function (err) {
            console.log((err["error"]["msg"]));
        });
    };
    ToDoComponent.prototype.addTodo = function () {
        var _this = this;
        var data = {
            username: sessionStorage.getItem("username"),
            dataEntered: this.dataForm.value["dataEntered"]
        };
        this.http.post("/api/user/postToDo", data, this.config).subscribe(function (res) {
            _this.router.navigateByUrl("/todolist");
        }, function (err) {
            console.log((err["error"]["msg"]));
        });
    };
    ToDoComponent.prototype.done = function (x) {
        var _this = this;
        console.log(x);
        var data = {
            username: sessionStorage.getItem("username"),
            item: x
        };
        this.http.patch("/api/user/doneToDo", data, this.config).subscribe(function (res) {
            _this.router.navigateByUrl("/todolist");
        }, function (err) {
            console.log((err["error"]["msg"]));
        });
    };
    ToDoComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigateByUrl("/");
    };
    ToDoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toDo',
            styles: [__webpack_require__(/*! ./styles.css */ "./src/app/TodoListPage/styles.css")],
            template: __webpack_require__(/*! ./toDo.component.html */ "./src/app/TodoListPage/toDo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ToDoComponent);
    return ToDoComponent;
}());



/***/ }),

/***/ "./src/app/TodoListPage/toDo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/TodoListPage/toDo.module.ts ***!
  \*********************************************/
/*! exports provided: ToDoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoModule", function() { return ToDoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toDo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo-routing.module */ "./src/app/TodoListPage/toDo-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toDo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo.component */ "./src/app/TodoListPage/toDo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ToDoModule = /** @class */ (function () {
    function ToDoModule() {
    }
    ToDoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_toDo_routing_module__WEBPACK_IMPORTED_MODULE_1__["ToDoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            declarations: [_toDo_component__WEBPACK_IMPORTED_MODULE_3__["ToDoComponent"]],
            entryComponents: [],
            providers: []
        })
    ], ToDoModule);
    return ToDoModule;
}());



/***/ })

}]);
//# sourceMappingURL=TodoListPage-toDo-module.js.map