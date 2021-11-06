import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrarse2PageRoutingModule } from './registrarse2-routing.module';

import { Registrarse2Page } from './registrarse2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrarse2PageRoutingModule
  ],
  declarations: [Registrarse2Page]
})
export class Registrarse2PageModule {}
