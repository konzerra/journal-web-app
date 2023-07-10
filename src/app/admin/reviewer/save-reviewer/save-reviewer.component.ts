import {Component, OnInit} from '@angular/core';
import {ReviewerSaveForm} from "./reviewer.save.form";
import {Category} from "../../../domain/category/Category";
import {CategoryService} from "../../../domain/category/category.service";
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";
import {Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";

@Component({
  selector: 'app-save-reviewer',
  templateUrl: './save-reviewer.component.html',
  styleUrls: ['./save-reviewer.component.css']
})
export class SaveReviewerComponent implements OnInit {

  form = new ReviewerSaveForm()
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
    if(this.form.valid()){
      console.log(this.form.getDto())
      this.reviewerService.save(this.form.getDto()).subscribe({
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
