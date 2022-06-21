import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {CategoryApi} from "../api-path/CategoryApi";
import {CategoryUpdateDto} from "../dto/CategoryUpdateDto";

import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<CategoryUpdateDto> {
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.getByIdFull,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
