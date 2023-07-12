import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MarkdownSaveDto} from "../../domain/markdown/dto/MarkdownSaveDto";
import {Observable} from "rxjs";
import {MarkdownApi} from "../../domain/markdown/MarkdownApi";
import {MarkdownUpdateDto} from "../../domain/markdown/dto/MarkdownUpdateDto";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {Markdown} from "../../domain/markdown/Markdown";
import {MarkdownFull} from "../../domain/markdown/MarkdownFull";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {MarkdownPage} from "../../domain/markdown/MarkdownPage";

@Injectable({
  providedIn:'root'
})
export class AdminMarkdownService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:MarkdownSaveDto):Observable<any>{
    return this.httpClient.post(MarkdownApi.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:MarkdownUpdateDto):Observable<any>{
    return this.httpClient.put(MarkdownApi.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(MarkdownApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getById(id : string):Observable<Markdown>{
    return this.httpClient.get<Markdown>(
      ApiPathUtil.insertId(MarkdownApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<MarkdownFull>{
    return this.httpClient.get<MarkdownFull>(
      ApiPathUtil.insertId(MarkdownApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }




  public getPaginated(pageRequestDto: PageRequestDto): Observable<MarkdownPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<MarkdownPage>(MarkdownApi.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }

  public getAllNames(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      MarkdownApi.getAllNames,
      {
        headers: new HttpHeaders()
      }
    );
  }
}
