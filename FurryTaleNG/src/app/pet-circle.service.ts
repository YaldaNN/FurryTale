import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetCircleService {
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  constructor(private http: HttpClient) { }
  
  getUser(userId: any){
    return this.http.get<User[]>(this.hostUrl + 'oneUser?userId=' + userId);
  }
  getUsers(){
    return this.http.get<User[]>(this.hostUrl + 'users/');
  }
}