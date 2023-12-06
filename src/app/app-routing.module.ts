import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercise1',
    loadChildren: () => import('./exercise1/exercise1.module').then( m => m.Exercise1PageModule)
  },
  {
    path: 'exercise2',
    loadChildren: () => import('./exercise2/exercise2.module').then( m => m.Exercise2PageModule)
  },
  {
    path: 'exercise3',
    loadChildren: () => import('./exercise3/exercise3.module').then( m => m.Exercise3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
