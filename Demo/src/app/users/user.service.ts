import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getSession(){
    return localStorage.getItem('user');
  }

  setSession(user){
    localStorage.setItem('user',user);
  }

  deleteSession(){
    localStorage.setItem('user',"");
  }
  
  public getUserJSON() {
    // commentted code because Without RestAPi We can't save data so data management is being through webstorage
    // return this.http.get('/assets/user-data.json'); 
    return JSON.parse(localStorage.getItem("users"))
  }

  public addUser(user){
    let users = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  checkCredential(user){
    let users = JSON.parse(localStorage.getItem("users"));
    return users?users.filter(userObj => userObj.email==user.userName && userObj.password ===user.password)[0]:false;
  }

}