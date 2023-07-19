import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {TipService} from "../domain/tip/tip.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers:[]
})
export class AdminModule { }
