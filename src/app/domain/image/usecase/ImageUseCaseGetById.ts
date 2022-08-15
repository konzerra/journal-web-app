import {Injectable} from "@angular/core";
import {MarkdownApi} from "../../Markdown/MarkdownApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Markdown} from "../../Markdown/Markdown";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";
import {UseCaseGetByIdAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdAbstract";
import {ImageApi} from "../ImageApi";

@Injectable({
  providedIn : "root"
})
export class ImageUseCaseGetById {
  private apiPath: string = ImageApi.paths.getById
  private requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
  constructor(
    private httpClient:HttpClient
  ) {}
  execute(id:Number):Observable<string>{
    let headerOptions:Object ={
      headers: this.requestHeader,
      responseType: "text"
    }
    return this.httpClient.get<string>(
      ApiPathUtil.insertId(this.apiPath,id.toString()),
      headerOptions
    )
  }
}
