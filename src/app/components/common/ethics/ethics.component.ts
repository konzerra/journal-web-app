import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetByName} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByName";
import {AppMarkdownPages} from "../../../AppMarkdownPages";

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.css']
})
export class EthicsComponent implements OnInit {

  markdown =''
  constructor(
    private mdService: MarkdownService,
    private markdownUseCaseGetByName: MarkdownUseCaseGetByName
  ) { }

  ngOnInit(): void {
    this.markdownUseCaseGetByName.execute(AppMarkdownPages.Ethics).subscribe({
      next:(markdown)=>{
        this.markdown = markdown.source
      }
    })
  }

}
