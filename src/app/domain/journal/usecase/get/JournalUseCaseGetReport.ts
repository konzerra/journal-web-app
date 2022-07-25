import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JournalApi} from "../../JournalApi";
import {Journal} from "../../Journal";
import {JournalUpdateDto} from "../../dto/JournalUpdateDto";
import {UseCaseGetByIdFullAbstract} from "../../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {UseCaseGetByIdAbstract} from "../../../../_generic/usecase/get/UseCaseGetByIdAbstract";
import {JournalReport} from "../../JournalReport";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetReport extends UseCaseGetByIdAbstract<JournalReport> {
  protected apiPath: string = JournalApi.paths.getReport
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders= new HttpHeaders();
}
