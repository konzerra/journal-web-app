import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WordCountValidators} from "../../_generic/util/WordValidators";


export class SignUpForm {
  name: FormControl =  new FormControl("", [Validators.required, WordCountValidators.min(2)])
  email: FormControl =  new FormControl("", Validators.email)
  password: FormControl<string | null> =  new FormControl("", [Validators.required, Validators.minLength(6)])


  group:FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password
  })
}
