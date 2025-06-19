import { Component } from "@angular/core";
import { HeaderPageComponent } from "../header.page/header.page.component";
import { CardClienteComponent } from "../../../components/cards/card.cliente.component/card.cliente.component";
import { PaginatorModule } from "primeng/paginator";
import { ClienteModel } from "../../../../models/api/cliente/cliente.model";
import { ButtonComponent } from "../../../components/controles/button/button.component";
import { AddUserIconComponent } from "../../../components/icones/add.user.icon/add.user.icon.component";

@Component({
    selector: 'cliente-page',
    templateUrl: './cliente.page.html',
    styleUrl: './cliente.page.css',
    imports: [
        HeaderPageComponent, 
        CardClienteComponent, 
        PaginatorModule, 
        ButtonComponent, 
        AddUserIconComponent
    ],
})

export class ClientePage {
    clientes: Array<ClienteModel> = [
        new ClienteModel(
            '1',
            'Sebastiana Rosângela da Cruz',
            334627722,
            99889399300,
            '06052025',
            8738668631,
            'sebastiana-dacruz78@vipsaude.com.br',
            56600976,
            'Rua Severino Rodrigues, s/n',
            'Vila Ferro Velho',
            'PE',
            'Entrou as 15 horas',
            'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
        ),
        new ClienteModel(
            '2',
            'Enzo Heitor André Nascimento',
            311952409,
            67733674336,
            '05041984',
            83991335927,
            'enzoheitornascimento@enable.com.br',
            58434637,
            'Rua Walmir Araújo Costa',
            'Serrotão',
            'PB',
            'Entrou as 10 horas',
            'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        ),
    ];

    get arrayClientes(): ClienteModel[] {
        return this.clientes;
    }

    handleClick() {
        
    }
}