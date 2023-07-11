import {Component, OnInit} from '@angular/core';
import {JournalSaveForm} from "./journal.save.form";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {AdminJournalService} from "../admin-journal.service";

@Component({
  selector: 'app-save-journal',
  templateUrl: './save-journal.component.html',
  styleUrls: ['./save-journal.component.css']
})
export class SaveJournalComponent implements OnInit {

  formGroup = new JournalSaveForm();
  selectedRadioButton = this.formGroup.requiredLangs[0]
  saveDisabled: boolean = false

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private journalService: AdminJournalService,
  ) {
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }
  onSubmit() {
    this.saveDisabled = true
    if (this.formGroup.valid() && this.formGroup.image!=null) {
      this.journalService.save(this.formGroup.getDto(), this.formGroup.image).subscribe({
        error:(error)=>{
          this.saveDisabled = false
          alert(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.onSuccessfulSave()
        }
      })
    }
    else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onImageChange($event: Event) {
    this.formGroup.image = ($event.target as HTMLInputElement).files?.[0] ?? null;
  }




  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
