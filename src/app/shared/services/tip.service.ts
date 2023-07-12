import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TipSaveDto} from "../../admin/tip/_models/TipSaveDto";
import {TipApi} from "../../domain/tip/TipApi";
import {TipUpdateDto} from "../../admin/tip/_models/TipUpdateDto";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {TipFull} from "../../domain/tip/TipFull";
import {TipPage} from "../../domain/tip/TipPage";
import {PageRequestDto} from "../models/pagination/PageRequestDto";
import {Tip} from "../../domain/tip/Tip";
import {AdminModule} from "../../admin/admin.module";

@Injectable({
  providedIn:'root'
})
export class TipService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:TipSaveDto):Observable<any>{
    return this.httpClient.post(TipApi.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:TipUpdateDto):Observable<any>{
    return this.httpClient.put(TipApi.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(TipApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<TipFull>{
    return this.httpClient.get<TipFull>(
      ApiPathUtil.insertId(TipApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getAll():Observable<Tip[]>{
    return this.httpClient.get<Tip[]>(
      TipApi.getAll,
      {headers: new HttpHeaders()}
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<TipPage> {
    return this.httpClient.post<TipPage>(TipApi.getPaginated, pageRequestDto);
  }
}
