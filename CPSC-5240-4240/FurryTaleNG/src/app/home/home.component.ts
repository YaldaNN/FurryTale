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
      console.log('result' + JSON.stringify(result));
      this.posts = result;
      
    });

  }
}
