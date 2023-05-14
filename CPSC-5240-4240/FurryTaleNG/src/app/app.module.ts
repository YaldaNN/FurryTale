import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {HomeService} from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';
import { CreateProfileService } from './create-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    OpportunitiesComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],  
  providers: [ProfileService, HomeService, CreateProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }