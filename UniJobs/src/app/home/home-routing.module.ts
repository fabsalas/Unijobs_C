import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleosComponent } from '../components/empleos/empleos.component';
import { MiPerfilComponent } from '../components/mi-perfil/mi-perfil.component';
import { PostulacionesComponent } from '../components/postulaciones/postulaciones.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    /*se crearan subrutas llamadas children para que me muestre los
    diferentes components de mi menu segment*/ 
    children:[{
      /** cada childre tiene 2 propiedades path y nombre del componente*/
        path:'empleos',
        component: EmpleosComponent
      },
      {
        path:'postulaciones',
        component:PostulacionesComponent
      },
      {
        path:'perfil',
        component:MiPerfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
