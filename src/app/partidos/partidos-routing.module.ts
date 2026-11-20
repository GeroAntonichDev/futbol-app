import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosPage } from './partidos.page';

const routes: Routes = [
  {
    path: '',
    component: PartidosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosPageRoutingModule {}
