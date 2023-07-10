import { Component, OnInit } from '@angular/core';



import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {AppLanguage} from "../../AppLanguage";
import {AuthService} from "../../auth/auth.service";
import {ComponentRoutingPaths} from "../../components/ComponentRoutingPaths";
import {FormControl} from "@angular/forms";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs = Object.values(AppLanguage.languages)
  selectedLang = new FormControl<string>(AppLanguage.languages.Ru)
  constructor(
    private userAuthService:AuthService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let lang = AppLanguage.getLocalLanguage()
    this.selectedLang.setValue(  lang)
    this.translate.use(lang);
  }

  onProfileClicked(){
    if(this.userAuthService.isLoggedIn()){
      this.router.navigate([ComponentRoutingPaths.userControl.profile])
      return
    }
    this.router.navigate([ComponentRoutingPaths.userControl.login])
  }
  hasRole(role:string): boolean{
    return this.userAuthService.hasRole(role)
  }

  onLangChange() {
    const lang = this.selectedLang.value ?? AppLanguage.languages.Default
    AppLanguage.setLocalLanguage(lang)
    this.translate.use(lang);
    window.location.reload()
  }
}
