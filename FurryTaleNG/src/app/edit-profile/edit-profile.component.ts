import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { EditProfile } from '../edit-profile';
import { EditProfileService } from '../edit-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  {
  selectedOption: string = '';

  profile: EditProfile = {
    _id: '',
    userName: '',
    about: '',
    openToWork: false,
    profilePic: '',
    accountId : '',
    userId : '',
    tailers : [],
    tailee :[],
    verified : false,
    verificationBadgeId : "String",
    ssoId : "",
  };
  
  submitted = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private editProfileService: EditProfileService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.profile.userId = params['userId'];
      console.log(this.profile.userId); // or use userId as needed
    });
  }
  
  onSubmit(form: NgForm) {
    console.log("came to editProfile onSubmit");
    this.submitted = true;
    if (form.valid) {
      console.log(this.profile);
      
      this.editProfileService.editProfile(this.profile).subscribe(
        (result: any) => {
          this.router.navigateByUrl('/updateUser?userId=' + result.userId);
          console.log("Successfully navigated");
        },
        (error: any) => {
          console.log("Error updating profile:", error); 
        }
      );
    }
  }
}