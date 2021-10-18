import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

		debugger
		this.http
			.post(this.BASE_URL + '/create-photo', formData)
			.subscribe(data => {
				console.log(data)
			});
	}
}