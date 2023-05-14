import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< Updated upstream
import {HomeService} from './home.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { ProfileService } from './profile.service';
import {HttpClientModule} from '@angular/common/http';

>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    OpportunitiesComponent,
    CreateProfileComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
<<<<<<< Updated upstream
    
  ],
  providers: [HomeService],
=======
  ],
  providers: [ProfileService],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
