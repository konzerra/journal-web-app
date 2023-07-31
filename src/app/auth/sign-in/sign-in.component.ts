import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {AuthSigninDto} from "../_models/auth.signin.dto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";

import {AuthService} from "../auth.service";
import {SignInForm} from "./sign-in.form";
import {AuthRoutes} from "../auth.routes";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dialogsService:DialogsService,
    private authService:AuthService
  ) { }

  public infoParam : string = ''
  public errorParam: string = ''

  public form:SignInForm = new SignInForm()
  public signinDisabled = false

  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.infoParam = param['info']
        }
      }
    )
  }
  onSubmit() {
    this.signinDisabled = true
    if(this.form.group.valid){
      let userLoginDto:AuthSigninDto = {
        email : this.form.email.value,
        password : this.form.password.value
      }
      this.authService.signin(userLoginDto).subscribe({
        next: (response) => {
          this.authService.setData(response)
        },
        error: (e) => {
          this.errorParam = "произошла неизвестная ошибка"
          this.signinDisabled = false
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

    protected readonly AuthRoutes = AuthRoutes;
}
