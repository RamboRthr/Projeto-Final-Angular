import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginRequestModel } from '../domain/models/userModels/userLoginRequestModel';
import { UserLoginResponseModel } from '../domain/models/userModels/userLoginResponseModel';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    BASE_URL = "https://localhost:5001/login"
    constructor(private httpClient: HttpClient) { }

    public formData: UserLoginRequestModel = new UserLoginRequestModel();

    login() {
        this.httpClient.post<UserLoginResponseModel>(this.BASE_URL + `/authenticate-user`, this.formData).subscribe((data) => {
            localStorage.setItem("jwtToken", data.token);
            localStorage.setItem("loggedUserId", data.userId);
            console.log(data);
        })
    }
    loginAfterRegistration(email: string, password: string){ 
        this.formData.email = email;
        this.formData.password = password;
        this.login();
    }
}