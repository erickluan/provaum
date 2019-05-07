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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'Fira Sans', sans-serif;\r\n}\r\n.jumbotron {\r\n    background-color: #007bff;\r\n}\r\n.display-4, .lead {\r\n    color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmRpc3BsYXktNCwgLmxlYWQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"d-flex mt-5 container flex-column justify-content-center\">\r\n    <h1 class=\"display-4\">{{ title }}</h1>\r\n    <p class=\"lead\">{{ description }}</p>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <app-questao01></app-questao01>\r\n  <app-questao03></app-questao03>\r\n  <app-questao04 (people)=\"adicionarPessoa($event)\"></app-questao04>\r\n  <div class=\"my-5\">\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\" *ngFor=\"let pessoa of pessoas\">\r\n        {{ pessoa.nome | titlecase }} - {{ pessoa.idade }} anos\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');\r\n</style>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Prova 1 - A';
        this.description = 'Avaliação dos conhecimentos de Angular.';
        this.acronym = 'P1';
        this.pessoas = [
            { idade: 25, nome: 'Erick', tipo: 'Adulto' },
            { idade: 24, nome: 'Jon Snow', tipo: 'Adulto' },
            { idade: 24, nome: 'Daenerys Targaryen', tipo: 'Adulto' },
        ];
    }
    AppComponent.prototype.adicionarPessoa = function (pessoa) {
        console.log(pessoa);
        this.pessoas.push(pessoa);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AppComponent.prototype, "pessoas", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _questao01_questao01_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questao01/questao01.component */ "./src/app/questao01/questao01.component.ts");
/* harmony import */ var _questao03_questao03_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questao03/questao03.component */ "./src/app/questao03/questao03.component.ts");
/* harmony import */ var _questao04_questao04_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questao04/questao04.component */ "./src/app/questao04/questao04.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _questao01_questao01_component__WEBPACK_IMPORTED_MODULE_4__["Questao01Component"],
                _questao03_questao03_component__WEBPACK_IMPORTED_MODULE_5__["Questao03Component"],
                _questao04_questao04_component__WEBPACK_IMPORTED_MODULE_6__["Questao04Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/questao01/questao01.component.css":
/*!***************************************************!*\
  !*** ./src/app/questao01/questao01.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0YW8wMS9xdWVzdGFvMDEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questao01/questao01.component.html":
/*!****************************************************!*\
  !*** ./src/app/questao01/questao01.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ titulo }}</h2>\r\n<p>{{ descricao }}</p>\r\n<hr class=\"mb-5\">\r\n<div class=\"d-flex flex-row mb-5\">\r\n  <div class=\"col-5 col-sm-5 col-md-6 align-self-center\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputNumberQuest1\">Número</label>\r\n        <input #num type=\"number\" class=\"form-control\" (change)=\"num.value\" id=\"inputNumberQuest1\" placeholder=\"Coloque um número\" >\r\n      </div>\r\n      <button [disabled]=\"!num.value\" (click)=\"verificarNumeroPar(num.value, {num:num})\" type=\"button\" class=\"btn btn-primary\">Verificar</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-7 col-sm-7 col-md-6 align-self-center\" *ngIf=\"numero !== null\" >\r\n    <h2 [class]=\"numeroClasse\">Número {{ numero }} é {{ tipoNumero | uppercase }} </h2>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/questao01/questao01.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questao01/questao01.component.ts ***!
  \**************************************************/
/*! exports provided: Questao01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao01Component", function() { return Questao01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Questao01Component = /** @class */ (function () {
    function Questao01Component() {
        this.titulo = 'Questão 01';
        this.descricao = 'Verifique se um número é par ou ímpar';
        this.numero = null;
        this.numeroClasse = 'text-primary';
    }
    Questao01Component.prototype.ngOnInit = function () {
    };
    Questao01Component.prototype.verificarNumeroPar = function (value, inputs) {
        this.numero = value;
        if (this.numero % 2 === 0) {
            this.tipoNumero = 'par';
            this.numeroPar = true;
            this.numeroClasse = 'text-primary';
        }
        else {
            this.tipoNumero = 'ímpar';
            this.numeroPar = false;
            this.numeroClasse = 'text-danger';
        }
        inputs.num.value = null;
    };
    Questao01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questao01',
            template: __webpack_require__(/*! ./questao01.component.html */ "./src/app/questao01/questao01.component.html"),
            styles: [__webpack_require__(/*! ./questao01.component.css */ "./src/app/questao01/questao01.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Questao01Component);
    return Questao01Component;
}());



/***/ }),

/***/ "./src/app/questao03/pessoa.ts":
/*!*************************************!*\
  !*** ./src/app/questao03/pessoa.ts ***!
  \*************************************/
/*! exports provided: Pessoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());



/***/ }),

