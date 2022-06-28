import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {ReviewerApi} from "../ReviewerApi";
import {Reviewer} from "../Reviewer";
import {ReviewerPage} from "../ReviewerPage";


@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Reviewer,ReviewerPage>{
  protected apiPath: string = ReviewerApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }
  protected requestHeader: HttpHeaders = new HttpHeaders();
}
