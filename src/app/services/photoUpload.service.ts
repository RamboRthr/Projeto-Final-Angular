import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../domain/entities/photo';
import { PhotoRequestModel } from '../domain/models/photoModels/photoRequestModel';

@Injectable({ providedIn: 'root' })

export class PhotoUploadService {

	BASE_URL = "https://localhost:5001/photo"

	constructor(private http: HttpClient) { }
	public photoRequestModel: PhotoRequestModel = new PhotoRequestModel();

	postFile(petId: number, photoFile: File): void {

		var formData: FormData = new FormData;
		formData.append('file', photoFile, photoFile.name)
		formData.append('Id', petId.toString())

		this.photoRequestModel.petId = petId;
		this.photoRequestModel.photoFile = photoFile;

		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		}
		debugger
		this.http.post(this.BASE_URL + '/create-photo',
		{	
			method: 'post',
			data: photoFile, petId,       
            headers: {
                      'Content-Type': 'application/json'
                      }      
		  }).subscribe(data => {
			console.log(data)	
		});
	}
}