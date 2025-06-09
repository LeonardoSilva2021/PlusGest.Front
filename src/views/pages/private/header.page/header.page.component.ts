import { Component, Input } from "@angular/core";
import { TypographyComponent } from "../../../components/controles/typography/typography.component";
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from 'primeng/paginator';
import { HeaderPageComponentProps } from "./header.page.component.props";

@Component({
    selector: 'header-page-component',
    imports: [TypographyComponent, ButtonModule, PaginatorModule ],
    templateUrl: './header.page.component.html',
    styleUrl: './header.page.component.styles.css',
})

export class HeaderPageComponent {
    @Input() props!: HeaderPageComponentProps;
}