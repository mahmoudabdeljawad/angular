import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppNavComponent } from '../app-nav/app-nav.component';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { AppRoutingModule } from '../app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AddUserComponent} from '../add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DaialogContentComponent } from '../daialog-content/daialog-content.component';
import { DaialogComponent } from '../daialog/daialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
const module = [
  MatTableModule,HttpClientModule,RouterModule,AppRoutingModule,MatIconModule,CommonModule,BrowserModule,MatDialogModule
,FormsModule,MatButtonModule,MatInputModule,ReactiveFormsModule,CustomFormsModule,BrowserAnimationsModule
,
    RouterModule.forRoot([])
];    
const component = [
  AppNavComponent,HomeComponent,UsersComponent,FooterComponent,AddUserComponent,DaialogContentComponent
  ,DaialogComponent
];
@NgModule({
  declarations: [
    component
  ],
  imports: [
    module
  ],exports:[module,component]
  ,providers:[UsersComponent,DaialogComponent]
})
export class LinkModule { }
