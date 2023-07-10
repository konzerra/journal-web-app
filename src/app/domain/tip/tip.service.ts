import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TipSaveDto} from "./dto/TipSaveDto";
import {TipApi} from "./TipApi";
import {TipUpdateDto} from "./dto/TipUpdateDto";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {TipFull} from "./TipFull";
import {TipPage} from "./TipPage";
import {PageRequestDto} from "../pagination/PageRequestDto";
import {Tip} from "./Tip";

@Injectable({
  providedIn:"root"
})
export class TipService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:TipSaveDto):Observable<any>{
    return this.httpClient.post(TipApi.paths.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:TipUpdateDto):Observable<any>{
    return this.httpClient.put(TipApi.paths.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(TipApi.paths.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<TipFull>{
    return this.httpClient.get<TipFull>(
      ApiPathUtil.insertId(TipApi.paths.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getAll():Observable<Tip[]>{
    return this.httpClient.get<Tip[]>(
      TipApi.paths.getAll,
      {headers: new HttpHeaders()}
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<TipPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<TipPage>(TipApi.paths.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }
}
