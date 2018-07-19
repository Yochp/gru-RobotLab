(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/robot-list/robot-list.component */ "./src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/part-list/part-list.component */ "./src/app/components/part-list/part-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/robots', pathMatch: 'full' },
    { path: 'robots', component: _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_2__["RobotListComponent"] },
    { path: 'parts', component: _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_3__["PartListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-image: url('bg.jpg'); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <app-header></app-header>\n    <router-outlet></router-outlet>",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/part-list/part-list.component */ "./src/app/components/part-list/part-list.component.ts");
/* harmony import */ var _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/robot-list/robot-list.component */ "./src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__["PartListComponent"],
                _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_5__["RobotListComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Bangers);\n:host {\n  text-align: center;\n  height: 250px; }\n:host .title {\n    margin: 0 auto; }\n:host h1 {\n    text-align: center;\n    font-weight: normal;\n    color: #ff374b;\n    text-transform: uppercase;\n    font-size: 8em;\n    white-space: nowrap;\n    font-size: 12vw;\n    z-index: 1000;\n    font-family: 'Bangers', cursive;\n    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.7); }\n@media screen and (max-width: 50em) {\n    :host h1 {\n      font-size: 20vw; } }\n:host .logo {\n    height: 50px; }\n:host nav {\n    max-width: 80%;\n    margin: 10px auto;\n    display: flex; }\n:host nav button {\n      transition: all 0.5s;\n      font-size: 70px;\n      font-weight: 600;\n      flex-grow: 1;\n      flex-basis: 100px;\n      outline: none;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 80px;\n      border-color: transparent;\n      background: transparent;\n      color: #6bff57; }\n:host nav button:hover {\n        color: white;\n        -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n                animation: neon 1.5s ease-in-out infinite alternate; }\n:host nav .selected {\n      border: none;\n      outline: none;\n      box-shadow: 3px 1px 10px 5px #00ff9b; }\n@-webkit-keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n@keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: "\n    <h1 class ='title'>\n      GRU - Robot Lab\n    </h1>\n    <nav>\n      <button routerLink=\"/robots\" routerLinkActive=\"selected\">\n        Robots\n      </button>\n      <button routerLink=\"/parts\" routerLinkActive=\"selected\">\n        Parts\n      </button>\n    </nav>\n  ",
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/part-list/part-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/part-list/part-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row-cards\">\n\n  <div *ngFor=\"let part of parts$ | async\" class=\"container\">\n    <ul>\n      <li ngClass=\"card\">\n        <div>\n          <img src=\"/assets/images/cpu.png\"/>\n          <label>\n            <b>{{part.name}}</b>\n          </label>\n        </div>\n        <div>\n          <label>ID: </label>{{part.id}}\n        </div>\n        <div>\n          <label>CPU: </label>{{part.cpu}}\n        </div>\n        <div>\n          <label>Engine: </label>{{part.engine}}\n        </div>\n        <div>\n          <label>Type: </label>{{part.type}}\n        </div>\n        <button (click)=\"editPart(part)\">edit</button>\n        <button (click)=\"deletePart(part)\">delete</button>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n\n\n<button (click)=\"showNewPart()\">Create Part</button>\n\n<div ngClass=\"card\" *ngIf=\"showNew\">\n\n\n    <label>Name</label><input [(ngModel)]=\"tempPart.name\" placeholder=\"name\">\n\n\n\n    <label>ID</label><input [(ngModel)]=\"tempPart.id\" placeholder=\"name\">\n\n    <label>CPU</label><input [(ngModel)]=\"tempPart.cpu\" placeholder=\"CPU\">\n    <label>Engine</label><input [(ngModel)]=\"tempPart.engine\" placeholder=\"Engine\">\n    <label>Type</label><input [(ngModel)]=\"tempPart.type\" placeholder=\"type\">\n\n\n  <button (click)=\"createPart(tempPart)\">create</button>\n\n\n\n</div>\n\n<div ngClass=\"card change\" *ngIf=\"showEdit\">\n\n  <div>\n    <label>Name</label><input [(ngModel)]=\"tempPart.name\">\n  </div>\n\n  <div>\n    <label>ID</label><input [(ngModel)]=\"tempPart.id\">\n  </div>\n\n  <div>\n    <label>CPU</label><input [(ngModel)]=\"tempPart.cpu\">\n  </div>\n  <div>\n    <label>Engine</label><input [(ngModel)]=\"tempPart.engine\">\n  </div>\n  <div>\n    <label>Type</label><input [(ngModel)]=\"tempPart.type\">\n\n  </div>\n  <button (click)=\"submitPart(tempPart)\">submit</button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/part-list/part-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/part-list/part-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 150px;\n  padding: 5px 5px;\n  margin: 5px 0;\n  box-sizing: border-box;\n  display: -webkit-box; }\n\n.card, .container .card {\n  padding: 5px;\n  min-width: 170px;\n  min-height: 170px;\n  color: black;\n  border: 1px solid coral;\n  background-color: rgba(249, 249, 249, 0.55);\n  border-radius: 5px;\n  display: inline-block;\n  text-align: left;\n  position: relative;\n  margin-left: 50px; }\n\nlabel {\n  font-weight: bold; }\n\nbutton {\n  transition: all 0.5s;\n  font-size: 15px;\n  flex-grow: 1;\n  flex-basis: 100px;\n  outline: none;\n  padding: 5px 5px;\n  margin-top: 20px;\n  margin-right: 5px;\n  cursor: pointer;\n  margin-left: 5px;\n  border-radius: 5px;\n  background: transparent;\n  color: #ff6f1b;\n  border-color: #ff374b; }\n\nbutton:hover {\n    color: white;\n    -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n            animation: neon 1.5s ease-in-out infinite alternate; }\n\n.row-cards {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.container {\n  display: flex;\n  justify-content: center; }\n\n.container img {\n    width: 30px;\n    height: 30px;\n    display: inline; }\n\n.container .card img {\n    margin: 5px; }\n\n.container .card div {\n    display: flex; }\n\n.container .card div:first-child label {\n      padding-top: 15px; }\n\n.change {\n  background-color: rgba(255, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/components/part-list/part-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/part-list/part-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartListComponent", function() { return PartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/parts.service */ "./src/app/services/parts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartListComponent = /** @class */ (function () {
    function PartListComponent(partsService) {
        this.partsService = partsService;
        this.showEdit = false;
        this.showNew = false;
        this.tempPart = {
            cpu: 'cpu',
            engine: 'engine',
            id: 0,
            name: 'name',
            type: 'type'
        };
    }
    PartListComponent.prototype.ngOnInit = function () {
        this.parts$ = this.partsService.getParts();
    };
    PartListComponent.prototype.editPart = function (part) {
        this.tempPart = part;
        this.showEdit = true;
        console.log('edit!');
        console.log(this.tempPart);
        this.parts$ = this.partsService.getParts();
    };
    PartListComponent.prototype.deletePart = function (part) {
        var _this = this;
        this.partsService.deletePartsServ(part).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this.parts$ = _this.partsService.getParts();
        }, 1000);
    };
    PartListComponent.prototype.submitPart = function (tempPart) {
        this.showEdit = false;
        console.log('submit');
        this.partsService.putParts(tempPart).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        this.parts$ = this.partsService.getParts();
    };
    PartListComponent.prototype.showNewPart = function () {
        this.showNew = true;
    };
    PartListComponent.prototype.createPart = function (newpart) {
        var _this = this;
        this.showNew = false;
        console.log('newpart');
        console.log(newpart);
        this.partsService.craetePartsServ(newpart).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this.parts$ = _this.partsService.getParts();
        }, 1000);
    };
    PartListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-list',
            template: __webpack_require__(/*! ./part-list.component.html */ "./src/app/components/part-list/part-list.component.html"),
            styles: [__webpack_require__(/*! ./part-list.component.scss */ "./src/app/components/part-list/part-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_parts_service__WEBPACK_IMPORTED_MODULE_1__["PartsService"]])
    ], PartListComponent);
    return PartListComponent;
}());



/***/ }),

/***/ "./src/app/components/robot-list/robot-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/robot-list/robot-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row-cards\">\n\n  <div *ngFor=\"let robot of robots$ | async\" ngClass=\"container\">\n    <ul>\n      <li ngClass=\"card\">\n        <div>\n          <img src=\"/assets/images/robotic-arm.png\"/>\n          <label>\n            <b>{{robot.name}}</b>\n          </label>\n        </div>\n        <div>\n          <label>ID: </label>{{robot.id}}\n        </div>\n        <div>\n          <label>age: </label>{{robot.age}}\n        </div>\n        <div>\n          <label>Type: </label>{{robot.type}}\n        </div>\n\n        <button (click)=\"editRobot(robot)\">edit</button>\n        <button (click)=\"deleteRobot(robot)\">delete</button>\n\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n\n\n<button (click)=\"showNewRobot()\">Create Robot</button>\n\n<div ngClass=\"card\" *ngIf=\"showNew\">\n\n  <div>\n    <label>Name</label><input [(ngModel)]=\"tempRobot.name\" placeholder=\"name\">\n  </div>\n\n  <div>\n    <label>ID</label><input [(ngModel)]=\"tempRobot.id\" placeholder=\"id\">\n  </div>\n\n  <div>\n    <label>age</label><input [(ngModel)]=\"tempRobot.age\" placeholder=\"age\">\n  </div>\n  <div>\n    <label>Type</label><input [(ngModel)]=\"tempRobot.type\" placeholder=\"type\">\n\n  </div>\n\n  <button (click)=\"createRobot(tempRobot)\">create</button>\n\n\n</div>\n\n\n<div ngClass=\"card change\" *ngIf=\"showEdit\">\n\n  <div>\n    <label>Name</label><input [(ngModel)]=\"tempRobot.name\">\n  </div>\n\n  <div>\n    <label>ID</label><input [(ngModel)]=\"tempRobot.id\">\n  </div>\n\n  <div>\n    <label>age</label><input [(ngModel)]=\"tempRobot.age\">\n  </div>\n  <div>\n    <label>Type</label><input [(ngModel)]=\"tempRobot.type\">\n\n  </div>\n  <button (click)=\"submitRobot(tempRobot)\">submit</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/robot-list/robot-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/robot-list/robot-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 150px;\n  padding: 5px 5px;\n  margin: 5px 0;\n  box-sizing: border-box;\n  display: -webkit-box; }\n\n.card, .container .card {\n  padding: 5px;\n  min-width: 170px;\n  min-height: 170px;\n  color: black;\n  border: 1px solid coral;\n  background-color: rgba(249, 249, 249, 0.55);\n  border-radius: 5px;\n  display: inline-block;\n  text-align: left;\n  position: relative;\n  margin-left: 50px; }\n\nlabel {\n  font-weight: bold; }\n\nbutton {\n  transition: all 0.5s;\n  font-size: 15px;\n  flex-grow: 1;\n  flex-basis: 100px;\n  outline: none;\n  padding: 5px 5px;\n  margin-top: 20px;\n  margin-right: 5px;\n  cursor: pointer;\n  margin-left: 5px;\n  border-radius: 5px;\n  background: transparent;\n  color: #ff6f1b;\n  border-color: #ff374b; }\n\nbutton:hover {\n    color: white;\n    -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n            animation: neon 1.5s ease-in-out infinite alternate; }\n\n.row-cards {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.container {\n  display: flex;\n  justify-content: center; }\n\n.container img {\n    width: 30px;\n    height: 30px;\n    display: inline; }\n\n.container .card img {\n    margin: 5px; }\n\n.container .card div {\n    display: flex; }\n\n.container .card div:first-child label {\n      padding-top: 15px; }\n\n.change {\n  background-color: rgba(255, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/components/robot-list/robot-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/robot-list/robot-list.component.ts ***!
  \***************************************************************/
