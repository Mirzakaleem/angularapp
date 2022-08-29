import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationListComponent } from './registration-list.component';
import { RegistrationListRoutingModule } from './registration-list-routing.module';




@NgModule({
  declarations: [RegistrationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    RegistrationListRoutingModule
  ]
})
export class RegistrationListModule { }
