import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { AdminCategoryService } from './admin-category.service';
import { SaveCategoryComponent } from './save-category/save-category.component';



@NgModule({
  declarations: [
    ManageCategoryComponent,
    SaveCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  providers: [
    AdminCategoryService
  ]
})
export class CategoryModule { }
