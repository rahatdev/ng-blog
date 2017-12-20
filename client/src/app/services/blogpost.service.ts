import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';
import { IBlogpost } from '../models/blogpost';
import { AppSettings } from '../api.config';

//import {tokenNotExpired } from 'angular2-jwt'

ß
@Injectable()
export class BlogpostService {
  private _api: string = AppSettings.API_ENDPOINT + 'posts' //should root for api be in shared file?

  constructor(
    private _http: Http,
    private _auth: AuthService
  ) { }


  getPostById(id) {
    if (id) {
      let url = this._api;
      let headers = new Headers();
      headers.append('Content-Type', 'application.json');
      if (this._auth.isLoggedIn()) {
        headers.append('Authorization', this._auth.getToken());
        url += '/private-post/params?param1=' + id;
      } else {
        url += '/post';
      }
      return this._http.get(url, { headers: headers }).map(res => res.json());
    }
  }

  //map and return as IBlogpost[]
  getAllPosts() {
    let url = this._api;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (this._auth.isLoggedIn()) {
      url += '/all'
      headers.append('Authorization', this._auth.getToken());
    } else {
      url += '/public';
    }
    return this._http.get(url, { headers: headers }).map(res => res.json());
  }

  getAllPublicPosts() {
    //Neccesary?
  }

  //TODO
  putNewBlogpost(blogpost: IBlogpost) {
    if (this._auth.isLoggedIn() && blogpost) {
      let url = this._api + '/new';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this._auth.getToken());
      return this._http.post(url, blogpost, { headers: headers }).map(res => res.json());
    } else {
      //TODO handle errors
      console.log('something went wrong');
    }
  }

  updateBlogpost(blogpost: IBlogpost) {
    if(this._auth.isLoggedIn() && blogpost){
      let url = this._api + '/update/params?param1=' + blogpost.id; //neccesary? id could be oulled from req body
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authorization', this._auth.getToken());
      return this._http.post(url, blogpost, { headers: headers}).map( res => res.json());
    } else {
      //tODO
      console.log('update unsuccessful');
    }
  }
}
