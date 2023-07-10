import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import { saveAs } from 'file-saver';
import {ArticleUpdateFormGroup} from "./form-group/ArticleUpdateFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {Category} from "../../../../domain/category/Category";
import {DocUseCaseDownload} from "../../../../domain/doc/usecase/DocUseCaseDownload";
import {Location} from "@angular/common";
import {CategoryService} from "../../../../domain/category/category.service";
import {ArticleService} from "../../../../domain/article/article.service";
import {FileApi} from "../../../../domain/file/FileApi";


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
  updateDisabled = false
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private docUseCaseDownload: DocUseCaseDownload,
    protected dialogsService: DialogsService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.articleService.getByIdFull(JSON.parse(param["id"])).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
            },
            complete:()=>{
              this.categoryService.getAll().subscribe({
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

    this.dialogsService.openInfoDialog("Обновлено").afterClosed().subscribe({
      complete:()=>{
        this.location.back()
      }
    })
  }



  checkFormControl(formControl: FormControl) {
    return genericCheckFormControl(formControl)
  }

  onLangChange(lang: string) {
    this.formGroup.onLangChange(lang)
  }

  onSubmit() {
    this.updateDisabled = true
    if(this.formGroup.valid()){
      this.articleService.updateByAdmin(
        this.formGroup.getDto(),
        this.formGroup.wordFile,
        this.formGroup.pdfFile,
        this.formGroup.antiplagiatFile
      ).subscribe({
        error:(err)=>{
          this.updateDisabled = false
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.updateDisabled = false
          this.onSuccessfulUpdate()

        }
      })
    }else{
      this.updateDisabled = false
      this.dialogsService.openInfoDialog("Не все данные заполнены")
    }
  }

  onCategoryChanged(value: Category | null) {
    this.formGroup.category = value
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
    this.formGroup.antiplagiatFile = input.files[0]
  }

  protected readonly FileApi = FileApi;
}
