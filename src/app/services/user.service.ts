import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];

  constructor() {
    this.users = [
      {
        id:0,
        name: "Pepe",
        email:"pepe@hotmail.com",
        password:"1234",
        loggedIn:false
      },
      {
        id:1,
        name: "Fefa",
        email:"fefa@hotmail.com",
        password:"4567",
        loggedIn:false
      }
    ];
  }
}
