import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {UserUseCaseLogin} from "../../domain/user/usecase/UserUseCaseLogin";
import {UserLoginDto} from "../../domain/user/dto/UserLoginDto";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";
import {SignInForm} from "./sign-in.form";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dialogsService:DialogsService,
    private userUseCaseLogin:UserUseCaseLogin,
    private userAuthService:AuthService,
  ) { }

  public infoParam : string = ''
  public errorParam: string = ''

  public signInForm = new SignInForm()

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.infoParam = param['info']
        }
      }
    )
  }
  onSubmit() {
    if(this.signInForm.group.valid){
      let userLoginDto:UserLoginDto = {
        email : this.signInForm.email.value ?? "",
        password : this.signInForm.password.value ?? ""
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
