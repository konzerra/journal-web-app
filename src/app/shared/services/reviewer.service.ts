import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../models/article/Article";
import {ReviewerApi} from "../../domain/reviewer/ReviewerApi";
import {PageRequestDto} from "../models/pagination/PageRequestDto";
import {ReviewerPage} from "../../domain/reviewer/ReviewerPage";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {Reviewer} from "../../domain/reviewer/Reviewer";
import {ReviewerSaveDto} from "../../domain/reviewer/dto/ReviewerSaveDto";
import {ReviewerUpdateDto} from "../../domain/reviewer/dto/ReviewerUpdateDto";

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public save(saveDto:ReviewerSaveDto):Observable<any>{
    return this.httpClient.post(ReviewerApi.save,saveDto)
  }

  public update(updateDto:ReviewerUpdateDto):Observable<any>{
    return this.httpClient.put(ReviewerApi.update,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(ReviewerApi.deleteById, id)
    )
  }
  getAllArticles(id:Number):Observable<Array<Article>>{
    let apiPath = ReviewerApi.getAllArticles.replace('{id}', id.toString())
    return this.httpClient.get<Array<Article>>(apiPath,{
      headers: new HttpHeaders(),
    })
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<ReviewerPage> {
    return this.httpClient.post<ReviewerPage>(ReviewerApi.getPaginated, pageRequestDto );
  }

  public getById(id : string):Observable<Reviewer>{
    return this.httpClient.get<Reviewer>(
      ApiPathUtil.insertId(ReviewerApi.getById,id),
      { headers: new HttpHeaders()}
    )
  }

  public getQueueByCategory(categoryId: Number):Observable<Array<Reviewer>>{
    let apiPath = ApiPathUtil.insertId(ReviewerApi.getQueue, categoryId.toString())
    return this.httpClient.get<Array<Reviewer>>(apiPath)
  }

  public distribute(journalId:Number):Observable<{ message: string }>{
    let apiPath= ApiPathUtil.insertId(ReviewerApi.distribute,journalId.toString())
    return this.httpClient.get<{ message: string }>(apiPath)
  }
}
