import {Component, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {JournalPage} from "../../../domain/journal/JournalPage";
import {Journal} from "../../../domain/journal/Journal";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {
  JournalUseCaseGetAllPaginatedByStatus
} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllPaginatedByStatus";

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
    size: 5,
    totalElements: 0,
    totalPages: 0

  }
  constructor(
    private journalUseCaseGetAllPaginatedByStatus: JournalUseCaseGetAllPaginatedByStatus,
    private router:Router,
    private sanitizer:Sanitizer
  ) { }

  ngOnInit(): void {
    this.journalUseCaseGetAllPaginatedByStatus.execute(this.modelPage.number, this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
        console.log(this.modelPage)
      }
    })
  }

  onPageChange($event: number) {
    this.journalUseCaseGetAllPaginatedByStatus.execute($event-1,this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage

      }
    })
  }

  onJournalPanelClicked(id: Number) {
    this.router.navigate([ComponentRoutingPaths.common.articles],{
      queryParams:{
        id:id
      }
    })
  }
}
