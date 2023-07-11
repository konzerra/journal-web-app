import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatConfirmDialogComponent} from "./dialogs/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatInfoDialogComponent} from "./dialogs/mat-info-dialog/mat-info-dialog.component";
import {CoreModule} from "../core/core.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";




@NgModule({
  declarations: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    AngularMaterialModule
  ],
  exports:[

  ],
  entryComponents: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,]
})
export class SharedModule { }
