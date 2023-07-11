import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from "./_auth/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogsService} from "./shared/dialogs/dialogs.service";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxTranslateModule} from "../translate/translate.module";
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
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
      SharedModule,
      CoreModule,


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
