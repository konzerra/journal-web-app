import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleUpdateFormGroupByReviewer} from "./form-group/ArticleUpdateFormGroupByReviewer";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {saveAs} from "file-saver";
import {DocUseCaseDownload} from "../../../domain/doc/usecase/DocUseCaseDownload";
import {Article} from "../../../shared/models/article/Article";
import {AdminArticleService} from "../../../admin/article/admin.article.service";
import {isNotBlanc} from "../../../shared/validators";
import {FileApi} from "../../../shared/models/file/FileApi";

@Component({
  selector: 'app-reviewer-article-update',
  templateUrl: './reviewer-article-update.component.html',
  styleUrls: ['./reviewer-article-update.component.css']
})
export class ReviewerArticleUpdateComponent implements OnInit {


  constructor(
    private articleService: AdminArticleService,

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
          this.formGroup.updateDto.id = this.article.id
        }
      }
    )
  }

  onSubmit() {
    if(this.formGroup.valid()){
      this.articleService.updateByReviewer(
        this.formGroup.getDto(),
        this.formGroup.pdfFile
      ).subscribe({
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

  protected readonly isNotBlanc = isNotBlanc;
  protected readonly FileApi = FileApi;
}
