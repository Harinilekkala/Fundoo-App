import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './Components/signin/signin.component';
import { ForgotpageComponent } from './forgotpage/forgotpage.component';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GetNotesComponent } from './Components/Notes/getallnotes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { RemainderComponent } from './Components/remainder/remainder.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { IconsComponent } from './Components/icons/icons.component';
import { EditlabelComponent } from './Components/editlabel/editlabel.component';
import { UpdateComponent } from './Components/update/update.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { AuthguardserviceService } from './authguardservice.service';
import { DemoComponent } from './demo/demo.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    ForgotpageComponent,
    ResetpageComponent,
    DashboardComponent,
    GetNotesComponent,
    ArchiveComponent,
    TrashComponent,
    RemainderComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
    IconsComponent,
    EditlabelComponent,
    UpdateComponent,
    DemoComponent,
    
    
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule
    
    
  ],
  providers: [ AuthguardserviceService
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
