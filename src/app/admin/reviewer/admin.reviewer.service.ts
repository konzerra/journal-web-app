import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../../shared/models/article/Article";
import {ReviewerApi} from "../../domain/reviewer/ReviewerApi";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {ReviewerPage} from "../../domain/reviewer/ReviewerPage";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {Reviewer} from "../../domain/reviewer/Reviewer";
import {ReviewerSaveDto} from "../../domain/reviewer/dto/ReviewerSaveDto";
import {ReviewerUpdateDto} from "../../domain/reviewer/dto/ReviewerUpdateDto";
import {ReviewerModule} from "./reviewer.module";

@Injectable({
  providedIn: 'root'
})
export class AdminReviewerService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public save(saveDto:ReviewerSaveDto):Observable<any>{
    return this.httpClient.post(ReviewerApi.paths.save,saveDto)
  }

  public update(updateDto:ReviewerUpdateDto):Observable<any>{
    return this.httpClient.put(ReviewerApi.paths.update,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(ReviewerApi.paths.deleteById, id)
    )
  }
  getAllArticles(id:Number):Observable<Array<Article>>{
    let apiPath = ReviewerApi.paths.getAllArticles.replace('{id}', id.toString())
    return this.httpClient.get<Array<Article>>(apiPath,{
      headers: new HttpHeaders(),
    })
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<ReviewerPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<ReviewerPage>(ReviewerApi.paths.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }

  public getById(id : string):Observable<Reviewer>{
    return this.httpClient.get<Reviewer>(
      ApiPathUtil.insertId(ReviewerApi.paths.getById,id),
      { headers: new HttpHeaders()}
    )
  }

  public getQueueByCategory(categoryId: Number):Observable<Array<Reviewer>>{
    let apiPath = ApiPathUtil.insertId(ReviewerApi.paths.getQueue, categoryId.toString())
    return this.httpClient.get<Array<Reviewer>>(apiPath)
  }

  public distribute(journalId:Number):Observable<{ message: string }>{
    let apiPath= ApiPathUtil.insertId(ReviewerApi.paths.distribute,journalId.toString())
    return this.httpClient.get<{ message: string }>(apiPath)
  }
}
