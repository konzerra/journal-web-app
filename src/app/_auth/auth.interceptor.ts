import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

import {AppLanguage} from "../AppLanguage";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private userAuthService:AuthService,
    private router:Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        'Accept-Language': AppLanguage.getLocalLanguage()
      }
    })
    if(req.headers.get('No-Auth')==='true'){
      return next.handle(req.clone()).pipe(
        catchError(
          (error:HttpErrorResponse ) =>{
            if(error.status === 0 ){
              return throwError(()=>"Сервер сейчас не работает");
            }
            if(error.status === 404 ){
              return throwError(()=>"Не найдено");
            }
            if(error.status === 400){
              return throwError(()=>error.error.message)
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
          if(error.status === 401){
            this.router.navigate(['/unauthorized']);
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
          if(error.status === 400){
            return throwError(()=>error.error.message)
          }
          return throwError(()=>"Неизвестная ошибка"+ error.message);
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
