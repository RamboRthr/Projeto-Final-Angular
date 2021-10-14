import { Pet } from './../domain/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = "https://localhost:5001/pet"
  constructor (private httpClient: HttpClient) { }

  public listPet: Pet[] =  [];
  public petRequestModel: Pet = new Pet()
  public isNew : boolean = false;

  getAllPets(){
    this.httpClient.get<any>(this.BASE_URL + `/get-all-pets`).subscribe((data) =>{
      console.log(data);
      this.listPet = data.$values as Pet[];
    });
  }

  getPet(id: number)
  {
    return this.httpClient.get<Pet>(this.BASE_URL+ `/${id}`).subscribe((data) =>
    {
      this.petRequestModel = data;
    })
  }
  
  postPet(){
    return this.httpClient.post(this.BASE_URL+ `/create-pet`, this.petRequestModel).subscribe( () => {
      this.getAllPets();
    });
  }

  updatePet(pet: Pet){
    return this.httpClient.put<Pet>(this.BASE_URL+ `/${pet.id}`, pet).subscribe( () => {
      this.getAllPets();
    }); 
  }

  deletePet(pet:Pet){
    return this.httpClient.delete<Pet>(this.BASE_URL+ `/${pet.id}`).subscribe( () => {
      this.getAllPets();
    })
  }
}
