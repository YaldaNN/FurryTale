import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})
export class OthersProfileService {
  hostUrl:string = ConnectionURL.hostUrl;
  
  constructor(private http: HttpClient) { }

  addTail(tailerId: string, taileeId: string){

    const reqBody = {tailerId, taileeId};

    return this.http.put(this.hostUrl+"addTailer/", reqBody);

  }




  removeTail(tailerId: string, taileeId: string){

    const reqBody = {tailerId, taileeId};

    return this.http.put(this.hostUrl+"unTail/", reqBody);

  }


  checkTail(tailerId: string, taileeId: string){

    const reqBody = {tailerId, taileeId};

    const url = `${this.hostUrl}isTailing?tailerId=${taileeId}&taileeId=${taileeId}`;
    return this.http.get<JSON>(url);

  }
  
}