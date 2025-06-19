import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ButtonComponentProps } from "./button.component.props";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'button-component',
    imports: [CommonModule, ButtonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})

export class ButtonComponent {
    @Input() props!:ButtonComponentProps;
}