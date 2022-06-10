import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegisterFormGroup} from "./form-group/UserRegisterFormGroup";
import {UserRegisterDto} from "../../../domain/user/dto/UserRegisterDto";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {UserUseCaseRegister} from "../../../domain/user/usecase/UserUseCaseRegister";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userUseCaseRegister:UserUseCaseRegister
  ) { }
  public infoParam : string = ''
  public errorParam: string = ''
  public formGroup:UserRegisterFormGroup = new UserRegisterFormGroup()
  ngOnInit(): void {
  }

  onSubmit() {
    let userRegisterDto:UserRegisterDto = {
      name : this.formGroup.name.value,
      email : this.formGroup.email.value,
      password : this.formGroup.password.value
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
  }
  checkFormControl(modelName: FormControl):boolean {
    return genericCheckFormControl(modelName)
  }

}
