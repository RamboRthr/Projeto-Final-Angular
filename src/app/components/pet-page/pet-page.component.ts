import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetResponseModel } from 'src/app/domain/models/petModels/petResponseModel';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit{

  constructor(public petService: PetService, public userService: UserService, private actRoute: ActivatedRoute) { 
  }
  pet: PetResponseModel = new PetResponseModel;
  photoIndex: number = 0;

  ngOnInit(): void {
    this.pet = this.petService.petResponseModel;
    this.photoIndex = this.actRoute.snapshot.params.index
  }

  

}
