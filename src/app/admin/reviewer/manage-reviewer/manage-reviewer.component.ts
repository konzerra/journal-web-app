import {Component, OnInit} from '@angular/core';
import {AdminReviewerService} from "../admin.reviewer.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../shared/models/pagination/PageRequestDto";
import {ReviewerPage} from "../../../domain/reviewer/ReviewerPage";
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";
import {Reviewer} from "../../../domain/reviewer/Reviewer";

@Component({
  selector: 'app-manage-reviewer',
  templateUrl: './manage-reviewer.component.html',
  styleUrls: ['./manage-reviewer.component.css']
})
export class ManageReviewerComponent implements OnInit {

  constructor(
    private reviewerService: AdminReviewerService,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {

  }

  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  modelPage: ReviewerPage = {
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
    this.reviewerService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{

        }
      })
  }



  onAddClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.save])
  }

  onDeleteClicked(model: Reviewer, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.reviewerService.deleteById(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }
  onEdit(model: Reviewer) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.reviewer.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.reviewerService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }


}
