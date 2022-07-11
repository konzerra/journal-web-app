import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CategoryApi} from "../../category/CategoryApi";
import {ArticleApi} from "../ArticleApi";

@Injectable({
  providedIn : "root"
})
export class ArticleUseCaseSave extends UseCaseSaveAbstract<FormData>{
  protected requestHeader: HttpHeaders = new HttpHeaders();
  protected apiPath: string = ArticleApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }


}
