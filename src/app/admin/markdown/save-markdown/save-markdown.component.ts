import {Component, OnInit} from '@angular/core';
import {MarkdownSaveForm} from "./markdown.save.form";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {MarkdownService} from "../../../domain/markdown/markdown.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {MarkdownSaveDto} from "../_models/MarkdownSaveDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {AdminMarkdownRoutes} from "../admin.markdown.routes";

@Component({
  selector: 'app-save-markdown',
  templateUrl: './save-markdown.component.html',
  styleUrls: ['./save-markdown.component.css']
})
export class SaveMarkdownComponent implements OnInit {

  formGroup = new MarkdownSaveForm();
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
    this.router.navigate([AdminMarkdownRoutes.manage])
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
          this.router.navigate([AdminMarkdownRoutes.manage])
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
