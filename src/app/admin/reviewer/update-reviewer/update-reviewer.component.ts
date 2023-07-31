import {Component, OnInit} from '@angular/core';
import {ReviewerUpdateForm} from "./reviewer.update.form";
import {Category} from "../../../domain/category/Category";
import {CategoryService} from "../../../domain/category/category.service";
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";

@Component({
  selector: 'app-update-reviewer',
  templateUrl: './update-reviewer.component.html',
  styleUrls: ['./update-reviewer.component.css']
})
export class UpdateReviewerComponent implements OnInit {

  formGroup = new ReviewerUpdateForm()

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
                    if(category.id==this.formGroup.reviewer.category?.id ){
                      this.formGroup.category = category
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
