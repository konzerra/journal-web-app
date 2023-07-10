import { Component, OnInit } from '@angular/core';
import {Article} from "../../../shared/models/article/Article";
import {AuthService} from "../../../domain/auth/auth.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";

@Component({
  selector: 'app-reviewer-article-main',
  templateUrl: './reviewer-article-main.component.html',
  styleUrls: ['./reviewer-article-main.component.css']
})
export class ReviewerArticleMainComponent
  implements OnInit {

  modelList = new Array<Article>()

  constructor(
    private reviewerService : ReviewerService,
    private userAuthService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let userId = this.userAuthService.getUser()?.id
    if(userId!=null){
      this.reviewerService.getAllArticles(userId).subscribe({
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
