"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var worker_1 = require("../../classes/worker/worker");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var WorkersPage = (function () {
    function WorkersPage(location, router) {
        this.location = location;
        this.router = router;
        new worker_1.Worker("T1");
        setTimeout(function () {
            new worker_1.Worker("T2");
        }, 10000);
        this.router = router;
        this.workers = worker_1.Worker.getWorkers();
    }
    WorkersPage.prototype.GoBack = function () {
        console.log("backed");
        this.location.back();
    };
    WorkersPage.prototype.Add = function () {
        console.log("add");
        var where = "AddWorker";
        console.log("Navigating to: " + where);
        this.router.navigate([where]);
    };
    WorkersPage = __decorate([
        core_1.Component({
            selector: "my-workers",
            templateUrl: "./pages/workers/workers.xml",
            styleUrls: ["./pages/workers/workers.css"]
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_deprecated_1.Router])
    ], WorkersPage);
    return WorkersPage;
}());
exports.WorkersPage = WorkersPage;
//# sourceMappingURL=workers.component.js.map