/*! exports provided: RobotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotListComponent", function() { return RobotListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_robots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/robots.service */ "./src/app/services/robots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RobotListComponent = /** @class */ (function () {
    function RobotListComponent(robotsService) {
        this.robotsService = robotsService;
        this.showEdit = false;
        this.showNew = false;
        this.tempRobot = {
            age: 'age',
            id: 0,
            name: 'name',
            type: 'type'
        };
    }
    RobotListComponent.prototype.ngOnInit = function () {
        this.robots$ = this.robotsService.getRobots();
    };
    RobotListComponent.prototype.editRobot = function (robot) {
        this.tempRobot = robot;
        this.showEdit = true;
        console.log('edit!');
        console.log(this.tempRobot);
    };
    RobotListComponent.prototype.submitRobot = function (tempRobot) {
        this.showEdit = false;
        console.log('submit');
        this.robotsService.putRobot(tempRobot).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        this.robots$ = this.robotsService.getRobots();
    };
    RobotListComponent.prototype.showNewRobot = function () {
        this.showNew = true;
    };
    RobotListComponent.prototype.deleteRobot = function (robot) {
        var _this = this;
        this.robotsService.deleteRobotServ(robot).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this.robots$ = _this.robotsService.getRobots();
        }, 1000);
    };
    RobotListComponent.prototype.createRobot = function (newRobot) {
        var _this = this;
        this.showNew = false;
        console.log('newRobot');
        console.log(newRobot);
        this.robotsService.craeteRobotServ(newRobot).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
        setTimeout(function () {
            _this.robots$ = _this.robotsService.getRobots();
        }, 1000);
    };
    RobotListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-robot-list',
            template: __webpack_require__(/*! ./robot-list.component.html */ "./src/app/components/robot-list/robot-list.component.html"),
            styles: [__webpack_require__(/*! ./robot-list.component.scss */ "./src/app/components/robot-list/robot-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_robots_service__WEBPACK_IMPORTED_MODULE_1__["RobotsService"]])
    ], RobotListComponent);
    return RobotListComponent;
}());



