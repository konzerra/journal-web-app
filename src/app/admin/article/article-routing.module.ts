import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageArticleComponent} from "./manage-article/manage-article.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageArticleComponent },
  { path: 'update', component: UpdateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
