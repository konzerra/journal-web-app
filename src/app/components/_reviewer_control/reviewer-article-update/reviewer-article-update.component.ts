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

@Component({
  selector: 'app-reviewer-article-update',
  templateUrl: './reviewer-article-update.component.html',
  styleUrls: ['./reviewer-article-update.component.css']
})
export class ReviewerArticleUpdateComponent implements OnInit {


  constructor(
    private articleUseCaseUpdateByReviewer : ArticleUseCaseUpdateByReviewer,
    private articleUseCaseGetByIdFull : ArticleUseCaseGetByIdFull,
    private docUseCaseDownload : DocUseCaseDownload,
    private route : ActivatedRoute,
    private dialogsService: DialogsService,
    private router: Router
  ) { }

  formGroup = new ArticleUpdateFormGroupByReviewer()

  articleFull : ArticleFull | null = null

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.articleUseCaseGetByIdFull.execute(param["id"]).subscribe({
            next:(articleFull)=>{
              this.articleFull = articleFull
              this.formGroup.setDto({
                id: articleFull.id,
                status: articleFull.status,
                comment: ""
              })
            },
            error:(err) =>{

            }
          })
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
          this.dialogsService.openInfoDialog("Обновлено")
          this.onSuccessfulUpdate()
        }
      })
    }
  }

  onCancelClicked() {

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
}
