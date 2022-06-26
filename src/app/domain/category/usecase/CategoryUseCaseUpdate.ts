
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";
import {CategoryApi} from "../api-path/CategoryApi";

@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseUpdate extends UseCaseUpdateAbstract<CategoryUpdateDto>{

  protected apiPath: string = CategoryApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
