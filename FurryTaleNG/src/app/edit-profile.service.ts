import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { EditProfile } from './edit-profile';
import { Account } from './account';
import { User } from './user';
import { ConnectionURL } from './ConnectionURL';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  hostUrl:string = ConnectionURL.hostUrl;

  account: Account = {
    accountId : '',
    userId : '',
    accountType : 1,
    payment : 0
   };
  
  constructor(private http: HttpClient) { }
    
  editProfile(editProfileData: EditProfile, accountType: Number) {
    this.account.accountId = editProfileData.accountId;
    this.account.userId = editProfileData.userId;
    this.account.accountType = accountType;

    // console.log("Calling editAccountType endpoint using value:", this.account);
    this.editAccountType(this.account).subscribe(
      (result: any) => {
        console.log("Successfully updated AccountType:", result);
      },
      (error: any) => {
        console.log("Error updating accountType:", error); 
      }
    );
    
    console.log("Calling editUserProfile endpoint:", editProfileData);
    return this.http.put(this.hostUrl + 'user/updateUser/', editProfileData);
    console.log("After Calling editUserProfile endpoint");
  }

  getProfile(userId: String) {
    console.log("Fetching profile data for userId:", userId);
    return this.http.get<User>(this.hostUrl + 'oneUser?userId=' + userId);
  }  

  editAccountType(editAccountTypeData: Account) {
    console.log("Calling EditAccountType endpoint:", editAccountTypeData);
    return this.http.put(this.hostUrl + 'updateAccountType', editAccountTypeData);
    console.log("After Calling EditAccountType endpoint");
  }

  getAccountDetailUsingAccountId(userAccountId: String) {
    console.log("Fetching account data for userId:", userAccountId);
    return this.http.get<Account>(this.hostUrl + 'getAccountDetailUsingAccountId?accountId=' + userAccountId);
  }
}


