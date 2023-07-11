import {FormControl, FormGroup, Validators} from "@angular/forms";


export class SignInForm {
  email: FormControl =  new FormControl("", [Validators.required, Validators.email]);
  password: FormControl = new FormControl("", Validators.required);

  group:FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })


}
