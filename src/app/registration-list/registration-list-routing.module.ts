import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationListComponent } from './registration-list.component';
import { AuthGuard } from '../AuthGuard';

const routes: Routes = [ {
  path: "List",
  component: RegistrationListComponent,
  canActivate: [AuthGuard]
 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationListRoutingModule { }
