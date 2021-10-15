import { Component, OnInit } from '@angular/core';
import { User } from '../domain/entities/user';
import { UserRequestModel } from '../domain/models/userModels/userRequestModel';
import { UserResponseModel } from '../domain/models/userModels/userResponseModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public userRequestModel: UserRequestModel = new UserRequestModel()
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(6)
    this.userRequestModel = this.userService.userRequestModel
  }

  onSubmit(form: any) {
  }

  // update() {
  //   this.userService.updateUser(this.userService.userUpdateRequestModel);
  // }

  postUser() {
    this.userService.postUser();
  }
}

