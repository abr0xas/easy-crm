import { Routes } from '@angular/router';
import { ClientListComponent } from './data/container/client-list/client-list.component';
import { ClientCreateComponent } from './data/container/client-create/client-create.component';

export const CLIENTS_ROUTES: Routes = [
  {
    path: '',
    component: ClientListComponent,
    // Puedes agregar children si tienes subrutas
  },
 {
    path: 'create',
    component: ClientCreateComponent,
    title: 'Nuevo Cliente'
  },
  {
    path: 'list',
    component: ClientListComponent,
    title: 'Lista de Clientes'
  },
 /*  {
    path: ':id',
    component: ClientDetailComponent,
    title: 'Detalle del Cliente'
  },
  {
    path: ':id/edit',
    component: ClientCreateComponent,
    title: 'Editar Cliente'
  }*/
];