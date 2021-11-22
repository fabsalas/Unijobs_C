import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { AgregarEmpleoPageRoutingModule } from '../pages/agregar-empleo/agregar-empleo-routing.module';
import { MipublicacionComponent } from './mipublicacion/mipublicacion.component';
import { ModificarPageRoutingModule } from '../pages/modificar/modificar-routing.module';

@NgModule({
<<<<<<< Updated upstream
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,MipublicacionComponent],
=======
<<<<<<< Updated upstream
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent,MipublicacionComponent],
=======
<<<<<<< Updated upstream
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent,MipublicacionComponent],
=======
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,MipublicacionComponent],
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    AgregarEmpleoPageRoutingModule,
    ModificarPageRoutingModule
  ],
  exports:[
    MenuComponent,PostulacionesComponent,MiPerfilComponent,MipublicacionComponent
  ]
})

export class ComponentsModule { }

