import { Component, OnInit } from '@angular/core';
import {DialogsService} from "../../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../../ComponentRoutingPaths";
import {AppLanguage} from "../../../../AppLanguage";
import {MarkdownService} from "../../../../shared/services/markdown.service";

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  pages = new Array<{ id: string, name: string }>()
  locale:string
  constructor(
    private markdownService: MarkdownService,
    private dialogsService: DialogsService,
    private router: Router,

  ) {
    this.locale = AppLanguage.getLocalLanguage().toLowerCase()
  }

  ngOnInit(): void {

    this.markdownService.getAllNames().subscribe({
      next:(v)=>{

        this.pages = v
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog('server_not_responding')
      }
    })
  }

  onMarkdownPageClicked(id: string) {
    this.router.navigate(
      ['/markdown'],
      {queryParams: {id: id}}
    )
  }
}
