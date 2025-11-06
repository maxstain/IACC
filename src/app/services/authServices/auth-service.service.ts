import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = ''
  baseUrl: string = 'http://localhost:3000/users'
  user!: User
  users: User[] = []

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token') ?? ""
  }

  isLoggedIn() {
    return !!this.token;
  }

  loginWithEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.baseUrl).pipe(
      tap((usr) => {
        usr.token = ''
        this.user = usr
      }),
      catchError((err) => {
        console.error("An error occured while trying to login!", err)
        return of()
      }),
    );
  }

  signInWithCredentials(user: Omit<User, 'id'>): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.baseUrl, user, { headers }).pipe(
      tap((created) => {
        this.users = [...this.users, created]
      }),
      catchError((err) => {
        console.error("Error creating an account", err)
        return of()
      })
    );
  }
}
