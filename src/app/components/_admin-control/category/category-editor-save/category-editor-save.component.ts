import { Component, OnInit } from '@angular/core';
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {CategorySaveDto} from "../../../../domain/category/dto/CategorySaveDto";
import {CategorySaveFormGroup} from "./form-group/CategorySaveFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {CategoryService} from "../../../../domain/category/category.service";

@Component({
  selector: 'app-category-editor-save',
  templateUrl: './category-editor-save.component.html',
  styleUrls: ['./category-editor-save.component.css']
})
export class CategoryEditorSaveComponent
  implements OnInit {

  formGroup = new CategorySaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]
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
    if (this.formGroup.valid()) {
      const saveDto:CategorySaveDto = this.formGroup.getDto()
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
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }

}
