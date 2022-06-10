
import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";
import {CategoryApi} from "../api-path/CategoryApi";

@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseUpdate extends UseCaseUpdateAbstract<CategoryUpdateDto>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.update,
      httpClient
    );
  }
}
