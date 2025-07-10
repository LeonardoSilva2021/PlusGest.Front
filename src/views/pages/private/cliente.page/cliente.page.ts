import { Component, effect, signal } from "@angular/core";
import { HeaderPageComponent } from "../header.page/header.page.component";
import { CardClienteComponent } from "../../../components/cards/card.cliente.component/card.cliente.component";
import { PaginatorModule } from "primeng/paginator";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { ButtonComponent } from "../../../components/controles/button/button.component";
import { AddUserIconComponent } from "../../../components/icones/add.user.icon/add.user.icon.component";
import { DrawerAdicionarClienteComponentProps } from "../../../components/drawer/adicionar.cliente/drawer.adicionar.cliente.component.props";
import { DrawerAdicionarClienteComponent } from "../../../components/drawer/adicionar.cliente/drawer.adicionar.cliente.component";
import { useStorage } from "../../../../services/app/storage";
import { StorageEnum } from "../../../../models/enuns/app/storage/storage.enum";
import { useClienteService } from "../../../../services/app/cliente.service";

@Component({
    selector: 'cliente-page',
    templateUrl: './cliente.page.html',
    styleUrl: './cliente.page.css',
    imports: [
        HeaderPageComponent,
        CardClienteComponent,
        PaginatorModule,
        ButtonComponent,
        AddUserIconComponent,
        DrawerAdicionarClienteComponent
    ],
})

export class ClientePage {

    openDrawer = signal<boolean>(false);

    get arrayClientes(): ClienteModel[] {

        const { getStorage } = useStorage();

        const clientes = getStorage(StorageEnum.clientes) as ClienteModel[];

        if (clientes.length === 0)
            return [];

        return [];
    }

    handleClick = () => {
        this.openDrawer.set(!this.openDrawer());
    }

    closeDrawer = () => {
        this.openDrawer.set(!this.openDrawer());
    }

    get propsDrawer(): DrawerAdicionarClienteComponentProps {
        return {
            visible: this.openDrawer(),
            onClose: this.closeDrawer,
        }
    }
}