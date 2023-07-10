import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminTipService} from "./tip/admin.tip.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers:[AdminTipService]
})
export class AdminModule { }
