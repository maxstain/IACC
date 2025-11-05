import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css'],
})
export class ApartmentCardComponent {
  @Input() apartment!: Apartment;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  goToDetails() {
    this.router.navigate([`/apartment/${this.apartment.id}`]);
  }
}
