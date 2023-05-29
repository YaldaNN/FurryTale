import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PetCircleService } from '../pet-circle.service';

@Component({
  selector: 'app-pet-circle',
  templateUrl: './pet-circle.component.html',
  styleUrls: ['./pet-circle.component.css'],
})

export class PetCircleComponent implements OnInit{
  currUser : any;
  users: any;
  userId = "2c78a513a28f2bf1c680b505955a7bad";

  constructor(private route: ActivatedRoute, private petCircleService: PetCircleService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.userId = params['userId'];
      this.petCircleService.getUser(this.userId).subscribe((result: any) =>
      {
        console.log('result' + JSON.stringify(result));
        this.currUser = result;
      });
    });
    this.petCircleService.getUsers().subscribe((result: any) =>
      {
        console.log('result' + JSON.stringify(result));
        this.users = result;
      });
  }
}