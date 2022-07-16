import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorUpdateComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorUpdateComponent";
import {JournalData} from "../../../../domain/journal/JournalData";
import {JournalDataControls} from "../../journal/common/JournalDataControls";
import {JournalUpdateDto} from "../../../../domain/journal/dto/JournalUpdateDto";
import {ActivatedRoute, Router} from "@angular/router";
import {JournalUseCaseUpdate} from "../../../../domain/journal/usecase/JournalUseCaseUpdate";
import {JournalUseCaseGetByIdFull} from "../../../../domain/journal/usecase/get/JournalUseCaseGetByIdFull";
import {JournalUpdateFormGroup} from "../../journal/journal-editor-update/form-group/JournalUpdateFormGroup";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryData} from "../../../../domain/category/CategoryData";
import {CategoryUpdateDto} from "../../../../domain/category/dto/CategoryUpdateDto";
import {CategoryDataControls} from "../_common/CategoryDataControls";
import {CategoryUseCaseUpdate} from "../../../../domain/category/usecase/CategoryUseCaseUpdate";

import {CategoryUpdateFormGroup} from "./form-group/CategoryUpdateFormGroup";
import {CategoryUseCaseGetByIdFull} from "../../../../domain/category/usecase/CategoryUseCaseGetByIdFull";
import {Reviewer} from "../../../../domain/reviewer/Reviewer";
import {ReviewerUseCaseGetInQueue} from "../../../../domain/reviewer/usecase/get/ReviewerUseCaseGetInQueue";

@Component({
  selector: 'app-category-editor-update',
  templateUrl: './category-editor-update.component.html',
  styleUrls: ['./category-editor-update.component.css']
})
export class CategoryEditorUpdateComponent
  extends GenericModelEditorUpdateComponent<CategoryData, CategoryDataControls, CategoryUpdateDto>
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected useCaseUpdate: CategoryUseCaseUpdate,
    protected useCaseFindByIdFull : CategoryUseCaseGetByIdFull,
    private reviewerUseCaseGetInQueue : ReviewerUseCaseGetInQueue,
    private router:Router
  ) {
    super()
  }

  formGroup = new CategoryUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]
  queue = Array<Reviewer>()


  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{

            }
          })

          this.reviewerUseCaseGetInQueue.execute(param["id"]).subscribe({
            next:(v)=>{
              this.queue = v
              console.log(this.queue)
            }
          })
        }
      }
    )

  }

  protected onSuccessfulUpdate(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }

}
