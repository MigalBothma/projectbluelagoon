import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { LandingComponent } from './landing/landing.component';
import { SpecialityDivingBasicNitrox } from './speciality-diving-basic-nitrox/speciality-diving-basic-nitrox.component';

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
  path: 'speciality-diving-basic-nitrox',
  component: SpecialityDivingBasicNitrox,
  pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
