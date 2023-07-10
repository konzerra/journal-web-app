import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from "./_auth/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {RouterModule} from "@angular/router";
import { UserLoginComponent } from './components/_user-control/user-login/user-login.component';
import { UserRegisterComponent } from './components/_user-control/user-register/user-register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/common/home/home.component';
import { UserProfileComponent } from './components/_user-control/user-profile/user-profile.component';
import { ForbiddenComponent } from './components/common/forbidden/forbidden.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { UserHandbookComponent } from './components/_user-control/user-handbook/user-handbook.component';

import { UserPublishComponent } from './components/_user-control/user-publish/user-publish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogsService} from "./shared/dialogs/dialogs.service";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import { ArticleEditorMainComponent } from './components/_admin-control/article/article-editor-main/article-editor-main.component';
import { ArticleEditorUpdateComponent } from './components/_admin-control/article/article-editor-update/article-editor-update.component';
import { JournalsComponent } from './components/common/journals/journals.component';
import { ReviewerArticleMainComponent } from './components/_reviewer_control/reviewer-article-main/reviewer-article-main.component';
import {MarkdownModule} from "ngx-markdown";


import { ReviewerArticleUpdateComponent } from './components/_reviewer_control/reviewer-article-update/reviewer-article-update.component';
import { FooterPageComponent } from './components/common/home/components/footer-page/footer-page.component';

import { AboutJournalComponent } from './components/common/home/components/about-journal/about-journal.component';
import { PublishGuideComponent } from './components/common/home/components/publish-guide/publish-guide.component';
import {NgxTranslateModule} from "../translate/translate.module";
import { ArticlesComponent } from './components/common/articles/articles.component';
import { MarkdownComponent } from './components/common/markdown/markdown.component';
import { UserResetPasswordComponent } from './components/_user-control/user-reser-password/user-reset-password.component';
import { GreetingComponent } from './components/common/home/components/greeting/greeting.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    UserProfileComponent,
    ForbiddenComponent,
    FooterComponent,
    UserHandbookComponent,
    UserPublishComponent,
    ArticleEditorMainComponent,
    ArticleEditorUpdateComponent,
    JournalsComponent,
    ReviewerArticleMainComponent,
    ReviewerArticleUpdateComponent,
    FooterPageComponent,
    AboutJournalComponent,
    PublishGuideComponent,
    ArticlesComponent,
    MarkdownComponent,
    UserResetPasswordComponent,
    GreetingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        MatIconModule,
        NgxPaginationModule,
        FormsModule,
      NgxTranslateModule,
      MarkdownModule.forRoot(),
      SharedModule,
      CoreModule

    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },

    DialogsService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
