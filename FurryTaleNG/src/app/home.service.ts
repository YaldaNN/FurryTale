import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Post } from './posts';
import {User} from './user';
import {Comment} from './comment'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  constructor(private http: HttpClient) { }

  getPosts(){
    
    return this.http.get<Post[]>(this.hostUrl + 'posts/');
  }

  addPaw(pawObj: any){
    return this.http.put("https://furrytale.azurewebsites.net/updatePostPaw/", pawObj);
  }

  getUser(userId : String){
    return this.http.get<User>(this.hostUrl+"oneUser?userId="+userId)
  }

  adComment(comment : Comment){
    return this.http.post(this.hostUrl+"comment/", comment);
  }
}
