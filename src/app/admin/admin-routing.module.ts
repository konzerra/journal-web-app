import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'journal', loadChildren: () => import('./journal/journal.module').then(m => m.JournalModule) },
  { path: 'markdown', loadChildren: () => import('./markdown/markdown.module').then(m => m.MarkdownModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }