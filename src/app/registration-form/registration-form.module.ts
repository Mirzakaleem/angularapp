import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from './registration-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegistrationFormComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class RegistrationFormModule { }
