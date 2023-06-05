import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReadPostService } from '../read-post.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  userId: string | null = null;
  postId: string | null = null;
  post: any;
  profileUserInfo: any;

  constructor(
    private route: ActivatedRoute,
    private readPostService: ReadPostService,
    private profileService: ProfileService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.userId = this.route.snapshot.paramMap.get('userId');
      this.postId = this.route.snapshot.paramMap.get('postId');
     // console.log()
      //this.userId = params['userId'];
      //this.postId = params['postId'];
      console.log(this.userId);
      console.log(this.postId);
      console.log("before if");
      if (this.userId !== null && this.postId !== null) {
        console.log("Came to iffff")
        this.getPost(this.userId, this.postId);
        this.getProfileInfo(this.userId);
      }
    });
  }
  

  getPost(userId: string, postId: string): void {
    console.log("before if in getPost")
    console.log(userId);
    console.log(postId);
    if (userId && postId) {
      console.log("inside if getPost");
      this.readPostService.getOnePost(userId, postId).subscribe(
        (response) => {
          this.post = response;
          console.log(this.post.caption)
          console.log("Hereeeeeeeeee")
        },
      );
    }
  }

  getProfileInfo(userId: string): void {
    this.profileService.getMyUser(userId).subscribe(
      (result: any) => {
        this.profileUserInfo = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
