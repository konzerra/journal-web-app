import {FormControl, Validators} from "@angular/forms";
import {ReviewerSaveDto} from "../../../../../domain/reviewer/dto/ReviewerSaveDto";
import {Reviewer} from "../../../../../domain/reviewer/Reviewer";
import {ReviewerUpdateDto} from "../../../../../domain/reviewer/dto/ReviewerUpdateDto";
import {Category} from "../../../../../domain/category/Category";

export class ReviewerUpdateFormGroup {

  category : Category | null = null
  active = new FormControl<boolean>(false, Validators.required)

  reviewer!:Reviewer

  setDto(model: Reviewer){
    this.reviewer = model
    this.active.setValue(model.active)
  }
  getDto():ReviewerUpdateDto{
    return {
      id: this.reviewer.id,
      active: this.active.value || false,
      categoryId: this.category?.id || 0,
    }
  }
  valid():boolean{
    return this.active.valid && (this.category !=null)
  }
}
