import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Users } from './users/users.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  headers = new HttpHeaders()
  .set('Content-Type', 'application/json');
   requestOptions = { headers: this.headers };



Url:string="http://192.168.1.215";
  constructor(private http:HttpClient) { }
  GetUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.Url+"/api/Users");
  }
  RemoveUser(id:number){
    return this.http.post<number>(this.Url+"/Api/RemoveUser", id);
  }
  AddUser(User:Users):Observable<Users>{
    return this.http.post<Users>(this.Url+"/AddUser", User);
  }
  updateUser(users:Users){
    this.http.post(this.Url +"/Update",users).subscribe((res)=>{
      // console.log(res)
    })
  }
}
