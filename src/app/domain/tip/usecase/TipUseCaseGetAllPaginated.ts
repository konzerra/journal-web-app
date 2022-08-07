import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Tip} from "../Tip";
import {TipPage} from "../TipPage";
import {TipApi} from "../TipApi";


@Injectable({
  providedIn : "root"
})
export class TipUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Tip, TipPage>{

  protected apiPath: string = TipApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}
