"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var worker_1 = require("../../classes/worker/worker");
var AddWorkerPage = (function () {
    function AddWorkerPage(location) {
        this.location = location;
        this.name = "Blah";
    }
    AddWorkerPage.prototype.Add = function () {
        new worker_1.Worker(this.name);
        this.location.back();
    };
    AddWorkerPage = __decorate([
        core_1.Component({
            selector: "my-addWorker",
            templateUrl: "./pages/addWorker/addWorker.xml",
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], AddWorkerPage);
    return AddWorkerPage;
}());
exports.AddWorkerPage = AddWorkerPage;
//# sourceMappingURL=addWorker.component.js.map