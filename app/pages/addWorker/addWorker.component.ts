import {Component} from "@angular/core";
import {Location} from "@angular/common";

import {Worker} from "../../classes/worker/worker"

@Component({
    selector: "my-addWorker",
    templateUrl: "./pages/addWorker/addWorker.xml",
    //styleUrls: ["./pages/workers/workers.css"]
})

export class AddWorkerPage {
    public name: string;

    constructor( private location: Location ) {
        this.name = "";
    }

    Add() {
        new Worker(this.name);
        this.location.back();
    }
}