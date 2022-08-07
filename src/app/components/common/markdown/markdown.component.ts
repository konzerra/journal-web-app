import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetByName} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByName";
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {DialogsService} from "../dialogs/dialogs.service";

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  markdown =''
  constructor(
    private mdService: MarkdownService,
    private markdownUseCaseGetByName: MarkdownUseCaseGetByName,
    private route:ActivatedRoute,
    private router:Router,
    private dialogsService:DialogsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          if(param['name'] == undefined){
            this.router.navigate([ComponentRoutingPaths.common.home])
          }
          this.markdownUseCaseGetByName.execute(param['name']).subscribe({
            next:(markdown)=>{
              this.markdown = markdown.source
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
              this.router.navigate([ComponentRoutingPaths.common.home])
            }
          })
        }
      }
    )

  }

}
