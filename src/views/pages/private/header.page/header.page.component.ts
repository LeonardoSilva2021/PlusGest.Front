import { Component, Input } from "@angular/core";
import { TypographyComponent } from "../../../components/controles/typography/typography.component";
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from 'primeng/paginator';
import { HeaderPageComponentProps } from "./header.page.component.props";
import { SettingsIconComponent } from "../../../components/icones/settings.icon/settings.icon.component";
import { ButtonComponent } from "../../../components/controles/button/button.component";
import { BadgeIconComponent } from "../../../components/icones/badge.icon/badge.icon.component";

@Component({
    selector: 'header-page-component',
    imports: [
    TypographyComponent,
    ButtonModule,
    PaginatorModule,
    SettingsIconComponent,
    ButtonComponent,
    BadgeIconComponent
],
    templateUrl: './header.page.component.html',
    styleUrl: './header.page.component.styles.css',
})

export class HeaderPageComponent {
    @Input() props!: HeaderPageComponentProps;

    handleClick() {
        
    }
}