import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  errMsg: string = '';
  submitting: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.errMsg = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.authService
      .loginWithEmailAndPassword(this.form.value.email, this.form.value.password)
      .subscribe({
        next: (usr) => {
          this.submitting = false;
          if (!usr) {
            this.errMsg = 'Invalid email or password';
            return;
          }
          usr.token = 'fake-jwt-token-for-demo-purposes';
          localStorage.setItem('token', usr.token)
          this.authService.user = usr;
          console.log(usr)
          this.router.navigate(['/home'])
        },
        error: (err) => {
          this.submitting = false;
          console.error("Error submitting form", err);
        },
      })
  }
}
