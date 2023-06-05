import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService} from '../profile.service';
import { CreatePostService } from '../create-post.service';
@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.css']
})
export class OthersProfileComponent {
  othersProfileId : string = "";
  currentUserIdInSession : string | null = null;
  profileUserInfo : any;
  profileResult: any;
  achievementDetails : any;
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private createPostService : CreatePostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.othersProfileId = this.route.snapshot.paramMap.get('userId') || "";

     console.log("other person's Id is "+this.othersProfileId)

     this.createPostService.getCurrentUser().subscribe((res : any) => {
      if(res.authentication !== undefined){
        this.router.navigateByUrl('/');
      }
     
      console.log("userId from angular create post is "+res.userId);
      this.currentUserIdInSession = res.userId;
      if(this.othersProfileId === this.currentUserIdInSession){
        console.log("same user");
        this.router.navigateByUrl('/profile');
      }
      
    this.profileService.getMyUser(this.othersProfileId).subscribe((userResult: any) =>  
    {  
    console.log("MyUserData "+'result' + JSON.stringify(userResult));  
    this.profileUserInfo = userResult;
    }); 

    this.profileService.getMyPosts(this.othersProfileId).subscribe((postsResult: any) =>  
    {  
      console.log("MyUserPostData "+'result' + JSON.stringify(postsResult));  
      this.profileResult = postsResult.reverse();
    }); 

    this.profileService.getAchievement(this.othersProfileId).subscribe((achievementResult: any) =>  
    {  
      console.log("MyAchievement "+'result' + JSON.stringify(achievementResult));  
      this.achievementDetails = achievementResult;
    }); 

    });
    });
  }


}