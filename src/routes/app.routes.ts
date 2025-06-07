import { Routes } from '@angular/router';
import { ClientePage } from '../views/pages/private/cliente.page/cliente.page';

export const routes: Routes = [
  // DASHBOARD
  {
    path: 'dashboard',
    component: ClientePage,
  },

  // RECEPÇÃO
  {
    path: 'clientes',
    component: ClientePage,
  },
  {
    path: 'documentos',
    component: ClientePage,
  },

  //COMERCIAL
  {
    path: 'simulador',
    component: ClientePage,
  },

  //SAIR
  {
    path: 'sair',
    component: ClientePage,
  },
];
