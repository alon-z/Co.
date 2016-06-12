"use strict";
var observableArray = require("data/observable-array");
var Worker = (function () {
    function Worker(name) {
        this.workerName = name;
        Worker.workers.push(this);
    }
    Worker.getWorkers = function () {
        return Worker.workers;
    };
    Worker.prototype.getWorkers = function () {
        return Worker.workers;
    };
    Worker.prototype.addStat = function (stat) {
        this.stats.push(stat);
    };
    Worker.prototype.dismiss = function () {
        var index = this.getWorkers().indexOf(this);
        this.getWorkers().splice(index, 1);
    };
    Worker.prototype.getName = function () {
        return this.workerName;
    };
    Worker.workers = new observableArray.ObservableArray();
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=worker.js.map