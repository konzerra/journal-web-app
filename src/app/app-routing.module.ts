import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserRegisterComponent} from "./components/_user-control/user-register/user-register.component";
import {UserLoginComponent} from "./components/_user-control/user-login/user-login.component";
import {ComponentRoutingPaths} from "./components/ComponentRoutingPaths";
import {HomeComponent} from "./components/common/home/home.component";
import {ForbiddenComponent} from "./components/common/forbidden/forbidden.component";
import {UserProfileComponent} from "./components/_user-control/user-profile/user-profile.component";
import {UserHandbookComponent} from "./components/_user-control/user-handbook/user-handbook.component";

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
import {
  ArticleEditorUpdateComponent
} from "./components/_admin-control/article/article-editor-update/article-editor-update.component";
import {JournalsComponent} from "./components/common/journals/journals.component";
import {
  ReviewerEditorUpdateComponent
} from "./components/_admin-control/reviewer/reviewer-editor-update/reviewer-editor-update.component";
import {
  ReviewerEditorSaveComponent
} from "./components/_admin-control/reviewer/reviewer-editor-save/reviewer-editor-save.component";
import {
  ReviewerEditorMainComponent
} from "./components/_admin-control/reviewer/reviewer-editor-main/reviewer-editor-main.component";
import {
  ReviewerArticleMainComponent
} from "./components/_reviewer_control/reviewer-article-main/reviewer-article-main.component";
import {AboutComponent} from "./components/common/about/about.component";
import {
  MarkdownEditorMainComponent
} from "./components/_admin-control/markdown/markdown-editor-main/markdown-editor-main.component";
import {
  MarkdownEditorSaveComponent
} from "./components/_admin-control/markdown/markdown-editor-save/markdown-editor-save.component";
import {
  MarkdownEditorUpdateComponent
} from "./components/_admin-control/markdown/markdown-editor-update/markdown-editor-update.component";
import {EthicsComponent} from "./components/common/ethics/ethics.component";
import {BoardComponent} from "./components/common/board/board.component";
import {
  ReviewerArticleUpdateComponent
} from "./components/_reviewer_control/reviewer-article-update/reviewer-article-update.component";
import {ArticlesComponent} from "./components/common/articles/articles.component";

const routes : Routes = [
  {path:``, component: HomeComponent},
  {path:ComponentRoutingPaths.common.articles, component: ArticlesComponent},
  {path:`forbidden`, component: ForbiddenComponent},
  {path:`${ComponentRoutingPaths.common.journals}`, component: JournalsComponent},
  {path:`${ComponentRoutingPaths.common.about}`, component: AboutComponent},
  {path:`${ComponentRoutingPaths.common.ethics}`, component: EthicsComponent},
  {path:`${ComponentRoutingPaths.common.board}`, component: BoardComponent},


  //User control
  {path:`${ComponentRoutingPaths.userControl.login}`, component: UserLoginComponent},
  {path:`${ComponentRoutingPaths.userControl.register}`, component: UserRegisterComponent},
  {path:`${ComponentRoutingPaths.userControl.profile}`, component: UserProfileComponent, canActivate:[AuthGuard],  data:{role:'User'} },
  {path:`${ComponentRoutingPaths.userControl.handbook}`, component: UserHandbookComponent, },
  {path:`${ComponentRoutingPaths.userControl.publish}`, component: UserPublishComponent, canActivate:[AuthGuard], data:{role:'User'} },

  //Admin control

  //Journal
  {path:`${ComponentRoutingPaths.adminControl.journal.main}`, component: JournalEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.journal.save}`, component: JournalEditorSaveComponent,  canActivate:[AuthGuard],data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.journal.update}`, component: JournalEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},


  //Category
  {path:`${ComponentRoutingPaths.adminControl.category.main}`, component: CategoryEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.category.save}`, component: CategoryEditorSaveComponent,  canActivate:[AuthGuard],data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.category.update}`, component: CategoryEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

  //Article
  {path:`${ComponentRoutingPaths.adminControl.article.main}`, component: ArticleEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.article.update}`, component: ArticleEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},


  //Reviewer
  {path:`${ComponentRoutingPaths.adminControl.reviewer.main}`, component: ReviewerEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.reviewer.save}`, component: ReviewerEditorSaveComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.reviewer.update}`, component: ReviewerEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

  //Markdown
  {path:`${ComponentRoutingPaths.adminControl.markdown.main}`, component: MarkdownEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.markdown.save}`, component: MarkdownEditorSaveComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.markdown.update}`, component: MarkdownEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},


  //Reviewer control
  {path:`${ComponentRoutingPaths.reviewerControl.article.main}`, component: ReviewerArticleMainComponent, canActivate:[AuthGuard], data:{role:'Reviewer'}},
  {path:`${ComponentRoutingPaths.reviewerControl.article.update}`, component: ReviewerArticleUpdateComponent, canActivate:[AuthGuard], data:{role:'Reviewer'}},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
