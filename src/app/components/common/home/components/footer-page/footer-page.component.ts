import { Component, OnInit } from '@angular/core';
import {MarkdownUseCaseGetAllNames} from "../../../../../domain/Markdown/usecase/get/MarkdownUseCaseGetAllNames";
import {DialogsService} from "../../../dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../../ComponentRoutingPaths";
import {AppLanguage} from "../../../../../AppLanguage";

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  pagesName = new Array<string>()
  locale:string
  constructor(
    private markdownUseCaseGetAllNames: MarkdownUseCaseGetAllNames,
    private dialogsService: DialogsService,
    private router: Router,

  ) {
    this.locale = AppLanguage.getLocalLanguage().toLowerCase()
  }

  ngOnInit(): void {

    this.markdownUseCaseGetAllNames.execute().subscribe({
      next:(v)=>{
        console.log(v)
        this.pagesName = v
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog('server_not_responding')
      }
    })
  }

  onMarkdownPageClicked(name: string) {
    this.router.navigate(
      [ComponentRoutingPaths.common.markdown],
      {queryParams: {name: name}}
    )
  }
}
