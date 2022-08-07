import {Injectable} from "@angular/core";
import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {ArticleUpdateDtoByAdmin} from "../dto/ArticleUpdateDtoByAdmin";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../ArticleApi";
import {ArticleFull} from "../ArticleFull";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {Article} from "../Article";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ArticleUseCaseGetMyArticles
{
  private apiPath: string =ArticleApi.paths.getMyArticles

  private requestHeader: HttpHeaders = new HttpHeaders();
  constructor(private httpClient: HttpClient) {

  }
  execute(id:Number): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>(ApiPathUtil.insertId(this.apiPath,id.toString()),{
      headers: this.requestHeader
    })
  }

}
