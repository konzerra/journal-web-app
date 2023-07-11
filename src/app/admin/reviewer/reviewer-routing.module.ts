import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageReviewerComponent} from "./manage-reviewer/manage-reviewer.component";
import {SaveReviewerComponent} from "./save-reviewer/save-reviewer.component";
import {UpdateReviewerComponent} from "./update-reviewer/update-reviewer.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageReviewerComponent },
  { path: 'save', component: SaveReviewerComponent },
  { path: 'update', component: UpdateReviewerComponent },
  { path: '**', redirectTo: 'manage', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerRoutingModule { }
