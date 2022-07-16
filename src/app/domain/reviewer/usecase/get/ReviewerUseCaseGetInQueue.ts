import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Reviewer} from "../../Reviewer";
import {ReviewerApi} from "../../ReviewerApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Article} from "../../../article/Article";
import {ApiPathUtil} from "../../../../_generic/util/ApiPathUtil";


@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseGetInQueue {
  private apiPath: string = ReviewerApi.paths.getInQueue
  private requestHeader: HttpHeaders = new HttpHeaders();
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(id:Number):Observable<Array<Reviewer>>{
    let apiPath = ApiPathUtil.insertId(this.apiPath, id.toString())
    return this.httpClient.get<Array<Reviewer>>(apiPath,{
      headers: this.requestHeader,
    })
  }
}
