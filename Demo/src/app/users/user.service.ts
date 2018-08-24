import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getSession(){
    return localStorage.getItem('user');
  }

  setSession(user){
    localStorage.setItem('user',user);
  }
}
