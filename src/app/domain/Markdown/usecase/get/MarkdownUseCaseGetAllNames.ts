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
export class MarkdownUseCaseGetAllNames {
  private apiPath: string = MarkdownApi.paths.getAllNames
  private requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
  constructor(
    private httpClient:HttpClient
  ) {}
  execute():Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      this.apiPath,
      {
      headers: this.requestHeader,
    })
  }
}

