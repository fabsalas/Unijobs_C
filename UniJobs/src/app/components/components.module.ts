import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
<<<<<<< Updated upstream
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
=======
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
>>>>>>> Stashed changes
import { EmpleosComponent } from './empleos/empleos.component';



@NgModule({
<<<<<<< Updated upstream
  declarations: [ MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent],
=======
  declarations: [CabeceraComponent, MenuComponent,EmpleosComponent],
>>>>>>> Stashed changes
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports:[
    MenuComponent,PostulacionesComponent,MiPerfilComponent,EmpleosComponent
  ]
})
export class ComponentsModule { }
