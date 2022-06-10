import { Component, OnInit } from '@angular/core';
import {Tip} from "../../../domain/tip/Tip";

@Component({
  selector: 'app-user-handbook',
  templateUrl: './user-handbook.component.html',
  styleUrls: ['./user-handbook.component.css']
})
export class UserHandbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  tips = new Array<Tip>(
    {
      id:0,
      question:"How to do that?",
      answer:"That's how we do that"
    },
    {
      id:2,
      question:"How to do that?",
      answer:"That's how we do that"
    },
    {
      id:3,
      question:"How to do that?",
      answer:"That's how we do that"
    },
  );
}
