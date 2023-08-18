import {Component, OnInit} from '@angular/core';
import {ArticleUpdateForm} from "./article.update.form";
import {Category} from "../../../domain/category/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../domain/article/article.service";
import {CategoryService} from "../../../domain/category/category.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Location} from "@angular/common";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {FileApi} from "../../../domain/file/FileApi";
import {Price} from "../../../domain/price/Price";
import {PriceService} from "../../../domain/price/price.service";
import {isNotBlanc} from "../../../shared/validators";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  form = new ArticleUpdateForm()
  selectedRadioButton: string = this.form.requiredLangs[0]
  categoryList = new Array<Category>()
  priceList = new Array<Price>()
  updateDisabled = false
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private priceService: PriceService,
    protected dialogsService: DialogsService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.articleService.getByIdFull(JSON.parse(param["id"])).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
            },
            complete:()=>{
              this.getPrices()
              this.getCategories()

            }
          })
        }
      }
    )

  }

  addAuthor():void{
    this.form.addAuthor()
  }
  onAuthorRemove(i: number) {
    this.form.removeAuthor(i)
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
    this.form.onLangChange(lang)
  }

  onSubmit() {
    this.updateDisabled = true
    if(this.form.valid()){
      this.articleService.updateByAdmin(
        this.form.getDto(),
        this.form.wordFile,
        this.form.pdfFile,
        this.form.antiplagiatFile
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
    this.form.category = value
  }

  onWordFileChange($event: Event) {
    this.form.wordFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }
  onPdfFileChange($event: Event) {
    this.form.pdfFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  onAntiplagiatFileChange($event: Event) {
    this.form.antiplagiatFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
      next:(categoryList)=>{
        this.categoryList = categoryList
      },
      complete:()=>{
        if(this.form.updateDto.categoryId!=null){
          for(const category of this.categoryList){
            if(category.id==this.form.updateDto.categoryId){
              this.form.category = category
            }
          }
        }
      }
    })
  }

  private getPrices(){
    this.priceService.getAll().subscribe({
      next:(priceList)=>{
        this.priceList = priceList
      },
      complete:()=>{
        if(this.form.updateDto.categoryId!=null){
          for(const price of this.priceList){
            if(price.id==this.form.updateDto.priceId){
              this.form.price = price
            }
          }
        }
      }
    })
  }

  protected readonly FileApi = FileApi;
  protected readonly isNotBlanc = isNotBlanc;
}
