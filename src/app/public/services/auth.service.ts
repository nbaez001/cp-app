import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  get headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(environment.basicAuthorization) });
  }

  login(body: RequestAuth): Observable<any> {
    const bodyFormData = new FormData();
    bodyFormData.set('username', body.username);
    bodyFormData.set('password', body.password);
    bodyFormData.set('grant_type', 'password');

    // return this.http.post( `${environment.backendUrl}/oauth/token`, bodyFormData, { headers: this.headers, reportProgress: true });
    let tk = {
      access_token: '',
      expires_in: 600000,
      id_usuario: 1,
      jti: '',
      nombres: 'FRANCISCO',
      refresh_token: '',
      scope: '',
      token_type: '',
      username: body.username,
      puesto: body.password,
    };
    return of(tk);
  }

}

interface RequestAuth {
  username: string;
  password: string;
}
