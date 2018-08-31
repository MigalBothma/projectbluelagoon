import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { LandingComponent } from './landing/landing.component';
import {SportDivingComponent } from './sport-diving/sport-diving.component'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
  },
  {
  path: 'about',
  component: AboutComponent,
  pathMatch: 'full'
  },
  {
  path: 'sport-diving',
  component: SportDivingComponent,
  pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
