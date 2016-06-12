"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var main_component_1 = require("./pages/main/main.component");
var workers_component_1 = require("./pages/workers/workers.component");
var addWorker_component_1 = require("./pages/addWorker/addWorker.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Main", component: main_component_1.MainPage, name: "Main", useAsDefault: true },
            { path: "/Workers", component: workers_component_1.WorkersPage, name: "Workers" },
            { path: "/AddWorker", component: addWorker_component_1.AddWorkerPage, name: "AddWorker" },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map