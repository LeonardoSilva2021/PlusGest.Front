export class ClienteModel {
    constructor (
        public id: string = '',
        public nome: string = '',
        public rg: number = 0,
        public cpf: number = 0,
        public dataNascimento: string = '',
        public celular: number = 0,
        public email: string = '',
        public cep: number = 0,
        public endereco: string = '',
        public bairro: string = '',
        public estado: string = '',
        public observacao: string = '',
        public foto: string = '',
    ) {}
}