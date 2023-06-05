import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Post } from './posts';


@Injectable({
  providedIn: 'root'
})
export class ReadPostService {

//hostUrl:string = 'http://localhost:8080/';
 hostUrl:string = 'https://furrytale.azurewebsites.net/';

  constructor(private http: HttpClient) {}

  getOnePost(userId: string, postId: string) {
    return this.http.get(`${this.hostUrl}onePost?userId=${userId}&postId=${postId}`);
  }

}
