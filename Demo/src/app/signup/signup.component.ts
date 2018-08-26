import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {
    "id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "phone":"",
    "gender": "male"
  };
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/login']);
  }

  signUp(){
    this.user.id = Math.floor(100000000 + Math.random() * 900000000);
    this.userService.addUser(this.user);
    this.router.navigate(['/login']);
  }

}
