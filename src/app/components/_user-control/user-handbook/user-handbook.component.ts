import { Component, OnInit } from '@angular/core';
import {Tip} from "../../../domain/tip/Tip";
import {TipUseCaseGetAll} from "../../../domain/tip/usecase/TipUseCaseGetAll";

@Component({
  selector: 'app-user-handbook',
  templateUrl: './user-handbook.component.html',
  styleUrls: ['./user-handbook.component.css']
})
export class UserHandbookComponent implements OnInit {

  constructor(
    private tipUseCaseGetAll: TipUseCaseGetAll
  ) { }

  ngOnInit(): void {
    this.tipUseCaseGetAll.execute().subscribe({
      next:(v)=>{
        this.tips = v
      }
    })
  }
  tips = new Array<Tip>()
}
