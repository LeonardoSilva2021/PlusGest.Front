import { Component, Input } from "@angular/core";
import { CardComponent } from "../../controles/card/card.component";
import { TypographyComponent } from "../../controles/typography/typography.component";
import { DividerModule } from "primeng/divider";
import { EditIconComponent } from "../../icones/edit.icon/edit.icon.component";
import { CardClienteComponentProps } from "./card.cliente.component.props";
import { AvatarModule } from "primeng/avatar";
import { formatCPF } from "../../../../services/utils/format.cpf";
import { formatRG } from "../../../../services/utils/format.rg";
import { formatTelefone } from "../../../../services/utils/format.telefone";
import { formatDataNascimento } from "../../../../services/utils/formart.data";

@Component({
    selector: 'card-cliente-component',
    imports: [CardComponent, TypographyComponent, DividerModule, EditIconComponent, AvatarModule],
    templateUrl: './card.cliente.component.html',
    styleUrl: './card.cliente.component.style.css',
})

export class CardClienteComponent {
    @Input() props!: CardClienteComponentProps;

    rgFormatado() {
        const res = formatRG(this.props.model.rg);
        return res;
    }

    cpfFormatado() {
        const res = formatCPF(this.props.model.cpf);
        return res;
    }

    dataNascimentoFormatado() {
        const res = formatDataNascimento(this.props.model.dataNascimento);
        return res;
    }

    celularFormatado() {
        const res = formatTelefone(this.props.model.celular);
        return res;
    }
}