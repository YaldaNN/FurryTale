import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ConnectionURL } from './ConnectionURL';
@Injectable({
  providedIn: 'root'
})
export class PetCircleService {
  hostUrl:string = ConnectionURL.hostUrl;

  constructor(private http: HttpClient) { }
  
  getCurrUser(){
    return this.http.get<User>(this.hostUrl + 'currUser/');
  }
  getUsers(){
    return this.http.get<User[]>(this.hostUrl + 'users/');
  }
}