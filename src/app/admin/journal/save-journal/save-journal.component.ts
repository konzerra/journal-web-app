import {Component, OnInit} from '@angular/core';
import {JournalSaveForm} from "./journal.save.form";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {JournalService} from "../../../domain/journal/journal.service";
import {AdminJournalRoutes} from "../admin.journal.routes";
import {HttpClient} from "@angular/common/http";
import {AppApi} from "../../../domain/AppApi";
import {FileApi} from "../../../domain/file/FileApi";

@Component({
  selector: 'app-save-journal',
  templateUrl: './save-journal.component.html',
  styleUrls: ['./save-journal.component.css']
})
export class SaveJournalComponent implements OnInit {

  form = new JournalSaveForm();
  selectedRadioButton = this.form.requiredLangs[0]
  saveDisabled: boolean = false


  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private journalService: JournalService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([AdminJournalRoutes.manage])
  }

  onCancelClicked() {
    this.router.navigate([AdminJournalRoutes.manage])
  }
  onSubmit() {
    this.saveDisabled = true
    if (this.form.valid() && this.form.image!=null) {
      this.journalService.save(this.form.getDto(), this.form.image).subscribe({
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
    this.form.image = ($event.target as HTMLInputElement).files?.[0] ?? null;
    const reader = new FileReader();
    reader.onload = () => {
      this.form.localImageURL = reader.result as string || null;
    };
    if(this.form.image != null)
      reader.readAsDataURL(this.form.image);
  }




  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.form.onLangChange(lang)

  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }

  protected readonly FileApi = FileApi;
}
