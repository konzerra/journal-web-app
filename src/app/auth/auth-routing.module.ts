import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: '**', redirectTo: '/', pathMatch: 'prefix' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
