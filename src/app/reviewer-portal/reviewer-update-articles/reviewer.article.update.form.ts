import {FormControl, Validators} from "@angular/forms";
import {ArticleUpdateDtoByReviewer} from "../../domain/article/dto/ArticleUpdateDtoByReviewer";
import {ArticleStatusesReviewer} from "../../domain/article/status/ArticleStatusesReviewer";

export class ReviewerArticleUpdateForm {

  status = new FormControl<string>("", Validators.required)
  comment = new FormControl<string>("", Validators.required)
  pdfFile: File | null = null

  articleStatuses = Object.values(ArticleStatusesReviewer)

  updateDto : ArticleUpdateDtoByReviewer = {
    id: 0,
    comment: "",
    status:""
  }
  setDto(updateDto: ArticleUpdateDtoByReviewer){
    this.updateDto= updateDto
  }
  getDto():ArticleUpdateDtoByReviewer {
    return {
      id: this.updateDto.id,
      comment: this.comment.value || "",
      status: this.status.value || this.updateDto.status

    }
  }
  valid():boolean{
    return this.status.valid &&
      this.comment.valid
  }
}
