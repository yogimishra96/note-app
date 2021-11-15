import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser( user : any) {
    let UserArray = [];
    if(localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }

    if(UserArray.email === user.email &&  UserArray.password === user.password) {
        return UserArray;
    }
  }
}
