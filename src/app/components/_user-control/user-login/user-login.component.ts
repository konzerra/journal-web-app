import { Component, OnInit } from '@angular/core';
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {FormControl} from "@angular/forms";
import {UserLoginDto} from "../../../domain/user/dto/UserLoginDto";
import {ActivatedRoute, Router} from "@angular/router";
import {UserUseCaseLogin} from "../../../domain/user/usecase/UserUseCaseLogin";
import {UserLoginFormGroup} from "./form-group/UserLoginFormGroup";
import {AuthService} from "../../../domain/auth/auth.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dialogsService:DialogsService,
    private userUseCaseLogin:UserUseCaseLogin,
    private userAuthService:AuthService
  ) { }

  public infoParam : string = ''
  public errorParam: string = ''

  public formGroup:UserLoginFormGroup = new UserLoginFormGroup()

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.infoParam = param['info']
        }
      }
    )
  }
  onSubmit() {
    if(this.formGroup.formGroup.valid){
      let userLoginDto:UserLoginDto = {
        email : this.formGroup.email.value,
        password : this.formGroup.password.value
      }
      this.userUseCaseLogin.execute(userLoginDto).subscribe({
        next: (response) => {
          this.userAuthService.setData(response)
        },
        error: (e) => {
          this.errorParam = "произошла неизвестная ошибка"
          this.dialogsService.openInfoDialog(e)
        },
        complete: () => this.router.navigate([''])
      })
    }

  }
  public isInfoRegistered(){
    if(this.infoParam){
      return this.infoParam.includes('registered');
    }
    else
      return false

  }

  checkFormControl(modelName: FormControl):boolean {
    return genericCheckFormControl(modelName)
  }

}
