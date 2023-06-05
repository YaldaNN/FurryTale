import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  posts : any;
  accountType : any;
  openToWorkUsers : any;

  constructor(private route: ActivatedRoute, private router: Router, private opportunitiesService: OpportunitiesService) {}
  ngOnInit(): void {

    this.opportunitiesService.getPost().subscribe((result: any) =>
    {
      if(result.authentication !== undefined){
        this.router.navigateByUrl('/');
      }
      console.log('post result' + JSON.stringify(result));
      this.posts = result.posts;
    });

    this.opportunitiesService.getUserAccount().subscribe((result: any) => 
    {
      console.log('user account result' + JSON.stringify(result));
      this.accountType = result.accountType;
    });

    this.opportunitiesService.getOpenToWorkUsers().subscribe((result: any) =>
    {
      console.log('open to work result' + JSON.stringify(result));
      this.openToWorkUsers = result.users;
    })
  }

}
