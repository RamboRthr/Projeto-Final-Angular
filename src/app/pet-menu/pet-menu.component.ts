import { Component, OnInit, TemplateRef } from '@angular/core';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../domain/entities/user';
import { Pet } from '../domain/entities/pet';
import { UserRequestModel } from '../domain/models/userModels/userRequestModel';
@Component({
  selector: 'app-pet-menu',
  templateUrl: './pet-menu.component.html',
  styleUrls: ['./pet-menu.component.css']
})
export class PetMenuComponent implements OnInit {

  public user: User = new User()

  constructor(public petService: PetService, public userService: UserService,

  private modalService: BsModalService) { }

  modalRef?: BsModalRef;
  message?: string;

  ngOnInit(): void {
    this.userService.getUserById(1)
    this.user = this.userService.user
    this.petService.getAllPets();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(pet: Pet): void {
    this.deletePet(pet)
    this.modalRef?.hide();
    this.refresh()
  }

  decline(): void {
    this.modalRef?.hide();
  }
  deletePet(pet: Pet) {
    this.petService.deletePet(pet)
  }
  refresh(): void {
    window.location.reload();
}
}
