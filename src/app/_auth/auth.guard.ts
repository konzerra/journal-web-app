import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from "../domain/user/service/UserAuthService";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router:Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userAuthService.getJwtToken()!==null){
      const role = route.data["role"] as string
      if(role===null){
        this.router.navigate(['/forbidden'])
        return false
      }
      if(this.userAuthService.hasRole(role)){
        return true
      }else{
        this.router.navigate(['/forbidden'])
        return false
      }

    }
    this.router.navigate(['/login'])
    return false;
  }

}
