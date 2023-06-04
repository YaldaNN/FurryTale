import { Injectable } from '@angular/core';
import { Post } from './posts';
import { Account } from './account';
import { User } from './user';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  //hostUrl:string = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  getPost(){
    return this.http.get<Post[]>(this.hostUrl + 'posts/')
  }

  getUserAccount(){
    return this.http.get<Account>(this.hostUrl + 'userAccount/')
  }

  getOpenToWorkUsers(){
    return this.http.get<User[]>(this.hostUrl + 'openToWork/')
  }

}
