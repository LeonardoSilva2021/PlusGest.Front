import { Component, Input } from "@angular/core";
import { TypographyComponentProps } from "./typography.component.props";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'typography-component',
    imports: [CommonModule],
    templateUrl: 'typography.component.html',
    styleUrl: 'typography.component.styles.css',
})

export class TypographyComponent {
    @Input() props!: TypographyComponentProps;
}