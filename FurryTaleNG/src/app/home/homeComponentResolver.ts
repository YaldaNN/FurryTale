import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {
  constructor(private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    console.log(route.queryParams['userId'])
    const userId = route.queryParams['userId']
    this.homeService.getUser(userId).subscribe((res : any) => {
        console.log("res")
    })
  }
}