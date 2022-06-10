import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserAuthService} from "../domain/user/service/UserAuthService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private userAuthService:UserAuthService,
    private router:Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.headers.get('No-Auth')==='true'){
      return next.handle(req.clone()).pipe(
        catchError(
          (error:HttpErrorResponse ) =>{
            console.log(error)
            if(error.status === 0 ){
              return throwError(()=>"Сервер сейчас не работает");
            }
            return throwError(()=>"Неизвестная ошибка");
          }
        )
      )
    }
    const token = this.userAuthService.getJwtToken()
    if(token){
      req = this.addToken(req,token)
    }
    return next.handle(req).pipe(
      catchError(
        (error:HttpErrorResponse ) =>{
          console.log(error)
          if(error.status === 401){
            this.router.navigate(['/login']);
          }
          if(error.status === 403 ){
            this.router.navigate(['/forbidden']);
          }
          if(error.status === 0 ){
            return throwError(()=>"Сервер сейчас не работает");
          }
          if(error.status === 404 ){
            return throwError(()=>"Не найдено");
          }
          return throwError(()=>"Неизвестная ошибка");
        }
      )
    )
  }

  private addToken(httpRequest:HttpRequest<any>,token:String){
    return httpRequest.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

}
