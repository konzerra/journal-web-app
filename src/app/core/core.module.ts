import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxTranslateModule} from "../../translate/translate.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxPaginationModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
  ],
  exports:[
    NgxPaginationModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    HeaderComponent,
    TranslateModule,
  ]
})
export class CoreModule { }
