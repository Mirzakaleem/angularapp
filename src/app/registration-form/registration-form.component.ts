import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { tick } from '@angular/core/testing';
import {FormControl,FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  isSumiited=false;
  formarry:any []=[];
  formarry1:any []=[];
  
   arrayObj : any ;
   objectData : any;
  registrationDetails=new FormGroup({
    id:new FormControl(1),
    FirstName:new FormControl('',[Validators.required]),
    LastName:new FormControl('',[Validators.required]),
    Email:  new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    Phone:new FormControl('',[Validators.required,Validators.min(10)]),
    regpwd:new FormControl('',[Validators.required,Validators.min(6)]),
    regconfirmpwd:new FormControl('',[Validators.required]),

  })


  get registerForm() { return this.registrationDetails.controls; }

 
  constructor() { }
  
  ngOnInit() {
    console.log("this get record"+ this.formarry.findIndex(x=>x.id==1));
    this.isSumiited=false;
    //this.getdata();

  }

  getdata()
  {
    debugger;


    this.formarry=JSON.parse( localStorage.getItem("formdata"));
     for (let index = 0; index < this.formarry.length; index++) {
         this.arrayObj= JSON.parse( this.formarry[index]);
         if(this.arrayObj.id==2)
         this.registrationDetails.setValue(this.arrayObj);
         
         if(this.objectData)
         console.log('Json Object Data by ID ==> ', this.objectData);
       }
     

    
    console.log("this get record"+  this.formarry[0]);
  }

 

  onSubmit(){
    this.isSumiited=true;
    if(this.registrationDetails.valid)
    {

       
      debugger;

      let data=JSON.parse( localStorage.getItem("formdata"));
      if(data)
      {
        this.formarry=JSON.parse( localStorage.getItem("formdata"));
        let ids=this.formarry.length+1;
        this.registrationDetails.controls.id.setValue( ids);
        this.formarry.push(JSON.stringify(this.registrationDetails.value));
        localStorage.setItem("formdata",JSON.stringify( this.formarry));

      }else
      {


      this.formarry.push(JSON.stringify(this.registrationDetails.value));
      localStorage.setItem("formdata",JSON.stringify( this.formarry));
   
      }
      
      this.registrationDetails.reset();
      this.isSumiited=false;
      alert("Registration");
    
    }
    

  }
}
