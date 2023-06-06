import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { PetCircleService } from '../pet-circle.service';
import { User } from '../user';

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

  tailClick(targetId: string) : void {
    console.log("clicked tail");
    this.petCircleService.addTail(this.currUser.userId, targetId).subscribe((res : any) => {
        console.log("successfully added tail");
        this.ngOnInit();
    })
  }

  unTailClick(targetId: string) : void {
    console.log("clicked untail");

    this.petCircleService.removeTail(this.currUser.userId, targetId).subscribe((res : any) => {
        console.log("successfully removed tail");
        this.ngOnInit();
    })
  }

  isTailing(target: User) : boolean {
    console.log("checking tailing");
    return this.currUser.tailee.includes(target.userId);
  }

}