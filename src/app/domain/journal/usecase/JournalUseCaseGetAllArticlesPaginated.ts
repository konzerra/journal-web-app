import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Journal} from "../Journal";
import {JournalPage} from "../JournalPage";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JournalApi} from "../api-path/JournalApi";
import {ArticlePage} from "../../article/ArticlePage";
import {Article} from "../../article/Article";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetAllArticlesPaginated {
  constructor(
    private httpClient:HttpClient
  ) {}
  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});

  execute(journalId:Number, pageNumber:Number):Observable<ArticlePage>{
    let apiPath = ApiPathUtil.insertPageNumber(JournalApi.paths.getAllArticlesPaginated,pageNumber.toString())
    apiPath = ApiPathUtil.insertId(apiPath,journalId.toString())
    console.log(apiPath)
    return this.httpClient.get<ArticlePage>(apiPath,{
      headers: this.requestHeader,
    })
  }
}
