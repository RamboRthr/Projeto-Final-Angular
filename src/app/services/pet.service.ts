import { Pet } from './../domain/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = "https://localhost:5001/pet"
  constructor (private httpClient: HttpClient) { }

  public list: Pet[] =  [];
  public formData: Pet = new Pet()
  public isNew : boolean = false;

  getAllPets(){
    this.httpClient.get<any>(this.BASE_URL + `/get-all-pets`).subscribe((data) =>{
      console.log(data);
      this.list = data.$values as Pet[];
    });
  }

  getPet(id: number)
  {
    return this.httpClient.get<Pet>(this.BASE_URL+ `/get-pet-by-id${id}`).subscribe((data) =>
    {
      this.formData = data;
    })
  }

  postPet(){
    return this.httpClient.post(this.BASE_URL + `/create-pet`, this.formData).subscribe( () => {
      this.getAllPets();
    });
  }

  updatePet(pet: Pet){
    return this.httpClient.put<Pet>(this.BASE_URL+ `/update-pet${pet.id}`, pet).subscribe( () => {
      this.getAllPets();
    }); 
  }

  deletePet(pet:Pet){
    return this.httpClient.delete<Pet>(this.BASE_URL+ `/delete-pet-by-id${pet.id}`).subscribe( () => {
      this.getAllPets();
    })
  }
}
