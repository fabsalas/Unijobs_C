import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrarse3Page } from './registrarse3.page';

const routes: Routes = [
  {
    path: '',
    component: Registrarse3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrarse3PageRoutingModule {}
