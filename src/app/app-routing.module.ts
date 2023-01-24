import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './asincrona/error/error.component';
import { LoginComponent } from './asincrona/login/login.component';
import { ProfileComponent } from './asincrona/profile/profile.component';
import { CanactivateGuard } from './canactivate.guard';
const routes: Routes = [
  {path:'',redirectTo:'profile',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'profile',component: ProfileComponent,canActivate: [CanactivateGuard]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
