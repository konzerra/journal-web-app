import { Component, OnInit } from '@angular/core';

import {JournalSaveFormGroup} from "./form-group/JournalSaveFormGroup";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import { DialogsService } from 'src/app/components/common/dialogs/dialogs.service';
import {JournalService} from "../../../../domain/journal/journal.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-journal-editor-save',
  templateUrl: './journal-editor-save.component.html',
  styleUrls: ['./journal-editor-save.component.css']
})
export class JournalEditorSaveComponent
  implements OnInit {

  formGroup = new JournalSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]
  saveDisabled: boolean = false

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private journalService: JournalService,
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
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.image = null
      return;
    }
    this.formGroup.image = input.files[0]
  }



  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
