import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSumiited=false;
  loginDetails=this.Formbuilder.group({
    UserName:['',[Validators.required]],
    Password:['',[Validators.required]],

  })
  get loginForm() { return this.loginDetails.controls; }
  constructor(private Formbuilder:FormBuilder,private router: Router ) { }

  ngOnInit(): void {
  }

  

  onSubmit(){
    debugger;
    this.isSumiited=true;
    if(this.loginDetails.valid)
    {
      debugger;
        if(this.loginDetails.controls.UserName.value=="Admin" && this.loginDetails.controls.Password.value=="Admin")
        {
          localStorage.setItem("isUserLoggedIn","true");
          this.router.navigate(["/Registration/List"]);

        }
    }


  }

}
