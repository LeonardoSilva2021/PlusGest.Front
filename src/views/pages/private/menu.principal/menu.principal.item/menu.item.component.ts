import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../../../../components/controles/button/button.component";
import { CommonModule } from "@angular/common";
import { ButtonComponentProps } from "../../../../components/controles/button/button.component.props";
import { MenuItemComponentProps } from "./menu.item.component.props";
import { AddUserIconComponent } from "../../../../components/icones/add.user.icon/add.user.icon.component";
import { EnumMenuPrincipal } from "../../../../../models/enuns/app/menu.principal/enum.menu.principal";
import { AddUserIconComponentProps } from "../../../../components/icones/add.user.icon/add.user.icon.component.props";
import { PersonTextIconComponent } from "../../../../components/icones/person.text.icon/person.text.icon.component";
import { PersonTextIconComponentProps } from "../../../../components/icones/person.text.icon/person.text.icon.component.props";

@Component({
    selector: 'menu-item-component',
    imports: [
        ButtonComponent,
        AddUserIconComponent,
        CommonModule,
        PersonTextIconComponent
    ],
    templateUrl: './menu.item.component.html',
    styleUrl: './menu.item.component.styles.css',
})

export class MenuPrincipalItemComponent {

    enumMenu = EnumMenuPrincipal;

    @Input() props!: MenuItemComponentProps;

    handleClick = (): void => {
        this.props.sigTipo.set(this.props.model.tipo);
    }

    switchIconsColors() {
        switch (this.props.model.tipo) {
            case EnumMenuPrincipal.CLIENTE:
                return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
            case EnumMenuPrincipal.SIMULADOR:
                return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
            case EnumMenuPrincipal.CONTRATOS:
                return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
            case EnumMenuPrincipal.CONFIGURACOES:
                return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
            case EnumMenuPrincipal.SAIR:
                return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
        }
    }

    get botaoProps(): ButtonComponentProps {
        return {
            variant: this.props.sigTipo() === this.props.model.tipo ? 'primary' : 'default',
            onClick: () => this.handleClick(),
        };
    }

    get addUserIcon(): AddUserIconComponentProps {
        return {
            fill: this.switchIconsColors(),
        }
    }

    get personTextIcon(): PersonTextIconComponentProps {
        return {
            fill: this.switchIconsColors(),
        }
    }
}