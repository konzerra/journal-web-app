import {Injectable} from "@angular/core";
import {UseCaseDeleteByIdAbstract} from "../../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {CategoryApi} from "../../../category/CategoryApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReviewerApi} from "../../ReviewerApi";
import {Observable} from "rxjs";
import {Journal} from "../../../journal/Journal";
import {Article} from "../../../article/Article";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseGetAllArticles {
  private apiPath: string = ReviewerApi.paths.getAllArticles
  private requestHeader: HttpHeaders = new HttpHeaders();
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(id:Number):Observable<Array<Article>>{
    let apiPath = this.apiPath.replace('{id}', id.toString())
    return this.httpClient.get<Array<Article>>(apiPath,{
      headers: this.requestHeader,
    })
  }
}



