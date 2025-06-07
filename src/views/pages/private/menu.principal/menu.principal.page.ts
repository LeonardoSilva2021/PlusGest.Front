import { Component, signal } from "@angular/core";
import { MenuPrincipalMock } from "../../../../models/mocks/menu.principal.mock";
import { MenuPrincipalModel } from "../../../../models/app/menu.principal/menu.principal.model";
import { CommonModule } from "@angular/common";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from "../../../components/controles/card/card.component";
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenuPrincipalItemComponent } from "./menu.principal.item/menu.item.component";
import { TypographyComponent } from "../../../components/controles/typography/typography.component";
import { MenuPrincipalEnum } from "../../../../models/enuns/app/menu.principal/menu.principal.enum";
import { UsuarioModel } from "../../../../models/api/usuario/usuario.model";
import { UsuarioDepartamentoEnum } from "../../../../models/enuns/api/usuario/usuario.departamento.enum";

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
        TypographyComponent,
    ],
    templateUrl: './menu.principal.page.html',
    styleUrl: './menu.principal.page.css'
})

export class MenuPrincipalPage {

    // SIGNAL ITEM MENU ATIVO
    readonly enumMenu = signal<MenuPrincipalEnum>(MenuPrincipalEnum.DASHBOARD);

    // MOCK MENU
    menuMap = MenuPrincipalMock;

    // MOCK USUARIO
    usuario = new UsuarioModel(
        '0',
        'Leonardo',
        UsuarioDepartamentoEnum.RECEPCAO,
        '',
    );

    // SWITCH NOMES DEPARTAMENTOS
    switchDepartamentoNome() {
        switch (this.usuario.departamento) {
            case UsuarioDepartamentoEnum.AUDITORIA:
                return "Auditoria";
            case UsuarioDepartamentoEnum.COMERCIAL:
                return "Comercial";
            case UsuarioDepartamentoEnum.FINANCEIRO: 
                return "Financeiro";
            case UsuarioDepartamentoEnum.NEGOCIACOES:
                return "Negociações";
            case UsuarioDepartamentoEnum.RECEPCAO:
                return "Recepção";
            case UsuarioDepartamentoEnum.RH: 
                return "RH";
            case UsuarioDepartamentoEnum.SUPORTE:
                return "Suporte";
            default:
                return "";
        }
    }

    // ARRAY ITEM DASHBOARD
    get menuItemDashboard(): MenuPrincipalModel[] {
        return Array
            .from(this.menuMap.values())
            .filter(
                x => x.tipo === MenuPrincipalEnum.DASHBOARD
            );
    }

    // ARRAY ITEMS SEM O SAIR E O DASHBORAD E VALIADNADO PELO DEPARTAMENTO
    get menuItems(): MenuPrincipalModel[] {
        return Array
            .from(this.menuMap.values())
            .filter(
                x => x.tipo !== MenuPrincipalEnum.SAIR && 
                x.tipo !== MenuPrincipalEnum.DASHBOARD &&
                x.departamento === this.usuario.departamento
            );
    }

    // ARRAY ITEM SÓ COM SAIR
    get menuItemSair(): MenuPrincipalModel[] {
        return Array
            .from(this.menuMap.values())
            .filter(
                x => x.tipo === MenuPrincipalEnum.SAIR
            );
    }
}