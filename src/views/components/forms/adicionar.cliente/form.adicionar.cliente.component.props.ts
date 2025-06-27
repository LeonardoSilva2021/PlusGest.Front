import { ClienteModel } from "../../../../models/api/cliente/cliente.model";

export interface FormAdicionarClienteComponentProps {
    handleSubmit: (model: ClienteModel) => void;
}