import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Post } from './posts';
import {User} from './user';
import {Comment} from './comment'
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hostUrl:string = ConnectionURL.hostUrl;
  constructor(private http: HttpClient) { }

  getPosts(){
    
    return this.http.get<Post[]>(this.hostUrl + 'posts/');
  }

  addPaw(pawObj: any){
    return this.http.put(this.hostUrl+"updatePostPaw/", pawObj);
  }

  getUser(userId : String){
    return this.http.get<User>(this.hostUrl+"oneUser?userId="+userId)
  }

  adComment(comment : Comment){
    return this.http.post(this.hostUrl+"comment/", comment);
  }
}
