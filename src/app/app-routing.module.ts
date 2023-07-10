import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/common/home/home.component";
import {ForbiddenComponent} from "./components/common/forbidden/forbidden.component";


const routes : Routes = [
  {path:``, component: HomeComponent},
  {path:`forbidden`, component: ForbiddenComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
