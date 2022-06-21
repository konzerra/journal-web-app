import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorSaveComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryData} from "../../../../domain/category/CategoryData";
import {CategoryDataControls} from "../_common/CategoryDataControls";
import {CategorySaveDto} from "../../../../domain/category/dto/CategorySaveDto";
import {CategorySaveFormGroup} from "./form-group/CategorySaveFormGroup";
import {CategoryUseCaseSave} from "../../../../domain/category/usecase/CategoryUseCaseSave";

@Component({
  selector: 'app-category-editor-save',
  templateUrl: './category-editor-save.component.html',
  styleUrls: ['./category-editor-save.component.css']
})
export class CategoryEditorSaveComponent
  extends GenericModelEditorSaveComponent<
  CategoryData,
  CategoryDataControls,
  CategorySaveDto>
  implements OnInit {

  formGroup = new CategorySaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    override saveUseCase: CategoryUseCaseSave
  ) {
    super();
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }

}
