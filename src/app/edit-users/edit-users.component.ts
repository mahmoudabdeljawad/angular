import { Component,EventEmitter,Inject, Output } from '@angular/core';
import { Users } from '../users/users.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public User: Users,
  public dialogRef: MatDialogRef<EditUsersComponent>,private service:AppService,private Usc:UsersComponent) {
    this.user=User;
  }
  user!: Users;

  SendData(e:NgForm){
    if(e.valid){
       this.service.updateUser(this.user)
          }
  }
  onNoClick(){
   
  this.dialogRef.close()

  }
}
