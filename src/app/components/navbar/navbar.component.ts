import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() title: string = '';

  currentUser!: User;

  constructor(
    private userServices: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this.userServices.getCurrentUser()
  }

  get isLoggedIn(): boolean {
    return this.userServices.isLoggedIn();
  }
}
