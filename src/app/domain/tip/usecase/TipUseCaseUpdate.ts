
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {TipUpdateDto} from "../dto/TipUpdateDto";
import {TipApi} from "../TipApi";

@Injectable({
  providedIn : "root"
})
export class TipUseCaseUpdate extends UseCaseUpdateAbstract<TipUpdateDto>{

  protected apiPath: string = TipApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
