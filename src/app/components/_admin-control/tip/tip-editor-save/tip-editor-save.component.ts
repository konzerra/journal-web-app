import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorSaveComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipUseCaseSave} from "../../../../domain/tip/usecase/TipUseCaseSave";
import {TipData} from "../../../../domain/tip/TipData";
import {TipDataControls} from "../_common/TipDataControls";
import {TipSaveDto} from "../../../../domain/tip/dto/TipSaveDto";
import {TipSaveFormGroup} from "./form-group/CategorySaveFormGroup";

@Component({
  selector: 'app-tip-editor-save',
  templateUrl: './tip-editor-save.component.html',
  styleUrls: ['./tip-editor-save.component.css']
})
export class TipEditorSaveComponent
  extends GenericModelEditorSaveComponent<
    TipData,
    TipDataControls,
    TipSaveDto>
  implements OnInit {

  formGroup = new TipSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    override saveUseCase: TipUseCaseSave
  ) {
    super();
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

}
