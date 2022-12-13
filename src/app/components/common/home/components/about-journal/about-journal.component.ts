import { Component, OnInit } from '@angular/core';
import {AppLanguage} from "../../../../../AppLanguage";

@Component({
  selector: 'app-about-journal',
  templateUrl: './about-journal.component.html',
  styleUrls: ['./about-journal.component.css']
})
export class AboutJournalComponent implements OnInit {
  locale:string
  constructor() {
    this.locale = AppLanguage.getLocalLanguage().toLowerCase()
  }

  ngOnInit(): void {
  }

}
