import { Component, OnInit } from '@angular/core';
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
import {TipUseCaseDeleteById} from "../../../../domain/tip/usecase/TipUseCaseDeleteById";
import {Tip} from "../../../../domain/tip/Tip";
import {TipPage} from "../../../../domain/tip/TipPage";
import {TipUseCaseGetAllPaginated} from "../../../../domain/tip/usecase/TipUseCaseGetAllPaginated";

@Component({
  selector: 'app-tip-editor-main',
  templateUrl: './tip-editor-main.component.html',
  styleUrls: ['./tip-editor-main.component.css']
})
export class TipEditorMainComponent
  extends GenericModelEditorMainComponent<Tip, TipPage>
  implements OnInit {

  override  modelSavePath = ComponentRoutingPaths.adminControl.tip.save
  override modelUpdatePath = ComponentRoutingPaths.adminControl.tip.update

  constructor(
    override useCaseDeleteById: TipUseCaseDeleteById,
    override useCaseGetAllPaginated: TipUseCaseGetAllPaginated,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.abstractOnInit()
  }



}