/***/ "./src/app/questao03/questao03.component.css":
/*!***************************************************!*\
  !*** ./src/app/questao03/questao03.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0YW8wMy9xdWVzdGFvMDMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questao03/questao03.component.html":
/*!****************************************************!*\
  !*** ./src/app/questao03/questao03.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ titulo }}</h2>\r\n<p>{{ descricao }}</p>\r\n<hr class=\"mb-5\">\r\n<div class=\"d-flex flex-row\">\r\n  <div class=\"col-12 align-self-center\">\r\n    <form>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputNomePessoa\">Nome da pessoa</label>\r\n          <input #nomePessoa type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"inputNomePessoa\" (change)=\"nomePessoa.value\" placeholder=\"Coloque o nome da pessoa.\" >\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputIdadePessoa\">Idade da Pessoa</label>\r\n          <input #idadePessoa type=\"number\" class=\"form-control\" id=\"inputIdadePessoa\" min=\"1\" max=\"120\" (change)=\"idadePessoa.value\" placeholder=\"Coloque a idade da pessoa\" >\r\n        </div>\r\n      </div>\r\n      <button [disabled]=\"!nomePessoa.value || !idadePessoa.value\" (click)=\"adicionarPessoa(nomePessoa.value, idadePessoa.value, {nomePessoa: nomePessoa, idadePessoa: idadePessoa})\" type=\"button\" class=\"btn btn-primary\">Adicionar Pessoa</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"d-flex justify-content-center flex-row flex-wrap my-4\">\r\n  <div class=\"col-sm-6 mt-4\" *ngFor=\"let pessoa of pessoas\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n          <h3>{{ pessoa.tipo }}</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ pessoa.nome | titlecase }}</h5>\r\n        <p class=\"card-text\">{{ pessoa.idade }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/questao03/questao03.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questao03/questao03.component.ts ***!
  \**************************************************/
/*! exports provided: Questao03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao03Component", function() { return Questao03Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Questao03Component = /** @class */ (function () {
    function Questao03Component() {
        this.titulo = 'Questão 03';
        this.descricao = 'Adicione pessoas a uma lista e saiba se ela é criança, adolescente, adulto ou idoso.';
        this.pessoas = [];
    }
    Questao03Component.prototype.ngOnInit = function () {
    };
    Questao03Component.prototype.adicionarPessoa = function (nome, idade, inputs) {
        var pessoa = {
            nome: nome,
            idade: idade,
            tipo: ''
        };
        if (idade <= 12) {
            pessoa.tipo = 'Criança';
        }
        else if (13 <= idade && idade < 20) {
            pessoa.tipo = 'Adolescente';
        }
        else if (21 <= idade && idade < 65) {
            pessoa.tipo = 'Adulto';
        }
        else {
            pessoa.tipo = 'Idoso';
        }
        inputs.nomePessoa.value = '';
        inputs.idadePessoa.value = '';
        this.pessoas.push(pessoa);
    };
    Questao03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questao03',
            template: __webpack_require__(/*! ./questao03.component.html */ "./src/app/questao03/questao03.component.html"),
            styles: [__webpack_require__(/*! ./questao03.component.css */ "./src/app/questao03/questao03.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Questao03Component);
    return Questao03Component;
}());



/***/ }),

/***/ "./src/app/questao04/questao04.component.css":
/*!***************************************************!*\
  !*** ./src/app/questao04/questao04.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0YW8wNC9xdWVzdGFvMDQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questao04/questao04.component.html":
/*!****************************************************!*\
  !*** ./src/app/questao04/questao04.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\r\n  <h2>{{ titulo }}</h2>\r\n  <hr class=\"mb-5\">\r\n  <div class=\"d-flex flex-row\">\r\n    <div class=\"col-12 align-self-center\">\r\n      <form>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputNomePessoa\">Nome da pessoa</label>\r\n            <input #nomePessoa type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"inputNomePessoa\" (change)=\"nomePessoa.value\" placeholder=\"Coloque o nome da pessoa.\" >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputIdadePessoa\">Idade da Pessoa</label>\r\n            <input #idadePessoa type=\"number\" class=\"form-control\" min=\"1\" max=\"120\" id=\"inputIdadePessoa\" (change)=\"idadePessoa.value\" placeholder=\"Coloque a idade da pessoa\" >\r\n          </div>\r\n        </div>\r\n        <button [disabled]=\"!nomePessoa.value || !idadePessoa.value\" (click)=\"enviarProPai(nomePessoa.value, idadePessoa.value, {nomePessoa: nomePessoa, idadePessoa: idadePessoa})\" type=\"button\" class=\"btn btn-primary\">Adicionar Pessoa</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/questao04/questao04.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questao04/questao04.component.ts ***!
  \**************************************************/
/*! exports provided: Questao04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao04Component", function() { return Questao04Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questao03_pessoa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questao03/pessoa */ "./src/app/questao03/pessoa.ts");



var Questao04Component = /** @class */ (function () {
    function Questao04Component() {
        this.titulo = 'Questão 04';
        this.people = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Questao04Component.prototype.ngOnInit = function () {
    };
    Questao04Component.prototype.enviarProPai = function (nome, idade, inputs) {
        var pessoa = new _questao03_pessoa__WEBPACK_IMPORTED_MODULE_2__["Pessoa"]();
        pessoa.nome = nome;
        pessoa.idade = idade;
        if (idade <= 12) {
            pessoa.tipo = 'Criança';
        }
        else if (13 <= idade && idade < 20) {
            pessoa.tipo = 'Adolescente';
        }
        else if (21 <= idade && idade < 65) {
            pessoa.tipo = 'Adulto';
        }
        else {
            pessoa.tipo = 'Idoso';
        }
        inputs.nomePessoa.value = '';
        inputs.idadePessoa.value = '';
        this.people.emit(pessoa);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Questao04Component.prototype, "people", void 0);
    Questao04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questao04',
            template: __webpack_require__(/*! ./questao04.component.html */ "./src/app/questao04/questao04.component.html"),
            styles: [__webpack_require__(/*! ./questao04.component.css */ "./src/app/questao04/questao04.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Questao04Component);
    return Questao04Component;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\erick.santos\Documents\UFC\PIW\prova1\provaum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map