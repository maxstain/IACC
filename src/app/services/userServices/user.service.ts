import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currUser!: User;

  constructor(private http: HttpClient) {

  }

  getCurrentUser() {
    return this.currUser;
  }

  isLoggedIn(): boolean {
    // return !!localStorage.getItem('token');
    return true
  }
}
