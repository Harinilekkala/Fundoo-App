import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetNotesComponent } from './Components/Notes/getallnotes.component';
import { RemainderComponent } from './Components/remainder/remainder.component';
import { SigninComponent } from './Components/signin/signin.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ForgotpageComponent } from './forgotpage/forgotpage.component';
import { RegisterComponent } from './register/register.component';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { EditlabelComponent } from './Components/editlabel/editlabel.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'signin' ,component:SigninComponent},
  {path:'forgotpage' ,component:ForgotpageComponent},
  {path:'resetpage' ,component:ResetpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path : 'dashboard' ,component:DashboardComponent,canActivate:[AuthenticationGuard],
  

  children:[
    {path:'Notes',component:GetNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'remainder',component:RemainderComponent},
    {path:'editlabel',component:EditlabelComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
