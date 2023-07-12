import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgxTranslateModule} from "../../translate/translate.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    NgxTranslateModule,
  ],
  exports:[
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxTranslateModule,
  ]
})
export class CoreModule { }
