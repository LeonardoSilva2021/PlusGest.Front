import { MenuPrincipalCategoriaModel } from "../app/menu.principal/menu.principal,categoria";
import { EnumCategoriaMenuPrincipal } from "../enuns/app/menu.principal/enum.categoria.menu.principal";

export const MenuCategoriaMock: Map<string, MenuPrincipalCategoriaModel> = new Map(
    [
        [
            'Recepção',
            new MenuPrincipalCategoriaModel('Recepção', EnumCategoriaMenuPrincipal.RECEPCAO),
        ],
        [
            'Comercial',
            new MenuPrincipalCategoriaModel('Comercial', EnumCategoriaMenuPrincipal.COMERCIAL),
        ],
    ]
)