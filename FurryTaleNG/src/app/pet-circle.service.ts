import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetCircleService {
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  //hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  
  getCurrUser(){
    return this.http.get<User>(this.hostUrl + 'currUser/');
  }
  getUsers(){
    return this.http.get<User[]>(this.hostUrl + 'users/');
  }
}