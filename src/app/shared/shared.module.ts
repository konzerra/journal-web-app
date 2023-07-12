import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatConfirmDialogComponent} from "./dialogs/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatInfoDialogComponent} from "./dialogs/mat-info-dialog/mat-info-dialog.component";
import {CoreModule} from "../core/core.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {DialogsService} from "./dialogs/dialogs.service";
import {HeaderComponent} from "./header/header.component";
import {NotFoundComponent} from "../core/not-found/not-found.component";
import {RouterLink} from "@angular/router";




@NgModule({
  declarations: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AngularMaterialModule,
    RouterLink
  ],
  providers:[
    DialogsService
  ],
  exports:[
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
    HeaderComponent,
    NotFoundComponent
  ],
})
export class SharedModule { }
