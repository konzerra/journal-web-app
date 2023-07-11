import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManageTipComponent} from "./manage-tip/manage-tip.component";
import {SaveTipComponent} from "./save-tip/save-tip.component";
import {UpdateTipComponent} from "./update-tip/update-tip.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageTipComponent },
  { path: 'save', component: SaveTipComponent },
  { path: 'update', component: UpdateTipComponent },
  { path: '**', redirectTo: 'manage', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipRoutingModule { }
