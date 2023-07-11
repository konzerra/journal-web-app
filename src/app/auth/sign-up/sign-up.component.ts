import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserUseCaseRegister} from "../../domain/user/usecase/UserUseCaseRegister";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {UserRegisterDto} from "../../domain/user/dto/UserRegisterDto";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";
import {SignUpForm} from "./sign-up.form";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userUseCaseRegister:UserUseCaseRegister,
    private dialogsService: DialogsService
  ) { }
  public infoParam : string = ''
  public errorParam: string = ''
  public form:SignUpForm = new SignUpForm()
  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.group.valid){
      let userRegisterDto:UserRegisterDto = {
        name : this.form.name.value,
        email : this.form.email.value,
        password : this.form.password.value || ""
      }
      this.userUseCaseRegister.execute(userRegisterDto).subscribe({
        next:(response)=>{

        },
        complete:()=>{
          this.router.navigate(
            [ComponentRoutingPaths.userControl.login],
            { queryParams: { info: "registered" } })

        }
      })
    }else{
      this.dialogsService.openInfoDialog('enter_all_correctly')
    }

  }
  checkFormControl(modelName: FormControl):boolean {
    return genericCheckFormControl(modelName)
  }
}
