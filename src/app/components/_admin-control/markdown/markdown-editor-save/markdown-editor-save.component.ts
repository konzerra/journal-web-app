import { Component, OnInit } from '@angular/core';

import {DialogsService} from "../../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import { MarkdownSaveFormGroup } from './form-group/MarkdownSaveFormGroup';
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {MarkdownService} from "../../../../domain/markdown/markdown.service";
import {MarkdownSaveDto} from "../../../../domain/markdown/dto/MarkdownSaveDto";

@Component({
  selector: 'app-markdown-editor-save',
  templateUrl: './markdown-editor-save.component.html',
  styleUrls: ['./markdown-editor-save.component.css']
})
export class MarkdownEditorSaveComponent
  implements OnInit {

  formGroup = new MarkdownSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]
  saveDisabled =  false;

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private markdownService:MarkdownService
  ) {
  }

  ngOnInit(): void {

  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

  onSubmit() {
    this.saveDisabled = true
    if (this.formGroup.valid()) {
      const saveDto:MarkdownSaveDto = this.formGroup.getDto()
      this.markdownService.save(saveDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.saveDisabled = false
          alert(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
        }
      })
    }else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
