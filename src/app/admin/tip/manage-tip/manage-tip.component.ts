import {Component, OnInit} from '@angular/core';
import {AdminTipService} from "../admin.tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../shared/models/pagination/PageRequestDto";
import {TipPage} from "../../../domain/tip/TipPage";
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";
import {Tip} from "../../../domain/tip/Tip";

@Component({
  selector: 'app-manage-tip',
  templateUrl: './manage-tip.component.html',
  styleUrls: ['./manage-tip.component.css']
})
export class ManageTipComponent implements OnInit {

  constructor(
    private tipService: AdminTipService,
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
  modelPage: TipPage = {
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
    this.tipService.getPaginated(this.pageRequestDto).subscribe(
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
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.save])
  }

  onDeleteClicked(model: Tip, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.tipService.deleteById(model.id.toString()).subscribe({
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
  onEdit(model: Tip) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.tip.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.tipService.getPaginated(this.pageRequestDto).subscribe(
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
