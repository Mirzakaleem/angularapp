import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from './registration-form.component';



@NgModule({
  declarations: [
    RegistrationFormComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistrationFormModule { }
