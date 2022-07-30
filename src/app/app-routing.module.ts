import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [{
path:"Registration-Form",
component:RegistrationFormComponent,

},
{
    path: "",
    component: RegistrationFormComponent, 
    loadChildren: () => import("./registration-form/registration-form.module").then((m) => m.RegistrationFormModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
