import { Component, Input } from "@angular/core";
import { PersonTextIconComponentProps } from "../person.text.icon/person.text.icon.component.props";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { DefaultIconComponent } from "../default.icon/default.icon.component";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'person-bust-icon-component',
    imports: [DefaultIconComponent],
    templateUrl: './person.bust.icon.component.html',
})

export class PersonBustIconComponent {
    @Input() props!: PersonTextIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            elements: [
                {
                    id: uuidv4(),
                    tag: "path",
                    attrs: {
                        d: "M14.3386 9.68457C16.5417 9.70801 18.2878 7.82129 18.2878 5.34864C18.2878 3.04004 16.5417 1.10645 14.3386 1.10645C12.1589 1.10645 10.3894 3.04004 10.3894 5.34864C10.3894 7.82129 12.1472 9.67286 14.3386 9.68457ZM7.41284 18.1689H21.2761C21.9909 18.1689 22.3776 17.7002 22.3776 17.0673C22.3776 15.2158 19.694 11.0908 14.3386 11.0908C8.97143 11.0908 6.29956 15.2158 6.29956 17.0673C6.29956 17.7002 6.698 18.1689 7.41284 18.1689ZM4.97534 26.29H23.7136C24.2292 26.29 24.6511 25.8681 24.6511 25.3525C24.6511 24.8369 24.2292 24.4033 23.7136 24.4033H22.987V21.6728C22.987 20.4423 22.4128 19.7744 21.0886 19.7744H7.60034C6.28784 19.7744 5.7019 20.4423 5.7019 21.6728V24.4033H4.97534C4.45972 24.4033 4.03784 24.8369 4.03784 25.3525C4.03784 25.8681 4.45972 26.29 4.97534 26.29ZM12.0418 23.747C11.6433 23.747 11.3621 23.4423 11.3621 23.0439C11.3621 22.6572 11.6433 22.3642 12.0418 22.3642H16.6706C17.0573 22.3642 17.3503 22.6572 17.3503 23.0439C17.3503 23.4423 17.0573 23.747 16.6706 23.747H12.0418Z"
                    }
                }
            ],
            classname: this.props.classname,
            fill: this.props.fill,
        }
    }
}