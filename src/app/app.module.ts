import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/common/header/header.component';
import {AuthGuard} from "./_auth/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {RouterModule} from "@angular/router";
import { UserLoginComponent } from './components/_user-control/user-login/user-login.component';
import { UserRegisterComponent } from './components/_user-control/user-register/user-register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/common/home/home.component';
import { CategoryEditorMainComponent } from './components/_admin-control/category/category-editor-main/category-editor-main.component';
import { CategoryEditorSaveComponent } from './components/_admin-control/category/category-editor-save/category-editor-save.component';
import { CategoryEditorUpdateComponent } from './components/_admin-control/category/category-editor-update/category-editor-update.component';
import { UserProfileComponent } from './components/_user-control/user-profile/user-profile.component';
import { JournalEditorMainComponent } from './components/_admin-control/journal/journal-editor-main/journal-editor-main.component';
import { JournalEditorUpdateComponent } from './components/_admin-control/journal/journal-editor-update/journal-editor-update.component';
import { JournalEditorSaveComponent } from './components/_admin-control/journal/journal-editor-save/journal-editor-save.component';
import { ForbiddenComponent } from './components/common/forbidden/forbidden.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { UserHandbookComponent } from './components/_user-control/user-handbook/user-handbook.component';
import { UserArticlesComponent } from './components/common/user-articles/user-articles.component';
import { UserPublishComponent } from './components/_user-control/user-publish/user-publish.component';
import { ReviewerEditorMainComponent } from './components/_admin-control/reviewer/reviewer-editor-main/reviewer-editor-main.component';
import { ReviewerEditorSaveComponent } from './components/_admin-control/reviewer/reviewer-editor-save/reviewer-editor-save.component';
import { ReviewerEditorUpdateComponent } from './components/_admin-control/reviewer/reviewer-editor-update/reviewer-editor-update.component';
import { MatConfirmDialogComponent } from './components/common/dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogsService} from "./components/common/dialogs/dialogs.service";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import { MatInfoDialogComponent } from './components/common/dialogs/mat-info-dialog/mat-info-dialog.component';
import { ArticleEditorMainComponent } from './components/_admin-control/article/article-editor-main/article-editor-main.component';
import { ArticleEditorUpdateComponent } from './components/_admin-control/article/article-editor-update/article-editor-update.component';
import { JournalsComponent } from './components/common/journals/journals.component';
import { ReviewerArticleMainComponent } from './components/_reviewer_control/reviewer-article-main/reviewer-article-main.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    CategoryEditorMainComponent,
    CategoryEditorSaveComponent,
    CategoryEditorUpdateComponent,
    UserProfileComponent,
    JournalEditorMainComponent,
    JournalEditorUpdateComponent,
    JournalEditorSaveComponent,
    ForbiddenComponent,
    FooterComponent,
    UserHandbookComponent,
    UserArticlesComponent,
    UserPublishComponent,
    ReviewerEditorMainComponent,
    ReviewerEditorSaveComponent,
    ReviewerEditorUpdateComponent,
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
    ArticleEditorMainComponent,
    ArticleEditorUpdateComponent,
    JournalsComponent,
    ReviewerArticleMainComponent,
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

    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DialogsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,]
})
export class AppModule { }
