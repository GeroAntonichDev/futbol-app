import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { PosicionesPageRoutingModule } from './posiciones-routing.module';
import { PosicionesPage } from './posiciones.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PosicionesPageRoutingModule],
  declarations: [PosicionesPage]
})
export class PosicionesPageModule {}
