import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(public userService: UserService, private modalService: BsModalService, private loginServe: LoginService) { }

  modalRef?: BsModalRef;

  ngOnInit(): void {}
  
  onSubmit(form : any, template: TemplateRef<any>){
      this.postUser(); 
      this.modalRef = this.modalService.show(template);
  }

  postUser(){
    this.userService.postUser();
    this.loginServe.loginAfterRegistration(this.userService.userRequestModel.email,this.userService.userRequestModel.password);
  }
}

