import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCategoryComponent} from "./manage-category/manage-category.component";
import {UpdateCategoryComponent} from "./update-category/update-category.component";
import {SaveCategoryComponent} from "./save-category/save-category.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ManageCategoryComponent },
  { path: 'save', component: SaveCategoryComponent },
  { path: 'update', component: UpdateCategoryComponent },
  { path: '**', redirectTo: 'manage', pathMatch: 'prefix' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
