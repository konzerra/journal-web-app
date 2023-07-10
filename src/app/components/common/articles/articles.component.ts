import { Component, OnInit } from '@angular/core';

import {Journal} from "../../../shared/models/journal/Journal";
import {ArticlePage} from "../../../shared/models/article/ArticlePage";
import {ActivatedRoute} from "@angular/router";
import {JournalStatus} from "../../../shared/models/journal/JournalStatus";
import {FormControl} from "@angular/forms";

import {ArticleSearchDto} from "../../../domain/article/ArticleSearchDto";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {JournalService} from "../../../domain/journal/journal.service";
import {PageRequestDto} from "../../../shared/models/pagination/PageRequestDto";
import {ArticleService} from "../../../domain/article/article.service";
import {FileApi} from "../../../shared/models/file/FileApi";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  currentJournal : Journal | null = null
  journalList: Array<Journal> = [];
  searchInput = new FormControl<string | null>(null)

  constructor(
    private route:ActivatedRoute,
    private journalService: JournalService,
    private articleService: ArticleService,
    private dialogsService:DialogsService,
  ) { }

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
  modelPage:ArticlePage={
    content: [],
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next:(param)=>{
        let id = param['id']

        this.journalService.getAllByStatus(JournalStatus.Published).subscribe({
          next:(v)=>{
            this.journalList = v
          },
          complete:()=>{
            this.journalList.forEach( (value)=>{
              if(value.id == id){
                this.currentJournal = value
              }
            })
            if(this.currentJournal!=null){
              this.runGetJournalArticles()
            }
          }
        })
      }
    })

  }


  onJournalChanged($event: Journal | null) {
    this.currentJournal = $event
    this.runSearch()
  }

  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    this.runSearch()
  }



  onSearchChange() {
    if(this.searchInput.value != null){
      this.runSearch()
    }else{
      this.runGetJournalArticles()
    }

  }

  private runSearch(){
    let searchDto : ArticleSearchDto = {
      key:this.searchInput.value || '',
      journalId: this.currentJournal?.id || null
    }


    this.articleService.search(this.pageRequestDto.page,searchDto).subscribe({
      next:(v)=>{
        this.modelPage = v
      }
    })


  }

  private runGetJournalArticles(){
    if(this.currentJournal!=null){
      this.journalService.getPaginatedJournalArticles(
        this.currentJournal.id,
        this.pageRequestDto
      ).subscribe({
        next:(v)=>{
          this.modelPage = v
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
    }

  }

  formatAuthors(authors: Array<String>) {
    let formatted =""
    authors.forEach((author)=>{
      formatted+=author+', '
    })

    return formatted.slice(0,formatted.length-2)
  }

  protected readonly FileApi = FileApi;
}
