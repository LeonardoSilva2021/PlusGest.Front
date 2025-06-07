import { Component } from "@angular/core";
import { HeaderPageComponent } from "../header.page/header.page.component";
import { CardClienteComponent } from "../../../components/cards/card.cliente.component/card.cliente.component";

@Component({
    selector: 'cliente-page',
    templateUrl: './cliente.page.html',
    styleUrl: './cliente.page.css',
    imports: [HeaderPageComponent, CardClienteComponent],
})

export class ClientePage {

}