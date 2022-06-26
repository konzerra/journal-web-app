
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {JournalSaveDto} from "../dto/JournalSaveDto";
import {JournalApi} from "../api-path/JournalApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseSave extends UseCaseSaveAbstract<JournalSaveDto>{
  protected apiPath: string = JournalApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
