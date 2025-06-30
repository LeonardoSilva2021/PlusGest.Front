import { Directive, ElementRef, Input } from "@angular/core"

@Directive()
export abstract class FormDefaultProps<T> {
    @Input() submitForm!: ElementRef<HTMLButtonElement>;
    @Input() handleSubmit!: (model: T) => void;
}