import { UsuarioDepartamentoEnum } from "../../enuns/api/usuario/usuario.departamento.enum";

export class UsuarioModel {
    constructor (
        public id: string = '',
        public nome: string = '',
        public departamento: UsuarioDepartamentoEnum = UsuarioDepartamentoEnum.SUPORTE,
        public fotoUrl: string = '',
    ) {}
}