import { UserService } from '../services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(public userService: UserService, private modalService: BsModalService) { }

  modalRef?: BsModalRef;

  ngOnInit(): void {}
  
  onSubmit(form : any, template: TemplateRef<any>){
      this.postUser(); 
      this.modalRef = this.modalService.show(template);
  }

  postUser(){
    this.userService.postUser();
  }
}

