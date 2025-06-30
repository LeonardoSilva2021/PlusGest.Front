import { Component, Input  } from "@angular/core";
import { DrawerComponentProps } from "./drawer.component.props";
import { DrawerModule } from "primeng/drawer"
import { TypographyComponent } from "../typography/typography.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'drawer-component',
    imports: [
        DrawerModule,
        TypographyComponent,
        CommonModule
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.styles.css',
})

export class DrawerComponent {
    @Input() props!: DrawerComponentProps;
}