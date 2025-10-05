import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentModule } from 'src/app/models/apartment/apartment.module';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css'],
})
export class ApartmentCardComponent {
  @Input() apartment!: ApartmentModule;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  goToDetails() {
    this.router.navigate([`/apartment/${this.apartment.id}`]);
  }
}
