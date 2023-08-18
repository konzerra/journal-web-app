import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {
  JournalUpdateForm
} from "./journal.update.form";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {JournalService} from "../../../domain/journal/journal.service";
import {FileApi} from "../../../domain/file/FileApi";
import {AdminJournalRoutes} from "../admin.journal.routes";
import {isEmpty} from "rxjs";
import {isNotBlanc} from "../../../shared/validators";
import {JournalStatus} from "../../../domain/journal/JournalStatus";

@Component({
  selector: 'app-update-journal',
  templateUrl: './update-journal.component.html',
  styleUrls: ['./update-journal.component.css']
})
export class UpdateJournalComponent
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    private journalService: JournalService,
    private dialogsService: DialogsService,
    private router:Router
  ) {

  }

  form = new JournalUpdateForm()
  selectedRadioButton = this.form.requiredLangs[0]
  updateDisabled = false
  makeReportClicked = false


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
    this.router.navigate([AdminJournalRoutes.manage])
  }

  onReportClicked() {
    this.dialogsService.openInfoDialog(
      "Скачивание отчета началось"
    )
    this.journalService.makeReport(this.form.updateDto.id.toString()).subscribe({
      next:(response)=>{
        if(response.body!=null){
          const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

          // Generate a download link for the Blob
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = `Report_journal_id_${this.form.updateDto.id}.docx`;

          // Append the link to the document and click it programmatically to trigger the download
          document.body.appendChild(downloadLink);
          downloadLink.click();

          // Clean up after download is initiated
          URL.revokeObjectURL(downloadLink.href);
          document.body.removeChild(downloadLink);
        }

      },
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      },
      complete:()=>{
        this.makeReportClicked = true
      }
    })
  }

  onSubmit() {
    this.updateDisabled = true

    if (this.form.valid()) {
      if(this.form.status.value === JournalStatus.Published){
        if(!this.makeReportClicked){
          this.dialogsService.openInfoDialog("Скачайте сперва отчет")
          this.updateDisabled = false
          return
        }
      }
      this.journalService.update(
        this.form.getDto(),
        this.form.image,
        this.form.journalFile
      ).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Обновлено")
          this.updateDisabled = false
          this.router.navigate([AdminJournalRoutes.manage])
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
    this.form.image = ($event.target as HTMLInputElement).files?.[0] ?? null
    const reader = new FileReader();
    reader.onload = () => {
      this.form.localImageURL = reader.result as string || null;
    };
    if(this.form.image != null)
      reader.readAsDataURL(this.form.image);
  }


  protected readonly FileApi = FileApi;
  protected readonly isEmpty = isEmpty;
  protected readonly isNotBlanc = isNotBlanc;
}
