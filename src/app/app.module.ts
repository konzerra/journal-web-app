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
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/common/home/home.component';
import { CategoryEditorMainComponent } from './components/_admin-control/category/category-editor-main/category-editor-main.component';
import { CategoryEditorSaveComponent } from './components/_admin-control/category/category-editor-save/category-editor-save.component';
import { CategoryEditorUpdateComponent } from './components/_admin-control/category/category-editor-update/category-editor-update.component';
import { UserProfileComponent } from './components/_user-control/user-profile/user-profile.component';
import { JournalEditorMainComponent } from './components/_admin-control/journal/journal-editor-main/journal-editor-main.component';
import { JournalEditorUpdateComponent } from './components/_admin-control/journal/journal-editor-update/journal-editor-update.component';
import { JournalArticlesEditorComponent } from './components/_admin-control/journal/journal-articles-editor/journal-articles-editor.component';
import { JournalEditorSaveComponent } from './components/_admin-control/journal/journal-editor-save/journal-editor-save.component';
import { ForbiddenComponent } from './components/common/forbidden/forbidden.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { UserHandbookComponent } from './components/_user-control/user-handbook/user-handbook.component';
import { UserArticlesComponent } from './components/common/user-articles/user-articles.component';
import { UserPublishComponent } from './components/_user-control/user-publish/user-publish.component';


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
    JournalArticlesEditorComponent,
    JournalEditorSaveComponent,
    ForbiddenComponent,
    FooterComponent,
    UserHandbookComponent,
    UserArticlesComponent,
    UserPublishComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
