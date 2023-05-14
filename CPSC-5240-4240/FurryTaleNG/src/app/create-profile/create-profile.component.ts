import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CreateProfile} from '../create-profile'
import {CreateProfileService} from '../create-profile.service'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private createprofileService: CreateProfileService) { }
  ngOnInit(): void {
    const dummy = this.createDummyData();
    this.createprofileService.createNewProfile(dummy).subscribe((result : any) =>
    {
      console.log("result is "+JSON.stringify(result));
      
    })
    
  }

  createDummyData() : CreateProfile{
    const dummy : any = {
      accountId : "String",
    userId : "String",
    accountType : 1,
    payment : 1,
    email : "String",
    userName : "String",
    userPassword : "String",
    tailers : [],
    tailee :[],
    about : "String",
    openToWork : false,
    verified : false,
    verificationBadgeId : "String",
    profilePicture : "String"
    };

    return dummy as CreateProfile;
  }

}
