import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  fb: FormBuilder = new FormBuilder()

  form: FormGroup = this.fb.group({});

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted:', this.form);
  }
}
