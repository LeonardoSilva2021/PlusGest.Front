import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../../components/controles/button/button.component';
import { CommonModule } from '@angular/common';
import { ButtonComponentProps } from '../../../../components/controles/button/button.component.props';
import { MenuItemComponentProps } from './menu.item.component.props';
import { PersonTextIconComponent } from '../../../../components/icones/person.text.icon/person.text.icon.component';
import { ExitIconComponent } from '../../../../components/icones/exit.icon/exit.icon.component';
import { DashboardIconComponent } from '../../../../components/icones/dashboard.icon/dashboard.icon.component';
import { MenuPrincipalEnum } from '../../../../../models/enuns/app/menu.principal/menu.principal.enum';
import { DocumentIconComponent } from '../../../../components/icones/document.icon/document.icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item-component',
  imports: [
    ButtonComponent,
    CommonModule,
    PersonTextIconComponent,
    ExitIconComponent,
    DashboardIconComponent,
    DocumentIconComponent,
  ],
  templateUrl: './menu.item.component.html',
  styleUrl: './menu.item.component.styles.css',
})
export class MenuPrincipalItemComponent {
  enumMenu = MenuPrincipalEnum;

  @Input() props!: MenuItemComponentProps;

  private router = inject(Router);

  // PROPS DO BOTÃO
  handleClick = (): void => {
    this.props.sigTipo.set(this.props.model.tipo);
    this.router.navigateByUrl(this.props.model.rota, {
      replaceUrl: true,
    });
  };

  // SWITCH DA COR DOS ICONES
  switchIconsColors() {
    switch (this.props.model.tipo) {
      // DASHBOARD
      case MenuPrincipalEnum.DASHBOARD:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';

      // RECEPÇÃO
      case MenuPrincipalEnum.CLIENTE:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
      case MenuPrincipalEnum.DOCUMENTOS:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';

      // COMERCIAL
      case MenuPrincipalEnum.SIMULADOR:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
      case MenuPrincipalEnum.CONTRATOS:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';

      // SAIR
      case MenuPrincipalEnum.SAIR:
        return this.props.sigTipo() === this.props.model.tipo ? '#FFF' : '#000';
    }
  }
}
