import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loggedUser:Subject<user> =new Subject<user>()
  constructor() { }
  setLoggedUser(User:user){
    this.loggedUser.next(User)
  }
  getLoggedUser(){
    return this.loggedUser.asObservable();
  }
  getToken():string{
    return localStorage.getItem("token")??""
  }
  setToken(token:string){
    localStorage.setItem("token",token)
  }
  logout(){
    localStorage.removeItem("token")
    this.setLoggedUser(new user())
  }
}
export class user{
  id:number= 0;
  name:string = "";
  email:string = "";
  password:string= "";
  city:string= "";
  address:string= "";
  gender:string= "";
  phone:string= "";
  img:string= "";
  role:string= "";
}