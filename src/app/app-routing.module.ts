import { ReportPageComponent } from '.././app/components/report-page/report-page.component'
import { AdoptPageComponent } from '.././app/components/adopt-page/adopt-page.component';
import { UserLoginComponent } from '.././app/components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '.././app/components/home/home.component';
import { UserComponent } from '.././app/components/user/user.component';
import { PetComponent } from '.././app/components/pet/pet.component';
import { UserMenuComponent } from '.././app/components/user-menu/user-menu.component';
import { PetPageComponent } from '.././app/components/pet-page/pet-page.component';
import { PetMenuComponent } from '.././app/components/pet-menu/pet-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'pet-page/:id', component: PetPageComponent },
  { path: 'adopt-page', component: AdoptPageComponent },
  { path: 'pet-menu', component: PetMenuComponent },
  { path: 'report-page/:id', component: ReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
