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
  othersProfileId : string | null = null;
  currentUserIdInSession : string | null = null;
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private createPostService : CreatePostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.othersProfileId = this.route.snapshot.paramMap.get('userId');

     console.log("other person's Id is "+this.othersProfileId)

     this.createPostService.getCurrentUser().subscribe((res : any) => {
      if(res.authentication !== undefined){
        this.router.navigateByUrl('/');
      }
     
      console.log("userId from angular create post is "+res.userId);
      this.currentUserIdInSession = res.userId;
      if(this.othersProfileId === this.currentUserIdInSession){
        console.log("same user");
      }
      else{
        console.log("diff user")
      }
    });
    });
  }


}
