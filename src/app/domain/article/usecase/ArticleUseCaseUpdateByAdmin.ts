import {Inject, Injectable} from "@angular/core";
import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../api-path/ArticleApi";

@Injectable({
  providedIn: "root"
})
export class ArticleUseCaseUpdateByAdmin
  extends UseCaseUpdateAbstract<FormData>
{
  protected requestHeader: HttpHeaders = new HttpHeaders();
  protected apiPath: string = ArticleApi.paths.updateByAdmin
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }
}
