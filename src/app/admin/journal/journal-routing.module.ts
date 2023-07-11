import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageJournalComponent} from "./manage-journal/manage-journal.component";
import {SaveJournalComponent} from "./save-journal/save-journal.component";
import {UpdateJournalComponent} from "./update-journal/update-journal.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageJournalComponent },
  { path: 'save', component: SaveJournalComponent },
  { path: 'update', component: UpdateJournalComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
