import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { GoleadoresPageRoutingModule } from './goleadores-routing.module';
import { GoleadoresPage } from './goleadores.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, GoleadoresPageRoutingModule],
  declarations: [GoleadoresPage]
})
export class GoleadoresPageModule {}
