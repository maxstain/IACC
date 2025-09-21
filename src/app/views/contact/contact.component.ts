import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  submitted = false;

  contactInfo = {
    phone: '+216 52640818',
    email: 'firaschabchoub@gmail.com',
  };

  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/firas-chabchoub-123456789/',
    github: 'github.com/maxstain',
    twitter: 'https://twitter.com/firas_chabchoub',
  };

  contactForm: FormData = new FormData();

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted:', this.contactForm);
  }
}
