import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public user: User = new User()
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(6)
    this.user = this.userService.UserRequestModel
  }

  onSubmit(form: any) {
    this.update();
  }
  //PRECISA PEGAR O OBJETO DO USUARIO LOGADO
  update() {
    this.userService.updateUser(this.userService.UserRequestModel);
  }

  postUser() {
    this.userService.postUser();
  }
}

