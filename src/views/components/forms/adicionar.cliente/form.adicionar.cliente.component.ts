import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormDefaultProps } from "../default/form.default.props";

@Component({
    selector: 'form-adicionar-cliente-component',
    imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
    templateUrl: './form.adicionar.cliente.component.html',
    styleUrl: './form.adicionar.cliente.component.styles.css',
})

export class FormAdicionarClienteComponent {
    @Input() handleSubmit!: (model: ClienteModel) => void;
    @Output() formReady = new EventEmitter<FormAdicionarClienteComponent>();

    ngAfterViewInit(): void {
        this.formReady.emit(this); // emite a própria instância
    }

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            nome: [''],
            email: [''],
        });
    }

    submit() {
        console.log('entrou')
        this.onSubmitInternal()
    }

    onSubmitInternal() {
        if (this.handleSubmit) {
            this.handleSubmit(this.form.value);
        }
    }
}