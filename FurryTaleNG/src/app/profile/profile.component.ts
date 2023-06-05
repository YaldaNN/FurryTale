import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profileResult: any;
 profileUserInfo: any;
 achievementDetails : any;
 userId = "";
 constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router,) {}

 ngOnInit(): void {

  // const userId = params['userId'];
  //this.userId="2c78a513a28f2bf1c680b505955a7bad";
  //console.log(params);

  this.profileService.getUserIdCurrSession().subscribe((result : any) => {
    if(result.authentication !== undefined){
      this.router.navigateByUrl('/');
    }
    console.log("got back result. it is ")
    console.log(result)
    this.userId = result.userId;
    console.log("userID in profile page is "+this.userId);

    this.profileService.getMyUser(this.userId).subscribe((userResult: any) =>  
    {  
    console.log("MyUserData "+'result' + JSON.stringify(userResult));  
    this.profileUserInfo = userResult;
    }); 

    this.profileService.getMyPosts(this.userId).subscribe((postsResult: any) =>  
  {  
    console.log("MyUserPostData "+'result' + JSON.stringify(postsResult));  
    this.profileResult = postsResult.reverse();
  }); 

  this.profileService.getAchievement(this.userId).subscribe((achievementResult: any) =>  
  {  
    console.log("MyAchievement "+'result' + JSON.stringify(achievementResult));  
    this.achievementDetails = achievementResult;
  });   

  })
  //console.log("printing userID from profile page in angular "+this.userId)
  


}

editProfile(){
  this.router.navigateByUrl('/editProfile?userId='+this.userId);
} 

}