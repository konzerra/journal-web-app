import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatConfirmDialogComponent} from "./dialogs/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatInfoDialogComponent} from "./dialogs/mat-info-dialog/mat-info-dialog.component";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxTranslateModule} from "../../translate/translate.module";
import {CoreModule} from "../core/core.module";




@NgModule({
  declarations: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[

  ],
  entryComponents: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,]
})
export class SharedModule { }
