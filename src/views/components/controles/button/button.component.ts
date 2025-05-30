import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ButtonComponentProps } from "./button.component.props";

@Component({
    selector: 'button-component',
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})

export class ButtonComponent {
    @Input() props!:ButtonComponentProps;
}