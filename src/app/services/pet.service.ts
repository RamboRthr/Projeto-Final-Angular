 import { Pet } from './../domain/entities/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetResponseModel } from '../domain/models/petModels/petResponseModel';
import { PetRequestModel } from '../domain/models/petModels/petRequestModel';
import { PetUpdateRequestModel } from '../domain/models/petModels/petUpdateRequestModel';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = "https://localhost:5001/pet"
  constructor (private httpClient: HttpClient) { }

  public listOfPetResponseModels: PetResponseModel[] =  [];
  public petRequestModel: PetRequestModel = new PetRequestModel();
  public petResponseModel: PetResponseModel = new PetResponseModel();
  public petUpdateRequestModel: PetUpdateRequestModel = new PetUpdateRequestModel();
  public pet: Pet = new Pet();

  getAllPets(){
    this.httpClient.get<PetResponseModel[]>(this.BASE_URL + `/get-all-pets`).subscribe((data) =>{
      this.listOfPetResponseModels = data;
    });
  }

  getPetById(petId: number)
  {
    return this.httpClient.get<PetResponseModel>(this.BASE_URL+ `/get-pet-by-${petId}`).subscribe((data) =>
    {
      console.log(data);
      this.petResponseModel = data;
    })
  }
  
  postPet(){
    return this.httpClient.post(this.BASE_URL+ `/create-pet`, this.petRequestModel).subscribe( () => {
      this.getAllPets();
    });
  }

  updatePet(pet: Pet){
    // return this.httpClient.put<Pet>(this.BASE_URL+ `/${pet.id}`, pet).subscribe( () => {
    //   this.getAllPets();
    // }); 
  }

  deletePet(pet:Pet){
    // return this.httpClient.delete<Pet>(this.BASE_URL+ `/${pet.id}`).subscribe( () => {
    //   this.getAllPets();
    // })
  }
}
