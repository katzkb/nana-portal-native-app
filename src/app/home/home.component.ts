import {Component, OnInit} from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:  ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    // onButtonTap(): void {
    //     console.log("Button was pressed");
    // }
    //
    // onButtonTap(): void {
    //     console.log("Button was pressed");
    // }
}
