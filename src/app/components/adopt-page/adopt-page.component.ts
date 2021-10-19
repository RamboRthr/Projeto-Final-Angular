import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-adopt-page',
  templateUrl: './adopt-page.component.html',
  styleUrls: ['./adopt-page.component.css']
})
export class AdoptPageComponent implements OnInit {

  photoIndex: number = 0;

  constructor(public petService: PetService, private actRoute: ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.photoIndex = this.actRoute.snapshot.params.index
  }

}
