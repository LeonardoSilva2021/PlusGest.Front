import { Component, Input } from "@angular/core";
import { DrawerAdicionarClienteComponentProps } from "./drawer.adicionar.cliente.component.props";
import { DrawerComponent } from "../../controles/drawer/drawer.component";
import { ButtonComponent } from "../../controles/button/button.component";
import { GridComponent } from "../../controles/grid/grid.component";
import { FormAdicionarClienteComponent } from "../../forms/adicionar.cliente/form.adicionar.cliente.component";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { useClienteService } from "../../../../services/app/cliente.service";

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

  handleSubmit = async (model: ClienteModel) => {
    const { adicionarCliente } = useClienteService();

    await adicionarCliente(model);
    return;
  };

  setFormRef(ref: FormAdicionarClienteComponent) {
    this.formRef = ref;
  }

  onClickSalvar = () => {
    if (!this.formRef) {
      console.warn('❗ formRef ainda não disponível no pai');
      return;
    }

    this.formRef.formSubmit();
  }
}