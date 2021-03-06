import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pet } from 'src/app/domain/entities/pet';
import { User } from 'src/app/domain/entities/user';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet-menu',
  templateUrl: './pet-menu.component.html',
  styleUrls: ['./pet-menu.component.css']
})

export class PetMenuComponent implements OnInit {

  public user: User = new User()

  constructor(
    public petService: PetService, 
    public userService: UserService,
    private modalService: BsModalService
    ) { }

  modalRef?: BsModalRef;

  ngOnInit(): void {
    const loggedUserId = localStorage.getItem("loggedUserId");
    this.petService.getPetsByUserId(parseInt(loggedUserId!));
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
