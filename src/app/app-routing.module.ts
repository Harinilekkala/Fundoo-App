import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { ForgotpageComponent } from './forgotpage/forgotpage.component';
import { RegisterComponent } from './register/register.component';
import { ResetpageComponent } from './resetpage/resetpage.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'signin' ,component:SigninComponent},
  {path:'forgotpage' ,component:ForgotpageComponent},
  {path:'resetpage' ,component:ResetpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
