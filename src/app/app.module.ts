import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormModule } from './registration-form/registration-form.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { RegistrationListModule } from './registration-list/registration-list.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RegistrationFormModule,
    RegistrationListModule,
    InMemoryWebApiModule.forRoot(DataService),
    LoginModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
