import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/domain/entities/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(public userService: UserService,
    private bsModalRef: BsModalRef,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    const loggedUserId = localStorage.getItem("loggedUserId");
    this.userService.getUserById(parseInt(loggedUserId!));
  }

  modalRef?: BsModalRef;

  update() {
    this.userService.updateUser(this.userService.userResponseModel);  
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(userId: number): void {
    this.deleteUser(userId)
    this.modalRef?.hide();
    this.userService.logOut();
    this.refresh()
  }
  
  decline(): void {
    this.modalRef?.hide();
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  refresh(): void {
    window.location.reload();
}
}
