import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private httpclient:HttpClient ) { }

  public getRegistrationDet(){ 
    return this.httpclient.get(this.SERVER_URL + 'registration');
}

  public getRegistratiobyID(Id){
    return this.httpclient.get(`${this.SERVER_URL + 'registration'}/${Id}`); 
}

public createRegistration(registration: {id: number, FirstName: string, LastName: string, Email: string, Phone: string,regpwd:string,regconfirmpwd:string}){
  console.log(registration);
  return this.httpclient.post(`${this.SERVER_URL + 'registration'}`, registration)
}

public deleteRegistration(Id){
  return this.httpclient.delete(`${this.SERVER_URL + 'registration'}/${Id}`)
}

public updateRegistration(registration: {id: number, amount: number, clientId: number, userId: number, description: string}){
  return this.httpclient.put(`${this.SERVER_URL + 'registration'}/${registration.id}`, registration)
}




}
