import { AfterViewInit, Component, EventEmitter, Input, Output } from "@angular/core";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClienteFormModel } from "../../../../models/app/forms/cliente/cliente.form.model";
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext'
import { GridComponent } from "../../controles/grid/grid.component";
import { InputComponent } from "../../controles/input/input.compoment";
import { AvatarModule } from "primeng/avatar";
import { ButtonComponent } from "../../controles/button/button.component";

@Component({
    selector: 'form-adicionar-cliente-component',
    imports: [
        ReactiveFormsModule,
        FormsModule,
        IftaLabelModule,
        InputTextModule,
        GridComponent,
        InputComponent,
        AvatarModule,
        ButtonComponent
    ],
    templateUrl: './form.adicionar.cliente.component.html',
    styleUrl: './form.adicionar.cliente.component.styles.css',
})

export class FormAdicionarClienteComponent implements AfterViewInit {
    @Input() handleSubmit!: (model: ClienteModel) => void;
    @Output() formReady = new EventEmitter<FormAdicionarClienteComponent>();

    form!: FormGroup<ClienteFormModel>;

    constructor() {
        const clienteForm = new ClienteFormModel();
        this.form = new FormGroup(clienteForm);
    }

    ngAfterViewInit(): void {
        this.formReady.emit(this);
    }

    formSubmit() {
        this.onSubmit();
    }

    onSubmit() {
        if (this.form.valid) {
            const model: ClienteModel = this.form.getRawValue();
            this.handleSubmit(model);
        }
    }

    onClickSalvar(fileInput: HTMLInputElement): void {
        fileInput.click(); // ou sua lógica
    }
}