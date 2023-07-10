import {Component, OnInit} from '@angular/core';
import {ArticleUpdateForm} from "./article.update.form";
import {Category} from "../../../domain/category/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminArticleService} from "../admin.article.service";
import {AdminCategoryService} from "../../category/admin.category.service";
import {DocUseCaseDownload} from "../../../domain/doc/usecase/DocUseCaseDownload";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Location} from "@angular/common";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {FileApi} from "../../../shared/models/file/FileApi";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  formGroup = new ArticleUpdateForm()
  selectedRadioButton: string = this.formGroup.requiredLangs[0]
  categoryList = new Array<Category>()
  updateDisabled = false
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private articleService: AdminArticleService,
    private categoryService: AdminCategoryService,
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
    this.formGroup.wordFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }
  onPdfFileChange($event: Event) {
    this.formGroup.pdfFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  onAntiplagiatFileChange($event: Event) {
    this.formGroup.antiplagiatFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  protected readonly FileApi = FileApi;
}
