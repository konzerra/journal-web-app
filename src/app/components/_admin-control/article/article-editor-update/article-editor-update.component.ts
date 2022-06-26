import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorSaveComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {ArticleData} from "../../../../domain/article/ArticleData";
import {ArticleDataControls} from "../common/ArticleDataControls";
import {UserPublishFormGroup} from "../../../_user-control/user-publish/form-group/UserPublishFormGroup";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleUseCaseSave} from "../../../../domain/article/usecase/ArticleUseCaseSave";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Journal} from "../../../../domain/journal/Journal";
import {
  GenericModelEditorUpdateComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorUpdateComponent";
import {ArticleUseCaseUpdateByAdmin} from "../../../../domain/article/usecase/ArticleUseCaseUpdateByAdmin";
import {ArticleUseCaseGetByIdFull} from "../../../../domain/article/usecase/ArticleUseCaseGetByIdFull";
import {ArticleUpdateFormGroup} from "./form-group/ArticleUpdateFormGroup";
import {ArticleUpdateDtoByAdmin} from "../../../../domain/article/dto/ArticleUpdateDtoByAdmin";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-article-editor-update',
  templateUrl: './article-editor-update.component.html',
  styleUrls: ['./article-editor-update.component.css']
})
export class ArticleEditorUpdateComponent
  implements OnInit {

  formGroup = new ArticleUpdateFormGroup()
  selectedRadioButton: string = this.formGroup.requiredLangs[0]
  onSuccessfulSave(): void {

  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected useCaseFindByIdFull: ArticleUseCaseGetByIdFull,
    protected useCaseUpdate: ArticleUseCaseUpdateByAdmin,
    protected dialogsService: DialogsService,
  ) {

  }

  journalList = new Array<Journal>(
    {
      id: 1,
      name: "Magazine",
      version: "2022",
      status: "Open",
      articlesCount: 0
    }
  )


  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(JSON.parse(param["id"])).subscribe({
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

  addAuthor():void{
    this.formGroup.addAuthor()
  }
  onAuthorRemove(i: number) {
    this.formGroup.removeAuthor(i)
  }

  onCancelClicked() {

  }

  onFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.wordFile = null
      return;
    }
    this.formGroup.wordFile = input.files[0]
  }

  protected onSuccessfulUpdate(): void {
  }


  checkFormControl(formControl: FormControl) {
    return genericCheckFormControl(formControl)
  }

  onLangChange(lang: string) {

  }

  onSubmit() {
    if(this.formGroup.valid()){
      let formData = new FormData()

      formData.set("updateDto", new Blob([JSON.stringify(this.formGroup.getDto())],{
        type:"application/json"
      }))
      if(this.formGroup.wordFile!=null){
        formData.set("wordFile", new Blob([this.formGroup.wordFile],{
          type:this.formGroup.wordFile.type
        }))
      }

    }
  }
}
