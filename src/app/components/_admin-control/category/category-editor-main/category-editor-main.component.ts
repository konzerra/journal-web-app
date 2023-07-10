import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../domain/category/Category";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryPage} from "../../../../domain/category/CategoryPage";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {PageRequestDto} from "../../../../domain/pagination/PageRequestDto";
import {CategoryService} from "../../../../domain/category/category.service";

@Component({
  selector: 'app-category-editor-main',
  templateUrl: './category-editor-main.component.html',
  styleUrls: ['./category-editor-main.component.css']
})
export class CategoryEditorMainComponent
  implements OnInit {
  constructor(
    private categoryService: CategoryService,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {

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
  modelPage: CategoryPage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }
  ngOnInit(): void {
    this.categoryService.getPaginated(this.pageRequestDto).subscribe(
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
  }



  onAddClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.save])
  }

  onDeleteClicked(model: Category, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.categoryService.deleteById(model.id.toString()).subscribe({
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
  onEdit(model: Category) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.category.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.categoryService.getPaginated(this.pageRequestDto).subscribe(
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
