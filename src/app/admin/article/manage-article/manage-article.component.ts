import {Component, OnInit} from '@angular/core';
import {PageRequestDto} from "../../../domain/pagination/PageRequestDto";
import {ArticlePage} from "../../../domain/article/ArticlePage";
import {Article} from "../../../domain/article/Article";
import {Journal} from "../../../domain/journal/Journal";
import {ArticleService} from "../../../domain/article/article.service";
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {JournalService} from "../../../domain/journal/journal.service";

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.css']
})
export class ManageArticleComponent implements OnInit {

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

  modelPage : ArticlePage = {
    content: new Array<Article>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }
  journal : Journal = {
    id:0,
    name: "",
    image:"",
    version: "",
    status: "",
    pdf: "",
    articlesCount:0
  }

  status = "none"
  constructor(
    private articleService: ArticleService,
    private journalService: JournalService,
    private reviewerService: ReviewerService,
    private route:ActivatedRoute,
    private router:Router,
    private dialogsService: DialogsService
  ) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) => {
          this.journal = JSON.parse(param["model"])
          this.loadData()
        }
      }
    )
  }


  onEdit(model: Article) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.article.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }

  onDeleteClicked(model: Article, i: number) {
    this.articleService.deleteById(model.id.toString()).subscribe({
      complete:()=>{
        this.dialogsService.openInfoDialog("Удалено")
      },
      error:(err)=>{
        this.dialogsService.openInfoDialog(err)
      }
    })
  }

  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
  }

  onDistribute() {
    this.reviewerService.distribute(this.journal.id).subscribe({
      next:(data)=>{
        this.dialogsService.openInfoDialog(data.message)
      }
    })
  }
  private loadData(){
    this.journalService.getPaginatedJournalArticles(
      this.journal.id,
      this.pageRequestDto,
      this.status
    ).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
          console.log(this.modelPage)
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
  }

}
