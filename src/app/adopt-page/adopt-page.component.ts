import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../domain/entities/pet';
import { User } from '../domain/entities/user';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adopt-page',
  templateUrl: './adopt-page.component.html',
  styleUrls: ['./adopt-page.component.css']
})
export class AdoptPageComponent implements OnInit {

  user: User = new User;
  pet: Pet = new Pet;

  constructor(public userService: UserService, public petService: PetService, private actRoute: ActivatedRoute) { 
    this.pet.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.pet.userId)
    this.petService.getPetById(this.pet.id)
  }

}
