import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorMainComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorMainComponent";
import {Category} from "../../../../domain/category/Category";
import {CategorySaveDto} from "../../../../domain/category/dto/CategorySaveDto";
import {CategoryUpdateDto} from "../../../../domain/category/dto/CategoryUpdateDto";
import {Router} from "@angular/router";
import {CategoryUseCaseGetAll} from "../../../../domain/category/usecase/CategoryUseCaseGetAll";
import {CategoryUseCaseDeleteById} from "../../../../domain/category/usecase/CategoryUseCaseDeleteById";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryUseCaseFindByIdForUpdate} from "../../../../domain/category/usecase/CategoryUseCaseFindByIdForUpdate";

@Component({
  selector: 'app-category-editor-main',
  templateUrl: './category-editor-main.component.html',
  styleUrls: ['./category-editor-main.component.css']
})
export class CategoryEditorMainComponent
  extends GenericModelEditorMainComponent<Category, CategorySaveDto, CategoryUpdateDto>
  implements OnInit {

  constructor(
    router:Router,
    useCaseGetAll:CategoryUseCaseGetAll,
    useCaseDeleteById:CategoryUseCaseDeleteById,

  ) {
    super(
      ComponentRoutingPaths.adminControl.category.save,
      ComponentRoutingPaths.adminControl.category.update,
      router,
      useCaseGetAll,
      useCaseDeleteById
    )
  }

  ngOnInit(): void {
    this.abstractOnInit()
  }

}
