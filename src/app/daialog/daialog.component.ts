import { Component, EventEmitter, Output } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DaialogContentComponent } from '../daialog-content/daialog-content.component';
import { UsersComponent } from '../users/users.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-daialog',
  templateUrl: './daialog.component.html',
  styleUrls: ['./daialog.component.css']
})
export class DaialogComponent {
  @Output() customEvent = new EventEmitter<any>();
   constructor(public dialog: MatDialog,private usercomp:UsersComponent) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DaialogContentComponent, {
      width:'500px',height:'500px'
    });
    dialogRef.componentInstance.userAdded.subscribe(() => {
      this.customEvent.emit(this.usercomp.GetUser());
    });
  }


}
