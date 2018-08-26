import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userist: any[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(!this.userService.getSession()){
      this.router.navigate(['/login']);
    }
    this.userist = this.userService.getUserJSON();
    // this.userService.getUserJSON().subscribe(
    //   response => {
    //     this.userist = response['users'];
    //   }
    // );
  }

  logOut(){
    this.userService.deleteSession();
    this.router.navigate(['/login']);
  }

}
