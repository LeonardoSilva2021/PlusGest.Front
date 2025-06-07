import { UsuarioDepartamentoEnum } from "../../enuns/api/usuario/usuario.departamento.enum";
import { MenuPrincipalEnum } from "../../enuns/app/menu.principal/menu.principal.enum";

export class MenuPrincipalModel {
    constructor (
        public titulo: string = '',
        public rota: string = '',
        public tipo: MenuPrincipalEnum = MenuPrincipalEnum.CLIENTE,
        public departamento: UsuarioDepartamentoEnum = UsuarioDepartamentoEnum.RECEPCAO,
    ) {}
}