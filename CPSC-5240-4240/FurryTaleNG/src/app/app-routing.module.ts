import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'createProfile', component: CreateProfileComponent},
  { path: 'opportunities', component: OpportunitiesComponent},
  { path: 'home', component: HomeComponent}



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
