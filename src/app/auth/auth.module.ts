import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {CoreModule} from "../core/core.module";
import {TranslateModule} from "@ngx-translate/core";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        CoreModule,
        TranslateModule,
        FormsModule
    ]
})
export class AuthModule { }
