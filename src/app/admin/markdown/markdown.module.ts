import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownRoutingModule } from './markdown-routing.module';
import {AdminMarkdownService} from "./admin-markdown.service";
import { ManageMarkdownComponent } from './manage-markdown/manage-markdown.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ManageMarkdownComponent
  ],
  imports: [
    CommonModule,
    MarkdownRoutingModule,
    NgxPaginationModule,
    TranslateModule
  ],
  providers:[AdminMarkdownService]
})
export class MarkdownModule { }
