import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profileResult: any;
 constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

 ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
  const userId = params['userId'];
  console.log(params);
    this.profileService.getMyPosts(userId).subscribe((result: any) =>  
  {  
    console.log('result' + JSON.stringify(result));  
    this.profileResult = result;
  }); 
});
}
}
