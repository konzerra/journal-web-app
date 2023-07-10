import { Component, OnInit } from '@angular/core';
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";
import {Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {PageRequestDto} from "../../../shared/models/pagination/PageRequestDto";
import {JournalPage} from "../../../shared/models/journal/JournalPage";
import {Journal} from "../../../shared/models/journal/Journal";
import {AdminJournalService} from "../admin-journal.service";

@Component({
  selector: 'app-manage-journal',
  templateUrl: './manage-journal.component.html',
  styleUrls: ['./manage-journal.component.css']
})
export class ManageJournalComponent implements OnInit {

  constructor(
    private journalService: AdminJournalService,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {

  }

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property: "id",
        direction: "desc"
      }
    ]
  }
  modelPage: JournalPage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }
  ngOnInit(): void {
    this.journalService.getPaginated(this.pageRequestDto).subscribe(
      {
        next: (modelPage) => {
          this.modelPage = modelPage
        },
        error: (err) => {
          this.dialogsService.openInfoDialog(err)
        }
      })
  }



  onAddClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.save])
  }

  onDeleteClicked(model: Journal, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.journalService.deleteById(model.id.toString()).subscribe({
            complete: () => {
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index, 1)
            },
            error: (err) => {
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }
  onEdit(model: Journal) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.journal.update],
      { queryParams: { id: JSON.stringify(model.id) } }
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event - 1
    this.journalService.getPaginated(this.pageRequestDto).subscribe(
      {
        next: (modelPage) => {
          this.modelPage = modelPage
        },
        error: () => {

        },
        complete: () => {

        }
      })
  }

  onJournalClicked(index: number) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.article.main],
      { queryParams: { model: JSON.stringify(this.modelPage.content[index]) } }
    )
  }
}