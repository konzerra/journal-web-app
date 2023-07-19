import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArticleService} from "../../domain/article/article.service";


@NgModule({
  declarations: [
    UpdateArticleComponent,
    ManageArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
