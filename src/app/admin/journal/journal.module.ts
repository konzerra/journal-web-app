import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { JournalRoutingModule } from './journal-routing.module';
import { ManageJournalComponent } from './manage-journal/manage-journal.component';
import { JournalService } from '../../domain/journal/journal.service';
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
        FormsModule,
        NgOptimizedImage
    ],
  providers: [
    JournalService
  ]
})
export class JournalModule { }
