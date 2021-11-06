import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrarse4PageRoutingModule } from './registrarse4-routing.module';

import { Registrarse4Page } from './registrarse4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrarse4PageRoutingModule
  ],
  declarations: [Registrarse4Page]
})
export class Registrarse4PageModule {}
