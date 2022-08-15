import { Component, OnInit } from '@angular/core';
import {ArticleUseCaseUpdateByReviewer} from "../../../domain/article/usecase/ArticleUseCaseUpdateByReviewer";
import {ArticleUseCaseGetByIdFull} from "../../../domain/article/usecase/ArticleUseCaseGetByIdFull";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleUpdateFormGroupByReviewer} from "./form-group/ArticleUpdateFormGroupByReviewer";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {DialogsService} from "../../common/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {ArticleFull} from "../../../domain/article/ArticleFull";
import {saveAs} from "file-saver";
import {DocUseCaseDownload} from "../../../domain/doc/usecase/DocUseCaseDownload";
import {Article} from "../../../domain/article/Article";
import {ArticleData} from "../../../domain/article/ArticleData";
import {AppLanguage} from "../../../AppLanguage";

@Component({
  selector: 'app-reviewer-article-update',
  templateUrl: './reviewer-article-update.component.html',
  styleUrls: ['./reviewer-article-update.component.css']
})
export class ReviewerArticleUpdateComponent implements OnInit {


  constructor(
    private articleUseCaseUpdateByReviewer : ArticleUseCaseUpdateByReviewer,

    private docUseCaseDownload : DocUseCaseDownload,
    private route : ActivatedRoute,
    private dialogsService: DialogsService,
    private router: Router
  ) { }

  formGroup = new ArticleUpdateFormGroupByReviewer()

  article! : Article
  updateDisabled = false

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.article = JSON.parse(param['model'])
        }
      }
    )
  }

  onSubmit() {
    if(this.formGroup.valid()){
      let formData = new FormData()

      formData.set("updateDto", new Blob([JSON.stringify(this.formGroup.getDto())],{
        type:"application/json"
      }))

      if(this.formGroup.pdfFile!=null){
        formData.set("reviewerBlankFile", new Blob([this.formGroup.pdfFile],{
          type:this.formGroup.pdfFile.type
        }))
      }
      this.articleUseCaseUpdateByReviewer.execute(formData).subscribe({
        complete:()=>{
          this.updateDisabled = false
          this.dialogsService.openInfoDialog("Обновлено")
          this.onSuccessfulUpdate()
        },
        error:(err)=>{
          this.updateDisabled = false
          this.dialogsService.openInfoDialog(err)
        }
      })
    }else{
      this.updateDisabled = false
      this.dialogsService.openInfoDialog("Не все данные заполнены")
    }
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.reviewerControl.article])
  }

  checkFormControl(formControl: FormControl) {
    return genericCheckFormControl(formControl)
  }

  onFileChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.pdfFile = null
      return;
    }
    this.formGroup.pdfFile = input.files[0]
  }

  private onSuccessfulUpdate() {
    this.router.navigate([ComponentRoutingPaths.reviewerControl.article.main])
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
  formatAuthors(authors: Array<String>) {
    let formatted =""
    authors.forEach((author)=>{
      formatted+=author+', '
    })

    return formatted.slice(0,formatted.length-2)
  }
}
