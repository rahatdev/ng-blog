import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';
import { IBlogpost } from '../models/blogpost';
//import {tokenNotExpired } from 'angular2-jwt'


@Injectable()
export class BlogpostService {
  private _api: string = 'http://localhost:3000/posts' //should root for api be in shared file?

  constructor(
    private _http: Http,
    private _auth: AuthService
  ) { }

  //map and return as IBlogpost[]
  //TODO check if token valid, call getAllPublic posts if not
  getAllPosts() {
    let url = this._api;
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
    if (this._auth.isLoggedIn()) {
      url += '/all'
      headers.append('Authorization', this._auth.getToken())
    } else {
      url += '/public';
    }
    return this._http.get(url, {headers: headers}).map(res => res.json());
  }

  getAllPublicPosts() {
    //Neccesary?
  }

  putNewBlogpost(blogpost: IBlogpost){
      if(this._auth.isLoggedIn() && blogpost) {
        console.log(blogpost)
      } else {
        console.log('something went wrong')
      }
  }
  
}
