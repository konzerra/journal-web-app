import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageMarkdownComponent} from "./manage-markdown/manage-markdown.component";
import {SaveMarkdownComponent} from "./save-markdown/save-markdown.component";
import {UpdateMarkdownComponent} from "./update-markdown/update-markdown.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageMarkdownComponent },
  { path: 'save', component: SaveMarkdownComponent },
  { path: 'update', component: UpdateMarkdownComponent },
  { path: '**', redirectTo: 'manage', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkdownRoutingModule { }
