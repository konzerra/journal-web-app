import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category} from "../Category";
import {CategoryApi} from "../api-path/CategoryApi";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetAll extends UseCaseGetAllAbstract<Category>{
  protected apiPath: string = CategoryApi.paths.getAll
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
}
