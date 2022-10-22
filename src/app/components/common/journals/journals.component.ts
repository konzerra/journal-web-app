import {Component, OnInit} from '@angular/core';
import {JournalPage} from "../../../domain/journal/JournalPage";
import {Journal} from "../../../domain/journal/Journal";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../ComponentRoutingPaths";
import {
  JournalUseCaseGetAllPaginatedByStatus
} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllPaginatedByStatus";
import {DocUseCaseDownload} from "../../../domain/doc/usecase/DocUseCaseDownload";
import {saveAs} from "file-saver";
import {DialogsService} from "../dialogs/dialogs.service";
import {ImageUseCaseGetById} from "../../../domain/image/usecase/ImageUseCaseGetById";

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent

  implements OnInit {

  private modelPageSize = 5
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
  images = new Array<string | null>(this.modelPageSize)
  constructor(
    private journalUseCaseGetAllPaginatedByStatus: JournalUseCaseGetAllPaginatedByStatus,
    private router:Router,
    private docUseCaseDownload:DocUseCaseDownload,
    private dialogsService: DialogsService,
    private imageUseCaseGetById: ImageUseCaseGetById
  ) { }

  ngOnInit(): void {
    this.journalUseCaseGetAllPaginatedByStatus.execute(this.modelPage.number, this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
        this.runImageSearch()
        console.log(this.modelPage)
      }
    })
  }

  onPageChange($event: number) {
    this.journalUseCaseGetAllPaginatedByStatus.execute($event-1,this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
        this.runImageSearch()
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

  onDocDownload(id: Number | null) {
    if(id==null){
      this.dialogsService.openInfoDialog('can_not_download')
      return
    }
    this.docUseCaseDownload.execute(id).subscribe({
      next:(file)=>{
        saveAs(file,"journal-thing")
      }
    })
  }

  private runImageSearch() {
    this.modelPage.content.forEach((journal,index)=>{
      if(journal.imageId != null){
        this.imageUseCaseGetById.execute(journal.imageId).subscribe({
          next:(v)=>{
            console.log(v)
            this.images[index] = v
          }
        })
      }
    })
  }
}
