import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { IProfile } from './profile';
import { User } from './user';
import { achievement } from './achievement';
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  hostUrl:string = ConnectionURL.hostUrl;
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

  getUserIdCurrSession(){
    console.log("hitting "+this.hostUrl+"getCurrentUser")
    return this.http.get<any>(this.hostUrl+"getCurrentUser");
  }
}
