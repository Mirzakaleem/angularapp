import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { tick } from '@angular/core/testing';
import {FormControl,FormGroup,Validators,FormBuilder  } from '@angular/forms';
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
  registrationDetails=this.Formbuilder.group({
    id:1,
    FirstName:['',[Validators.required]],
    LastName:['',[Validators.required]],
    Email:  ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Phone:[null,[Validators.required,Validators.minLength(10)]],
    regpwd:[null,[Validators.required,Validators.minLength(6)]],
    regconfirmpwd:['',[Validators.required]],

  })


  get registerForm() { return this.registrationDetails.controls; }

 
  constructor(private Formbuilder:FormBuilder) { }
  
  ngOnInit() {
    console.log("this get record"+ this.formarry.findIndex(x=>x.id==1));
    this.isSumiited=false;
   // this.getdata();

  }

  getdata()
  {
    debugger;


    this.formarry=JSON.parse( localStorage.getItem("formdata"));
     for (let index = 0; index < this.formarry.length; index++) {
         this.arrayObj=  this.formarry[index];
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
        this.formarry.push(this.registrationDetails.value);
        localStorage.setItem("formdata",JSON.stringify( this.formarry));

      }else
      {


      this.formarry.push(this.registrationDetails.value);
      localStorage.setItem("formdata",JSON.stringify( this.formarry));
   
      }
      
      this.registrationDetails.reset();
      this.isSumiited=false;
      alert("Registration");
    
    }
    

  }
}
