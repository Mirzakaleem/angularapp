import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  private registrations(): RegistrationModel[] {

    let registrations: RegistrationModel[] = [];
    let newReg: RegistrationModel = {
      id: 1,
      FirstName: "kaleem",
      LastName: "Mirza",
      Email: "kaleem@redbytes.in",
      Phone: "",
      regpwd: "",
      regconfirmpwd: "",
    };

    registrations.push(newReg);

    return registrations;
  }

  private logins(): Login[] {
    
    let logins: Login[] = [];
    let newLogin: Login = {
      id: 1,
      username: "kaleem",
      password: "Mirza",      
    };

    logins.push(newLogin);

    return logins;
  }

  createDb() {
    let registration =this.registrations();
    let login = this.logins();
    return {
      registration,
      login
    };
  }



}


export class RegistrationModel {
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  regpwd: string;
  regconfirmpwd: string;
};

export class Login {
  id: number;
  username: string;
  password: string;
}


