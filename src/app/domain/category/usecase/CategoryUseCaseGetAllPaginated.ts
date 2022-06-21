import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category} from "../Category";
import {CategoryApi} from "../api-path/CategoryApi";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {CategoryPage} from "../CategoryPage";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Category, CategoryPage>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.getAllPaginated,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}
