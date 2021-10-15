import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pet } from '../../domain/pet';
import { PetService } from '../../services/pet.service';
import { UserService } from '../../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../domain/user';
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
    this.userService.getUser(1)
    this.user = this.userService.UserRequestModel
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