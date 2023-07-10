import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ManageReviewerComponent } from './manage-reviewer/manage-reviewer.component';

import { UpdateReviewerComponent } from './update-reviewer/update-reviewer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {SaveReviewerComponent} from "./save-reviewer/save-reviewer.component";
import {CoreModule} from "../../core/core.module";
import {AdminReviewerService} from "./admin.reviewer.service";


@NgModule({
  declarations: [
    ManageReviewerComponent,
    SaveReviewerComponent,
    UpdateReviewerComponent
  ],
  imports: [
    CommonModule,
    ReviewerRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    CoreModule,
    FormsModule
  ],
  providers:[AdminReviewerService]
})
export class ReviewerModule { }
