import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReadPostService } from '../read-post.service';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

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
    private profileService: ProfileService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.userId = this.route.snapshot.paramMap.get('userId');
      this.postId = this.route.snapshot.paramMap.get('postId');

      if (this.userId !== null && this.postId !== null) {
        this.getPost(this.userId, this.postId);
        this.getProfileInfo(this.userId);
      }
    });
  }
  

  getPost(userId: string, postId: string): void {

    if (userId && postId) {

      this.readPostService.getOnePost(userId, postId).subscribe(
        (result: any) => {

          if(result.authentication !== undefined){
            this.router.navigateByUrl('/');
          }

          this.post = result;
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
