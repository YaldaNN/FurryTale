import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profileResult: any;
 profileUserInfo: any;
 constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

 ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
  // const userId = params['userId'];
 const userId="2c78a513a28f2bf1c680b505955a7bad";
  console.log(params);

    this.profileService.getMyPosts(userId).subscribe((result: any) =>  
  {  
    console.log("MyUserPostData "+'result' + JSON.stringify(result));  
    this.profileResult = result;
  }); 

  this.profileService.getMyUser(userId).subscribe((result: any) =>  
  {  
    console.log("MyUserData "+'result' + JSON.stringify(result));  
    this.profileUserInfo = result;
  }); 

});
}
}
