import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AppService } from '../app.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { MatDialogRef,  } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private service:AppService,public dialog: MatDialog){
  }
  ngOnInit(): void {
    this.GetUser()
  }
  refreshUsers() {
    
    this.GetUser();
  }
  GetUser(){
  
    this.service.GetUser().subscribe(
      (res)=>{
      this.users=res
    },  (error) => {
      console.error(error);
    }
    );
  }
  RemoveUser(id:number){
    this.service.RemoveUser(id).subscribe((res)=>{
      this.GetUser()
    });}
    EditUsers(id:number){
      var Us=this.users.find(x=>x.ID==id)
     const dialogRef= this.dialog.open(EditUsersComponent,{data:Us,width:"400px",height:"400px"})

     dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
          this.refreshUsers()
       
      });
    }
   
    
users:Users[]=[];
  displayedColumns: string[] = ['Name', 'Email', 'Age', 'Password'];
   
}
export interface Users {
  ID:number
  Name: string;
  Email: string;
  Age: number;
  Password: string;
}