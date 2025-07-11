import { Component, Input } from "@angular/core";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { DefaultIconComponent } from "../default.icon/default.icon.component";
import { EditIconComponentProps } from "./edit.icon.component.props";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'edit-icon-component',
    imports: [DefaultIconComponent],
    templateUrl: './edit.icon.component.html',
})

export class EditIconComponent {
        @Input() props!: EditIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            elements: [
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M1 6.75C1 3.57436 3.57436 1 6.75 1H16.75C19.9256 1 22.5 3.57436 22.5 6.75V16.75C22.5 19.9256 19.9256 22.5 16.75 22.5H6.75C3.57436 22.5 1 19.9256 1 16.75V6.75ZM13.4135 6.83037C13.8427 6.40053 14.5389 6.40026 14.9684 6.82978L16.6777 8.5391C17.1035 8.96495 17.108 9.65435 16.6876 10.0856L15.5468 11.2561L12.2682 7.97746L13.4135 6.83037ZM11.6854 8.56118L14.971 11.8469L10.8753 16.0491C10.5649 16.3675 10.1392 16.5471 9.69471 16.5471L7.82455 16.547C7.35556 16.547 6.98102 16.156 7.00074 15.6871L7.08062 13.7882C7.09799 13.3751 7.26969 12.9835 7.56174 12.691L11.6854 8.56118Z",
                        'fill-rule': "evenodd", 
                        'clip-rule': "evenodd",
                    }
                }
            ],
            classname: this.props.classname,
            fill: this.props.fill,
        }
    }
}