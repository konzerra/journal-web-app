import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";

import {HttpClient} from "@angular/common/http";

import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {CategoryApi} from "../api-path/CategoryApi";
import {Category} from "../Category";

@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseDeleteById extends UseCaseDeleteByIdAbstract<Category>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.deleteById,
      httpClient
    );
  }
}
