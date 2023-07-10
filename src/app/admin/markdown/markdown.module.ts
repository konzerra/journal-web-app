import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownRoutingModule } from './markdown-routing.module';
import {AdminMarkdownService} from "./admin-markdown.service";
import { ManageMarkdownComponent } from './manage-markdown/manage-markdown.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import { UpdateMarkdownComponent } from './update-markdown/update-markdown.component';
import { SaveMarkdownComponent } from './save-markdown/save-markdown.component';
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ManageMarkdownComponent,
    UpdateMarkdownComponent,
    SaveMarkdownComponent
  ],
  imports: [
    CommonModule,
    MarkdownRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    CoreModule,
    FormsModule
  ],
  providers:[AdminMarkdownService]
})
export class MarkdownModule { }
