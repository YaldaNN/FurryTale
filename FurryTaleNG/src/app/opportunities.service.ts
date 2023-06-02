import { Injectable } from '@angular/core';
import { Post } from './posts';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  constructor(private http: HttpClient) { }
  
  getPost(){
    return this.http.get<Post[]>(this.hostUrl + 'posts/')
  }
}
