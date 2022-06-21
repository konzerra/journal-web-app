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
import {
  JournalEditorMainComponent
} from "./components/_admin-control/journal/journal-editor-main/journal-editor-main.component";
import {
  JournalEditorSaveComponent
} from "./components/_admin-control/journal/journal-editor-save/journal-editor-save.component";
import {
  JournalEditorUpdateComponent
} from "./components/_admin-control/journal/journal-editor-update/journal-editor-update.component";
import {AuthGuard} from "./_auth/auth.guard";
import {
  CategoryEditorMainComponent
} from "./components/_admin-control/category/category-editor-main/category-editor-main.component";
import {
  CategoryEditorSaveComponent
} from "./components/_admin-control/category/category-editor-save/category-editor-save.component";
import {
  CategoryEditorUpdateComponent
} from "./components/_admin-control/category/category-editor-update/category-editor-update.component";
import {
  ArticleEditorMainComponent
} from "./components/_admin-control/article/article-editor-main/article-editor-main.component";

const routes : Routes = [
  {path:``, component: HomeComponent},
  {path:ComponentRoutingPaths.common.articles, component: UserArticlesComponent},
  {path:`forbidden`, component: ForbiddenComponent},
  {path:`${ComponentRoutingPaths.userControl.login}`, component: UserLoginComponent},
  {path:`${ComponentRoutingPaths.userControl.register}`, component: UserRegisterComponent},

  //User control
  {path:`${ComponentRoutingPaths.userControl.profile}`, component: UserProfileComponent, canActivate:[AuthGuard],  data:{role:'User'} },
  {path:`${ComponentRoutingPaths.userControl.handbook}`, component: UserHandbookComponent, },
  {path:`${ComponentRoutingPaths.userControl.publish}`, component: UserPublishComponent, canActivate:[AuthGuard], data:{role:'User'} },

  //Admin control

  //Journal
  {path:`${ComponentRoutingPaths.adminControl.journal.main}`, component: JournalEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.journal.save}`, component: JournalEditorSaveComponent,  canActivate:[AuthGuard],data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.journal.update}`, component: JournalEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.journal.updateArticles}`, component: ArticleEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

  //Category
  {path:`${ComponentRoutingPaths.adminControl.category.main}`, component: CategoryEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.category.save}`, component: CategoryEditorSaveComponent,  canActivate:[AuthGuard],data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.category.update}`, component: CategoryEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
