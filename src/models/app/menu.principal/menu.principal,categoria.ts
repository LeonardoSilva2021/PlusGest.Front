import { EnumCategoriaMenuPrincipal } from "../../enuns/app/menu.principal/enum.categoria.menu.principal";

export class MenuPrincipalCategoriaModel {
    constructor (
        public nome: string = '',
        public tipo: EnumCategoriaMenuPrincipal,
    ) {}
}