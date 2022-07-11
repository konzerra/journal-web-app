import {FormControl, Validators} from "@angular/forms";
import {ReviewerSaveDto} from "../../../../../domain/reviewer/dto/ReviewerSaveDto";

export class ReviewerSaveFormGroup {

  email = new FormControl("", Validators.required)
  categoryId = new FormControl<Number>(0,Validators.required)

  getDto():ReviewerSaveDto{
    return {
      categoryId: this.categoryId.value  || 0,
      email: this.email.value || ""
    }
  }
  valid():boolean{
    return this.email.valid && this.categoryId.valid
  }
}
