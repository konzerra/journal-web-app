import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetByName} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByName";
import {AppMarkdownPages} from "../../../AppMarkdownPages";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  markdown =''
  constructor(
    private mdService: MarkdownService,
    private markdownUseCaseGetByName: MarkdownUseCaseGetByName
  ) { }

  ngOnInit(): void {
    this.markdownUseCaseGetByName.execute(AppMarkdownPages.Board).subscribe({
      next:(markdown)=>{
        this.markdown = markdown.source
      }
    })
  }

}
