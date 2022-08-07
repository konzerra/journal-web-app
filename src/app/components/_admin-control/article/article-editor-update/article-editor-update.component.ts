import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import { saveAs } from 'file-saver';
import {ArticleUseCaseUpdateByAdmin} from "../../../../domain/article/usecase/ArticleUseCaseUpdateByAdmin";
import {ArticleUseCaseGetByIdFull} from "../../../../domain/article/usecase/ArticleUseCaseGetByIdFull";
import {ArticleUpdateFormGroup} from "./form-group/ArticleUpdateFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryUseCaseGetAll} from "../../../../domain/category/usecase/CategoryUseCaseGetAll";
import {Category} from "../../../../domain/category/Category";
import {DocUseCaseDownload} from "../../../../domain/doc/usecase/DocUseCaseDownload";
import {Location} from "@angular/common";


@Component({
  selector: 'app-article-editor-update',
  templateUrl: './article-editor-update.component.html',
  styleUrls: ['./article-editor-update.component.css']
})
export class ArticleEditorUpdateComponent
  implements OnInit {

  formGroup = new ArticleUpdateFormGroup()
  selectedRadioButton: string = this.formGroup.requiredLangs[0]
  categoryList = new Array<Category>()
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected useCaseFindByIdFull: ArticleUseCaseGetByIdFull,
    protected useCaseUpdate: ArticleUseCaseUpdateByAdmin,
    private categoryUseCaseGetAll: CategoryUseCaseGetAll,
    private docUseCaseDownload: DocUseCaseDownload,
    protected dialogsService: DialogsService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(JSON.parse(param["id"])).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{

            },
            complete:()=>{

              this.categoryUseCaseGetAll.execute().subscribe({
                next:(categoryList)=>{
                  this.categoryList = categoryList
                },
                complete:()=>{
                  if(this.formGroup.updateDto.categoryId!=null){
                    for(const category of this.categoryList){
                      if(category.id==this.formGroup.updateDto.categoryId){
                        this.formGroup.category = category
                      }
                    }
                  }
                }
              })

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
    this.location.back()
  }
  onSuccessfulUpdate(): void {
    this.location.back()
  }



  checkFormControl(formControl: FormControl) {
    return genericCheckFormControl(formControl)
  }

  onLangChange(lang: string) {
    this.formGroup.onLangChange(lang)
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
      if(this.formGroup.pdfFile!=null){
        formData.set("pdfFile", new Blob([this.formGroup.pdfFile],{
          type:this.formGroup.pdfFile.type
        }))
      }
      this.useCaseUpdate.execute(formData).subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("Обновлено")
          this.onSuccessfulUpdate()
        }
      })
    }
  }

  onCategoryChanged(value: Category | null) {
    this.formGroup.category = value
  }


  onDocDownload(id: Number | null) {
    if(id==null){
      this.dialogsService.openInfoDialog("Невозможно скачать")
      return
    }
    this.docUseCaseDownload.execute(id).subscribe({
      next:(file)=>{
        saveAs(file,"journal-thing")
      }
    })
  }


  onWordFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.wordFile = null
      return;
    }
    this.formGroup.wordFile = input.files[0]
  }
  onPdfFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.wordFile = null
      return;
    }
    this.formGroup.pdfFile = input.files[0]
  }

  onAntiplagiatFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.antiplagiatFile = null
      return;
    }
    this.formGroup.pdfFile = input.files[0]
  }
}
