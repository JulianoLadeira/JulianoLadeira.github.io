webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./applications/applications.module": [
		"../../../../../src/app/applications/applications.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/.abstract-component/abstract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
var AbstractComponent = (function () {
    function AbstractComponent(titleService, route) {
        this.titleService = titleService;
        this.route = route;
        var title = route.snapshot.data.title;
        if (title === undefined) {
            title = 'Quantitative Information Flow';
        }
        titleService.setTitle(title);
    }
    return AbstractComponent;
}());

//# sourceMappingURL=abstract.component.js.map

/***/ }),

/***/ "../../../../../src/app/.common-components/common-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/.common-components/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommonComponentsModule = (function () {
    function CommonComponentsModule() {
    }
    return CommonComponentsModule;
}());
CommonComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], CommonComponentsModule);

//# sourceMappingURL=common-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/.common-components/exception/graph-parsing.exception.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphParsingException; });
var GraphParsingException = (function () {
    function GraphParsingException(message, node1, node2) {
        this.message = message;
        this.node1 = node1;
        this.node2 = node2;
    }
    return GraphParsingException;
}());

//# sourceMappingURL=graph-parsing.exception.js.map

/***/ }),

/***/ "../../../../../src/app/.common-components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <div class = 'row'>\r\n        <div class = 'col-4'></div>\r\n        <div class = 'col-4'>\r\n            <li>\r\n                <a href=\"#\">Home</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#motivation\">Motivação</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#fundaments\">Fundamentos</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#applications/graph-editor\">Editor de Grafos</a>\r\n            </li>\r\n        </div>\r\n        <div class = 'col-4'></div>\r\n    </div>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/.common-components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.redirect = function (path) {
        this.router.navigate([path]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/.common-components/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class = \"row\">\n    <div class = \"col-12\">\n        <app-header></app-header>\n    </div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n\n<div class = \"row\">\n    <div class = \"col-2\"></div>\n    <div class = \"col-8\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class = \"col-2\"></div>>  \n</div>"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fundaments_fundaments_component__ = __webpack_require__("../../../../../src/app/fundaments/fundaments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__introduction_introduction_component__ = __webpack_require__("../../../../../src/app/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_common_components_module__ = __webpack_require__("../../../../../src/app/.common-components/common-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__motivation_motivation_component__ = __webpack_require__("../../../../../src/app/motivation/motivation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__applications_applications_module__ = __webpack_require__("../../../../../src/app/applications/applications.module.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__introduction_introduction_component__["a" /* IntroductionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__motivation_motivation_component__["a" /* MotivationComponent */],
            __WEBPACK_IMPORTED_MODULE_0__fundaments_fundaments_component__["a" /* FundamentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__common_components_common_components_module__["a" /* CommonComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_9__applications_applications_module__["ApplicationsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fundaments_fundaments_component__ = __webpack_require__("../../../../../src/app/fundaments/fundaments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__motivation_motivation_component__ = __webpack_require__("../../../../../src/app/motivation/motivation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introduction_introduction_component__ = __webpack_require__("../../../../../src/app/introduction/introduction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_4__introduction_introduction_component__["a" /* IntroductionComponent */], data: { title: 'Introdução' } },
                { path: 'motivation', component: __WEBPACK_IMPORTED_MODULE_1__motivation_motivation_component__["a" /* MotivationComponent */], data: { title: 'Motivação' } },
                { path: 'fundaments', component: __WEBPACK_IMPORTED_MODULE_0__fundaments_fundaments_component__["a" /* FundamentsComponent */], data: { title: 'Fundamentos' } },
                { path: 'applications', loadChildren: './applications/applications.module#ApplicationsModule' }
            ], { useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/applications/applications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsModule", function() { return ApplicationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_editor_graph_editor_component__ = __webpack_require__("../../../../../src/app/applications/graph.editor/graph-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__applications_routing__ = __webpack_require__("../../../../../src/app/applications/applications.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplicationsModule = (function () {
    function ApplicationsModule() {
    }
    return ApplicationsModule;
}());
ApplicationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__graph_editor_graph_editor_component__["a" /* GraphEditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__applications_routing__["a" /* ApplicationsRoutingModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__graph_editor_graph_editor_component__["a" /* GraphEditorComponent */]]
    })
], ApplicationsModule);

