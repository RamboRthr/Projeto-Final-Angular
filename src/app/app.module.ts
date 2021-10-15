import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PetService } from './services/pet.service';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DemoDropdownAnimatedComponent } from './btn-dropdown/btn-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PetPageComponent } from './pet-page/pet-page.component';
import { AdoptPageComponent } from './adopt-page/adopt-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PetMenuComponent } from './pet-menu/pet-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth-guard.service';

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
    DemoDropdownAnimatedComponent,
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
