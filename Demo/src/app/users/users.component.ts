import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [{
    'id': 1
  }];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(!this.userService.getSession()){
      this.router.navigate(['/login']);
    }
  }

}
