import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../../domain/user/service/UserAuthService";
import {FormControl} from "@angular/forms";
import {AppLanguage} from "../../../AppLanguage";
import {TranslateService} from "@ngx-translate/core";


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
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    let lang = AppLanguage.getLocalLanguage()
    this.selectedLang.setValue(  lang)
    this.translate.use(lang);
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
      this.translate.use(this.selectedLang.value);
      window.location.reload()
    }
  }
}
