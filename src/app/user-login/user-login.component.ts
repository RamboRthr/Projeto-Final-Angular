import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
   
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserService, public loginService: LoginService) { }

  form_email: string = "";
  form_password: string = "";

  ngOnInit(): void {
    this.userService.getAllUsers()
  }
  onSubmit(form : any){
    this.loginService.login();
  }
}
