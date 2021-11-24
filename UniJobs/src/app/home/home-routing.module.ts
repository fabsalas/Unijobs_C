import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    /*se crearan subrutas llamadas children para que me muestre los
    diferentes components de mi menu segment
    children:[
      {
        path:'publicaciones',
        component: MipublicacionComponent
      },
      {
        path:'postulaciones',
        component:PostulacionesComponent
      },
      {
        path:'perfil',
        component:MiPerfilComponent
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}