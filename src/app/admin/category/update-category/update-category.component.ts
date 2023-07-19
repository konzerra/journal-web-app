import {Component, OnInit} from '@angular/core';
import {CategoryUpdateForm} from "./category.update.form";
import {Reviewer} from "../../../domain/reviewer/Reviewer";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../domain/category/category.service";
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategoryUpdateDto} from "../_models/CategoryUpdateDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {AdminCategoryRoutes} from "../admin.category.routes";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  formGroup = new CategoryUpdateForm()
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
              this.router.navigate([AdminCategoryRoutes.manage])
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
          this.router.navigate([AdminCategoryRoutes.manage])
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
    this.router.navigate([AdminCategoryRoutes.manage])
  }

}
