import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { CreatePostService } from './create-post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FurryTaleNG';
  showHeader = true;
  nameInProfile = "Profile"

  constructor(private route: ActivatedRoute, private createPostService: CreatePostService, private router: Router) 
  {
    
  }

  ngOnInit() {
    this.createPostService.getCurrentUser().subscribe((result: any) => 
    {
      
      if(result.authentication == undefined){
        console.log("----- PRINTING FROM ANGULAR app.component-----");
        console.log(result);
        this.nameInProfile = result.userName;
      }
      //this.assignCommenterUsernameToComment(result)
      
     
     
      
      
    });
  }
}
