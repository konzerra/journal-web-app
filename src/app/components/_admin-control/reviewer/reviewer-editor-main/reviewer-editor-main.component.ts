import { Component, OnInit } from '@angular/core';
import {Reviewer} from "../../../../domain/reviewer/Reviewer";
import {
  GenericModelEditorMainComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorMainComponent";
import {Category} from "../../../../domain/category/Category";
import {CategoryPage} from "../../../../domain/category/CategoryPage";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryUseCaseDeleteById} from "../../../../domain/category/usecase/CategoryUseCaseDeleteById";
import {CategoryUseCaseGetAllPaginated} from "../../../../domain/category/usecase/CategoryUseCaseGetAllPaginated";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ReviewerPage} from "../../../../domain/reviewer/ReviewerPage";
import {ReviewerUseCaseDeleteById} from "../../../../domain/reviewer/usecase/ReviewerUseCaseDeleteById";
import {ReviewerUseCaseGetAllPaginated} from "../../../../domain/reviewer/usecase/ReviewerUseCaseGetAllPaginated";

@Component({
  selector: 'app-reviewer-editor-main',
  templateUrl: './reviewer-editor-main.component.html',
  styleUrls: ['./reviewer-editor-main.component.css']
})
export class ReviewerEditorMainComponent
  extends GenericModelEditorMainComponent<Reviewer, ReviewerPage>
  implements OnInit {

  override  modelSavePath = ComponentRoutingPaths.adminControl.reviewer.save
  override modelUpdatePath = ComponentRoutingPaths.adminControl.reviewer.update

  constructor(
    override useCaseDeleteById: ReviewerUseCaseDeleteById,
    override useCaseGetAllPaginated: ReviewerUseCaseGetAllPaginated,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.abstractOnInit()
  }



}
