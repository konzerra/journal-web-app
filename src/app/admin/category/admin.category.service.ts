import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {CategorySaveDto} from "../../domain/category/dto/CategorySaveDto";
import {CategoryApi} from "../../domain/category/CategoryApi";
import {CategoryUpdateDto} from "../../domain/category/dto/CategoryUpdateDto";
import {CategoryFull} from "../../domain/category/CategoryFull";
import {Category} from "../../domain/category/Category";
import {CategoryPage} from "../../domain/category/CategoryPage";
import {CategoryModule} from "./category.module";

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {
  constructor(
    private httpClient:HttpClient
  ) {

  }

  public save(saveDto:CategorySaveDto):Observable<any>{
    return this.httpClient.post(CategoryApi.paths.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:CategoryUpdateDto):Observable<any>{
    return this.httpClient.put(CategoryApi.paths.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(CategoryApi.paths.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<CategoryFull>{
    return this.httpClient.get<CategoryFull>(
      ApiPathUtil.insertId(CategoryApi.paths.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getAll():Observable<Category[]>{
    return this.httpClient.get<Category[]>(
      CategoryApi.paths.getAll,
      {headers: new HttpHeaders()}
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<CategoryPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<CategoryPage>(CategoryApi.paths.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }
}
