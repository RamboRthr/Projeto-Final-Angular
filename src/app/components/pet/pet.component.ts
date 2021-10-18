import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Photo } from 'src/app/domain/entities/photo';
import { PetService } from 'src/app/services/pet.service';
import { PhotoUploadService } from 'src/app/services/photoUpload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  constructor(
    public petService: PetService,
    public userService: UserService,
    private photoUploadService: PhotoUploadService,
    private modalService: BsModalService
  ) { }

  modalRef?: BsModalRef;
  photoToUpload: Photo = new Photo;

  ngOnInit(): void {
    const loggedUserId = localStorage.getItem("loggedUserId");
    this.petService.petRequestModel.userId = parseInt(loggedUserId!);
  }

  onSubmit(form: any, template: TemplateRef<any>) {
    this.postPet();
    this.uploadFileToActivity()
    this.modalRef = this.modalService.show(template);
  }

  postPet() {
    this.petService.postPet();
  }

   handleFileInput(event: Event) {
     const element = event.currentTarget as HTMLInputElement;
     let files: FileList | null = element.files;
     this.photoToUpload.PhotoPath = files?.item(0)?.name as string;
     this.photoToUpload.PhotoContent = files?.item(0) as File;
     
     debugger
   }

  uploadFileToActivity() {
    this.photoUploadService.postFile(1, this.photoToUpload.PhotoContent);
  }
}
