import { Component, OnInit } from '@angular/core';
import {JournalPage} from "../../../../domain/journal/JournalPage";
import {Journal} from "../../../../domain/journal/Journal";
import {ArticlePage} from "../../../../domain/article/ArticlePage";
import {Article} from "../../../../domain/article/Article";
import {
  JournalUseCaseGetAllArticlesPaginated
} from "../../../../domain/journal/usecase/JournalUseCaseGetAllArticlesPaginated";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-editor-main',
  templateUrl: './article-editor-main.component.html',
  styleUrls: ['./article-editor-main.component.css']
})
export class ArticleEditorMainComponent

  implements OnInit {

  modelPage : ArticlePage = {
    content: new Array<Article>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
  }
  journal : Journal = {
    id:0,
    name: "",
    version: "",
    status: "",
    articlesCount:0
  }
  constructor(
    private journalUseCaseGetAllArticlesPaginated: JournalUseCaseGetAllArticlesPaginated,
    private route:ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.journal = JSON.parse(param["model"])
          this.journalUseCaseGetAllArticlesPaginated.execute(this.journal.id, this.modelPage.number ).subscribe(
            {
              next:(modelPage)=>{
                this.modelPage = modelPage
                console.log(modelPage)
              },
              error:()=>{

              },
              complete:()=>{

              }
            })
        }
      }
    )
  }


  onEdit(model: Article) {

  }

  onDeleteClicked(model: Article, i: number) {

  }

  onPageChange($event: number) {
    this.journalUseCaseGetAllArticlesPaginated.execute($event-1, this.journal.id ).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
          console.log(this.modelPage)
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }
}
