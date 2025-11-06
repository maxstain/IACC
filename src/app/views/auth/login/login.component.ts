import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  fb: FormBuilder = new FormBuilder()
  form: FormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.maxLength(20)],
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
        next: (_) => {
          this.submitting = false;
          this.router.navigate(['/home'])
        },
        error: (err) => {
          this.submitting = false;
          console.error("Error submitting form", err);
        },
      })
  }
}
