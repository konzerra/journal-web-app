import { Component, OnInit } from '@angular/core';
import {ArticlePage} from "../../../domain/article/ArticlePage";
import {Article} from "../../../domain/article/Article";
import {ReviewerUseCaseGetAllArticles} from "../../../domain/reviewer/usecase/get/ReviewerUseCaseGetAllArticles";
import {UserAuthService} from "../../../domain/user/service/UserAuthService";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";

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
    private userAuthService:UserAuthService,
    private router: Router
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
    this.router.navigate([ComponentRoutingPaths.reviewerControl.article.update],{
      queryParams: {model: JSON.stringify(model)}
    })
  }


}
