import { EnumCategoriaMenuPrincipal } from "../../enuns/app/menu.principal/enum.categoria.menu.principal";
import { EnumMenuPrincipal } from "../../enuns/app/menu.principal/enum.menu.principal";

export class MenuPrincipalModel {
    constructor (
        public titulo: string = '',
        public path: string = '',
        public categoria: EnumCategoriaMenuPrincipal = EnumCategoriaMenuPrincipal.RECEPCAO,
        public tipo: EnumMenuPrincipal = EnumMenuPrincipal.CLIENTE,
    ) {}
}