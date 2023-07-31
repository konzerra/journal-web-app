import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../domain/article/article.service";
import {Article} from "../../domain/article/Article";
import {AuthService} from "../../auth/auth.service";
import {DialogsService} from "../../shared/dialogs/dialogs.service";

@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.css']
})
export class UserArticlesComponent implements OnInit{

  constructor(
    private userAuthService: AuthService,
    private articleService: ArticleService,
    private dialogsService: DialogsService
  ) {
  }
  modelList = new Array<Article>()
  ngOnInit(): void {
    let user = this.userAuthService.getUser()
    if(user!=null){

      this.articleService.getMyArticles(user.id).subscribe({
        next:(v)=>{
          this.modelList = v
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
    }
  }

}
