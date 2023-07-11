import {Component, OnInit} from '@angular/core';
import {ProfileForm} from "./profile.form";
import {Article} from "../../shared/models/article/Article";
import {AuthService} from "../../domain/auth/auth.service";
import {UserUseCaseUpdate} from "../../domain/user/usecase/UserUseCaseUpdate";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {AdminArticleService} from "../../admin/article/admin.article.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../_generic/util/genericCheckFormControl";
import {UserUpdateDto} from "../../domain/user/dto/UserUpdateDto";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form = new ProfileForm()
  modelList = new Array<Article>()
  constructor(
    private userAuthService: AuthService,
    private userUseCaseUpdate: UserUseCaseUpdate,
    private dialogsService: DialogsService,
    private articleService: AdminArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let user = this.userAuthService.getUser()
    if(user!=null){
      this.form.name.setValue(user.name)
      this.articleService.getMyArticles(user.id).subscribe({
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
    if(user!=null && user.name != this.form.name.value){
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
