import { Component, OnInit } from '@angular/core';
import {Reviewer} from "../../../../domain/reviewer/Reviewer";

@Component({
  selector: 'app-reviewer-editor-main',
  templateUrl: './reviewer-editor-main.component.html',
  styleUrls: ['./reviewer-editor-main.component.css']
})
export class ReviewerEditorMainComponent implements OnInit {

  constructor() { }

  modelList = new Array<Reviewer>()

  ngOnInit(): void {
  }


  onAddClicked() {

  }

  onEdit(model: Reviewer) {

  }

  onDeleteClicked(model: Reviewer) {

  }

  onDeleteClickedModal() {

  }
}
