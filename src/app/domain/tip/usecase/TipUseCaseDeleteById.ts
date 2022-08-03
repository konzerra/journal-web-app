import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {TipApi} from "../TipApi";



@Injectable({
  providedIn : "root"
})
export class TipUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = TipApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
