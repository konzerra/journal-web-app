import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {
  JournalUpdateForm
} from "./journal.update.form";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {AdminJournalService} from "../admin-journal.service";
import {FileApi} from "../../../shared/models/file/FileApi";

@Component({
  selector: 'app-update-journal',
  templateUrl: './update-journal.component.html',
  styleUrls: ['./update-journal.component.css']
})
export class UpdateJournalComponent
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    private journalService: AdminJournalService,
    private dialogsService: DialogsService,
    private router:Router
  ) {

  }

  form = new JournalUpdateForm()
  selectedRadioButton = this.form.requiredLangs[0]

  updateDisabled = false


  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.journalService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )

  }


  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onReportClicked() {
    this.journalService.makeReport(this.form.updateDto.id.toString()).subscribe({
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
    if (this.form.valid()) {
      this.journalService.update(
        this.form.getDto(),
        this.form.journalImage,
        this.form.journalFile
      ).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Обновлено")
          this.updateDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
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
    this.form.journalFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  checkFormControl(formControl: FormControl):boolean {
    return genericCheckFormControl(formControl)
  }

  onLangChange(lang: string) {
    this.form.onLangChange(lang)
  }

  onImageChange($event: Event) {
    this.form.journalImage = ($event.target as HTMLInputElement).files?.[0] ?? null

  }


  protected readonly FileApi = FileApi;
}
