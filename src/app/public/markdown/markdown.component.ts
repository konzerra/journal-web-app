import {Component, OnInit} from '@angular/core';
import {MarkdownService as MdService} from "ngx-markdown/src/markdown.service";
import {MarkdownService} from "../../domain/markdown/markdown.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  markdown =''
  constructor(
    private mdService: MdService,
    private markdownService: MarkdownService,
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
          this.markdownService.getById(param['id']).subscribe({
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
