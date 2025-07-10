import { AfterViewInit, Component, EventEmitter, Input, Output, signal, ViewChild } from "@angular/core";
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
        ButtonComponent,
    ],
    templateUrl: './form.adicionar.cliente.component.html',
    styleUrl: './form.adicionar.cliente.component.styles.css',
})

export class FormAdicionarClienteComponent implements AfterViewInit {
    @Input() handleSubmit!: (model: ClienteModel) => void;
    @Output() formReady = new EventEmitter<FormAdicionarClienteComponent>();

    private files = signal<File[]>([]);
    private avatarSignal = signal<string | undefined>(undefined);

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
        const model: ClienteModel = this.form.getRawValue();
        this.handleSubmit(model);
    }

    onFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
            this.files.set([file]);

            const reader = new FileReader();
            reader.onload = () => {
                this.avatarSignal.set(reader.result as string);
                const fotoControl = this.form.get('foto');
                fotoControl?.setValue(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    triggerInput() {
        const input = document.getElementById('realFileInput') as HTMLInputElement;
        if (input)
            input.click();
    }

    clearAvatar() {
        this.avatarSignal.set(undefined);
        this.files.set([]);
        this.form.get('foto')?.reset();

        const input = document.getElementById('realFileInput') as HTMLInputElement;
        if (input)
            input.value = '';
    }

    onClearAvatar = () => this.clearAvatar();

    avatar() {
        return this.avatarSignal();
    }
}