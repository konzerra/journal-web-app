import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorMainComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorMainComponent";
import {Category} from "../../../../domain/category/Category";
import {Router} from "@angular/router";
import {CategoryUseCaseDeleteById} from "../../../../domain/category/usecase/CategoryUseCaseDeleteById";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryPage} from "../../../../domain/category/CategoryPage";
import {CategoryUseCaseGetAllPaginated} from "../../../../domain/category/usecase/CategoryUseCaseGetAllPaginated";
import {DialogsService} from "../../../common/dialogs/dialogs.service";

@Component({
  selector: 'app-category-editor-main',
  templateUrl: './category-editor-main.component.html',
  styleUrls: ['./category-editor-main.component.css']
})
export class CategoryEditorMainComponent
  extends GenericModelEditorMainComponent<Category, CategoryPage>
  implements OnInit {

  override  modelSavePath = ComponentRoutingPaths.adminControl.category.save
  override modelUpdatePath = ComponentRoutingPaths.adminControl.category.update

  constructor(
    override useCaseDeleteById: CategoryUseCaseDeleteById,
    override useCaseGetAllPaginated: CategoryUseCaseGetAllPaginated,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.abstractOnInit()
  }



}
