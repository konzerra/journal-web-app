import { Component, OnInit } from '@angular/core';



import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {AppLanguage} from "../../AppLanguage";
import {AuthService} from "../../auth/auth.service";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {FormControl} from "@angular/forms";
import {AdminJournalRoutes} from "../../admin/journal/admin.journal.routes";
import {AdminCategoryRoutes} from "../../admin/category/admin.category.routes";
import {AdminTipRoutes} from "../../admin/tip/admin.tip.routes";
import {AdminReviewerRoutes} from "../../admin/reviewer/admin.reviewer.routes";
import {AdminMarkdownRoutes} from "../../admin/markdown/admin.markdown.routes";
import {AdminPriceRoutes} from "../../admin/price/admin.price.routes";



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
    this.router.navigate([ComponentRoutingPaths.userControl.signin])
  }
  hasRole(role:string): boolean{
    return this.userAuthService.hasRole(role)
  }

  onLangChange() {
    const lang = this.selectedLang.value ?? "kg"
    console.log(lang)
    AppLanguage.setLocalLanguage(lang)
    this.translate.use(lang);
    window.location.reload()
  }

    protected readonly AdminJournalRoutes = AdminJournalRoutes;
  protected readonly AdminCategoryRoutes = AdminCategoryRoutes;
  protected readonly AdminTipRoutes = AdminTipRoutes;
  protected readonly AdminReviewerRoutes = AdminReviewerRoutes;
  protected readonly AdminMarkdownRoutes = AdminMarkdownRoutes;
  protected readonly AdminPriceRoutes = AdminPriceRoutes;
}
