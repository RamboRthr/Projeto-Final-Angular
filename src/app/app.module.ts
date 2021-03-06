import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PetService } from './services/pet.service';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { PetComponent } from './components/pet/pet.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { PetPageComponent } from './components/pet-page/pet-page.component';
import { AdoptPageComponent } from './components/adopt-page/adopt-page.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { PetMenuComponent } from './components/pet-menu/pet-menu.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export function tokenGetter() {
  return localStorage.getItem("jwtToken");
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    HomeComponent,
    UserLoginComponent,
    UserMenuComponent,
    PetPageComponent,
    AdoptPageComponent,
    ReportPageComponent,
    PetMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: UserLoginComponent},
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'pets', component: PetComponent, canActivate: [AuthGuard] },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains : ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [UserService, PetService, BsModalRef, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }