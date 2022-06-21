
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {CategorySaveDto} from "../dto/CategorySaveDto";
import {CategoryApi} from "../api-path/CategoryApi";

@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseSave extends UseCaseSaveAbstract<CategorySaveDto>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      CategoryApi.paths.save,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
