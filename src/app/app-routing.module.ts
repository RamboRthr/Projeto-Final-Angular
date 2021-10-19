import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { UserComponent } from './components/user/user.component';
import { PetComponent } from './components/pet/pet.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { PetMenuComponent } from './components/pet-menu/pet-menu.component';
import { AdoptPageComponent } from './components/adopt-page/adopt-page.component';
import { PetPageComponent } from './components/pet-page/pet-page.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'pet-page', component: PetPageComponent },
  { path: 'adopt-page', component: AdoptPageComponent },
  { path: 'pet-menu', component: PetMenuComponent },
  { path: 'report-page/:id', component: ReportPageComponent },
  {path: 'donate' , component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
