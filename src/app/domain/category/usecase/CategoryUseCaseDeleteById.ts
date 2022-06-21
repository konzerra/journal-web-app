import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {CategoryApi} from "../api-path/CategoryApi";


@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.deleteById,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
