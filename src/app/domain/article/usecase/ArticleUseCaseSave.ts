import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CategoryApi} from "../../category/api-path/CategoryApi";
import {ArticleApi} from "../api-path/ArticleApi";

@Injectable({
  providedIn : "root"
})
export class ArticleUseCaseSave extends UseCaseSaveAbstract<FormData>{
  protected requestHeader: HttpHeaders = new HttpHeaders();

  constructor(
    httpClient:HttpClient
  ) {
    super(
      ArticleApi.paths.save,
      httpClient
    );
  }
}
