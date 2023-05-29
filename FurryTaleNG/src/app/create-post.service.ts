import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  hostUrl:string = 'http://localhost:8080/';
  
  constructor(private http: HttpClient) { }
  
  createNewPost(postData: Post){
    return this.http.post<Post>(this.hostUrl + 'posts/', postData);
  }
}
