
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JournalApi} from "../../JournalApi";
import {ArticlePage} from "../../../article/ArticlePage";
import {Article} from "../../../article/Article";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../../../_generic/util/ApiPathUtil";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetAllPublishedArticlesPaginated {
  constructor(
    private httpClient:HttpClient
  ) {}
  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});

  execute(journalId:Number, pageNumber:Number,pageSize:Number):Observable<ArticlePage>{
    let apiPath = ApiPathUtil.insertPageNumberAndSize(
      JournalApi.paths.getAllArticlesPaginated,
      pageNumber.toString(),
      pageSize.toString()
    )
    apiPath = ApiPathUtil.insertId(apiPath,journalId.toString())
    console.log(apiPath)
    return this.httpClient.get<ArticlePage>(apiPath,{
      headers: this.requestHeader,
    })
  }
}
