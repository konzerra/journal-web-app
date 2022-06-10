import {GenericSaveFormGroup} from "../../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class UserRegisterFormGroup extends GenericSaveFormGroup{
  name: FormControl =  new FormControl("", Validators.required)
  email: FormControl =  new FormControl("", Validators.required)
  password: FormControl =  new FormControl("", Validators.required)


  formGroup:FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password
  })


}
