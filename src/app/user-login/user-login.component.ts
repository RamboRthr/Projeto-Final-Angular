import { UserService } from '../services/user.service';
import { Pet } from './../domain/pet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserService, private routerService: Router) { }

  form_email: string = "";
  form_password: string = "";

  ngOnInit(): void {
    this.userService.getAllUsers()
  }
  
}
