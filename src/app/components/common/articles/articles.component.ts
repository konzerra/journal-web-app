import { Component, OnInit } from '@angular/core';

import {Journal} from "../../../domain/journal/Journal";
import {ArticlePage} from "../../../domain/article/ArticlePage";
import {
  JournalUseCaseGetAllPublishedArticlesPaginated
} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllPublishedArticlesPaginated";
import {JournalUseCaseGetAllByStatus} from "../../../domain/journal/usecase/get/JournalUseCaseGetAllByStatus";
import {ActivatedRoute} from "@angular/router";
import {JournalStatus} from "../../../domain/journal/JournalStatus";
import {FormControl} from "@angular/forms";
import {ArticleUseCaseSearch} from "../../../domain/article/usecase/ArticleUseCaseSearch";
import {ArticleSearchDto} from "../../../domain/article/ArticleSearchDto";

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
    private journalUseCaseGetAllByStatus: JournalUseCaseGetAllByStatus,
    private journalUseCaseGetAllPublishedArticles: JournalUseCaseGetAllPublishedArticlesPaginated,
    private articleUseCaseSearch: ArticleUseCaseSearch
  ) { }
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

        this.journalUseCaseGetAllByStatus.execute(JournalStatus.Published).subscribe({
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
    this.modelPage.number = 0
    this.runSearch()
  }

  onPageChange($event: number) {
    this.modelPage.number = $event-1
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


    this.articleUseCaseSearch.execute(this.modelPage.number,searchDto).subscribe({
      next:(v)=>{
        this.modelPage = v
      }
    })


  }

  private runGetJournalArticles(){
    if(this.currentJournal!=null){
      this.journalUseCaseGetAllPublishedArticles.execute(
        this.currentJournal.id,
        this.modelPage.number,
        this.modelPage.size
      ).subscribe({
        next:(v)=>{
          this.modelPage = v
        },
        error:(err)=>{

        }
      })
    }

  }
}
