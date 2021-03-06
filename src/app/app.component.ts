import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Final-Angular';

  constructor(public userService: UserService) { }

  onSubmit(form: any) {
    this.userService.logOut();
  }
}
