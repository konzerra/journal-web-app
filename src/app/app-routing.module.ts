import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserRegisterComponent} from "./components/_user-control/user-register/user-register.component";
import {UserLoginComponent} from "./components/_user-control/user-login/user-login.component";
import {ComponentRoutingPaths} from "./components/ComponentRoutingPaths";
import {HomeComponent} from "./components/common/home/home.component";
import {ForbiddenComponent} from "./components/common/forbidden/forbidden.component";
import {UserProfileComponent} from "./components/_user-control/user-profile/user-profile.component";
import {UserHandbookComponent} from "./components/_user-control/user-handbook/user-handbook.component";
import {UserArticlesComponent} from "./components/common/user-articles/user-articles.component";
import {UserPublishComponent} from "./components/_user-control/user-publish/user-publish.component";

const routes : Routes = [
  {path:``, component: HomeComponent},
  {path:ComponentRoutingPaths.common.articles, component: UserArticlesComponent},
  {path:`forbidden`, component: ForbiddenComponent},
  {path:`${ComponentRoutingPaths.userControl.login}`, component: UserLoginComponent},
  {path:`${ComponentRoutingPaths.userControl.register}`, component: UserRegisterComponent},
  //User control
  //data:{role:'User'}

  {path:`${ComponentRoutingPaths.userControl.profile}`, component: UserProfileComponent, },
  {path:`${ComponentRoutingPaths.userControl.handbook}`, component: UserHandbookComponent, },
  {path:`${ComponentRoutingPaths.userControl.publish}`, component: UserPublishComponent, },
  //Admin control
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
