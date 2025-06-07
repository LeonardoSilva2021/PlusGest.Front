import { MenuPrincipalModel } from "../app/menu.principal/menu.principal.model";
import { UsuarioDepartamentoEnum } from "../enuns/api/usuario/usuario.departamento.enum";
import { MenuPrincipalEnum } from "../enuns/app/menu.principal/menu.principal.enum";

export const MenuPrincipalMock: Map<string, MenuPrincipalModel> = new Map([

    //DASHBOARD
    [
        'Dashboard',
        new MenuPrincipalModel(
            'Dashboard',
            '/dashboard',
            MenuPrincipalEnum.DASHBOARD,
            UsuarioDepartamentoEnum.SEM_DEPARTAMENTO,
        )
    ],

    //RECEPÇÃO
    [
        'Cliente',
        new MenuPrincipalModel(
            'Clientes',
            '/clientes',
            MenuPrincipalEnum.CLIENTE,
            UsuarioDepartamentoEnum.RECEPCAO,
        ),
    ],
    [
        'Documentos',
        new MenuPrincipalModel(
            'Documentos',
            '/documentos',
            MenuPrincipalEnum.DOCUMENTOS,
            UsuarioDepartamentoEnum.RECEPCAO,
        ),
    ],

    //COMERCIAL
    [
        'Simulador',
        new MenuPrincipalModel(
            'Simulador',
            '/simulador',
            MenuPrincipalEnum.SIMULADOR,
            UsuarioDepartamentoEnum.COMERCIAL,
        )
    ],

    //SAIR
    [
        'Sair', 
        new MenuPrincipalModel(
            'Sair', 
            '/sair', 
            MenuPrincipalEnum.SAIR,
            UsuarioDepartamentoEnum.SEM_DEPARTAMENTO
        )
    ]
])