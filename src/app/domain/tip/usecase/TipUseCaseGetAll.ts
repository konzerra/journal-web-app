import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TipApi} from "../TipApi";
import {Tip} from "../Tip";


@Injectable({
  providedIn : "root"
})
export class TipUseCaseGetAll extends UseCaseGetAllAbstract<Tip>{
  protected apiPath: string = TipApi.paths.getAll
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
}
