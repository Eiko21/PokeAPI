import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail:string = "";
  userPassword:string = "";
  users:User[];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
