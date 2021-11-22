import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Router } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  noticias: any = [
    { titulo: "Titulo de la Noticia", texto: "Texto de la noticia que quiero que salga en el cuerpo del item" }
  ]
  constructor(private router: Router) { }

  getItem($event) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);
  }

  agregar() {

  }

  editar(item) {
    console.log('Editaremos');

  }

  eliminar(item) {
    console.log('Eliminaremos');
  }

  

}