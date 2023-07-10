import { Component, OnInit } from '@angular/core';
import {ReviewerUpdateFormGroup} from "./form-group/ReviewerUpdateFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {Category} from "../../../../domain/category/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryService} from "../../../../domain/category/category.service";
import {ReviewerService} from "../../../../domain/reviewer/reviewer.service";

@Component({
  selector: 'app-reviewr-editor-update',
  templateUrl: './reviewer-editor-update.component.html',
  styleUrls: ['./reviewer-editor-update.component.css']
})
export class ReviewerEditorUpdateComponent implements OnInit {

  formGroup = new ReviewerUpdateFormGroup()

  categoryList = new Array<Category>()

  constructor(
    private categoryService: CategoryService,
    private reviewerService: ReviewerService,
    private router:Router,
    private route:ActivatedRoute,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.reviewerService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.dialogsService.openInfoDialog(err)
            },
            complete:()=>{

              this.categoryService.getAll().subscribe({
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
    this.reviewerService.update(this.formGroup.getDto()).subscribe({
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      },
      complete:()=>{
        this.dialogsService.openInfoDialog("Обновлено")
        this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])
      }
    })
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.main])

  }

  onCategoryChanged($event: Category | null) {
    this.formGroup.category = $event
  }
}
