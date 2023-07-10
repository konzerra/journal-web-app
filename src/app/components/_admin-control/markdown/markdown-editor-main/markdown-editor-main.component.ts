import { Component, OnInit } from '@angular/core';
import {Markdown} from "../../../../domain/markdown/Markdown";
import {MarkdownPage} from "../../../../domain/markdown/MarkdownPage";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {MarkdownService} from "../../../../domain/markdown/markdown.service";
import {PageRequestDto} from "../../../../shared/models/pagination/PageRequestDto";

@Component({
  selector: 'app-markdown-editor-main',
  templateUrl: './markdown-editor-main.component.html',
  styleUrls: ['./markdown-editor-main.component.css']
})
export class MarkdownEditorMainComponent
  implements OnInit {
  modelPage: MarkdownPage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  constructor(
    private dialogsService: DialogsService,
    private router: Router,
    private markdownService: MarkdownService
  ) {
  }
  ngOnInit(): void {
    this.markdownService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }

  onAddClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.save])
  }

  onDeleteClicked(model: Markdown, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.markdownService.deleteById(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }

  onEdit(model: Markdown) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.markdown.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }

  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.markdownService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }



}
