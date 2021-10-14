import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "https://localhost:5001/user"
  constructor( private httpClient: HttpClient) { }

  public list: User[] = [];
  public UserRequestModel: User = new User();

  getAllUsers(){
    // this.httpClient.get<User[]>(this.BASE_URL ).subscribe((data) =>{
    //   console.log(data);
    //   this.list = data;
    // })
  }
  getUser(id: number)
  {
    console.log(this.BASE_URL+ `/get-user-by-${id}` )
    return this.httpClient.get<User>(this.BASE_URL+ `/get-user-by-${id}`).subscribe((data) =>
    {
      this.UserRequestModel = data;
    })
  }

  postUser(){
    return this.httpClient.post(this.BASE_URL+`/create-user`, this.UserRequestModel).subscribe( () => {
      this.getAllUsers();
    });
  }

  updateUser(user:User){
    // return this.httpClient.put<User>(this.BASE_URL+ `/${user.Id}`, user).subscribe( () => {
    //   this.getAllUsers();
    // }); 
  }

  deleteUser(user: User){
    // return this.httpClient.delete<User>(this.BASE_URL+ `/${user.Id}`).subscribe( () => {
    //   this.getAllUsers();
    // })
  }
}


