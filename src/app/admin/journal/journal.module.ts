import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalRoutingModule } from './journal-routing.module';
import { ManageJournalComponent } from './manage-journal/manage-journal.component';
import { AdminJournalService } from './admin-journal.service';
import { SaveJournalComponent } from './save-journal/save-journal.component';


@NgModule({
  declarations: [
    ManageJournalComponent,
    SaveJournalComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule
  ],
  providers: [
    AdminJournalService
  ]
})
export class JournalModule { }
