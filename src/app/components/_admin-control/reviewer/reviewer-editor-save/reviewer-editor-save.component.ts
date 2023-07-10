import { Component, OnInit } from '@angular/core';
import {ReviewerSaveFormGroup} from "./form-group/ReviewerSaveFormGroup";
import {Category} from "../../../../domain/category/Category";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../../shared/dialogs/dialogs.service";
import {CategoryService} from "../../../../domain/category/category.service";
import {ReviewerService} from "../../../../domain/reviewer/reviewer.service";

@Component({
  selector: 'app-reviewer-editor-save',
  templateUrl: './reviewer-editor-save.component.html',
  styleUrls: ['./reviewer-editor-save.component.css']
})
export class ReviewerEditorSaveComponent implements OnInit {

  formGroup = new ReviewerSaveFormGroup()
  categoryList = new Array<Category>()
  constructor(
    private categoryService: CategoryService,
    private reviewerService: ReviewerService,
    private router: Router,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
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
      this.reviewerService.save(this.formGroup.getDto()).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Сохранено")
          this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
    }
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])
  }
}
