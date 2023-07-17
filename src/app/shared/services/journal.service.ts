import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../models/pagination/PageRequestDto";
import {JournalSaveDto} from "../../admin/journal/_models/JournalSaveDto";
import {JournalUpdateDto} from "../../admin/journal/_models/JournalUpdateDto";
import {JournalFull} from "../models/journal/JournalFull";
import {Journal} from "../models/journal/Journal";
import {AdminJournalApi} from "../../admin/journal/_models/AdminJournalApi";
import {JournalPage} from "../models/journal/JournalPage";
import {JournalReport} from "../../admin/journal/_models/JournalReport";
import {ArticlePage} from "../models/article/ArticlePage";
import {JournalStatus} from "../models/journal/JournalStatus";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(saveDto:JournalSaveDto, imageFile: File):Observable<any>{
    let formData = new FormData()

    formData.set('saveDto' , new Blob([JSON.stringify(saveDto)],{
      type: "application/json"
    }))
    let image = new Blob([imageFile],  {type: imageFile.type})
    formData.append(
      "image",
      image,
      imageFile.name
    )


    return this.httpClient.post(AdminJournalApi.save,formData)
  }

  public update(updateDto:JournalUpdateDto, imageFile: File | null, pdfFile: File | null):Observable<any>{
    let formData = new FormData()
    formData.set('updateDto' , new Blob([JSON.stringify(updateDto)],{
      type: "application/json"
    }))

    if (imageFile != null) {
      let image = new Blob([imageFile],  {type: imageFile.type})
      formData.append(
        "image",
        image,
        imageFile.name
      )
    }

    if (pdfFile != null) {
      let pdf =  new Blob([pdfFile],  {type: pdfFile.type})
      formData.append("pdfFile", pdf, pdfFile.name)
    }

    return this.httpClient.put(AdminJournalApi.update,formData,{
      headers: new HttpHeaders(),
    })
  }

  public makeReport(journalId: string):Observable<JournalReport>{
    return this.httpClient.get<JournalReport>(
      ApiPathUtil.insertId(AdminJournalApi.makeReport,journalId)
    )
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(AdminJournalApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<JournalFull>{
    return this.httpClient.get<JournalFull>(
      ApiPathUtil.insertId(AdminJournalApi.getByIdFull,id)
    )
  }



  public getPaginated(pageRequestDto: PageRequestDto): Observable<JournalPage> {

    return this.httpClient.post<JournalPage>(AdminJournalApi.getPaginated, pageRequestDto);
  }

  public getPaginatedJournalArticles(journalId:Number, pageRequestDto: PageRequestDto): Observable<ArticlePage>{

    return this.httpClient.post<ArticlePage>(
      ApiPathUtil.insertId(AdminJournalApi.getPaginatedJournalArticles, journalId.toString()),
      pageRequestDto
      );
  }

  public getAllByStatus(status: string):Observable<Array<Journal>>{
    let apiPath = AdminJournalApi.getAllByStatus.replace('{status}', status)
    return this.httpClient.get<Journal[]>(apiPath)
  }

  public getPaginatedByStatus(status: string, pageRequestDto: PageRequestDto): Observable<JournalPage> {
    let apiPath: string = AdminJournalApi.getPaginatedByStatus.replace("{status}",JournalStatus.Published)


    return this.httpClient.post<JournalPage>(apiPath, pageRequestDto );
  }
}
