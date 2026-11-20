import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'partidos',
        loadChildren: () => import('../partidos/partidos.module').then(m => m.PartidosPageModule)
      },
      {
        path: 'posiciones',
        loadChildren: () => import('../posiciones/posiciones.module').then(m => m.PosicionesPageModule)
      },
      {
        path: 'goleadores',
        loadChildren: () => import('../goleadores/goleadores.module').then(m => m.GoleadoresPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/partidos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/partidos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
