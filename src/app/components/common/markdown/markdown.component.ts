import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetById} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetById";
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
    private markdownUseCaseGetById: MarkdownUseCaseGetById,
    private route:ActivatedRoute,
    private router:Router,
    private dialogsService:DialogsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          if(param['id'] == undefined){
            this.router.navigate([ComponentRoutingPaths.common.home])
          }
          this.markdownUseCaseGetById.execute(param['id']).subscribe({
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
