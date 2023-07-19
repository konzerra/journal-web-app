import {Component, OnInit} from '@angular/core';
import {PurchaseService} from "../../domain/purchase/purchase.service";
import {PageRequestDto} from "../../domain/pagination/PageRequestDto";
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
  transactionTypes = ['receipts','purchases'];
  selectedRadioButton = 'receipts';
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
    content: [
      {
        id: 0,
        sum: 500,
        articleId: 1,
        date: new Date()
      },
      {
        id: 11,
        sum: 500,
        articleId: 1,
        date: new Date()
      },
      {
        id: 22,
        sum: 500,
        articleId: 1,
        date: new Date()
      }
    ],
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
    content: [
      {
        id: 0,
        sum: 1000,
        date: new Date()
      },
      {
        id: 1,
        sum: 1000,
        date: new Date()
      },
      {
        id: 2,
        sum: 1000,
        date: new Date()
      }
    ],
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
    if(this.selectedRadioButton === "receipts"){
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
