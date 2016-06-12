import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {MainPage} from "./pages/main/main.component";
import {WorkersPage} from "./pages/workers/workers.component"
import {AddWorkerPage} from "./pages/addWorker/addWorker.component"

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/Main", component: MainPage, name: "Main", useAsDefault: true },
  { path: "/Workers", component: WorkersPage, name: "Workers"},
  { path: "/AddWorker", component: AddWorkerPage, name: "AddWorker"},
])
export class AppComponent {}