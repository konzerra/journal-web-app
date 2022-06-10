import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";
import {HttpClient} from "@angular/common/http";
import {Category} from "../Category";
import {CategoryApi} from "../api-path/CategoryApi";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";
import {UseCaseFindByIdAbstract} from "../../../_generic/usecase/UseCaseFindByIdAbstract";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseFindByIdForUpdate extends UseCaseFindByIdAbstract<Category, CategoryUpdateDto> {
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.getAll,
      httpClient
    );
  }
}
