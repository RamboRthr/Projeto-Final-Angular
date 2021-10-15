import { UserService } from './services/user.service';
import { PetService } from './services/pet.service';
import { Component } from '@angular/core';
import { User } from './domain/entities/user';
import { Pet } from './domain/entities/pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Final-Angular';
  user: User[] = [];
  pet: Pet[] = [];

  loggedUsers: User[] = [];

  constructor(private userServise: UserService, private petServise: PetService) {}
  
  ngOnInit(): void{
    this.userServise.getAllUsers
  }
}
