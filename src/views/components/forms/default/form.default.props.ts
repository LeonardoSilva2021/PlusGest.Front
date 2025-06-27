import { Directive, Input } from "@angular/core"

@Directive()
export abstract class FormDefaultProps<T> {

    @Input() onClick!: () => void;
    @Input() handleSubmit!: (model: T) => void;
}