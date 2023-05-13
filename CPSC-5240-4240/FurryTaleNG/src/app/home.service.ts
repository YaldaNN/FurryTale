import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hostUrl:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getPosts(){
    
    return this.http.get<Post[]>(this.hostUrl + 'posts/');
  }
}
