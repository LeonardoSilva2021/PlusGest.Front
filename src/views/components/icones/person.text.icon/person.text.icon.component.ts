import { Component, Input } from "@angular/core";
import { PersonTextIconComponentProps } from "./person.text.icon.component.props";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";

@Component({
    selector: 'person-icon-text-component',
    imports: [], 

})

export class PersonTextIconComponent{
    @Input() props!: PersonTextIconComponentProps;

    get propsDefault(): DefaultIconComponentProps {
            return {
                content: ` 
                    <path d="M6.01856 24.1782H21.7334C22.9873 24.1782 23.7373 23.5923 23.7373 22.6196C23.7373 19.5962 19.9521 15.4243 13.8701 15.4243C7.79981 15.4243 4.01465 19.5962 4.01465 22.6196C4.01465 23.5923 4.76465 24.1782 6.01856 24.1782ZM13.8818 13.3267C16.3896 13.3267 18.5693 11.0767 18.5693 8.14697C18.5693 5.25244 16.3896 3.10791 13.8818 3.10791C11.374 3.10791 9.19434 5.29932 9.19434 8.17041C9.19434 11.0767 11.3623 13.3267 13.8818 13.3267Z" />
                `,
                fill: this.props.fill,
            }
        }
}

