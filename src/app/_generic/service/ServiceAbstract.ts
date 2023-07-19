import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tip} from "../../domain/tip/Tip";
import {PageRequestDto} from "../../domain/pagination/PageRequestDto";
import {TipPage} from "../../domain/tip/TipPage";

export abstract class ServiceAbstract<Model, ModelFull, ModelPage, SaveDto, UpdateDto> {
  protected constructor(
    protected httpClient:HttpClient
  ){

  }

  public abstract save(saveDto:SaveDto):Observable<any>

  public abstract update(updateDto:UpdateDto):Observable<any>

  public abstract deleteById(id:string):Observable<any>

  public abstract getByIdFull(id : string):Observable<ModelFull>

  public abstract getAll():Observable<Tip[]>

  public abstract getPaginated(pageRequestDto: PageRequestDto): Observable<TipPage>

}
