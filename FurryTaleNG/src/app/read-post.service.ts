import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Post } from './posts';
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})
export class ReadPostService {

  hostUrl:string = ConnectionURL.hostUrl;

  constructor(private http: HttpClient) {}

  getOnePost(userId: string, postId: string) {
    return this.http.get(`${this.hostUrl}onePost?userId=${userId}&postId=${postId}`);
  }

}
