import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../api.config';

@Injectable()
export class AuthService {
  private _api: String = AppSettings.API_ENDPOINT + 'users'
  authToken: String;

  constructor(private _http: Http) { }

  //register user

  authenticateUser(user) {
    let url = this._api + '/authenticate';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, user, { headers: headers }).map(res => res.json());
  }

  //logout
  logout() {
    this.authToken = null;
    localStorage.clear();
  }

  //store token
  storeUserData(token, user) {
    if (token != undefined) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', user); //needed?
      localStorage.setItem('username', user.username);
    }
  }

  // get user
  isLoggedIn() {
    return tokenNotExpired('id_token');
  }

  getToken(){
    return localStorage.getItem('id_token');
  }

  getUser(){
    let user = localStorage.getItem('user');
    console.log(user);
    return user;  //should this be from db?
  }

  getUsername(){
    return localStorage.getItem('username');
  }

}
