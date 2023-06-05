import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PetCircleComponent } from './pet-circle/pet-circle.component';
import {CreatePostComponent} from './create-post/create-post.component'
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { OthersProfileComponent } from './others-profile/others-profile.component';

const routes: Routes = [
  { path: 'createProfile', component: CreateProfileComponent},
  { path: 'opportunities', component: OpportunitiesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'posts/:userId', component: ProfileComponent },
  { path: 'oneUsersPosts?', component: ProfileComponent },
  { path: 'oneUser?', component: ProfileComponent },
  { path: 'oneUserAchievement?', component: ProfileComponent },
  { path: 'petCircle', component: PetCircleComponent},
  { path: 'createPost', component: CreatePostComponent},
  { path: 'login', component:LoginComponent},
  { path:'', component:LoginComponent},
  { path: 'editProfile', component: EditProfileComponent},
  { path: 'readPost/:userId/:postId', component: ReadPostComponent },
  { path: 'othersProfile/:userId/', component: OthersProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
