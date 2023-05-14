import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts: any;
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }
  ngOnInit(): void {
    
    this.homeService.getPosts().subscribe((result: any) => 
    {
      
      console.log('result' + JSON.stringify(result[0]));
      this.posts = result;
      
    });

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
      
      console.log('result' + JSON.stringify(result[0]));
      this.posts = result;
      
    });
    })
  }
}
