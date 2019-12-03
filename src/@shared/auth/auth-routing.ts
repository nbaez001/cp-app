import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as env } from 'environments/environment';
import { Session } from './Session';

@Injectable()
export class Routing {
  constructor(
    protected http: HttpClient,
    protected router: Router
  ) { }

  hasLogged(): Observable<boolean> {
    // return this.http.get<boolean>(`${env.backendUrl}/api/status`);
    // let obs = new Observable<boolean>(ob => { ob.next(true); })
    // return of<boolean>(false);
    throw Observable.throw('');
  }
}

@Injectable()
export class AuthRouting extends Routing implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    // return this.hasLogged().pipe(
    //   map(() => true),
    //   catchError(() => {
    //     Session.stop();
    //     return of(this.router.parseUrl('/anonimo/iniciar-sesion'));
    //   })
    // );
    let ses = localStorage.getItem('session');
    if (ses) {
      return of(true);
    } else {
      return of(this.router.parseUrl('/anonimo/iniciar-sesion'));
    }
  }
}

@Injectable()
export class DsAuthRouting extends Routing implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // return this.hasLogged().pipe(
    //   map(() => this.router.parseUrl('/principal/inicio')),
    //   catchError(() => of(true))
    // );
    return of(this.router.parseUrl('/anonimo/iniciar-sesion'));
  }

}
