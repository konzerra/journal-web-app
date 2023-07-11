import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ReviewerManageArticlesComponent} from "./reviewer-manage-articles/reviewer-manage-articles.component";
import {ReviewerUpdateArticlesComponent} from "./reviewer-update-articles/reviewer-update-articles.component";

const routes: Routes = [
  { path: '', redirectTo: '/articles/manage', pathMatch: 'full' },
  { path: 'articles/manage', component: ReviewerManageArticlesComponent },
  { path: 'articles/update', component: ReviewerUpdateArticlesComponent },
  { path: '**', redirectTo: '/articles/manage', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerPortalRoutingModule { }
