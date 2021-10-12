import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../domain/photo';
import { Form } from '@angular/forms';
@Injectable({
	providedIn: 'root'
})
export class PhotoUploadService {

	// API url
	baseApiUrl = "https://localhost:5001/photo"

	constructor(private http: HttpClient) { }
    public list: Photo[] = [];

	
	
	getPhoto(id: number)
	{
	  return this.http.get<Photo[]>(this.baseApiUrl+ `/get-photos-by-pet-id${id}`).subscribe((data) =>
	  {
		this.list = data;
	  })
	}

	// postPhoto(petId: number, form: FormData){
	// 	return this.http.post(this.baseApiUrl + `/create-photo`, petId, form).subscribe((data) => {
	// 	  this.getPhoto(petId);
	// 	});
	//   }

	deletePhoto(id: number, petId: number) {
		return this.http.get<Photo[]>(this.baseApiUrl+ `/delete-pet-by-id${id}`).subscribe( () => {
		  this.getPhoto(petId);
		})
	  }

}