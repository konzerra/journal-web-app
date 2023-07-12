import {Component, OnInit} from '@angular/core';
import {TipService} from "../../shared/services/tip.service";
import {Tip} from "../../domain/tip/Tip";

@Component({
  selector: 'app-handbook',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.css']
})
export class HandbookComponent implements OnInit {

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
