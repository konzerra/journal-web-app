import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

import { SaveCategoryComponent } from './save-category/save-category.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";
import { UpdateCategoryComponent } from './update-category/update-category.component';
import {AdminCategoryService} from "./admin.category.service";



@NgModule({
  declarations: [
    ManageCategoryComponent,
    SaveCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    CoreModule,
    FormsModule
  ],
  providers: [
    AdminCategoryService
  ]
})
export class CategoryModule { }
