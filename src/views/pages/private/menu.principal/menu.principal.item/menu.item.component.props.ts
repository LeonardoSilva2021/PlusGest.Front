import { WritableSignal } from "@angular/core";
import { MenuPrincipalModel } from "../../../../../models/app/menu.principal/menu.principal.model";
import { MenuPrincipalEnum } from "../../../../../models/enuns/app/menu.principal/menu.principal.enum";

export interface MenuItemComponentProps {
    model: MenuPrincipalModel;
    sigTipo: WritableSignal<MenuPrincipalEnum>;
}