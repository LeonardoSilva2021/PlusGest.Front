import { Component, Input } from "@angular/core";
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputComponentProps } from "./input.component.props";
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'input-component',
    imports: [
        FloatLabelModule,
        InputTextModule,
        InputMaskModule,
        ReactiveFormsModule,
        FormsModule,
        InputNumberModule,
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.styles.css',
    viewProviders: [
        { provide: ControlContainer, useExisting: FormGroupDirective }
    ]
})

export class InputComponent {
    @Input() props!: InputComponentProps;

    swictchMaks () {
        switch (this.props.mask) {
            case 'rg':
                return '99.999.999-9'
            case 'cpf': 
                return '999.999.999-99'
            case 'dataNascimento':
                return '99/99/9999'
            case 'celular':
                return '(99) 99999-9999'
            case 'cep': 
                return '99999-999'
            default:
                return undefined
        }
    }
}