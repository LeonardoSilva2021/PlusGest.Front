import { ClienteModel } from "../../models/api/cliente/cliente.model"
import { StorageEnum } from "../../models/enuns/app/storage/storage.enum";
import { useStorage } from "./storage"

export const useClienteService = () => {

    const { setStorage } = useStorage();

    const adicionarCliente = async (model: ClienteModel) => {

        const arrayClientes: ClienteModel[] = [];

        arrayClientes.push(model);

        await setStorage(StorageEnum.clientes, arrayClientes);
        return;
    }

    const editarCliente = async (id: string, model: ClienteModel) => {

    }

    const deletarCliente = async (id: string) => {

    }

    return {
        adicionarCliente,
        editarCliente,
        deletarCliente,
    }
}