import { Component, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
   
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{

  constructor( 
    public loginService: LoginService, 
    public userService: UserService,
    private modalService: BsModalService
    ) { }

  modalRef?: BsModalRef;

  onSubmit(form : any, template: TemplateRef<any>){
    this.loginService.login();
    this.modalRef = this.modalService.show(template);
  }
}
