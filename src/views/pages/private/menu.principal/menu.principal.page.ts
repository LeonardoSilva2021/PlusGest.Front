import { Component, signal } from "@angular/core";
import { MenuPrincipalItemComponent } from "./menu.principal.item/menu.item.component";
import { MenuPrincipalMock } from "../../../../models/mocks/menu.principal.mock";
import { MenuPrincipalModel } from "../../../../models/app/menu.principal/menu.principal.model";
import { CommonModule } from "@angular/common";
import { EnumMenuPrincipal } from "../../../../models/enuns/app/menu.principal/enum.menu.principal";

@Component({
    selector: 'menu-principal',
    imports: [MenuPrincipalItemComponent, CommonModule],
    templateUrl: './menu.principal.page.html',
    styleUrl: './menu.principal.page.css'
})


export class MenuPrincipalPage {
    readonly enumMenu = signal<EnumMenuPrincipal>(EnumMenuPrincipal.CLIENTE);
    menuMap = MenuPrincipalMock;
    
    get menuItems(): MenuPrincipalModel[] {
        return Array.from(this.menuMap.values()).filter(item => item.tipo !== EnumMenuPrincipal.SAIR);
    }

    get menuItemSair(): MenuPrincipalModel[] {
        return Array.from(this.menuMap.values()).filter(item => item.tipo === EnumMenuPrincipal.SAIR);
    }
}