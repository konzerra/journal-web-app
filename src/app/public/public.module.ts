import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
import { MarkdownComponent } from './markdown/markdown.component';
import {CoreModule} from "../core/core.module";
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {MarkdownModule} from "ngx-markdown";
import { HandbookComponent } from './handbook/handbook.component';
import {AboutJournalComponent} from "./home/components/about-journal/about-journal.component";
import {FooterPageComponent} from "./home/components/footer-page/footer-page.component";
import {GreetingComponent} from "./home/components/greeting/greeting.component";
import {PublishGuideComponent} from "./home/components/publish-guide/publish-guide.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ArticlesComponent,
    HomeComponent,
    AboutJournalComponent,
    FooterPageComponent,
    GreetingComponent,
    PublishGuideComponent,
    JournalsComponent,
    MarkdownComponent,
    HandbookComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    NgxPaginationModule,
    TranslateModule,
    NgOptimizedImage,
    MarkdownModule.forRoot(),
    FormsModule
  ]
})
export class PublicModule { }
