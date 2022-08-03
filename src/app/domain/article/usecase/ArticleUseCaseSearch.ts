

import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../ArticleApi";
import {Observable} from "rxjs";
import {ArticlePage} from "../ArticlePage";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";
import {JournalApi} from "../../journal/JournalApi";
import {ArticleSearchDto} from "../ArticleSearchDto";


@Injectable({
  providedIn:'root'
})
export class ArticleUseCaseSearch {
  protected apiPath: string = ArticleApi.paths.getByIdFull

  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
  constructor(
    private httpClient: HttpClient
  ) {}

  execute(pageNumber: Number, articleSearchDto: ArticleSearchDto):Observable<ArticlePage>{
    let apiPath = ApiPathUtil.insertPageNumber(
      ArticleApi.paths.search,
      pageNumber.toString(),
    )
    return this.httpClient.post<ArticlePage>(apiPath,articleSearchDto,{
      headers: this.requestHeader,
    })
  }
}
