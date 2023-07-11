import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article/Article";
import {AdminReviewerService} from "../../admin/reviewer/admin.reviewer.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-reviewer-manage-articles',
  templateUrl: './reviewer-manage-articles.component.html',
  styleUrls: ['./reviewer-manage-articles.component.css']
})
export class ReviewerManageArticlesComponent implements OnInit {

  modelList = new Array<Article>()

  constructor(
    private reviewerService : AdminReviewerService,
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
