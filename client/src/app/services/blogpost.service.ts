import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
//import {tokenNotExpired } from 'angular2-jwt'


@Injectable()
export class BlogpostService {
  private _api: string = 'http://localhost:3000/posts' //should root for api be in shared file?

  constructor( private _http: Http) { }

  //map and return as IBlogpost[]
  getAllPosts(){
    let url = this._api +'/all'
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this._http.get(url, {headers: headers})
    .map(res => res.json())
  }
}
