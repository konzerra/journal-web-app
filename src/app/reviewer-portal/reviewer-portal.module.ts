import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerPortalRoutingModule } from './reviewer-portal-routing.module';
import { ReviewerManageArticlesComponent } from './reviewer-manage-articles/reviewer-manage-articles.component';
import { ReviewerUpdateArticlesComponent } from './reviewer-update-articles/reviewer-update-articles.component';
import {TranslateModule} from "@ngx-translate/core";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ReviewerManageArticlesComponent,
    ReviewerUpdateArticlesComponent
  ],
  imports: [
    CommonModule,
    ReviewerPortalRoutingModule,
    TranslateModule,
    CoreModule,
    FormsModule
  ]
})
export class ReviewerPortalModule { }
