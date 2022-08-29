import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
path:"Registration-Form",
component:RegistrationFormComponent,
loadChildren: () => import("./registration-form/registration-form.module").then((m) => m.RegistrationFormModule),

},

{
  path:"Registration",
  component: LayoutComponent,canActivate:[AuthGuard],
  loadChildren: () => import("./registration-list/registration-list.module").then((m) => m.RegistrationListModule),
}

,

{
  path:"",
  component: LoginComponent, 
  loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
},
{
  path:"Login",
  component: LoginComponent, 
  loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
