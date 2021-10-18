import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/entities/user';
import { UserRequestModel } from '../domain/models/userModels/userRequestModel';
import { UserResponseModel } from '../domain/models/userModels/userResponseModel';
import { UserUpdateRequestModel } from '../domain/models/userModels/userUpdateRequestModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class UserService {

  BASE_URL = "https://localhost:5001/user"

  constructor( private httpClient: HttpClient, public jwtHelper : JwtHelperService, private router: Router) { }

  public listOfUserResponseModels: UserResponseModel[] = [];
  public userRequestModel: UserRequestModel = new UserRequestModel();
  public userResponseModel: UserResponseModel = new UserResponseModel();
  public userUpdateRequestModel: UserUpdateRequestModel = new UserUpdateRequestModel();

  getAllUsers(){
      this.httpClient.get<UserResponseModel[]>(this.BASE_URL+`/get-all-users`).subscribe((data) =>{
      this.listOfUserResponseModels = data;
    })
  }
  
  getUserById(userId: number)
  {
    return this.httpClient.get<UserResponseModel>(this.BASE_URL+ `/get-user-by-${userId}`).subscribe((data) =>{ 
      this.userResponseModel = data;
    })
  }

  postUser(){
    return this.httpClient.post(this.BASE_URL+`/create-user`, this.userRequestModel).subscribe( () => {
      this.getAllUsers();
    });
  }

  updateUser(userUpdateRequestModel: UserUpdateRequestModel){
    return this.httpClient.put(this.BASE_URL+ `/update-user`, userUpdateRequestModel).subscribe( () => {}); 
  }

  deleteUser(user: User){
    return this.httpClient.delete<User>(`/delete-user-by-${user.id}`).subscribe( () => {})
  }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwtToken");
    if (token == 'null' || this.jwtHelper.isTokenExpired(token?.toString())){
      return false;
    }
    else (token && !this.jwtHelper.isTokenExpired(token)); {
      return true;
    }
  }

  logOut() {
    localStorage.setItem("jwtToken", "null");
    localStorage.removeItem("loggedUserId"); 
  }

  goToLogin() {
    if ( this.isUserAuthenticated()){
      return true;
    }
    else{
      return this.router.navigate(['/user-login']);
    }
  }

}


