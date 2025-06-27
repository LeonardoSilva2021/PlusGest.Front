import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from "@angular/core";
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

export class DrawerAdicionarClienteComponent implements AfterViewInit {
  @Input() props!: DrawerAdicionarClienteComponentProps;

  // Use uma propriedade privada para armazenar a referência
  private _formRef!: FormDefaultProps<ClienteModel>;

  // O setter é chamado quando o ViewChild é resolvido ou muda
  @ViewChild('formRef', { static: false })
  set setFormRef(value: FormDefaultProps<ClienteModel>) {
    if (value) {
      this._formRef = value;
      console.log('formRef disponível via setter:', this._formRef);
      // Faça qualquer inicialização ou chamada de método aqui
      // Ex: this._formRef.resetForm();
    } else {
      console.log('formRef no setter é null/undefined (drawer fechado ou conteúdo removido).');
    }
  }

  // Crie um getter para acessar a referência em outros métodos
  get formRef(): FormDefaultProps<ClienteModel> {
    return this._formRef;
  }

  formProps: any = {
    // suas propriedades para o form-default
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit:', this.formRef); // Ainda pode ser undefined aqui
  }

  onDrawerShow() {
    // Com o setter, você nem precisa de lógica específica aqui para verificar formRef.
    // O setter já lidou com isso quando a gaveta abriu e o form foi renderizado.
    console.log('onDrawerShow executado. O setter de formRef já deve ter sido chamado.');
    // Você pode forçar um detectChanges aqui se precisar que *outras* partes da view reajam
    // imediatamente à disponibilidade do formRef, mas o próprio formRef já estará atribuído.
    // this.cdr.detectChanges();
  }

  onClickSalvar() {
    if (this.formRef) { // Agora this.formRef refere-se à propriedade privada _formRef
      console.log('Salvando... Acessando formRef:', this.formRef);
      // this.formRef.submit();
    } else {
      console.log('Erro: formRef não está disponível para salvar (o drawer está fechado?).');
    }
  }
}