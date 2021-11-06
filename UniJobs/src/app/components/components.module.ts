import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [CabeceraComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CabeceraComponent,MenuComponent
  ]
})
export class ComponentsModule { }
