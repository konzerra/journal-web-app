import {Injectable} from "@angular/core";
import {JournalApi} from "../../JournalApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticlePage} from "../../../article/ArticlePage";
import {ApiPathUtil} from "../../../../_generic/util/ApiPathUtil";
import {Journal} from "../../Journal";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetAllByStatus {
  private apiPath: string = JournalApi.paths.getAllByStatus
  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
  constructor(
    private httpClient:HttpClient
  ) {}

  execute(status:string):Observable<Array<Journal>>{
    let apiPath = this.apiPath.replace('{status}', status)
    return this.httpClient.get<Array<Journal>>(apiPath,{
      headers: this.requestHeader,
    })
  }
}
