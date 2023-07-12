import {Component, OnInit} from '@angular/core';
import {MarkdownPage} from "../../../shared/models/markdown/MarkdownPage";
import {PageRequestDto} from "../../../shared/models/pagination/PageRequestDto";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";

import {Markdown} from "../../../shared/models/markdown/Markdown";

import {AdminMarkdownRoutes} from "../admin.markdown.routes";
import {MarkdownService} from "../../../shared/services/markdown.service";
import {RequiredMarkdowns} from "../../../shared/models/markdown/RequiredMarkdowns";


@Component({
  selector: 'app-manage-markdown',
  templateUrl: './manage-markdown.component.html',
  styleUrls: ['./manage-markdown.component.css']
})
export class ManageMarkdownComponent implements OnInit {
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
  missingIds:Array<string>= []
  ids:Array<string>= []
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
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{

        }
      })
    this.markdownService.getAllNames().subscribe({
      next:(v)=>{
        this.ids = v.map((it)=> it.id)
        this.refreshMissingIds()
      }
    })
  }

  onAddClicked() {
    this.router.navigate([AdminMarkdownRoutes.save])
  }

  onDeleteClicked(model: Markdown, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.markdownService.deleteById(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
              this.refreshMissingIds()
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
    this.refreshMissingIds()
  }

  onEdit(model: Markdown) {
    this.router.navigate(
      [AdminMarkdownRoutes.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }

  onPageChange($event: number) {
    this.refreshMissingIds()
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

  private refreshMissingIds(): void {
    this.missingIds = RequiredMarkdowns.list.filter((id) => !this.ids.includes(id));
  }

}
