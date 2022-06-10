import { Component, OnInit } from '@angular/core';
import {UserProfileFormGroup} from "./form-group/UserProfileFormGroup";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {Article} from "../../../domain/article/Article";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formGroup = new UserProfileFormGroup()
  modelList = new Array<Article>()
  onSubmit() {

  }

  checkFormControl(control: FormControl) {
    return genericCheckFormControl(control)
  }
}
