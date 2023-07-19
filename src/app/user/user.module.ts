import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PublishComponent } from './publish/publish.component';
import {CoreModule} from "../core/core.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import { TransactionsComponent } from './transactions/transactions.component';
import {NgxPaginationModule} from "ngx-pagination";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProfileComponent,
    PublishComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    TranslateModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class UserModule { }
