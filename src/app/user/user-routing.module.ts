import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {PublishComponent} from "./publish/publish.component";
import {TransactionsComponent} from "./transactions/transactions.component";

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'transactions', component: TransactionsComponent},
  { path: '**', redirectTo: 'transactions', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
