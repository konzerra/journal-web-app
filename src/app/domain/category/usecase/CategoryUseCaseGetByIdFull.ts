import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {CategoryApi} from "../CategoryApi";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";

import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {CategoryFull} from "../CategoryFull";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<CategoryFull> {

  protected apiPath: string = CategoryApi.paths.getByIdFull
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
