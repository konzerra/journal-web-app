import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalRoutingModule } from './journal-routing.module';
import { ManageJournalComponent } from './manage-journal/manage-journal.component';
import { AdminJournalService } from './admin-journal.service';
import { SaveJournalComponent } from './save-journal/save-journal.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {FormsModule} from "@angular/forms";
import { UpdateJournalComponent } from './update-journal/update-journal.component';


@NgModule({
  declarations: [
    ManageJournalComponent,
    SaveJournalComponent,
    UpdateJournalComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule
  ],
  providers: [
    AdminJournalService
  ]
})
export class JournalModule { }
