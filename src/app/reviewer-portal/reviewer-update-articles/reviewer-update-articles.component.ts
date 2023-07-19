import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../domain/article/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {
  ReviewerArticleUpdateForm
} from "./reviewer.article.update.form";
import {Article} from "../../domain/article/Article";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";
import {isNotBlanc} from "../../shared/validators";
import {FileApi} from "../../domain/file/FileApi";

@Component({
  selector: 'app-reviewer-update-articles',
  templateUrl: './reviewer-update-articles.component.html',
  styleUrls: ['./reviewer-update-articles.component.css']
})
export class ReviewerUpdateArticlesComponent implements OnInit {


  constructor(
    private articleService: ArticleService,
    private route : ActivatedRoute,
    private dialogsService: DialogsService,
    private router: Router
  ) { }

  form = new ReviewerArticleUpdateForm()

  article! : Article
  updateDisabled = false

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.article = JSON.parse(param['model'])
          this.form.updateDto.id = this.article.id
        }
      }
    )
  }

  onSubmit() {
    if(this.form.valid()){
      this.articleService.updateByReviewer(
        this.form.getDto(),
        this.form.pdfFile
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
    this.form.pdfFile = ($event.target as HTMLInputElement).files?.[0] ?? null
  }

  private onSuccessfulUpdate() {
    this.router.navigate([ComponentRoutingPaths.reviewerControl.article.main])
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
