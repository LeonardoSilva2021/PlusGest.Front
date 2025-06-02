import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";
import { CardComponentProps } from "./card.component.props";

@Component({
    selector: 'card-component',
    imports: [CardModule],
    templateUrl: 'card.component.html',
    styleUrl: 'card.component.styles.css',
})

export class CardComponent {
    @Input() props!: CardComponentProps;
}