import { UserService } from '../../services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(public userService: UserService, private modalService: BsModalService) { }

  modalRef?: BsModalRef;
  password1: string = "";

  ngOnInit(): void {}
  
  
  onSubmit(form : any, template: TemplateRef<any>){
    if(this.verifyPassword(this.password1, this.userService.UserRequestModel.password) == true)
      this.postUser(); 
      this.modalRef = this.modalService.show(template);
  }

  update(){
    this.userService.updateUser(this.userService.UserRequestModel);
  }

  getUser(){
    this.userService.getUser(this.userService.UserRequestModel.id);
  }

  postUser(){
    this.userService.postUser();
  }
  verifyPassword(pwd1: string, pwd2: string): boolean{
    if(pwd1 == pwd2){
      return true;
    }
    else{
      return false;
    }
  }
}

