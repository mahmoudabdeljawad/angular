import { Component } from '@angular/core';
import { Users, UsersComponent } from '../users/users.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private service:AppService,private Usercomp:UsersComponent){
  }
  user:Users={
    ID:0,Name:"",Age:0,Email:"",Password:""
  } ;
  sendData(){
    this.service.AddUser(this.user).subscribe((res)=>{
      this.Usercomp.GetUser();
    })
    var x =document.getElementById("close12")?.click();
  }
}
