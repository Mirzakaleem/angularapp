import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  
  isLoading = false;
  regBasicDetails: FormGroup;
  constructor(private formbuilde:FormBuilder) { }
  
  ngOnInit() {
   
this.regBasicDetails=this.formbuilde.group({
  Id: ['0'],
  FirstName: ['', Validators.required],
  LastName:['',Validators.required],
  Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  Phone: ['', [Validators.required, Validators.minLength(10)]],
  regpwd: ['', [Validators.required, Validators.minLength(6)]],
  regconfirmpwd: ['', Validators.required]
}) 
   

  }

}
