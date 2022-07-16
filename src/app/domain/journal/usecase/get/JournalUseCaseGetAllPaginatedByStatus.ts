import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {JournalPage} from "../../JournalPage";
import {Journal} from "../../Journal";
import {JournalApi} from "../../JournalApi";
import {ApiPathUtil} from "../../../../_generic/util/ApiPathUtil";
import {JournalStatus} from "../../JournalStatus";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetAllPaginatedByStatus extends UseCaseGetAllPaginatedAbstract<Journal,JournalPage>{
  protected apiPath: string = JournalApi.paths.getAllPaginatedByStatus.replace("{status}",JournalStatus.Published)
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }
  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
}
