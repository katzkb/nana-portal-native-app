import { Component, OnInit } from "@angular/core";
import {boxShadow, boxShadowInset} from "~/lib/box-shadow"

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:  ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    onShadowLoaded = boxShadow;
    onShadowInsetLoaded = boxShadowInset;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
