import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DonateComponent } from './component/donate/donate.component';
import { UserComponent } from './component/user/user.component';
import { PetComponent } from './component/pet/pet.component';
import { ReportPageComponent } from './component/report-page/report-page.component';
import { PetMenuComponent } from './component/pet-menu/pet-menu.component';
import { AdoptPageComponent } from './component/adopt-page/adopt-page.component';
import { PetPageComponent } from './component/pet-page/pet-page.component';
import { UserMenuComponent } from './component/user-menu/user-menu.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'pet-page/:id', component: PetPageComponent },
  { path: 'adopt-page/:id', component: AdoptPageComponent },
  { path: 'pet-menu', component: PetMenuComponent },
  { path: 'report-page/:id', component: ReportPageComponent },
  {path: 'donate' , component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
