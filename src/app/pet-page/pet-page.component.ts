import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../domain/entities/pet';
import { UserResponseModel } from '../domain/models/userModels/userResponseModel';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit {

  pet: Pet = new Pet;

  constructor(public petService: PetService, public userService: UserService, private actRoute: ActivatedRoute) { 
    this.pet.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.petService.getPetById(this.pet.id);
  }
}
