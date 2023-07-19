import {Component, OnInit} from '@angular/core';
import {Receipt} from "../../domain/receipt/Receipt";
import {Purchase} from "../../domain/purchase/Purchase";
import {PurchaseService} from "../../domain/purchase/purchase.service";
import {PageRequestDto} from "../../domain/pagination/PageRequestDto";
import {TipPage} from "../../domain/tip/TipPage";
import {PurchasePage} from "../../domain/purchase/PurchasePage";
import {AuthService} from "../../auth/auth.service";
import {ReceiptService} from "../../domain/receipt/receipt.service";
import {ReceiptPage} from "../../domain/receipt/ReceiptPage";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  transactionTypes = ['receipt','purchase'];
  selectedRadioButton = 'receipt';
  receipts: Array<Receipt> = [];
  purchases: Array<Purchase> = []
  userId: number = 0

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private receiptService: ReceiptService
  ) {
  }

  purchasePageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  purchasePage: PurchasePage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }

  receiptPageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  receiptPage: ReceiptPage = {
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
    this.userId = this.authService.getUser()?.id.valueOf() || 0
    if(this.userId == 0){
      return
    }
    this.purchaseService.getPaginatedByUserId(this.purchasePageRequestDto, this.userId).subscribe({
      next:(value)=>{
        this.purchasePage = value
      }
    })

    this.receiptService.getPaginatedByUserId(this.receiptPageRequestDto, this.userId).subscribe({
      next:(value)=>{
        this.receiptPage = value
      }
    })
  }

  onTransactionTypeChange(type: string) {
    this.selectedRadioButton = type
  }
  onPageChange($event: number) {
    let page = $event-1
    if(this.selectedRadioButton === "receipt"){
      this.getReceiptPage(page)
    }else{
      this.getPurchasePage(page)
    }
  }
  private getReceiptPage(page:number){
    this.receiptPageRequestDto.page = page
    this.receiptService.getPaginatedByUserId(this.receiptPageRequestDto,this.userId).subscribe(
      {
        next:(modelPage)=>{
          this.receiptPage = modelPage
        }
      })
  }

  private getPurchasePage(page:number){
    this.purchasePageRequestDto.page = page
    this.purchaseService.getPaginatedByUserId(this.purchasePageRequestDto,this.userId).subscribe(
      {
        next:(modelPage)=>{
          this.purchasePage = modelPage
        }
      })
  }

}
