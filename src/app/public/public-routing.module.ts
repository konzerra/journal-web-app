import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {HandbookComponent} from "./handbook/handbook.component";
import {HomeComponent} from "./home/home.component";
import {JournalsComponent} from "./journals/journals.component";
import {MarkdownComponent} from "./markdown/markdown.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'handbook', component: HandbookComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'journals', component: JournalsComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
