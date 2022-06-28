import { Component, OnInit } from '@angular/core';
import {ArticlePage} from "../../../domain/article/ArticlePage";
import {Article} from "../../../domain/article/Article";

@Component({
  selector: 'app-reviewer-article-main',
  templateUrl: './reviewer-article-main.component.html',
  styleUrls: ['./reviewer-article-main.component.css']
})
export class ReviewerArticleMainComponent
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

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(model: Article) {

  }

  onDeleteClicked(model: Article, i: number) {

  }

  onPageChange($event: number) {

  }
}
