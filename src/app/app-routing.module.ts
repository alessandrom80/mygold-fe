import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'deposito',
    loadChildren: () => import('./page/deposito/deposito.module').then( m => m.DepositoPageModule)
  },
  {
    path: 'lingotti',
    loadChildren: () => import('./page/lingotti/lingotti.module').then( m => m.LingottiPageModule)
  },
  {
    path: 'piano-oro',
    loadChildren: () => import('./page/piano-oro/piano-oro.module').then( m => m.PianoOroPageModule)
  },
  {
    path: 'movimentazioni',
    loadChildren: () => import('./page/movimentazioni/movimentazioni.module').then( m => m.MovimentazioniPageModule)
  },
  {
    path: 'website',
    loadChildren: () => import('./page/website/website.module').then( m => m.WebsitePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
