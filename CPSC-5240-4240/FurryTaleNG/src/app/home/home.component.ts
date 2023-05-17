import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
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
  newComment : any;
  userId : any;
  placeholderText : any;
  constructor(private route: ActivatedRoute, private homeService: HomeService, private router: Router) 
  {
    
   }
  ngOnInit(): void {
    this.resetComment()
    
   
    this.route.queryParams.subscribe((params) =>{
      this.userId = params['userId'];
      
      this.setUserInfo(this.userId)
     
      
      this.newComment.commenterId = this.userId
    })

    
    this.homeService.getPosts().subscribe((result: any) => 
    {
      //this.assignCommenterUsernameToComment(result)
      this.posts = result;
      
    });
    
  }

  setUserInfo(userId : String) : void{
    
      this.homeService.getUser(userId).subscribe((res : any) => {
        this.userInfo = res;
        this.placeholderText = "start a new post, "+this.userInfo.userName+"!"
        console.log("seriously kill me")
        
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
          this.ngOnInit()
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
     
      this.ngOnInit();
    }
  }

  assignCommenterUsernameToComment(jsonObj : any){
    
    for(let i=0; i<jsonObj.length; i++){
     
      for(let j=0; j<jsonObj[i].commentAndUser.length; j++){
        console.log("start")
        console.log(jsonObj[i].postAndComment)
        console.log(jsonObj[i].commentAndUser)
        jsonObj[i].postAndComment[j].commenterName = jsonObj[i].commentAndUser[j].commenterName;
        jsonObj[i].postAndComment[j].profilePic = jsonObj[i].commentAndUser[j].profilePic

      }
  }
 
}

resetComment(){
  this.newComment = {
    commentId : "",
    postId: "",
    commenterId: "",
    comment: "",
    dateTime: "bla bla"
  }
}
}
