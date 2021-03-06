import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from '../../node_modules/ngx-bootstrap/dropdown';
import { TooltipModule } from '../../node_modules/ngx-bootstrap/tooltip';
import { ModalModule } from '../../node_modules/ngx-bootstrap/modal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { SpecialityDivingBasicNitrox } from './speciality-diving-basic-nitrox/speciality-diving-basic-nitrox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { directorService } from './services/director.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LandingComponent,
    SpecialityDivingBasicNitrox,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [directorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
