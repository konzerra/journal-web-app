import {FormControl, Validators} from "@angular/forms";
import {Reviewer} from "../../../domain/reviewer/Reviewer";
import {ReviewerUpdateDto} from "../_models/ReviewerUpdateDto";
import {Category} from "../../../domain/category/Category";

export class ReviewerUpdateForm {

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
