import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateProfileService } from '../create-profile.service';
import { CreateProfile } from '../create-profile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})

export class CreateProfileComponent {
  selectedOption: string = '';

  profile: CreateProfile = {
    userName: '',
    email: '',
    accountType: 0,
    about: '',
    openToWork: false,
    profilePic: '',
    accountId : '',
    userId : '',
    payment : 0,
    userPassword : '',
    tailers : [],
    tailee :[],
    verified : false,
    verificationBadgeId : "String",
  };
  submitted = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private createprofileService: CreateProfileService, private router: Router) { }

  onSubmit(form: NgForm) {
    console.log("came to onSubmit");
    this.submitted = true;
    if (form.valid) {
      console.log(this.profile);
      this.createprofileService.createNewProfile(this.profile).subscribe((result : any) => {
      })
      this.router.navigateByUrl('/');
    }
  }
}


/**
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
 */