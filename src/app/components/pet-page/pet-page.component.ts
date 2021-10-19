import { Component, OnInit } from '@angular/core';
import { PetResponseModel } from 'src/app/domain/models/petModels/petResponseModel';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit{

  constructor(public petService: PetService, public userService: UserService) { 
  }
  pet: PetResponseModel = new PetResponseModel;

  ngOnInit(): void {
    this.pet = this.petService.petResponseModel;
  }

  

}
