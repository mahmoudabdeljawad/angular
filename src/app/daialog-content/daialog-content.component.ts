import { Component,EventEmitter,Inject ,OnInit, Output} from '@angular/core';
import { Users,UsersComponent } from '../users/users.component';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-daialog-content',
  templateUrl: './daialog-content.component.html',
  styleUrls: ['./daialog-content.component.css']
})

export class DaialogContentComponent  {
  @Output() userAdded = new EventEmitter<void>();

  user:Users={
    ID:0,Name:"",Age:0,Email:"",Password:''
  } ;
  constructor(private service:AppService,
    public dialogRef: MatDialogRef<DaialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users, private Uc:UsersComponent
  ) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  SendData(form:NgForm){
    if(form.valid){
     this.service.AddUser(this.user).subscribe((res)=>{
        this.dialogRef.close();
        this.userAdded.emit()
      });
    }else{
      // console.log(form)
    }
  }
}
