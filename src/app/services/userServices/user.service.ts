import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../authServices/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currUser!: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): User {
    return this.authService.user;
  }
}
