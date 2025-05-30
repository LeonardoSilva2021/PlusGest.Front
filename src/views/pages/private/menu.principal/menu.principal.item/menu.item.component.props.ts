import { WritableSignal } from "@angular/core";
import { MenuPrincipalModel } from "../../../../../models/app/menu.principal/menu.principal.model";
import { EnumMenuPrincipal } from "../../../../../models/enuns/app/menu.principal/enum.menu.principal";

export interface MenuItemComponentProps {
    model: MenuPrincipalModel;
    sigTipo: WritableSignal<EnumMenuPrincipal>;
}