import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {CategoryApi} from "../api-path/CategoryApi";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";

import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<CategoryUpdateDto> {

  protected apiPath: string = CategoryApi.paths.getByIdFull
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
