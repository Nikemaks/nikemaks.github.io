import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "./AuthService";

@Injectable({providedIn: 'root'})
export class AutGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private  router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthentivated().then( isAuth => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate(['/'], {
          queryParams: {
            auth: false
          }
        })
      }
    });
  }

  canActivateChild (route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
  }
}
