import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { CreateProfile } from './create-profile';
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {
  
  hostUrl:string = ConnectionURL.hostUrl;
  
  constructor(private http: HttpClient) { }
  
  createNewProfile(createProfleData: CreateProfile){
    return this.http.post<CreateProfile>(this.hostUrl + 'account/', createProfleData);
  }

}
