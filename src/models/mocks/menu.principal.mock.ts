import { MenuPrincipalModel } from "../app/menu.principal/menu.principal.model";
import { EnumCategoriaMenuPrincipal } from "../enuns/app/menu.principal/enum.categoria.menu.principal";
import { EnumMenuPrincipal } from "../enuns/app/menu.principal/enum.menu.principal";

export const MenuPrincipalMock: Map<string, MenuPrincipalModel> = new Map([
    //RECEPÇÃO
    [
        'Recepção', 
        new MenuPrincipalModel (
            'Clientes', 
            '/cliente', 
            EnumCategoriaMenuPrincipal.RECEPCAO, 
            EnumMenuPrincipal.CLIENTE
        ),
    ],

    //
    // [
    //     EnumMenuPrincipal.PERFIL,  
    //     new MenuPrincipalModel('Perfil', '/perfil', EnumMenuPrincipal.PERFIL)
    // ],
    // [
    //     EnumMenuPrincipal.SAIR, 
    //     new MenuPrincipalModel('Sair', '/sair', EnumMenuPrincipal.SAIR)
    // ]
])