import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipRoutingModule } from './tip-routing.module';
import { ManageTipComponent } from './manage-tip/manage-tip.component';
import { SaveTipComponent } from './save-tip/save-tip.component';
import { UpdateTipComponent } from './update-tip/update-tip.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ManageTipComponent,
    SaveTipComponent,
    UpdateTipComponent
  ],
  imports: [
    CommonModule,
    TipRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    CoreModule,
    FormsModule
  ]
})
export class TipModule { }
