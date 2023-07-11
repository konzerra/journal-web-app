import {Component, OnInit} from '@angular/core';
import {ResetPasswordForm} from "./reset.password.form";
import {UserUseCaseResetPassword} from "../../domain/user/usecase/UserUseCaseResetPassword";
import {UserUseCaseGeneratePasswordPin} from "../../domain/user/usecase/UserUseCaseGeneratePasswordPin";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  formGroup = new ResetPasswordForm()
  constructor(
    private resetPasswordUseCase:UserUseCaseResetPassword,
    private generatePasswordPinUseCase:UserUseCaseGeneratePasswordPin,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
  }


  checkFormControl(formControl: FormControl) : boolean{
    return genericCheckFormControl(formControl)
  }

  sendPin() {
    if(this.formGroup.email.valid){
      console.log(this.formGroup.email.value)
      this.generatePasswordPinUseCase.execute(this.formGroup.email.value || "").subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('pin_sent_to_email')
        }
      })
    }else{
      this.dialogsService.openInfoDialog('enter_email')
    }
  }

  resetPassword(){
    if( this.formGroup.valid()){
      this.resetPasswordUseCase.execute(this.formGroup.getDto()).subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("password_changed_successfully")
        }
      })
    }
  }
}
