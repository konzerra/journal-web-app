import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {Journal} from "../Journal";
import {JournalApi} from "../JournalApi";
import {CategoryApi} from "../../category/CategoryApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = JournalApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders()

}
