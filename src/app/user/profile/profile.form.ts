import {FormControl, FormGroup} from "@angular/forms";

export class ProfileForm {
  name = new FormControl()
  group = new FormGroup({
    name : this.name
  })
}
