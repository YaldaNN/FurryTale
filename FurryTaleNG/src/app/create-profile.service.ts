import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { CreateProfile } from './create-profile';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {
  
  hostUrl:string = 'https://furrytale.azurewebsites.net/';
  
  constructor(private http: HttpClient) { }
  
  createNewProfile(createProfleData: CreateProfile){
    return this.http.post<CreateProfile>(this.hostUrl + 'account/', createProfleData);
  }

}
