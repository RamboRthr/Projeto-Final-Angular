import { UserService } from '../services/user.service';
import { PetService } from './../services/pet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public petService: PetService, public userService: UserService) { }

  ngOnInit(): void {
    this.petService.getAllPets();
  }
  getUserById(id: number): void {
    this.userService.getUserById(id);
  }

  isUserAuthenticated() {
    this.userService.isUserAuthenticated();
  }

  logOut() {
    this.userService.logOut();
  }
}
