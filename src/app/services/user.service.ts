import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/entities/user';
import { UserRequestModel } from '../domain/models/userModels/userRequestModel';
import { UserResponseModel } from '../domain/models/userModels/userResponseModel';
import { UserUpdateRequestModel } from '../domain/models/userModels/userUpdateRequestModel';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})

export class UserService {

  BASE_URL = "https://localhost:5001/user"
  constructor( private httpClient: HttpClient, public jwtHelper : JwtHelperService) { }

  public listOfUserResponseModels: UserResponseModel[] = [];
  public userRequestModel: UserRequestModel = new UserRequestModel();
  public userResponseModel: UserResponseModel = new UserResponseModel();
  public userUpdateRequestModel: UserUpdateRequestModel = new UserUpdateRequestModel();
  public user: User = new User();

  getAllUsers(){
      this.httpClient.get<UserResponseModel[]>(this.BASE_URL+`/get-all-users`).subscribe((data) =>{
      this.listOfUserResponseModels = data;
    })
  }

  getUserById(userId: number)
  {
    return this.httpClient.get<UserResponseModel>(this.BASE_URL+ `/get-user-by-${userId}`).subscribe((data) =>
    {
      this.user = data;
    })
  }

  postUser(){
    return this.httpClient.post(this.BASE_URL+`/create-user`, this.userRequestModel).subscribe( () => 
    {
      this.getAllUsers();
    });
  }

  updateUser(userUpdateRequestModel: UserUpdateRequestModel){
    // return this.httpClient.put(this.BASE_URL+ `/${user.Id}`, user).subscribe( () => {
    //   this.getAllUsers();
    // }); 
  }

  deleteUser(user: User){
    // return this.httpClient.delete<User>(this.BASE_URL+ `/${user.Id}`).subscribe( () => {
    //   this.getAllUsers();
    // })
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwtToken");

    if (token && this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
  logOut() {
    localStorage.removeItem("jwtToken");
  }

}


