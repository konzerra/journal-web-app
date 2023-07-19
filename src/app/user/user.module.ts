import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PublishComponent } from './publish/publish.component';
import {CoreModule} from "../core/core.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import { TransactionsComponent } from './transactions/transactions.component';


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
    FormsModule
  ]
})
export class UserModule { }
