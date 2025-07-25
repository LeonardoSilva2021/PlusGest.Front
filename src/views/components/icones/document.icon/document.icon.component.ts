import { Component, Input } from "@angular/core";
import { DocumentIconComponentProps } from "./document.icon.component.props";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { DefaultIconComponent } from "../default.icon/default.icon.component";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'document-icon-component',
    imports: [DefaultIconComponent],
    templateUrl: './document.icon.component.html',
})

export class DocumentIconComponent {
        @Input() props!: DocumentIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            elements: [
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M14.25 1.25634C14.1881 1.25213 14.1258 1.25 14.0633 1.25H8C5.37665 1.25 3.25 3.37665 3.25 6V18C3.25 20.6234 5.37665 22.75 8 22.75H16C18.6234 22.75 20.75 20.6234 20.75 18V8.75H17C15.4812 8.75 14.25 7.51878 14.25 6V1.25634ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H12C12.4142 17.75 12.75 17.4142 12.75 17C12.75 16.5858 12.4142 16.25 12 16.25H8Z"
                    },
                },
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M20.3215 7.25C20.2584 7.15059 20.1887 7.0549 20.1126 6.96359L16.1759 2.23949C16.048 2.08601 15.905 1.94837 15.75 1.82802V6C15.75 6.69036 16.3096 7.25 17 7.25H20.3215Z"
                    },
                }
            ],
            classname: this.props.classname,
            fill: this.props.fill,

        }
    }
}