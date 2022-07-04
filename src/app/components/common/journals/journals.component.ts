import { Component, OnInit } from '@angular/core';
import {JournalPage} from "../../../domain/journal/JournalPage";
import {Journal} from "../../../domain/journal/Journal";
import {JournalUseCaseGetAllPaginated} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllPaginated";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent

  implements OnInit {


  modelPage : JournalPage = {
    content: new Array<Journal>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0

  }
  constructor(
    private journalUseCaseGetAllPaginated: JournalUseCaseGetAllPaginated,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.journalUseCaseGetAllPaginated.execute(this.modelPage.number).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
      }
    })
  }

  onPageChange($event: number) {
    this.journalUseCaseGetAllPaginated.execute($event).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
      }
    })
  }

  onJournalPanelClicked(id: Number) {
    this.router.navigate([ComponentRoutingPaths.common.articles])
  }
}
