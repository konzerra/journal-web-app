import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryUpdateDto} from "../../../../domain/category/dto/CategoryUpdateDto";
import {CategoryUpdateFormGroup} from "./form-group/CategoryUpdateFormGroup";
import {Reviewer} from "../../../../domain/reviewer/Reviewer";

import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {CategoryService} from "../../../../domain/category/category.service";
import {ReviewerService} from "../../../../domain/reviewer/reviewer.service";

@Component({
  selector: 'app-category-editor-update',
  templateUrl: './category-editor-update.component.html',
  styleUrls: ['./category-editor-update.component.css']
})
export class CategoryEditorUpdateComponent
  implements OnInit {
  formGroup = new CategoryUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]
  updateDisabled: boolean = false;
  queue = Array<Reviewer>()

  constructor(
    protected route: ActivatedRoute,
    private categoryService: CategoryService,
    private reviewerService : ReviewerService,
    private router:Router,
    protected dialogsService: DialogsService
  ) {

  }




  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.categoryService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
              this.dialogsService.openInfoDialog(err)
            }
          })
          this.reviewerService.getQueueByCategory(param["id"]).subscribe({
            next:(v)=>{
              this.queue = v
              console.log(this.queue)
            }
          })
        }
      }
    )

  }

  onSubmit() {
    this.updateDisabled = true
    if (this.formGroup.valid()) {
      const updateDto:CategoryUpdateDto = this.formGroup.getDto()
      this.categoryService.update(updateDto).subscribe({
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.updateDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('Обновлено')
          this.updateDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
        }
      })
    }else{
      this.updateDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(name: FormControl): boolean {
    return genericCheckFormControl(name)
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }


}
