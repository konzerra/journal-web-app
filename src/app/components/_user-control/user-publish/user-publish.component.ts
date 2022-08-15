import { Component, OnInit } from '@angular/core';
import {UserPublishFormGroup} from "./form-group/UserPublishFormGroup";
import {Journal} from "../../../domain/journal/Journal";
import {Category} from "../../../domain/category/Category";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {
  GenericModelEditorSaveComponent
} from "../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {ArticleData} from "../../../domain/article/ArticleData";
import {ArticleDataControls} from "../../_admin-control/article/common/ArticleDataControls";
import {ArticleSaveDto} from "../../../domain/article/dto/ArticleSaveDto";
import { Router } from '@angular/router';
import { UseCaseSaveAbstract } from 'src/app/_generic/usecase/UseCaseSaveAbstract';
import { DialogsService } from '../../common/dialogs/dialogs.service';
import {ArticleUseCaseSave} from "../../../domain/article/usecase/ArticleUseCaseSave";
import {UserAuthService} from "../../../domain/user/service/UserAuthService";
import {JournalUseCaseGetAllByStatus} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllByStatus";
import {JournalStatus} from "../../../domain/journal/JournalStatus";
import {CategoryUseCaseGetAll} from "../../../domain/category/usecase/CategoryUseCaseGetAll";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";

@Component({
  selector: 'app-user-publish',
  templateUrl: './user-publish.component.html',
  styleUrls: ['./user-publish.component.css']
})
export class UserPublishComponent
  extends GenericModelEditorSaveComponent<ArticleData, ArticleDataControls, FormData>
  implements OnInit {

  formGroup = new UserPublishFormGroup()
  selectedRadioButton: string = this.formGroup.requiredLangs[0]
  journalList = new Array<Journal>()
  publishDisabled: Boolean = false;

  constructor(
    protected router: Router,
    protected saveUseCase: ArticleUseCaseSave,
    protected dialogsService: DialogsService,
    private userService: UserAuthService,
    private journalUseCaseGetAllByStatus: JournalUseCaseGetAllByStatus,

  ) {
    super()
  }





  ngOnInit(): void {
    this.journalUseCaseGetAllByStatus.execute(JournalStatus.Open).subscribe({
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

  override onSubmit() {
    this.publishDisabled = true
    let userId = this.userService.getUser()?.id
    if (this.formGroup.valid() && userId!=undefined) {
      this.formGroup.userId = userId
      const formData:FormData = this.formGroup.getDto()
      this.saveUseCase.execute(formData).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.publishDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.onSuccessfulSave()
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
  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.userControl.profile])
  }

  onFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.wordFile = null
      return;
    }
    this.formGroup.wordFile = input.files[0]
  }
}
