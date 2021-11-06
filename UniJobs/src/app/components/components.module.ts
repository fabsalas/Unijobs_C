import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { EmpleosComponent } from './empleos/empleos.component';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports:[
    MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent
  ]
})
export class ComponentsModule { }
