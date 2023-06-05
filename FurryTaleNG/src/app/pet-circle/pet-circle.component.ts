import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { PetCircleService } from '../pet-circle.service';

@Component({
  selector: 'app-pet-circle',
  templateUrl: './pet-circle.component.html',
  styleUrls: ['./pet-circle.component.css'],
})

export class PetCircleComponent implements OnInit{
  currUser : any;
  users: any;
  userId = "";

  constructor(private route: ActivatedRoute, private router: Router, private petCircleService: PetCircleService) {}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // this.userId = params['userId'];
      this.petCircleService.getCurrUser().subscribe((result: any) =>
      {
        if(result.authentication !== undefined){
          this.router.navigateByUrl('/');
        }
        console.log('current user result' + JSON.stringify(result));
        this.currUser = result;
        this.userId = result.userId;
      });
    });

    this.petCircleService.getUsers().subscribe((result: any) =>
      {
        console.log('all users result' + JSON.stringify(result));
        this.users = result;
      });

  }
}