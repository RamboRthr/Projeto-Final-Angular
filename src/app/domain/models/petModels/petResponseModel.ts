import { PhotoResponseModel } from "../photoModels/photoResponseModel";
import { UserResponseModel } from "../userModels/userResponseModel";

export class PetResponseModel {
    user: UserResponseModel = new UserResponseModel();
    photo: PhotoResponseModel = new PhotoResponseModel();
    id: number = 0;
    name: string = ""; 
    userId: number = 0;
    specie: string = ""; 
    breed: string = ""; 
    ageYears: string = ""; 
    ageMonths: string = "";
    size: string = ""; 
    description: string = "";
}