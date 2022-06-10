import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";
import {HttpClient} from "@angular/common/http";
import {Category} from "../Category";
import {CategoryApi} from "../api-path/CategoryApi";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetAll extends UseCaseGetAllAbstract<Category>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.getAll,
      httpClient
    );
  }
}
