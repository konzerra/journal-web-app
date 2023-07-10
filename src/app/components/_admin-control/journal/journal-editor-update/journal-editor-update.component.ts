import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JournalUpdateFormGroup} from "./form-group/JournalUpdateFormGroup";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {JournalService} from "../../../../domain/journal/journal.service";
import {FileApi} from "../../../../domain/file/FileApi";

@Component({
  selector: 'app-journal-editor-update',
  templateUrl: './journal-editor-update.component.html',
  styleUrls: ['./journal-editor-update.component.css']
})
export class JournalEditorUpdateComponent
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    private journalService: JournalService,
    private dialogsService: DialogsService,
    private router:Router
  ) {

  }

  formGroup = new JournalUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]

  updateDisabled = false


  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.journalService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
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
    this.journalService.makeReport(this.formGroup.updateDto.id.toString()).subscribe({
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
          `
        )
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      }
    })
  }

  onSubmit() {
    this.updateDisabled = true
    if (this.formGroup.valid()) {
      this.journalService.update(
        this.formGroup.getDto(),
        this.formGroup.journalImage,
        this.formGroup.journalFile
      ).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Обновлено")
          this.updateDisabled = false
          this.onSuccessfulUpdate()
        },
        error:(err)=> {
          this.dialogsService.openInfoDialog(err)
          this.updateDisabled = false
        }
      })
    }else{
      this.dialogsService.openInfoDialog("Не все данные введены")
      this.updateDisabled = false
    }
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

  onImageChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.journalImage = null
      return;
    }
    this.formGroup.journalImage = input.files[0]

  }


  protected readonly FileApi = FileApi;
}
