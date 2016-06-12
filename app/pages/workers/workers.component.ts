import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

import {Worker} from "../../classes/worker/worker";
import observableArray = require("data/observable-array");

import { registerElement, ViewClass } from "nativescript-angular/element-registry";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "my-workers",
    templateUrl: "./pages/workers/workers.xml",
    styleUrls: ["./pages/workers/workers.css"]
})

export class WorkersPage {
    public workers: observableArray.ObservableArray<Worker>;

    constructor( private location: Location, private router: Router) {
        new Worker("T1");

        setTimeout(() => {
            new Worker("T2");
        }, 10000)

        this.router = router;

        this.workers = Worker.getWorkers();
    }

    GoBack() {
        console.log("backed");
        this.location.back();
    }

    Add() {
        console.log("add");
        var where = "AddWorker";
        console.log("Navigating to: " + where);
        this.router.navigate([where]);
    }
}