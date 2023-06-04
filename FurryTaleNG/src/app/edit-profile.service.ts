import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { EditProfile } from './edit-profile';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  // hostUrl:string = 'https://furrytale.azurewebsites.net/';
  hostUrl:string = 'http://localhost:8080/';
  
  constructor(private http: HttpClient) { }
    
  editProfile(editProfileData: EditProfile) {
    console.log("Calling editUserProfile endpoint:", editProfileData);
    return this.http.put(this.hostUrl + 'user/updateUser/', editProfileData);
    console.log("After Calling editUserProfile endpoint");
  }
}
