import { Component, OnInit } from '@angular/core';
import {Tip} from "../../../domain/tip/Tip";

import {TipService} from "../../../domain/tip/tip.service";

@Component({
  selector: 'app-user-handbook',
  templateUrl: './user-handbook.component.html',
  styleUrls: ['./user-handbook.component.css']
})
export class UserHandbookComponent implements OnInit {

  constructor(
    private tipService: TipService
  ) { }

  ngOnInit(): void {
    this.tipService.getAll().subscribe({
      next:(v)=>{
        this.tips = v
      }
    })
  }
  tips = new Array<Tip>()
}
