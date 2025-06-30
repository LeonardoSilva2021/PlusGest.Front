import { AfterViewInit, Component, Input, viewChild, ViewChild, ViewChildren, viewChildren } from "@angular/core";
import { DrawerAdicionarClienteComponentProps } from "./drawer.adicionar.cliente.component.props";
import { DrawerComponent } from "../../controles/drawer/drawer.component";
import { ButtonComponent } from "../../controles/button/button.component";
import { GridComponent } from "../../controles/grid/grid.component";
import { FormAdicionarClienteComponent } from "../../forms/adicionar.cliente/form.adicionar.cliente.component";
import { FormDefaultProps } from "../../forms/default/form.default.props";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";

@Component({
  selector: 'drawer-adicionar-cliente-component',
  imports: [
    DrawerComponent,
    ButtonComponent,
    GridComponent,
    FormAdicionarClienteComponent
  ],
  templateUrl: './drawer.adicionar.cliente.component.html',
  styleUrl: './drawer.adicionar.cliente.component.styles.css',
})

export class DrawerAdicionarClienteComponent {

  @Input() props!: DrawerAdicionarClienteComponentProps;

  formRef?: FormAdicionarClienteComponent;

  handleSubmit = (model: ClienteModel) => {
    console.log('SUBMIT NO PAI:', model);
    // Aqui entraria sua chamada de API
  };

  setFormRef(ref: FormAdicionarClienteComponent) {
    this.formRef = ref;
    console.log('✅ formRef recebido no pai:', ref);
  }

  onClickSalvar = () => {
    if (!this.formRef) {
      console.warn('❗ formRef ainda não disponível no pai');
      return;
    }

    this.formRef.submit();
  }
}