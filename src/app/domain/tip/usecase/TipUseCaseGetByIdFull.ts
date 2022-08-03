import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {TipFull} from "../TipFull";
import {TipApi} from "../TipApi";


@Injectable({
  providedIn : "root"
})
export class TipUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<TipFull> {

  protected apiPath: string = TipApi.paths.getByIdFull
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
