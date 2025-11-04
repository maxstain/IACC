import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() title: string = '';
  userServices: UserService = new UserService();

  get isLoggedIn(): boolean {
    return this.userServices.isLoggedIn();
  }
}
