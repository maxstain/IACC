import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  submitted = false;

  contactInfo = {
    phone: '+21652640818',
    email: 'firaschabchoub@gmail.com',
  };

  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/firas-chabchoub-123456789/',
    github: 'github.com/maxstain',
    twitter: 'https://twitter.com/firas_chabchoub',
  };

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted:', this.form);
  }
}
