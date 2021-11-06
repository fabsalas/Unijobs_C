import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registrarse4Page } from './registrarse4.page';

const routes: Routes = [
  {
    path: '',
    component: Registrarse4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registrarse4PageRoutingModule {}
