import { Component, OnInit } from '@angular/core';
import {ReviewerUpdateFormGroup} from "./form-group/ReviewerUpdateFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {Category} from "../../../../domain/category/Category";
import {CategoryUseCaseGetAll} from "../../../../domain/category/usecase/CategoryUseCaseGetAll";
import {CategoryUseCaseGetByIdFull} from "../../../../domain/category/usecase/CategoryUseCaseGetByIdFull";
import {ReviewerUseCaseGetByIdFull} from "../../../../domain/reviewer/usecase/get/ReviewerUseCaseGetByIdFull";
import {ActivatedRoute, Route} from "@angular/router";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {ReviewerUseCaseUpdate} from "../../../../domain/reviewer/usecase/ReviewerUseCaseUpdate";

@Component({
  selector: 'app-reviewr-editor-update',
  templateUrl: './reviewer-editor-update.component.html',
  styleUrls: ['./reviewer-editor-update.component.css']
})
export class ReviewerEditorUpdateComponent implements OnInit {

  formGroup = new ReviewerUpdateFormGroup()

  categoryList = new Array<Category>()

  constructor(
    private categoryUseCaseGetAll: CategoryUseCaseGetAll,
    private reviewerUseCaseGetByIdFull: ReviewerUseCaseGetByIdFull,
    private reviewerUseCaseUpdate: ReviewerUseCaseUpdate,
    private route:ActivatedRoute,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.reviewerUseCaseGetByIdFull.execute(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
            },
            complete:()=>{

              this.categoryUseCaseGetAll.execute().subscribe({
                next:(categoryList)=>{
                  this.categoryList = categoryList
                },
                complete:()=>{
                  for(const category of this.categoryList){
                    if(category.id==this.formGroup.reviewer.category.id){
                      this.formGroup.category = category
                      console.log(this.formGroup.category)
                    }
                  }
                }
              })

            }
          })

        }
      }
    )


  }

  checkFormControl(formControl: FormControl):boolean {
    return genericCheckFormControl(formControl)
  }

  onSubmit() {
    if(!this.formGroup.valid()){
      this.dialogsService.openInfoDialog("Формы заполнены некорректно")
      return
    }
    this.reviewerUseCaseUpdate.execute(this.formGroup.getDto()).subscribe({
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      },
      complete:()=>{
        this.dialogsService.openInfoDialog("Обновлено")
      }
    })
  }

  onCancelClicked() {

  }

  onCategoryChanged($event: Category | null) {
    this.formGroup.category = $event
  }
}
