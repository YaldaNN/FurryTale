// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Using to do FilterByPostType
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PetCircleComponent } from './pet-circle/pet-circle.component';

//Services
import { HomeService } from './home.service';
import { ProfileService } from './profile.service';
import { CreateProfileService } from './create-profile.service';
import { OpportunitiesService } from './opportunities.service';
import { PetCircleService } from './pet-circle.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePostService } from './create-post.service';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    OpportunitiesComponent,
    HomeComponent,
    ProfileComponent,
    PetCircleComponent,
    CreatePostComponent,
    LoginComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],  
  providers: [
    ProfileService, 
    HomeService, 
    CreateProfileService,
    OpportunitiesService,
    PetCircleService,
    CreatePostService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }