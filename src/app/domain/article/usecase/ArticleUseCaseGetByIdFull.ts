import {Injectable} from "@angular/core";
import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {ArticleUpdateDtoByAdmin} from "../dto/ArticleUpdateDtoByAdmin";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleApi} from "../ArticleApi";
import {ArticleFull} from "../ArticleFull";

@Injectable({
  providedIn:'root'
})
export class ArticleUseCaseGetByIdFull
  extends UseCaseGetByIdFullAbstract<ArticleFull>
{
  protected apiPath: string = ArticleApi.paths.getByIdFull

  protected requestHeader: HttpHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) {
    super();
  }

}
