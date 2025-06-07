import { Component } from "@angular/core";
import { CardComponent } from "../../controles/card/card.component";
import { TypographyComponent } from "../../controles/typography/typography.component";

@Component({
    selector: 'card-cliente-component',
    imports: [CardComponent, TypographyComponent],
    templateUrl: './card.cliente.component.html',
    styleUrl: './card.cliente.component.style.css',
})

export class CardClienteComponent {

}