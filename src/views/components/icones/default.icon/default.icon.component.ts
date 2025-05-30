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
    teste: string = '';

    constructor(private sanitizer: DomSanitizer) { }

    private _props!: DefaultIconComponentProps;

    @Input() set props(value: DefaultIconComponentProps) {
        this._props = value;
        this.teste = this._props.fill;
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(value.content);
    }

    get props(): DefaultIconComponentProps {
        return this._props;
    }
    
}