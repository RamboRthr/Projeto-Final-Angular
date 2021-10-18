import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/domain/entities/pet';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

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
