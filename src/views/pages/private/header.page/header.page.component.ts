import { Component } from "@angular/core";
import { TypographyComponent } from "../../../components/controles/typography/typography.component";
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from 'primeng/paginator';

@Component({
    selector: 'header-page-component',
    imports: [TypographyComponent, ButtonModule, PaginatorModule ],
    templateUrl: './header.page.component.html',
    styleUrl: './header.page.component.styles.css',
})

export class HeaderPageComponent {
    
}