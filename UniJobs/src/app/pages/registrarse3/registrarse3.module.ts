import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrarse3PageRoutingModule } from './registrarse3-routing.module';

import { Registrarse3Page } from './registrarse3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrarse3PageRoutingModule
  ],
  declarations: [Registrarse3Page]
})
export class Registrarse3PageModule {}
