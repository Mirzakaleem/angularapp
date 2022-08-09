import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){

    return {
      registration: [
        {
          id: 1,
          FirstName: 'kaleem',
          LastName: 'Mirza',
          Email: 'kaleem@redbytes.in',
          Phone:"",
          regpwd:"",
          regconfirmpwd:"",

        },
       
      ]
    };
  }
  }


  

