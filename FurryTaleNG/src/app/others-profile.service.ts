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

    const url = `${this.hostUrl}isTailing/?tailerId=${tailerId}&taileeId=${taileeId}`;

    return this.http.delete(url);

  }


  checkTail(tailerId: string, taileeId: string){

    console.log("checking if tailing")

    const url = `${this.hostUrl}isTailing/?tailerId=${tailerId}&taileeId=${taileeId}`;
    return this.http.get<JSON>(url);

  }
  
}
