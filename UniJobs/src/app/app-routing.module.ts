import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'registrarse2',
    loadChildren: () => import('./pages/registrarse2/registrarse2.module').then( m => m.Registrarse2PageModule)
  },
  {
    path: 'registrarse3',
    loadChildren: () => import('./pages/registrarse3/registrarse3.module').then( m => m.Registrarse3PageModule)
  },
  {
    path: 'registrarse4',
    loadChildren: () => import('./pages/registrarse4/registrarse4.module').then( m => m.Registrarse4PageModule)
  },
  {
    /**ESTOS ** HACEN QUE SE REDIRIJA AUTOMATICAMENTE A ESTA PAGE */
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
