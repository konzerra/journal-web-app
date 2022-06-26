import {Injectable} from "@angular/core";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../api-path/ArticleApi";

@Injectable({
  providedIn:"root"
})
export class ArticleUseCaseDeleteById
  extends UseCaseDeleteByIdAbstract
{
  protected apiPath: string = ArticleApi.paths.deleteById

  protected requestHeader: HttpHeaders = new HttpHeaders();
  constructor(
    protected httpClient: HttpClient
  ) {
    super();
  }

}
