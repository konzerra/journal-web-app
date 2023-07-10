import {Component, OnInit} from '@angular/core';
import {JournalPage} from "../../../domain/journal/JournalPage";
import {Journal} from "../../../domain/journal/Journal";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {DialogsService} from "../dialogs/dialogs.service";
import {JournalService} from "../../../domain/journal/journal.service";
import {JournalStatus} from "../../../domain/journal/JournalStatus";
import {PageRequestDto} from "../../../domain/pagination/PageRequestDto";
import {FileApi} from "../../../domain/file/FileApi";

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent

  implements OnInit {
  private modelPageSize = 5

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: this.modelPageSize,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }


  modelPage : JournalPage = {
    content: new Array<Journal>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: this.modelPageSize,
    totalElements: 0,
    totalPages: 0

  }

  constructor(
    private journalService: JournalService,
    private router:Router,
    private dialogsService: DialogsService,
  ) { }

  ngOnInit(): void {
    this.journalService.getPaginatedByStatus(JournalStatus.Published,this.pageRequestDto).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
      }
    })
  }

  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.journalService.getPaginatedByStatus(JournalStatus.Published,this.pageRequestDto).subscribe({
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


  protected readonly FileApi = FileApi;
}
