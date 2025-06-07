import { Component, Input } from "@angular/core";
import { AccordionModule } from 'primeng/accordion';
import { AccordionComponentProps } from "./accordion.component.props";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'accordion-component',
    imports: [AccordionModule, NgTemplateOutlet],
    templateUrl: 'accordion.component.html',
    styleUrl: 'accordion.component.styles.css',
})

export class AccordionComponent {
    @Input() props!: AccordionComponentProps;
}