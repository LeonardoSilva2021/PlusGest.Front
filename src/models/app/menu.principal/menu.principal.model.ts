import { EnumMenuPrincipal } from "../../enuns/app/menu.principal/enum.menu.principal";

export class MenuPrincipalModel {
    constructor (
        public titulo: string = '',
        public path: string = '',
        public tipo: EnumMenuPrincipal = EnumMenuPrincipal.CLIENTE,
    ) {}
}