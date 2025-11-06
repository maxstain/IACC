import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authServices/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loading = false;
  errorMessage = '';

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  usersNbr!: number;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usersNbr = this.authService.users.length;
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { username, email, password } = this.formGroup.value;

    const usr: User = {
      id: this.usersNbr + 1,
      username,
      email,
      password,
      role: 'user',
      token: '',
    } as User;

    this.authService.signInWithCredentials(usr).subscribe({
      next: (user) => {
        // Navigate to the home page or show a success message
        console.log('User signed in:', user);
        this.authService.users.push(user);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Failed to sign in. Please try again.';
        console.error(err);
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

}
