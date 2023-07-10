import { Component, OnInit } from '@angular/core';
import {UserPublishFormGroup} from "./form-group/UserPublishFormGroup";
import {Journal} from "../../../domain/journal/Journal";
import { Router } from '@angular/router';
import { DialogsService } from '../../common/dialogs/dialogs.service';
import {AuthService} from "../../../domain/auth/auth.service";
import {JournalStatus} from "../../../domain/journal/JournalStatus";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {JournalService} from "../../../domain/journal/journal.service";
import {ArticleService} from "../../../domain/article/article.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";


@Component({
  selector: 'app-user-publish',
  templateUrl: './user-publish.component.html',
  styleUrls: ['./user-publish.component.css']
})
export class UserPublishComponent
  implements OnInit {

  formGroup = new UserPublishFormGroup()
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
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.wordFile = null
      return;
    }
    this.formGroup.wordFile = input.files[0]
  }



  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
