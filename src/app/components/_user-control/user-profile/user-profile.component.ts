import { Component, OnInit } from '@angular/core';
import {UserProfileFormGroup} from "./form-group/UserProfileFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {Article} from "../../../domain/article/Article";
import {UserAuthService} from "../../../domain/user/service/UserAuthService";
import {UserUseCaseUpdate} from "../../../domain/user/usecase/UserUseCaseUpdate";
import {UserUpdateDto} from "../../../domain/user/dto/UserUpdateDto";
import {DialogsService} from "../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {ArticleUseCaseGetMyArticles} from "../../../domain/article/usecase/ArticleUseCaseGetMyArticles";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formGroup = new UserProfileFormGroup()
  modelList = new Array<Article>()
  constructor(
    private userAuthService: UserAuthService,
    private userUseCaseUpdate: UserUseCaseUpdate,
    private dialogsService: DialogsService,
    private articleUseCaseGetMyArticles: ArticleUseCaseGetMyArticles,
    private router: Router
  ) { }

  ngOnInit(): void {
    let user = this.userAuthService.getUser()
    if(user!=null){
      this.formGroup.name.setValue(user.name)
      this.articleUseCaseGetMyArticles.execute(user.id).subscribe({
        next:(v)=>{
          this.modelList = v
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
    }
  }


  onSubmit() {

  }

  checkFormControl(control: FormControl) {
    return genericCheckFormControl(control)
  }

  onProfileUpdate() {
    let user = this.userAuthService.getUser()
    if(user!=null && user.name != this.formGroup.name.value){
      let updateDto:UserUpdateDto = {
        id:user.id,
        name: user.name
      }
      this.userUseCaseUpdate.execute(updateDto).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog('updated')
        }
      })
    }

  }

  onLogout() {
    this.userAuthService.logout()
    this.router.navigate([ComponentRoutingPaths.common.home])
  }
}
