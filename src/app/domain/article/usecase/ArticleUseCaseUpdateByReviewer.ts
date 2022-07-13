import {Inject, Injectable} from "@angular/core";
import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../ArticleApi";

@Injectable({
  providedIn: "root"
})
export class ArticleUseCaseUpdateByReviewer
  extends UseCaseUpdateAbstract<FormData>
{
  protected requestHeader: HttpHeaders = new HttpHeaders();
  protected apiPath: string = ArticleApi.paths.updateByReviewer
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }
}
