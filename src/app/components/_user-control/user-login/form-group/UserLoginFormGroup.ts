import {GenericSaveFormGroup} from "../../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";


export class UserLoginFormGroup{
  email: FormControl =  new FormControl("", [Validators.required, Validators.email]);
  password: FormControl = new FormControl("", Validators.required);

  formGroup:FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })


}