//# sourceMappingURL=applications.module.js.map

/***/ }),

/***/ "../../../../../src/app/applications/applications.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_editor_graph_editor_component__ = __webpack_require__("../../../../../src/app/applications/graph.editor/graph-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplicationsRoutingModule = (function () {
    function ApplicationsRoutingModule() {
    }
    return ApplicationsRoutingModule;
}());
ApplicationsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'graph-editor',
                    component: __WEBPACK_IMPORTED_MODULE_0__graph_editor_graph_editor_component__["a" /* GraphEditorComponent */],
                    data: { title: 'Editor de Entradas' }
                },
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
    })
], ApplicationsRoutingModule);

//# sourceMappingURL=applications.routing.js.map

/***/ }),

/***/ "../../../../../src/app/applications/graph.editor/graph-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n\r\n    <h1 style = 'text-align: center'>Ataque ao anonimato do protocolo Crowds</h1>\r\n    \r\n    <br>\r\n    <br>\r\n    \r\n    <p>    \r\n        Um exemplo de aplicação de Quantitative Information Flow é uma situação de ataque ao anonimato\r\n        de uma rede móvel ad-hoc (MANET) utilizando o protocolo Crowds. MANETs são redes que se auto \r\n        configuram continuamente, e são compostas por dispositivos móveis conectados sem fio. Em uma \r\n        rede dessas, nós podem se mover no espaço e se comunicar com nós próximos, portanto as ligações \r\n        diretas de cada nó mudam continuamente. Para garantir o funcionamento da rede, cada nó deve \r\n        transmitir dados não relacionados com seu próprio uso. O resultado é uma rede dinâmica, com \r\n        topologia autônoma.\r\n    </p>\r\n\r\n    <p>\r\n        protocolo Crowds é uma rede proposta para tráfego anônimo em uma rede. A ideia principal do protocolo \r\n        é esconder as mensagens de cada usuário roteando-as aleatoriamente dentro de um grupo de usuários \r\n        similares. Desta forma, nenhum dos usuários pode ter certeza de onde uma mensagem foi originada.\r\n    </p>\r\n\r\n    <p>\r\n        Nesta aplicação, um jogo será modelado, onde, dentro da rede, existe um agente atacante que busca \r\n        quebrar o anonimato da rede. O atacante adiciona um nó corrompido na rede (que aceita novos nós \r\n        por ser uma rede MANET). Esse nó busca descobrir qual o nó que original a mensagem. O objetivo \r\n        do atacante é escolher a melhor localização para o nó corrompido para comprometer ao máximo o \r\n        anonimato da rede. Esta solução não é trivial. É benéfico para o atacante adicionar um nó conectado \r\n        a vários outros nós, mas ao mesmo tempo este pode não ser um lugar ótimo para se ter medida de \r\n        certeza da origem da mensagem.    \r\n    </p>\r\n\r\n    <p>\r\n        Ao mesmo tempo que existe um atacante na rede, um administrador pode adicionar um nó em um local \r\n        vulnerável da rede. Como este nó nunca gera mensagens, apenas entrega as mensagens que ele recebe, \r\n        seu anonimato não é importante, o que diminui a vulnerabilidade do canal como um todo, e tal qual \r\n        o nó atacante é indetectável, o mesmo vale para este nó. O mesmo também vale sobre as considerações \r\n        sobre a otimalidade da localização deste nó.\r\n    </p>\r\n\r\n    <p>\r\n        O jogo que será resolvido, portanto, consiste em um jogo não cooperativo entre o atacante e o \r\n        administrador. Ambos os jogadores podem realizar as mesmas ações, que é a adição de seu respectivo \r\n        nó em um determinada localização. A utilidade de cada ação pode ser medida como a certeza de o \r\n        atacante determinar qual nó gerou uma determinada mensagem (esta utilidade é negativa para o \r\n        administrador).\r\n    </p>\r\n\r\n    <p>\r\n        Utilizando o editor de grafos abaixo, você pode modelar uma topologia de rede para ser utilizando\r\n        em um simulador que encontra os lugares ideais para tanto o atacante quanto o defensor adicionarem\r\n        os seus nós.\r\n    </p>\r\n\r\n    <div class = \"row\" style = \"align-items: center\">\r\n        <div class = \"col-3\"></div>\r\n        <div class = \"col-9\">\r\n                <div id = 'editor' >\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-10\">\r\n                            <button class = \"btn-primary\" (click) = 'buildAdjacencyMatrixFromGraphEditor()'>Construir matriz pelo grafo</button>\r\n                    </div>\r\n                </div>\r\n                    \r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <p>\r\n        Também é possível submeter a topologia em um arquivo. Esse arquivo deve ser um csv composto\r\n        pelos caracteres '1' ou '0', onde o valor 1 indica que os respectivos nós da posição do \r\n        arquivo possuem conexão e 0 indica que não possuem conexão. O arquivo deve ser terminado no\r\n        caracter 'new line' e a matriz no arquivo deve ser simétrica. A seguir um exemplo de arquivo:\r\n    </p>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\">\r\n                <div>0,1,1</div>\r\n                <div>1,0,1</div>\r\n                <div>1,1,0</div>\r\n                <div></div>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    \r\n    <p>\r\n        Esse csv indica um grafo com 3 nós, todos conectados entre si.\r\n    </p>\r\n\r\n    <br>\r\n    <input type=\"file\" id=\"input\"/>\r\n    <br>\r\n    <br>\r\n    <button class = \"btn-primary\" (click) = 'parseInputFile()'>Fazer parse de arquivo</button>\r\n    <br>\r\n    <br>\r\n    <button class = \"btn-primary\" (click) = 'printInputFile()'>Imprimir matriz no console</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/applications/graph.editor/graph-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_exception_graph_parsing_exception__ = __webpack_require__("../../../../../src/app/.common-components/exception/graph-parsing.exception.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphEditorComponent = (function () {
    function GraphEditorComponent() {
    }
    GraphEditorComponent.prototype.ngAfterViewInit = function () {
        this.graphEditor = new GraphEditor('#editor', {});
    };
    /**
     * Builds the matrix from the input file.
     */
    GraphEditorComponent.prototype.parseInputFile = function () {
        var _this = this;
        var connectionValues = ['1', 'true'];
        var noConnectionValues = ['0', 'false'];
        var element = document.getElementById('input');
        var file = element.files[0];
        Papa.parse(file, { complete: function (results) {
                var data = results.data;
                var adjacencyMatrix = [];
                var lineCount = data.length;
                if (!(data[lineCount - 1].length === 1 && data[lineCount - 1][0] === '')) {
                    throw new Error('Input file must end in new line');
                }
                lineCount--;
                for (var i = 0; i < lineCount; i++) {
                    if (connectionValues.includes(data[i][i])) {
                        throw new __WEBPACK_IMPORTED_MODULE_0__common_components_exception_graph_parsing_exception__["a" /* GraphParsingException */]('Self-connected node', i, undefined);
                    }
                    adjacencyMatrix[i] = [];
                    for (var j = 0; j < lineCount; j++) {
                        if (connectionValues.includes(data[i][j]) || noConnectionValues.includes(data[i][j])) {
                            if (connectionValues.includes(data[i][j]) && connectionValues.includes(data[j][i])) {
                                adjacencyMatrix[i][j] = true;
                            }
                            else if (noConnectionValues.includes(data[i][j]) && noConnectionValues.includes(data[j][i])) {
                                adjacencyMatrix[i][j] = false;
                            }
                            else {
                                throw new __WEBPACK_IMPORTED_MODULE_0__common_components_exception_graph_parsing_exception__["a" /* GraphParsingException */]('Distinct values', i, j);
                            }
                        }
                        else {
                            throw new __WEBPACK_IMPORTED_MODULE_0__common_components_exception_graph_parsing_exception__["a" /* GraphParsingException */]('Value unknown', i, j);
                        }
                    }
                }
                _this.matrix = adjacencyMatrix;
            } });
    };
    /**
     * Builds the adjacency matrix of the current graph.
     */
    GraphEditorComponent.prototype.buildAdjacencyMatrixFromGraphEditor = function () {
        try {
            var rawData = this.graphEditor.get_raw_data();
            var nodeCount = rawData.nodes.length;
            var adjacencyMatrix = [];
            var counter = 0;
            while (counter < nodeCount) {
                var newLine = new Array(nodeCount);
                adjacencyMatrix.push(newLine);
                counter++;
            }
            for (var _i = 0, _a = rawData.edge_list; _i < _a.length; _i++) {
                var edge = _a[_i];
                var index1 = parseInt(edge.node1.label, null);
                var index2 = parseInt(edge.node2.label, null);
                var lowerIndex = Math.min(index1, index2);
                var upperIndex = Math.max(index1, index2);
                adjacencyMatrix[index1][index2] = true;
                adjacencyMatrix[index2][index1] = true;
            }
            for (var _b = 0, adjacencyMatrix_1 = adjacencyMatrix; _b < adjacencyMatrix_1.length; _b++) {
                var line = adjacencyMatrix_1[_b];
                for (counter = 0; counter < nodeCount; counter++) {
                    if (!line[counter]) {
                        line[counter] = false;
                    }
                }
            }
            this.matrix = adjacencyMatrix;
        }
        catch (exception) {
            return null;
        }
    };
    GraphEditorComponent.prototype.printInputFile = function () {
        console.log(this.matrix);
    };
    return GraphEditorComponent;
}());
GraphEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-graph-editor',
        template: __webpack_require__("../../../../../src/app/applications/graph.editor/graph-editor.component.html")
    }),
    __metadata("design:paramtypes", [])
], GraphEditorComponent);

