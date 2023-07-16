import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdatePriceComponent} from "./update-price/update-price.component";
import {SavePriceComponent} from "./save-price/save-price.component";
import {ManagePriceComponent} from "./manage-price/manage-price.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManagePriceComponent },
  { path: 'save', component: SavePriceComponent },
  { path: 'update', component: UpdatePriceComponent },
  { path: '**', redirectTo: 'manage', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
