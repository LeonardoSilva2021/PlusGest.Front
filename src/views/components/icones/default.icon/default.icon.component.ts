import { Component, Input } from "@angular/core";
import { DefaultIconComponentProps } from "./default.icon.component.props";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    standalone: true,
    selector: 'default-icon-component',
    templateUrl: './default.icon.component.html',
    styleUrl: './default.icon.component.styles.css'
})

export class DefaultIconComponent {
    safeSvg: SafeHtml = '';

    constructor(private sanitizer: DomSanitizer) { }

    private _props!: DefaultIconComponentProps;

    @Input() set props(value: DefaultIconComponentProps) {
        console.log(this._props)
        this._props = value;
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(value.content);
    }

    get props(): DefaultIconComponentProps {
        return this._props;
    }
    
}