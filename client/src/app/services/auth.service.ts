import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private _api: String = 'http://localhost:3000/users'
  authToken: String;

  constructor( private _http: Http) { }

  //register user

  authenticateUser(user){
    let url = this._api + '/authenticate'
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.get(url, {headers: headers}).map(res=> res.json)
  }

  //logout

  //store user auth data

  // get user
  


}
