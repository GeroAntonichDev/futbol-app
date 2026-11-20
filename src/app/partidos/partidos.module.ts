import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { PartidosPageRoutingModule } from './partidos-routing.module';
import { PartidosPage } from './partidos.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PartidosPageRoutingModule],
  declarations: [PartidosPage]
})
export class PartidosPageModule {}
