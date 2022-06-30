import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../../_generic/usecase/get/UseCaseGetAllAbstract";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {JournalPage} from "../../JournalPage";
import {Journal} from "../../Journal";
import {JournalApi} from "../../api-path/JournalApi";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Journal,JournalPage>{
  protected apiPath: string = JournalApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }
  protected requestHeader: HttpHeaders = new HttpHeaders({'No-Auth':'true'});
}
