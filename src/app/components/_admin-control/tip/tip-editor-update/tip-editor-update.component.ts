import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorUpdateComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorUpdateComponent";
import {CategoryFull} from "../../../../domain/category/CategoryFull";
import {CategoryData} from "../../../../domain/category/CategoryData";
import {CategoryDataControls} from "../../category/_common/CategoryDataControls";
import {CategoryUpdateDto} from "../../../../domain/category/dto/CategoryUpdateDto";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryUseCaseUpdate} from "../../../../domain/category/usecase/CategoryUseCaseUpdate";
import {CategoryUseCaseGetByIdFull} from "../../../../domain/category/usecase/CategoryUseCaseGetByIdFull";
import {ReviewerUseCaseGetInQueue} from "../../../../domain/reviewer/usecase/get/ReviewerUseCaseGetInQueue";
import {CategoryUpdateFormGroup} from "../../category/category-editor-update/form-group/CategoryUpdateFormGroup";
import {Reviewer} from "../../../../domain/reviewer/Reviewer";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipFull} from "../../../../domain/tip/TipFull";
import {TipData} from "../../../../domain/tip/TipData";
import {TipDataControls} from "../_common/TipDataControls";
import {TipUpdateDto} from "../../../../domain/tip/dto/TipUpdateDto";
import {TipUseCaseUpdate} from "../../../../domain/tip/usecase/TipUseCaseUpdate";
import {TipUseCaseGetByIdFull} from "../../../../domain/tip/usecase/TipUseCaseGetByIdFull";
import {TipUpdateFormGroup} from "./form-group/TipUpdateFormGroup";
import {DialogsService} from "../../../common/dialogs/dialogs.service";

@Component({
  selector: 'app-tip-editor-update',
  templateUrl: './tip-editor-update.component.html',
  styleUrls: ['./tip-editor-update.component.css']
})
export class TipEditorUpdateComponent
  extends GenericModelEditorUpdateComponent<TipFull, TipData, TipDataControls, TipUpdateDto>
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected useCaseUpdate: TipUseCaseUpdate,
    protected useCaseFindByIdFull : TipUseCaseGetByIdFull,
    private router:Router,
    private dialogsService: DialogsService
  ) {
    super()
  }

  formGroup = new TipUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]


  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
              this.dialogsService.openInfoDialog('Не найден этот вопрос')
            }
          })
        }
      }
    )

  }

  protected onSuccessfulUpdate(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

}