/***/ }),

/***/ "./src/app/services/parts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/parts.service.ts ***!
  \*******************************************/
/*! exports provided: PartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsService", function() { return PartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartsService = /** @class */ (function () {
    function PartsService(http) {
        this.http = http;
        // private partsUrl = 'http://localhost:3000/api/parts';  // URL to web api
        this.partsUrl = '/api/parts'; // URL to web api
    }
    PartsService.prototype.getParts = function () {
        return this.http.get(this.partsUrl);
    };
    PartsService.prototype.putParts = function (put_Parts) {
        return this.http.put(this.partsUrl + "/" + put_Parts.id, put_Parts);
    };
    PartsService.prototype.deletePartsServ = function (part) {
        return this.http.delete(this.partsUrl + "/" + part.id, part);
    };
    PartsService.prototype.craetePartsServ = function (newParts) {
        return this.http.post(this.partsUrl + "/" + newParts.id, newParts);
    };
    PartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PartsService);
    return PartsService;
}());



/***/ }),

/***/ "./src/app/services/robots.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/robots.service.ts ***!
  \********************************************/
/*! exports provided: RobotsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotsService", function() { return RobotsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RobotsService = /** @class */ (function () {
    function RobotsService(http) {
        this.http = http;
        // private robotsUrl = 'http://localhost:3000/api/robots';  // URL to web api
        this.robotsUrl = 'api/robots'; // URL to web api
    }
    RobotsService.prototype.getRobots = function () {
        return this.http.get(this.robotsUrl);
    };
    RobotsService.prototype.deleteRobotServ = function (robot) {
        return this.http.delete(this.robotsUrl + "/" + robot.id, robot);
    };
    RobotsService.prototype.putRobot = function (put_Robot) {
        return this.http.put(this.robotsUrl + "/" + put_Robot.id, put_Robot);
    };
    RobotsService.prototype.craeteRobotServ = function (newRobots) {
        return this.http.post(this.robotsUrl + "/" + newRobots.id, newRobots);
    };
    RobotsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RobotsService);
    return RobotsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoch/GitHub/ng/new_ng/robot-lab/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map