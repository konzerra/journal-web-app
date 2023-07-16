import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { SavePriceComponent } from './save-price/save-price.component';
import { UpdatePriceComponent } from './update-price/update-price.component';
import { ManagePriceComponent } from './manage-price/manage-price.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    SavePriceComponent,
    UpdatePriceComponent,
    ManagePriceComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    FormsModule,
    CoreModule
  ]
})
export class PriceModule { }
