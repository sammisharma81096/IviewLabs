import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    'userName': "",
    'password': ""
  }
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(){
    if(this.userService.checkCredential(this.user)){
      this.userService.setSession(this.user);
      this.router.navigate(['/users']);
    }
    else{
      alert("The username or password you entered is incorrect");
    }
    
  }

  signUp(){
    this.router.navigate(['/signup']);
  }

}
