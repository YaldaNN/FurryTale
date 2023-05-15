import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { IProfile } from './profile';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  hostUrl:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  getMyPosts(userId: string){
     return this.http.get<IProfile[]>(this.hostUrl + 'oneUsersPosts?userId=' + userId);
  }

  getMyUser(userId: string){
    return this.http.get<IUser[]>(this.hostUrl + 'oneUser?userId=' + userId);
  }
}
