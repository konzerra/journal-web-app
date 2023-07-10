import { FormGroup, FormControl, Validators } from '@angular/forms';


export class SignInForm {


  email =  new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", Validators.required);

  group:FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })
}
