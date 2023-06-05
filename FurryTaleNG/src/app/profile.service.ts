import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { IProfile } from './profile';
import { User } from './user';
import { achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  // hostUrl:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  getMyPosts(userId: string){
     return this.http.get<IProfile[]>(this.hostUrl + 'oneUsersPosts?userId=' + userId);
  }

  getMyUser(userId: string){
    return this.http.get<User[]>(this.hostUrl + 'oneUser?userId=' + userId);
  }

  getAchievement(userId: string){
    return this.http.get<User[]>(this.hostUrl + 'oneUserAchievement?userId=' + userId);
  }
}
