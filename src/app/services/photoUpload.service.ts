import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../domain/entities/photo';

@Injectable({providedIn: 'root'})

export class PhotoUploadService {

	BASE_URL = "https://localhost:5001/photo"

	constructor(private http: HttpClient) { }

	postFile(photoToUpload: Photo): void {
			
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		  }
		 this.http.post(this.BASE_URL, photoToUpload, httpOptions).subscribe(data => {
			console.log(data)
		});
	}
}