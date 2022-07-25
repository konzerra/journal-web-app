import {Injectable} from "@angular/core";
import {UseCaseDeleteByIdAbstract} from "../../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {CategoryApi} from "../../../category/CategoryApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReviewerApi} from "../../ReviewerApi";
import {Observable} from "rxjs";
import {Journal} from "../../../journal/Journal";
import {Article} from "../../../article/Article";
import {Reviewer} from "../../Reviewer";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseGetByIdFull {
  private apiPath: string = ReviewerApi.paths.getByIdFull
  private requestHeader: HttpHeaders = new HttpHeaders();
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(id:Number):Observable<Reviewer>{
    let apiPath = this.apiPath.replace('{id}', id.toString())
    return this.httpClient.get<Reviewer>(apiPath,{
      headers: this.requestHeader,
    })
  }
}



