import { Component } from "@angular/core";
import { MenuPrincipalPage } from "../menu.principal/menu.principal.page";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'main-page',
    imports: [
        MenuPrincipalPage,
        RouterOutlet,
    ],
    templateUrl: './main.page.html',
    styleUrl: './main.page.css',
})

export class MainPage { }