import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-adopt-page',
  templateUrl: './adopt-page.component.html',
  styleUrls: ['./adopt-page.component.css']
})
export class AdoptPageComponent {

  constructor(public petService: PetService) { 
    
  }
}