//# sourceMappingURL=graph-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/fundaments/fundaments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n\r\n    <h1 style = 'text-align: center'>Teoria dos Jogos</h1>\r\n    \r\n    <br>\r\n    <br>\r\n\r\n    <p>    \r\n        O que economistas denominam teoria dos jogos psicólogos chamam de teoria das situações sociais, \r\n        o que é uma descrição acurada do que é teoria dos jogos. Apesar de a teoria dos jogos ser relevante \r\n        para jogos poker ou blackjack, a maior parte da pesquisa nessa área é focada em como grupos de pessoas \r\n        interagem. Há duas principais vertentes na área de teoria dos jogos, a dos jogos cooperativos e dos \r\n        jogos não cooperativos. \r\n    </p>\r\n    \r\n    <p>\r\n        Em teoria dos jogos, jogos cooperativos são jogos com competições entre grupos de jogadores, devido à \r\n        imposição externa de comportamento cooperativo (como por exemplo através de leis). Um exemplo de jogo \r\n        cooperativo são jogos multijogadores em equipe. Em Dota, por exemplo, um jogo competitivo entre duas \r\n        equipes de cinco jogadores, jogadores não podem mudar de equipe ou trair sua própria equipe para ter \r\n        um resultado diferente para si próprio dentro dos termos do jogo, caracterizando um jogo cooperativo.\r\n    </p>\r\n    \r\n    <p>    \r\n        Jogos não cooperativos, em contrapartida, não permitem formações de grupos de jogadores, ou todas as \r\n        alianças são estabelecidas através de mecanismos auto reguladores, como por exemplo, através de ameaças. \r\n        Um exemplo real de aplicações de teoria de jogos não cooperativos pode ser visto nas alianças formadas \r\n        durante uma guerra. Dentro de uma aliança, um país pode trair os outros caso assuma que a recompensa \r\n        esperada por trair sua aliança seja maior que a recompensa por continuar dentro dela, seja porque os \r\n        adversários prometeram uma recompensa ou porque continuar na aliança se tornou muito caro, por exemplo.\r\n    </p>\r\n\r\n    <p>\r\n        Outro conceito importante dentro do campo de teoria dos jogos é o conceito de equilíbrio de Nash. Este é \r\n        uma solução para um jogo não cooperativo envolvendo dois ou mais jogadores aonde cada jogador conhece o \r\n        equilíbrio de estratégias dos outros jogadores, e nenhum jogador tem nada a ganhar mudando sua própria \r\n        estratégia. Suponha o jogo a seguir com dois jogadores e a seguinte matriz de payoffs, onde G(A, B) é o \r\n        payoff dos jogadores A e B respectivamente:\r\n    </p> \r\n           \r\n    <style type=\"text/css\">\r\n        .tg  {border-collapse:collapse;border-spacing:0;float: center;}\r\n        .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\r\n        .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\r\n        .tg .tg-yw4l{vertical-align:top}\r\n    </style>\r\n    <table align = \"center\" class=\"tg\">\r\n        <tr>\r\n        <th class=\"tg-yw4l\">Jogador B\\Jogador A</th>\r\n        <th class=\"tg-yw4l\">Ação A</th>\r\n        <th class=\"tg-yw4l\">Ação B</th>\r\n        </tr>\r\n        <tr>\r\n        <td class=\"tg-yw4l\">Ação X</td>\r\n        <td class=\"tg-yw4l\">(100, 0)</td>\r\n        <td class=\"tg-yw4l\">(2, 2)</td>\r\n        </tr>\r\n        <tr>\r\n        <td class=\"tg-yw4l\">Ação Y</td>\r\n        <td class=\"tg-yw4l\">(-1, 0)</td>\r\n        <td class=\"tg-yw4l\">(3, 3)</td>\r\n        </tr>\r\n    </table>\r\n\r\n        <br>\r\n        \r\n\r\n    <p>\r\n        O Jogador B sabe que A não tem incentivo para escolher a Ação A, já que seu payoff sempre será maior \r\n        se escolher a ação B. Portanto, sabendo disso, B não tem incentivo para escolher a ação X, pois seu \r\n        payoff será maior caso escolha a ação Y. Portanto, para esse jogo, as estratégias B e Y são um equilíbrio \r\n        de Nash. \r\n    </p>    \r\n    \r\n    <p>\r\n        Em teoria dos jogos, denominam-se estratégias puras estratégias que definem completamente como um jogador \r\n        irá se comportar em um jogo. Estratégias mistas, em contrapartida, são estratégias onde o jogador escolhe \r\n        alguma estratégia pura com uma probabilidade predefinida para cada estratégia pura. Como essas probabilidades \r\n        são contínuas, há infinitas estratégias mistas para um jogador em um jogo.\t\r\n    </p>\r\n       \r\n    <br>\r\n    <br>\r\n            \r\n    <h1 style = 'text-align: center'>Quantitative Information Flow</h1>\r\n    \r\n    <br>\r\n    <br>\r\n      \r\n    <p> \r\n        QIF é um framework usado para medir a quantidade de informação vazada em um sistema. Um segredo é uma informação \r\n        escondida em um sistema, como por exemplo a senha de um usuário do sistema. Geralmente, qualquer um tem um \r\n        conhecimento parcial sobre essa informação, como por exemplo o conjunto de todas as senhas possíveis neste sistema.\r\n    </p>\r\n       \r\n    <p>\r\n        A vulnerabilidade de um segredo é definida como a probabilidade de alguém descobrir corretamente o segredo em uma \r\n        única tentativa. A vulnerabilidade de uma senha de n bits é 1/2n, por exemplo.\r\n    </p>\r\n       \r\n    <p>\r\n        Um canal é um sistema que processa um segredo X e fornece uma saída Y. No caso de canais determinísticos, essa saída \r\n        é única. É possível que exista mais de uma saída possível para uma mesma entrada em um canal. Nesse caso, o canal é \r\n        denominado canal probabilístico. A importância deste conceito é a medida do quanto o processamento de um segredo aumenta \r\n        sua vulnerabilidade. Por exemplo, se um invasor quer descobrir a senha de um sistema fechado, e a validação da senha \r\n        entrada utiliza o algoritmo mais eficiente possível (a senha entrada é rejeitada assim que o sistema determina que ela \r\n        não é válida), um invasor pode utilizar a medida de tempo para essa validação para medir o quão próximo ou distante ele \r\n        está da senha correta. Neste caso, o canal aumenta a medida de certeza da entrada ao invasor, mesmo a vulnerabilidade do \r\n        segredo sendo independente do canal. QIF fornece ferramentas para medir quantitativamente o vazamento de informação causado \r\n        pelo canal.\r\n    </p>\r\n        \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/fundaments/fundaments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundamentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_component_abstract_component__ = __webpack_require__("../../../../../src/app/.abstract-component/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var FundamentsComponent = (function (_super) {
    __extends(FundamentsComponent, _super);
    function FundamentsComponent(titleService, route) {
        var _this = _super.call(this, titleService, route) || this;
        _this.titleService = titleService;
        _this.route = route;
        return _this;
    }
    return FundamentsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_component_abstract_component__["a" /* AbstractComponent */]));
FundamentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-fundaments',
        template: __webpack_require__("../../../../../src/app/fundaments/fundaments.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], FundamentsComponent);

var _a, _b;
//# sourceMappingURL=fundaments.component.js.map

/***/ }),

/***/ "../../../../../src/app/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container' style = \"text-align: justify; text-justify: inter-word;\">\r\n\r\n    <h1 style = 'text-align: center'>Introdução</h1>\r\n        \r\n    <br>\r\n    <br>\r\n        \r\n    <p>\r\n        Com a ubiquidade da computação que vivemos hoje em dia, segurança se torna uma questão mais importante do que nunca, \r\nque nem sempre é tratada com sucesso. Grandes vazamentos de dados são relativamente comuns, e suas consequências são,\r\nmuitas vezes, catastróficas.\r\n    </p>\r\n\r\n    <p>\r\n    Frequentemente há notícias de vazamentos de dados, oriundos de ataques de hackers. Isto pode causar grande problemas\r\npessoais. Seja pela divulgação de informações confidenciais, como cartões de crédito ou CPFs, seja pela inferência de \r\ninformações confidenciais à partir de dado, à primeira vista, não relacionados<a href = \"http://www.businessinsider.com/the-incredible-story-of-how-target-exposed-a-teen-girls-pregnancy-2012-2\r\n\">[¹]</a>.\r\n    </p>\r\n    \r\n    <p>\r\n    Através deste site, esperamos esclarecer as questões relacionadas com este problema, explicando os fundamentos da \r\nteoria e explorando uma aplicação direta desta área de estudo.\r\n    </p>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_component_abstract_component__ = __webpack_require__("../../../../../src/app/.abstract-component/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var IntroductionComponent = (function (_super) {
    __extends(IntroductionComponent, _super);
    function IntroductionComponent(titleService, route) {
        var _this = _super.call(this, titleService, route) || this;
        _this.titleService = titleService;
        _this.route = route;
        return _this;
    }
    return IntroductionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_component_abstract_component__["a" /* AbstractComponent */]));
IntroductionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-introduction',
        template: __webpack_require__("../../../../../src/app/introduction/introduction.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], IntroductionComponent);

var _a, _b;
//# sourceMappingURL=introduction.component.js.map

/***/ }),

/***/ "../../../../../src/app/motivation/motivation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'container' style = 'text-align: justify'>\r\n\r\n    <h1 style = 'text-align: center'>Motivação</h1>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <p>\r\n        A proteção da confidencialidade de informações sensíveis é uma das questões mais fundamentais de segurança. \r\nInfelizmente, frequentemente esconder informações sensíveis é impossível, pois é necessário revelar alguma informação \r\nde um determinado sistema. Em uma eleição, o voto individual é secreto, mas é necessário revelar a soma total dos \r\nvotos publicamente. Ou, em um verificador de senhas, é necessário rejeitar uma senha incorreta, o que revela informação \r\nsobre o que não é a senha.    \r\n    </p>\r\n    <p>\r\n        Uma das abordagens mais promissoras para diminuir esse vazamento de informação é a teoria de quantificação da \r\nteoria vazada, que nos informa quanta informação foi vazada, e pode dar margem para a tolerância de pequenos vazamentos \r\nde informação.            \r\n    </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/motivation/motivation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_component_abstract_component__ = __webpack_require__("../../../../../src/app/.abstract-component/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var MotivationComponent = (function (_super) {
    __extends(MotivationComponent, _super);
    function MotivationComponent(titleService, route) {
        var _this = _super.call(this, titleService, route) || this;
        _this.titleService = titleService;
        _this.route = route;
        return _this;
    }
    return MotivationComponent;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_component_abstract_component__["a" /* AbstractComponent */]));
MotivationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-motivation',
        template: __webpack_require__("../../../../../src/app/motivation/motivation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MotivationComponent);

var _a, _b;
//# sourceMappingURL=motivation.component.js.map

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map