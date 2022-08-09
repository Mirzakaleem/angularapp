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
}
