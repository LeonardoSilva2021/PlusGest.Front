import { Component, Input } from "@angular/core";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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

export class FormAdicionarClienteComponent extends FormDefaultProps<ClienteModel> {
   @Input({ required: false }) props!: FormDefaultProps<ClienteModel>;
}