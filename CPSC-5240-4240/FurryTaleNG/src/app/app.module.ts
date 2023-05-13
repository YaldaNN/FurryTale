import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// services
import { OpportunitiesService } from './opportunities.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    OpportunitiesComponent,
    CreateProfileComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OpportunitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
