import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxTranslateModule} from "../../translate/translate.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxPaginationModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports:[
    NgxPaginationModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class CoreModule { }
