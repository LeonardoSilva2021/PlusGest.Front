import { Component, signal } from "@angular/core";
import { MenuPrincipalMock } from "../../../../models/mocks/menu.principal.mock";
import { MenuPrincipalModel } from "../../../../models/app/menu.principal/menu.principal.model";
import { CommonModule } from "@angular/common";
import { EnumMenuPrincipal } from "../../../../models/enuns/app/menu.principal/enum.menu.principal";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from "../../../components/controles/card/card.component";
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenuCategoriaMock } from "../../../../models/mocks/menu.categoria.mock";
import { MenuPrincipalCategoriaModel } from "../../../../models/app/menu.principal/menu.principal,categoria";
import { MenuPrincipalItemComponent } from "./menu.principal.item/menu.item.component";
import { MenuItemComponentProps } from "./menu.principal.item/menu.item.component.props";


@Component({
    selector: 'menu-principal',
    imports: [
        CommonModule, 
        CardModule, 
        ButtonModule, 
        CardComponent, 
        AvatarModule,
        DividerModule,
        MenuPrincipalItemComponent,
    ],
    templateUrl: './menu.principal.page.html',
    styleUrl: './menu.principal.page.css'
})


export class MenuPrincipalPage {
    readonly enumMenu = signal<EnumMenuPrincipal>(EnumMenuPrincipal.CLIENTE);
    menuMap = MenuPrincipalMock;
    menuCategoriaMap = MenuCategoriaMock;

    get menuCategoria(): MenuPrincipalCategoriaModel[] {
        return Array.from(this.menuCategoriaMap.values());
    }

    get menuItems(): MenuPrincipalModel[] {
        return Array.from(this.menuMap.values());
    }

    get menuItemSair(): MenuPrincipalModel[] {
        return Array.from(this.menuMap.values()).filter(item => item.tipo === EnumMenuPrincipal.SAIR);
    }
}