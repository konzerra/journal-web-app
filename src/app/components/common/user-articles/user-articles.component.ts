import { Component, OnInit } from '@angular/core';
import {Article} from "../../../domain/article/Article";

@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.css']
})
export class UserArticlesComponent implements OnInit {

  constructor() { }

  modelList = new Array<Article>(
    {
      id:1,
      name:"Another (more obscure) choice would be to designate some other character or sequence of characters that you know will never appear on a label to indicate a break (e.g.), and have the function substitute wherever that occurs.",
      annotation: "Something big and full",
      category: "It",
      journal: {
        name: "Magazine",
        version: "2022"
      },
      status: "Published",
      tags: "it, tech, girls",
      reviewer: true

    }
  )
  ngOnInit(): void {
  }

}
