import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {ReviewerApi} from "../ReviewerApi";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = ReviewerApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders()

}
