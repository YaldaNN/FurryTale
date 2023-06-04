import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Post } from './posts';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  //hostUrl:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  createNewPost(postData: Post){
    return this.http.post<Post>(this.hostUrl + 'posts/', postData);
  }

  getCurrentUser(){
    return this.http.get<any>(this.hostUrl+"getCurrentUser");
  }

  getCurrentUserAccount(){
    return this.http.get<String>(this.hostUrl+"getCurrentAccountType")
  }
}
