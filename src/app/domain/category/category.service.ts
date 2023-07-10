import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {CategorySaveDto} from "./dto/CategorySaveDto";
import {CategoryApi} from "./CategoryApi";
import {CategoryUpdateDto} from "./dto/CategoryUpdateDto";
import {CategoryFull} from "./CategoryFull";
import {Category} from "./Category";
import {CategoryPage} from "./CategoryPage";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
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
