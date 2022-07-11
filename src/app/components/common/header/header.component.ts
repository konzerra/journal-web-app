import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../../domain/user/service/UserAuthService";
import {FormControl} from "@angular/forms";
import {AppLanguage} from "../../../AppLanguage";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs = Object.values(AppLanguage.languages)
  selectedLang = new FormControl<string>(AppLanguage.languages.Ru)

  constructor(
    private userAuthService:UserAuthService,
  ) { }

  ngOnInit(): void {
    this.selectedLang.setValue(  AppLanguage.getLocalLanguage())
  }

  isLoggedIn() {
    return this.userAuthService.isLoggedIn()
  }

  logout() {
    this.userAuthService.clear()
  }
  hasRole(role:string): boolean{
    return this.userAuthService.hasRole(role)
  }

  onLangChange() {
    if(this.selectedLang.value != null){
      AppLanguage.setLocalLanguage(this.selectedLang.value)
      window.location.reload()
    }
  }
}
