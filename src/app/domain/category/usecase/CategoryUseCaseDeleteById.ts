import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {CategoryApi} from "../CategoryApi";
import {ArticleApi} from "../../article/ArticleApi";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = CategoryApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
