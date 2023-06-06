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

  addTail(tailerId: string, taileeId: string){
    const reqBody = {tailerId, taileeId};
    return this.http.put(this.hostUrl+"addTailer/", reqBody);
  }

  removeTail(tailerId: string, taileeId: string){
    const url = `${this.hostUrl}untail/?tailerId=${tailerId}&taileeId=${taileeId}`;
    return this.http.delete(url);
  }

  // checkTail(tailerId: string, taileeId: string){
  //   // const reqBody = {tailerId, taileeId};
  //   const url = `${this.hostUrl}isTailing?tailerId=${tailerId}&taileeId=${taileeId}`;
  //   return this.http.get<boolean>(url);
  // }

}