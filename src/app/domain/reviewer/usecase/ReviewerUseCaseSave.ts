
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {ReviewerApi} from "../ReviewerApi";
import {ReviewerSaveDto} from "../dto/ReviewerSaveDto";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseSave extends UseCaseSaveAbstract<ReviewerSaveDto>{
  protected apiPath: string = ReviewerApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
