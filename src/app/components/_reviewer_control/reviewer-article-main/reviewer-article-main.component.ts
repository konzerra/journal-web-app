import { Component, OnInit } from '@angular/core';
import {ArticlePage} from "../../../domain/article/ArticlePage";
import {Article} from "../../../domain/article/Article";
import {ReviewerUseCaseGetAllArticles} from "../../../domain/reviewer/usecase/ReviewerUseCaseGetAllArticles";
import {UserAuthService} from "../../../domain/user/service/UserAuthService";

@Component({
  selector: 'app-reviewer-article-main',
  templateUrl: './reviewer-article-main.component.html',
  styleUrls: ['./reviewer-article-main.component.css']
})
export class ReviewerArticleMainComponent
  implements OnInit {

  modelList = new Array<Article>()

  constructor(
    private reviewerUseCaseGetAllArticles : ReviewerUseCaseGetAllArticles,
    private userAuthService:UserAuthService
  ) { }

  ngOnInit(): void {
    let userId = this.userAuthService.getUser()?.id
    if(userId!=null){
      this.reviewerUseCaseGetAllArticles.execute(userId).subscribe({
        next:(list)=>{
          this.modelList=list
        }
      })
    }

  }

  onEdit(model: Article) {

  }

  onDeleteClicked(model: Article, i: number) {

  }
}
