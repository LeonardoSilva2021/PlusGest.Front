import { FormControl, Validators } from "@angular/forms";

export class ClienteFormModel {
    constructor(
        public id: FormControl<string> = new FormControl('', { nonNullable: true }),
        public nome: FormControl<string> = new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        public rg: FormControl<number> = new FormControl(0, { nonNullable: true }),
        public cpf: FormControl<number> = new FormControl(0, { nonNullable: true }),
        public dataNascimento: FormControl<string> = new FormControl('', { nonNullable: true }),
        public celular: FormControl<number> = new FormControl(0, { nonNullable: true }),
        public email: FormControl<string> = new FormControl('', { nonNullable: true }),
        public cep: FormControl<number> = new FormControl(0, { nonNullable: true }),
        public endereco: FormControl<string> = new FormControl('', { nonNullable: true }),
        public bairro: FormControl<string> = new FormControl('', { nonNullable: true }),
        public estado: FormControl<string> = new FormControl('', { nonNullable: true }),
        public observacao: FormControl<string> = new FormControl('', { nonNullable: true }),
        public foto: FormControl<string> = new FormControl('', { nonNullable: true })
    ) { }
}