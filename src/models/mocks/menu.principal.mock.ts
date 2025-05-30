import { MenuPrincipalModel } from "../app/menu.principal/menu.principal.model";
import { EnumMenuPrincipal } from "../enuns/app/menu.principal/enum.menu.principal";

export const MenuPrincipalMock: Map<EnumMenuPrincipal, MenuPrincipalModel> = new Map([
    [
        EnumMenuPrincipal.CLIENTE, 
        new MenuPrincipalModel('Clientes', '/cliente', EnumMenuPrincipal.CLIENTE)
    ],
    [
        EnumMenuPrincipal.PERFIL,  
        new MenuPrincipalModel('Perfil', '/perfil', EnumMenuPrincipal.PERFIL)
    ],
    [
        EnumMenuPrincipal.SAIR, 
        new MenuPrincipalModel('Sair', '/sair', EnumMenuPrincipal.SAIR)
    ]
])