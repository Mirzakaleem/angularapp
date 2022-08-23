import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';

const routes: Routes = [{
path:"Registration-Form",
component:RegistrationFormComponent,
loadChildren: () => import("./registration-form/registration-form.module").then((m) => m.RegistrationFormModule),

},

{
  path:"",
  component: RegistrationListComponent, 
  loadChildren: () => import("./registration-list/registration-list.module").then((m) => m.RegistrationListModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
