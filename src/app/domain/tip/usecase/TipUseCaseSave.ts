
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {TipApi} from "../TipApi";
import {TipSaveDto} from "../dto/TipSaveDto";

@Injectable({
  providedIn : "root"
})
export class TipUseCaseSave extends UseCaseSaveAbstract<TipSaveDto>{

  protected apiPath: string = TipApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
