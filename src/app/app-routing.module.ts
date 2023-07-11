import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./_auth/auth.guard";


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[AuthGuard], data:{role:'Admin'}
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'reviewer',
    loadChildren: () => import('./reviewer-portal/reviewer-portal.module').then(m => m.ReviewerPortalModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  { path: '**', redirectTo: '/', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
