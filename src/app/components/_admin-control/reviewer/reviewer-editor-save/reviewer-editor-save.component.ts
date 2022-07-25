import { Component, OnInit } from '@angular/core';
import {ReviewerSaveFormGroup} from "./form-group/ReviewerSaveFormGroup";
import {Category} from "../../../../domain/category/Category";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {CategoryUseCaseGetAll} from "../../../../domain/category/usecase/CategoryUseCaseGetAll";
import {ReviewerUseCaseSave} from "../../../../domain/reviewer/usecase/ReviewerUseCaseSave";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../common/dialogs/dialogs.service";

@Component({
  selector: 'app-reviewer-editor-save',
  templateUrl: './reviewer-editor-save.component.html',
  styleUrls: ['./reviewer-editor-save.component.css']
})
export class ReviewerEditorSaveComponent implements OnInit {

  formGroup = new ReviewerSaveFormGroup()
  categoryList = new Array<Category>()
  constructor(
    private categoryUseCaseGetAll: CategoryUseCaseGetAll,
    private reviewerUseCaseSave: ReviewerUseCaseSave,
    private router: Router,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
    this.categoryUseCaseGetAll.execute().subscribe({
      next:(categories)=>{
        this.categoryList=categories
      }
    })
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }

  onSubmit() {
    if(this.formGroup.valid()){
      console.log(this.formGroup.getDto())
      this.reviewerUseCaseSave.execute(this.formGroup.getDto()).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Сохранено")
          this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])
        }
      })
    }
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])
  }
}
