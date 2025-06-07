import { Component, Input } from "@angular/core";
import { DashboardIconComponentProps } from "./dashboard.icon.component.props";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { DefaultIconComponent } from "../default.icon/default.icon.component";

@Component({
    selector: 'dashboard-icon-component',
    imports: [DefaultIconComponent],
    templateUrl: './dashboard.icon.component.html',
})

export class DashboardIconComponent {
    @Input() props!: DashboardIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            content: ` 
                <path fill-rule="evenodd" d="M1.25 7C1.25 3.82436 3.82436 1.25 7 1.25H17C20.1756 1.25 22.75 3.82436 22.75 7V17C22.75 20.1756 20.1756 22.75 17 22.75H7C3.82436 22.75 1.25 20.1756 1.25 17V7ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14V17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V14C8.75 13.5858 8.41421 13.25 8 13.25ZM11.25 7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V7ZM15.2539 9.92285L15.25 10V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V10L16.7461 9.92285C16.7075 9.54488 16.3882 9.25 16 9.25C15.6118 9.25 15.2925 9.54488 15.2539 9.92285Z" />
            `,
            fill: this.props.fill,
        }
    }
}