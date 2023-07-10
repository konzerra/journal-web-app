import {Component, OnInit} from '@angular/core';
import {
  CategorySaveForm
} from "./category.save.form";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../domain/category/category.service";
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";
import {CategorySaveDto} from "../../../domain/category/dto/CategorySaveDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.css']
})
export class SaveCategoryComponent implements OnInit {

  form = new CategorySaveForm();
  selectedRadioButton = this.form.requiredLangs[0]
  saveDisabled =  false;

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {

  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
  }

  onSubmit() {
    this.saveDisabled = true
    if (this.form.valid()) {
      const saveDto:CategorySaveDto = this.form.getDto()
      this.categoryService.save(saveDto).subscribe({
        next:() =>{

        },
        error:(error)=>{
          this.saveDisabled = false
          alert(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.category.main])
        }
      })
    }else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.form.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }
}
