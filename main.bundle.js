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

module.exports = "<ul>\r\n    <li>\r\n        <a href=\"#\">Home</a>\r\n    </li>\r\n    <li>\r\n        <a href=\"#fundaments\">Fundamentos</a>\r\n    </li>\r\n    <li>\r\n        <a href=\"#motivation\">Motivação</a>\r\n    </li>\r\n    <li>\r\n        <a href=\"#applications/graph-editor\">Editor de Grafos</a>\r\n    </li>\r\n</ul>\r\n"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class = \"row\">\n    <div class = \"col-12\">\n        <app-header></app-header>\n    </div>\n</div>\n\n<div class = \"row\">\n    <div class = \"col-2\"></div>\n    <div class = \"col-8\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class = \"col-2\"></div>>  \n</div>"

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

module.exports = "<div class = 'container-fluid'>\r\n\r\n    Separar em tabs diferentes os dois métodos de entrada.\r\n\r\n    <div id = 'editor'>\r\n    </div>\r\n    <button class = \"btn-primary\" (click) = 'buildAdjacencyMatrixFromGraphEditor()'>Construir matriz pelo grafo</button>\r\n    <br>\r\n    <br>\r\n    <input type=\"file\" id=\"input\"/>\r\n    <br>\r\n    <button (click) = 'parseInputFile()'>Fazer parse de arquivo</button>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <button (click) = 'printInputFile()'>Imprimir matriz no console</button>\r\n</div>"

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

module.exports = "<div>\r\n    Revisão de teoria dos jogos e qif\r\n</div>"

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

module.exports = "<div>\r\n    Introdução do problema <br><br><br><br>\r\n\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida et ex sit amet hendrerit. Proin consectetur, sapien eget sodales pulvinar, nulla enim sollicitudin massa, sit amet fermentum justo nunc in nunc. Proin ac lectus sapien. Vestibulum facilisis libero a dolor tincidunt, eget tincidunt lorem viverra. Nam consequat, sapien eget facilisis dignissim, erat nisi cursus orci, ut posuere sapien nunc a sem. In hac habitasse platea dictumst. Vivamus ac sagittis elit. Maecenas convallis consectetur enim sed viverra. Praesent malesuada porttitor eros, ac viverra tellus viverra ut.\r\n    \r\n    Curabitur vulputate lacus sed est vulputate sagittis. Praesent ultrices mauris non condimentum aliquam. Curabitur commodo ipsum nisl, ac consectetur nulla feugiat a. Nulla ultricies ex sapien, eget varius libero viverra nec. Integer ullamcorper neque non nibh tempus interdum. Fusce porttitor rhoncus sodales. Phasellus interdum purus sed ipsum tincidunt ultrices. Donec sit amet sem condimentum, aliquet diam ac, pulvinar tortor. In quis feugiat tellus, vel lobortis velit. Aliquam imperdiet magna eget magna condimentum feugiat. Nunc consequat molestie nisi, vel fermentum mauris lobortis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec arcu magna.\r\n    \r\n    Sed pulvinar, sapien ac gravida venenatis, eros metus laoreet lorem, id maximus tortor elit nec mi. Mauris tincidunt dictum ex, et viverra erat egestas eget. Maecenas iaculis ipsum nec urna pharetra, non maximus felis bibendum. Phasellus diam lectus, volutpat ut tellus et, lobortis fermentum nisi. Vestibulum lacinia nunc quis ante facilisis luctus. Donec eget finibus justo. Curabitur id fringilla ipsum. Vivamus vulputate justo vel arcu accumsan, venenatis placerat libero fringilla. Curabitur maximus in ligula sit amet condimentum. Aliquam porttitor massa nunc, eget dictum nibh consequat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam varius sapien nisi, a sodales odio aliquet sit amet. In hac habitasse platea dictumst. Aenean at quam et enim vulputate aliquam accumsan quis nisi. Nam a lacinia eros.\r\n    \r\n    Nunc mollis augue vitae risus elementum, a porta dolor auctor. Nam efficitur rutrum nulla, ut venenatis nisl. Proin in risus hendrerit leo ornare dictum. Donec elementum tempor dolor. Duis euismod elit nunc, vel suscipit augue lobortis et. Nulla at metus at justo molestie bibendum. Nam sit amet nibh lobortis, sodales mi vitae, gravida turpis. Nullam vitae finibus odio, ut elementum dui.\r\n    \r\n    Integer porttitor auctor massa, sed tincidunt ante placerat non. Vestibulum at arcu et dui suscipit mollis eget vel orci. Fusce et volutpat nisi. Sed maximus nunc nec nibh volutpat, ut tempor risus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In iaculis venenatis nulla, feugiat congue tortor volutpat ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget nulla at eros faucibus consequat.\r\n</div>"

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

module.exports = "<div>\r\n    Adicionar motivação para o estudo da matéria\r\n</div>"

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