
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {CategorySaveDto} from "../dto/CategorySaveDto";
import {CategoryApi} from "../CategoryApi";

@Injectable({
  providedIn : "root"
})
export class CategoryUseCaseSave extends UseCaseSaveAbstract<CategorySaveDto>{

  protected apiPath: string = CategoryApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
