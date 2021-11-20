import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { EmpleosComponent } from './empleos/empleos.component';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { AgregarEmpleoPageRoutingModule } from '../pages/agregar-empleo/agregar-empleo-routing.module';
import { MipublicacionComponent } from './mipublicacion/mipublicacion.component';
import { ModificarPageRoutingModule } from '../pages/modificar/modificar-routing.module';

@NgModule({
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent,MipublicacionComponent],
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
    MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent,MipublicacionComponent
  ]
})

export class ComponentsModule { }

