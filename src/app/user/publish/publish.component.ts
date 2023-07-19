import {Component, OnInit} from '@angular/core';
import {PublishForm} from "./publish.form";
import {Journal} from "../../domain/journal/Journal";
import {Router} from "@angular/router";
import {ArticleService} from "../../domain/article/article.service";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {JournalStatus} from "../../domain/journal/JournalStatus";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";
import {JournalService} from "../../domain/journal/journal.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  formGroup = new PublishForm()
  selectedRadioButton: string = this.formGroup.requiredLangs[0]
  journalList = new Array<Journal>()
  publishDisabled: Boolean = false;

  constructor(
    protected router: Router,
    private articleService: ArticleService,
    protected dialogsService: DialogsService,
    private userService: AuthService,
    private journalService: JournalService

  ) {

  }





  ngOnInit(): void {
    this.journalService.getAllByStatus(JournalStatus.Open).subscribe({
      next:(journalList)=>{
        this.journalList = journalList
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      }
    })

  }

  addAuthor():void{
    this.formGroup.addAuthor()
  }
  onAuthorRemove(i: number) {
    this.formGroup.removeAuthor(i)
  }

  onSubmit() {
    this.publishDisabled = true
    let userId = this.userService.getUser()?.id
    this.formGroup.userId = userId || 0
    if (this.formGroup.valid() && userId!=undefined && this.formGroup.wordFile != null) {
      this.formGroup.userId = userId
      this.articleService.save(
        this.formGroup.getDto(),
        this.formGroup.wordFile,
      ).subscribe({
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.publishDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.router.navigate([ComponentRoutingPaths.userControl.profile])
        }
      })
    }else{
      this.dialogsService.openInfoDialog("Не все данные введены")
      this.publishDisabled = false
    }
  }


  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.common.home])
  }


  onFileChange($event: Event) {
    this.formGroup.wordFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }



  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
