import {Injectable} from "@angular/core";
import {ReviewerApi} from "../ReviewerApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../../article/Article";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseDistribute {
  private apiPath: string = ReviewerApi.paths.distribute
  private requestHeader: HttpHeaders = new HttpHeaders();
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(id:Number):Observable<{ message: string }>{
    let apiPath= ApiPathUtil.insertId(this.apiPath,id.toString())
    return this.httpClient.get<{ message: string }>(apiPath,{
      headers: this.requestHeader,
    })
  }
}
