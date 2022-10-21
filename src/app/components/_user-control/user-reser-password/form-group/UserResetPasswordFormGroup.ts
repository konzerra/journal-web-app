import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordResetDto} from "../../../../domain/user/dto/PasswordResetDto";


export class UserResetPasswordFormGroup{
  email: FormControl<string | null> =  new FormControl("", [Validators.required, Validators.email]);
  pin: FormControl<Number | null> = new FormControl(null, Validators.required)
  password: FormControl<string | null> = new FormControl("", [Validators.required, Validators.minLength(6)]);

  getDto():PasswordResetDto{
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
