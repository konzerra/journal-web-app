import {FormControl, FormGroup} from "@angular/forms";

export class UserProfileFormGroup {
  name = new FormControl()
  formGroup = new FormGroup({
    name : this.name
  })
}
