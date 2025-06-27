import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { GridComponentProps } from "./grid.component.props";

@Component({
    selector: 'grid-component',
    imports: [
        CommonModule
    ],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.styles.css',
})

export class GridComponent {
    @Input() props!: GridComponentProps;
}