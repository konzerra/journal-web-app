
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";

import {ReviewerUpdateDto} from "../dto/ReviewerUpdateDto";
import {ReviewerApi} from "../ReviewerApi";

@Injectable({
  providedIn : "root"
})
export class ReviewerUseCaseUpdate extends UseCaseUpdateAbstract<ReviewerUpdateDto>{
  protected apiPath: string = ReviewerApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
