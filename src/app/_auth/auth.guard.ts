import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth/auth.service";


export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router: Router = inject(Router);
  const userAuthService: AuthService = inject(AuthService);

  if (userAuthService.getJwtToken() === null) {
    return router.navigate(['/auth/signin']);
  } else {
    const role = route.data["role"] as string
    if (role === null || !userAuthService.hasRole(role)) {
      return router.navigate(['/forbidden']);
    } else {
      return true;
    }
  }
}
