import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetByName} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByName";
import {AppMarkdownPages} from "../../../AppMarkdownPages";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  markdown =''
  constructor(
    private mdService: MarkdownService,
    private markdownUseCaseGetByName: MarkdownUseCaseGetByName
  ) { }

  ngOnInit(): void {
    this.markdownUseCaseGetByName.execute(AppMarkdownPages.About).subscribe({
      next:(markdown)=>{
        this.markdown = markdown.source
      }
    })
  }

}
