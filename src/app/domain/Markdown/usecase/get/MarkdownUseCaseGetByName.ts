import {Injectable} from "@angular/core";
import {ReviewerApi} from "../../../reviewer/ReviewerApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../../../_generic/util/ApiPathUtil";
import {MarkdownApi} from "../../MarkdownApi";
import {Markdown} from "../../Markdown";

@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseGetByName {
  private apiPath: string = MarkdownApi.paths.getByName
  private requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(name: string):Observable<Markdown>{
    return this.httpClient.get<Markdown>(
      ApiPathUtil.insertName(this.apiPath,name),
      {
      headers: this.requestHeader,
    })
  }
}

