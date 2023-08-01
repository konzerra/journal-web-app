import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../domain/article/article.service";
import {Article} from "../../domain/article/Article";
import {AuthService} from "../../auth/auth.service";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {PurchaseService} from "../../domain/purchase/purchase.service";
import {PurchaseSaveDto} from "../../domain/purchase/dto/PurchaseSaveDto";


@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.css']
})
export class UserArticlesComponent implements OnInit{

  constructor(
    private userAuthService: AuthService,
    private articleService: ArticleService,
    private dialogsService: DialogsService,
    private purchaseService: PurchaseService
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

  onPay(model: Article) {
    let saveDto: PurchaseSaveDto = {
      articleId : model.id.valueOf(),
      journalId : model.journal.id.valueOf()
    }
    this.purchaseService.save(saveDto).subscribe({
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      },
      complete:()=>{
        this.dialogsService.openInfoDialog("successfully_paid")
      }
    })
  }
}
