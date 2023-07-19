import {Component, OnInit} from '@angular/core';
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/pagination/PageRequestDto";
import {PriceService} from "../../../domain/price/price.service";
import {PricePage} from "../../../domain/price/PricePage";
import {AdminPriceRoutes} from "../admin.price.routes";
import {Price} from "../../../domain/price/Price";

@Component({
  selector: 'app-manage-price',
  templateUrl: './manage-price.component.html',
  styleUrls: ['./manage-price.component.css']
})
export class ManagePriceComponent implements OnInit {

  constructor(
    private priceService: PriceService,
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
  modelPage: PricePage = {
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
    this.priceService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
  }



  onAddClicked() {
    this.router.navigate([AdminPriceRoutes.save])
  }

  onDeleteClicked(model: Price, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.priceService.deleteById(model.id.toString()).subscribe({
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
  onEdit(model: Price) {
    this.router.navigate(
      [AdminPriceRoutes.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.priceService.getPaginated(this.pageRequestDto).subscribe(
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
