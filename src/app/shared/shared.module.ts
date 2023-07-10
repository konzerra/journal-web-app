import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatConfirmDialogComponent} from "./dialogs/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatInfoDialogComponent} from "./dialogs/mat-info-dialog/mat-info-dialog.component";



@NgModule({
  declarations: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,]
})
export class SharedModule { }
