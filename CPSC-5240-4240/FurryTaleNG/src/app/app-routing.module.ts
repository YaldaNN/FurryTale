import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PetCircleComponent } from './pet-circle/pet-circle.component';
import {CreatePostComponent} from './create-post/create-post.component'
const routes: Routes = [
  { path: 'createProfile', component: CreateProfileComponent},
  { path: 'opportunities', component: OpportunitiesComponent},
  { path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent },
  { path: 'posts/:userId', component: ProfileComponent },
  { path: 'oneUsersPosts?', component: ProfileComponent },
  { path: 'oneUser?', component: ProfileComponent },
  { path: 'oneUserAchievement?', component: ProfileComponent },
  { path: 'petCircle/:userId', component: PetCircleComponent},
  {path: 'createPost', component: CreatePostComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
