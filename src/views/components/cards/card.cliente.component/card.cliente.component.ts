import { Component, Input } from "@angular/core";
import { CardComponent } from "../../controles/card/card.component";
import { TypographyComponent } from "../../controles/typography/typography.component";
import { DividerModule } from "primeng/divider";
import { EditIconComponent } from "../../icones/edit.icon/edit.icon.component";
import { CardClienteComponentProps } from "./card.cliente.component.props";

@Component({
    selector: 'card-cliente-component',
    imports: [CardComponent, TypographyComponent, DividerModule, EditIconComponent],
    templateUrl: './card.cliente.component.html',
    styleUrl: './card.cliente.component.style.css',
})

export class CardClienteComponent {
    @Input() props!: CardClienteComponentProps;
}