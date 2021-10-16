import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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

  onSubmit(form: any, template: TemplateRef<any>) {
    this.update();
    this.modalRef = this.modalService.show(template);
  }

  update() {
    this.userService.updateUser(this.userService.userResponseModel);
  }
}
