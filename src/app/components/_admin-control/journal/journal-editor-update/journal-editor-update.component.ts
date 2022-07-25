import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JournalUseCaseUpdate} from "../../../../domain/journal/usecase/JournalUseCaseUpdate";
import {JournalUseCaseGetByIdFull} from "../../../../domain/journal/usecase/get/JournalUseCaseGetByIdFull";
import {JournalUpdateFormGroup} from "./form-group/JournalUpdateFormGroup";

import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {JournalUseCaseGetReport} from "../../../../domain/journal/usecase/get/JournalUseCaseGetReport";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-journal-editor-update',
  templateUrl: './journal-editor-update.component.html',
  styleUrls: ['./journal-editor-update.component.css']
})
export class JournalEditorUpdateComponent
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected useCaseUpdate: JournalUseCaseUpdate,
    protected useCaseFindByIdFull : JournalUseCaseGetByIdFull,
    private journalUseCaseGetReport: JournalUseCaseGetReport,
    private dialogsService: DialogsService,
    private router:Router
  ) {

  }

  formGroup = new JournalUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
            }
          })
        }
      }
    )

  }

  protected onSuccessfulUpdate(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onReportClicked() {
    this.journalUseCaseGetReport.execute(this.formGroup.updateDto.id.toString()).subscribe({
      next:(v)=>{
        let reviewersMessage =''
        v.reviewers.forEach((v)=>{
          reviewersMessage+=`${v.name} рецензировал ${v.articles} статей, почта: ${v.email}\n`
        })
        this.dialogsService.openInfoDialog(
          `Название: ${v.name}\n
          Статьи на публикацию: ${v.articles}\n
          Рецензенты:\n
          ${reviewersMessage}
          Статьи на публикацию: ${v.articles}\n
          `

        )
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog("Не удалось создать отчет")
      }
    })
  }

  onSubmit() {
    let formData = new FormData()

    formData.set("updateDto", new Blob([JSON.stringify(this.formGroup.getDto())],{
      type:"application/json"
    }))

    if(this.formGroup.journalFile!=null){
      formData.set("pdfFile", new Blob([this.formGroup.journalFile],{
        type:this.formGroup.journalFile.type
      }))
    }
    this.useCaseUpdate.execute(formData).subscribe({
      complete:()=>{
        this.dialogsService.openInfoDialog("Обновлено")
        this.onSuccessfulUpdate()
      },
      error:(err)=>[
        this.dialogsService.openInfoDialog(err)
      ]
    })
  }

  onJournalFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.journalFile = null
      return;
    }
    this.formGroup.journalFile = input.files[0]
  }

  checkFormControl(formControl: FormControl):boolean {
    return genericCheckFormControl(formControl)
  }

  onLangChange(lang: string) {
    this.formGroup.onLangChange(lang)
  }
}
