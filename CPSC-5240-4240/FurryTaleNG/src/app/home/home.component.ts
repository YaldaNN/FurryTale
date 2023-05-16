import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../home.service';
import { NgForm, FormsModule } from '@angular/forms';
import {Comment} from '../comment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts: any;
  userInfo: any;
  submitted = false;
  newComment : Comment = {
    commentId : "",
    postId: "",
    commenterId: "",
    comment: "",
    dateTime: "bla bla"
  }
  constructor(private route: ActivatedRoute, private homeService: HomeService) 
  {
    
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      console.log("printing params")
      const userId = params['userId'];
      console.log(userId)
      this.setUserInfo(userId)
      this.newComment.commenterId = userId
    })
    this.homeService.getPosts().subscribe((result: any) => 
    {
      
      //console.log('result' + JSON.stringify(result[0]));
      this.posts = result;
      
    });

  }

  setUserInfo(userId : String) : void{
      this.homeService.getUser(userId).subscribe((res : any) => {
        console.log("printing user info");
        this.userInfo = res;
        console.log(this.userInfo.profilePic)
      })
  }
  pawHandleClick(postId: String) : void {
    console.log("clicked paw");
    const pawObj : any = 
      {
        "postId" : postId,
        "pawerUserId" : "a7f2e0ed90ebeffd1f22afe15a18783b"
    }
    this.homeService.addPaw(pawObj).subscribe((res : any) => {
        console.log("yayyy");
        this.homeService.getPosts().subscribe((result: any) => 
    {
      
     // console.log('result' + JSON.stringify(result[0]));
      this.posts = result;
      
    });
    })
  }

  onSubmit(form: NgForm, postId : String) {
    console.log("came to onSubmit");
    console.log(postId)
    this.newComment.postId = postId;
    console.log(this.newComment)
    this.submitted = true;
    if (form.valid) {
      this.homeService.adComment(this.newComment).subscribe((res : any) => {
          console.log(res);
      })
      
    }
  }
}
