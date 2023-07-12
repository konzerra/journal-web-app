import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthResetDto} from "../_models/auth.reset.dto";


export class ResetPasswordForm {
  email: FormControl<string | null> =  new FormControl("", [Validators.required, Validators.email]);
  pin: FormControl<Number | null> = new FormControl(null, Validators.required)
  password: FormControl<string | null> = new FormControl("", [Validators.required, Validators.minLength(6)]);

  getDto():AuthResetDto{
    return {
      email: this.email.value || "",
      newPassword: this.password.value || "",
      pin: this.pin.value || 0

    }
  }

  valid():boolean{
    return this.email.valid
    && this.pin.valid
    && this.password.valid
  }
}
