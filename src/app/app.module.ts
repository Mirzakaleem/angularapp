import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormModule } from './registration-form/registration-form.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationListModule } from './registration-list/registration-list.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RegistrationFormModule,
    RegistrationListModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
