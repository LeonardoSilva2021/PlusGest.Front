import { Component, Input } from "@angular/core";
import { DefaultIconComponent } from "../default.icon/default.icon.component";
import { CommonModule } from "@angular/common";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { AddUserIconComponentProps } from "./add.user.icon.component.props";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'add-user-icon',
    imports: [DefaultIconComponent, CommonModule],
    templateUrl: './add.user.icon.component.html',
})

export class AddUserIconComponent {

    @Input() props!: AddUserIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            elements: [
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M3 16.9347C3 16.0743 3.54085 15.3068 4.35109 15.0175C8.00404 13.7128 11.996 13.7128 15.6489 15.0175C16.4591 15.3068 17 16.0743 17 16.9347V18.2502C17 19.4376 15.9483 20.3498 14.7728 20.1818L13.8184 20.0455C11.2856 19.6837 8.71435 19.6837 6.18162 20.0455L5.22721 20.1818C4.0517 20.3498 3 19.4376 3 18.2502V16.9347Z"
                    }
                },
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M17 11H21"
                    }
                },
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M19 9L19 13"
                    }
                }
            ],
            fill: this.props.fill,
            classname: this.props.classname,
        }
    }
}